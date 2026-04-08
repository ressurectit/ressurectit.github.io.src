import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

/**
 * Absolute sample for select component
 */
@Component(
{
    selector: 'absolute-sample',
    templateUrl: 'absoluteSample.component.html',
    imports:
    [
        ReactiveFormsModule,
        JsonPipe,
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
