import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {AddNewOptionSampleComponent} from './addNewOptionSample.component';

/**
 * Add new option sample for select component
 */
@Component(
{
    selector: 'add-new-option-view',
    templateUrl: 'addNewOption.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        AddNewOptionSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewOptionComponent
{
}
