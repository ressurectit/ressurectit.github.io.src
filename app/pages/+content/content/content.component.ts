import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
import {WithScrollableCssClass} from '@anglr/common';
import {RenderMarkdownDirective} from '@anglr/md-help';
import {ComponentRoute} from '@anglr/common/router';

import {contentMarkdownResolver} from './content.resolver';

/**
 * Content component used for displaying markdowns
 */
@Component(
{
    selector: 'content-view',
    templateUrl: 'content.component.html',
    imports:
    [
        RenderMarkdownDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**', resolve: {markdown: contentMarkdownResolver}})
@WithScrollableCssClass()
export class ContentComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Markdown that is going to be rendered
     */
    protected markdown: InputSignal<string> = input<string>('');
}
