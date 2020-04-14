import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {BasicSampleComponent} from "./basicSample/basicSample.component";
import {BasicComponent} from "./basicSample/basic.component";
import {BasicLazyComponent} from "./basicLazy/basicLazy.component";
import {BasicLazySampleComponent} from "./basicLazy/basicLazySample.component";
import {ConfigComponent} from "./config/config.component";
import {ConfigSampleComponent} from "./config/configSample.component";
import {CustomReadonlySampleComponent} from "./customReadonly/customReadonlySample.component";
import {CustomReadonlyComponent} from "./customReadonly/customReadonly.component";
import {CustomReadonlyStateComponent} from "./customReadonly/customReadonlyState.component";
import {CustomTemplateComponent} from "./customTemplate/customTemplate.component";
import {CustomTemplateSampleComponent} from "./customTemplate/customTemplateSample.component";
import {DynamicSampleComponent} from "./dynamic/dynamicSample.component";
import {DynamicComponent} from "./dynamic/dynamic.component";
import {ExternalSampleComponent} from "./external/externalSample.component";
import {ExternalComponent} from "./external/external.component";
import {ExternalSourceDirective} from "./external/externalSource.directive";
import {LiveSearchSampleComponent} from "./liveSearch/liveSearchSample.component";
import {LiveSearchComponent} from "./liveSearch/liveSearch.component";
import {MultipleSampleComponent} from "./multiple/multipleSample.component";
import {MultipleComponent} from "./multiple/multiple.component";
import {ReadonlySampleComponent} from "./readonly/readonlySample.component";
import {ReadonlyComponent} from "./readonly/readonly.component";
import {ModalPopupSampleComponent} from './modalPopup/modalPopupSample.component';
import {ModalPopupComponent} from './modalPopup/modalPopup.component';

/**
 * Module with select samples components
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
        BasicComponent,
        BasicLazySampleComponent,
        BasicLazyComponent,
        ConfigSampleComponent,
        ConfigComponent,
        CustomReadonlySampleComponent,
        CustomReadonlyComponent,
        CustomReadonlyStateComponent,
        CustomTemplateSampleComponent,
        CustomTemplateComponent,
        DynamicSampleComponent,
        DynamicComponent,
        ExternalSampleComponent,
        ExternalComponent,
        ExternalSourceDirective,
        LiveSearchSampleComponent,
        LiveSearchComponent,
        MultipleSampleComponent,
        MultipleComponent,
        ReadonlySampleComponent,
        ReadonlyComponent,
        ModalPopupSampleComponent,
        ModalPopupComponent
    ]
})
export class SelectSamplesModule
{
}