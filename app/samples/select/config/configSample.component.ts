import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectOptions} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-sample',
    templateUrl: 'configSample.component.html',
    imports:
    [
        ReactiveFormsModule,
        JsonPipe,
    ],
    providers:
    [
        // <ValueProvider>
        // {
        //     provide: NORMAL_STATE_OPTIONS,
        //     useValue: <NormalStateOptions>
        //     {
        //         texts:
        //         {
        //             nothingSelected: 'There is nothing :)'
        //         }
        //     }
        // }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Select options that are used for select initialization, live search
     */
    protected selectOptions: SelectOptions<KodPopisValue>;

    //######################### constructor #########################
    constructor()
    {
        // this.selectOptions =
        // {
        //     plugins:
        //     {
        //         normalState:
        //         {
        //             options: <NormalStateOptions>
        //             {
        //                 texts:
        //                 {
        //                     nothingSelected: 'Nič nevybraté'
        //                 }
        //             }
        //         }
        //     }
        // };
    }
}
