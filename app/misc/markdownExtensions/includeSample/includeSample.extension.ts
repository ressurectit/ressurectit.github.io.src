import {inject, Injectable, PLATFORM_ID, createComponent, ApplicationRef, DOCUMENT} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {MarkdownRendererExtension} from '@anglr/md-help';
import {MarkedExtension, Token, Tokens} from 'marked';

/**
 * Definition of include sample token
 */
export interface IncludeSample extends Tokens.Generic
{
    /**
     * Type that indicate that this token is 'includeSample'
     */
    type: 'includeSample';

    /**
     * Id of component to be included
     */
    componentId: string;

    /**
     * Name of group of component to be included
     */
    componentGroup: string;

    /**
     * Name of component to be included
     */
    componentName: string;

    /**
     * Instance of html element
     */
    element?: HTMLElement;

    /**
     * Html to be rendered
     */
    html?: string;
}

/**
 * Extension that adds new `includeSample` functionality, adding support for including other samples using links
 */
@Injectable()
export class IncludeSampleExtension implements MarkdownRendererExtension
{
    //######################### protected fields e#########################

    /**
     * Value of marked extension to be used
     */
    protected ɵmarkedExtension: MarkedExtension;

    //######################### public properties - implementation of MarkdownRendererExtension #########################

    /**
     * @inheritdoc
     */
    public get markedExtension(): MarkedExtension
    {
        return this.ɵmarkedExtension;
    }

    //######################### constructor #########################
    constructor()
    {
        const document = inject(DOCUMENT);
        const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
        const applicationRef = inject(ApplicationRef);

        this.ɵmarkedExtension =
        {
            async: true,
            walkTokens: async token =>
            {
                if(token.type == 'includeSample')
                {
                    if(!isBrowser)
                    {
                        return;
                    }

                    const sampleToken = token as IncludeSample;
                    const components = await import(`../../../samples/${sampleToken.componentGroup}/index.ts`);
                    const component = createComponent(components[sampleToken.componentName], {environmentInjector: applicationRef.injector});
                    applicationRef.attachView(component.hostView);
                    component.changeDetectorRef.detectChanges();

                    sampleToken.element = component.location.nativeElement;
                    sampleToken.html = `<div class="${sampleToken.componentId}"></div>`;
                }
            },
            extensions:
            [
                {
                    name: 'includeSample',
                    level: 'block',
                    start(src)
                    {
                        return src.match(/@SAMPLE#/)?.index;
                    },
                    tokenizer(src: string, _tokens: Token[]): IncludeSample|undefined
                    {
                        const rule = /^@SAMPLE#(.*?)&(.*?)\/(.*?)@/;
                        const match = rule.exec(src);

                        if(!match)
                        {
                            return undefined;
                        }

                        const [raw, componentId, componentGroup, componentName] = match;

                        if(componentId && componentGroup && componentName)
                        {
                            return {
                                type: 'includeSample',
                                raw,
                                componentId,
                                componentGroup,
                                componentName,
                            };
                        }

                        return undefined;
                    },
                    renderer(token: Tokens.Generic|IncludeSample)
                    {
                        const sampleToken = token as IncludeSample;

                        setTimeout(() => document.querySelector(`.${sampleToken.componentId}`)?.appendChild(sampleToken.element ? sampleToken.element : document.createElement('div')), 0);

                        return sampleToken.html ?? '';
                    },
                },
            ],
        };
    }
}
