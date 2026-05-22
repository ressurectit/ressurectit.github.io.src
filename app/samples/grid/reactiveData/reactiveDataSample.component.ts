import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * Reactive Data sample for grid component
 */
@Component(
{
    selector: 'reactive-data-sample',
    templateUrl: 'reactiveDataSample.component.html',
    imports:
    [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveDataSampleComponent
{
}
