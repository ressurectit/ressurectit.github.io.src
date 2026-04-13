import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {HideCarretSampleComponent} from './hideCarretSample.component';

/**
 * Hide carret sample for select component
 */
@Component(
{
    selector: 'hide-carret-view',
    templateUrl: 'hideCarret.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        HideCarretSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HideCarretComponent
{
}
