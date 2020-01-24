import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

import {DataService, Address} from "../../services/api/data";

/**
 * Resolver that resolves all data
 */
@Injectable()
export class DataResolver implements Resolve<Address[]>
{
    //######################### constructor #########################
    constructor(private _dataSvc: DataService)
    {
    }

    //######################### implementation of Resolve<Address[]> #########################

    /**
     * Resolves all data
     * @param {ActivatedRouteSnapshot} _route Next route that will be resolved
     * @param {RouterStateSnapshot} _state Current state of router
     */
    public resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<Address[]> 
    {
        return this._dataSvc.getAllData().toPromise();
    }
}