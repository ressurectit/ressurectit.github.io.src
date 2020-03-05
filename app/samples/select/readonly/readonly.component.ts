import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Readonly sample for select component
 */
@Component(
{
    selector: 'readonly-view',
    templateUrl: 'readonly.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'readonly'})
export class ReadonlyComponent
{
}