import {NgModule} from "@angular/core";
import {ModuleRoutes} from "@anglr/common/router";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleRest.routes";
import {UsageSampleComponent} from "./usage/usageSample.component";

/**
 * Module for samples for rest
 */
@NgModule(
{
    imports:
    [
        CommonSharedModule
    ],
    declarations:
    [
        ...components,
        UsageSampleComponent
    ]
})
@ModuleRoutes(components)
export class SampleRestModule
{
}