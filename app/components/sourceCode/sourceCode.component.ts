import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TooltipDirective} from '@anglr/common';

/**
 * Component that is used for displaying source codes
 */
@Component(
{
    selector: 'source-code',
    templateUrl: 'sourceCode.component.html',
    styleUrl: 'sourceCode.component.scss',
    imports:
    [
        TooltipDirective,
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