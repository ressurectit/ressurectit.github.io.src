import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {ExternalSampleComponent} from './externalSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * External source sample for select component
 */
@Component(
{
    selector: 'external-view',
    templateUrl: 'external.component.html',
    standalone: true,
    imports:
    [
        ExternalSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalComponent
{
}