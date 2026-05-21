import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncDataLoaderOptions, DataResponse, GridOptions, MatrixGridModule, SimpleOrdering} from '@anglr/grid';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {Address, DataService} from '../../../services/api/data';
import {AddressContentCellTemplateDirective} from '../../../directives';

/**
 * Strongly Typed sample for grid component
 */
@Component(
{
    selector: 'strongly-typed-sample',
    templateUrl: 'stronglyTypedSample.component.html',
    imports:
    [
        MatrixGridModule,
        AddressContentCellTemplateDirective,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StronglyTypedSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    protected gridOptions: RecursivePartial<GridOptions>;

    //######################### constructor #########################
    constructor(private _dataSvc: DataService)
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
            },
        };
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
