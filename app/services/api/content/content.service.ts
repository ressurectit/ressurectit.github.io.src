import {Injectable} from "@angular/core";
import {BaseUrl, Produces, ResponseType, GET, Path, Cache, RESTClient} from "@anglr/rest";
import {HelpService as HelpServiceBase} from '@anglr/md-help/web';
import {Observable} from "rxjs";

/**
 * Service used to obtain content files
 */
@Injectable()
@BaseUrl('content/')
export class ContentService extends RESTClient implements HelpServiceBase
{
    /**
     * Gets content file from path
     * @param _path Path to content file
     */
    @Cache()
    @Produces(ResponseType.Text)
    @GET('{path}.md')
    public get(@Path('path') _path: string): Observable<string>
    {
        return null;
    }
}