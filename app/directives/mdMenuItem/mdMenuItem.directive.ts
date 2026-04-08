import {Directive, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

//TODO: move into common

/**
 * Directive that is used for applying markdown navigation
 */
@Directive(
{
    selector: '[mdMenuItem]',
})
export class MdMenuItemDirective
{
    //######################### public properties - inputs #########################

    /**
     * Path to be navigated to
     */
    @Input({required: true, alias: 'mdMenuItem'})
    public path!: string|null;

    //######################### constructor #########################
    constructor(private _router: Router,)
    {
    }

    //######################### protected methods - host #########################

    /**
     * Navigates to path
     * @param event - Event that occured
     */
    @HostListener('click', ['$event'])
    protected navigate(event: MouseEvent): void
    {
        event.preventDefault();
        event.stopPropagation();

        if(!this.path)
        {
            return;
        }

        this._router.navigate([`/${this.path}`]);
    }
}