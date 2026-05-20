import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {HtmlTableSampleComponent} from './htmlTableSample.component';

/**
 * Html Table sample for grid component
 */
@Component(
{
    selector: 'html-table-view',
    templateUrl: 'htmlTable.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        HtmlTableSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlTableComponent
{
}
