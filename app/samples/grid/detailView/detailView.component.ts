import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {DetailViewSampleComponent} from './detailViewSample.component';

/**
 * Detail View sample for grid component
 */
@Component(
{
    selector: 'detail-view-view',
    templateUrl: 'detailView.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        DetailViewSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent
{
}
