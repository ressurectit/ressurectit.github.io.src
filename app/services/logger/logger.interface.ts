import {LogEventLevel} from 'structured-log';

/**
 * Sink that is used for logging into file
 */
export interface FileSink
{
    /**
     * Logs formatter message with specified level
     */
    log(message: string, level: LogEventLevel);
}