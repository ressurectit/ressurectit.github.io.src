import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Basic sample for grid component
 */
@Component(
{
    selector: 'basic-view',
    templateUrl: 'basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent
{
}