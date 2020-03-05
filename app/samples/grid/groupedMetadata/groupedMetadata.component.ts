import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Grouped metadata sample for grid component
 */
@Component(
{
    selector: 'grouped-metadata-view',
    templateUrl: 'groupedMetadata.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'grouped'})
export class GroupedMetadataComponent
{
}