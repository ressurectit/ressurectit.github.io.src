import {Routes} from '@angular/router';

import {notFoundRoute} from '../pages/notFound/notFound.route';

export const routes: Routes = 
[
    {
        path: '',
        loadChildren: () => import('../pages/+content/content.module')
    },
    notFoundRoute,
];