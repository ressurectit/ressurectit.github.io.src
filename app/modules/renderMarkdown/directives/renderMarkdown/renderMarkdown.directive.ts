import {Directive} from '@angular/core';
import {RenderMarkdownDirective as RenderMdDirective} from '@anglr/md-help/web';

/**
 * Directive used for custom rendering of markdown
 */
@Directive(
{
    selector: "[renderMd]"
})
export class RenderMarkdownDirective extends RenderMdDirective
{
    //######################### public methods #########################

    /**
     * Filters out parts of html that should not be rendered
     * @param html Html to be filtered
     */
    public filterHtml(html: string): Promise<string>
    {
        html = html.replace(/content\/SAMPLES_URL\//g, "");

        return Promise.resolve(html);
    }
}