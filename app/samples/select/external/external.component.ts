import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * External source sample for select component
 */
@Component(
{
    selector: 'external-view',
    templateUrl: 'external.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'external'})
export class ExternalComponent
{
}