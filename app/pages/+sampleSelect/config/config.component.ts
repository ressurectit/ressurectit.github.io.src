import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-view',
    templateUrl: 'config.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'config'})
export class ConfigComponent
{
}