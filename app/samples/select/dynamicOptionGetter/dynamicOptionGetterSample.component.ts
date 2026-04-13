import {Component, ChangeDetectionStrategy, effect, Signal, viewChild, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {CodeOptionsGatherer, DynamicValueHandler, DynamicValueHandlerOptions, FilterLiveSearch, Select, SelectFormControl, SelectOption, SelectOptions} from '@anglr/select';
import {getSearch} from '@anglr/select/extensions';
import {RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {DataService} from '../../../services/api/data';

/**
 * Dynamic option getter sample for select component
 */
@Component(
{
    selector: 'dynamic-option-getter-sample',
    templateUrl: 'dynamicOptionGetterSample.component.html',
    imports:
    [
        Select,
        JsonPipe,
        FormField,
        SelectFormControl,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicOptionGetterSampleComponent
{
    //######################### protected fields #########################

    /**
     * Options gatherer used for select options, allows to dynamically change options of select
     */
    protected optionsGatherer: CodeOptionsGatherer<string> = new CodeOptionsGatherer<string>();

    //######################### protected properties - template bindings #########################

    /**
     * Select options that are used for select initialization, custom readonly
     */
    protected selectOptions: RecursivePartial<SelectOptions<string>>;

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    //######################### protected properties - children #########################

    /**
     * Instance of select
     */
    protected select: Signal<Select<string>> = viewChild.required<Select<string>>('select');

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
            optionsGatherer: this.optionsGatherer,
        };

        effect(async () =>
        {
            const search = this.select().executeAndReturn(getSearch());

            const result = await lastValueFrom(dataSvc
                .getCis(search));

            if(!result?.content?.length)
            {
                this.optionsGatherer.setAvailableOptions([]);

                return;
            }

            this.optionsGatherer.setAvailableOptions(result.content.map(itm =>
            {
                return <SelectOption<string>>
                {
                    value: signal(itm.kod),
                    text: signal(itm.popis),
                    group: signal(null),
                };
            }));
        });
    }
}
