import {NgModule} from "@angular/core";

import {RenderMarkdownDirective} from "../directives";

/**
 * Module containing custom render markdown directive
 */
@NgModule(
{
    declarations:
    [
        RenderMarkdownDirective
    ],
    exports:
    [
        RenderMarkdownDirective
    ]
})
export class RenderMarkdownModule
{
}