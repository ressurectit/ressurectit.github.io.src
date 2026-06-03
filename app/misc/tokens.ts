import {InjectionToken} from '@angular/core';

import {SettingsStorage} from '../services/settings';
import {ContentMenu} from '../services/api/content';

/**
 * Token used for settings storage
 */
export const SETTINGS_STORAGE: InjectionToken<SettingsStorage> = new InjectionToken<SettingsStorage>('SETTINGS_STORAGE');

/**
 * Token used for promise that resolves content menu JSON data
 */
export const MENU_JSON_PROMISE: InjectionToken<Promise<ContentMenu[]>> = new InjectionToken<Promise<ContentMenu[]>>('MENU_JSON_PROMISE');