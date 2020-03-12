import {Component, ChangeDetectionStrategy} from "@angular/core";
import {GridOptions, SimpleOrdering, DataResponse, AsyncDataLoaderOptions} from "@anglr/grid";

import {GalleryContentRendererComponent} from "./galleryRenderer/galleryContentRenderer.component";
import {GalleryService, GalleryItem} from "../../../services/api/gallery";

/**
 * Custom renderer sample for grid component
 */
@Component(
{
    selector: 'custom-renderer-sample',
    templateUrl: 'customRendererSample.component.html',
    providers: [GalleryService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomRendererSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Grid options that are used for grid initialization
     */
    public gridOptions: GridOptions;

    //######################### constructor #########################
    constructor(private _dataSvc: GalleryService)
    {
        this.gridOptions =
        {
            plugins:
            {
                dataLoader:
                {
                    options: <AsyncDataLoaderOptions<GalleryItem, SimpleOrdering>>
                    {
                        //data callback used for getting data asynchronously
                        dataCallback: this._getData.bind(this)
                    }
                },
                contentRenderer:
                {
                    type: GalleryContentRendererComponent
                }
            }
        };
    }

    
    //######################### private methods #########################

    /**
     * Callback used for obtaining data
     * @param page Index of requested page
     * @param itemsPerPage Number of items per page
     */
    private async _getData(page: number, itemsPerPage: number, _ordering: SimpleOrdering): Promise<DataResponse<GalleryItem>>
    {
        let result = await this._dataSvc
            .getGallery({
                            page: page,
                            size: itemsPerPage
                        })
            .toPromise();

        return {
            data: result.content,
            totalCount: result.totalElements
        };
    }
}