import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule, DateTimePickerModule, WithNowSADirective, WithTimeSADirective, WithTodaySADirective} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Sample for datetime with picker, time and now/today directives
 */
@Component(
{
    selector: 'today-vs-now-sample',
    templateUrl: 'todayVsNowSample.component.html',
    standalone: true,
    imports:
    [
        WithTimeSADirective,
        WithTodaySADirective,
        DateTimePickerModule,
        ReactiveFormsModule,
        WithNowSADirective,
        DatePipesModule,
        DateTimeModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayVsNowSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    protected datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);

    /**
     * Control bound to 2nd datetime
     */
    protected datetimeControl2: FormControl<AppInputDateTime|null> = new FormControl(null);
}