import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {CustomizedPickerSampleComponent} from './customizedPickerSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Sample of date time picker customization
 */
@Component(
{
    selector: 'customized-picker-view',
    templateUrl: 'customizedPicker.component.html',
    standalone: true,
    imports:
    [
        CustomizedPickerSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizedPickerComponent
{
}