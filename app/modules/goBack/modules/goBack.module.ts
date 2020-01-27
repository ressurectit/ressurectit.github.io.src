import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {GoBackComponent} from "../components";

/**
 * Module for go back component
 */
@NgModule(
{
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        GoBackComponent
    ],
    exports:
    [
        GoBackComponent
    ]
})
export class GoBackModule
{
}