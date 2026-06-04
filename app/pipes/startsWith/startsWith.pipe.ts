import {Pipe, PipeTransform} from '@angular/core';

/**
 * Tests whether string starts with
 */
@Pipe({name: 'startsWith'})
export class StartsWith implements PipeTransform
{
    /**
     * Tests whether string starts with
     * @param value - String to be tested
     * @param route - Route url
     */
    public transform(value: string|undefined|null, route: string|undefined|null): boolean
    {
        if(!route || !value)
        {
            return false;
        }

        return route.startsWith(value);
    }
}
