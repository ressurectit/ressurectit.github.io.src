import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * Simple datetime selector sample component
 */
@Component(
{
    selector: 'simple-selector-view',
    templateUrl: 'simpleSelector.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSelectorComponent
{
}