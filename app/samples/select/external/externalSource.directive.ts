import {Directive, input, InputSignal, InputSignalWithTransform, booleanAttribute, effect, signal} from '@angular/core';
import {CodeOptionsGatherer, Select, SelectOption, SelectOptions} from '@anglr/select';
import {isPresent, isString, ValueNamePair, RecursivePartial} from '@jscrpt/common';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {DataService} from '../../../services/api/data';
import {NOTHING_SELECTED} from '../../../misc/constants';

/**
 * Directive used for obtaining and creating enumeration of values
 */
@Directive(
{
    selector: 'ng-select[external]',
    providers:
    [
        DataService,
    ],
})
export class ExternalSourceDirective
{
    //######################### protected fields #########################

    /**
     * Enum options gatherer instance
     */
    protected codeOptionsGatherer: CodeOptionsGatherer<string> = new CodeOptionsGatherer<string>();

    //######################### public properties - input #########################

    /**
     * Name of enum which values will be filled into select
     */
    public externalSourceName: InputSignal<string> = input.required<string>({alias: 'external'});

    /**
     * If this is not empty, empty value with this text will be added
     */
    public emptyValueText: InputSignal<string|boolean|undefined> = input<string|boolean|undefined>(undefined);

    /**
     * Indication that use codes also for description of value
     */
    public onlyCodes: InputSignalWithTransform<boolean|undefined, string|boolean|undefined> = input<boolean|undefined, string|boolean|undefined>(undefined, {transform: booleanAttribute});

    /**
     * Indication that use texts also for value
     */
    public onlyTexts: InputSignalWithTransform<boolean|undefined, string|boolean|undefined> = input<boolean|undefined, string|boolean|undefined>(undefined, {transform: booleanAttribute});

    //######################### constructor #########################
    constructor(enums: DataService,
                select: Select<string>)
    {
        const opts: RecursivePartial<SelectOptions<string>> =
        {
            optionsGatherer: this.codeOptionsGatherer,
        };

        select.selectOptions = opts as SelectOptions<string>;

        effect(async () =>
        {
            const onlyCodes = this.onlyCodes();
            const onlyTexts = this.onlyTexts();
            const emptyValueText = this.emptyValueText();
            const data = await lastValueFrom(enums.getEnum(this.externalSourceName()));

            if(!data)
            {
                throw new Error(`No data obtained for enum '${this.externalSourceName()}'`);
            }

            let tmp: ValueNamePair[];

            tmp = data.map(itm => ({value: itm.kod, name: itm.popis}));

            if(onlyCodes)
            {
                tmp = tmp.map(itm => ({value: itm.value, name: itm.value}));
            }
            else if(onlyTexts)
            {
                tmp = tmp.map(itm => ({value: itm.name, name: itm.name}));
            }

            tmp = tmp.filter(itm => isPresent(itm));

            if(emptyValueText)
            {
                tmp =
                [
                    {
                        value: '',
                        name: isString(emptyValueText) ? emptyValueText : NOTHING_SELECTED,
                    },
                    ...tmp,
                ];
            }

            this.codeOptionsGatherer.setAvailableOptions(tmp.map(itm =>
            {
                return <SelectOption<string>>
                {
                    value: signal(itm.value),
                    text: signal(itm.name),
                    group: signal(null),
                };
            }));
        });
    }
}
