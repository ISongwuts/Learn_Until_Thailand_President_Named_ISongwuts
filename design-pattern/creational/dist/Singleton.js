"use strict";
class Logger {
    constructor() {
        if (Logger.instance)
            throw new Error('Cannot create more than one instance of logger.');
        else
            Logger.instance = this;
    }
    static getInstance() {
        if (!Logger.instance)
            Logger.instance = new Logger();
        return Logger.instance;
    }
    log(message) { console.log(message); }
}
Logger.instance = null;
const newInstance = Logger.getInstance();
newInstance.log('Hello, World');
