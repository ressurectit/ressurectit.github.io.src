import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DisplayValue, NormalStateTemplate, Option, OptionTemplate, Select, SelectControlValueAccessor} from '@anglr/select';

/**
 * Custom template sample for select component
 */
@Component(
{
    selector: 'custom-template-sample',
    templateUrl: 'customTemplateSample.component.html',
    imports: [
    Select,
    Option,
    JsonPipe,
    DisplayValue,
    OptionTemplate,
    NormalStateTemplate,
    ReactiveFormsModule,
    SelectControlValueAccessor,
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
