import {Injectable} from '@angular/core';
import {BaseUrl, GET, RESTClient} from '@anglr/rest';
import {Pageable, PagedData, Paginator} from '@jscrpt/common';
import {NEVER, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {GalleryItem} from './gallery.interface';

/**
 * Service used to obtain gallery data for grid
 */
@Injectable()
@BaseUrl('content/')
export class GalleryService extends RESTClient
{
    /**
     * Gets gallery data 
     * @param paging Paging for obtaining specific page
     */
    public getGallery(paging: Pageable): Observable<PagedData<GalleryItem>>
    {
        return this.getAllGallery()
            .pipe(map(data =>
            {
                const paginator = new Paginator();

                paginator.setPage(paging.page)
                    .setItemsPerPage(paging.size)
                    .setItemCount(data.length);

                return <PagedData<GalleryItem>>
                {
                    content: data.slice(paginator.getOffset(), paginator.getOffset() + paging.size),
                    totalElements: data.length
                };
            }));
    }

    /**
     * Gets enum data
     */
    @GET('gallery.json')
    public getAllGallery(): Observable<GalleryItem[]>
    {
        return NEVER;
    }
}