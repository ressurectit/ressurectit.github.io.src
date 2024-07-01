import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {LiveSearchSampleComponent} from './liveSearchSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Live search sample for select component
 */
@Component(
{
    selector: 'live-search-view',
    templateUrl: 'liveSearch.component.html',
    standalone: true,
    imports:
    [
        LiveSearchSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveSearchComponent
{
}