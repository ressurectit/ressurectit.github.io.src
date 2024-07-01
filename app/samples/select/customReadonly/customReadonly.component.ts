import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {CustomReadonlySampleComponent} from './customReadonlySample.component';

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-view',
    templateUrl: 'customReadonly.component.html',
    standalone: true,
    imports:
    [
        SamplesFeatureModule,
        AsyncPipe,
        CustomReadonlySampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyComponent
{
}