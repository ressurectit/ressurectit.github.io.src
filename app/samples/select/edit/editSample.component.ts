import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Edit sample for select component
 */
@Component(
{
    selector: 'edit-sample',
    templateUrl: 'editSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);

    /**
     * Control bound to multi select
     */
    public selectMultipleControl: FormControl = new FormControl(null);
}