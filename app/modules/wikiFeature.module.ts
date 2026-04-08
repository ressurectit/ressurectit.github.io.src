import {NgModule} from '@angular/core';
import {RenderMarkdownDirective} from '@anglr/md-help';

/**
 * Common module for enabling usage of Wiki features (markdown)
 */
@NgModule(
{
    imports:
    [
        RenderMarkdownDirective,
    ],
    exports:
    [
        RenderMarkdownDirective,
    ],
})
export class WikiFeatureModule
{
}
