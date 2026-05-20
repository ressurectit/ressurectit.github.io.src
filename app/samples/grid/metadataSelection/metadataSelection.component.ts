import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {MetadataSelectionSampleComponent} from './metadataSelectionSample.component';

/**
 * Metadata Selection sample for grid component
 */
@Component(
{
    selector: 'metadata-selection-view',
    templateUrl: 'metadataSelection.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        MetadataSelectionSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetadataSelectionComponent
{
}
