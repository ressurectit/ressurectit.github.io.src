import {Component, ChangeDetectionStrategy, signal, WritableSignal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField, readonly} from '@angular/forms/signals';
import {Option, Select, SelectFormControl, SelectOptions} from '@anglr/select';
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
        FormField,
        SelectFormControl,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlySampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null), path => readonly(path, () => this.readonly()));

    /**
     * Indication whether is NgSelect readonly
     */
    protected readonly: WritableSignal<boolean> = signal(false);

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
