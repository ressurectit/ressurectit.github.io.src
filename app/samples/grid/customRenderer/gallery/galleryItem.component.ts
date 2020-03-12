import {Component, ChangeDetectionStrategy, Input} from "@angular/core";

import {GalleryItem} from "./gallery.interface";

/**
 * Component for gathering information about gallery item
 */
@Component(
{
    selector: 'gallery-item',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemComponent implements GalleryItem
{
    //######################### public properties #########################

    /**
     * Source of gallery item
     */
    @Input()
    source: string;
}