import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {BasicSampleComponent} from "./basicSample/basicSample.component";

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
        BasicSampleComponent
    ]
})
export class SelectSamplesModule
{
}