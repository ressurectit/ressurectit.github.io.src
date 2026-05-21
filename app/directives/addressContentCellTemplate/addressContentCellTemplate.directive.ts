import {Directive, ExistingProvider, forwardRef} from '@angular/core';
import {ContentCellTemplateDirective, GridDataCellContext} from '@anglr/grid';

import {Address} from '../../services/api/data';

/**
 * Directive used for obtaining template for content cell for 'Address'
 */
@Directive(
{
    selector: '[addressContentCellTemplate]',
    providers:
    [
        <ExistingProvider>
        {
            provide: ContentCellTemplateDirective,
            useExisting: forwardRef(() => AddressContentCellTemplateDirective),
        },
    ],
})
export class AddressContentCellTemplateDirective extends ContentCellTemplateDirective
{
    //######################### ng language server #########################

    /**
     * Allows typechecking for template
     */
    static override ngTemplateContextGuard(_dir: ContentCellTemplateDirective, _ctx: unknown): _ctx is GridDataCellContext<Address>
    {
        return true;
    }
}