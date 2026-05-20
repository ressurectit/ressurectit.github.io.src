import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * Strongly Typed sample for grid component
 */
@Component(
{
    selector: 'strongly-typed-sample',
    templateUrl: 'stronglyTypedSample.component.html',
    imports:
    [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StronglyTypedSampleComponent
{
}
