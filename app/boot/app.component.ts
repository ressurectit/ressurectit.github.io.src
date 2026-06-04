import {Component, OnDestroy, ChangeDetectionStrategy, Inject, WritableSignal, signal, effect} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LOGGER, Logger, ProgressIndicatorModule} from '@anglr/common';
import {AppHotkeysService, HotkeysCheatsheetComponent} from '@anglr/common/hotkeys';
import {InternalServerErrorComponent} from '@anglr/error-handling';
import {NotificationsGlobalModule} from '@anglr/notifications';
import {TranslateService} from '@ngx-translate/core';

import {SettingsService} from '../services/settings';
import {Navbar, Sidebar} from '../components';
import version from '../../config/version.json';
import {ContentMenu} from '../services/api/content';

/**
 * Application entry component
 */
@Component(
{
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.scss',
    imports:
    [
        Navbar,
        Sidebar,
        RouterOutlet,
        ProgressIndicatorModule,
        NotificationsGlobalModule,
        HotkeysCheatsheetComponent,
        InternalServerErrorComponent,
    ],
    providers: [AppHotkeysService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy
{
    //######################### protected properties - template bindings #########################

    /**
     * Currently active theme
     */
    protected theme: WritableSignal<string>;

    /**
     * Currently active menu item
     */
    protected menuitem: WritableSignal<ContentMenu|undefined|null> = signal(undefined);

    /**
     * Current version of gui
     */
    protected guiVersion: string = version.version;

    /**
     * Indication whether is application initialized
     */
    protected initialized: boolean = false;

    //######################### constructor #########################
    constructor(translateSvc: TranslateService,
                private _appHotkeys: AppHotkeysService,
                settings: SettingsService,
                @Inject(LOGGER) logger: Logger,
                @Inject(DOCUMENT) document: Document,)
    {
        logger.verbose('Application is starting, main component constructed.');

        document.body.classList.add('app-page', settings.settings.theme);
        this.theme = signal(settings.settings.theme);

        effect(() =>
        {
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(this.theme());
        });

        translateSvc.setDefaultLang('en');
        translateSvc.use(settings.settings.language);
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy(): void
    {
        this._appHotkeys.destroy();
    }
}
