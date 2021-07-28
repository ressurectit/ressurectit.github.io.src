import {Component, OnDestroy, AfterViewInit, ViewChild, ChangeDetectionStrategy, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {RouterOutlet, Router} from '@angular/router';
import {GlobalizationService} from '@anglr/common';
import {getCurrentUrlPrefix} from '@anglr/md-help/web';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {config} from '../config';
import {routeAnimationTrigger} from './app.component.animations';

/**
 * Application entry component
 */
@Component(
{
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routeAnimationTrigger]
})
export class AppComponent implements AfterViewInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscription for router outlet activation changes
     */
    private _routerOutletActivatedSubscription: Subscription;

    /**
    /**
     * Name of state for routed component animation
     */
    public routeComponentState: string = 'none';

    //######################### public properties - children #########################

    /**
     * Router outlet that is used for loading routed components
     */
    @ViewChild('outlet', {static: false})
    public routerOutlet: RouterOutlet;

    //######################### constructor #########################
    constructor(translate: TranslateService,
                globalization: GlobalizationService,
                router: Router,
                @Inject(DOCUMENT) document: HTMLDocument)
    {
        document.body.classList.add('app-page', config.general.theme);

        translate.setDefaultLang('en');
        translate.use(config.general.language);

        //handle route to html5 routing
        if(document.location.pathname != router.url)
        {
            router.navigateByUrl(router.parseUrl(document.location.href.replace(getCurrentUrlPrefix(document), '')));
        }
    }

    //######################### public methods - implementation of AfterViewInit #########################

    /**
     * Called when view was initialized
     */
    public ngAfterViewInit(): void
    {
        this._routerOutletActivatedSubscription = this.routerOutlet.activateEvents.subscribe(() =>
        {
            this.routeComponentState = this.routerOutlet.activatedRouteData['animation'] || (<any>this.routerOutlet.activatedRoute.component).name;
        });
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy(): void
    {
        if(this._routerOutletActivatedSubscription)
        {
            this._routerOutletActivatedSubscription.unsubscribe();
            this._routerOutletActivatedSubscription = null;
        }
    }
}