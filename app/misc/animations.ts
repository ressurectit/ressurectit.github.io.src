import {trigger, transition, query, animateChild} from "@angular/animations";

/**
 * Component content trigger
 */
export const componentContentTrigger = trigger('componentContent',
[
    transition(':enter, :leave',
    [
        query('@*', animateChild())
    ])
]);