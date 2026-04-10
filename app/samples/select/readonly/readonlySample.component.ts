import {Component, ChangeDetectionStrategy, signal, WritableSignal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField, readonly} from '@angular/forms/signals';
import {Option, Select, SelectFormControl} from '@anglr/select';

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-sample',
    templateUrl: 'readonlySample.component.html',
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
export class ReadonlySampleComponent
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
}
