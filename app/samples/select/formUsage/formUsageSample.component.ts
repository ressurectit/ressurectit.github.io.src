import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectControlValueAccessor} from '@anglr/select';

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
        ReactiveFormsModule,
        SelectControlValueAccessor,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUsageSampleComponent
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
