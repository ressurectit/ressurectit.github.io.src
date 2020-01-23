import {NgModule} from "@angular/core";

import {AsSourcePipe} from "../pipes";

/**
 * Module for asSource pipe
 */
@NgModule(
{
    declarations:
    [
        AsSourcePipe
    ],
    exports:
    [
        AsSourcePipe
    ]
})
export class AsSourceModule
{
}