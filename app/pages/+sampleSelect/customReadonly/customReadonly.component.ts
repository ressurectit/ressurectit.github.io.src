import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Custom readonly sample for select component
 */
@Component(
{
    selector: 'custom-readonly-view',
    templateUrl: 'customReadonly.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'customReadonly'})
export class CustomReadonlyComponent
{
}