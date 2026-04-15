import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {StylingSampleComponent} from './stylingSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Styling sample for select component
 */
@Component(
{
    selector: 'styling-view',
    templateUrl: 'styling.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        StylingSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylingViewComponent
{
}
