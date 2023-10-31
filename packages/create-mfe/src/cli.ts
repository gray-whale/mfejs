import { yParser } from '@mfejs/utils';

const args = yParser(process.argv.slice(2), {
  alias: {
    version: ['v'],
    help: ['h'],
  },
  boolean: ['version'],
});

if (args.version && !args._[0]) {
  args._[0] = 'version';
  const { name, version } = require('../package.json');
  console.log(`${name}@${version}`);
} else {
  require('./')
    .default({
      cwd: process.cwd(),
      args,
    })
    .catch((err: Error) => {
      console.error(`Create failed, ${err.message}`);
      console.error(err);
    });
}
