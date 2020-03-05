import {NgModule, ClassProvider, ExistingProvider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleRoutes} from '@anglr/common/router';
import {HelpService, MarkdownModule} from '@anglr/md-help/web';

import {contentComponents} from './content.routes';
import {ContentService} from '../../services/api/content';
import {ContentMenuResolver} from './content/content.resolver';
import {RenderMarkdownModule} from '../../modules';
import {DataResolver} from '../../misc/resolvers';
import {DataService} from '../../services/api/data';

/**
 * Content module for displaying content pages
 */
@NgModule(
{
    declarations: [...contentComponents],
    imports:
    [
        RenderMarkdownModule,
        CommonModule,
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
        DataService,
        ContentMenuResolver,
        DataResolver
    ]
})
@ModuleRoutes(contentComponents)
export class ContentModule
{
}