import {NgModule} from "@angular/core";
import {ModuleRoutes} from "@anglr/common/router";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleSelect.routes";
import {BasicSampleComponent} from "./basic/basicSample.component";

/**
 * Module for samples for select
 */
@NgModule(
{
    imports:
    [
        CommonSharedModule
    ],
    declarations:
    [
        BasicSampleComponent,
        ...components
    ]
})
@ModuleRoutes(components)
export class SampleSelectModule
{
}