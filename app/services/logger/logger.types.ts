import {Provider, ClassProvider} from '@angular/core';
import {LOGGER_SINKS} from '@anglr/common/structured-log';

import {FileSinkService} from './fileSink.service';

/**
 * Provider for FileSink for logger
 */
export const FILE_SINK: Provider =
<ClassProvider>
{
    provide: LOGGER_SINKS,
    useClass: FileSinkService,
    multi: true
};