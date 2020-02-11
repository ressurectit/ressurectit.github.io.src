import {NgModule} from "@angular/core";
import {ModuleRoutes} from "@anglr/common/router";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleSelect.routes";
import {BasicSampleComponent} from "./basic/basicSample.component";
import {BasicLazySampleComponent} from "./basicLazy/basicLazySample.component";
import {CustomReadonlySampleComponent} from "./customReadonly/customReadonlySample.component";
import {CustomReadonlyStateComponent} from "./customReadonly/customReadonlyState.component";
import {CustomTemplateSampleComponent} from "./customTemplate/customTemplateSample.component";
import {DynamicSampleComponent} from "./dynamic/dynamicSample.component";
import {LiveSearchSampleComponent} from "./liveSearch/liveSearchSample.component";
import {MultipleSampleComponent} from "./multiple/multipleSample.component";

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
        CustomTemplateSampleComponent,
        DynamicSampleComponent,
        LiveSearchSampleComponent,
        MultipleSampleComponent,
        ...components
    ]
})
@ModuleRoutes(components)
export class SampleSelectModule
{
}