import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-sample',
    templateUrl: 'readonlySample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadonlySampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);

    /**
     * Indication whether is NgSelect readonly
     */
    public readonly: boolean = false;
}