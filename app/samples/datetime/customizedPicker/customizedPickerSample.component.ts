import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule, DateTimePickerModule, DateTimePickerOptions, MonthPickerComponent, YearPickerComponent} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Sample of date time picker customization
 */
@Component(
{
    selector: 'customized-picker-sample',
    templateUrl: 'customizedPickerSample.component.html',
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
export class CustomizedPickerSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    protected datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);

    /**
     * Options passed to picker
     */
    protected pickerOptions: Partial<DateTimePickerOptions<AppInputDateTime>>;

    //######################### constructor #########################
    constructor()
    {
        this.pickerOptions =
        {
            periodsDefinition:
            {
                month: MonthPickerComponent,
                year: YearPickerComponent,
            },
            defaultPeriod: 'month',
        };
    }
}
