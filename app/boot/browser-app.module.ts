import {NgModule, FactoryProvider} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserTransferStateModule} from '@angular/platform-browser';
import {ReportingExceptionHandlerOptions} from '@anglr/error-handling';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {config} from '../config';

/**
 * Factory for ReportingExceptionHandlerOptions
 */
export function reportingExceptionHandlerOptionsFactory()
{
    return new ReportingExceptionHandlerOptions(config.configuration.debug, true, false, false, false, false);
}

/**
 * Entry module for browser side
 */
@NgModule(
{
    bootstrap: [AppComponent],
    imports:
    [
        AppModule,
        BrowserAnimationsModule,
        BrowserTransferStateModule
    ],
    providers:
    [
        <FactoryProvider>
        {
            provide: ReportingExceptionHandlerOptions,
            useFactory: reportingExceptionHandlerOptionsFactory
        }
    ]
})
export class BrowserAppModule
{
}
