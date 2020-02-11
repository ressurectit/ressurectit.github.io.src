import {Component, ChangeDetectionStrategy} from "@angular/core";
import {FormControl} from "@angular/forms";
import {NgSelectOptions, BasicLiveSearchComponent} from "@anglr/select";

import {KodPopisValue} from "../../../misc/types";

/**
 * Live search sample for select component
 */
@Component(
{
    selector: 'live-search-sample',
    templateUrl: 'liveSearchSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveSearchSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);

    /**
     * Select options that are used for select initialization, live search
     */
    public selectOptions: NgSelectOptions<KodPopisValue>;

    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            plugins:
            {
                liveSearch:
                {
                    type: BasicLiveSearchComponent
                }
            }
        };
    }
}