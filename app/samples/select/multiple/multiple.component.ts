import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {MultipleSampleComponent} from './multipleSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Multiple sample for select component
 */
@Component(
{
    selector: 'multiple-view',
    templateUrl: 'multiple.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        MultipleSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleComponent
{
}
