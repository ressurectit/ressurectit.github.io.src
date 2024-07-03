import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@anglr/select';

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-sample',
    templateUrl: 'readonlySample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        NgSelectModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadonlySampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Indication whether is NgSelect readonly
     */
    protected readonly: boolean = false;
}