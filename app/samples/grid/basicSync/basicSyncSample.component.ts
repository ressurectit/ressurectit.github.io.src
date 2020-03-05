import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {GridOptions, SyncDataLoaderComponent, SyncDataLoaderOptions, SimpleOrdering, BasicPagingOptions} from "@anglr/grid";
import {getValue, OrderByDirection} from "@jscrpt/common";

import {Address} from "../../../services/api/data";

interface RouteData
{
    data: Address[];
}

/**
 * Basic synchronous sample for grid component
 */
@Component(
{
    selector: 'basic-sync-sample',
    templateUrl: 'basicSyncSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSyncSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    public gridOptions: GridOptions;

    //######################### constructor #########################
    constructor(private _route: ActivatedRoute)
    {
        let data = (this._route.snapshot.data as RouteData).data;

        this.gridOptions =
        {
            plugins:
            {
                dataLoader:
                {
                    //use sync data loader as grid data loader plugin
                    type: SyncDataLoaderComponent,
                    options: <SyncDataLoaderOptions<Address, SimpleOrdering>>
                    {
                        //all data used in data loader
                        data: data,
                        //custom ordering, does not have to be specified, defaults to function that orders using string ordering
                        orderData: (data: any[], ordering: SimpleOrdering) =>
                        {
                            if(!ordering)
                            {
                                return data;
                            }

                            return data.sort((a, b) =>
                            {
                                let aValue = getValue(a, ordering.orderBy);
                                let bValue = getValue(b, ordering.orderBy);
                                let aValueNum = +aValue;
                                let bValueNum = +bValue;

                                if(!isNaN(aValueNum) && !isNaN(bValueNum))
                                {
                                    aValue = aValueNum;
                                    bValue = bValueNum;
                                }

                                if(aValue < bValue)
                                {
                                    return ordering.orderByDirection == OrderByDirection.Ascendant ? -1 : 1;
                                }
                                else if(aValue > bValue)
                                {
                                    return ordering.orderByDirection == OrderByDirection.Ascendant ? 1 : -1;
                                }
                    
                                return 0;
                            });
                        }
                    }
                },
                paging:
                {
                    options: <BasicPagingOptions>
                    {
                        //available values for items per page buttons
                        itemsPerPageValues: [15, 30, 60],
                        //initial value of items per page, should be one of above
                        initialItemsPerPage: 15
                    }
                }
            }
        };
    }
}