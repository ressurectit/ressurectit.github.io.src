import {Component, ChangeDetectionStrategy} from '@angular/core';
import {slideInOutTrigger} from '@anglr/animations';
import {TooltipDirective} from '@anglr/common';

/**
 * Component that is used for displaying source codes
 */
@Component(
{
    selector: 'source-code',
    templateUrl: 'sourceCode.component.html',
    styleUrl: 'sourceCode.component.scss',
    standalone: true,
    imports:
    [
        TooltipDirective,
    ],
    animations:
    [
        slideInOutTrigger,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceCodeComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Indication whether show/hide sources
     */
    protected showSources: boolean = false;
}