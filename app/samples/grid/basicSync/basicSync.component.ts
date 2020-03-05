import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Basic synchronous sample for grid component
 */
@Component(
{
    selector: 'basicSync-view',
    templateUrl: 'basicSync.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSyncComponent
{
}