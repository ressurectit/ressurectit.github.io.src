import {NgModule} from "@angular/core";

import {CommonSharedModule} from "../../boot/commonShared.module";
import {BasicSampleComponent} from "./basic/basicSample.component";
import {BasicComponent} from "./basic/basic.component";
import {BasicMetadataSampleComponent} from "./basicMetadata/basicMetadataSample.component";
import {BasicMetadataComponent} from "./basicMetadata/basicMetadata.component";
import {BasicSyncSampleComponent} from "./basicSync/basicSyncSample.component";
import {BasicSyncComponent} from "./basicSync/basicSync.component";
import {ConfigurationSampleComponent} from "./configuration/configurationSample.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {GroupedMetadataSampleComponent} from "./groupedMetadata/groupedMetadataSample.component";
import {GroupedMetadataComponent} from "./groupedMetadata/groupedMetadata.component";

/**
 * Module with grid samples components
 */
@NgModule(
{
    imports:
    [
        CommonSharedModule
    ],
    declarations:
    [
        BasicSampleComponent,
        BasicComponent,
        BasicMetadataSampleComponent,
        BasicMetadataComponent,
        BasicSyncSampleComponent,
        BasicSyncComponent,
        ConfigurationSampleComponent,
        ConfigurationComponent,
        GroupedMetadataSampleComponent,
        GroupedMetadataComponent
    ]
    
})
export class GridSamplesModule
{
}