import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {TodayVsNowSampleComponent} from './todayVsNowSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Sample for datetime with picker, time and now/today directives
 */
@Component(
{
    selector: 'today-vs-now-view',
    templateUrl: 'todayVsNow.component.html',
    standalone: true,
    imports:
    [
        TodayVsNowSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayVsNowComponent
{
}