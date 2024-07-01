import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule, DateTimePickerModule} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Sample for datetime with picker directives with different data types
 */
@Component(
{
    selector: 'data-types-sample',
    templateUrl: 'dataTypesSample.component.html',
    standalone: true,
    imports:
    [
        DateTimePickerModule,
        ReactiveFormsModule,
        DatePipesModule,
        DateTimeModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTypesSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);
    
    /**
     * Control bound to datetime of type number
     */
    public timestampControl: FormControl<number|null> = new FormControl(null);

    /**
     * Control bound to datetime of type string
     */
    public stringControl: FormControl<string|null> = new FormControl(null);

    /**
     * Control bound to datetime of type string with custom display and value format
     */
    public customStringControl: FormControl<string|null> = new FormControl(null);
}