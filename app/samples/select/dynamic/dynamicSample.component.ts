import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectOptions} from '@anglr/select';

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
        ReactiveFormsModule,
        JsonPipe,

    ],
    providers:
    [
        DataService
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Select options that are used for select initialization, custom readonly
     */
    protected selectOptions: SelectOptions<string>;

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    //######################### constructor #########################
    constructor(private _dataSvc: DataService)
    {
        // this.selectOptions =
        // {
        //     plugins:
        //     {
        //         liveSearch:
        //         {
        //             type: FilteringLiveSearch
        //         },
        //         valueHandler:
        //         {
        //             type: DynamicValueHandler,
        //             options: <DynamicValueHandlerOptions<string>>
        //             {
        //                 dynamicOptionsCallback: this._getData
        //             }
        //         }
        //     },
        //     optionsGatherer: new DynamicOptionsGatherer({dynamicOptionsCallback: this._getData})
        // };
    }

    //######################### private methods #########################

    //TODO: update split search and obtaining values

    // /**
    //  * Used for obtaining dynamic options
    //  */
    // private _getData: GetOptionsCallback<string> = (async value =>
    // {
    //     const result = await lastValueFrom(this._dataSvc
    //         .getCis(value));

    //     if(!result || !result.content || !result.content.length)
    //     {
    //         return [];
    //     }

    //     return result.content.map(itm =>
    //     {
    //         return <NgSelectOption<string>>
    //         {
    //             value: itm.kod,
    //             text: itm.popis
    //         };
    //     });
    // });
}