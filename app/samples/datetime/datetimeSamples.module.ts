import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePipesModule, DateTimeSelectorModule} from '@anglr/datetime';

import {SamplesFeatureModule} from '../../modules';
import {BasicComponent} from './basic/basic.component';
import {BasicSampleComponent} from './basic/basicSample.component';
import {SimpleSelectorSampleComponent} from './simpleSelector/simpleSelectorSample.component';
import {SimpleSelectorComponent} from './simpleSelector/simpleSelector.component';
import {MinMaxStaticSampleComponent} from './minMaxStatic/minMaxStaticSample.component';
import {MinMaxStaticComponent} from './minMaxStatic/minMaxStatic.component';

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
        BasicComponent,
        SimpleSelectorSampleComponent,
        SimpleSelectorComponent,
        MinMaxStaticSampleComponent,
        MinMaxStaticComponent
    ]
})
export class DatetimeSamplesModule
{
}