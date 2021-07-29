import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {ContentMenu, ContentService} from '../../../services/api/content';

/**
 * Data for content component route
 */
export interface ContentData
{
    /**
     * Menu to be rendered
     */
    menu: ContentMenu[];
}

/**
 * Resolver that resolves data for content menu
 */
@Injectable()
export class ContentMenuResolver implements Resolve<ContentMenu[]>
{
    //######################### constructor #########################
    constructor(private _contentSvc: ContentService)
    {
    }

    //######################### implementation of Resolve<PrehladHospCookieData> #########################

    /**
     * Resolves data for 'poistenec' for 'history' detail
     * @param {ActivatedRouteSnapshot} _route Next route that will be resolved
     * @param {RouterStateSnapshot} _state Current state of router
     */
    public resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<ContentMenu[]>
    {
        return this._contentSvc.getMenu().toPromise();
    }
}