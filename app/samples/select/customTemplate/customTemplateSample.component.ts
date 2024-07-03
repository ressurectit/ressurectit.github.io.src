import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@anglr/select';

/**
 * Custom template sample for select component
 */
@Component(
{
    selector: 'custom-template-sample',
    templateUrl: 'customTemplateSample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        JsonPipe,
        NgSelectModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTemplateSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);
}