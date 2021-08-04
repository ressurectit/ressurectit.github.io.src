import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * Basic sample for datetime component
 */
@Component(
{
    selector: 'basic-sample',
    templateUrl: 'basicSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl = new FormControl(null);
}