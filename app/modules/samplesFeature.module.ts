import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {WikiFeatureModule} from './wikiFeature.module';

/**
 * Common module for enabling usage of features used in all samples
 */
@NgModule(
{
    exports:
    [
        WikiFeatureModule,
        // SourceCodeModule,
        // AsSourceModule,
        MatTabsModule
    ]
})
export class SamplesFeatureModule
{
}