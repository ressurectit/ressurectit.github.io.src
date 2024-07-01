import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {BasicPickerSampleComponent} from './basicPickerSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Basic sample for datetime with picker directives 
 */
@Component(
{
    selector: 'basic-picker-view',
    templateUrl: 'basicPicker.component.html',
    standalone: true,
    imports:
    [
        BasicPickerSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicPickerComponent
{
}