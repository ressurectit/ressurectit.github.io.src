import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {StronglyTypedSampleComponent} from './stronglyTypedSample.component';

/**
 * Strongly Typed sample for grid component
 */
@Component(
{
    selector: 'strongly-typed-view',
    templateUrl: 'stronglyTyped.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        StronglyTypedSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StronglyTypedComponent
{
}
