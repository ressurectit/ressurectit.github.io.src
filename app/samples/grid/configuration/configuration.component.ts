import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";

/**
 * Configuration sample for grid component
 */
@Component(
{
    selector: 'configuration-view',
    templateUrl: 'configuration.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: 'config'})
export class ConfigurationComponent
{
}