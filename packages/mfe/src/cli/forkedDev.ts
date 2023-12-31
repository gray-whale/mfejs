import { logger, yParser, setNoDeprecation } from '@mfejs/utils';
import { DEV_COMMAND, FRAMEWORK_NAME } from '../constants';
import { Service } from '../service/service';
import { setNodeTitle } from './node';

setNodeTitle(`${FRAMEWORK_NAME}-dev`);
setNoDeprecation();

(async () => {
  try {
    const args = yParser(process.argv.slice(2));
    const service = new Service();
    await service.run2({
      name: DEV_COMMAND,
      args,
    });

    //父子进程通信
    let closed = false;
    // kill(2) Ctrl-C
    process.once('SIGINT', () => onSignal('SIGINT'));
    // kill(3) Ctrl-\
    process.once('SIGQUIT', () => onSignal('SIGQUIT'));
    // kill(15) default
    process.once('SIGTERM', () => onSignal('SIGTERM'));
    function onSignal(signal: string) {
      if (closed) return;
      closed = true;
      // 退出时触发插件中的 onExit 事件
      service.applyPlugins({
        key: 'onExit',
        args: {
          signal,
        },
      });
      process.exit(0);
    }
  } catch (e: any) {
    logger.error(e);
    process.exit(1);
  }
})();
