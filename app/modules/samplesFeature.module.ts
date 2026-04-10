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
        AsSourcePipe,
        SourceCodeComponent,
    ],
    exports:
    [
        AsSourcePipe,
        MatTabsModule,
        WikiFeatureModule,
        SourceCodeComponent,
    ],
})
export class SamplesFeatureModule
{
}
