import { logger, setNoDeprecation, yParser } from "@mfejs/utils";
import {checkVersion as checkNodeVersion, setNodeTitle, } from "./node";
import { DEV_COMMAND, FRAMEWORK_NAME } from "../constants";
import { dev } from "./dev";

interface IOpts {
    presets?: string[];
}

export async function run(opts?: IOpts) {
    //检查node版本
    checkNodeVersion();
    //设置当前进程名
    setNodeTitle();
    setNoDeprecation();

    const args = yParser(process.argv.slice(2), {
        alias: {
            version: ['v'],
            help: ['h'],
        },
        boolean: ['version'],
    });
    const command = String(args._[0]);
    const FEATURE_COMMANDS = ['mfsu', 'setup', 'deadcode'];
    if ([DEV_COMMAND, ...FEATURE_COMMANDS].includes(command)) {
        process.env.NODE_ENV = 'development';
    } else if (command === 'build') {
        process.env.NODE_ENV = 'production';
    }
    if (opts?.presets) {
        process.env[`${FRAMEWORK_NAME}_PRESETS`.toUpperCase()] =
            opts.presets.join(',');
    }
    if (command === DEV_COMMAND) {
        dev();
    } else {
        try {
            await new Service().run2({
                name: args._[0],
                args,
            });
        } catch (e: any) {
            logger.error(e);
            process.exit(1);
        }
    }
}