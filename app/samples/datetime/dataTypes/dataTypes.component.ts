import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {DataTypesSampleComponent} from './dataTypesSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Sample for datetime with picker directives with different data types
 */
@Component(
{
    selector: 'data-types-view',
    templateUrl: 'dataTypes.component.html',
    standalone: true,
    imports:
    [
        DataTypesSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTypesComponent
{
}