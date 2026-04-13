import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {EditNormalStateOptions, Option, Select, SelectEdit, SelectFormControl, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

/**
 * Hide carret sample for select component
 */
@Component(
{
    selector: 'hide-carret-sample',
    templateUrl: 'hideCarretSample.component.html',
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
export class HideCarretSampleComponent
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
                normalState:
                {
                    options: <EditNormalStateOptions>
                    {
                        carret: false,
                    },
                },
            },
        };
    }
}
