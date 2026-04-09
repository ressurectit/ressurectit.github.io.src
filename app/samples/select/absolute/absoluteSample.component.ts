import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Select, Option, SelectControlValueAccessor, SelectAbsolute} from '@anglr/select';

/**
 * Absolute sample for select component
 */
@Component(
{
    selector: 'absolute-sample',
    templateUrl: 'absoluteSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        SelectAbsolute,
        ReactiveFormsModule,
        SelectControlValueAccessor,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsoluteSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);
}
