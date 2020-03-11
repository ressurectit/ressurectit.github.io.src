import {GalleryItem} from "./gallery.interface";

/**
 * Context for each custom template gallery item
 */
export class GalleryItemContext
{
    //######################### constructor #########################
    
    /**
     * Creates instance of GalleryItemContext
     * @param $implicit - Represents metadata for this item
     */
    constructor(public $implicit: GalleryItem)
    {
    }
}