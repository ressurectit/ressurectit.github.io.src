import {Type} from '@angular/core';
import {ModuleRoutesOptions} from '@anglr/common/router';

import {NotFoundComponent} from "../pages/notFound/notFound.component";
import {DEFAULT_CONTENT} from '../misc/constants';

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
        useHash: true,
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled'
    },
    staticRoutesBefore:
    [
        {
            path: '',
            redirectTo: `content/${DEFAULT_CONTENT}`,
            pathMatch: 'full'
        },
        {
            path: 'content',
            loadChildren: () => import('../pages/+content/content.module').then(({ContentModule}) => ContentModule)
        },
        {
            path: 'restSamples',
            loadChildren: () => import('../pages/+sampleRest/sampleRest.module').then(({SampleRestModule}) => SampleRestModule)
        }
    ]
};