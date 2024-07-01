import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {LegacyBasicSampleComponent} from './legacyBasicSample.component';

/**
 * Basic sample for grid component
 */
@Component(
{
    selector: 'legacy-basic-view',
    templateUrl: 'legacyBasic.component.html',
    standalone: true,
    imports:
    [
        SamplesFeatureModule,
        LegacyBasicSampleComponent,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegacyBasicComponent
{
}