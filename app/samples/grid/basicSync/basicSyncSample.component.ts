import {Component, ChangeDetectionStrategy} from '@angular/core';
import {GridOptions, SimpleOrdering, BasicPagingOptions, SyncDataLoaderOptions, SyncDataLoaderComponent, MatrixGridModule, GridDataDirective} from '@anglr/grid';
import {RecursivePartial, OrderByDirection} from '@jscrpt/common';

import {Address} from '../../../services/api/data';

/**
 * Static data used in sync grid sample
 */
const DATA: Address[] =
[
    {
        country: 'Australia',
        city: 'Sydney',
        zip: '2000',
        street: 'George Street',
        houseNumber: '1',
    },
    {
        country: 'Brazil',
        city: 'São Paulo',
        zip: '01310-100',
        street: 'Paulista Avenue',
        houseNumber: '1',
    },
    {
        country: 'France',
        city: 'Paris',
        zip: '75001',
        street: 'Rue de Rivoli',
        houseNumber: '1',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        zip: '10115',
        street: 'Unter den Linden',
        houseNumber: '1',
    },
    {
        country: 'Japan',
        city: 'Tokyo',
        zip: '100-0001',
        street: 'Chiyoda',
        houseNumber: '1',
    },
    {
        country: 'Netherlands',
        city: 'Amsterdam',
        zip: '1012 JS',
        street: 'Damrak',
        houseNumber: '1',
    },
    {
        country: 'Spain',
        city: 'Madrid',
        zip: '28013',
        street: 'Gran Via',
        houseNumber: '1',
    },
    {
        country: 'UK',
        city: 'London',
        zip: 'SW1A 1AA',
        street: 'Buckingham Gate',
        houseNumber: '1',
    },
    {
        country: 'USA',
        city: 'New York',
        zip: '10001',
        street: 'Broadway',
        houseNumber: '1',
    },
];

/**
 * Grid sync sample that uses sync data loader with static data
 */
@Component(
{
    selector: 'basic-sync-sample',
    templateUrl: 'basicSyncSample.component.html',
    imports:
    [
        MatrixGridModule,
        GridDataDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSyncSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    protected readonly gridOptions: RecursivePartial<GridOptions>;

    /**
     * Data used as source for grid
     */
    protected readonly data = DATA;

    //######################### constructor #########################
    constructor()
    {
        this.gridOptions =
        {
            plugins:
            {
                dataLoader:
                {
                    type: SyncDataLoaderComponent,
                    options: <SyncDataLoaderOptions<Address, SimpleOrdering>>
                    {
                        data: DATA,
                        orderData: (data, ordering) =>
                        {
                            if(!ordering)
                            {
                                return data;
                            }

                            return data.sort((a, b) =>
                            {
                                const aValue = String((a as Record<string, unknown>)[ordering.orderBy] ?? '');
                                const bValue = String((b as Record<string, unknown>)[ordering.orderBy] ?? '');

                                if(ordering.orderByDirection === OrderByDirection.Ascending)
                                {
                                    return aValue.localeCompare(bValue);
                                }

                                return bValue.localeCompare(aValue);
                            });
                        },
                    },
                },
                paging:
                {
                    options: <BasicPagingOptions>
                    {
                        itemsPerPageValues: [5, 10, 20],
                        initialItemsPerPage: 5,
                    },
                },
            },
        };
    }
}
