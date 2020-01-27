import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {components} from "./sampleRest.routes";

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
        ...components
    ]
})
export class SampleRestModule
{
}