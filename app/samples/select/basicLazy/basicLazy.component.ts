import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Basic lazy sample for select component
 */
@Component(
{
    selector: 'basic-lazy-view',
    templateUrl: 'basicLazy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'basicLazy'})
export class BasicLazyComponent
{
}