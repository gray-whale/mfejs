#!/usr/bin/env node

/**
 * 思路：
 * 启动一个 node 程序bin/mfe.js->cli.js
 * 启动一个 Service，扫描 pages 目录，根据它生成临时文件夹里的文件，启动这些临时文件夹中的文件
 */

//重写日志以显示日志记录的位置
// 来源: https://remysharp.com/2014/05/23/where-is-that-console-log
if (process.env.DEBUG_CONSOLE) {
    ['log', 'warn', 'error'].forEach(function (method) {
        const old = console[method];
        console[method] = function () {
            const stack = (new Error()).stack.split(/\n/);
            // Chrome includes a single "Error" line, FF doesn't.
            if (stack[0].indexOf('Error') === 0) {
                stack = stack.slice(1);
            }
            const args = [].slice.apply(arguments).concat([stack[1].trim()]);
            return old.apply(console, args);
        };
    });
}

require('../dist/cli/cli')
    .run()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
