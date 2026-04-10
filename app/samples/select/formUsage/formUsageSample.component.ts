import {Component, ChangeDetectionStrategy, ChangeDetectorRef, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {form, FormField} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectControlValueAccessor, SelectFormControl} from '@anglr/select';

/**
 * Form usage sample for select component
 */
@Component(
{
    selector: 'form-usage-sample',
    templateUrl: 'formUsageSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectFormControl,
        ReactiveFormsModule,
        SelectControlValueAccessor,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUsageSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    //######################### constructor #########################
    constructor(changeDetector: ChangeDetectorRef,)
    {
        this.selectControl.valueChanges.subscribe(() => changeDetector.markForCheck());
    }
}
