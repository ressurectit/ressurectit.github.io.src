import {Component, ChangeDetectionStrategy} from "@angular/core";
import {GridOptions, SimpleOrdering, BasicPagingOptions, AsyncDataLoaderOptions, DataResponse} from "@anglr/grid";

import {Address, DataService} from "../../../services/api/data";
import {Orderable} from "../../../misc/types";

/**
 * Basic sample for grid component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
    providers: [DataService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    public gridOptions: GridOptions;

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
                        dataCallback: this._getData.bind(this)
                    }
                },
                paging:
                {
                    options: <BasicPagingOptions>
                    {
                        //available values for items per page buttons
                        itemsPerPageValues: [5, 10, 20],
                        //initial value of items per page, should be one of above
                        initialItemsPerPage: 5
                    }
                }
            }
        };
    }

    //######################### private methods #########################

    /**
     * Callback used for obtaining data
     * @param page Index of requested page
     * @param itemsPerPage Number of items per page
     * @param ordering Order by column name
     */
    private async _getData(page: number, itemsPerPage: number, ordering: SimpleOrdering): Promise<DataResponse<Address>>
    {
        let reqOrdering: Orderable = null;

        if(ordering)
        {
            reqOrdering = 
            {
                direction: ordering.orderByDirection,
                sort: ordering.orderBy
            };
        }

        let result = await this._dataSvc
            .getData({
                        page: page,
                        size: itemsPerPage
                    },
                    reqOrdering)
            .toPromise();

        return {
            data: result.content,
            totalCount: result.totalElements
        };
    }
}