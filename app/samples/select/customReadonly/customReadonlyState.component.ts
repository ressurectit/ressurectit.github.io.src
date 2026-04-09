import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SimpleNormalState, ReadonlyState, DisplayValue} from '@anglr/select';
import {LocalizePipe} from '@anglr/common';

/**
 * Custom readonly state component
 */
@Component(
{
    selector: 'custom-readonly-state',
    templateUrl: 'customReadonlyState.component.html',
    imports:
    [
        DisplayValue,
        LocalizePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyStateComponent<TValue = unknown> extends SimpleNormalState<TValue> implements ReadonlyState<TValue>
{
}
