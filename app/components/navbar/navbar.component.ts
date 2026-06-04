import {Component, ChangeDetectionStrategy, Resource, resource, Inject, Signal, computed, model, ModelSignal, output, OutputEmitterRef, effect, EffectRef} from '@angular/core';
import {PRIMARY_OUTLET, Router, RouterLink} from '@angular/router';

import {MENU_JSON_PROMISE} from '../../misc/tokens';
import {ContentMenu} from '../../services/api/content';
import {StartsWith} from '../../pipes';

/**
 * Component used for displaying the navigation bar of the application.
 */
@Component(
{
    selector: 'nav',
    templateUrl: 'navbar.component.html',
    imports:
    [
        RouterLink,
        StartsWith,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar
{
    //######################### protected properties - template bindings #########################

    /**
     * Menu items for the navigation bar.
     */
    protected menu: Resource<ContentMenu[]>;

    /**
     * Currently active route path
     */
    protected activeRoute: Signal<string|undefined|null>;

    //######################### public properties - models #########################

    /**
     * Currently selected theme
     */
    public theme: ModelSignal<string> = model.required();

    //######################### public properties - outputs #########################

    /**
     * Occurs when menuitem is selected
     */
    public menuitem: OutputEmitterRef<ContentMenu> = output<ContentMenu>();

    //######################### constructor #########################
    constructor(@Inject(MENU_JSON_PROMISE) menuJson: Promise<ContentMenu[]>,
                router: Router,)
    {
        this.menu = resource(
        {
            loader: () => menuJson,
            defaultValue: [],
        });

        this.activeRoute = computed(() => router.lastSuccessfulNavigation()?.finalUrl?.root.children[PRIMARY_OUTLET].segments.join('/'));

        let effectRef: EffectRef|null = effect(() =>
        {
            const menuitems = this.menu.value();
            const activeRoute = this.activeRoute();

            if(activeRoute && menuitems.length)
            {
                const matchedMenuItem = menuitems.find(itm => itm.mdPath?.startsWith(activeRoute));

                if(matchedMenuItem)
                {
                    this.menuitem.emit(matchedMenuItem);

                    effectRef?.destroy();
                    effectRef = null;
                }
            }
        }, {manualCleanup: true});
    }

    //######################### protected methods - template bindings #########################

    /**
     * Show submenu of given menuitem
     * @param menuitem - Menuitem which submenu should be displayed
     */
    protected showSubmenu(menuitem: ContentMenu): void
    {
        this.menuitem.emit(menuitem);
    }
}
