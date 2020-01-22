import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ComponentRoute} from "@anglr/common/router";

/**
 * Home component
 */
@Component(
{
    selector: 'home-view',
    templateUrl: 'home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: ''})
export class HomeComponent
{
}
