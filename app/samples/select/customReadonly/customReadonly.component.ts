import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-view',
    templateUrl: 'customReadonly.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyComponent
{
}