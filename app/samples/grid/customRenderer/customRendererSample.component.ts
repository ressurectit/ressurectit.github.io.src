import {Component, ChangeDetectionStrategy} from "@angular/core";
import {GridOptions, SimpleOrdering, SyncDataLoaderComponent, SyncDataLoaderOptions} from "@anglr/grid";
import {GalleryContentRendererComponent} from "./galleryRenderer/galleryContentRenderer.component";

/**
 * Custom renderer sample for grid component
 */
@Component(
{
    selector: 'custom-renderer-sample',
    templateUrl: 'customRendererSample.component.html',
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
    constructor()
    {
        this.gridOptions =
        {
            plugins:
            {
                dataLoader:
                {
                    //use sync data loader as grid data loader plugin
                    type: SyncDataLoaderComponent,
                    options: <SyncDataLoaderOptions<any, SimpleOrdering>>
                    {
                        //all data used in data loader
                        data: []
                    }
                },
                contentRenderer:
                {
                    type: GalleryContentRendererComponent
                }
            }
        };
    }
}