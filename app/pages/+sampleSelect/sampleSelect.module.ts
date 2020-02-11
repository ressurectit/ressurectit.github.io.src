import {NgModule} from "@angular/core";
import {ModuleRoutes} from "@anglr/common/router";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleSelect.routes";
import {BasicSampleComponent} from "./basic/basicSample.component";
import {BasicLazySampleComponent} from "./basicLazy/basicLazySample.component";
import {CustomReadonlySampleComponent} from "./customReadonly/customReadonlySample.component";
import {CustomReadonlyStateComponent} from "./customReadonly/customReadonlyState.component";

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
        BasicLazySampleComponent,
        CustomReadonlySampleComponent,
        CustomReadonlyStateComponent,
        ...components
    ]
})
@ModuleRoutes(components)
export class SampleSelectModule
{
}