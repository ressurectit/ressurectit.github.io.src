import {Pipe, PipeTransform} from "@angular/core";

import {SourceService} from "../../../../services/api/source";
import {handle404} from "../../../../misc/rxjsOperators";

/**
 * Obtains source for provided string
 */
@Pipe(
{
    name: "asSource"
})
export class AsSourcePipe implements PipeTransform
{
    //######################### constructor #########################
    constructor(private _sourceSvc: SourceService)
    {
    }

    //######################### public methods #########################

    /**
     * Returns observable for obtaining source
     * @param path Value to be used as source path
     * @param type Type of source
     */
    public async transform(path: any, type: string = 'typescript'): Promise<string>
    {
        let source = await this._sourceSvc.getSource(path)
            .pipe(handle404())
            .toPromise();

        return '``` ' + `${type}
${source ?? 'not found ' + path}
` + '```';
    }
}