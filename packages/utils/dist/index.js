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
exports.logger = exports.resolve = exports.portfinder = exports.pkgUp = exports.rimraf = exports.Mustache = exports.mkdirp = exports.createDebug = exports.glob = exports.deepmerge = exports.semver = exports.chokidar = exports.lodash = exports.yParser = exports.chalk = void 0;
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
const pkg_up_1 = __importDefault(require("pkg-up"));
exports.pkgUp = pkg_up_1.default;
const portfinder_1 = __importDefault(require("portfinder"));
exports.portfinder = portfinder_1.default;
const resolve_1 = __importDefault(require("resolve"));
exports.resolve = resolve_1.default;
const mustache_1 = __importDefault(require("mustache"));
exports.Mustache = mustache_1.default;
const logger = __importStar(require("./logger"));
exports.logger = logger;
__exportStar(require("./setNoDeprecation"), exports);
