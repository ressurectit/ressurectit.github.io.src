import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-view',
    templateUrl: 'config.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigComponent
{
}