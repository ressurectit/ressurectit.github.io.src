import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './sampleGrid.component.routes';
import {CommonSharedModule} from "../../boot/commonShared.module";
import {BasicSampleComponent} from './basic/basicSample.component';
import {BasicSyncSampleComponent} from './basicSync/basicSyncSample.component';
import {BasicMetadataSampleComponent} from './basicMetadata/basicMetadataSample.component';
import {GroupedMetadataSampleComponent} from './groupedMetadata/groupedMetadataSample.component';
import {DataResolver} from '../../misc/resolvers';
import {DataService} from '../../services/api/data';

/**
 * Module for samples for grid
 */
@NgModule(
{
    declarations: 
    [
        ...components,
        BasicSampleComponent,
        BasicSyncSampleComponent,
        BasicMetadataSampleComponent,
        GroupedMetadataSampleComponent
    ],
    imports:
    [
        CommonSharedModule
    ],
    providers:
    [
        DataResolver,
        DataService
    ]
})
@ModuleRoutes(components)
export class SampleGridModule
{
}