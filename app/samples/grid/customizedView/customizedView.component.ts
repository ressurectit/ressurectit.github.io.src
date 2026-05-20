import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {CustomizedViewSampleComponent} from './customizedViewSample.component';

/**
 * Customized View sample for grid component
 */
@Component(
{
    selector: 'customized-view-view',
    templateUrl: 'customizedView.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        CustomizedViewSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizedViewComponent
{
}
