import {GatheredMetadata} from '@anglr/grid';

/**
 * Represents single item of gallery
 */
export interface GalleryItem
{
    /**
     * Source of gallery item
     */
    source: string;
}

/**
 * Grouped table metadata, contains columns and metadata for column groups
 */
export interface GalleryMetadata<TItem extends GalleryItem> extends GatheredMetadata
{
    /**
     * Metadata for gallery item
     */
    item: TItem;
}