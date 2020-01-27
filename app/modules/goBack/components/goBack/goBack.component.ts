import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Location} from '@angular/common';

/**
 * Component used as go back button
 */
@Component(
{
    selector: 'go-back',
    templateUrl: 'goBack.component.html',
    styleUrls: ['goBack.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoBackComponent
{
    //######################### constructor #########################
    constructor(public location: Location)
    {
    }
}