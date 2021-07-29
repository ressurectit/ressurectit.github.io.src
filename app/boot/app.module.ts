import {NgModule, ClassProvider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {ModuleRoutes} from '@anglr/common/router';
import {InternalServerErrorModule} from '@anglr/error-handling';
import {ProgressIndicatorModule} from '@anglr/common';
import {NotificationsModule} from '@anglr/notifications';
import {ConsoleLogModule} from '@anglr/common/structured-log';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HotkeyModule} from 'angular2-hotkeys';

import {AppComponent} from './app.component';
import {components, routesOptions} from './app.component.routes';
import {APP_TRANSFER_ID} from '../misc/constants';
import {providers} from './app.config';
import {WebpackTranslateLoaderService} from '../services/webpackTranslateLoader';

/**
 * Main module shared for both server and browser side
 */
@NgModule(
{
    imports:
    [
        BrowserModule.withServerTransition(
        {
            appId: APP_TRANSFER_ID
        }),
        HttpClientModule,
        InternalServerErrorModule,
        ProgressIndicatorModule,
        NotificationsModule,
        RouterModule,
        HotkeyModule,
        ConsoleLogModule.forRoot(),
        MatDialogModule,
        TranslateModule.forRoot(
        {
            loader: <ClassProvider>
            {
                provide: TranslateLoader, 
                useClass: WebpackTranslateLoaderService
            }
        })
    ],
    providers: providers,
    declarations:
    [
        AppComponent,
        ...components
    ],
    exports: [AppComponent]
})
@ModuleRoutes(components, routesOptions)
export class AppModule
{
}
