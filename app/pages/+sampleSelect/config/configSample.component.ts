import {Component, ChangeDetectionStrategy, ValueProvider} from "@angular/core";
import {FormControl} from "@angular/forms";
import {NgSelectOptions, NormalStateOptions, NORMAL_STATE_OPTIONS} from "@anglr/select";

import {KodPopisValue} from "../../../misc/types";

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-sample',
    templateUrl: 'configSample.component.html',
    providers:
    [
        <ValueProvider>
        {
            provide: NORMAL_STATE_OPTIONS,
            useValue: <NormalStateOptions<any>>
            {
                texts:
                {
                    nothingSelected: "There is nothing :)"
                }
            }
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigSampleComponent
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
                normalState: 
                {
                    options: <NormalStateOptions<any>>
                    {
                        texts:
                        {
                            nothingSelected: 'Nič nevybraté'
                        }
                    }
                }
            }
        };
    }
}