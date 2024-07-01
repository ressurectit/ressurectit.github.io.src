import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {DynamicSampleComponent} from './dynamicSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Dynamic sample for select component
 */
@Component(
{
    selector: 'dynamic-view',
    templateUrl: 'dynamic.component.html',
    standalone: true,
    imports:
    [
        DynamicSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent
{
}