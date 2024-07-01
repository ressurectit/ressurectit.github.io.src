import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {ConfigSampleComponent} from './configSample.component';

/**
 * Configuration sample for select component
 */
@Component(
{
    selector: 'config-view',
    templateUrl: 'config.component.html',
    standalone: true,
    imports:
    [
        ConfigSampleComponent,
        SamplesFeatureModule,
        AsyncPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigComponent
{
}