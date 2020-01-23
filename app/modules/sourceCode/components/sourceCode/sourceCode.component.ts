import {Component, ChangeDetectionStrategy} from "@angular/core";
import {slideInOutTrigger} from '@anglr/animations';

/**
 * Component that is used for displaying source codes
 */
@Component(
{
    selector: 'source-code',
    templateUrl: 'sourceCode.component.html',
    styleUrls: ['sourceCode.component.scss'],
    animations: [slideInOutTrigger],
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