import {Component, ChangeDetectionStrategy, ValueProvider} from "@angular/core";
import {GridOptions, SimpleOrdering, BasicPagingOptions, SyncDataLoaderComponent, SyncDataLoaderOptions, GRID_OPTIONS, PAGING_OPTIONS, NoDataRendererOptions} from "@anglr/grid";

/**
 * Configuration sample for grid component
 */
@Component(
{
    selector: 'configuration-sample',
    templateUrl: 'configurationSample.component.html',
    providers:
    [
        //one way is to provide all grid options
        <ValueProvider>
        {
            provide: GRID_OPTIONS,
            useValue: <GridOptions>
            {
                plugins:
                {
                    dataLoader:
                    {
                        //use sync data loader as grid data loader plugin for all 3 grids
                        type: SyncDataLoaderComponent,
                        options: <SyncDataLoaderOptions<any, SimpleOrdering>>
                        {
                            data: []
                        }
                    }
                }
            }
        },
        //other way is to provide only specific options for one plugin
        <ValueProvider>
        {
            provide: PAGING_OPTIONS,
            useValue: <BasicPagingOptions>
            {
                itemsPerPageValues: [15, 30, 60]
            }
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationSampleComponent
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
                noDataRenderer:
                {
                    options: <NoDataRendererOptions<any>>
                    {
                        texts:
                        {
                            noData: "See there are no data :)."
                        }
                    }
                },
                paging:
                {
                    options: <BasicPagingOptions>
                    {
                        //available values for items per page buttons
                        itemsPerPageValues: [5, 10, 15]
                    }
                }
            }
        };
    }
}