import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {ReactiveDataSampleComponent} from './reactiveDataSample.component';

/**
 * Reactive Data sample for grid component
 */
@Component(
{
    selector: 'reactive-data-view',
    templateUrl: 'reactiveData.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        ReactiveDataSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveDataComponent
{
}
