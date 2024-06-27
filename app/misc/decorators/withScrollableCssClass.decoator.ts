import {ɵɵclassProp} from '@angular/core';

//TODO: move into common

/**
 * Applies scrollable css class to components host
 */
export function WithScrollableCssClass(): ClassDecorator
{
    return function<TFunction extends Function> (target: TFunction): TFunction
    {
        const original = ((target as any).ɵcmp as any).hostBindings;

        ((target as any).ɵcmp as any).hostVars = (((target as any).ɵcmp as any).hostVars ?? 0) + 2;
        ((target as any).ɵcmp as any).hostBindings = function NotFoundComponent_HostBindings(rf: number, _ctx: unknown) 
        {
            original?.(rf, _ctx);

            if (rf & 2) 
            {
                ɵɵclassProp('scrollable', true);
            }
        };

        return target;
    };
}