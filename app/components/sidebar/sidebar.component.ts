import {Component, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

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
    ],
})
export class Sidebar
{
    //######################### public properties - inputs #########################

    /**
     * Currently selected menu item
     */
    public menuitem: InputSignal<ContentMenu|undefined|null> = input();
}
