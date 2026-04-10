import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {PopoverPopupSampleComponent} from './popoverPopupSample.component';

/**
 * Popover popup sample for select component
 */
@Component(
{
    selector: 'popover-popup-view',
    templateUrl: 'popoverPopup.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        PopoverPopupSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverPopupComponent
{
}
