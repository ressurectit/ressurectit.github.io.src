import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncDataLoaderOptions, BasicPagingOptions, DataResponse, GridOptions, MatrixGridModule, providePagingOptions, SimpleOrdering} from '@anglr/grid';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {Address, DataService} from '../../../services/api/data';

/**
 * Configuration sample for grid component
 */
@Component(
{
    selector: 'configuration-sample',
    templateUrl: 'configurationSample.component.html',
    imports:
    [
        MatrixGridModule,
    ],
    providers:
    [
        DataService,
        providePagingOptions<BasicPagingOptions>(
        {
            itemsPerPageValues: [4, 8, 16],
            initialItemsPerPage: 8,
        }),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    protected gridOptions: RecursivePartial<GridOptions>;

    /**
     * Grid options that are used for grid initialization
     */
    protected gridOptions2: RecursivePartial<GridOptions>;

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

        this.gridOptions2 =
        {
            plugins:
            {
                ...this.gridOptions.plugins,
                paging:
                {
                    options: <BasicPagingOptions>
                    {
                        //available values for items per page buttons
                        itemsPerPageValues: [5, 10, 20],
                        //initial value of items per page, should be one of above
                        initialItemsPerPage: 5,
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
