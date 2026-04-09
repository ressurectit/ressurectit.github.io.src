import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Option, Select, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

import {KodPopisValue} from '../../../misc/types';
import {CustomReadonlyStateComponent} from './customReadonlyState.component';

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-sample',
    templateUrl: 'customReadonlySample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        ReactiveFormsModule,
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
    protected selectOptions: RecursivePartial<SelectOptions<KodPopisValue>>;

    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            plugins:
            {
                readonlyState:
                {
                    type: CustomReadonlyStateComponent,
                },
            },
        };
    }
}
