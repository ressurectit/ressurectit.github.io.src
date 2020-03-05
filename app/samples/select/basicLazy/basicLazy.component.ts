import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-view',
    templateUrl: 'basicLazy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicLazyComponent
{
}