import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {Option, Select, SelectEdit, SelectFormControl} from '@anglr/select';

/**
 * Edit sample for select component
 */
@Component(
{
    selector: 'edit-sample',
    templateUrl: 'editSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectEdit,
        SelectFormControl,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Field bound to multi select
     */
    protected selectMultipleField = form(signal<string[]|null>([]));
}
