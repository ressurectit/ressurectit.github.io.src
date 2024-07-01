import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {BasicLazySampleComponent} from './basicLazySample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-view',
    templateUrl: 'basicLazy.component.html',
    standalone: true,
    imports:
    [
        BasicLazySampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicLazyComponent
{
}