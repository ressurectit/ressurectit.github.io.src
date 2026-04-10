import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {FormUsageSampleComponent} from './formUsageSample.component';

/**
 * Form usage sample for select component
 */
@Component(
{
    selector: 'form-usage-view',
    templateUrl: 'formUsage.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        FormUsageSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUsageComponent
{
}
