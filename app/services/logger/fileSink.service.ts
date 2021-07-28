import {Inject, Injectable, Optional} from '@angular/core';
import {Sink, LogEvent} from 'structured-log';

import {FILE_LOGGER} from '../../misc/tokens';
import {FileSink} from './logger.interface';

/**
 * Sink that is used for storing logs in file on disk
 */
@Injectable()
export class FileSinkService implements Sink
{
    //######################### constructor #########################
    constructor(@Inject(FILE_LOGGER) @Optional() private _fileLogger?: FileSink)
    {
    }

    //######################### public methods - implementation of Sink #########################

    public emit(events: LogEvent[])
    {
        if(this._fileLogger)
        {
            if(!events || !events.length)
            {
                return;
            }

            events.forEach(e =>
            {
                const output = `${e.messageTemplate.render(e.properties)}`;

                this._fileLogger.log(output, e.level);
            });
        }
    }

    public flush(): Promise<any>
    {
        return Promise.resolve();
    }
}