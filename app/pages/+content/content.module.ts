import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';
import {MarkdownModule} from '@anglr/md-help/web';

import {contentComponents} from './content.component.routes';
import {CommonSharedModule} from "../../boot/commonShared.module";

/**
 * Content module for displaying content pages
 */
@NgModule(
{
    declarations: [...contentComponents],
    imports:
    [
        CommonSharedModule,
        MarkdownModule
    ]
})
@ModuleRoutes(contentComponents)
export class ContentModule
{
}