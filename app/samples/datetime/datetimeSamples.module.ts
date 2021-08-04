import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePipesModule, DateTimeSelectorModule} from '@anglr/datetime';

import {SamplesFeatureModule} from '../../modules';
import {BasicComponent} from './basic/basic.component';
import {BasicSampleComponent} from './basic/basicSample.component';

/**
 * Module with datetime samples components
 */
@NgModule(
{
    imports:
    [
        CommonModule,
        ReactiveFormsModule,
        SamplesFeatureModule,
        DateTimeSelectorModule,
        DatePipesModule
    ],
    declarations:
    [
        BasicSampleComponent,
        BasicComponent
    ]
})
export class DatetimeSamplesModule
{
}