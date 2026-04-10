import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {DisplayValue, NormalStateTemplate, Option, OptionTemplate, Select, SelectFormControl} from '@anglr/select';

/**
 * Custom template sample for select component
 */
@Component(
{
    selector: 'custom-template-sample',
    templateUrl: 'customTemplateSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        DisplayValue,
        OptionTemplate,
        SelectFormControl,
        NormalStateTemplate,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTemplateSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));
}
