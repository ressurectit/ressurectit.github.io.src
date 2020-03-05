import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {BasicSampleComponent} from "./basicSample/basicSample.component";
import {BasicComponent} from "./basicSample/basic.component";

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
        BasicComponent
    ]
})
export class SelectSamplesModule
{
}