import {Component, OnDestroy, AfterViewInit, ViewChild, ChangeDetectionStrategy, Inject, ChangeDetectorRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {RouterOutlet, Router} from '@angular/router';
import {LOGGER, Logger} from '@anglr/common';
import {TitledDialogService} from '@anglr/common/material';
import {getCurrentUrlPrefix} from '@anglr/md-help/web';
import {nameof} from '@jscrpt/common';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {config, SettingsDebug, SettingsGeneral} from '../config';
import {routeAnimationTrigger} from './app.component.animations';
import {SettingsService} from '../services/settings';
import {UserSettingsComponent} from '../modules';

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
     * Subscription for changes of general settings
     */
    private _settingsChangeSubscription: Subscription;

    /**
     * Subscription for changes of debugging settings
     */
    private _settingsDebuggingChangeSubscription: Subscription;

    /**
     * Currently active theme
     */
    private _theme: string;

    //######################### public properties - template bindings #########################

    /**
     * Indication whether is console visible
     */
    public consoleVisible: boolean = false;

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
                router: Router,
                settings: SettingsService,
                @Inject(DOCUMENT) document: HTMLDocument,
                @Inject(LOGGER) logger: Logger,
                private _changeDetector: ChangeDetectorRef,
                private _dialog: TitledDialogService)
    {
        logger.verbose('Application is starting, main component constructed.');

        document.body.classList.add('app-page', settings.settings.theme);
        this._theme = settings.settings.theme;        document.body.classList.add('app-page', config.general.theme);

        this._settingsChangeSubscription = settings.settingsChange
            .subscribe(itm => 
            {
                if(itm == nameof<SettingsGeneral>('theme'))
                {
                    document.body.classList.remove(this._theme);
                    this._theme = settings.settings.theme;
                    document.body.classList.add(this._theme);
                }

                if(itm == nameof<SettingsGeneral>('language'))
                {
                    translate.use(settings.settings.language);
                    this._changeDetector.detectChanges();
                }
            });

        this._settingsDebuggingChangeSubscription = settings.settingsDebuggingChange
            .subscribe(itm => 
            {
                if(itm == nameof<SettingsDebug>('consoleEnabled'))
                {
                    this._toggleConsoleHotkey();
                }
            });

        translate.setDefaultLang('en');
        translate.use(config.general.language);

        //handle route to html5 routing
        if(document.location.pathname != router.url)
        {
            router.navigateByUrl(router.parseUrl(document.location.href.replace(getCurrentUrlPrefix(document), '')));
        }

        if(settings.settingsDebugging?.consoleEnabled)
        {
            this._toggleConsoleHotkey();
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
        this._routerOutletActivatedSubscription?.unsubscribe();
        this._routerOutletActivatedSubscription = null;

        this._routerOutletActivatedSubscription?.unsubscribe();
        this._routerOutletActivatedSubscription = null;

        this._settingsChangeSubscription?.unsubscribe();
        this._settingsChangeSubscription = null;

        this._settingsDebuggingChangeSubscription?.unsubscribe();
        this._settingsDebuggingChangeSubscription = null;
    }

    //######################### public methods - template bindings #########################

    /**
     * Shows user settings
     */
    public showUserSettings(): void
    {
        this._dialog.open(UserSettingsComponent,
        {
            title: 'User Settings',
            width: '35vw'
        });
    }

    //######################### private methods #########################

    /**
     * Toggles hotkey for displaying console log
     */
    private _toggleConsoleHotkey()
    {
        // const oldHelpHotkey = this._appHotkeys.hotkeys.get('~');

        // if(oldHelpHotkey)
        // {
        //     this._appHotkeys.hotkeys.remove(oldHelpHotkey);
        // }
        // else
        // {
        //     this._appHotkeys.hotkeys.add(new Hotkey('~', () =>
        //     {
        //         this.consoleVisible = !this.consoleVisible;
        //         this._changeDetector.detectChanges();

        //         return false;
        //     }, null, 'Show console'));
        // }
    }
}