import {Injectable} from "@angular/core";
import {BaseUrl, GET, RESTClient} from "@anglr/rest";
import {Observable} from "rxjs";

/**
 * Sample REST service
 */
@Injectable()
@BaseUrl('http://www.mocky.io/v2/')
export class SampleService extends RESTClient
{
    /**
     * GET sample
     */
    @GET('5e3019c73200004b008587a8')
    public getData(): Observable<any>
    {
        return null;
    }
}