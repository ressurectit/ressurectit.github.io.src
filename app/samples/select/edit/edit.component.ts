import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {EditSampleComponent} from './editSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Edit sample for select component
 */
@Component(
{
    selector: 'edit-view',
    templateUrl: 'edit.component.html',
    standalone: true,
    imports:
    [
        SamplesFeatureModule,
        EditSampleComponent,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent
{
}