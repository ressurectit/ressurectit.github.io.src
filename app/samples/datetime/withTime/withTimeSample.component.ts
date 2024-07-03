import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule, DateTimePickerModule, WithTimeSADirective} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Sample for datetime with picker and with time directives 
 */
@Component(
{
    selector: 'with-time-sample',
    templateUrl: 'withTimeSample.component.html',
    standalone: true,
    imports:
    [
        DateTimePickerModule,
        WithTimeSADirective,
        ReactiveFormsModule,
        DatePipesModule,
        DateTimeModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithTimeSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    protected datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);
}