import {Pipe, PipeTransform} from '@angular/core';
import {lastValueFrom} from 'rxjs';

import {SourceService} from '../../services/api/source';

/**
 * Obtains source for provided string
 */
@Pipe(
{
    name: 'asSource',
    standalone: true,
})
export class AsSourcePipe implements PipeTransform
{
    //######################### constructor #########################
    constructor(private _sourceSvc: SourceService,)
    {
    }

    //######################### public methods #########################

    /**
     * Returns observable for obtaining source
     * @param path - Value to be used as source path
     * @param type - Type of source
     */
    public async transform(path: string, type: string = 'typescript'): Promise<string>
    {
        const source = await lastValueFrom(this._sourceSvc.getSource(path));

        return '``` ' + `${type}
${source ?? 'not found ' + path}
` + '```';
    }
}