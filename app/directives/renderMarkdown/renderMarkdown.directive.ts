import {Directive, Optional, ElementRef, Inject, PLATFORM_ID, ViewContainerRef, ComponentRef, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AnimationBuilder, useAnimation, AnimationPlayer} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {RenderMarkdownIncludeDirective, HelpService} from '@anglr/md-help/web';
import {GlobalNotificationsService} from '@anglr/notifications';
import {fadeInAnimation} from '@anglr/animations';

/**
 * Directive used for custom rendering of markdown
 */
@Directive(
{
    selector: '[renderMd]',
    standalone: true,
})
export class RenderMarkdownDirective extends RenderMarkdownIncludeDirective implements OnDestroy
{
    //######################### protected fields #########################

    /**
     * Array of components that are present
     */
    protected _components: {[id: string]: ComponentRef<unknown>} = {};

    /**
     * Animation player used for animating fade in
     */
    protected _fadeInAnimationPlayer: AnimationPlayer;

    //######################### constructor #########################
    constructor(@Optional() helpSvc: HelpService,
                element: ElementRef<HTMLElement>,
                router: Router,
                route: ActivatedRoute,
                @Optional() notifications: GlobalNotificationsService,
                @Inject(DOCUMENT) document: Document,
                @Inject(PLATFORM_ID) platformId: Object,
                protected _viewContainer: ViewContainerRef,
                protected _animationBuilder: AnimationBuilder,
                http: HttpClient,)
    {
        super(helpSvc, element, router, route, notifications, document, platformId, http);

        this._fadeInAnimationPlayer = this._animationBuilder.build(useAnimation(fadeInAnimation, {params: {duration: '250ms'}})).create(element.nativeElement);
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this._fadeInAnimationPlayer?.destroy();
    }

    //######################### public methods #########################

    /**
     * Filters out parts of markdown that should not be processed
     * @param md - Markdown to be filtered
     */
    public override async filterMd(md: string): Promise<string>
    {
        Object.keys(this._components).forEach(id =>
        {
            this._components[id].destroy();
        });

        this._components = {};
        let matches: RegExpExecArray|null;

        while((matches = /@SAMPLE#(.*?)&(.*?)\/(.*?)@/.exec(md)))
        {
            const [componentId, componentGroup, componentName] = matches;

            const components = await import(
                /* webpackInclude: /index\.ts$/ */
                `../../samples/${componentGroup}`);

            this._components[componentId] = this._viewContainer.createComponent(components[componentName]);
            (this._components[componentId].location.nativeElement as HTMLElement).style.display = 'none';

            md = md.replace(/@SAMPLE#(.*?)&.*?@/, '<div class="sample-$1 live-sample-div"></div>');
        }

        md = await super.filterMd(md);

        return md;
    }

    //######################### protected methods #########################

    /**
     * Renders markdown
     * @param markdown - Markdown to be rendered
     */
    protected override async _renderMarkdown(markdown: string)
    {
        await super._renderMarkdown(markdown);

        Object.keys(this._components).forEach(componentId =>
        {
            const component = this._components[componentId];
            const element: HTMLElement = component.location.nativeElement;

            this._document.querySelector(`.sample-${componentId}`)?.append(element);
            component.changeDetectorRef.detectChanges();
            element.style.display = 'block';
        });

        this._fadeInAnimationPlayer.reset();
        this._fadeInAnimationPlayer.play();
    }
}