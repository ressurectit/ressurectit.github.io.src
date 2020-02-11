import {Injectable} from "@angular/core";
import {BaseUrl, GET, RESTClient, Path} from "@anglr/rest";
import {Paginator, getValue, OrderByDirection} from "@jscrpt/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {PagedData, Pageable, Orderable, KodPopisValue} from "../../../misc/types";
import {Address} from "./data.interface";

/**
 * Service used to obtain data for grid
 */
@Injectable()
@BaseUrl('content/')
export class DataService extends RESTClient
{
    /**
     * Gets data 
     * @param paging Paging for obtaining specific page
     * @param ordering Ordering for ordering
     */
    public getData(paging?: Pageable,
                   ordering?: Orderable): Observable<PagedData<Address>>
    {
        return this.getAllData()
            .pipe(map(data =>
            {
                let paginator = new Paginator();

                paginator.setPage(paging.page)
                    .setItemsPerPage(paging.size)
                    .setItemCount(data.length);

                if(ordering)
                {
                    data = data.sort((a, b) =>
                    {
                        let aValue = getValue(a, ordering.sort);
                        let bValue = getValue(b, ordering.sort);
                        let aValueNum = +aValue;
                        let bValueNum = +bValue;

                        if(!isNaN(aValueNum) && !isNaN(bValueNum))
                        {
                            aValue = aValueNum;
                            bValue = bValueNum;
                        }

                        if(aValue < bValue)
                        {
                            return ordering.direction == OrderByDirection.Ascendant ? -1 : 1;
                        }
                        else if(aValue > bValue)
                        {
                            return ordering.direction == OrderByDirection.Ascendant ? 1 : -1;
                        }
            
                        return 0;
                    });
                }

                return <PagedData<Address>>{
                    content: data.slice(paginator.getOffset(), paginator.getOffset() + paging.size),
                    totalElements: data.length
                };
            }));
    }

    /**
     * Gets cis data 
     * @param search Search string
     */
    public getCis(search: string): Observable<PagedData<KodPopisValue>>
    {
        return this.getCisData()
            .pipe(map(data =>
            {
                data = data.filter(itm => itm.kod.toLowerCase().indexOf(search.toLowerCase()) >= 0 || itm.popis.toLowerCase().indexOf(search.toLowerCase()) >= 0);

                return <PagedData<KodPopisValue>>{
                    content: data,
                    totalElements: data.length
                };
            }));
    }

    /**
     * Gets data
     */
    @GET('data.json')
    public getAllData(): Observable<Address[]>
    {
        return null;
    }

    /**
     * Gets cis data
     */
    @GET('cis.json')
    public getCisData(): Observable<KodPopisValue[]>
    {
        return null;
    }

    /**
     * Gets enum data
     */
    @GET('{name}.json')
    public getEnum(@Path('name') _name: string): Observable<KodPopisValue[]>
    {
        return null;
    }
}