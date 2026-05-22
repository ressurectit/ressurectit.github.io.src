import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {RowSelectionSampleComponent} from './rowSelectionSample.component';

/**
 * Row Selection sample for grid component
 */
@Component(
{
    selector: 'row-selection-view',
    templateUrl: 'rowSelection.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        RowSelectionSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowSelectionComponent
{
}
