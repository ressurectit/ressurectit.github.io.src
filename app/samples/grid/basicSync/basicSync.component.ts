import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {BasicSyncSampleComponent} from './basicSyncSample.component';

/**
 * Grid sync sample that uses sync data loader with static data
 */
@Component(
{
    selector: 'basic-sync-view',
    templateUrl: 'basicSync.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        BasicSyncSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSyncComponent
{
}
