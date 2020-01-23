import {NgModule, ClassProvider, ExistingProvider} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';
import {MarkdownModule, HelpService} from '@anglr/md-help/web';

import {contentComponents} from './content.component.routes';
import {CommonSharedModule} from "../../boot/commonShared.module";
import {ContentService} from '../../services/api/content';
import {ContentMenuResolver} from './content/content.resolver';

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
    ],
    providers:
    [
        <ClassProvider>
        {
            provide: HelpService,
            useClass: ContentService
        },
        <ExistingProvider>
        {
            provide: ContentService,
            useExisting: HelpService
        },
        ContentMenuResolver
    ]
})
@ModuleRoutes(contentComponents)
export class ContentModule
{
}