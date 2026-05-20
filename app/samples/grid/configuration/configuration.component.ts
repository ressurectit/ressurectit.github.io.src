import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {ConfigurationSampleComponent} from './configurationSample.component';

/**
 * Configuration sample for grid component
 */
@Component(
{
    selector: 'configuration-view',
    templateUrl: 'configuration.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        ConfigurationSampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationComponent
{
}
