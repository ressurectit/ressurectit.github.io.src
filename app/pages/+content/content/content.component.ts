import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
import {CdkMenuGroup, CdkMenu, CdkMenuTrigger, CdkMenuItem, CdkMenuBar} from '@angular/cdk/menu';
import {RouterLink} from '@angular/router';
import {ComponentRoute} from '@anglr/common/router';

import {contentMarkdownResolver, contentMenuResolver} from './content.resolver';
import {ContentMenu, ContentService} from '../../../services/api/content';
import {MdMenuItemDirective, RenderMarkdownDirective} from '../../../directives';

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
        RenderMarkdownDirective,
        MdMenuItemDirective,
        RouterLink,
        CdkMenuBar,
        CdkMenuItem,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuGroup,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**', resolve: {menu: contentMenuResolver, markdown: contentMarkdownResolver}, providers: [ContentService]})
export class ContentComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Content menu array
     */
    protected menu: InputSignal<ContentMenu[]> = input<ContentMenu[]>([]);

    /**
     * Markdown that is going to be rendered
     */
    protected markdown: InputSignal<string> = input<string>('');
}