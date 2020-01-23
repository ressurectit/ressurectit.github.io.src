import {Component, ChangeDetectionStrategy} from "@angular/core";
import {GridOptions, SyncDataLoaderComponent, SyncDataLoaderOptions, SimpleOrdering, BasicPagingOptions} from "@anglr/grid";
import {getValue, OrderByDirection} from "@jscrpt/common";

export interface Address
{
    country?: string;
    city?: string;
    zip?: string;
    street?: string;
    houseNumber?: string;
}

/**
 * Basic sample for grid component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
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
    constructor()
    {
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
                        data: 
                        [
                            {
                                country: "Slovakia",
                                city: "Banská Bystrica",
                                zip: "97401",
                                street: "Janka Chalupku",
                                houseNumber: "3"
                            },
                            {
                                country: "Slovakia",
                                city: "Bratislava",
                                zip: "82109",
                                street: "Trenčianska",
                                houseNumber: "56/A"
                            },
                            {
                                country: "Slovakia",
                                city: "Košice",
                                zip: "04011",
                                street: "Werferova",
                                houseNumber: "1"
                            }
                        ],
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