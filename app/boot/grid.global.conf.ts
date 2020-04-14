import {ValueProvider} from "@angular/core";
import {NO_DATA_RENDERER_OPTIONS, NoDataRendererOptions, GRID_INITIALIZER_OPTIONS, PAGING_OPTIONS, BasicPagingOptions, GridInitializerOptions} from "@anglr/grid";

/**
 * Global configuration for Grid
 */
export const globalGridConfig =
[
    <ValueProvider>
    {
        provide: NO_DATA_RENDERER_OPTIONS,
        useValue: <NoDataRendererOptions<any>>
        {
            texts:
            {
                noData: "No data found !!!",
                loading: "Data are currently loading!",
                notLoaded: "Data are not loaded yet"
            }
        }
    },
    <ValueProvider>
    {
        provide: GRID_INITIALIZER_OPTIONS,
        //default value for each grid if not overwritten
        useValue: <GridInitializerOptions>
        {
        }
    },
    <ValueProvider>
    {
        provide: PAGING_OPTIONS,
        //default value for each grid if not overwritten
        useValue: <BasicPagingOptions>
        {
            //available values for items per page buttons
            itemsPerPageValues: [5, 15, 30],
            //initial value of items per page, should be one of above
            initialItemsPerPage: 15
        }
    }
];