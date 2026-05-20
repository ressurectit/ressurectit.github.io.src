import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {OrderingSampleComponent} from './orderingSample.component';

/**
 * Ordering sample for grid component
 */
@Component(
{
    selector: 'ordering-view',
    templateUrl: 'ordering.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        OrderingSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderingComponent
{
}
