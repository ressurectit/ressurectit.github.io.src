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
    standalone: true,
    imports:
    [
        MultipleSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleComponent
{
}