import {Component, ChangeDetectionStrategy, WritableSignal, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@anglr/select';

import {KodPopisValue} from '../../../misc/types';

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-sample',
    templateUrl: 'basicLazySample.component.html',
    standalone: true,
    imports:
    [
        JsonPipe,
        NgSelectModule,
        ReactiveFormsModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicLazySampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl<string|null> = new FormControl(null);

    /**
     * Array of lazy options
     */
    public lazyOptions: WritableSignal<KodPopisValue[]> = signal([]);

    //######################### constructor #########################
    constructor()
    {
        setTimeout(() =>
        {
            this.lazyOptions.set( 
            [
                {
                    kod: 'first-x',
                    popis: 'First value text'
                },
                {
                    kod: 'second-x',
                    popis: 'Second value text'
                },
                {
                    kod: 'third-x',
                    popis: 'Third value text'
                },
                {
                    kod: 'fourth-x',
                    popis: 'Fourth value text'
                },
                {
                    kod: 'fifth-x',
                    popis: 'Fifth value text'
                }
            ]);
        }, 2500);
    }
}