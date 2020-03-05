import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {FormControl} from "@angular/forms";

import {KodPopisValue} from "../../../misc/types";

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-sample',
    templateUrl: 'basicLazySample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicLazySampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to select
     */
    public selectControl: FormControl = new FormControl(null);

    /**
     * Array of lazy options
     */
    public lazyOptions: KodPopisValue[] = [];

    //######################### constructor #########################
    constructor(changeDetector: ChangeDetectorRef)
    {
        setTimeout(() =>
        {
            this.lazyOptions = 
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
            ];

            changeDetector.detectChanges();
        }, 2500);
    }
}