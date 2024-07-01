import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {AbsoluteSampleComponent} from './absoluteSample.component';

/**
 * Absolute sample for select component
 */
@Component(
{
    selector: 'absolute-view',
    templateUrl: 'absolute.component.html',
    standalone: true,
    imports:
    [
        AbsoluteSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsoluteComponent
{
}