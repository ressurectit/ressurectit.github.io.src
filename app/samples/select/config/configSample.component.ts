import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {Option, provideSelectOptions, Select, SelectFormControl, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

import {KodPopisValue} from '../../../misc/types';

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-sample',
    templateUrl: 'configSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectFormControl,
    ],
    providers:
    [
        provideSelectOptions(
        {
            placeholder: 'There is nothing :)',
        }),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Select options that are used for select initialization, live search
     */
    protected selectOptions: RecursivePartial<SelectOptions<KodPopisValue>>;

    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            placeholder: 'Nothing selected yet',
        };
    }
}
