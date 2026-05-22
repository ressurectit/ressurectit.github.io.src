import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncDataLoaderOptions, DataResponse, GridOptions, MatrixGridModule, SimpleOrdering} from '@anglr/grid';
import {UpDownCaretIconComponent} from '@anglr/animations';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {AddressDetail, DataService} from '../../../services/api/data';

/**
 * Detail View sample for grid component
 */
@Component(
{
    selector: 'detail-view-sample',
    templateUrl: 'detailViewSample.component.html',
    imports:
    [
        MatrixGridModule,
        UpDownCaretIconComponent,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewSampleComponent
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
                    options: <AsyncDataLoaderOptions<AddressDetail, SimpleOrdering>>
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
    private async _getData(page: number, itemsPerPage: number, ordering: SimpleOrdering): Promise<DataResponse<AddressDetail>>
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
