import {Component, ChangeDetectionStrategy} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

import {ExternalSourceDirective} from './externalSource.directive';

/**
 * External source sample for select component
 */
@Component(
{
    selector: 'external-sample',
    templateUrl: 'externalSample.component.html',
    imports:
    [
        JsonPipe,
        ReactiveFormsModule,
        ExternalSourceDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Control bound to select
     */
    protected selectControl: FormControl<string|null> = new FormControl(null);
}
