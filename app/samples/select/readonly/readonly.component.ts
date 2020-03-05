import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-view',
    templateUrl: 'readonly.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadonlyComponent
{
}