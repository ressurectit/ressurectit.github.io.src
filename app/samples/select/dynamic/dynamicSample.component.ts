import {Component, ChangeDetectionStrategy, effect} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CodeOptionsGatherer, DynamicValueHandler, DynamicValueHandlerOptions, FilterLiveSearch, Select, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {DataService} from '../../../services/api/data';

/**
 * Dynamic sample for select component
 */
@Component(
{
    selector: 'dynamic-sample',
    templateUrl: 'dynamicSample.component.html',
    imports:
    [
        Select,
        JsonPipe,
        ReactiveFormsModule,

    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Select options that are used for select initialization, custom readonly
     */
    protected selectOptions: RecursivePartial<SelectOptions<string>>;

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    //######################### constructor #########################
    constructor(dataSvc: DataService)
    {
        this.selectOptions =
        {
            plugins:
            {
                liveSearch:
                {
                    type: FilterLiveSearch,
                },
                valueHandler:
                {
                    type: DynamicValueHandler,
                    options: <DynamicValueHandlerOptions<string>>
                    {
                    },
                },
            },
            optionsGatherer: new CodeOptionsGatherer<string>(),
        };

        effect(async () =>
        {
            const search = this

            const result = await lastValueFrom(this._dataSvc
            .getCis(value));

        if(!result || !result.content || !result.content.length)
        {
            return [];
        }

        return result.content.map(itm =>
        {
            return <NgSelectOption<string>>
            {
                value: itm.kod,
                text: itm.popis
            };
        });
        });
    }
}