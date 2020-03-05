import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Multiple sample for select component
 */
@Component(
{
    selector: 'multiple-sample',
    templateUrl: 'multipleSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);
}