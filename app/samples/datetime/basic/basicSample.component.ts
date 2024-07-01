import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {DatePipesModule, DateTimeModule} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Basic sample for datetime component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
    standalone: true,
    imports:
    [
        ReactiveFormsModule,
        DatePipesModule,
        DateTimeModule,
        JsonPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);
}