import chalk from 'chalk';

export const prefixes = {
    wait: `${chalk.cyan('wait')}  -`,
    error: `${chalk.red('error')} -`,
    warn: `${chalk.yellow('warn')}  -`,
    ready: `${chalk.green('ready')} -`,
    info: `${chalk.cyan('info')}  -`,
    event: `${chalk.magenta('event')} -`,
    debug: `${chalk.gray('debug')} -`,
    profile: chalk.blue('profile') + ' -',
    fatal: chalk.red('fatal') + ' -',
};

const profilers: Record<string, { startTime: number }> = {};

export function wait(...message: any[]) {
    console.log(prefixes.wait, ...message);
}

export function error(...message: any[]) {
    console.error(prefixes.error, ...message);
}

export function warn(...message: any[]) {
    console.warn(prefixes.warn, ...message);
}

export function ready(...message: any[]) {
    console.log(prefixes.ready, ...message);
}

export function info(...message: any[]) {
    console.log(prefixes.info, ...message);
}

export function event(...message: any[]) {
    console.log(prefixes.event, ...message);
}

export function profile(id: string, ...message: any[]) {
    // Worker logs only available in debug mode
    if (process.env.IS_UMI_BUILD_WORKER && !process.env.DEBUG) {
        return;
    }
    if (!profilers[id]) {
        profilers[id] = {
            startTime: Date.now(),
        };
        console.log(prefixes.profile, chalk.green(id), ...message);
        return;
    }
    const endTime = Date.now();
    const { startTime } = profilers[id];
    console.log(
        prefixes.profile,
        chalk.green(id),
        `Completed in ${chalk.cyan(`${endTime - startTime}ms`)}`,
        ...message,
    );
    delete profilers[id];
}
