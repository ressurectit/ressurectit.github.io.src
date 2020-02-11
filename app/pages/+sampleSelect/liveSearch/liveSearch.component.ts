import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Live search sample for select component
 */
@Component(
{
    selector: 'live-search-view',
    templateUrl: 'liveSearch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'liveSearch'})
export class LiveSearchComponent
{
}