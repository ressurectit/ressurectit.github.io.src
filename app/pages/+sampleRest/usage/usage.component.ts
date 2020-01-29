import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * REST usage samples page
 */
@Component(
{
    selector: 'usage-view',
    templateUrl: 'usage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: ''})
export class UsageComponent
{
}