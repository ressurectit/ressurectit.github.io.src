import {Component, ChangeDetectionStrategy, WritableSignal, signal, Signal, viewChild, effect, Injector} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {AsyncDataLoaderOptions, BasicRowSelectorComponent, BasicRowSelectorOptions, DataResponse, Grid, GridOptions, GridPluginType, MatrixGridModule, RowSelector, SimpleOrdering} from '@anglr/grid';
import {areSelectedAllOnPage, invalidateContent, isSelectedAny, selectAllOnPage} from '@anglr/grid/extensions';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {Address, Citizen, DataService} from '../../../services/api/data';
import {GetRowSelector} from '../../../pipes';

/**
 * Row Selection sample for grid component
 */
@Component(
{
    selector: 'row-selection-sample',
    templateUrl: 'rowSelectionSample.component.html',
    imports:
    [
        JsonPipe,
        GetRowSelector,
        MatrixGridModule,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowSelectionSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    protected gridOptions: RecursivePartial<GridOptions>;

    /**
     * Indication whether are all selected
     */
    protected selectedAll: WritableSignal<boolean> = signal(false);

    /**
     * Indication whether is any item selected
     */
    protected selectedAny: WritableSignal<boolean> = signal(false);

    //######################### protected properties - children #########################

    /**
     * Instance of grid component
     */
    public grid: Signal<Grid> = viewChild.required('grid');

    //######################### constructor #########################
    constructor(private _dataSvc: DataService,
                injector: Injector,)
    {
        this.gridOptions =
        {
            plugins:
            {
                dataLoader:
                {
                    options: <AsyncDataLoaderOptions<Address, SimpleOrdering>>
                    {
                        //data callback used for getting data asynchronously
                        dataCallback: this._getData.bind(this),
                    },
                },
                rowSelector:
                {
                    type: BasicRowSelectorComponent,
                    options: <BasicRowSelectorOptions<Citizen, Address, string>>
                    {
                        getRowData: this.getRowData,
                        getRowId: this.getRowId,
                    },
                },
            },
        };

        effect(() =>
        {
            this.grid().initialized.subscribe(initialized =>
            {
                if(!initialized)
                {
                    return;
                }

                effect(() =>
                {
                    const rowSelector = this.grid().getPlugin<RowSelector<Citizen, Address, string>>(GridPluginType.RowSelector);
                    rowSelector.selectedIds();

                    this.setSelectedFlags();
                }, {injector});
            });
        });
    }

    //######################### protected methods - template bindings #########################

    /**
     * Toggles all selected rows
     * @param {boolean} value Indication whether select all rows or deselect all
     */
    protected toggleAllSelected(value: boolean): void
    {
        this.grid().execute(selectAllOnPage(value),
                            invalidateContent());
    }

    //######################### protected methods #########################

    /**
     * Method used for setting flags indication selection
     */
    protected setSelectedFlags(): void
    {
        this.selectedAny.set(this.grid().executeAndReturn(isSelectedAny()));
        this.selectedAll.set(this.grid().executeAndReturn(areSelectedAllOnPage()));
    }

    /**
     * @inheritdoc
     */
    protected getRowId(data: Address): string
    {
        return data.id ?? 'MISSING ID!';
    }

    /**
     * Gets selected data for row
     * @param data - Data of row
     */
    protected getRowData(data: Address): Citizen
    {
        return data.citizen ?? {};
    }

    //######################### private methods #########################

    /**
     * Callback used for obtaining data
     * @param page - Index of requested page
     * @param itemsPerPage - Number of items per page
     * @param ordering - Order by column name
     */
    private async _getData(page: number, itemsPerPage: number, ordering: SimpleOrdering): Promise<DataResponse<Address>>
    {
        const result = await lastValueFrom(this._dataSvc.getData({
                                                                     page: page,
                                                                     size: itemsPerPage,
                                                                 },
                                                                 ordering));

        return {
            data: result?.content ?? [],
            totalCount: result?.totalElements ?? 0,
        };
    }
}
