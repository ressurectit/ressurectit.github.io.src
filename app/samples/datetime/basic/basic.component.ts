import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {BasicSampleComponent} from './basicSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Basic sample for datetime component
 */
@Component(
{
    selector: 'basic-view',
    templateUrl: 'basic.component.html',
    standalone: true,
    imports:
    [
        BasicSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent
{
}