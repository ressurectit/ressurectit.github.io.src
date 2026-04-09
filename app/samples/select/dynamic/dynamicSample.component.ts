import {Component, ChangeDetectionStrategy, effect, Signal, viewChild, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CodeOptionsGatherer, DynamicValueHandler, DynamicValueHandlerOptions, FilterLiveSearch, Select, SelectControlValueAccessor, SelectOption, SelectOptions} from '@anglr/select';
import {getSearch} from '@anglr/select/extensions';
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
        SelectControlValueAccessor,
    ],
    providers:
    [
        DataService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSampleComponent
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
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

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
