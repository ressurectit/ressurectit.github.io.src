import {ContentRenderer, CssClassesContentRenderer, VisualPluginOptions} from "@anglr/grid";

/**
 * Css classes for gallery content renderer
 */
export interface CssClassesGalleryContentRenderer extends CssClassesContentRenderer
{
}

/**
 * Options for gallery content renderer
 */
export interface GalleryContentRendererOptions<TCssClasses extends CssClassesGalleryContentRenderer> extends VisualPluginOptions<TCssClasses>
{
}

/**
 * Public API for GalleryContentRenderer
 */
export interface GalleryContentRenderer<TOrdering> extends ContentRenderer<TOrdering>
{
}