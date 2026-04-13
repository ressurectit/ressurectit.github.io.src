import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectControlValueAccessor} from '@anglr/select';

/**
 * Add new option sample for select component
 */
@Component(
{
    selector: 'add-new-option-sample',
    templateUrl: 'addNewOptionSample.component.html',
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
export class AddNewOptionSampleComponent
{
    //######################### protected properties - template bindings #########################

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
