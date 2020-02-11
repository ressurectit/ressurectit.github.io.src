import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";
import {NgSelectOptions} from "@anglr/select";

import {KodPopisValue} from "../../../misc/types";
import {CustomReadonlyStateComponent} from "./customReadonlyState.component";

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-sample',
    templateUrl: 'customReadonlySample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlySampleComponent
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

    /**
     * Select options that are used for select initialization
     */
    public selectOptions: NgSelectOptions<KodPopisValue>;
    
    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            plugins:
            {
                readonlyState:
                {
                    type: CustomReadonlyStateComponent
                }
            }
        };
    }
}