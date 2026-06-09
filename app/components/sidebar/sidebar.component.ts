import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {PRIMARY_OUTLET, Router, RouterLink, RouterLinkActive} from '@angular/router';

import {ContentMenu} from '../../services/api/content';

/**
 * Component used for displaying sidebar
 */
@Component(
{
    selector: 'aside',
    templateUrl: 'sidebar.component.html',
    imports:
    [
        RouterLink,
        RouterLinkActive,
    ],
})
export class Sidebar
{
    //######################### protected properties - template bindings #########################

    /**
     * Currently active route path
     */
    protected activeRoute: Signal<string|undefined|null>;

    //######################### public properties - inputs #########################

    /**
     * Currently selected menu item
     */
    public menuitem: InputSignal<ContentMenu|undefined|null> = input();

    //######################### constructor #########################
    constructor(router: Router,)
    {
        this.activeRoute = computed(() => router.lastSuccessfulNavigation()?.finalUrl?.root.children[PRIMARY_OUTLET].segments.join('/'));
    }
}
