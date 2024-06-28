import {inject} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {lastValueFrom} from 'rxjs';

import {ContentMenu, ContentService} from '../../../services/api/content';

/**
 * Resolver that resolves data for content menu
 */
export function contentMenuResolver(): Promise<ContentMenu[]>
{
    const contentSvc = inject(ContentService);

    return lastValueFrom(contentSvc.getMenu());
}

/**
 * Resolver that resolves data for content markdown
 */
export async function contentMarkdownResolver(route: ActivatedRouteSnapshot): Promise<string>
{
    const url = route.url.join('/');
    const contentSvc = inject(ContentService);

    return lastValueFrom(contentSvc.get(url));
}
