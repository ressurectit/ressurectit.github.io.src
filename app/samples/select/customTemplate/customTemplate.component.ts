import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {CustomTemplateSampleComponent} from './customTemplateSample.component';

/**
 * Custom template sample for select component
 */
@Component(
{
    selector: 'custom-template-view',
    templateUrl: 'customTemplate.component.html',
    standalone: true,
    imports:
    [
        SamplesFeatureModule,
        AsyncPipe,
        CustomTemplateSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTemplateComponent
{
}