import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {BasicSampleComponent} from './basicSample.component';

/**
 * Basic sample for select component
 */
@Component(
{
    selector: 'basic-view',
    templateUrl: 'basic.component.html',
    standalone: true,
    imports:
    [
        SamplesFeatureModule,
        BasicSampleComponent,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent
{
}