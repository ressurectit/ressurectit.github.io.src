import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectEdit, SelectFormControl, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

/**
 * Add new option sample for select component
 */
@Component(
{
    selector: 'add-new-option-sample',
    templateUrl: 'addNewOptionSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectEdit,
        SelectFormControl,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewOptionSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Select options that are used for select initialization, custom readonly
     */
    protected selectOptions: RecursivePartial<SelectOptions<string>>;

    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            plugins:
            {
                optionsHandler:
                {
                    options:
                    {
                        newOptionGetter: value =>
                        {
                            return {
                                group: signal(null),
                                text: signal(value),
                                value: signal(value),
                            };
                        },
                    },
                },
            },
        };
    }
}
