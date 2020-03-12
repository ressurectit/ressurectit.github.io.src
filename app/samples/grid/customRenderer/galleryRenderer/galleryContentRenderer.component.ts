import {Component, ElementRef, Inject, Optional, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from "@angular/core";
import {GridPluginGeneric, GRID_PLUGIN_INSTANCES, GridPluginInstances, CONTENT_RENDERER_OPTIONS, MetadataSelector, DataLoader, DataResponse, METADATA_SELECTOR, DATA_LOADER} from "@anglr/grid";
import {extend} from "@jscrpt/common";
import {Subscription} from "rxjs";

import {GalleryContentRenderer, GalleryContentRendererOptions, CssClassesGalleryContentRenderer} from "./galleryContentRenderer.interface";
import {GalleryItem as GalleryItemData} from "../../../../services/api/gallery";
import {GalleryMetadata, GalleryItem} from "../gallery/gallery.interface";

/**
 * Default options for 'GalleryContentRendererComponent'
 * @internal
 */
const defaultOptions: GalleryContentRendererOptions<CssClassesGalleryContentRenderer> =
{
    cssClasses:
    {
    }
};

/**
 * Component used for rendering gallery content renderer
 */
@Component(
{
    selector: 'div.gallery-renderer',
    templateUrl: 'galleryContentRenderer.component.html',
    styleUrls: ['galleryContentRenderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryContentRendererComponent<TOrdering, TOptions extends GalleryContentRendererOptions<CssClassesGalleryContentRenderer>> implements GalleryContentRenderer<TOrdering>, GridPluginGeneric<TOptions>, OnDestroy
{
    //######################### protected fields #########################

    /**
     * Options for content renderer
     */
    protected _options: TOptions;

    /**
     * Metadata selector currently used
     */
    protected _metadataSelector: MetadataSelector<GalleryMetadata<GalleryItem>>;

    /**
     * Data loader currently used
     */
    protected _dataLoader: DataLoader<DataResponse<GalleryItemData>>;

    /**
     * Subscription listening for metadata changes
     */
    protected _metadataChangedSubscription: Subscription;

    /**
     * Subscription listening for data changes
     */
    protected _dataChangedSubscription: Subscription;

    //######################### public properties - implementation of GalleryContentRenderer #########################

    /**
     * Options for content renderer
     */
    public get options(): TOptions
    {
        return this._options;
    }
    public set options(options: TOptions)
    {
        this._options = extend(true, this._options, options) as TOptions;
    }

    /**
     * Information about current ordering state
     */
    public ordering: TOrdering;

    /**
     * Indication that ordering has changed
     */
    public orderingChange: EventEmitter<void> = new EventEmitter<void>();

    //######################### public properties #########################

    /**
     * Gets data that are present for displaying
     */
    public get data(): GalleryItemData[]
    {
        return this._dataLoader?.result?.data;
    }

    //######################### constructor #########################
    constructor(public pluginElement: ElementRef,
                protected _changeDetector: ChangeDetectorRef,
                @Inject(GRID_PLUGIN_INSTANCES) @Optional() public gridPlugins: GridPluginInstances,
                @Inject(CONTENT_RENDERER_OPTIONS) @Optional() options?: GalleryContentRendererOptions<CssClassesGalleryContentRenderer>)
    {
        this._options = extend(true, {}, defaultOptions, options);
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._dataChangedSubscription?.unsubscribe();
        this._dataChangedSubscription = null;
        
        this._metadataChangedSubscription?.unsubscribe();
        this._metadataChangedSubscription = null;
    }

    //######################### public methods - implementation of GalleryContentRenderer #########################
    
    /**
     * Initialize plugin, to be ready to use, initialize communication with other plugins
     */
    public initialize()
    {
        let metadataSelector: MetadataSelector<GalleryMetadata<GalleryItem>> = this.gridPlugins[METADATA_SELECTOR] as MetadataSelector<GalleryMetadata<GalleryItem>>;

        if(this._metadataSelector && this._metadataSelector != metadataSelector)
        {
            this._metadataChangedSubscription.unsubscribe();
            this._metadataChangedSubscription = null;
            this._metadataSelector = null;
        }

        if(!this._metadataSelector)
        {
            this._metadataSelector = metadataSelector;

            this._metadataChangedSubscription = this._metadataSelector.metadataChange.subscribe(() => this.invalidateVisuals());
        }

        let dataLoader: DataLoader<DataResponse<GalleryItemData>> = this.gridPlugins[DATA_LOADER] as DataLoader<DataResponse<GalleryItemData>>;

        if(this._dataLoader && this._dataLoader != dataLoader)
        {
            this._dataChangedSubscription.unsubscribe();
            this._dataChangedSubscription = null;
            this._dataLoader = null;
        }

        if(!this._dataLoader)
        {
            this._dataLoader = dataLoader;

            this._dataChangedSubscription = this._dataLoader.resultChange.subscribe(() => this.invalidateVisuals());
        }

        this.invalidateVisuals();
    }
    
    /**
     * Initialize plugin options, all operations required to be done with plugin options are handled here
     */
    public initOptions()
    {
    }
    
    /**
     * Explicitly runs invalidation of content (change detection)
     */
    public invalidateVisuals(): void
    {
        this._changeDetector.detectChanges();
    }
}