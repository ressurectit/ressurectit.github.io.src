import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleSelect.routes";

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
        ...components
    ]
})
export class SampleSelectModule
{
}