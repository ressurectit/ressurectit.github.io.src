import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Absolute sample for select component
 */
@Component(
{
    selector: 'absolute-sample',
    templateUrl: 'absoluteSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsoluteSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);
}