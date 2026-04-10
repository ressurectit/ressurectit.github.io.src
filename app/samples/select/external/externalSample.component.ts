import {Component, ChangeDetectionStrategy, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {form, FormField} from '@angular/forms/signals';
import {Select, SelectFormControl} from '@anglr/select';

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
        Select,
        JsonPipe,
        FormField,
        SelectFormControl,
        ExternalSourceDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalSampleComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Field bound to select
     */
    protected selectField = form(signal<string|null>(null));
}
