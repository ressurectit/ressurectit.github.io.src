import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * Basic sample for select component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);
}