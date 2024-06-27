import {ValueProvider} from '@angular/core';
import {NORMAL_STATE_OPTIONS, NormalStateOptions} from '@anglr/select';

import {NOTHING_SELECTED} from '../misc/constants';

/**
 * Global configuration for Select
 */
export const globalSelectConfig =
[
    <ValueProvider>
    {
        provide: NORMAL_STATE_OPTIONS,
        useValue: <NormalStateOptions<any>>
        {
            texts:
            {
                nothingSelected: NOTHING_SELECTED
            }
        }
    }
];