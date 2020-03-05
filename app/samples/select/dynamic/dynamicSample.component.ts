import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";
import {NgSelectOptions, GetOptionsCallback, NgSelectOption, BasicLiveSearchComponent, DynamicValueHandlerComponent, DynamicValueHandlerOptions, DynamicOptionsGatherer} from "@anglr/select";
import {isString} from "@jscrpt/common";

import {KodPopisValue} from "../../../misc/types";
import {DataService} from "../../../services/api/data";

/**
 * Dynamic sample for select component
 */
@Component(
{
    selector: 'dynamic-sample',
    templateUrl: 'dynamicSample.component.html',
    providers: [DataService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Select options that are used for select initialization, custom readonly
     */
    public selectOptions: NgSelectOptions<KodPopisValue>;
    
    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);

    //######################### constructor #########################
    constructor(private _dataSvc: DataService)
    {
        this.selectOptions =
        {
            plugins:
            {
                liveSearch:
                {
                    type: BasicLiveSearchComponent
                },
                valueHandler:
                {
                    type: DynamicValueHandlerComponent,
                    options: <DynamicValueHandlerOptions<KodPopisValue>>
                    {
                        dynamicOptionsCallback: this._getData
                    }
                }
            },
            optionsGatherer: new DynamicOptionsGatherer({dynamicOptionsCallback: this._getData})
        };
    }

    //######################### private methods #########################
    
    /**
     * Used for obtaining dynamic options
     */
    private _getData: GetOptionsCallback<KodPopisValue> = (async value =>
    {
        if(!isString(value))
        {
            value = value.kod;
        }

        let result = await this._dataSvc
            .getCis(value)
            .toPromise();

        if(!result || !result.content || !result.content.length)
        {
            return [];
        }

        return result.content.map(itm =>
        {
            return <NgSelectOption<KodPopisValue>>
            {
                value: itm.kod,
                text: itm.popis
            };
        });
    });
}