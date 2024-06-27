import {NgModule} from '@angular/core';
import {MarkdownModule} from '@anglr/md-help/web';

/**
 * Common module for enabling usage of Wiki features (markdown)
 */
@NgModule(
{
    exports:
    [
        MarkdownModule,
        // RenderMarkdownModule
    ]
})
export class WikiFeatureModule
{
}