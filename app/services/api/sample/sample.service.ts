import {Injectable} from "@angular/core";
import {BaseUrl, GET, RESTClient, Path, Query, QueryObject, ResponseTransform, ParameterTransform} from "@anglr/rest";
import {isPresent, extend} from "@jscrpt/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as moment from 'moment';

import {SampleFilter, SampleData} from "./sample.interface";

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
        return null;
    }

    /**
     * GET sample
     */
    @ResponseTransform()
    @GET('{id}')
    public getWithParamsData(@Path('id') _id: string,
                             @Query('wow') _wow: string,
                             @QueryObject @ParameterTransform('_sampleFilterTransform') _filter: SampleFilter): Observable<SampleData>
    {
        return null;
    }

    //######################### private methods #########################

    /**
     * SampleFilter transform method
     * @param filter Filter to be transformed
     */
    //@ts-ignore
    private _sampleFilterTransform(filter: SampleFilter): SampleFilter
    {
        filter = extend(true, {}, filter);

        filter.date = filter.date.toISOString() as any;

        return filter;
    }

    /**
     * Transform response from getWithParamsData method
     */
    //@ts-ignore
    private getWithParamsDataResponseTransform(response: Observable<SampleData>): Observable<SampleData>
    {
        return response.pipe(map(result =>
        {
            if(isPresent(result.birthDate))
            {
                result.birthDate = moment(result.birthDate);
            
                if(!result.birthDate.isValid)
                {
                    result.birthDate = null;
                }
            }

            return result;
        }));
    }
}