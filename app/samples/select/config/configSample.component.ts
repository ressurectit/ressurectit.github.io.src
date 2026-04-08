import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Option, provideSelectOptions, Select, SelectOptions} from '@anglr/select';
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
        ReactiveFormsModule,
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
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

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
