import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {TemplateMetadataSampleComponent} from './templateMetadataSample.component';

/**
 * Template metadata sample for grid component showing all column metadata options
 */
@Component(
{
    selector: 'template-metadata-view',
    templateUrl: 'templateMetadata.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        TemplateMetadataSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateMetadataComponent
{
}
