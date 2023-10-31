"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tar = exports.clackPrompts = exports.fsExtra = exports.zod = exports.fastestLevenshtein = exports.installDeps = exports.updatePackageJSON = exports.prompts = exports.generateFile = exports.logger = exports.resolve = exports.portfinder = exports.pkgUp = exports.rimraf = exports.Mustache = exports.mkdirp = exports.getGitInfo = exports.createDebug = exports.execa = exports.glob = exports.deepmerge = exports.semver = exports.BaseGenerator = exports.chokidar = exports.lodash = exports.yParser = exports.chalk = exports.axios = exports.register = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.chalk = chalk_1.default;
const yargs_parser_1 = __importDefault(require("yargs-parser"));
exports.yParser = yargs_parser_1.default;
const lodash_1 = __importDefault(require("lodash"));
exports.lodash = lodash_1.default;
const chokidar = __importStar(require("chokidar"));
exports.chokidar = chokidar;
const semver_1 = __importDefault(require("semver"));
exports.semver = semver_1.default;
const deepmerge_1 = __importDefault(require("deepmerge"));
exports.deepmerge = deepmerge_1.default;
const glob_1 = __importDefault(require("glob"));
exports.glob = glob_1.default;
const debug_1 = __importDefault(require("debug"));
exports.createDebug = debug_1.default;
const rimraf_1 = __importDefault(require("rimraf"));
exports.rimraf = rimraf_1.default;
const mkdirp_1 = __importDefault(require("mkdirp"));
exports.mkdirp = mkdirp_1.default;
const pkgUp = __importStar(require("pkg-up"));
exports.pkgUp = pkgUp;
const portfinder_1 = __importDefault(require("portfinder"));
exports.portfinder = portfinder_1.default;
const resolve_1 = __importDefault(require("resolve"));
exports.resolve = resolve_1.default;
const mustache_1 = __importDefault(require("mustache"));
exports.Mustache = mustache_1.default;
const zod_1 = require("zod");
Object.defineProperty(exports, "zod", { enumerable: true, get: function () { return zod_1.z; } });
const fs_extra_1 = __importDefault(require("fs-extra"));
exports.fsExtra = fs_extra_1.default;
const axios_1 = __importDefault(require("axios"));
exports.axios = axios_1.default;
const tar_1 = __importDefault(require("tar"));
exports.tar = tar_1.default;
const BaseGenerator_1 = __importDefault(require("./BaseGenerator/BaseGenerator"));
exports.BaseGenerator = BaseGenerator_1.default;
const getGitInfo_1 = __importDefault(require("./getGitInfo"));
exports.getGitInfo = getGitInfo_1.default;
const execa = __importStar(require("execa"));
exports.execa = execa;
const logger = __importStar(require("./logger"));
exports.logger = logger;
const generateFile_1 = __importDefault(require("./BaseGenerator/generateFile"));
exports.generateFile = generateFile_1.default;
const prompts_1 = __importDefault(require("prompts"));
exports.prompts = prompts_1.default;
const updatePackageJSON_1 = __importDefault(require("./updatePackageJSON"));
exports.updatePackageJSON = updatePackageJSON_1.default;
const installDeps_1 = __importDefault(require("./installDeps"));
exports.installDeps = installDeps_1.default;
const fastestLevenshtein = __importStar(require("fastest-levenshtein"));
exports.fastestLevenshtein = fastestLevenshtein;
const clackPrompts = __importStar(require("@clack/prompts"));
exports.clackPrompts = clackPrompts;
__exportStar(require("./setNoDeprecation"), exports);
__exportStar(require("./winPath"), exports);
exports.register = __importStar(require("./register"));
__exportStar(require("./zod/isZodSchema"), exports);
__exportStar(require("./importLazy"), exports);
__exportStar(require("./tryPaths"), exports);
__exportStar(require("./npmClient"), exports);
