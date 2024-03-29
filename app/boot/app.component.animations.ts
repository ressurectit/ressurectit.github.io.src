import {trigger, transition, query, animate, style, animateChild, group} from "@angular/animations";

/**
 * Animations run when changing route
 */
export const routeAnimationTrigger = trigger('routeAnimations',
[
    transition('void <=> *, none <=> *',
    [
        query(':enter', animateChild(), {optional: true})
    ]),
    transition('* => *', 
    [
        query('.main-content',
        [
            style({ position: 'relative' }),
            query(':enter, :leave', 
            [
                style(
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', 
            [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group(
            [
                query(':leave', 
                [
                    animate('300ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', 
                [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild())
        ])
    ])
]);

export const loaderTrigger = trigger('loaderAnimation',
[
    transition(':leave',
    [
        group(
        [
            query('.start-title', 
            [
                animate('350ms', style(
                {
                    transform: 'scale(2)'
                }))
            ]),
            animate('350ms', style(
            {
                opacity: 0
            }))
        ])
    ])
]);