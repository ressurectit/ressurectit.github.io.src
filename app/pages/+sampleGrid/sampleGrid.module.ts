import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './sampleGrid.component.routes';
import {CommonSharedModule} from "../../boot/commonShared.module";

/**
 * Module for samples for grid
 */
@NgModule(
{
    declarations: 
    [
        ...components
    ],
    imports:
    [
        CommonSharedModule
    ]
})
@ModuleRoutes(components)
export class SampleGridModule
{
}