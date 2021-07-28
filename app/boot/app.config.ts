import {FactoryProvider, ClassProvider} from '@angular/core';
import {AUTH_INTERCEPTOR_PROVIDER, AUTH_INTERCEPTOR_CONFIG, AUTHENTICATION_SERVICE_OPTIONS, SUPPRESS_AUTH_INTERCEPTOR_PROVIDER} from '@anglr/authentication';
import {LocalPermanentStorageService} from '@anglr/common/store';
import {PROGRESS_INTERCEPTOR_PROVIDER, GlobalizationService, STRING_LOCALIZATION, PERMANENT_STORAGE} from '@anglr/common';
import {NgxTranslateStringLocalizationService} from '@anglr/translate-extensions';
import {HttpErrorInterceptorOptions, HTTP_ERROR_INTERCEPTOR_PROVIDER, HttpGatewayTimeoutInterceptorOptions, NoConnectionInterceptorOptions, HTTP_GATEWAY_TIMEOUT_INTERCEPTOR_PROVIDER, NO_CONNECTION_INTERCEPTOR_PROVIDER, SERVICE_UNAVAILABLE_INTERCEPTOR_PROVIDER} from '@anglr/error-handling';

import {AuthConfig} from '../services/api/account/authConfig';
import {AccountService} from '../services/api/account/account.service';
import {GlobalizationService as GlobalizationServiceImpl} from '../services/globalization/globalization.service';
import {globalGridConfig} from './grid.global.conf';
import {globalSelectConfig} from './select.global.conf';
import {config} from '../config';

/**
 * Factory for HttpErrorInterceptorOptions
 */
export function httpErrorInterceptorOptionsFactory()
{
    return new HttpErrorInterceptorOptions(config.configuration.debug);
}

/**
 * Factory method for creating HttpGatewayTimeoutInterceptorOptions
 */
export function httpGatewayTimeoutInterceptorOptionsFactory()
{
    return new HttpGatewayTimeoutInterceptorOptions('Server neodpovedal v stanovenom čase.');
}

/**
 * Factory method for creating NoConnectionInterceptorOptions
 */
export function noConnectionInterceptorOptionsFactory()
{
    return new NoConnectionInterceptorOptions('Server je mimo prevádzky.');
}

/**
 * Array of providers that are used in app module
 */
export const providers =
[
    //######################### HTTP INTERCEPTORS #########################
    HTTP_GATEWAY_TIMEOUT_INTERCEPTOR_PROVIDER,
    SERVICE_UNAVAILABLE_INTERCEPTOR_PROVIDER,
    HTTP_ERROR_INTERCEPTOR_PROVIDER,
    NO_CONNECTION_INTERCEPTOR_PROVIDER,
    SUPPRESS_AUTH_INTERCEPTOR_PROVIDER,
    AUTH_INTERCEPTOR_PROVIDER,
    PROGRESS_INTERCEPTOR_PROVIDER,

    //######################### NO CONNECTION INTERCEPTOR OPTIONS #########################
    <FactoryProvider>
    {
        useFactory: noConnectionInterceptorOptionsFactory,
        provide: NoConnectionInterceptorOptions
    },

    //######################### HTTP GATEWAY TIMEOUT INTERCEPTOR OPTIONS #########################
    <FactoryProvider>
    {
        useFactory: httpGatewayTimeoutInterceptorOptionsFactory,
        provide: HttpGatewayTimeoutInterceptorOptions
    },

    //######################### AUTH INTERCEPTOR OPTIONS #########################
    <ClassProvider>
    {
        provide: AUTH_INTERCEPTOR_CONFIG,
        useClass: AuthConfig
    },

    //######################### GLOBALIZATION SERVICE #########################
    <ClassProvider>
    {
        provide: GlobalizationService,
        useClass: GlobalizationServiceImpl
    },

    //######################### AUTHENTICATION & AUTHORIZATION #########################
    <ClassProvider>
    {
        provide: AUTHENTICATION_SERVICE_OPTIONS,
        useClass: AccountService
    },

    //######################### GRID GLOBAL OPTIONS #########################
    ...globalGridConfig,
    
    //############################ SELECT GLOBAL OPTIONS ############################
    ...globalSelectConfig,

    //######################### STRING LOCALIZATION #########################
    <ClassProvider>
    {
        provide: STRING_LOCALIZATION,
        useClass: NgxTranslateStringLocalizationService
    },

    //######################### PERMANENT STORAGE #########################
    <ClassProvider>
    {
        provide: PERMANENT_STORAGE,
        useClass: LocalPermanentStorageService
    }
];
