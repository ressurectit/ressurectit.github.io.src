import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Multiple sample for select component
 */
@Component(
{
    selector: 'multiple-view',
    templateUrl: 'multiple.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'multiple'})
export class MultipleComponent
{
}