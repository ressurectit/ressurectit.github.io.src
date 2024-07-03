import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule, DateTimePickerModule} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Basic sample for datetime with picker directives
 */
@Component(
{
    selector: 'basic-picker-sample',
    templateUrl: 'basicPickerSample.component.html',
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
export class BasicPickerSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    protected datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);
}