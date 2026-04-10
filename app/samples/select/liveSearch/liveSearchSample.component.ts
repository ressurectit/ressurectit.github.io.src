import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {Option, Select, SelectOptions, FilterLiveSearch, SelectFormControl} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

import {KodPopisValue} from '../../../misc/types';

/**
 * Live search sample for select component
 */
@Component(
{
    selector: 'live-search-sample',
    templateUrl: 'liveSearchSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectFormControl,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveSearchSampleComponent
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
            plugins:
            {
                liveSearch:
                {
                    type: FilterLiveSearch,
                },
            },
        };
    }
}
