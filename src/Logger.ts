export class Logger 
{
    nkLogger:nkruntime.Logger;

    constructor(logger:nkruntime.Logger)
    {
        this.nkLogger = logger;
    }
    warn(arg:any) { 
        this.nkLogger.warn(arg);
    }
    error(arg:any)
    {
        this.nkLogger.error(arg);
    }

    log(arg:any)
    {
        this.nkLogger.info(arg);
    }
}