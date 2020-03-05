import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Dynamic sample for select component
 */
@Component(
{
    selector: 'dynamic-view',
    templateUrl: 'dynamic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent
{
}