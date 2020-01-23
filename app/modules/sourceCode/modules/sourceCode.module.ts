import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SourceCodeComponent} from "../components";

/**
 * Module containing source code component
 */
@NgModule(
{
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        SourceCodeComponent
    ],
    exports:
    [
        SourceCodeComponent
    ]
})
export class SourceCodeModule
{
}