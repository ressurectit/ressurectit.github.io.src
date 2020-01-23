import {Component, ChangeDetectionStrategy} from "@angular/core";

/**
 * Component that is used for displaying source codes
 */
@Component(
{
    selector: 'source-code',
    templateUrl: 'sourceCode.component.html',
    styleUrls: ['sourceCode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceCodeComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Indication whether show/hide sources
     */
    public showSources: boolean = false;
}