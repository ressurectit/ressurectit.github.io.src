import {Component, ElementRef, Inject, Optional, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {GridPluginGeneric, GRID_PLUGIN_INSTANCES, GridPluginInstances, CONTENT_RENDERER_OPTIONS} from "@anglr/grid";
import {extend} from "@jscrpt/common";

import {GalleryContentRenderer, GalleryContentRendererOptions, CssClassesGalleryContentRenderer} from "./galleryContentRenderer.interface";

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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryContentRendererComponent<TOrdering, TOptions extends GalleryContentRendererOptions<CssClassesGalleryContentRenderer>> implements GalleryContentRenderer<TOrdering>, GridPluginGeneric<TOptions>
{
    //######################### protected fields #########################

    /**
     * Options for content renderer
     */
    protected _options: TOptions;

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

    //######################### constructor #########################
    constructor(public pluginElement: ElementRef,
                @Inject(GRID_PLUGIN_INSTANCES) @Optional() public gridPlugins: GridPluginInstances,
                @Inject(CONTENT_RENDERER_OPTIONS) @Optional() options?: GalleryContentRendererOptions<CssClassesGalleryContentRenderer>)
    {
        this._options = extend(true, {}, defaultOptions, options);
    }

    //######################### public methods - implementation of GalleryContentRenderer #########################
    
    /**
     * Initialize plugin, to be ready to use, initialize communication with other plugins
     */
    public initialize()
    {
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
    }
}