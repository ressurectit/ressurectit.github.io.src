import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

import {DataResolver} from "../../../misc/resolvers";

/**
 * Basic synchronous sample for grid component
 */
@Component(
{
    selector: 'basicSync-view',
    templateUrl: 'basicSync.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'sync', resolve: {data: DataResolver}})
export class BasicSyncComponent
{
}