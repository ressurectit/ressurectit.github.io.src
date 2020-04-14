import {Component, ChangeDetectionStrategy} from "@angular/core";
import {BasicNormalStateComponent, ReadonlyStateOptions, NgSelectPlugin, ReadonlyState} from "@anglr/select";

/**
 * Custom readonly state component
 */
@Component(
{
    selector: 'custom-readonly-state',
    templateUrl: 'customReadonlyState.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReadonlyStateComponent extends BasicNormalStateComponent implements ReadonlyState, NgSelectPlugin<ReadonlyStateOptions<any>>
{
}