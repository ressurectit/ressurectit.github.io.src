import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DateTimeSelectorOptions, SimpleInputDateTimeSelectorComponent} from '@anglr/datetime';

/**
 * Simple datetime selector sample component
 */
@Component(
{
    selector: 'simple-selector-sample',
    templateUrl: 'simpleSelectorSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSelectorSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl = new FormControl(null);

    /**
     * Options for datetime selector
     */
    public dateTimeOptions: DateTimeSelectorOptions;

    //######################### constructor #########################
    constructor()
    {
        this.dateTimeOptions =
        {
            selectorComponent: SimpleInputDateTimeSelectorComponent
        };
    }
}