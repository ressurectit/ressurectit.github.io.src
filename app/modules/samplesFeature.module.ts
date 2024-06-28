import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {WikiFeatureModule} from './wikiFeature.module';
import {SourceCodeComponent} from '../components';
import {AsSourcePipe} from '../pipes';

/**
 * Common module for enabling usage of features used in all samples
 */
@NgModule(
{
    imports:
    [
        SourceCodeComponent,
        AsSourcePipe,
    ],
    exports:
    [
        WikiFeatureModule,
        SourceCodeComponent,
        AsSourcePipe,
        MatTabsModule,
    ]
})
export class SamplesFeatureModule
{
}