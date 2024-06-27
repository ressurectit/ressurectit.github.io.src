import {inject} from '@angular/core';
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
