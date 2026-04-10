import {Component, ChangeDetectionStrategy, WritableSignal, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {Option, Select, SelectFormControl} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-sample',
    templateUrl: 'basicLazySample.component.html',
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
export class BasicLazySampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));

    /**
     * Array of lazy options
     */
    protected lazyOptions: WritableSignal<KodPopisValue[]> = signal([]);

    //######################### constructor #########################
    constructor()
    {
        setTimeout(() =>
        {
            this.lazyOptions.set(
            [
                {
                    kod: 'first-x',
                    popis: 'First value text',
                },
                {
                    kod: 'second-x',
                    popis: 'Second value text',
                },
                {
                    kod: 'third-x',
                    popis: 'Third value text',
                },
                {
                    kod: 'fourth-x',
                    popis: 'Fourth value text',
                },
                {
                    kod: 'fifth-x',
                    popis: 'Fifth value text',
                }
            ]);
        }, 2500);
    }
}
