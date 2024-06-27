import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationServiceOptions, UserIdentity} from '@anglr/authentication';
import {isPresent} from '@jscrpt/common';
import {NEVER, Observable, of} from 'rxjs';

/**
 * Class represents authentication service options for account
 */
@Injectable()
export class AccountAuthOptions extends AuthenticationServiceOptions
{
    //######################### constructor #########################
    constructor(private _router: Router,
                private _location: Location,)
    {
        super();
    }

    //######################### public methods - implementation of AuthenticationServiceOptions #########################

    /**
     * @inheritdoc
     */
    public login(): Observable<void>
    {
        return NEVER;
    }
    
    /**
     * @inheritdoc
     */
    public isAuthPage(path?: string): boolean
    {
        if(isPresent(path))
        {
            return path.indexOf('/login') == 0;
        }

        return this._location.path().indexOf('/login') == 0;
    }
    
    /**
     * @inheritdoc
     */
    public logout(): Observable<void>
    {
        return NEVER;
    }
    
    /**
     * @inheritdoc
     */
    public getUserIdentity(): Observable<UserIdentity>
    {
        return of(<UserIdentity> {
            additionalInfo: null,
            firstName: 'anonymous',
            surname: 'anonymous',
            userName: 'anonymous',
            isAuthenticated: true,
            permissions: [],
        });
    }
    
    /**
     * @inheritdoc
     */
    public showAuthPage(): Promise<boolean>
    {
        return this._router.navigate(['/login'], {queryParams: {returnUrl: this._location.path()}});
    }
    
    /**
     * @inheritdoc
     */
    public showAccessDenied(): Promise<boolean>
    {
        return this._router.navigate(['/accessDenied']);
    }
}