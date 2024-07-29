import {Component, ChangeDetectionStrategy} from '@angular/core';
import {StatusCodeService, WithScrollableCssClass} from '@anglr/common';

/**
 * Page displayed when url was not found
 */
@Component(
{
    selector: 'not-found-view',
    templateUrl: 'notFound.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WithScrollableCssClass()
export default class NotFoundComponent
{
    //######################### constructor #########################
    constructor(statusCodeService: StatusCodeService)
    {
        statusCodeService.setStatusCode(404);
    }
}
