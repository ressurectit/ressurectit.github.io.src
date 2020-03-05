import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentRoute} from "@anglr/common/router";
import {Subscription} from "rxjs";

import {DEFAULT_CONTENT} from "../../../misc/constants";
import {ContentMenuResolver, ContentData} from "./content.resolver";
import {ContentMenu} from "../../../services/api/content";
import {DataResolver} from "../../../misc/resolvers";

/**
 * Content component used for displaying markdowns
 */
@Component(
{
    selector: 'content-view',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**', resolve: {menu: ContentMenuResolver, data: DataResolver}})
export class ContentComponent implements OnInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscription for changes in route
     */
    private _routeChangeSubscription: Subscription;

    //######################### public properties - template bindings #########################

    /**
     * Content menu array
     */
    public menu: ContentMenu[] = [];

    //######################### constructor #########################
    constructor(private _route: ActivatedRoute,
                private _router: Router)
    {
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public ngOnInit()
    {
        this.menu = (this._route.snapshot.data as ContentData).menu;

        this._routeChangeSubscription = this._route.url.subscribe(url =>
        {
            if(!url?.length)
            {
                this._router.navigate([DEFAULT_CONTENT], {relativeTo: this._route});
            }
        });
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._routeChangeSubscription?.unsubscribe();
        this._routeChangeSubscription = null;
    }
}