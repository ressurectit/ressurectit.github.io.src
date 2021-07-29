import {NgModule, ClassProvider, ExistingProvider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleRoutes} from '@anglr/common/router';
import {HelpService} from '@anglr/md-help/web';

import {components} from './content.routes';
import {ContentService} from '../../services/api/content';
import {ContentMenuResolver} from './content/content.resolver';
import {DataResolver} from '../../misc/resolvers';
import {DataService} from '../../services/api/data';
import {WikiFeatureModule} from '../../modules';

/**
 * Content module for displaying content pages
 */
@NgModule(
{
    declarations: [...components],
    imports:
    [
        CommonModule,
        WikiFeatureModule
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
@ModuleRoutes(components)
export class ContentModule
{
}