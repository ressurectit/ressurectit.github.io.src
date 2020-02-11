import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Custom template sample for select component
 */
@Component(
{
    selector: 'custom-template-view',
    templateUrl: 'customTemplate.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'customTemplate'})
export class CustomTemplateComponent
{
}