import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Option, Select, SelectControlValueAccessor} from '@anglr/select';

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
        ReactiveFormsModule,
        SelectControlValueAccessor,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Control bound to multi select
     */
    protected selectMultipleControl: FormControl<string|null> = new FormControl(null);
}
