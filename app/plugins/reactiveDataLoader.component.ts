import {Component, ChangeDetectionStrategy, Signal, ElementRef, inject, Inject, Optional, untracked, WritableSignal, signal, computed, effect} from '@angular/core';
import {DATA_LOADER_OPTIONS, DataLoader, DataLoaderState, DataResponse, GRID_PLUGIN_INSTANCES, GridPluginInstances, Ordering} from '@anglr/grid';
import {PromiseOr, RecursivePartial} from '@jscrpt/common';
import {deepCopyWithArrayOverride} from '@jscrpt/common/lodash';

import {ReactiveDataLoaderOptions} from './reactiveDataLoader.interface';

/**
 * Default options for reactive data loader
 */
const defaultOptions: ReactiveDataLoaderOptions =
{
    autoLoadData: true,
    accumulateData: false,
    debounceDataCallback: 30,
    localPagingAndOrdering: false,
    orderData: (data: unknown[]) => data,
    data: () => new Promise<DataResponse<unknown>>(() => {return {data: [], totalCount: 0};}),
};

/**
 * Data loader that allows asynchronous data loading
 */
@Component(
{
    selector: 'ng-async-data-loader',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveDataLoaderComponent<TData = unknown, TOrdering = unknown> implements DataLoader<DataResponse<TData>, ReactiveDataLoaderOptions<TData, TOrdering>>
{
    //######################### protected fields #########################

    /**
     * Used for forced loading of data
     */
    protected forceDataLoad: WritableSignal<boolean> = signal(false);

    /**
     * Instance of options
     */
    protected optionsValue: WritableSignal<ReactiveDataLoaderOptions<TData, TOrdering>>;

    /**
     * Instance of state value signal
     */
    protected stateValue: WritableSignal<DataLoaderState> = signal(DataLoaderState.NotLoadedYet);

    /**
     * Signal storing current data result of data loader
     */
    protected dataResult: WritableSignal<DataResponse<TData>> = signal({data: [], totalCount: 0});

    //######################### public properties - implementation of DataLoader #########################

    /**
     * @inheritdoc
     */
    public result: Signal<DataResponse<TData>> = computed(() => this.dataResult());

    /**
     * @inheritdoc
     */
    public get state(): Signal<DataLoaderState>
    {
        return this.stateValue.asReadonly();
    }

    //######################### public properties - implementation of GridPlugin #########################

    /**
     * @inheritdoc
     */
    public gridPlugins: GridPluginInstances|null|undefined = inject(GRID_PLUGIN_INSTANCES, {optional: true});

    /**
     * @inheritdoc
     */
    public pluginElement: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

    /**
     * @inheritdoc
     */
    public get options(): ReactiveDataLoaderOptions<TData, TOrdering>
    {
        return this.optionsValue();
    }
    public set options(value: ReactiveDataLoaderOptions<TData, TOrdering>)
    {
        this.optionsValue.set(deepCopyWithArrayOverride({}, untracked(() => this.optionsValue()), value));
    }

    //######################### constructor #########################
    constructor(@Inject(DATA_LOADER_OPTIONS) @Optional() options?: RecursivePartial<ReactiveDataLoaderOptions<TData, TOrdering>>|null,)
    {
        this.optionsValue = signal(deepCopyWithArrayOverride(defaultOptions as ReactiveDataLoaderOptions<TData, TOrdering>,
                                                             options));

        effect(async () =>
        {
            if(!this.gridPlugins)
            {
                throw new Error('ReactiveDataLoaderComponent: plugin requires grid plugins to work');
            }

            this.forceDataLoad();
            const options = this.options;
            let page: number|undefined|null;
            let itemsPerPage: number|undefined|null;
            let order: TOrdering|undefined|null;

            if(options.localPagingAndOrdering)
            {
                const paging = this.gridPlugins?.paging;
                const ordering = this.gridPlugins?.ordering as Ordering<TOrdering>|undefined;

                page = paging?.page();
                itemsPerPage = paging?.itemsPerPage();
                order = ordering?.ordering();
            }

            const currentData = untracked(() => this.dataResult());
            this.stateValue.set(currentData.data.length ? DataLoaderState.DataLoading : DataLoaderState.NoDataLoading);

            const result = await options.data(this.gridPlugins);

            this.stateValue.set((result.data.length) ? DataLoaderState.Loaded : DataLoaderState.NoData);

            if(options.localPagingAndOrdering)
            {
                result.data = options.orderData(result.data, order);

                if(page != null && itemsPerPage != null)
                {
                    const startIndex = (page - 1) * itemsPerPage;
                    result.data = result.data.slice(startIndex, startIndex + itemsPerPage);
                }
            }

            this.dataResult.set(result);
        });
    }

    //######################### public methods - implementation of DataLoader #########################

    /**
     * @inheritdoc
     */
    public loadData(force?: boolean): PromiseOr<void>
    {
        if(!force)
        {
            return;
        }

        this.forceDataLoad.set(true);
        this.forceDataLoad.set(false);
    }

    //######################### public methods - implementation of GridPlugin #########################

    /**
     * @inheritdoc
     */
    public initialize(): PromiseOr<void>
    {
    }

    /**
     * @inheritdoc
     */
    public initOptions(): PromiseOr<void>
    {
    }

    /**
     * @inheritdoc
     */
    public invalidateVisuals(): void
    {
    }
}
