import {Type} from '@angular/core';
import {ModuleRoutesOptions} from '@anglr/common/router';

import {NotFoundComponent} from "../pages/notFound/notFound.component";

export const routes: Type<any>[] =
[
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
        {
            path: '',
            redirectTo: 'content/test',
            pathMatch: 'full'
        },
        {
            path: 'content',
            loadChildren: () => import('../pages/+content/content.module').then(({ContentModule}) => ContentModule)
        }
    ]
};