import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasicNormalStateComponent, ReadonlyStateOptions, NgSelectPlugin, ReadonlyState, NgSelectModule} from '@anglr/select';

/**
 * Custom readonly state component
 */
@Component(
{
    selector: 'custom-readonly-state',
    templateUrl: 'customReadonlyState.component.html',
    standalone: true,
    imports:
    [
        NgSelectModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyStateComponent extends BasicNormalStateComponent implements ReadonlyState, NgSelectPlugin<ReadonlyStateOptions<any>>
{
}