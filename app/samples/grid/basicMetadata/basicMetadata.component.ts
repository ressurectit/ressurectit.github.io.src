import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {BasicMetadataSampleComponent} from './basicMetadataSample.component';

/**
 * Basic metadata sample for legacy grid component showing all column metadata options
 */
@Component(
{
    selector: 'basic-metadata-view',
    templateUrl: 'basicMetadata.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        BasicMetadataSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicMetadataComponent
{
}
