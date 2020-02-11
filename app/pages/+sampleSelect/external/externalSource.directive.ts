import {Directive, OnInit, Input} from '@angular/core';
import {isPresent, isString, ValueNamePair, isBlank} from '@jscrpt/common';
import {NgSelectComponent, CodeOptionsGatherer, NgSelectOption} from '@anglr/select';
import {reinitializeOptions} from '@anglr/select/extensions';
import {Observable} from 'rxjs';

import {DataService} from '../../../services/api/data';
import {KodPopisValue} from '../../../misc/types';
import {NOTHING_SELECTED} from '../../../misc/constants';

/**
 * Directive used for obtaining and creating enumeration of values
 */
@Directive(
{
    selector: 'ng-select[external]',
    providers: [DataService]
})
export class ExternalSourceDirective implements OnInit
{
    //######################### private fields #########################

    /**
     * Enum options gatherer instance
     */
    private _codeOptionsGatherer: CodeOptionsGatherer<string> = new CodeOptionsGatherer<string>();

    //######################### public properties - input #########################

    /**
     * Name of enum which values will be filled into select
     */
    @Input('external')
    public externalSourceName: string;

    /**
     * If this is not empty, empty value with this text will be added
     */
    @Input()
    public emptyValueText: string|boolean;

    /**
     * Indication that use codes also for description of value
     */
    @Input()
    public onlyCodes: boolean;

    /**
     * Indication that use texts also for value
     */
    @Input()
    public onlyTexts: boolean;

    /**
     * Transform mapping function for item
     */
    @Input()
    public mappingCallback: (item: any) => ValueNamePair;

    //######################### constructor #########################
    constructor(private _enums: DataService,
                private _select: NgSelectComponent<string>)
    {
        this._select.selectOptions =
        {
            autoInitialize: false
        };
    }

    //######################### public methods - implementation of OnInit #########################

    /**
     * Initialize component
     */
    public ngOnInit()
    {
        if(isBlank(this.externalSourceName))
        {
            throw new Error("No name was provided for external directive!");
        }

        this._select.execute(reinitializeOptions(
        {
            optionsGatherer: this._codeOptionsGatherer
        }));

        let dataObservable: Observable<KodPopisValue[]>;

        dataObservable = this._enums.getEnum(this.externalSourceName);

        dataObservable
            .subscribe(data =>
            {
                let tmp: ValueNamePair[];

                if(this.mappingCallback)
                {
                    tmp = data.map(this.mappingCallback);
                }
                else
                {
                    tmp = data.map(itm => { return {value: itm.kod, name: itm.popis}; });
                }

                if(this.onlyCodes)
                {
                    tmp = tmp.map(itm => { return {value: itm.value, name: itm.value}; });
                }
                else if(this.onlyTexts)
                {
                    tmp = tmp.map(itm => { return {value: itm.name, name: itm.name}; });
                }

                tmp = tmp.filter(itm => isPresent(itm));

                if(this.emptyValueText)
                {
                    tmp =
                    [
                        {
                            value: '',
                            name: isString(this.emptyValueText) ? this.emptyValueText : NOTHING_SELECTED
                        },
                        ...tmp
                    ];
                }

                this._codeOptionsGatherer.options = tmp.map(itm =>
                {
                    return <NgSelectOption<string>>
                    {
                        value: itm.value,
                        text: itm.name
                    };
                });
        
                this._codeOptionsGatherer.optionsChange.emit();
                this._codeOptionsGatherer.availableOptionsChange.emit();
            });
    }
}

