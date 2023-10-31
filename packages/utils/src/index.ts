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
import * as pkgUp from 'pkg-up';
import portfinder from 'portfinder';
import resolve from 'resolve';
import Mustache from 'mustache';
import { z } from 'zod';
import fsExtra from 'fs-extra';
import axios from 'axios';
import tar from 'tar';
import BaseGenerator from './BaseGenerator/BaseGenerator';
import getGitInfo from './getGitInfo';
import * as execa from 'execa';
import * as logger from './logger';
import generateFile from './BaseGenerator/generateFile';
import prompts from 'prompts';
import updatePackageJSON from './updatePackageJSON';
import installDeps from './installDeps';
import * as fastestLevenshtein from 'fastest-levenshtein';
import * as clackPrompts from '@clack/prompts';

export * from './setNoDeprecation';
export * from './winPath';
export * as register from './register';
export * from './zod/isZodSchema';
export * from './importLazy';
export * from './tryPaths';
export * from './npmClient';


export {
    axios,
    chalk,
    yParser,
    lodash,
    chokidar,
    BaseGenerator,
    semver,
    deepmerge,
    glob,
    execa,
    createDebug,
    getGitInfo,
    mkdirp,
    Mustache,
    rimraf,
    pkgUp,
    portfinder,
    resolve,
    logger,
    generateFile,
    prompts,
    updatePackageJSON,
    installDeps,
    fastestLevenshtein,
    z as zod,
    fsExtra,
    clackPrompts,
    tar
};