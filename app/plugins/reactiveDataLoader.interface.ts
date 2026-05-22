import {DataLoaderOptions, DataResponse, GridPluginInstances} from '@anglr/grid';
import {PromiseOr} from '@jscrpt/common';

/**
 * Reactive data loader options
 */
export interface ReactiveDataLoaderOptions<TData = unknown, TOrdering = unknown> extends DataLoaderOptions
{
    /**
     * Indication whether paging and ordering are applied locally on obtained data, or they are applied on source side.
     */
    localPagingAndOrdering: boolean;

    /**
     * Method used for ordering data, used only when localPagingAndOrdering is true.
     */
    orderData: (data: TData[], ordering: TOrdering|undefined|null) => TData[];

    /**
     * Function that is used for obtaining data for grid. Runs in reactive context, so you can use signals in it. Use it together with ordering and paging plugins to get the current ordering and paging state.
     */
    data: (grid: GridPluginInstances) => PromiseOr<DataResponse<TData>>;
}
