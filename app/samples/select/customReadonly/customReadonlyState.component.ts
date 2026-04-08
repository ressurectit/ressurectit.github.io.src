import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SimpleNormalState, ReadonlyStateOptions, SelectPlugin, ReadonlyState} from '@anglr/select';

/**
 * Custom readonly state component
 */
@Component(
{
    selector: 'custom-readonly-state',
    templateUrl: 'customReadonlyState.component.html',
    imports:
    [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyStateComponent extends SimpleNormalState implements ReadonlyState, SelectPlugin<ReadonlyStateOptions>
{
}
