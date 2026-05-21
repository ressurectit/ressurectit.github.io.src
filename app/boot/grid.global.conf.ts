import {BasicPagingOptions, provideContentRendererOptions, provideGridInitializerOptions, provideGridInitializerType, provideMetadataSelectorOptions, provideMetadataSelectorType, provideNoDataRendererOptions, providePagingOptions, QueryGridInitializerComponent, QueryPermanentStorageGridInitializerOptions, TableContentRendererOptions} from '@anglr/grid';
import {DialogMetadataSelectorComponent, DialogMetadataSelectorOptions} from '@anglr/grid/material';

/**
 * Global configuration for Grid
 */
export const globalGridConfig =
[
    provideGridInitializerType(QueryGridInitializerComponent),
    provideMetadataSelectorType(DialogMetadataSelectorComponent),
    provideNoDataRendererOptions(
    {
        texts:
        {
            loading: 'Nahrávam dáta ...',
            noData: 'Neboli nájdené dáta odpovedajúce zadaným parametrom',
            notLoaded: 'Neboli načítané žiadne dáta zatiaľ',
        }
    }),
    providePagingOptions<BasicPagingOptions>(
    {
        itemsPerPageValues: [15, 30, 60],
        initialItemsPerPage: 15,
    }),
    provideMetadataSelectorOptions<DialogMetadataSelectorOptions>(
    {
        showButtonVisible: false,
    }),
    provideGridInitializerOptions<QueryPermanentStorageGridInitializerOptions>(
    {
        storageIppName: 'all-grid-ipp',
    }),
    provideContentRendererOptions<TableContentRendererOptions>(
    {
        cssClasses:
        {
            containerDiv: 'table-container thin-scrollbar',
        },
    }),
];