import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {GroupedColumnsSampleComponent} from './groupedColumnsSample.component';

/**
 * Grouped Columns sample for grid component
 */
@Component(
{
    selector: 'grouped-columns-view',
    templateUrl: 'groupedColumns.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        GroupedColumnsSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedColumnsComponent
{
}
