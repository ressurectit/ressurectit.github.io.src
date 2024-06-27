import {Routes} from '@angular/router';
import {extractRoutes} from '@anglr/common/router';

import {notFoundRoute} from '../pages/notFound/notFound.route';

export const routes: Routes = 
[
    ...extractRoutes(
    [
    ]),
    notFoundRoute,
];