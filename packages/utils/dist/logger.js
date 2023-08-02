"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = exports.info = exports.ready = exports.warn = exports.error = exports.wait = exports.prefixes = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.prefixes = {
    wait: `${chalk_1.default.cyan('wait')}  -`,
    error: `${chalk_1.default.red('error')} -`,
    warn: `${chalk_1.default.yellow('warn')}  -`,
    ready: `${chalk_1.default.green('ready')} -`,
    info: `${chalk_1.default.cyan('info')}  -`,
    event: `${chalk_1.default.magenta('event')} -`,
    debug: `${chalk_1.default.gray('debug')} -`,
};
function wait(...message) {
    console.log(exports.prefixes.wait, ...message);
}
exports.wait = wait;
function error(...message) {
    console.error(exports.prefixes.error, ...message);
}
exports.error = error;
function warn(...message) {
    console.warn(exports.prefixes.warn, ...message);
}
exports.warn = warn;
function ready(...message) {
    console.log(exports.prefixes.ready, ...message);
}
exports.ready = ready;
function info(...message) {
    console.log(exports.prefixes.info, ...message);
}
exports.info = info;
function event(...message) {
    console.log(exports.prefixes.event, ...message);
}
exports.event = event;
