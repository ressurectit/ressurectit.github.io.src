import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Dynamic sample for select component
 */
@Component(
{
    selector: 'dynamic-view',
    templateUrl: 'dynamic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'dynamic'})
export class DynamicComponent
{
}