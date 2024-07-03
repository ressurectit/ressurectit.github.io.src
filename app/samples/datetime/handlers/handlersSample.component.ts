import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DatePipesModule, DateTimeInputHandlerSADirective, DateTimeModule, DateTimePickerModule, SimpleDateTimeInputHandlerSADirective} from '@anglr/datetime';

import {AppInputDateTime} from '../../../misc/types';

/**
 * Sample for datetime with picker and handlers directives
 */
@Component(
{
    selector: 'handlers-sample',
    templateUrl: 'handlersSample.component.html',
    standalone: true,
    imports:
    [
        SimpleDateTimeInputHandlerSADirective,
        DateTimeInputHandlerSADirective,
        DateTimePickerModule,
        ReactiveFormsModule,
        DatePipesModule,
        DateTimeModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandlersSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl<AppInputDateTime|null> = new FormControl(null);

    /**
     * Control bound to 2nd datetime
     */
    public datetimeControl2: FormControl<AppInputDateTime|null> = new FormControl(null);
}