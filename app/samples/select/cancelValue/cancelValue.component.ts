import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {CancelValueSampleComponent} from './cancelValueSample.component';

/**
 * Cancel value sample for select component
 */
@Component(
{
    selector: 'cancel-value-view',
    templateUrl: 'cancelValue.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        CancelValueSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelValueComponent
{
}
