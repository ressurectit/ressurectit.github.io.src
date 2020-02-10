import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Basic sample for select component
 */
@Component(
{
    selector: 'basic-view',
    templateUrl: 'basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: ''})
export class BasicComponent
{
}