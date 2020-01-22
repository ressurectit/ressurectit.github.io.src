import {Type} from '@angular/core';
import {ModuleRoutesOptions} from '@anglr/common/router';

import {HomeComponent} from '../pages/home/home.component';
import {NotFoundComponent} from "../pages/notFound/notFound.component";

export const routes: Type<any>[] =
[
    HomeComponent,
    NotFoundComponent
];

export const routesOptions: ModuleRoutesOptions =
{
    rootModule: true,
    rootModuleConfig:
    {
        enableTracing: false,
        useHash: true
    },
    staticRoutesBefore:
    [
    ]
};