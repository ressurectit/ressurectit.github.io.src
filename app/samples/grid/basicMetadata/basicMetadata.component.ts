import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Basic metadata sample for grid component
 */
@Component(
{
    selector: 'basicMetadata-view',
    templateUrl: 'basicMetadata.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'metadata'})
export class BasicMetadataComponent
{
}