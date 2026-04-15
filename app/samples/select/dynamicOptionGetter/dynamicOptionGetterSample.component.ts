import {Component, ChangeDetectionStrategy, effect, Signal, viewChild, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {CodeOptionsGatherer, DynamicValueHandler, DynamicValueHandlerOptions, Select, SelectEdit, SelectFormControl, SelectOption, SelectOptions, ValueExtractorFunc} from '@anglr/select';
import {getSearch} from '@anglr/select/extensions';
import {generateId, RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {DataService} from '../../../services/api/data';

interface ObjectValue
{
    kod: string;
    randomId: string;
}

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
        SelectEdit,
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
    protected optionsGatherer: CodeOptionsGatherer<ObjectValue> = new CodeOptionsGatherer<ObjectValue>();

    //######################### protected properties - template bindings #########################

    /**
     * Select options that are used for select initialization, custom readonly
     */
    protected selectOptions: RecursivePartial<SelectOptions<ObjectValue>>;

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>('P80747'));

    //######################### protected properties - children #########################

    /**
     * Instance of select
     */
    protected select: Signal<Select<ObjectValue, string>> = viewChild.required<Select<ObjectValue, string>>('select');

    //######################### constructor #########################
    constructor(dataSvc: DataService)
    {
        this.selectOptions =
        {
            valueExtractor: <ValueExtractorFunc<ObjectValue, string>> (itm => itm.value()?.kod ?? ''),
            plugins:
            {
                valueHandler:
                {
                    type: DynamicValueHandler,
                    options: <DynamicValueHandlerOptions<ObjectValue, string>>
                    {
                        optionGetter: async value =>
                        {
                            const result = await lastValueFrom(dataSvc.getCisDetail(value));

                            return result ?
                                {
                                    group: signal(null),
                                    text: signal(result.popis),
                                    value: signal(
                                    {
                                        kod: result.kod,
                                        randomId: generateId(12),
                                    }),
                                } :
                                null;
                        },
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
                return <SelectOption<ObjectValue>>
                {
                    value: signal(
                    {
                        kod: itm.kod,
                        randomId: generateId(12),
                    }),
                    text: signal(itm.popis),
                    group: signal(null),
                };
            }));
        });
    }
}
