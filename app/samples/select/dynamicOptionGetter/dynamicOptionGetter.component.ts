import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {DynamicOptionGetterSampleComponent} from './dynamicOptionGetterSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Dynamic option getter sample for select component
 */
@Component(
{
    selector: 'dynamic-option-getter-view',
    templateUrl: 'dynamicOptionGetter.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        DynamicOptionGetterSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicOptionGetterComponent
{
}
