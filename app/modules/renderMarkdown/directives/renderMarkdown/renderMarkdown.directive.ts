import {Directive, Optional, ElementRef, Inject, PLATFORM_ID, ViewContainerRef, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {RenderMarkdownDirective as RenderMdDirective, HelpService} from '@anglr/md-help/web';
import {GlobalNotificationsService} from '@anglr/notifications';
import {HttpClient} from '@angular/common/http';

/**
 * Directive used for custom rendering of markdown
 */
@Directive(
{
    selector: "[renderMd]"
})
export class RenderMarkdownDirective extends RenderMdDirective
{
    //######################### protected fields #########################

    /**
     * Array of components that are present
     */
    protected _components: {[id: string]: ComponentRef<any>} = {};

    //######################### constructor #########################
    constructor(@Optional() helpSvc: HelpService,
                element: ElementRef<HTMLElement>,
                router: Router,
                route: ActivatedRoute,
                @Optional() notifications: GlobalNotificationsService,
                @Inject(DOCUMENT) document: HTMLDocument,
                @Inject(PLATFORM_ID) platformId: Object,
                protected _viewContainer: ViewContainerRef,
                protected _componentFactoryResolver: ComponentFactoryResolver,
                protected _http: HttpClient)
    {
        super(helpSvc, element, router, route, notifications, document, platformId);
    }

    //######################### public methods #########################

    /**
     * Filters out parts of markdown that should not be processed
     * @param md - Markdown to be filtered
     */
    public async filterMd(md: string): Promise<string>
    {
        Object.keys(this._components).forEach(id =>
        {
            this._components[id].destroy();
        });

        this._components = {};
        let matches: RegExpExecArray;

        while(matches = /@SAMPLE#(.*?)&(.*?)\/(.*?)@/.exec(md))
        {
            let components = await import(
                /* webpackInclude: /index\.ts$/ */
                `../../../../samples/${matches[2]}`);

            let factory = this._componentFactoryResolver.resolveComponentFactory(components[matches[3]]);
            this._components[matches[1]] = this._viewContainer.createComponent(factory);

            md = md.replace(/@SAMPLE#(.*?)&.*?@/, '<div class="sample-$1"></div>');
        }

        while(matches = /@INCLUDEMD#(.*?)@/.exec(md))
        {
            let includeMd = await this._http.get(matches[1], {responseType: 'text'}).toPromise();

            md = md.replace(/@INCLUDEMD#(.*?)@/, includeMd);
        }

        return md;
    }

    /**
     * Filters out parts of html that should not be rendered
     * @param html Html to be filtered
     */
    public async filterHtml(html: string): Promise<string>
    {
        return html;
    }

    //######################### protected methods #########################

    /**
     * Renders markdown
     * @param markdown - Markdown to be rendered
     */
    protected async _renderMarkdown(markdown: string)
    {
        await super._renderMarkdown(markdown);

        Object.keys(this._components).forEach(componentId =>
        {
            let component = this._components[componentId];

            this._document.querySelector(`.sample-${componentId}`).append(component.location.nativeElement);
            component.changeDetectorRef.detectChanges();
        });
    }
}