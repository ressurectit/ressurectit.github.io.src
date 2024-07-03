import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule, NgSelectOptions} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';
import {CustomReadonlyStateComponent} from './customReadonlyState.component';

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-sample',
    templateUrl: 'customReadonlySample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        NgSelectModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlySampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Indication whether is NgSelect readonly
     */
    protected readonly: boolean = false;

    /**
     * Select options that are used for select initialization
     */
    protected selectOptions: NgSelectOptions<KodPopisValue>;
    
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