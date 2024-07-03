import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {HandlersSampleComponent} from './handlersSample.component';
import {SamplesFeatureModule} from '../../../modules';

/**
 * Sample for datetime with picker and handlers directives
 */
@Component(
{
    selector: 'handlers-view',
    templateUrl: 'handlers.component.html',
    standalone: true,
    imports:
    [
        HandlersSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandlersComponent
{
}