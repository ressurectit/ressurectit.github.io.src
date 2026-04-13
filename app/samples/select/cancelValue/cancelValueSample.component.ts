import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectControlValueAccessor} from '@anglr/select';

/**
 * Cancel value sample for select component
 */
@Component(
{
    selector: 'cancel-value-sample',
    templateUrl: 'cancelValueSample.component.html',
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
export class CancelValueSampleComponent
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
