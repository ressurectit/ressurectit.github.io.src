import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {ComponentRoute} from '@anglr/common/router';
import {MarkdownModule} from '@anglr/md-help/web';

import {contentMenuResolver} from './content.resolver';
import {ContentMenu, ContentService} from '../../../services/api/content';
import {RenderMarkdownDirective} from '../../../directives';

/**
 * Content component used for displaying markdowns
 */
@Component(
{
    selector: 'content-view',
    templateUrl: 'content.component.html',
    styleUrl: 'content.component.scss',
    standalone: true,
    imports:
    [
        MarkdownModule,
        RenderMarkdownDirective,
        NgTemplateOutlet,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**', resolve: {menu: contentMenuResolver}, providers: [ContentService]})
export class ContentComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Content menu array
     */
    protected menu: InputSignal<ContentMenu[]> = input<ContentMenu[]>([]);
}