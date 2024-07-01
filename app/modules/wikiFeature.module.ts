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
    ]
})
export class WikiFeatureModule
{
}