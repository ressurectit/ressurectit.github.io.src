import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {NgSelectModule} from '@anglr/select';

/**
 * Basic sample for select component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
    standalone: true,
    imports:
    [
        NgSelectModule,
        ReactiveFormsModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);
}