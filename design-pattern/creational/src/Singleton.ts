class Logger {
    private static instance: Logger | null = null

    private constructor(){
        if(Logger.instance) throw new Error('Cannot create more than one instance of logger.')
        else Logger.instance = this
    }

    public static getInstance(): Logger{
        if(!Logger.instance) Logger.instance = new Logger()
        return Logger.instance
    }

    public log(message: string): void { console.log(message) } 
}

const newInstance = Logger.getInstance()
newInstance.log('Hello, World')