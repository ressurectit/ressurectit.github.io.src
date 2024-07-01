import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {ReadonlySampleComponent} from './readonlySample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-view',
    templateUrl: 'readonly.component.html',
    standalone: true,
    imports:
    [
        ReadonlySampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadonlyComponent
{
}