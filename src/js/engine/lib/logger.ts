

export default class Logger {

    public static info(msg: string) {
        console.log("\x1b[37m" + new Date().toISOString() + " - " + msg);
    }

    public static debug(msg: string) {
        console.log("\x1b[33m" + new Date().toISOString() + " - " + msg);
    }

    public static error(msg: string) {
        console.log("\x1b[31m" + new Date().toISOString() + " - " + msg);
    }

}