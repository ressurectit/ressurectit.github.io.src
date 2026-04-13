import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {Option, PopoverPositioner, PopoverPositionerOptions, Select, SelectFormControl, SelectOptions} from '@anglr/select';
import {RecursivePartial} from '@jscrpt/common';

/**
 * Popover popup sample for select component
 */
@Component(
{
    selector: 'popover-popup-sample',
    templateUrl: 'popoverPopupSample.component.html',
    imports:
    [
        Select,
        Option,
        JsonPipe,
        FormField,
        SelectFormControl,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverPopupSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Select options that are used for select initialization, popover popup
     */
    protected selectOptions: RecursivePartial<SelectOptions<string>>;

    //######################### constructor #########################
    constructor()
    {
        this.selectOptions =
        {
            plugins:
            {
                interactions:
                {
                    options:
                    {
                        handleClickOutside: false,
                    },
                },
                positioner:
                {
                    type: PopoverPositioner,
                    options: <PopoverPositionerOptions>
                    {
                        popoverAuto: true,
                    },
                },
            },
        };
    }
}
