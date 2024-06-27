import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './content.routes';

/**
 * Content module for displaying content pages
 */
@NgModule()
@ModuleRoutes(components)
export default class ContentModule
{
}