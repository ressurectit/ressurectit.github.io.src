import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * Min max static datetime sample component
 */
@Component(
{
    selector: 'min-max-static-sample',
    templateUrl: 'minMaxStaticSample.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinMaxStaticSampleComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Control bound to datetime
     */
    public datetimeControl: FormControl = new FormControl(null);
}