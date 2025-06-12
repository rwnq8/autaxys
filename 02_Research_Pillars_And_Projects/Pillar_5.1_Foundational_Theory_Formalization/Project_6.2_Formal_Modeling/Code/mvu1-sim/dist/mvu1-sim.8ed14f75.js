// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"lcgnz":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26b064e28ed14f75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hnk5I":[function(require,module,exports,__globalThis) {
/**
 * @file This is the main entry point for the MVU-1 web application.
 * It handles user interactions, manages the simulation lifecycle (start, stop),
 * and orchestrates the non-blocking, step-by-step execution of the simulator
 * to provide a responsive user experience with live feedback.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mvu1 = require("./mvu1");
var _papaparse = require("papaparse");
var _papaparseDefault = parcelHelpers.interopDefault(_papaparse);
// Note: Chart.js and Sigma.js imports would be added back here if chart rendering is re-enabled.
// --- GLOBAL STATE ---
let isSimulationRunning = false;
let simulatorInstance = null;
// --- UI ELEMENT REFERENCES ---
const runButton = document.getElementById('run-button');
const stopButton = document.getElementById('stop-button');
const distinctionsInput = document.getElementById('distinctions-input');
const stepsInput = document.getElementById('steps-input');
const liveLogPanel = document.getElementById('live-log-panel');
const liveLogOutput = document.getElementById('live-log-output');
const statusLine = document.getElementById('status-line');
const summaryPanel = document.getElementById('summary-panel');
const summaryText = document.getElementById('summary-text');
const downloadPanel = document.getElementById('download-panel');
const downloadButton = document.getElementById('download-csv');
/**
 * Manages the enabled/disabled state of UI controls based on the simulation status.
 * @param running - Whether the simulation is currently running.
 * @param message - An optional status message to display to the user.
 */ function setUIState(running, message = "") {
    isSimulationRunning = running;
    runButton.disabled = running;
    stopButton.disabled = !running;
    distinctionsInput.disabled = running;
    stepsInput.disabled = running;
    statusLine.textContent = message;
    if (running) {
        // Reset UI for a new run
        summaryPanel.style.display = 'none';
        downloadPanel.style.display = 'none';
        liveLogOutput.innerHTML = '';
        liveLogPanel.style.display = 'block';
    }
}
/**
 * Appends a new line to the live log on the UI.
 * @param message - The text to log.
 * @param isError - If true, the log entry will be styled as an error.
 */ function updateLiveLog(message, isError = false) {
    const timestamp = new Date().toLocaleTimeString();
    const logLine = document.createElement('div');
    logLine.textContent = `[${timestamp}] ${message}`;
    if (isError) logLine.classList.add('log-error');
    liveLogOutput.appendChild(logLine);
    liveLogOutput.scrollTop = liveLogOutput.scrollHeight;
}
/**
 * Renders the final summary and download link after a simulation completes.
 */ function renderFinalResults(simulator) {
    const finalState = simulator.log[simulator.log.length - 1];
    if (!finalState) return;
    // Show Summary Panel
    summaryText.textContent = `Simulation Steps: ${finalState.step}\nFinal L_A:        ${finalState.L_A.toFixed(4)}\nDistinctions:     ${finalState.num_distinctions}\nRelations:        ${finalState.num_relations}\nBonded Pairs:     ${finalState.num_bonded_pairs}`;
    summaryPanel.style.display = 'block';
    // Enable Download Button
    const csvData = (0, _papaparseDefault.default).unparse(simulator.log);
    const blob = new Blob([
        csvData
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    downloadButton.onclick = ()=>{
        const a = document.createElement('a');
        a.href = url;
        a.download = `mvu1_run_d${simulator.config.initial_distinctions}_s${simulator.config.max_steps}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    downloadPanel.style.display = 'block';
// NOTE: Chart.js and Sigma.js rendering functions would be called here.
}
/**
 * The core non-blocking simulation loop.
 * It executes one step, updates the UI, and then uses requestAnimationFrame
 * to schedule the next step, yielding control to the browser in between.
 * This ensures the UI remains responsive and updates are rendered instantly.
 */ function simulationLoop() {
    if (!isSimulationRunning || !simulatorInstance) {
        setUIState(false, "Simulation stopped.");
        return;
    }
    try {
        const keepGoing = simulatorInstance.step();
        const lastLog = simulatorInstance.log[simulatorInstance.log.length - 1];
        const logMessage = `Step ${lastLog.step.toString().padStart(4, ' ')} | L_A: ${lastLog.L_A.toFixed(3)} | D: ${lastLog.num_distinctions.toString().padStart(3, ' ')} | R: ${lastLog.num_relations.toString().padStart(4, ' ')} | Rule: ${lastLog.rule_applied}`;
        updateLiveLog(logMessage);
        if (keepGoing && simulatorInstance.step_counter < simulatorInstance.config.max_steps) // Schedule the next iteration of the loop.
        requestAnimationFrame(simulationLoop);
        else {
            // Simulation has ended, either by halting or reaching max steps.
            const reason = !keepGoing ? "Halted: No more possible moves." : "Finished: Max steps reached.";
            setUIState(false, `Simulation complete. ${reason}`);
            renderFinalResults(simulatorInstance);
        }
    } catch (error) {
        console.error("A critical error occurred during simulation step:", error);
        updateLiveLog(`FATAL ERROR at Step ${simulatorInstance.step_counter + 1}: ${error.message}`, true);
        updateLiveLog("Check browser console (F12) for more details.", true);
        setUIState(false, "Simulation FAILED due to a critical error.");
    }
}
// --- Event Listener for the Start Button ---
runButton.addEventListener('click', ()=>{
    // 1. Get configuration from the UI input boxes.
    const config = {
        initial_distinctions: parseInt(distinctionsInput.value, 10) || 2,
        max_steps: parseInt(stepsInput.value, 10) || 10
    };
    // 2. Create a new simulator instance and set the UI to its "running" state.
    simulatorInstance = new (0, _mvu1.MVU1_Simulator)(config);
    setUIState(true, "Initializing simulation...");
    // 3. Initialize the graph and log the initial state.
    simulatorInstance.initializeGraph();
    const initialLog = `Initial State | D: ${simulatorInstance.graph.order} | R: ${simulatorInstance.graph.size}`;
    updateLiveLog(initialLog);
    // 4. Kick off the non-blocking simulation loop.
    requestAnimationFrame(simulationLoop);
});
// --- Event Listener for the Stop Button ---
stopButton.addEventListener('click', ()=>{
    // Setting this flag to false will cause the simulationLoop to exit on its next check.
    isSimulationRunning = false;
});

},{"./mvu1":"5LSrl","papaparse":"1a9PO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5LSrl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encapsulates the entire logic for the MVU-1 simulation.
 * This class manages the universe's state (as a graph), applies the "Cosmic Algorithm"
 * rewrite rules, and makes decisions based on the Autaxic Lagrangian to test the
 * core hypothesis of self-organization.
 * This is an implementation of the model described in Project 6.2.
 */ parcelHelpers.export(exports, "MVU1_Simulator", ()=>MVU1_Simulator);
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _graphologyUtils = require("graphology-utils");
class MVU1_Simulator {
    constructor(config){
        this.log = [];
        this.step_counter = 0;
        // The tie-breaking priority for rules when multiple moves yield the same max L_A.
        this.rule_priority = {
            'bonding': 3,
            'collapse': 2,
            'annihilation': 1
        };
        this.config = config;
        this.graph = new (0, _graphologyDefault.default)();
    }
    /**
     * Creates the initial "primordial soup" of disconnected Distinctions.
     * Sets up the G_0 state of the universe.
     */ initializeGraph() {
        const n_initial = this.config.initial_distinctions;
        for(let i = 0; i < n_initial; i++){
            this.graph.addNode(`p_${i}`, {
                polarity: 1,
                x: Math.random(),
                y: Math.random(),
                size: 5
            });
            this.graph.addNode(`n_${i}`, {
                polarity: -1,
                x: Math.random(),
                y: Math.random(),
                size: 5
            });
        }
        this.logState(0, 'initial_state');
    }
    /** Helper function to count stable +1/-1 pairs, the numerator for the Lagrangian. */ countBondedPairs(g) {
        let count = 0;
        g.forEachEdge((_edge, _attrs, source, target)=>{
            if (g.getNodeAttribute(source, 'polarity') !== g.getNodeAttribute(target, 'polarity')) count++;
        });
        return count;
    }
    /**
     * Calculates the Autaxic Lagrangian (L_A) for a given graph state.
     * This is the "fitness" or "coherence" score for the universe.
     *
     * L_A(G) = (Number of bonded +1/-1 pairs) / (|Distinctions| + |Relations|)
     */ calculateLA(g) {
        const denominator = g.order + g.size;
        return denominator === 0 ? 0 : this.countBondedPairs(g) / denominator;
    }
    /**
     * Scans the graph to find every possible application of the Cosmic Algorithm rules.
     * @returns A list of all potential moves the engine could make in the current state.
     */ findPossibleMoves() {
        const moves = [];
        const positiveNodes = [];
        const negativeNodes = [];
        this.graph.forEachNode((node, attrs)=>{
            if (attrs.polarity === 1) positiveNodes.push(node);
            else negativeNodes.push(node);
        });
        // --- Rule r1: Annihilation ---
        // A bonded +1/-1 pair is removed if they are only connected to each other.
        this.graph.forEachEdge((_edge, _attrs, source, target)=>{
            if (this.graph.getNodeAttribute(source, 'polarity') !== this.graph.getNodeAttribute(target, 'polarity') && this.graph.degree(source) === 1 && this.graph.degree(target) === 1) moves.push({
                rule: 'annihilation',
                nodes: [
                    source,
                    target
                ],
                la: 0,
                priority: this.rule_priority.annihilation
            });
        });
        // --- Rule r2: Bonding ---
        // A new Relation is created between any disconnected +1 and -1 Distinction.
        for (const p_node of positiveNodes){
            for (const n_node of negativeNodes)if (!this.graph.hasEdge(p_node, n_node)) moves.push({
                rule: 'bonding',
                nodes: [
                    p_node,
                    n_node
                ],
                la: 0,
                priority: this.rule_priority.bonding
            });
        }
        // --- Rule r3: Redundancy Collapse ---
        // A fully connected triangle (K3 subgraph) simplifies to a single bonded pair (K2).
        const foundTriangles = new Set();
        this.graph.forEachNode((node)=>{
            const neighbors = this.graph.neighbors(node);
            if (neighbors.length < 2) return;
            (0, _graphologyUtils.combinations)(neighbors, 2).forEach(([neighbor1, neighbor2])=>{
                if (this.graph.hasEdge(neighbor1, neighbor2)) {
                    const triangle = [
                        node,
                        neighbor1,
                        neighbor2
                    ].sort();
                    const triangleKey = triangle.join(',');
                    if (foundTriangles.has(triangleKey)) return;
                    foundTriangles.add(triangleKey);
                    // The two nodes with the lowest degree in the whole graph are preserved.
                    triangle.sort((a, b)=>this.graph.degree(a) - this.graph.degree(b));
                    moves.push({
                        rule: 'collapse',
                        nodes: triangle,
                        la: 0,
                        priority: this.rule_priority.collapse
                    });
                }
            });
        });
        return moves;
    }
    /**
     * Executes a single step of the simulation. This is the core of the engine's "thinking" process.
     * It finds all possible moves, evaluates which one is "best" by maximizing the future L_A,
     * applies that move, and updates the state.
     * @returns {boolean} - `false` if the simulation has halted (no moves possible), `true` otherwise.
     */ step() {
        // 1. Find all possible actions (rule applications).
        const possibleMoves = this.findPossibleMoves();
        if (possibleMoves.length === 0) return false; // Halt condition
        // 2. For each possible move, create a temporary "future" universe and calculate its L_A score.
        const evaluatedMoves = [];
        for (const move of possibleMoves){
            const tempGraph = this.graph.copy();
            // Apply the move to the temporary graph
            if (move.rule === 'annihilation') {
                tempGraph.dropNode(move.nodes[0]);
                tempGraph.dropNode(move.nodes[1]);
            } else if (move.rule === 'bonding') tempGraph.addEdge(move.nodes[0], move.nodes[1]);
            else if (move.rule === 'collapse') {
                tempGraph.dropNode(move.nodes[2]);
                if (!tempGraph.hasEdge(move.nodes[0], move.nodes[1])) tempGraph.addEdge(move.nodes[0], move.nodes[1]);
            }
            // Store the move along with its resulting L_A score.
            evaluatedMoves.push({
                ...move,
                la: this.calculateLA(tempGraph)
            });
        }
        // 3. Select the best move: one that results in the highest L_A.
        // The sort function also handles the tie-breaking rule.
        evaluatedMoves.sort((a, b)=>a.la !== b.la ? b.la - a.la : b.priority - a.priority);
        // 4. If there's still a tie (same L_A and same priority), pick one randomly.
        const bestLa = evaluatedMoves[0].la;
        const bestPriority = evaluatedMoves[0].priority;
        const topTierMoves = evaluatedMoves.filter((m)=>m.la === bestLa && m.priority === bestPriority);
        const bestMove = topTierMoves[Math.floor(Math.random() * topTierMoves.length)];
        // 5. Apply the chosen "best" move to the actual universe graph.
        if (bestMove.rule === 'annihilation') {
            this.graph.dropNode(bestMove.nodes[0]);
            this.graph.dropNode(bestMove.nodes[1]);
        } else if (bestMove.rule === 'bonding') this.graph.addEdge(bestMove.nodes[0], bestMove.nodes[1]);
        else if (bestMove.rule === 'collapse') {
            this.graph.dropNode(bestMove.nodes[2]);
            if (!this.graph.hasEdge(bestMove.nodes[0], bestMove.nodes[1])) this.graph.addEdge(bestMove.nodes[0], bestMove.nodes[1]);
        }
        // 6. Log the new state of the universe *after* the move.
        this.step_counter++;
        this.logState(this.step_counter, bestMove.rule);
        return true;
    }
    /** Records the key metrics of the current graph state for logging and analysis. */ logState(stepNum, ruleApplied) {
        const logEntry = {
            step: stepNum,
            L_A: this.calculateLA(this.graph),
            num_distinctions: this.graph.order,
            num_relations: this.graph.size,
            graph_size: this.graph.order + this.graph.size,
            num_bonded_pairs: this.countBondedPairs(this.graph),
            rule_applied: ruleApplied
        };
        this.log.push(logEntry);
    }
}

},{"graphology":"3u8J2","graphology-utils":"38nra","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3u8J2":[function(require,module,exports,__globalThis) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t(e);
    }
    function e(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r(t, e);
    }
    function n(t) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, n(t);
    }
    function r(t, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, r(t, e);
    }
    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function o(t, e, n) {
        return o = i() ? Reflect.construct.bind() : function(t, e, n) {
            var i = [
                null
            ];
            i.push.apply(i, e);
            var o = new (Function.bind.apply(t, i));
            return n && r(o, n.prototype), o;
        }, o.apply(null, arguments);
    }
    function a(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return a = function(t) {
            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
            var i;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, a);
            }
            function a() {
                return o(t, arguments, n(this).constructor);
            }
            return a.prototype = Object.create(t.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r(a, t);
        }, a(t);
    }
    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    var u = function() {
        for(var t = arguments[0], e = 1, n = arguments.length; e < n; e++)if (arguments[e]) for(var r in arguments[e])t[r] = arguments[e][r];
        return t;
    };
    function d(t, e, n, r) {
        var i = t._nodes.get(e), o = null;
        return i ? o = "mixed" === r ? i.out && i.out[n] || i.undirected && i.undirected[n] : "directed" === r ? i.out && i.out[n] : i.undirected && i.undirected[n] : o;
    }
    function s(e) {
        return "object" === t(e) && null !== e;
    }
    function h(t) {
        var e;
        for(e in t)return !1;
        return !0;
    }
    function p(t, e, n) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            configurable: !1,
            writable: !0,
            value: n
        });
    }
    function f(t, e, n) {
        var r = {
            enumerable: !0,
            configurable: !0
        };
        "function" == typeof n ? r.get = n : (r.value = n, r.writable = !1), Object.defineProperty(t, e, r);
    }
    function l(t) {
        return !!s(t) && !(t.attributes && !Array.isArray(t.attributes));
    }
    "function" == typeof Object.assign && (u = Object.assign);
    var g, y = {
        exports: {}
    }, w = "object" == typeof Reflect ? Reflect : null, v = w && "function" == typeof w.apply ? w.apply : function(t, e, n) {
        return Function.prototype.apply.call(t, e, n);
    };
    g = w && "function" == typeof w.ownKeys ? w.ownKeys : Object.getOwnPropertySymbols ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
        return Object.getOwnPropertyNames(t);
    };
    var b = Number.isNaN || function(t) {
        return t != t;
    };
    function m() {
        m.init.call(this);
    }
    y.exports = m, y.exports.once = function(t, e) {
        return new Promise(function(n, r) {
            function i(n) {
                t.removeListener(e, o), r(n);
            }
            function o() {
                "function" == typeof t.removeListener && t.removeListener("error", i), n([].slice.call(arguments));
            }
            U(t, e, o, {
                once: !0
            }), "error" !== e && function(t, e, n) {
                "function" == typeof t.on && U(t, "error", e, n);
            }(t, i, {
                once: !0
            });
        });
    }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
    var k = 10;
    function _(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function G(t) {
        return void 0 === t._maxListeners ? m.defaultMaxListeners : t._maxListeners;
    }
    function x(t, e, n, r) {
        var i, o, a, c;
        if (_(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), a = o[e]), void 0 === a) a = o[e] = n, ++t._eventsCount;
        else if ("function" == typeof a ? a = o[e] = r ? [
            n,
            a
        ] : [
            a,
            n
        ] : r ? a.unshift(n) : a.push(n), (i = G(t)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, c = u, console && console.warn && console.warn(c);
        }
        return t;
    }
    function E() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function A(t, e, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        }, i = E.bind(r);
        return i.listener = n, r.wrapFn = i, i;
    }
    function L(t, e, n) {
        var r = t._events;
        if (void 0 === r) return [];
        var i = r[e];
        return void 0 === i ? [] : "function" == typeof i ? n ? [
            i.listener || i
        ] : [
            i
        ] : n ? function(t) {
            for(var e = new Array(t.length), n = 0; n < e.length; ++n)e[n] = t[n].listener || t[n];
            return e;
        }(i) : D(i, i.length);
    }
    function S(t) {
        var e = this._events;
        if (void 0 !== e) {
            var n = e[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function D(t, e) {
        for(var n = new Array(e), r = 0; r < e; ++r)n[r] = t[r];
        return n;
    }
    function U(t, e, n, r) {
        if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
        else {
            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(e, function i(o) {
                r.once && t.removeEventListener(e, i), n(o);
            });
        }
    }
    function N(t) {
        if ("function" != typeof t) throw new Error("obliterator/iterator: expecting a function!");
        this.next = t;
    }
    Object.defineProperty(m, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return k;
        },
        set: function(t) {
            if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            k = t;
        }
    }), m.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, m.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this;
    }, m.prototype.getMaxListeners = function() {
        return G(this);
    }, m.prototype.emit = function(t) {
        for(var e = [], n = 1; n < arguments.length; n++)e.push(arguments[n]);
        var r = "error" === t, i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
            var o;
            if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
            var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw a.context = o, a;
        }
        var c = i[t];
        if (void 0 === c) return !1;
        if ("function" == typeof c) v(c, this, e);
        else {
            var u = c.length, d = D(c, u);
            for(n = 0; n < u; ++n)v(d[n], this, e);
        }
        return !0;
    }, m.prototype.addListener = function(t, e) {
        return x(this, t, e, !1);
    }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(t, e) {
        return x(this, t, e, !0);
    }, m.prototype.once = function(t, e) {
        return _(e), this.on(t, A(this, t, e)), this;
    }, m.prototype.prependOnceListener = function(t, e) {
        return _(e), this.prependListener(t, A(this, t, e)), this;
    }, m.prototype.removeListener = function(t, e) {
        var n, r, i, o, a;
        if (_(e), void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[t])) return this;
        if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
        else if ("function" != typeof n) {
            for(i = -1, o = n.length - 1; o >= 0; o--)if (n[o] === e || n[o].listener === e) {
                a = n[o].listener, i = o;
                break;
            }
            if (i < 0) return this;
            0 === i ? n.shift() : function(t, e) {
                for(; e + 1 < t.length; e++)t[e] = t[e + 1];
                t.pop();
            }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || e);
        }
        return this;
    }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(t) {
        var e, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
        if (0 === arguments.length) {
            var i, o = Object.keys(n);
            for(r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
        else if (void 0 !== e) for(r = e.length - 1; r >= 0; r--)this.removeListener(t, e[r]);
        return this;
    }, m.prototype.listeners = function(t) {
        return L(this, t, !0);
    }, m.prototype.rawListeners = function(t) {
        return L(this, t, !1);
    }, m.listenerCount = function(t, e) {
        return "function" == typeof t.listenerCount ? t.listenerCount(e) : S.call(t, e);
    }, m.prototype.listenerCount = S, m.prototype.eventNames = function() {
        return this._eventsCount > 0 ? g(this._events) : [];
    }, "undefined" != typeof Symbol && (N.prototype[Symbol.iterator] = function() {
        return this;
    }), N.of = function() {
        var t = arguments, e = t.length, n = 0;
        return new N(function() {
            return n >= e ? {
                done: !0
            } : {
                done: !1,
                value: t[n++]
            };
        });
    }, N.empty = function() {
        return new N(function() {
            return {
                done: !0
            };
        });
    }, N.fromSequence = function(t) {
        var e = 0, n = t.length;
        return new N(function() {
            return e >= n ? {
                done: !0
            } : {
                done: !1,
                value: t[e++]
            };
        });
    }, N.is = function(t) {
        return t instanceof N || "object" == typeof t && null !== t && "function" == typeof t.next;
    };
    var O = N, j = {};
    j.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
    var C = O, M = j, z = M.ARRAY_BUFFER_SUPPORT, W = M.SYMBOL_SUPPORT;
    var P = function(t) {
        var e = function(t) {
            return "string" == typeof t || Array.isArray(t) || z && ArrayBuffer.isView(t) ? C.fromSequence(t) : "object" != typeof t || null === t ? null : W && "function" == typeof t[Symbol.iterator] ? t[Symbol.iterator]() : "function" == typeof t.next ? t : null;
        }(t);
        if (!e) throw new Error("obliterator: target is not iterable nor a valid iterator.");
        return e;
    }, R = P, K = function(t, e) {
        for(var n, r = arguments.length > 1 ? e : 1 / 0, i = r !== 1 / 0 ? new Array(r) : [], o = 0, a = R(t);;){
            if (o === r) return i;
            if ((n = a.next()).done) return o !== e && (i.length = o), i;
            i[o++] = n.value;
        }
    }, T = function(t) {
        function n(e) {
            var n;
            return (n = t.call(this) || this).name = "GraphError", n.message = e, n;
        }
        return e(n, t), n;
    }(a(Error)), B = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T), F = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T), I = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
        }
        return e(n, t), n;
    }(T);
    function Y(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function q(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function J(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function V(t, e, n, r, i) {
        this.key = e, this.attributes = i, this.undirected = t, this.source = n, this.target = r;
    }
    Y.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
    }, q.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
    }, J.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
    }, V.prototype.attach = function() {
        var t = "out", e = "in";
        this.undirected && (t = e = "undirected");
        var n = this.source.key, r = this.target.key;
        this.source[t][r] = this, this.undirected && n === r || (this.target[e][n] = this);
    }, V.prototype.attachMulti = function() {
        var t = "out", e = "in", n = this.source.key, r = this.target.key;
        this.undirected && (t = e = "undirected");
        var i = this.source[t], o = i[r];
        if (void 0 === o) return i[r] = this, void (this.undirected && n === r || (this.target[e][n] = this));
        o.previous = this, this.next = o, i[r] = this, this.target[e][n] = this;
    }, V.prototype.detach = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), delete this.source[n][e], delete this.target[r][t];
    }, V.prototype.detachMulti = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n][e], delete this.target[r][t]) : (this.next.previous = void 0, this.source[n][e] = this.next, this.target[r][t] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
    };
    function H(t, e, n, r, i, o, a) {
        var c, u, d, s;
        if (r = "" + r, 0 === n) {
            if (!(c = t._nodes.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" node in the graph.'));
            d = i, s = o;
        } else if (3 === n) {
            if (i = "" + i, !(u = t._edges.get(i))) throw new F("Graph.".concat(e, ': could not find the "').concat(i, '" edge in the graph.'));
            var h = u.source.key, p = u.target.key;
            if (r === h) c = u.target;
            else {
                if (r !== p) throw new F("Graph.".concat(e, ': the "').concat(r, '" node is not attached to the "').concat(i, '" edge (').concat(h, ", ").concat(p, ")."));
                c = u.source;
            }
            d = o, s = a;
        } else {
            if (!(u = t._edges.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" edge in the graph.'));
            c = 1 === n ? u.source : u.target, d = i, s = o;
        }
        return [
            c,
            d,
            s
        ];
    }
    var Q = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return a.attributes[c];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    return H(this, e, n, t, r)[0].attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return a.attributes.hasOwnProperty(c);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i, o) {
                    var a = H(this, e, n, t, r, i, o), c = a[0], u = a[1], d = a[2];
                    return c.attributes[u] = d, this.emit("nodeAttributesUpdated", {
                        key: c.key,
                        type: "set",
                        attributes: c.attributes,
                        name: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i, o) {
                    var a = H(this, e, n, t, r, i, o), c = a[0], u = a[1], d = a[2];
                    if ("function" != typeof d) throw new B("Graph.".concat(e, ": updater should be a function."));
                    var s = c.attributes, h = d(s[u]);
                    return s[u] = h, this.emit("nodeAttributesUpdated", {
                        key: c.key,
                        type: "set",
                        attributes: c.attributes,
                        name: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    return delete a.attributes[c], this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "remove",
                        attributes: a.attributes,
                        name: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return a.attributes = c, this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "replace",
                        attributes: a.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return u(a.attributes, c), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "merge",
                        attributes: a.attributes,
                        data: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o = H(this, e, n, t, r, i), a = o[0], c = o[1];
                    if ("function" != typeof c) throw new B("Graph.".concat(e, ": provided updater is not a function."));
                    return a.attributes = c(a.attributes), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "update",
                        attributes: a.attributes
                    }), this;
                };
            }
        }
    ];
    var X = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes[r];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t) {
                    var r;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 1) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var i = "" + t, o = "" + arguments[1];
                        if (!(r = d(this, i, o, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(i, '" - "').concat(o, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(r = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return r.attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes.hasOwnProperty(r);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, c = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return o.attributes[r] = i, this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, c = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof i) throw new B("Graph.".concat(e, ": updater should be a function."));
                    return o.attributes[r] = i(o.attributes[r]), this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return delete i.attributes[r], this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "remove",
                        attributes: i.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return i.attributes = r, this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "replace",
                        attributes: i.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return u(i.attributes, r), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "merge",
                        attributes: i.attributes,
                        data: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t, e, n) {
                t.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof r) throw new B("Graph.".concat(e, ": provided updater is not a function."));
                    return i.attributes = r(i.attributes), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "update",
                        attributes: i.attributes
                    }), this;
                };
            }
        }
    ];
    var Z = O, $ = P, tt = function() {
        var t = arguments, e = null, n = -1;
        return new Z(function() {
            for(var r = null;;){
                if (null === e) {
                    if (++n >= t.length) return {
                        done: !0
                    };
                    e = $(t[n]);
                }
                if (!0 !== (r = e.next()).done) break;
                e = null;
            }
            return r;
        });
    }, et = [
        {
            name: "edges",
            type: "mixed"
        },
        {
            name: "inEdges",
            type: "directed",
            direction: "in"
        },
        {
            name: "outEdges",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundEdges",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundEdges",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedEdges",
            type: "directed"
        },
        {
            name: "undirectedEdges",
            type: "undirected"
        }
    ];
    function nt(t, e, n, r) {
        var i = !1;
        for(var o in e)if (o !== r) {
            var a = e[o];
            if (i = n(a.key, a.attributes, a.source.key, a.target.key, a.source.attributes, a.target.attributes, a.undirected), t && i) return a.key;
        }
    }
    function rt(t, e, n, r) {
        var i, o, a, c = !1;
        for(var u in e)if (u !== r) {
            i = e[u];
            do {
                if (o = i.source, a = i.target, c = n(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected), t && c) return i.key;
                i = i.next;
            }while (void 0 !== i);
        }
    }
    function it(t, e) {
        var n, r = Object.keys(t), i = r.length, o = 0;
        return new O(function() {
            do if (n) n = n.next;
            else {
                if (o >= i) return {
                    done: !0
                };
                var a = r[o++];
                if (a === e) {
                    n = void 0;
                    continue;
                }
                n = t[a];
            }
            while (!n);
            return {
                done: !1,
                value: {
                    edge: n.key,
                    attributes: n.attributes,
                    source: n.source.key,
                    target: n.target.key,
                    sourceAttributes: n.source.attributes,
                    targetAttributes: n.target.attributes,
                    undirected: n.undirected
                }
            };
        });
    }
    function ot(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = i.source, a = i.target;
            return r(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected) && t ? i.key : void 0;
        }
    }
    function at(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = !1;
            do {
                if (o = r(i.key, i.attributes, i.source.key, i.target.key, i.source.attributes, i.target.attributes, i.undirected), t && o) return i.key;
                i = i.next;
            }while (void 0 !== i);
        }
    }
    function ct(t, e) {
        var n = t[e];
        return void 0 !== n.next ? new O(function() {
            if (!n) return {
                done: !0
            };
            var t = {
                edge: n.key,
                attributes: n.attributes,
                source: n.source.key,
                target: n.target.key,
                sourceAttributes: n.source.attributes,
                targetAttributes: n.target.attributes,
                undirected: n.undirected
            };
            return n = n.next, {
                done: !1,
                value: t
            };
        }) : O.of({
            edge: n.key,
            attributes: n.attributes,
            source: n.source.key,
            target: n.target.key,
            sourceAttributes: n.source.attributes,
            targetAttributes: n.target.attributes,
            undirected: n.undirected
        });
    }
    function ut(t, e) {
        if (0 === t.size) return [];
        if ("mixed" === e || e === t.type) return "function" == typeof Array.from ? Array.from(t._edges.keys()) : K(t._edges.keys(), t._edges.size);
        for(var n, r, i = "undirected" === e ? t.undirectedSize : t.directedSize, o = new Array(i), a = "undirected" === e, c = t._edges.values(), u = 0; !0 !== (n = c.next()).done;)(r = n.value).undirected === a && (o[u++] = r.key);
        return o;
    }
    function dt(t, e, n, r) {
        if (0 !== e.size) {
            for(var i, o, a = "mixed" !== n && n !== e.type, c = "undirected" === n, u = !1, d = e._edges.values(); !0 !== (i = d.next()).done;)if (o = i.value, !a || o.undirected === c) {
                var s = o, h = s.key, p = s.attributes, f = s.source, l = s.target;
                if (u = r(h, p, f.key, l.key, f.attributes, l.attributes, o.undirected), t && u) return h;
            }
        }
    }
    function st(t, e) {
        if (0 === t.size) return O.empty();
        var n = "mixed" !== e && e !== t.type, r = "undirected" === e, i = t._edges.values();
        return new O(function() {
            for(var t, e;;){
                if ((t = i.next()).done) return t;
                if (e = t.value, !n || e.undirected === r) break;
            }
            return {
                value: {
                    edge: e.key,
                    attributes: e.attributes,
                    source: e.source.key,
                    target: e.target.key,
                    sourceAttributes: e.source.attributes,
                    targetAttributes: e.target.attributes,
                    undirected: e.undirected
                },
                done: !1
            };
        });
    }
    function ht(t, e, n, r, i, o) {
        var a, c = e ? rt : nt;
        if ("undirected" !== n) {
            if ("out" !== r && (a = c(t, i.in, o), t && a)) return a;
            if ("in" !== r && (a = c(t, i.out, o, r ? void 0 : i.key), t && a)) return a;
        }
        if ("directed" !== n && (a = c(t, i.undirected, o), t && a)) return a;
    }
    function pt(t, e, n, r) {
        var i = [];
        return ht(!1, t, e, n, r, function(t) {
            i.push(t);
        }), i;
    }
    function ft(t, e, n) {
        var r = O.empty();
        return "undirected" !== t && ("out" !== e && void 0 !== n.in && (r = tt(r, it(n.in))), "in" !== e && void 0 !== n.out && (r = tt(r, it(n.out, e ? void 0 : n.key)))), "directed" !== t && void 0 !== n.undirected && (r = tt(r, it(n.undirected))), r;
    }
    function lt(t, e, n, r, i, o, a) {
        var c, u = n ? at : ot;
        if ("undirected" !== e) {
            if (void 0 !== i.in && "out" !== r && (c = u(t, i.in, o, a), t && c)) return c;
            if (void 0 !== i.out && "in" !== r && (r || i.key !== o) && (c = u(t, i.out, o, a), t && c)) return c;
        }
        if ("directed" !== e && void 0 !== i.undirected && (c = u(t, i.undirected, o, a), t && c)) return c;
    }
    function gt(t, e, n, r, i) {
        var o = [];
        return lt(!1, t, e, n, r, i, function(t) {
            o.push(t);
        }), o;
    }
    function yt(t, e, n, r) {
        var i = O.empty();
        return "undirected" !== t && (void 0 !== n.in && "out" !== e && r in n.in && (i = tt(i, ct(n.in, r))), void 0 !== n.out && "in" !== e && r in n.out && (e || n.key !== r) && (i = tt(i, ct(n.out, r)))), "directed" !== t && void 0 !== n.undirected && r in n.undirected && (i = tt(i, ct(n.undirected, r))), i;
    }
    var wt = [
        {
            name: "neighbors",
            type: "mixed"
        },
        {
            name: "inNeighbors",
            type: "directed",
            direction: "in"
        },
        {
            name: "outNeighbors",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundNeighbors",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundNeighbors",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedNeighbors",
            type: "directed"
        },
        {
            name: "undirectedNeighbors",
            type: "undirected"
        }
    ];
    function vt() {
        this.A = null, this.B = null;
    }
    function bt(t, e, n, r, i) {
        for(var o in r){
            var a = r[o], c = a.source, u = a.target, d = c === n ? u : c;
            if (!e || !e.has(d.key)) {
                var s = i(d.key, d.attributes);
                if (t && s) return d.key;
            }
        }
    }
    function mt(t, e, n, r, i) {
        if ("mixed" !== e) {
            if ("undirected" === e) return bt(t, null, r, r.undirected, i);
            if ("string" == typeof n) return bt(t, null, r, r[n], i);
        }
        var o, a = new vt;
        if ("undirected" !== e) {
            if ("out" !== n) {
                if (o = bt(t, null, r, r.in, i), t && o) return o;
                a.wrap(r.in);
            }
            if ("in" !== n) {
                if (o = bt(t, a, r, r.out, i), t && o) return o;
                a.wrap(r.out);
            }
        }
        if ("directed" !== e && (o = bt(t, a, r, r.undirected, i), t && o)) return o;
    }
    function kt(t, e, n) {
        var r = Object.keys(n), i = r.length, o = 0;
        return new O(function() {
            var a = null;
            do {
                if (o >= i) return t && t.wrap(n), {
                    done: !0
                };
                var c = n[r[o++]], u = c.source, d = c.target;
                a = u === e ? d : u, t && t.has(a.key) && (a = null);
            }while (null === a);
            return {
                done: !1,
                value: {
                    neighbor: a.key,
                    attributes: a.attributes
                }
            };
        });
    }
    function _t(t, e) {
        var n = e.name, r = e.type, i = e.direction;
        t.prototype[n] = function(t) {
            if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
            t = "" + t;
            var e = this._nodes.get(t);
            if (void 0 === e) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
            return function(t, e, n) {
                if ("mixed" !== t) {
                    if ("undirected" === t) return Object.keys(n.undirected);
                    if ("string" == typeof e) return Object.keys(n[e]);
                }
                var r = [];
                return mt(!1, t, e, n, function(t) {
                    r.push(t);
                }), r;
            }("mixed" === r ? this.type : r, i, e);
        };
    }
    function Gt(t, e) {
        var n = e.name, r = e.type, i = e.direction, o = n.slice(0, -1) + "Entries";
        t.prototype[o] = function(t) {
            if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
            t = "" + t;
            var e = this._nodes.get(t);
            if (void 0 === e) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
            return function(t, e, n) {
                if ("mixed" !== t) {
                    if ("undirected" === t) return kt(null, n, n.undirected);
                    if ("string" == typeof e) return kt(null, n, n[e]);
                }
                var r = O.empty(), i = new vt;
                return "undirected" !== t && ("out" !== e && (r = tt(r, kt(i, n, n.in))), "in" !== e && (r = tt(r, kt(i, n, n.out)))), "directed" !== t && (r = tt(r, kt(i, n, n.undirected))), r;
            }("mixed" === r ? this.type : r, i, e);
        };
    }
    function xt(t, e, n, r, i) {
        for(var o, a, c, u, d, s, h, p = r._nodes.values(), f = r.type; !0 !== (o = p.next()).done;){
            var l = !1;
            if (a = o.value, "undirected" !== f) for(c in u = a.out){
                d = u[c];
                do {
                    if (s = d.target, l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
                    d = d.next;
                }while (d);
            }
            if ("directed" !== f) {
                for(c in u = a.undirected)if (!(e && a.key > c)) {
                    d = u[c];
                    do {
                        if ((s = d.target).key !== c && (s = d.source), l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
                        d = d.next;
                    }while (d);
                }
            }
            if (n && !l && (h = i(a.key, null, a.attributes, null, null, null, null), t && h)) return null;
        }
    }
    function Et(t) {
        if (!s(t)) throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t)) throw new B("Graph.import: serialized node is missing its key.");
        if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    }
    function At(t) {
        if (!s(t)) throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t)) throw new B("Graph.import: serialized edge is missing its source.");
        if (!("target" in t)) throw new B("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t && "boolean" != typeof t.undirected) throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
    }
    vt.prototype.wrap = function(t) {
        null === this.A ? this.A = t : null === this.B && (this.B = t);
    }, vt.prototype.has = function(t) {
        return null !== this.A && t in this.A || null !== this.B && t in this.B;
    };
    var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
        return Lt++;
    }), Dt = new Set([
        "directed",
        "undirected",
        "mixed"
    ]), Ut = new Set([
        "domain",
        "_events",
        "_eventsCount",
        "_maxListeners"
    ]), Nt = {
        allowSelfLoops: !0,
        multi: !1,
        type: "mixed"
    };
    function Ot(t, e, n) {
        var r = new t.NodeDataClass(e, n);
        return t._nodes.set(e, r), t.emit("nodeAdded", {
            key: e,
            attributes: n
        }), r;
    }
    function jt(t, e, n, r, i, o, a, c) {
        if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (c && !s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
        if (o = "" + o, a = "" + a, c = c || {}, !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var u = t._nodes.get(o), d = t._nodes.get(a);
        if (!u) throw new F("Graph.".concat(e, ': source node "').concat(o, '" not found.'));
        if (!d) throw new F("Graph.".concat(e, ': target node "').concat(a, '" not found.'));
        var h = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: c
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        if (!t.multi && (r ? void 0 !== u.undirected[a] : void 0 !== u.out[a])) throw new I("Graph.".concat(e, ': an edge linking "').concat(o, '" to "').concat(a, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
        var p = new V(r, i, u, d, c);
        t._edges.set(i, p);
        var f = o === a;
        return r ? (u.undirectedDegree++, d.undirectedDegree++, f && (u.undirectedLoops++, t._undirectedSelfLoopCount++)) : (u.outDegree++, d.inDegree++, f && (u.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, h.key = i, t.emit("edgeAdded", h), i;
    }
    function Ct(t, e, n, r, i, o, a, c, d) {
        if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (c) {
            if (d) {
                if ("function" != typeof c) throw new B("Graph.".concat(e, ': invalid updater function. Expecting a function but got "').concat(c, '"'));
            } else if (!s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
        }
        var h;
        if (o = "" + o, a = "" + a, d && (h = c, c = void 0), !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var p, f, l = t._nodes.get(o), g = t._nodes.get(a);
        if (!n && (p = t._edges.get(i))) {
            if (!(p.source.key === o && p.target.key === a || r && p.source.key === a && p.target.key === o)) throw new I("Graph.".concat(e, ': inconsistency detected when attempting to merge the "').concat(i, '" edge with "').concat(o, '" source & "').concat(a, '" target vs. ("').concat(p.source.key, '", "').concat(p.target.key, '").'));
            f = p;
        }
        if (f || t.multi || !l || (f = r ? l.undirected[a] : l.out[a]), f) {
            var y = [
                f.key,
                !1,
                !1,
                !1
            ];
            if (d ? !h : !c) return y;
            if (d) {
                var w = f.attributes;
                f.attributes = h(w), t.emit("edgeAttributesUpdated", {
                    type: "replace",
                    key: f.key,
                    attributes: f.attributes
                });
            } else u(f.attributes, c), t.emit("edgeAttributesUpdated", {
                type: "merge",
                key: f.key,
                attributes: f.attributes,
                data: c
            });
            return y;
        }
        c = c || {}, d && h && (c = h(c));
        var v = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: c
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        var b = !1, m = !1;
        l || (l = Ot(t, o, {}), b = !0, o === a && (g = l, m = !0)), g || (g = Ot(t, a, {}), m = !0), p = new V(r, i, l, g, c), t._edges.set(i, p);
        var k = o === a;
        return r ? (l.undirectedDegree++, g.undirectedDegree++, k && (l.undirectedLoops++, t._undirectedSelfLoopCount++)) : (l.outDegree++, g.inDegree++, k && (l.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, v.key = i, t.emit("edgeAdded", v), [
            i,
            !0,
            b,
            m
        ];
    }
    function Mt(t, e) {
        t._edges.delete(e.key);
        var n = e.source, r = e.target, i = e.attributes, o = e.undirected, a = n === r;
        o ? (n.undirectedDegree--, r.undirectedDegree--, a && (n.undirectedLoops--, t._undirectedSelfLoopCount--)) : (n.outDegree--, r.inDegree--, a && (n.directedLoops--, t._directedSelfLoopCount--)), t.multi ? e.detachMulti() : e.detach(), o ? t._undirectedSize-- : t._directedSize--, t.emit("edgeDropped", {
            key: e.key,
            attributes: i,
            source: n.key,
            target: r.key,
            undirected: o
        });
    }
    var zt = function(n) {
        function r(t) {
            var e;
            if (e = n.call(this) || this, "boolean" != typeof (t = u({}, Nt, t)).multi) throw new B("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t.multi, '".'));
            if (!Dt.has(t.type)) throw new B('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t.type, '".'));
            if ("boolean" != typeof t.allowSelfLoops) throw new B("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t.allowSelfLoops, '".'));
            var r = "mixed" === t.type ? Y : "directed" === t.type ? q : J;
            p(c(e), "NodeDataClass", r);
            var i = "geid_" + St() + "_", o = 0;
            return p(c(e), "_attributes", {}), p(c(e), "_nodes", new Map), p(c(e), "_edges", new Map), p(c(e), "_directedSize", 0), p(c(e), "_undirectedSize", 0), p(c(e), "_directedSelfLoopCount", 0), p(c(e), "_undirectedSelfLoopCount", 0), p(c(e), "_edgeKeyGenerator", function() {
                var t;
                do t = i + o++;
                while (e._edges.has(t));
                return t;
            }), p(c(e), "_options", t), Ut.forEach(function(t) {
                return p(c(e), t, e[t]);
            }), f(c(e), "order", function() {
                return e._nodes.size;
            }), f(c(e), "size", function() {
                return e._edges.size;
            }), f(c(e), "directedSize", function() {
                return e._directedSize;
            }), f(c(e), "undirectedSize", function() {
                return e._undirectedSize;
            }), f(c(e), "selfLoopCount", function() {
                return e._directedSelfLoopCount + e._undirectedSelfLoopCount;
            }), f(c(e), "directedSelfLoopCount", function() {
                return e._directedSelfLoopCount;
            }), f(c(e), "undirectedSelfLoopCount", function() {
                return e._undirectedSelfLoopCount;
            }), f(c(e), "multi", e._options.multi), f(c(e), "type", e._options.type), f(c(e), "allowSelfLoops", e._options.allowSelfLoops), f(c(e), "implementation", function() {
                return "graphology";
            }), e;
        }
        e(r, n);
        var i = r.prototype;
        return i._resetInstanceCounters = function() {
            this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, i.hasNode = function(t) {
            return this._nodes.has("" + t);
        }, i.hasDirectedEdge = function(t, e) {
            if ("undirected" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && !r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                return !!i && i.out.hasOwnProperty(e);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.hasUndirectedEdge = function(t, e) {
            if ("directed" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                return !!i && i.undirected.hasOwnProperty(e);
            }
            throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.hasEdge = function(t, e) {
            if (1 === arguments.length) {
                var n = "" + t;
                return this._edges.has(n);
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var r = this._nodes.get(t);
                return !!r && (void 0 !== r.out && r.out.hasOwnProperty(e) || void 0 !== r.undirected && r.undirected.hasOwnProperty(e));
            }
            throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i.directedEdge = function(t, e) {
            if ("undirected" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new F('Graph.directedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new F('Graph.directedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.out && n.out[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i.undirectedEdge = function(t, e) {
            if ("directed" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new F('Graph.undirectedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new F('Graph.undirectedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.undirected && n.undirected[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i.edge = function(t, e) {
            if (this.multi) throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.edge: could not find the "'.concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new F('Graph.edge: could not find the "'.concat(e, '" target node in the graph.'));
            var r = n.out && n.out[e] || n.undirected && n.undirected[e] || void 0;
            if (r) return r.key;
        }, i.areDirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out);
        }, i.areOutNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areOutNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out;
        }, i.areInNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areInNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in;
        }, i.areUndirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" !== this.type && e in n.undirected;
        }, i.areNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out) || "directed" !== this.type && e in n.undirected;
        }, i.areInboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in || "directed" !== this.type && e in n.undirected;
        }, i.areOutboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out || "directed" !== this.type && e in n.undirected;
        }, i.inDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree;
        }, i.outDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.outDegree;
        }, i.directedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.directedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree + e.outDegree;
        }, i.undirectedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.undirectedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" === this.type ? 0 : e.undirectedDegree;
        }, i.inboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree), n;
        }, i.outboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.outDegree), n;
        }, i.degree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.degree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree + e.outDegree), n;
        }, i.inDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree - e.directedLoops;
        }, i.outDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.outDegree - e.directedLoops;
        }, i.directedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree + e.outDegree - 2 * e.directedLoops;
        }, i.undirectedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" === this.type ? 0 : e.undirectedDegree - 2 * e.undirectedLoops;
        }, i.inboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree, r += e.directedLoops), n - r;
        }, i.outboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.outDegree, r += e.directedLoops), n - r;
        }, i.degreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0, r = 0;
            return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree + e.outDegree, r += 2 * e.directedLoops), n - r;
        }, i.source = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.source: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source.key;
        }, i.target = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.target: could not find the "'.concat(t, '" edge in the graph.'));
            return e.target.key;
        }, i.extremities = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.extremities: could not find the "'.concat(t, '" edge in the graph.'));
            return [
                e.source.key,
                e.target.key
            ];
        }, i.opposite = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(e);
            if (!n) throw new F('Graph.opposite: could not find the "'.concat(e, '" edge in the graph.'));
            var r = n.source.key, i = n.target.key;
            if (t === r) return i;
            if (t === i) return r;
            throw new F('Graph.opposite: the "'.concat(t, '" node is not attached to the "').concat(e, '" edge (').concat(r, ", ").concat(i, ")."));
        }, i.hasExtremity = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(t);
            if (!n) throw new F('Graph.hasExtremity: could not find the "'.concat(t, '" edge in the graph.'));
            return n.source.key === e || n.target.key === e;
        }, i.isUndirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isUndirected: could not find the "'.concat(t, '" edge in the graph.'));
            return e.undirected;
        }, i.isDirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isDirected: could not find the "'.concat(t, '" edge in the graph.'));
            return !e.undirected;
        }, i.isSelfLoop = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new F('Graph.isSelfLoop: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source === e.target;
        }, i.addNode = function(t, e) {
            var n = function(t, e, n) {
                if (n && !s(n)) throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n, '"'));
                if (e = "" + e, n = n || {}, t._nodes.has(e)) throw new I('Graph.addNode: the "'.concat(e, '" node already exist in the graph.'));
                var r = new t.NodeDataClass(e, n);
                return t._nodes.set(e, r), t.emit("nodeAdded", {
                    key: e,
                    attributes: n
                }), r;
            }(this, t, e);
            return n.key;
        }, i.mergeNode = function(t, e) {
            if (e && !s(e)) throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e, '"'));
            t = "" + t, e = e || {};
            var n = this._nodes.get(t);
            return n ? (e && (u(n.attributes, e), this.emit("nodeAttributesUpdated", {
                type: "merge",
                key: t,
                attributes: n.attributes,
                data: e
            })), [
                t,
                !1
            ]) : (n = new this.NodeDataClass(t, e), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: e
            }), [
                t,
                !0
            ]);
        }, i.updateNode = function(t, e) {
            if (e && "function" != typeof e) throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e, '"'));
            t = "" + t;
            var n = this._nodes.get(t);
            if (n) {
                if (e) {
                    var r = n.attributes;
                    n.attributes = e(r), this.emit("nodeAttributesUpdated", {
                        type: "replace",
                        key: t,
                        attributes: n.attributes
                    });
                }
                return [
                    t,
                    !1
                ];
            }
            var i = e ? e({}) : {};
            return n = new this.NodeDataClass(t, i), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: i
            }), [
                t,
                !0
            ];
        }, i.dropNode = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new F('Graph.dropNode: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" !== this.type) {
                for(var r in n.out){
                    e = n.out[r];
                    do Mt(this, e), e = e.next;
                    while (e);
                }
                for(var i in n.in){
                    e = n.in[i];
                    do Mt(this, e), e = e.next;
                    while (e);
                }
            }
            if ("directed" !== this.type) for(var o in n.undirected){
                e = n.undirected[o];
                do Mt(this, e), e = e.next;
                while (e);
            }
            this._nodes.delete(t), this.emit("nodeDropped", {
                key: t,
                attributes: n.attributes
            });
        }, i.dropEdge = function(t) {
            var e;
            if (arguments.length > 1) {
                var n = "" + arguments[0], r = "" + arguments[1];
                if (!(e = d(this, n, r, this.type))) throw new F('Graph.dropEdge: could not find the "'.concat(n, '" -> "').concat(r, '" edge in the graph.'));
            } else if (t = "" + t, !(e = this._edges.get(t))) throw new F('Graph.dropEdge: could not find the "'.concat(t, '" edge in the graph.'));
            return Mt(this, e), this;
        }, i.dropDirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = d(this, t = "" + t, e = "" + e, "directed");
            if (!n) throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i.dropUndirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = d(this, t, e, "undirected");
            if (!n) throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i.clear = function() {
            this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, i.clearEdges = function() {
            for(var t, e = this._nodes.values(); !0 !== (t = e.next()).done;)t.value.clear();
            this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, i.getAttribute = function(t) {
            return this._attributes[t];
        }, i.getAttributes = function() {
            return this._attributes;
        }, i.hasAttribute = function(t) {
            return this._attributes.hasOwnProperty(t);
        }, i.setAttribute = function(t, e) {
            return this._attributes[t] = e, this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.updateAttribute = function(t, e) {
            if ("function" != typeof e) throw new B("Graph.updateAttribute: updater should be a function.");
            var n = this._attributes[t];
            return this._attributes[t] = e(n), this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.removeAttribute = function(t) {
            return delete this._attributes[t], this.emit("attributesUpdated", {
                type: "remove",
                attributes: this._attributes,
                name: t
            }), this;
        }, i.replaceAttributes = function(t) {
            if (!s(t)) throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
            return this._attributes = t, this.emit("attributesUpdated", {
                type: "replace",
                attributes: this._attributes
            }), this;
        }, i.mergeAttributes = function(t) {
            if (!s(t)) throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
            return u(this._attributes, t), this.emit("attributesUpdated", {
                type: "merge",
                attributes: this._attributes,
                data: t
            }), this;
        }, i.updateAttributes = function(t) {
            if ("function" != typeof t) throw new B("Graph.updateAttributes: provided updater is not a function.");
            return this._attributes = t(this._attributes), this.emit("attributesUpdated", {
                type: "update",
                attributes: this._attributes
            }), this;
        }, i.updateEachNodeAttributes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
            if (e && !l(e)) throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i = this._nodes.values(); !0 !== (n = i.next()).done;)(r = n.value).attributes = t(r.key, r.attributes);
            this.emit("eachNodeAttributesUpdated", {
                hints: e || null
            });
        }, i.updateEachEdgeAttributes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
            if (e && !l(e)) throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i, o, a = this._edges.values(); !0 !== (n = a.next()).done;)i = (r = n.value).source, o = r.target, r.attributes = t(r.key, r.attributes, i.key, o.key, i.attributes, o.attributes, r.undirected);
            this.emit("eachEdgeAttributesUpdated", {
                hints: e || null
            });
        }, i.forEachAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
            xt(!1, !1, !1, this, t);
        }, i.forEachAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
            xt(!1, !1, !0, this, t);
        }, i.forEachAssymetricAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
            xt(!1, !0, !1, this, t);
        }, i.forEachAssymetricAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
            xt(!1, !0, !0, this, t);
        }, i.nodes = function() {
            return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
        }, i.forEachNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.forEachNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes);
        }, i.findNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.findNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return n.key;
        }, i.mapNodes = function(t) {
            if ("function" != typeof t) throw new B("Graph.mapNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = new Array(this.order), o = 0; !0 !== (e = r.next()).done;)n = e.value, i[o++] = t(n.key, n.attributes);
            return i;
        }, i.someNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.someNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return !0;
            return !1;
        }, i.everyNode = function(t) {
            if ("function" != typeof t) throw new B("Graph.everyNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (!t((n = e.value).key, n.attributes)) return !1;
            return !0;
        }, i.filterNodes = function(t) {
            if ("function" != typeof t) throw new B("Graph.filterNodes: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = []; !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes) && i.push(n.key);
            return i;
        }, i.reduceNodes = function(t, e) {
            if ("function" != typeof t) throw new B("Graph.reduceNodes: expecting a callback.");
            if (arguments.length < 2) throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
            for(var n, r, i = e, o = this._nodes.values(); !0 !== (n = o.next()).done;)i = t(i, (r = n.value).key, r.attributes);
            return i;
        }, i.nodeEntries = function() {
            var t = this._nodes.values();
            return new O(function() {
                var e = t.next();
                if (e.done) return e;
                var n = e.value;
                return {
                    value: {
                        node: n.key,
                        attributes: n.attributes
                    },
                    done: !1
                };
            });
        }, i.export = function() {
            var t = this, e = new Array(this._nodes.size), n = 0;
            this._nodes.forEach(function(t, r) {
                e[n++] = function(t, e) {
                    var n = {
                        key: t
                    };
                    return h(e.attributes) || (n.attributes = u({}, e.attributes)), n;
                }(r, t);
            });
            var r = new Array(this._edges.size);
            return n = 0, this._edges.forEach(function(e, i) {
                r[n++] = function(t, e, n) {
                    var r = {
                        key: e,
                        source: n.source.key,
                        target: n.target.key
                    };
                    return h(n.attributes) || (r.attributes = u({}, n.attributes)), "mixed" === t && n.undirected && (r.undirected = !0), r;
                }(t.type, i, e);
            }), {
                options: {
                    type: this.type,
                    multi: this.multi,
                    allowSelfLoops: this.allowSelfLoops
                },
                attributes: this.getAttributes(),
                nodes: e,
                edges: r
            };
        }, i.import = function(t) {
            var e, n, i, o, a, c = this, u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t instanceof r) return t.forEachNode(function(t, e) {
                u ? c.mergeNode(t, e) : c.addNode(t, e);
            }), t.forEachEdge(function(t, e, n, r, i, o, a) {
                u ? a ? c.mergeUndirectedEdgeWithKey(t, n, r, e) : c.mergeDirectedEdgeWithKey(t, n, r, e) : a ? c.addUndirectedEdgeWithKey(t, n, r, e) : c.addDirectedEdgeWithKey(t, n, r, e);
            }), this;
            if (!s(t)) throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
            if (t.attributes) {
                if (!s(t.attributes)) throw new B("Graph.import: invalid attributes. Expecting a plain object.");
                u ? this.mergeAttributes(t.attributes) : this.replaceAttributes(t.attributes);
            }
            if (t.nodes) {
                if (i = t.nodes, !Array.isArray(i)) throw new B("Graph.import: invalid nodes. Expecting an array.");
                for(e = 0, n = i.length; e < n; e++){
                    Et(o = i[e]);
                    var d = o, h = d.key, p = d.attributes;
                    u ? this.mergeNode(h, p) : this.addNode(h, p);
                }
            }
            if (t.edges) {
                var f = !1;
                if ("undirected" === this.type && (f = !0), i = t.edges, !Array.isArray(i)) throw new B("Graph.import: invalid edges. Expecting an array.");
                for(e = 0, n = i.length; e < n; e++){
                    At(a = i[e]);
                    var l = a, g = l.source, y = l.target, w = l.attributes, v = l.undirected, b = void 0 === v ? f : v;
                    "key" in a ? (u ? b ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a.key, g, y, w) : (u ? b ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g, y, w);
                }
            }
            return this;
        }, i.nullCopy = function(t) {
            var e = new r(u({}, this._options, t));
            return e.replaceAttributes(u({}, this.getAttributes())), e;
        }, i.emptyCopy = function(t) {
            var e = this.nullCopy(t);
            return this._nodes.forEach(function(t, n) {
                var r = u({}, t.attributes);
                t = new e.NodeDataClass(n, r), e._nodes.set(n, t);
            }), e;
        }, i.copy = function(t) {
            if ("string" == typeof (t = t || {}).type && t.type !== this.type && "mixed" !== t.type) throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t.type, '" because this would mean losing information about the current graph.'));
            if ("boolean" == typeof t.multi && t.multi !== this.multi && !0 !== t.multi) throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
            if ("boolean" == typeof t.allowSelfLoops && t.allowSelfLoops !== this.allowSelfLoops && !0 !== t.allowSelfLoops) throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
            for(var e, n, r = this.emptyCopy(t), i = this._edges.values(); !0 !== (e = i.next()).done;)jt(r, "copy", !1, (n = e.value).undirected, n.key, n.source.key, n.target.key, u({}, n.attributes));
            return r;
        }, i.toJSON = function() {
            return this.export();
        }, i.toString = function() {
            return "[object Graph]";
        }, i.inspect = function() {
            var e = this, n = {};
            this._nodes.forEach(function(t, e) {
                n[e] = t.attributes;
            });
            var r = {}, i = {};
            this._edges.forEach(function(t, n) {
                var o, a = t.undirected ? "--" : "->", c = "", u = t.source.key, d = t.target.key;
                t.undirected && u > d && (o = u, u = d, d = o);
                var s = "(".concat(u, ")").concat(a, "(").concat(d, ")");
                n.startsWith("geid_") ? e.multi && (void 0 === i[s] ? i[s] = 0 : i[s]++, c += "".concat(i[s], ". ")) : c += "[".concat(n, "]: "), r[c += s] = t.attributes;
            });
            var o = {};
            for(var a in this)this.hasOwnProperty(a) && !Ut.has(a) && "function" != typeof this[a] && "symbol" !== t(a) && (o[a] = this[a]);
            return o.attributes = this._attributes, o.nodes = n, o.edges = r, p(o, "constructor", this.constructor), o;
        }, r;
    }(y.exports.EventEmitter);
    "undefined" != typeof Symbol && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [
        {
            name: function(t) {
                return "".concat(t, "Edge");
            },
            generateKey: !0
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdge");
            },
            generateKey: !0,
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdge");
            },
            generateKey: !0,
            type: "undirected"
        },
        {
            name: function(t) {
                return "".concat(t, "EdgeWithKey");
            }
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdgeWithKey");
            },
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdgeWithKey");
            },
            type: "undirected"
        }
    ].forEach(function(t) {
        [
            "add",
            "merge",
            "update"
        ].forEach(function(e) {
            var n = t.name(e), r = "add" === e ? jt : Ct;
            t.generateKey ? zt.prototype[n] = function(i, o, a) {
                return r(this, n, !0, "undirected" === (t.type || this.type), null, i, o, a, "update" === e);
            } : zt.prototype[n] = function(i, o, a, c) {
                return r(this, n, !1, "undirected" === (t.type || this.type), i, o, a, c, "update" === e);
            };
        });
    }), function(t) {
        Q.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Node"), 0), r(t, n("Source"), 1), r(t, n("Target"), 2), r(t, n("Opposite"), 3);
        });
    }(zt), function(t) {
        X.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Edge"), "mixed"), r(t, n("DirectedEdge"), "directed"), r(t, n("UndirectedEdge"), "undirected");
        });
    }(zt), function(t) {
        et.forEach(function(e) {
            !function(t, e) {
                var n = e.name, r = e.type, i = e.direction;
                t.prototype[n] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
                    if (!arguments.length) return ut(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var o = this._nodes.get(t);
                        if (void 0 === o) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
                        return pt(this.multi, "mixed" === r ? this.type : r, i, o);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new F("Graph.".concat(n, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(n, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return gt(r, this.multi, i, a, e);
                    }
                    throw new B("Graph.".concat(n, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e, n) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        if (1 === arguments.length) return dt(!1, this, r, n = t);
                        if (2 === arguments.length) {
                            t = "" + t, n = e;
                            var a = this._nodes.get(t);
                            if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                            return ht(!1, this.multi, "mixed" === r ? this.type : r, i, a, n);
                        }
                        if (3 === arguments.length) {
                            t = "" + t, e = "" + e;
                            var c = this._nodes.get(t);
                            if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                            if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                            return lt(!1, r, this.multi, i, c, e, n);
                        }
                        throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                    }
                };
                var a = "map" + n[0].toUpperCase() + n.slice(1);
                t.prototype[a] = function() {
                    var t, e = Array.prototype.slice.call(arguments), n = e.pop();
                    if (0 === e.length) {
                        var i = 0;
                        "directed" !== r && (i += this.undirectedSize), "undirected" !== r && (i += this.directedSize), t = new Array(i);
                        var a = 0;
                        e.push(function(e, r, i, o, c, u, d) {
                            t[a++] = n(e, r, i, o, c, u, d);
                        });
                    } else t = [], e.push(function(e, r, i, o, a, c, u) {
                        t.push(n(e, r, i, o, a, c, u));
                    });
                    return this[o].apply(this, e), t;
                };
                var c = "filter" + n[0].toUpperCase() + n.slice(1);
                t.prototype[c] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop(), n = [];
                    return t.push(function(t, r, i, o, a, c, u) {
                        e(t, r, i, o, a, c, u) && n.push(t);
                    }), this[o].apply(this, t), n;
                };
                var u = "reduce" + n[0].toUpperCase() + n.slice(1);
                t.prototype[u] = function() {
                    var t, e, n = Array.prototype.slice.call(arguments);
                    if (n.length < 2 || n.length > 4) throw new B("Graph.".concat(u, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n.length, ")."));
                    if ("function" == typeof n[n.length - 1] && "function" != typeof n[n.length - 2]) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    2 === n.length ? (t = n[0], e = n[1], n = []) : 3 === n.length ? (t = n[1], e = n[2], n = [
                        n[0]
                    ]) : 4 === n.length && (t = n[2], e = n[3], n = [
                        n[0],
                        n[1]
                    ]);
                    var r = e;
                    return n.push(function(e, n, i, o, a, c, u) {
                        r = t(r, e, n, i, o, a, c, u);
                    }), this[o].apply(this, n), r;
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "find" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e, n) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return !1;
                    if (1 === arguments.length) return dt(!0, this, r, n = t);
                    if (2 === arguments.length) {
                        t = "" + t, n = e;
                        var a = this._nodes.get(t);
                        if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        return ht(!0, this.multi, "mixed" === r ? this.type : r, i, a, n);
                    }
                    if (3 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var c = this._nodes.get(t);
                        if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return lt(!0, r, this.multi, i, c, e, n);
                    }
                    throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                };
                var a = "some" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[a] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop();
                    return t.push(function(t, n, r, i, o, a, c) {
                        return e(t, n, r, i, o, a, c);
                    }), !!this[o].apply(this, t);
                };
                var c = "every" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[c] = function() {
                    var t = Array.prototype.slice.call(arguments), e = t.pop();
                    return t.push(function(t, n, r, i, o, a, c) {
                        return !e(t, n, r, i, o, a, c);
                    }), !this[o].apply(this, t);
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = n.slice(0, -1) + "Entries";
                t.prototype[o] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
                    if (!arguments.length) return st(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (!n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        return ft(r, i, n);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return yt(r, i, a, e);
                    }
                    throw new B("Graph.".concat(o, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            }(t, e);
        });
    }(zt), function(t) {
        wt.forEach(function(e) {
            _t(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
                t.prototype[o] = function(t, e) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        mt(!1, "mixed" === r ? this.type : r, i, n, e);
                    }
                };
                var a = "map" + n[0].toUpperCase() + n.slice(1);
                t.prototype[a] = function(t, e) {
                    var n = [];
                    return this[o](t, function(t, r) {
                        n.push(e(t, r));
                    }), n;
                };
                var c = "filter" + n[0].toUpperCase() + n.slice(1);
                t.prototype[c] = function(t, e) {
                    var n = [];
                    return this[o](t, function(t, r) {
                        e(t, r) && n.push(t);
                    }), n;
                };
                var u = "reduce" + n[0].toUpperCase() + n.slice(1);
                t.prototype[u] = function(t, e, n) {
                    if (arguments.length < 3) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    var r = n;
                    return this[o](t, function(t, n) {
                        r = e(r, t, n);
                    }), r;
                };
            }(t, e), function(t, e) {
                var n = e.name, r = e.type, i = e.direction, o = n[0].toUpperCase() + n.slice(1, -1), a = "find" + o;
                t.prototype[a] = function(t, e) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new F("Graph.".concat(a, ': could not find the "').concat(t, '" node in the graph.'));
                        return mt(!0, "mixed" === r ? this.type : r, i, n, e);
                    }
                };
                var c = "some" + o;
                t.prototype[c] = function(t, e) {
                    return !!this[a](t, e);
                };
                var u = "every" + o;
                t.prototype[u] = function(t, e) {
                    return !this[a](t, function(t, n) {
                        return !e(t, n);
                    });
                };
            }(t, e), Gt(t, e);
        });
    }(zt);
    var Wt = function(t) {
        function n(e) {
            var n = u({
                type: "directed"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("directed" !== n.type) throw new B('DirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Pt = function(t) {
        function n(e) {
            var n = u({
                type: "undirected"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("undirected" !== n.type) throw new B('UndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Rt = function(t) {
        function n(e) {
            var n = u({
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Kt = function(t) {
        function n(e) {
            var n = u({
                type: "directed",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("directed" !== n.type) throw new B('MultiDirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt), Tt = function(t) {
        function n(e) {
            var n = u({
                type: "undirected",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("undirected" !== n.type) throw new B('MultiUndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e(n, t), n;
    }(zt);
    function Bt(t) {
        t.from = function(e, n) {
            var r = u({}, e.options, n), i = new t(r);
            return i.import(e), i;
        };
    }
    return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
});

},{}],"38nra":[function(require,module,exports,__globalThis) {
/**
 * Graphology Utils
 * =================
 *
 * Library endpoint.
 */ exports.inferMulti = require("85ef783024163864");
exports.inferType = require("f38780d471710dd1");
exports.isGraph = require("acbd11b129ba1093");
exports.isGraphConstructor = require("d10be33ad3cf1a8c");
exports.mergeClique = require("66dba7bd2c97cf99");
exports.mergeCycle = require("534134ef82c0583d");
exports.mergePath = require("c67f3f331b95fe99");
exports.mergeStar = require("b2e1e23767b81bd0");
exports.renameGraphKeys = require("a9434584aaddfd86");
exports.updateGraphKeys = require("3f7fc2a03387d656");

},{"85ef783024163864":"h7Bpj","f38780d471710dd1":"8TlN0","acbd11b129ba1093":"idmEa","d10be33ad3cf1a8c":"l7grp","66dba7bd2c97cf99":"a5KSN","534134ef82c0583d":"2EmbC","c67f3f331b95fe99":"RFa9A","b2e1e23767b81bd0":"b2gOZ","a9434584aaddfd86":"80rdn","3f7fc2a03387d656":"3STon"}],"h7Bpj":[function(require,module,exports,__globalThis) {
/**
 * Graphology inferMulti
 * ======================
 *
 * Useful function used to "guess" if the given graph is truly multi.
 */ var isGraph = require("6d40bef531b96de1");
/**
 * Returning whether the given graph is inferred as multi.
 *
 * @param  {Graph}   graph - Target graph.
 * @return {boolean}
 */ module.exports = function inferMulti(graph) {
    if (!isGraph(graph)) throw new Error('graphology-utils/infer-multi: expecting a valid graphology instance.');
    if (!graph.multi || graph.order === 0 || graph.size < 2) return false;
    var multi = false;
    // TODO: improve this with suitable methods
    var previousSource, previousTarget, wasUndirected, tmp;
    graph.forEachAssymetricAdjacencyEntry(function(s, t, sa, ta, e, ea, u) {
        if (multi) return; // TODO: we need #.someAdjacencyEntry
        if (u && s > t) {
            tmp = t;
            t = s;
            s = tmp;
        }
        if (s === previousSource && t === previousTarget && u === wasUndirected) {
            multi = true;
            return;
        }
        previousSource = s;
        previousTarget = t;
        wasUndirected = u;
    });
    return multi;
};

},{"6d40bef531b96de1":"idmEa"}],"idmEa":[function(require,module,exports,__globalThis) {
/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */ /**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */ module.exports = function isGraph(value) {
    return value !== null && typeof value === 'object' && typeof value.addUndirectedEdgeWithKey === 'function' && typeof value.dropNode === 'function' && typeof value.multi === 'boolean';
};

},{}],"8TlN0":[function(require,module,exports,__globalThis) {
/**
 * Graphology inferType
 * =====================
 *
 * Useful function used to "guess" the real type of the given Graph using
 * introspection.
 */ var isGraph = require("af1bfe24fed70565");
/**
 * Returning the inferred type of the given graph.
 *
 * @param  {Graph}   graph - Target graph.
 * @return {boolean}
 */ module.exports = function inferType(graph) {
    if (!isGraph(graph)) throw new Error('graphology-utils/infer-type: expecting a valid graphology instance.');
    var declaredType = graph.type;
    if (declaredType !== 'mixed') return declaredType;
    if (graph.directedSize === 0 && graph.undirectedSize === 0 || graph.directedSize > 0 && graph.undirectedSize > 0) return 'mixed';
    if (graph.directedSize > 0) return 'directed';
    return 'undirected';
};

},{"af1bfe24fed70565":"idmEa"}],"l7grp":[function(require,module,exports,__globalThis) {
/**
 * Graphology isGraphConstructor
 * ==============================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology constructor.
 */ /**
 * Checking the value is a graphology constructor.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */ module.exports = function isGraphConstructor(value) {
    return value !== null && typeof value === 'function' && typeof value.prototype === 'object' && typeof value.prototype.addUndirectedEdgeWithKey === 'function' && typeof value.prototype.dropNode === 'function';
};

},{}],"a5KSN":[function(require,module,exports,__globalThis) {
/**
 * Graphology mergeClique
 * =======================
 *
 * Function merging the given clique to the graph.
 */ /**
 * Merging the given clique to the graph.
 *
 * @param  {Graph} graph - Target graph.
 * @param  {array} nodes - Nodes representing the clique to merge.
 */ module.exports = function mergeClique(graph, nodes) {
    if (nodes.length === 0) return;
    var source, target, i, j, l;
    for(i = 0, l = nodes.length; i < l; i++){
        source = nodes[i];
        for(j = i + 1; j < l; j++){
            target = nodes[j];
            graph.mergeEdge(source, target);
        }
    }
};

},{}],"2EmbC":[function(require,module,exports,__globalThis) {
/**
 * Graphology mergeCycle
 * =====================
 *
 * Function merging the given cycle to the graph.
 */ /**
 * Merging the given cycle to the graph.
 *
 * @param  {Graph} graph - Target graph.
 * @param  {array} nodes - Nodes representing the cycle to merge.
 */ module.exports = function mergeCycle(graph, nodes) {
    if (nodes.length === 0) return;
    var previousNode, node, i, l;
    graph.mergeNode(nodes[0]);
    if (nodes.length === 1) return;
    for(i = 1, l = nodes.length; i < l; i++){
        previousNode = nodes[i - 1];
        node = nodes[i];
        graph.mergeEdge(previousNode, node);
    }
    graph.mergeEdge(node, nodes[0]);
};

},{}],"RFa9A":[function(require,module,exports,__globalThis) {
/**
 * Graphology mergePath
 * =====================
 *
 * Function merging the given path to the graph.
 */ /**
 * Merging the given path to the graph.
 *
 * @param  {Graph} graph - Target graph.
 * @param  {array} nodes - Nodes representing the path to merge.
 */ module.exports = function mergePath(graph, nodes) {
    if (nodes.length === 0) return;
    var previousNode, node, i, l;
    graph.mergeNode(nodes[0]);
    for(i = 1, l = nodes.length; i < l; i++){
        previousNode = nodes[i - 1];
        node = nodes[i];
        graph.mergeEdge(previousNode, node);
    }
};

},{}],"b2gOZ":[function(require,module,exports,__globalThis) {
/**
 * Graphology mergeStar
 * =====================
 *
 * Function merging the given star to the graph.
 */ /**
 * Merging the given star to the graph.
 *
 * @param  {Graph} graph - Target graph.
 * @param  {array} nodes - Nodes to add, first one being the center of the star.
 */ module.exports = function mergeStar(graph, nodes) {
    if (nodes.length === 0) return;
    var node, i, l;
    var center = nodes[0];
    graph.mergeNode(center);
    for(i = 1, l = nodes.length; i < l; i++){
        node = nodes[i];
        graph.mergeEdge(center, node);
    }
};

},{}],"80rdn":[function(require,module,exports,__globalThis) {
/**
 * Graphology Rename Graph Keys
 * =============================
 *
 * Helpers allowing you to rename (ie. change the key) of nodes & edges .
 */ var copyEdge = require("430122c835b19bdb").copyEdge;
module.exports = function renameGraphKeys(graph, nodeKeyMapping, edgeKeyMapping) {
    if (typeof nodeKeyMapping === 'undefined') nodeKeyMapping = {};
    if (typeof edgeKeyMapping === 'undefined') edgeKeyMapping = {};
    var renamed = graph.nullCopy();
    // Renaming nodes
    graph.forEachNode(function(key, attr) {
        var renamedKey = nodeKeyMapping[key];
        if (typeof renamedKey === 'undefined') renamedKey = key;
        renamed.addNode(renamedKey, attr);
    });
    // Renaming edges
    var currentSource, currentSourceRenamed;
    graph.forEachAssymetricAdjacencyEntry(function(source, target, _sa, _ta, key, attr, undirected) {
        // Leveraging the ordered adjacency to save lookups
        if (source !== currentSource) {
            currentSource = source;
            currentSourceRenamed = nodeKeyMapping[source];
            if (typeof currentSourceRenamed === 'undefined') currentSourceRenamed = source;
        }
        var targetRenamed = nodeKeyMapping[target];
        if (typeof targetRenamed === 'undefined') targetRenamed = target;
        var renamedKey = edgeKeyMapping[key];
        if (typeof renamedKey === 'undefined') renamedKey = key;
        copyEdge(renamed, undirected, renamedKey, currentSourceRenamed, targetRenamed, attr);
    });
    return renamed;
};

},{"430122c835b19bdb":"igAKB"}],"igAKB":[function(require,module,exports,__globalThis) {
/**
 * Graphology Edge Adders
 * =======================
 *
 * Generic edge addition functions that can be used to avoid nasty repetitive
 * conditions.
 */ exports.addEdge = function addEdge(graph, undirected, key, source, target, attributes) {
    if (undirected) {
        if (key === null || key === undefined) return graph.addUndirectedEdge(source, target, attributes);
        else return graph.addUndirectedEdgeWithKey(key, source, target, attributes);
    } else {
        if (key === null || key === undefined) return graph.addDirectedEdge(source, target, attributes);
        else return graph.addDirectedEdgeWithKey(key, source, target, attributes);
    }
};
exports.copyEdge = function copyEdge(graph, undirected, key, source, target, attributes) {
    attributes = Object.assign({}, attributes);
    if (undirected) {
        if (key === null || key === undefined) return graph.addUndirectedEdge(source, target, attributes);
        else return graph.addUndirectedEdgeWithKey(key, source, target, attributes);
    } else {
        if (key === null || key === undefined) return graph.addDirectedEdge(source, target, attributes);
        else return graph.addDirectedEdgeWithKey(key, source, target, attributes);
    }
};
exports.mergeEdge = function mergeEdge(graph, undirected, key, source, target, attributes) {
    if (undirected) {
        if (key === null || key === undefined) return graph.mergeUndirectedEdge(source, target, attributes);
        else return graph.mergeUndirectedEdgeWithKey(key, source, target, attributes);
    } else {
        if (key === null || key === undefined) return graph.mergeDirectedEdge(source, target, attributes);
        else return graph.mergeDirectedEdgeWithKey(key, source, target, attributes);
    }
};
exports.updateEdge = function updateEdge(graph, undirected, key, source, target, updater) {
    if (undirected) {
        if (key === null || key === undefined) return graph.updateUndirectedEdge(source, target, updater);
        else return graph.updateUndirectedEdgeWithKey(key, source, target, updater);
    } else {
        if (key === null || key === undefined) return graph.updateDirectedEdge(source, target, updater);
        else return graph.updateDirectedEdgeWithKey(key, source, target, updater);
    }
};

},{}],"3STon":[function(require,module,exports,__globalThis) {
/**
 * Graphology Update Graph Keys
 * =============================
 *
 * Helpers allowing you to update keys of nodes & edges .
 */ var copyEdge = require("6b44ae85c12ee96d").copyEdge;
module.exports = function updateGraphKeys(graph, nodeKeyUpdater, edgeKeyUpdater) {
    var renamed = graph.nullCopy();
    // Renaming nodes
    graph.forEachNode(function(key, attr) {
        var renamedKey = nodeKeyUpdater ? nodeKeyUpdater(key, attr) : key;
        renamed.addNode(renamedKey, attr);
    });
    // Renaming edges
    var currentSource, currentSourceRenamed;
    graph.forEachAssymetricAdjacencyEntry(function(source, target, sourceAttr, targetAttr, key, attr, undirected) {
        // Leveraging the ordered adjacency to save calls
        if (source !== currentSource) {
            currentSource = source;
            currentSourceRenamed = nodeKeyUpdater ? nodeKeyUpdater(source, sourceAttr) : source;
        }
        var targetRenamed = nodeKeyUpdater ? nodeKeyUpdater(target, targetAttr) : target;
        var renamedKey = edgeKeyUpdater ? edgeKeyUpdater(key, attr, source, target, sourceAttr, targetAttr, undirected) : key;
        copyEdge(renamed, undirected, renamedKey, currentSourceRenamed, targetRenamed, attr);
    });
    return renamed;
};

},{"6b44ae85c12ee96d":"igAKB"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1a9PO":[function(require,module,exports,__globalThis) {
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ ((e, t)=>{
    "function" == typeof define && define.amd ? define([], t) : module.exports = t();
})(this, function r() {
    var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {};
    var d, s = !n.document && !!n.postMessage, a = n.IS_PAPA_WORKER || !1, o = {}, h = 0, v = {};
    function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = b(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(t, e) {
            var i = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < i) {
                let e = this._config.newline;
                e || (r = this._config.quoteChar || '"', e = this._handle.guessLineEndings(t, r)), t = [
                    ...t.split(e).slice(i)
                ].join(e);
            }
            this.isFirstChunk && U(this._config.beforeFirstChunk) && void 0 !== (r = this._config.beforeFirstChunk(t)) && (t = r), this.isFirstChunk = !1, this._halted = !1;
            var i = this._partialLine + t, r = (this._partialLine = "", this._handle.parse(i, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
                t = r.meta.cursor, i = (this._finished || (this._partialLine = i.substring(t - this._baseIndex), this._baseIndex = t), r && r.data && (this._rowCount += r.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
                if (a) n.postMessage({
                    results: r,
                    workerId: v.WORKER_ID,
                    finished: i
                });
                else if (U(this._config.chunk) && !e) {
                    if (this._config.chunk(r, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    this._completeResults = r = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data), this._completeResults.errors = this._completeResults.errors.concat(r.errors), this._completeResults.meta = r.meta), this._completed || !i || !U(this._config.complete) || r && r.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), i || r && r.meta.paused || this._nextChunk(), r;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            U(this._config.error) ? this._config.error(e) : a && this._config.error && n.postMessage({
                workerId: v.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function f(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = v.RemoteChunkSize), u.call(this, e), this._nextChunk = s ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), s || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
                    var e, t = this._config.downloadRequestHeaders;
                    for(e in t)r.setRequestHeader(e, t[e]);
                }
                var i;
                this._config.chunkSize && (i = this._start + this._config.chunkSize - 1, r.setRequestHeader("Range", "bytes=" + this._start + "-" + i));
                try {
                    r.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                s && 0 === r.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize || r.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((e)=>null !== (e = e.getResponseHeader("Content-Range")) ? parseInt(e.substring(e.lastIndexOf("/") + 1)) : -1)(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e) {
            e = r.statusText || e;
            this._sendError(new Error(e));
        };
    }
    function l(e) {
        (e = e || {}).chunkSize || (e.chunkSize = v.LocalChunkSize), u.call(this, e);
        var i, r, n = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, n ? ((i = new FileReader).onload = y(this._chunkLoaded, this), i.onerror = y(this._chunkError, this)) : i = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input, t = (this._config.chunkSize && (t = Math.min(this._start + this._config.chunkSize, this._input.size), e = r.call(e, this._start, t)), i.readAsText(e, this._config.encoding));
            n || this._chunkLoaded({
                target: {
                    result: t
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(i.error);
        };
    }
    function c(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function(e) {
            return i = e, this._nextChunk();
        }, this._nextChunk = function() {
            var e, t;
            if (!this._finished) return e = this._config.chunkSize, i = e ? (t = i.substring(0, e), i.substring(e)) : (t = i, ""), this._finished = !i, this.parseChunk(t);
        };
    }
    function p(e) {
        u.call(this, e = e || {});
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = y(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = y(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = y(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = y(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function i(m) {
        var n, s, a, t, o = Math.pow(2, 53), h = -o, u = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, d = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i = this, r = 0, f = 0, l = !1, e = !1, c = [], p = {
            data: [],
            errors: [],
            meta: {}
        };
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            if (p && a && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v.DefaultDelimiter + "'"), a = !1), m.skipEmptyLines && (p.data = p.data.filter(function(e) {
                return !y(e);
            })), _()) {
                if (p) {
                    if (Array.isArray(p.data[0])) {
                        for(var e = 0; _() && e < p.data.length; e++)p.data[e].forEach(t);
                        p.data.splice(0, 1);
                    } else p.data.forEach(t);
                }
                function t(e, t) {
                    U(m.transformHeader) && (e = m.transformHeader(e, t)), c.push(e);
                }
            }
            function i(e, t) {
                for(var i = m.header ? {} : [], r = 0; r < e.length; r++){
                    var n = r, s = e[r], s = ((e, t)=>((e)=>(m.dynamicTypingFunction && void 0 === m.dynamicTyping[e] && (m.dynamicTyping[e] = m.dynamicTypingFunction(e)), !0 === (m.dynamicTyping[e] || m.dynamicTyping)))(e) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (((e)=>{
                            if (u.test(e)) {
                                e = parseFloat(e);
                                if (h < e && e < o) return 1;
                            }
                        })(t) ? parseFloat(t) : d.test(t) ? new Date(t) : "" === t ? null : t) : t)(n = m.header ? r >= c.length ? "__parsed_extra" : c[r] : n, s = m.transform ? m.transform(s, n) : s);
                    "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
                }
                return m.header && (r > c.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + c.length + " fields but parsed " + r, f + t) : r < c.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + c.length + " fields but parsed " + r, f + t)), i;
            }
            var r;
            p && (m.header || m.dynamicTyping || m.transform) && (r = 1, !p.data.length || Array.isArray(p.data[0]) ? (p.data = p.data.map(i), r = p.data.length) : p.data = i(p.data, 0), m.header && p.meta && (p.meta.fields = c), f += r);
        }
        function _() {
            return m.header && 0 === c.length;
        }
        function k(e, t, i, r) {
            e = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (e.row = r), p.errors.push(e);
        }
        U(m.step) && (t = m.step, m.step = function(e) {
            p = e, _() ? g() : (g(), 0 !== p.data.length && (r += e.data.length, m.preview && r > m.preview ? s.abort() : (p.data = p.data[0], t(p, i))));
        }), this.parse = function(e, t, i) {
            var r = m.quoteChar || '"', r = (m.newline || (m.newline = this.guessLineEndings(e, r)), a = !1, m.delimiter ? U(m.delimiter) && (m.delimiter = m.delimiter(e), p.meta.delimiter = m.delimiter) : ((r = ((e, t, i, r, n)=>{
                var s, a, o, h;
                n = n || [
                    ",",
                    "\t",
                    "|",
                    ";",
                    v.RECORD_SEP,
                    v.UNIT_SEP
                ];
                for(var u = 0; u < n.length; u++){
                    for(var d, f = n[u], l = 0, c = 0, p = 0, g = (o = void 0, new E({
                        comments: r,
                        delimiter: f,
                        newline: t,
                        preview: 10
                    }).parse(e)), _ = 0; _ < g.data.length; _++)i && y(g.data[_]) ? p++ : (d = g.data[_].length, c += d, void 0 === o ? o = d : 0 < d && (l += Math.abs(d - o), o = d));
                    0 < g.data.length && (c /= g.data.length - p), (void 0 === a || l <= a) && (void 0 === h || h < c) && 1.99 < c && (a = l, s = f, h = c);
                }
                return {
                    successful: !!(m.delimiter = s),
                    bestDelimiter: s
                };
            })(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = r.bestDelimiter : (a = !0, m.delimiter = v.DefaultDelimiter), p.meta.delimiter = m.delimiter), b(m));
            return m.preview && m.header && r.preview++, n = e, s = new E(r), p = s.parse(n, t, i), g(), l ? {
                meta: {
                    paused: !0
                }
            } : p || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return l;
        }, this.pause = function() {
            l = !0, s.abort(), n = U(m.chunk) ? "" : n.substring(s.getCharIndex());
        }, this.resume = function() {
            i.streamer._halted ? (l = !1, i.streamer.parseChunk(n, !0)) : setTimeout(i.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, s.abort(), p.meta.aborted = !0, U(m.complete) && m.complete(p), n = "";
        }, this.guessLineEndings = function(e, t) {
            e = e.substring(0, 1048576);
            var t = new RegExp(P(t) + "([^]*?)" + P(t), "gm"), i = (e = e.replace(t, "")).split("\r"), t = e.split("\n"), e = 1 < t.length && t[0].length < i[0].length;
            if (1 === i.length || e) return "\n";
            for(var r = 0, n = 0; n < i.length; n++)"\n" === i[n][0] && r++;
            return r >= i.length / 2 ? "\r\n" : "\r";
        };
    }
    function P(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(C) {
        var S = (C = C || {}).delimiter, O = C.newline, x = C.comments, I = C.step, A = C.preview, T = C.fastMode, D = null, L = !1, F = null == C.quoteChar ? '"' : C.quoteChar, j = F;
        if (void 0 !== C.escapeChar && (j = C.escapeChar), ("string" != typeof S || -1 < v.BAD_DELIMITERS.indexOf(S)) && (S = ","), x === S) throw new Error("Comment character same as delimiter");
        !0 === x ? x = "#" : ("string" != typeof x || -1 < v.BAD_DELIMITERS.indexOf(x)) && (x = !1), "\n" !== O && "\r" !== O && "\r\n" !== O && (O = "\n");
        var z = 0, M = !1;
        this.parse = function(i, t, r) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n = i.length, e = S.length, s = O.length, a = x.length, o = U(I), h = [], u = [], d = [], f = z = 0;
            if (!i) return w();
            if (T || !1 !== T && -1 === i.indexOf(F)) {
                for(var l = i.split(O), c = 0; c < l.length; c++){
                    if (d = l[c], z += d.length, c !== l.length - 1) z += O.length;
                    else if (r) return w();
                    if (!x || d.substring(0, a) !== x) {
                        if (o) {
                            if (h = [], k(d.split(S)), R(), M) return w();
                        } else k(d.split(S));
                        if (A && A <= c) return h = h.slice(0, A), w(!0);
                    }
                }
                return w();
            }
            for(var p = i.indexOf(S, z), g = i.indexOf(O, z), _ = new RegExp(P(j) + P(F), "g"), m = i.indexOf(F, z);;)if (i[z] === F) for(m = z, z++;;){
                if (-1 === (m = i.indexOf(F, m + 1))) return r || u.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: h.length,
                    index: z
                }), E();
                if (m === n - 1) return E(i.substring(z, m).replace(_, F));
                if (F === j && i[m + 1] === j) m++;
                else if (F === j || 0 === m || i[m - 1] !== j) {
                    -1 !== p && p < m + 1 && (p = i.indexOf(S, m + 1));
                    var y = v(-1 === (g = -1 !== g && g < m + 1 ? i.indexOf(O, m + 1) : g) ? p : Math.min(p, g));
                    if (i.substr(m + 1 + y, e) === S) {
                        d.push(i.substring(z, m).replace(_, F)), i[z = m + 1 + y + e] !== F && (m = i.indexOf(F, z)), p = i.indexOf(S, z), g = i.indexOf(O, z);
                        break;
                    }
                    y = v(g);
                    if (i.substring(m + 1 + y, m + 1 + y + s) === O) {
                        if (d.push(i.substring(z, m).replace(_, F)), b(m + 1 + y + s), p = i.indexOf(S, z), m = i.indexOf(F, z), o && (R(), M)) return w();
                        if (A && h.length >= A) return w(!0);
                        break;
                    }
                    u.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: h.length,
                        index: z
                    }), m++;
                }
            }
            else if (x && 0 === d.length && i.substring(z, z + a) === x) {
                if (-1 === g) return w();
                z = g + s, g = i.indexOf(O, z), p = i.indexOf(S, z);
            } else if (-1 !== p && (p < g || -1 === g)) d.push(i.substring(z, p)), z = p + e, p = i.indexOf(S, z);
            else {
                if (-1 === g) break;
                if (d.push(i.substring(z, g)), b(g + s), o && (R(), M)) return w();
                if (A && h.length >= A) return w(!0);
            }
            return E();
            function k(e) {
                h.push(e), f = z;
            }
            function v(e) {
                var t = 0;
                return t = -1 !== e && (e = i.substring(m + 1, e)) && "" === e.trim() ? e.length : t;
            }
            function E(e) {
                return r || (void 0 === e && (e = i.substring(z)), d.push(e), z = n, k(d), o && R()), w();
            }
            function b(e) {
                z = e, k(d), d = [], g = i.indexOf(O, z);
            }
            function w(e) {
                if (C.header && !t && h.length && !L) {
                    var s = h[0], a = Object.create(null), o = new Set(s);
                    let n = !1;
                    for(let r = 0; r < s.length; r++){
                        let i = s[r];
                        if (a[i = U(C.transformHeader) ? C.transformHeader(i, r) : i]) {
                            let e, t = a[i];
                            for(; e = i + "_" + t, t++, o.has(e););
                            o.add(e), s[r] = e, a[i]++, n = !0, (D = null === D ? {} : D)[e] = i;
                        } else a[i] = 1, s[r] = i;
                        o.add(i);
                    }
                    n && console.warn("Duplicate headers found and renamed."), L = !0;
                }
                return {
                    data: h,
                    errors: u,
                    meta: {
                        delimiter: S,
                        linebreak: O,
                        aborted: M,
                        truncated: !!e,
                        cursor: f + (t || 0),
                        renamedHeaders: D
                    }
                };
            }
            function R() {
                I(w()), h = [], u = [];
            }
        }, this.abort = function() {
            M = !0;
        }, this.getCharIndex = function() {
            return z;
        };
    }
    function g(e) {
        var t = e.data, i = o[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, _(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: m,
                resume: m
            };
            if (U(i.userStep)) {
                for(var s = 0; s < t.results.data.length && (i.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); s++);
                delete t.results;
            } else U(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && _(t.workerId, t.results);
    }
    function _(e, t) {
        var i = o[e];
        U(i.userComplete) && i.userComplete(t), i.terminate(), delete o[e];
    }
    function m() {
        throw new Error("Not implemented.");
    }
    function b(e) {
        if ("object" != typeof e || null === e) return e;
        var t, i = Array.isArray(e) ? [] : {};
        for(t in e)i[t] = b(e[t]);
        return i;
    }
    function y(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function U(e) {
        return "function" == typeof e;
    }
    return v.parse = function(e, t) {
        var i = (t = t || {}).dynamicTyping || !1;
        U(i) && (t.dynamicTypingFunction = i, i = {});
        if (t.dynamicTyping = i, t.transform = !!U(t.transform) && t.transform, !t.worker || !v.WORKERS_SUPPORTED) return i = null, v.NODE_STREAM_INPUT, "string" == typeof e ? (e = ((e)=>65279 !== e.charCodeAt(0) ? e : e.slice(1))(e), i = new (t.download ? f : c)(t)) : !0 === e.readable && U(e.read) && U(e.on) ? i = new p(t) : (n.File && e instanceof File || e instanceof Object) && (i = new l(t)), i.stream(e);
        (i = (()=>{
            var e;
            return !!v.WORKERS_SUPPORTED && (e = (()=>{
                var e = n.URL || n.webkitURL || null, t = r.toString();
                return v.BLOB_URL || (v.BLOB_URL = e.createObjectURL(new Blob([
                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                    "(",
                    t,
                    ")();"
                ], {
                    type: "text/javascript"
                })));
            })(), (e = new n.Worker(e)).onmessage = g, e.id = h++, o[e.id] = e);
        })()).userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = U(t.step), t.chunk = U(t.chunk), t.complete = U(t.complete), t.error = U(t.error), delete t.worker, i.postMessage({
            input: e,
            config: t,
            workerId: i.id
        });
    }, v.unparse = function(e, t) {
        var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, i = !1, r = null, o = !1, h = ((()=>{
            if ("object" == typeof t) {
                if ("string" != typeof t.delimiter || v.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter), "boolean" != typeof t.quotes && "function" != typeof t.quotes && !Array.isArray(t.quotes) || (n = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines), "string" == typeof t.newline && (y = t.newline), "string" == typeof t.quoteChar && (s = t.quoteChar), "boolean" == typeof t.header && (_ = t.header), Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    r = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s), t.escapeFormulae instanceof RegExp ? o = t.escapeFormulae : "boolean" == typeof t.escapeFormulae && t.escapeFormulae && (o = /^[=+\-@\t\r].*$/);
            }
        })(), new RegExp(P(s), "g"));
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
        } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
            e.data
        ])), u(e.fields || [], e.data || [], i);
        throw new Error("Unable to serialize unrecognized input");
        function u(e, t, i) {
            var r = "", n = ("string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e) && 0 < e.length), s = !Array.isArray(t[0]);
            if (n && _) {
                for(var a = 0; a < e.length; a++)0 < a && (r += m), r += k(e[a], a);
                0 < t.length && (r += y);
            }
            for(var o = 0; o < t.length; o++){
                var h = (n ? e : t[o]).length, u = !1, d = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                    for(var f = [], l = 0; l < h; l++){
                        var c = s ? e[l] : l;
                        f.push(t[o][c]);
                    }
                    u = "" === f.join("").trim();
                }
                if (!u) {
                    for(var p = 0; p < h; p++){
                        0 < p && !d && (r += m);
                        var g = n && s ? e[p] : p;
                        r += k(t[o][g], p);
                    }
                    o < t.length - 1 && (!i || 0 < h && !d) && (r += y);
                }
            }
            return r;
        }
        function k(e, t) {
            var i, r;
            return null == e ? "" : e.constructor === Date ? JSON.stringify(e).slice(1, 25) : (r = !1, o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0), i = e.toString().replace(h, a), (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || ((e, t)=>{
                for(var i = 0; i < t.length; i++)if (-1 < e.indexOf(t[i])) return !0;
                return !1;
            })(i, v.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i);
        }
    }, v.RECORD_SEP = String.fromCharCode(30), v.UNIT_SEP = String.fromCharCode(31), v.BYTE_ORDER_MARK = "\ufeff", v.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        v.BYTE_ORDER_MARK
    ], v.WORKERS_SUPPORTED = !s && !!n.Worker, v.NODE_STREAM_INPUT = 1, v.LocalChunkSize = 10485760, v.RemoteChunkSize = 5242880, v.DefaultDelimiter = ",", v.Parser = E, v.ParserHandle = i, v.NetworkStreamer = f, v.FileStreamer = l, v.StringStreamer = c, v.ReadableStreamStreamer = p, n.jQuery && ((d = n.jQuery).fn.parse = function(o) {
        var i = o.config || {}, h = [];
        return this.each(function(e) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && n.FileReader) || !this.files || 0 === this.files.length) return !0;
            for(var t = 0; t < this.files.length; t++)h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i)
            });
        }), e(), this;
        function e() {
            if (0 === h.length) U(o.complete) && o.complete();
            else {
                var e, t, i, r, n = h[0];
                if (U(o.before)) {
                    var s = o.before(n.file, n.inputElem);
                    if ("object" == typeof s) {
                        if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (U(o.error) && o.error({
                            name: e
                        }, t, i, r));
                        if ("skip" === s.action) return void u();
                        "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                    } else if ("skip" === s) return void u();
                }
                var a = n.instanceConfig.complete;
                n.instanceConfig.complete = function(e) {
                    U(a) && a(e, n.file, n.inputElem), u();
                }, v.parse(n.file, n.instanceConfig);
            }
        }
        function u() {
            h.splice(0, 1), e();
        }
    }), a && (n.onmessage = function(e) {
        e = e.data;
        void 0 === v.WORKER_ID && e && (v.WORKER_ID = e.workerId);
        "string" == typeof e.input ? n.postMessage({
            workerId: v.WORKER_ID,
            results: v.parse(e.input, e.config),
            finished: !0
        }) : (n.File && e.input instanceof File || e.input instanceof Object) && (e = v.parse(e.input, e.config)) && n.postMessage({
            workerId: v.WORKER_ID,
            results: e,
            finished: !0
        });
    }), (f.prototype = Object.create(u.prototype)).constructor = f, (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(c.prototype)).constructor = c, (p.prototype = Object.create(u.prototype)).constructor = p, v;
});

},{}]},["lcgnz","hnk5I"], "hnk5I", "parcelRequiref48a", {})

//# sourceMappingURL=mvu1-sim.8ed14f75.js.map
