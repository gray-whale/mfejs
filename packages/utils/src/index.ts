import chalk from 'chalk';
import yParser from 'yargs-parser';
import lodash from 'lodash';
import * as chokidar from 'chokidar';
import semver from 'semver';
import deepmerge from 'deepmerge';
import glob from 'glob';
import createDebug from 'debug';
import rimraf from 'rimraf';
import mkdirp from 'mkdirp';
import pkgUp from 'pkg-up';
import portfinder from 'portfinder';
import resolve from 'resolve';
import Mustache from 'mustache';
import * as logger from './logger';

export * from './setNoDeprecation';

export {
    chalk,
    yParser,
    lodash,
    chokidar,
    semver,
    deepmerge,
    glob,
    createDebug,
    mkdirp,
    Mustache,
    rimraf,
    pkgUp,
    portfinder,
    resolve,
    logger,
};