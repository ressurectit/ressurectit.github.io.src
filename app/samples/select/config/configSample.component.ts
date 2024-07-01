import {Component, ChangeDetectionStrategy, ValueProvider} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectOptions, NormalStateOptions, NORMAL_STATE_OPTIONS, NgSelectModule} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-sample',
    templateUrl: 'configSample.component.html',
    standalone: true,
    imports:
    [
        NgSelectModule,
        ReactiveFormsModule,
        JsonPipe,
    ],
    providers:
    [
        <ValueProvider>
        {
            provide: NORMAL_STATE_OPTIONS,
            useValue: <NormalStateOptions>
            {
                texts:
                {
                    nothingSelected: 'There is nothing :)'
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
    public selectControl: FormControl<string|null> = new FormControl(null);

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
                    options: <NormalStateOptions>
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