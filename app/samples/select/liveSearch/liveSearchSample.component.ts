import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {NgSelectOptions, BasicLiveSearchComponent, NgSelectModule} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';

/**
 * Live search sample for select component
 */
@Component(
{
    selector: 'live-search-sample',
    templateUrl: 'liveSearchSample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        NgSelectModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveSearchSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Select options that are used for select initialization, live search
     */
    protected selectOptions: NgSelectOptions<KodPopisValue>;

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