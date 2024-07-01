import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@anglr/select';

/**
 * Edit sample for select component
 */
@Component(
{
    selector: 'edit-sample',
    templateUrl: 'editSample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        NgSelectModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Control bound to multi select
     */
    public selectMultipleControl: FormControl<string|null> = new FormControl(null);
}