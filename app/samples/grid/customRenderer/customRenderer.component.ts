import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Custom renderer sample for grid component
 */
@Component(
{
    selector: 'custom-renderer-view',
    templateUrl: 'customRenderer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomRendererComponent
{
}