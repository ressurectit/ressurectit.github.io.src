import {Injectable} from '@angular/core';
import {BaseUrl, GET, RESTClient, Path, Query, QueryObject} from '@anglr/rest';
import {NEVER, Observable} from 'rxjs';

import {SampleFilter, SampleData} from './sample.interface';

/**
 * Sample REST service
 */
@Injectable()
@BaseUrl('https://www.mocky.io/v2/')
export class SampleService extends RESTClient
{
    /**
     * GET sample
     */
    @GET('5e3140eb3200000d00888393')
    public getData(): Observable<SampleData>
    {
        return NEVER;
    }

    /**
     * GET sample
     */
    @GET('{id}')
    public getWithParamsData(@Path('id') _id: string,
                             @Query('wow') _wow: string,
                             @QueryObject _filter: SampleFilter): Observable<SampleData>
    {
        return NEVER;
    }
}