import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Option, Select} from '@anglr/select';

/**
 * Multiple sample for select component
 */
@Component(
{
    selector: 'multiple-sample',
    templateUrl: 'multipleSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        ReactiveFormsModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);
}
