import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * External source sample for select component
 */
@Component(
{
    selector: 'external-view',
    templateUrl: 'external.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalComponent
{
}