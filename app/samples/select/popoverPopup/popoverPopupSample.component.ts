import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {Option, Select, SelectFormControl} from '@anglr/select';

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

    //######################### constructor #########################
    constructor()
    {
    }
}
