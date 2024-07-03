import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {WithTimeSampleComponent} from './withTimeSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Sample for datetime with picker and with time directives 
 */
@Component(
{
    selector: 'with-time-view',
    templateUrl: 'withTime.component.html',
    standalone: true,
    imports:
    [
        WithTimeSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithTimeComponent
{
}