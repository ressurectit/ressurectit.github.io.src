import {Injectable} from "@angular/core";
import {BaseUrl, Produces, ResponseType, GET, Path, Cache, RESTClient} from "@anglr/rest";
import {Observable} from "rxjs";

/**
 * Service used to obtain source files
 */
@Injectable({providedIn: 'root'})
@BaseUrl('https://raw.githubusercontent.com/ressurectit/ressurectit.github.io.src/master/app/')
export class SourceService extends RESTClient
{
    /**
     * Gets content file from path
     * @param _path Path to content file
     */
    @Cache()
    @Produces(ResponseType.Text)
    @GET('{path}')
    public getSource(@Path('path') _path: string): Observable<string>
    {
        return null;
    }
}