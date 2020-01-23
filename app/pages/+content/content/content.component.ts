import {Component, ChangeDetectionStrategy, ClassProvider} from "@angular/core";
import {ComponentRoute} from "@anglr/common/router";
import {HelpService} from "@anglr/md-help/web";

import {ContentService} from "../../../services/api/content";

/**
 * Content component used for displaying markdowns
 */
@Component(
{
    selector: 'content-view',
    templateUrl: 'content.component.html',
    providers:
    [
        <ClassProvider>
        {
            provide: HelpService,
            useClass: ContentService
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: '**'})
export class ContentComponent
{
}