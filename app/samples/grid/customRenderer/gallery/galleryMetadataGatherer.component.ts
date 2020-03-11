import {ExistingProvider, Component, ChangeDetectionStrategy, EventEmitter, forwardRef, ContentChildren, QueryList, AfterContentInit} from "@angular/core";
import {METADATA_GATHERER, MetadataGatherer} from "@anglr/grid";

import {GalleryMetadata, GalleryItem} from "./gallery.interface";
import {GalleryItemComponent} from "./galleryItem.component";

/**
 * Component that is used for gathering metadata for gallery
 *
 * This is metadata gatherer which works with `GalleryItemComponent`
 */
@Component(
{
    selector: 'gallery-metadata',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers:
    [
        <ExistingProvider>
        {
            provide: METADATA_GATHERER,
            useExisting: forwardRef(() => GalleryMetadataGathererComponent)
        }
    ]
})
export class GalleryMetadataGathererComponent<TGalleryItem extends GalleryItem> implements AfterContentInit, MetadataGatherer<GalleryMetadata<TGalleryItem>>
{
    //######################### public properties - implementation of MetadataGatherer<BasicTableColumn[]> #########################

    /**
     * Information that metadata for grid has changed
     */
    public metadataChange: EventEmitter<void> = new EventEmitter<void>();

    //######################### public properties - children #########################

    /**
     * Gets gallery item defined in template
     * @internal
     */
    @ContentChildren(GalleryItemComponent)
    public items: QueryList<TGalleryItem>;

    //######################### public methods - implementation of MetadataGatherer<BasicTableColumn[]> #########################

    /**
     * Gets current metadata for grid
     */
    public getMetadata(): GalleryMetadata<TGalleryItem>
    {
        return {
            item: this.items?.first
        };
    }

    //######################### public methods - implementation of AfterContentInit #########################

    /**
     * Called when content was initialized
     */
    public ngAfterContentInit()
    {
        this.items.changes.subscribe(() =>
        {
            this.metadataChange.emit();
        });
    }
}