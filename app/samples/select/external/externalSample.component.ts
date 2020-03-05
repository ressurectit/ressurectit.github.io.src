import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";

/**
 * External source sample for select component
 */
@Component(
{
    selector: 'external-sample',
    templateUrl: 'externalSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);
}