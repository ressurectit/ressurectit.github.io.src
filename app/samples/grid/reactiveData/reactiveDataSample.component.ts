import {Component, ChangeDetectionStrategy} from '@angular/core';
import {GridOptions, MatrixGridModule, Ordering, SimpleOrdering} from '@anglr/grid';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {Address, DataService} from '../../../services/api/data';
import {ReactiveDataLoaderComponent} from '../../../plugins/reactiveDataLoader.component';
import {ReactiveDataLoaderOptions} from '../../../plugins/reactiveDataLoader.interface';

/**
 * Reactive Data sample for grid component
 */
@Component(
{
    selector: 'reactive-data-sample',
    templateUrl: 'reactiveDataSample.component.html',
    imports:
    [
        MatrixGridModule,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveDataSampleComponent
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
                    type: ReactiveDataLoaderComponent,
                    options: <ReactiveDataLoaderOptions<Address, SimpleOrdering>>
                    {
                        data: async plugins =>
                        {
                            const paging = plugins.paging;
                            const ordering = plugins.ordering as Ordering<SimpleOrdering>;

                            const result = await lastValueFrom(this._dataSvc.getData({
                                                                                         page: paging.page() ?? 1,
                                                                                         size: paging.itemsPerPage() ?? 15,
                                                                                     },
                                                                                     ordering.ordering()));

                            return {
                                data: result?.content ?? [],
                                totalCount: result?.totalElements ?? 0,
                            };
                        },
                    },
                },
            },
        };
    }
}
