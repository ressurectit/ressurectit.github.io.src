import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
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
    styleUrl: 'content.component.scss',
    imports:
    [
        RenderMarkdownDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**', resolve: {markdown: contentMarkdownResolver}})
export class ContentComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Markdown that is going to be rendered
     */
    protected markdown: InputSignal<string> = input<string>('');
}
