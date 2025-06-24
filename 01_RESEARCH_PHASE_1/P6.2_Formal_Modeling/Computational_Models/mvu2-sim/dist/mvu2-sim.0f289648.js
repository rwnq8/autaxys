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
})({"elbaT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4943a1030f289648";
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

},{}],"gNc1f":[function(require,module,exports,__globalThis) {
// src/main.ts
var _uiElements = require("./ui_elements");
var _simulationController = require("./simulation_controller");
// The main entry point for the application.
// This script is loaded by index.html as a module.
document.addEventListener('DOMContentLoaded', ()=>{
    try {
        // 1. Safely initialize all UI element references after the DOM is loaded.
        // This will throw an error and stop execution if any element is missing.
        const ui = (0, _uiElements.initializeUI)();
        // 2. Create an instance of the main application controller, passing it the UI elements.
        const appController = new (0, _simulationController.SimulationController)(ui);
        // 3. Start the application logic (sets up initial state and event listeners).
        appController.start();
    } catch (error) {
        // If initializeUI throws an error, catch it and display a user-friendly message.
        console.error("Application failed to start:", error);
        alert("A critical error occurred on startup. Check the developer console for details. This is often caused by a mismatch between expected HTML element IDs and the actual HTML.");
    }
});

},{"./ui_elements":"89Uvj","./simulation_controller":"1kaVH"}],"89Uvj":[function(require,module,exports,__globalThis) {
// src/ui_elements.ts
// Define a type for the UI elements object for strong typing
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Queries the DOM to find all necessary UI elements and returns them in a structured object.
 * Throws an error if any critical element is not found.
 * @returns The populated UIElements object.
 */ parcelHelpers.export(exports, "initializeUI", ()=>initializeUI);
function initializeUI() {
    const ui = {
        timelineCanvas: document.getElementById('timeline-canvas'),
        multiverseCanvas: document.getElementById('multiverse-canvas'),
        divergenceHighCanvas: document.getElementById('divergence-high-canvas'),
        divergenceNativeCanvas: document.getElementById('divergence-native-canvas'),
        timelineView: document.getElementById('timeline-view'),
        multiverseView: document.getElementById('multiverse-view'),
        divergenceView: document.getElementById('divergence-view'),
        modeTimelineBtn: document.getElementById('mode-timeline-btn'),
        modeMultiverseBtn: document.getElementById('mode-multiverse-btn'),
        modeDivergenceBtn: document.getElementById('mode-divergence-btn'),
        pauseButton: document.getElementById('pause-button'),
        exportDataBtn: document.getElementById('export-data-btn'),
        currentModeDd: document.getElementById('current-mode-dd'),
        totalStepsDd: document.getElementById('total-steps-dd'),
        currentComplexityDd: document.getElementById('current-complexity-dd'),
        currentSLevelDd: document.getElementById('current-s-level-dd'),
        currentRobustnessDd: document.getElementById('current-robustness-dd'),
        currentStressDd: document.getElementById('current-stress-dd'),
        totalAttemptsDd: document.getElementById('total-attempts-dd'),
        stableUniversesDd: document.getElementById('stable-universes-dd'),
        highestSLevelAchievedDd: document.getElementById('highest-s-level-achieved-dd'),
        divergenceStepDd: document.getElementById('divergence-step-dd'),
        ruleWeightsUl: document.getElementById('rule-weights-ul'),
        cbEnableAdaptValence: document.getElementById('cb-enable-adapt-valence'),
        cbEnableAdaptPolarity: document.getElementById('cb-enable-adapt-polarity'),
        cbEnableAdaptPrototype: document.getElementById('cb-enable-adapt-prototype'),
        cbEnableTransformPrototype: document.getElementById('cb-enable-transform-prototype'),
        cbEnableCollapse: document.getElementById('cb-enable-collapse'),
        cbEnableDynamicRuleWeights: document.getElementById('cb-enable-dynamic-rule-weights'),
        cbEnableStressPropagation: document.getElementById('cb-enable-stress-propagation')
    };
    // Verify all essential UI elements were found after assignment
    for(const key in ui)if (!ui[key]) {
        const kebabCaseId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        throw new Error(`FATAL: UI element for '${key}' (expected ID: '${kebabCaseId}') not found in DOM. App cannot start.`);
    }
    return ui;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"1kaVH":[function(require,module,exports,__globalThis) {
// src/simulation_controller.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimulationController", ()=>SimulationController);
var _simulatorCore = require("./simulator_core");
var _sharedTypes = require("./shared_types");
var _visualizerGraph = require("./visualizer_graph");
var _visualizerMultiverse = require("./visualizer_multiverse");
var _papaparse = require("papaparse");
var _papaparseDefault = parcelHelpers.interopDefault(_papaparse);
class SimulationController {
    constructor(ui){
        this.activeMode = 'timeline';
        this.isPaused = true;
        this.animationFrameId = 0;
        this.SIM_SPEED = 30;
        this.timelineSim = null;
        this.divergenceSimHigh = null;
        this.divergenceSimNative = null;
        this.multiverseAttempts = 0;
        this.stableUniverses = [];
        this.highestSLevelOverall = (0, _sharedTypes.S_Level).S0_Vacuum;
        this.divergenceFoundStep = null;
        this.mainLoop = ()=>{
            if (this.isPaused) {
                if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = 0;
                return;
            }
            switch(this.activeMode){
                case 'timeline':
                    this.runTimelineStep();
                    break;
                case 'multiverse':
                    this.runMultiverseBatch();
                    return; // Multiverse handles its own loop
                case 'divergence':
                    this.runDivergenceStep();
                    break;
            }
            if (!this.isPaused) this.animationFrameId = requestAnimationFrame(this.mainLoop);
        };
        this.ui = ui;
    }
    start() {
        this.setupEventListeners();
        this.setInitialCheckboxStates();
        this.initializeSimulators('all', true);
        this.switchMode('timeline');
    }
    getSimulatorConfigFromUI(precisionMode = 'high', seed) {
        return {
            precision: precisionMode,
            seed: seed ?? Date.now() + Math.random() * 100000,
            enable_adaptation_valence: this.ui.cbEnableAdaptValence.checked,
            enable_adaptation_polarity: this.ui.cbEnableAdaptPolarity.checked,
            enable_adaptation_prototype: this.ui.cbEnableAdaptPrototype.checked,
            enable_transformation_prototype: this.ui.cbEnableTransformPrototype.checked,
            enable_collapse: this.ui.cbEnableCollapse.checked,
            enable_dynamic_rule_weighting: this.ui.cbEnableDynamicRuleWeights.checked,
            enable_stress_propagation: this.ui.cbEnableStressPropagation.checked,
            initial_proto_valence: undefined,
            initial_valence_adaptation_ratio: undefined,
            max_valence_factor: undefined,
            min_valence: undefined,
            absolute_max_valence: undefined,
            stress_propagation_factor: undefined,
            stress_penalty_homogeneous_env: undefined
        };
    }
    initializeSimulators(mode = 'all', forceNewSeedTimeline = false) {
        if (mode === 'timeline' || mode === 'all') {
            const currentTimelineSeed = this.timelineSim?.lcg_seed;
            const timelineSeed = forceNewSeedTimeline || !currentTimelineSeed ? undefined : currentTimelineSeed;
            this.timelineSim = new (0, _simulatorCore.MVU_Simulator)(this.getSimulatorConfigFromUI('high', timelineSeed));
            this.timelineSim.reset();
        }
        if (mode === 'divergence' || mode === 'all') {
            this.divergenceSimHigh = new (0, _simulatorCore.MVU_Simulator)(this.getSimulatorConfigFromUI('high', 420));
            this.divergenceSimNative = new (0, _simulatorCore.MVU_Simulator)(this.getSimulatorConfigFromUI('native', 420));
            this.divergenceSimHigh.reset();
            this.divergenceSimNative.reset();
        }
    }
    ensureSimulatorsAreReadyForMode(mode, forceNewSeedForTimeline = false) {
        if (mode === 'timeline' && (!this.timelineSim || forceNewSeedForTimeline)) this.initializeSimulators('timeline', forceNewSeedForTimeline);
        else if (mode === 'divergence' && (!this.divergenceSimHigh || !this.divergenceSimNative)) this.initializeSimulators('divergence');
    }
    runTimelineStep() {
        if (!this.timelineSim) return;
        const result = this.timelineSim.step();
        (0, _visualizerGraph.drawGraph)(this.timelineSim.graph, this.ui.timelineCanvas);
        this.updateTimelineStats(result.descriptor);
        this.updateRuleWeightsDisplay(this.timelineSim.rule_weights);
        if (result.halt) {
            this.isPaused = true;
            this.ui.pauseButton.textContent = 'Restart';
            console.log(`Timeline Halted @ step ${this.timelineSim.step_counter}: ${result.reason}`, result.descriptor ? JSON.parse(JSON.stringify(result.descriptor)) : "No descriptor");
        }
    }
    async runMultiverseBatch() {
        if (this.isPaused) return;
        for(let i = 0; i < 5; i++){
            if (this.isPaused) break;
            const simulator = new (0, _simulatorCore.MVU_Simulator)(this.getSimulatorConfigFromUI('high'));
            let result;
            do result = simulator.step();
            while (!result.halt && simulator.step_counter < simulator['MAX_STEPS_PER_SIM']);
            this.multiverseAttempts++;
            if (result.descriptor && result.reason !== 'UNBOUNDED_GROWTH' && result.descriptor.C.toNumber() > 1) {
                this.stableUniverses.push({
                    descriptor: result.descriptor,
                    graphJson: simulator.getGraphHash(simulator.graph)
                });
                if (result.descriptor.S.level > this.highestSLevelOverall) this.highestSLevelOverall = result.descriptor.S.level;
            }
            if (i % 2 === 0) await new Promise((r)=>setTimeout(r, 0));
        }
        (0, _visualizerMultiverse.drawMultiverse)(this.stableUniverses, this.ui.multiverseCanvas);
        this.updateMultiverseStats();
        if (!this.isPaused) this.animationFrameId = requestAnimationFrame(this.mainLoop);
    }
    runDivergenceStep() {
        if (!this.divergenceSimHigh || !this.divergenceSimNative) return;
        const highResult = this.divergenceSimHigh.step();
        const nativeResult = this.divergenceSimNative.step();
        (0, _visualizerGraph.drawGraph)(this.divergenceSimHigh.graph, this.ui.divergenceHighCanvas);
        (0, _visualizerGraph.drawGraph)(this.divergenceSimNative.graph, this.ui.divergenceNativeCanvas);
        if (!this.divergenceFoundStep) {
            if (this.divergenceSimHigh.getGraphHash(this.divergenceSimHigh.graph) !== this.divergenceSimNative.getGraphHash(this.divergenceSimNative.graph)) this.divergenceFoundStep = this.divergenceSimHigh.step_counter;
        }
        this.updateDivergenceStats(highResult.descriptor);
        this.updateRuleWeightsDisplay(this.divergenceSimHigh.rule_weights);
        if (highResult.halt || nativeResult.halt) {
            this.isPaused = true;
            this.ui.pauseButton.textContent = 'Restart';
        }
    }
    updateTimelineStats(descriptor) {
        this.ui.totalStepsDd.textContent = this.timelineSim?.step_counter.toString() ?? '0';
        if (descriptor) {
            this.ui.currentComplexityDd.textContent = descriptor.C.toNumber().toFixed(0);
            this.ui.currentSLevelDd.textContent = `S${descriptor.S.level} (${(0, _sharedTypes.S_Level)[descriptor.S.level]})`;
            this.ui.currentRobustnessDd.textContent = descriptor.S.robustness.toNumber().toFixed(3);
            this.ui.currentStressDd.textContent = descriptor.totalStress.toNumber().toFixed(2);
        } else {
            this.ui.currentComplexityDd.textContent = 'N/A';
            this.ui.currentSLevelDd.textContent = 'N/A';
            this.ui.currentRobustnessDd.textContent = 'N/A';
            this.ui.currentStressDd.textContent = 'N/A';
        }
    }
    updateMultiverseStats() {
        this.ui.totalAttemptsDd.textContent = this.multiverseAttempts.toString();
        this.ui.stableUniversesDd.textContent = this.stableUniverses.length.toString();
        this.ui.highestSLevelAchievedDd.textContent = `S${this.highestSLevelOverall} (${(0, _sharedTypes.S_Level)[this.highestSLevelOverall]})`;
    }
    updateDivergenceStats(highDesc) {
        this.ui.totalStepsDd.textContent = this.divergenceSimHigh?.step_counter.toString() ?? '0';
        if (highDesc) {
            this.ui.currentComplexityDd.textContent = highDesc.C.toNumber().toFixed(0);
            this.ui.currentSLevelDd.textContent = `S${highDesc.S.level} (${(0, _sharedTypes.S_Level)[highDesc.S.level]})`;
            this.ui.currentRobustnessDd.textContent = highDesc.S.robustness.toNumber().toFixed(3);
            this.ui.currentStressDd.textContent = highDesc.totalStress.toNumber().toFixed(2);
        } else {
            this.ui.currentComplexityDd.textContent = 'N/A';
            this.ui.currentSLevelDd.textContent = 'N/A';
            this.ui.currentRobustnessDd.textContent = 'N/A';
            this.ui.currentStressDd.textContent = 'N/A';
        }
        if (this.divergenceFoundStep) {
            this.ui.divergenceStepDd.textContent = `Diverged at Step ${this.divergenceFoundStep}`;
            this.ui.divergenceStepDd.style.color = '#ffc107';
        } else if (!this.isPaused && this.activeMode === 'divergence') {
            this.ui.divergenceStepDd.textContent = 'Running...';
            this.ui.divergenceStepDd.style.color = '';
        } else if (this.isPaused && this.activeMode === 'divergence' && this.divergenceSimHigh?.step_counter > 0) this.ui.divergenceStepDd.textContent = 'Paused';
        else {
            this.ui.divergenceStepDd.textContent = 'N/A';
            this.ui.divergenceStepDd.style.color = '';
        }
    }
    updateRuleWeightsDisplay(weights) {
        if (!this.ui.ruleWeightsUl) return;
        this.ui.ruleWeightsUl.innerHTML = '';
        if (weights && weights.size > 0) weights.forEach((w, rN)=>{
            const li = document.createElement('li');
            li.textContent = `${rN}: ${w.toNumber().toFixed(3)}`;
            this.ui.ruleWeightsUl.appendChild(li);
        });
        else {
            const li = document.createElement('li');
            li.textContent = "N/A";
            let noWeighting = false;
            if (this.activeMode === 'timeline' && this.timelineSim) noWeighting = this.timelineSim.config.enable_dynamic_rule_weighting === false;
            else if (this.activeMode === 'divergence' && this.divergenceSimHigh) noWeighting = this.divergenceSimHigh.config.enable_dynamic_rule_weighting === false;
            if (noWeighting) li.textContent = "Weighting Disabled";
            this.ui.ruleWeightsUl.appendChild(li);
        }
    }
    resetCurrentModeSimulators(forceNewSeedForTimeline = false) {
        if (this.activeMode === 'timeline') {
            this.timelineSim?.reset();
            this.ensureSimulatorsAreReadyForMode('timeline', forceNewSeedForTimeline);
        } else if (this.activeMode === 'divergence') {
            this.divergenceSimHigh?.reset();
            this.divergenceSimNative?.reset();
            this.ensureSimulatorsAreReadyForMode('divergence');
        }
    }
    resetAllStatsForModeSwitch() {
        this.ui.totalStepsDd.textContent = '0';
        this.ui.currentComplexityDd.textContent = 'N/A';
        this.ui.currentSLevelDd.textContent = 'N/A';
        this.ui.currentRobustnessDd.textContent = 'N/A';
        this.ui.currentStressDd.textContent = 'N/A';
        this.divergenceFoundStep = null;
        this.updateDivergenceStats();
        this.updateMultiverseStats();
        this.updateRuleWeightsDisplay();
    }
    switchMode(newMode) {
        this.isPaused = true;
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = 0;
        this.activeMode = newMode;
        this.resetAllStatsForModeSwitch();
        this.ensureSimulatorsAreReadyForMode(newMode, true);
        document.querySelectorAll('.view').forEach((v)=>v.style.display = 'none');
        document.querySelectorAll('.mode-btn').forEach((b)=>b.classList.remove('active'));
        const vE = document.getElementById(`${newMode}-view`);
        if (vE) vE.style.display = newMode === 'divergence' ? 'flex' : 'block';
        const bE = document.getElementById(`mode-${newMode}-btn`);
        if (bE) bE.classList.add('active');
        this.ui.currentModeDd.textContent = newMode.charAt(0).toUpperCase() + newMode.slice(1);
        [
            this.ui.timelineCanvas,
            this.ui.multiverseCanvas,
            this.ui.divergenceHighCanvas,
            this.ui.divergenceNativeCanvas
        ].forEach((c)=>{
            const ctx = c.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, c.width, c.height);
        });
        if (newMode === 'timeline' && this.timelineSim) {
            this.updateTimelineStats(this.timelineSim.last_descriptor ?? undefined);
            this.updateRuleWeightsDisplay(this.timelineSim.rule_weights);
        } else if (newMode === 'multiverse') {
            (0, _visualizerMultiverse.drawMultiverse)(this.stableUniverses, this.ui.multiverseCanvas);
            this.updateRuleWeightsDisplay();
        } else if (newMode === 'divergence' && this.divergenceSimHigh) {
            this.updateDivergenceStats(this.divergenceSimHigh.last_descriptor ?? undefined);
            this.updateRuleWeightsDisplay(this.divergenceSimHigh.rule_weights);
        }
        this.ui.pauseButton.textContent = 'Start';
    }
    setupEventListeners() {
        this.ui.pauseButton.addEventListener('click', ()=>{
            if (this.ui.pauseButton.textContent === 'Start' || this.ui.pauseButton.textContent === 'Resume') {
                this.ensureSimulatorsAreReadyForMode(this.activeMode, this.activeMode === 'timeline' && !this.timelineSim);
                this.isPaused = false;
                this.ui.pauseButton.textContent = 'Pause';
                this.mainLoop();
            } else if (this.ui.pauseButton.textContent === 'Pause') {
                this.isPaused = true;
                this.ui.pauseButton.textContent = 'Resume';
            } else if (this.ui.pauseButton.textContent === 'Restart') {
                this.isPaused = true;
                if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = 0;
                this.resetCurrentModeSimulators(true);
                if (this.activeMode === 'timeline' && this.timelineSim) this.updateTimelineStats(this.timelineSim.last_descriptor ?? undefined);
                else if (this.activeMode === 'divergence' && this.divergenceSimHigh) this.updateDivergenceStats(this.divergenceSimHigh.last_descriptor ?? undefined);
                this.isPaused = false;
                this.ui.pauseButton.textContent = 'Pause';
                this.mainLoop();
            }
        });
        this.ui.modeTimelineBtn.addEventListener('click', ()=>this.switchMode('timeline'));
        this.ui.modeMultiverseBtn.addEventListener('click', ()=>this.switchMode('multiverse'));
        this.ui.modeDivergenceBtn.addEventListener('click', ()=>this.switchMode('divergence'));
        this.ui.exportDataBtn.addEventListener('click', ()=>{
            if (this.stableUniverses.length === 0) {
                alert("No stable universes found yet to export.");
                return;
            }
            const dataToExport = this.stableUniverses.map((uni, i)=>({
                    universe_id: i + 1,
                    s_level: uni.descriptor.S.level,
                    s_level_name: (0, _sharedTypes.S_Level)[uni.descriptor.S.level],
                    robustness: uni.descriptor.S.robustness.toNumber(),
                    complexity_C: uni.descriptor.C.toNumber(),
                    total_stress: uni.descriptor.totalStress.toNumber(),
                    total_relation_flow_resistance: uni.descriptor.totalRelationFlowResistance.toNumber(),
                    s2_score: uni.descriptor.s2_score?.toNumber() ?? 0
                }));
            const csv = (0, _papaparseDefault.default).unparse(dataToExport);
            const blob = new Blob([
                csv
            ], {
                type: 'text/csv;charset=utf-8;'
            });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'autaxys_multiverse_census.csv');
            link.click();
            URL.revokeObjectURL(link.href);
        });
        const configCheckboxes = [
            this.ui.cbEnableAdaptValence,
            this.ui.cbEnableAdaptPolarity,
            this.ui.cbEnableAdaptPrototype,
            this.ui.cbEnableTransformPrototype,
            this.ui.cbEnableCollapse,
            this.ui.cbEnableDynamicRuleWeights,
            this.ui.cbEnableStressPropagation
        ];
        configCheckboxes.forEach((cb)=>{
            cb.addEventListener('change', ()=>{
                console.log(`Config changed: ${cb.id} is now ${cb.checked}. Restart simulation or switch mode to apply these settings.`);
                this.timelineSim = null;
                this.divergenceSimHigh = null;
                this.divergenceSimNative = null;
                if (!this.isPaused) {
                    this.isPaused = true;
                    this.ui.pauseButton.textContent = 'Resume (Config Changed)';
                    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
                    this.animationFrameId = 0;
                } else if (this.ui.pauseButton.textContent === 'Resume' || this.ui.pauseButton.textContent === 'Pause') this.ui.pauseButton.textContent = 'Start (Config Changed)';
            });
        });
    }
    setInitialCheckboxStates() {
        this.ui.cbEnableAdaptValence.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_adaptation_valence;
        this.ui.cbEnableAdaptPolarity.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_adaptation_polarity;
        this.ui.cbEnableAdaptPrototype.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_adaptation_prototype;
        this.ui.cbEnableTransformPrototype.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_transformation_prototype;
        this.ui.cbEnableCollapse.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_collapse;
        this.ui.cbEnableDynamicRuleWeights.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_dynamic_rule_weighting;
        this.ui.cbEnableStressPropagation.checked = (0, _sharedTypes.DEFAULT_SIM_CONFIG).enable_stress_propagation;
    }
}

},{"./simulator_core":"2NR9r","./shared_types":"adq2h","./visualizer_graph":"fA297","./visualizer_multiverse":"du8Bx","papaparse":"1a9PO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2NR9r":[function(require,module,exports,__globalThis) {
// src/simulator_core.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MVU_Simulator", ()=>MVU_Simulator);
var _simulatorState = require("./simulator_state");
var _simulatorStep = require("./simulator_step");
var _simulatorAnalysis = require("./simulator_analysis");
class MVU_Simulator extends (0, _simulatorState.MVU_Simulator) {
    constructor(config){
        super(config);
    }
    step() {
        return (0, _simulatorStep.step)(this);
    }
    updateAllNodeStresses(graph = this.graph) {
        (0, _simulatorAnalysis.updateAllNodeStresses)(this);
    }
    calculatePatternDescriptor(g = this.graph) {
        return (0, _simulatorAnalysis.calculatePatternDescriptor)(this);
    }
    getGraphHash(g = this.graph) {
        return (0, _simulatorAnalysis.getGraphHash)(g);
    }
    createDistinction(graph, id, p, pv, pt, sl) {
        super.createDistinction(graph, id, p, pv, pt, sl);
    }
}

},{"./simulator_state":"asNCs","./simulator_step":"8wCjq","./simulator_analysis":"cDPjC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"asNCs":[function(require,module,exports,__globalThis) {
// src/simulator_state.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MVU_Simulator", ()=>MVU_Simulator);
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
var _ruleGenesis = require("./rule_genesis");
var _ruleBonding = require("./rule_bonding");
var _ruleAnnihilation = require("./rule_annihilation");
var _ruleAdaptation = require("./rule_adaptation");
var _ruleTransformation = require("./rule_transformation");
var _ruleCollapse = require("./rule_collapse");
class MVU_Simulator {
    constructor(config){
        this.step_counter = 0;
        this._next_node_id = 0 // Public for potential test access
        ;
        this.graph_state_history = new Map();
        this.simulation_history = [];
        // Stagnation tracking for advanced rule conditions
        this.node_stagnation_counter = new Map();
        this.node_last_stress = new Map();
        this.UNBOUNDED_NODE_LIMIT = 75;
        this.MAX_STEPS_PER_SIM = 350;
        this.RULE_WEIGHT_ADJUSTMENT_FACTOR = new (0, _precision.PrecisionNumber)(0.05, 'high');
        this.RULE_WEIGHT_NORMALIZATION_INTERVAL = 30;
        this.last_descriptor = null;
        this.random = ()=>{
            this.lcg_seed = (this.lcg_seed * 1664525 + 1013904223) % 4294967296;
            return this.lcg_seed / 4294967296;
        };
        this.config = {
            ...(0, _sharedTypes.DEFAULT_SIM_CONFIG),
            ...config
        };
        if (this.config.enable_stress_propagation && this.config.stress_propagation_factor < 0) this.config.stress_propagation_factor = 0;
        this.graph = new (0, _graphologyDefault.default)({
            multi: false,
            allowSelfLoops: false
        });
        this.lcg_seed = this.config.seed ?? Date.now();
        this.rules = this.initializeRules();
        this.rule_weights = new Map();
        this.rules.forEach((rule)=>this.rule_weights.set(rule.name, new (0, _precision.PrecisionNumber)(1.0, this.config.precision)));
    }
    initializeRules() {
        const activeRules = [
            (0, _ruleGenesis.GenesisRule),
            (0, _ruleBonding.BondingRule),
            (0, _ruleAnnihilation.AnnihilationRule)
        ];
        if (this.config.enable_adaptation_valence || this.config.enable_adaptation_polarity || this.config.enable_adaptation_prototype) activeRules.push((0, _ruleAdaptation.AdaptationRule));
        if (this.config.enable_transformation_prototype) activeRules.push((0, _ruleTransformation.TransformationRule));
        if (this.config.enable_collapse) activeRules.push((0, _ruleCollapse.CollapseRule));
        return activeRules;
    }
    reset() {
        this.graph.clear();
        this.step_counter = 0;
        this._next_node_id = 0;
        this.graph_state_history.clear();
        this.simulation_history = [];
        this.lcg_seed = this.config.seed ?? Date.now();
        this.rules = this.initializeRules();
        this.rule_weights.clear();
        this.rules.forEach((rule)=>this.rule_weights.set(rule.name, new (0, _precision.PrecisionNumber)(1.0, this.config.precision)));
        this.last_descriptor = null;
        this.node_stagnation_counter.clear();
        this.node_last_stress.clear();
    }
    getNextNodeId() {
        return `d_${this._next_node_id++}`;
    }
    getNodeStagnation(nodeId) {
        return this.node_stagnation_counter.get(nodeId) || 0;
    }
    createDistinction(graph, id, p, pv, pt, sl) {
        const proVal = pv ?? this.config.initial_proto_valence;
        let iniAdaVal = Math.round(proVal * this.config.initial_valence_adaptation_ratio);
        iniAdaVal = Math.max(this.config.min_valence, iniAdaVal);
        iniAdaVal = Math.min(iniAdaVal, this.config.absolute_max_valence);
        graph.addNode(id, {
            id,
            polarity: p,
            protoType: pt ?? (0, _sharedTypes.ProtoType).Standard,
            protoValence: proVal,
            valence: iniAdaVal,
            stress: (0, _precision.PrecisionNumber).from(iniAdaVal, this.config.precision),
            sLevel: sl ?? (0, _sharedTypes.S_Level).S1_SimpleFixedPoint,
            symmetryBias: (0, _sharedTypes.SymmetryBias).None,
            coherencePotential: (0, _precision.PrecisionNumber).from(0.5, this.config.precision),
            aestheticValue: (0, _precision.PrecisionNumber).from(0.5, this.config.precision)
        });
    }
}

},{"graphology":"3u8J2","./precision":"jjewU","./shared_types":"adq2h","./rule_genesis":"2OuCz","./rule_bonding":"2ToxX","./rule_annihilation":"dscri","./rule_adaptation":"8lMbM","./rule_transformation":"VR3d5","./rule_collapse":"8YShf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3u8J2":[function(require,module,exports,__globalThis) {
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

},{}],"jjewU":[function(require,module,exports,__globalThis) {
// src/precision.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PrecisionNumber", ()=>PrecisionNumber);
var _decimalJs = require("decimal.js");
(0, _decimalJs.Decimal).set({
    precision: 60
});
class PrecisionNumber {
    constructor(n, mode){
        this.mode = mode;
        if (n instanceof PrecisionNumber) {
            if (this.mode === 'high') this.value = n.toDecimal();
            else this.value = n.toNumber();
        } else if (n instanceof (0, _decimalJs.Decimal)) {
            if (this.mode === 'high') this.value = new (0, _decimalJs.Decimal)(n);
            else this.value = n.toNumber();
        } else if (this.mode === 'high') this.value = new (0, _decimalJs.Decimal)(n);
        else this.value = Number(n);
    }
    static from(n, mode) {
        return new PrecisionNumber(n, mode);
    }
    add(other) {
        if (this.mode === 'high' && this.value instanceof (0, _decimalJs.Decimal)) {
            const otherDecimal = other instanceof PrecisionNumber ? other.toDecimal() : new (0, _decimalJs.Decimal)(other);
            return new PrecisionNumber(this.value.add(otherDecimal), 'high');
        } else {
            const otherNumber = other instanceof PrecisionNumber ? other.toNumber() : Number(other);
            return new PrecisionNumber(this.value + otherNumber, 'native');
        }
    }
    subtract(other) {
        if (this.mode === 'high' && this.value instanceof (0, _decimalJs.Decimal)) {
            const otherDecimal = other instanceof PrecisionNumber ? other.toDecimal() : new (0, _decimalJs.Decimal)(other);
            return new PrecisionNumber(this.value.sub(otherDecimal), 'high');
        } else {
            const otherNumber = other instanceof PrecisionNumber ? other.toNumber() : Number(other);
            return new PrecisionNumber(this.value - otherNumber, 'native');
        }
    }
    multiply(other) {
        if (this.mode === 'high' && this.value instanceof (0, _decimalJs.Decimal)) {
            const otherDecimal = other instanceof PrecisionNumber ? other.toDecimal() : new (0, _decimalJs.Decimal)(other);
            return new PrecisionNumber(this.value.mul(otherDecimal), 'high');
        } else {
            const otherNumber = other instanceof PrecisionNumber ? other.toNumber() : Number(other);
            return new PrecisionNumber(this.value * otherNumber, 'native');
        }
    }
    divide(other) {
        if (this.mode === 'high' && this.value instanceof (0, _decimalJs.Decimal)) {
            const otherDecimal = other instanceof PrecisionNumber ? other.toDecimal() : new (0, _decimalJs.Decimal)(other);
            if (otherDecimal.isZero()) return new PrecisionNumber(new (0, _decimalJs.Decimal)(0), 'high');
            return new PrecisionNumber(this.value.dividedBy(otherDecimal), 'high');
        } else {
            const otherNumber = other instanceof PrecisionNumber ? other.toNumber() : Number(other);
            if (otherNumber === 0) return new PrecisionNumber(this.value === 0 ? 0 : this.value > 0 ? Infinity : -Infinity, 'native');
            return new PrecisionNumber(this.value / otherNumber, 'native');
        }
    }
    static divide(a, b, mode) {
        const numA = new PrecisionNumber(a, mode);
        const numB = new PrecisionNumber(b, mode);
        return numA.divide(numB);
    }
    compareTo(other) {
        const otherPrecisionNumber = other instanceof PrecisionNumber ? other : new PrecisionNumber(other, this.mode);
        if (this.mode === 'high' && this.value instanceof (0, _decimalJs.Decimal)) return this.value.comparedTo(otherPrecisionNumber.toDecimal());
        else {
            const thisNum = this.value;
            const otherNum = otherPrecisionNumber.toNumber();
            if (thisNum < otherNum) return -1;
            if (thisNum > otherNum) return 1;
            return 0;
        }
    }
    isEqualTo(other) {
        return this.compareTo(other) === 0;
    }
    isLessThan(other) {
        return this.compareTo(other) === -1;
    }
    isGreaterThan(other) {
        return this.compareTo(other) === 1;
    }
    isLessThanOrEqualTo(other) {
        return this.compareTo(other) <= 0;
    }
    isGreaterThanOrEqualTo(other) {
        return this.compareTo(other) >= 0;
    }
    isZero() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return this.value.isZero();
        return this.value === 0;
    }
    isNegative() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return this.value.isNegative();
        return this.value < 0;
    }
    isPositive() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return this.value.isPositive();
        return this.value > 0;
    }
    abs() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return new PrecisionNumber(this.value.abs(), this.mode);
        return new PrecisionNumber(Math.abs(this.value), this.mode);
    }
    toNumber() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return this.value.toNumber();
        return this.value;
    }
    toDecimal() {
        if (this.value instanceof (0, _decimalJs.Decimal)) return new (0, _decimalJs.Decimal)(this.value);
        return new (0, _decimalJs.Decimal)(this.value);
    }
    toString(precision) {
        if (this.value instanceof (0, _decimalJs.Decimal)) return precision ? this.value.toPrecision(precision) : this.value.toString();
        return precision ? this.value.toPrecision(precision) : this.value.toString();
    }
}

},{"decimal.js":"caxyT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"caxyT":[function(require,module,exports,__globalThis) {
(function(globalScope) {
    'use strict';
    /*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */ // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //
    // The maximum exponent magnitude.
    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
    var EXP_LIMIT = 9e15, // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
    MAX_DIGITS = 1e9, // Base conversion alphabet.
    NUMERALS = '0123456789abcdef', // The natural logarithm of 10 (1025 digits).
    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058', // Pi (1025 digits).
    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789', // The initial configuration properties of the Decimal constructor.
    DEFAULTS = {
        // These values must be integers within the stated ranges (inclusive).
        // Most of these values can be changed at run-time using the `Decimal.config` method.
        // The maximum number of significant digits of the result of a calculation or base conversion.
        // E.g. `Decimal.config({ precision: 20 });`
        precision: 20,
        // The rounding mode used when rounding to `precision`.
        //
        // ROUND_UP         0 Away from zero.
        // ROUND_DOWN       1 Towards zero.
        // ROUND_CEIL       2 Towards +Infinity.
        // ROUND_FLOOR      3 Towards -Infinity.
        // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        //
        // E.g.
        // `Decimal.rounding = 4;`
        // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
        rounding: 4,
        // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP         0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
        // FLOOR      3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN  6 The IEEE 754 remainder function.
        // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
        //
        // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
        // division (9) are commonly used for the modulus operation. The other rounding modes can also
        // be used, but they may not give useful results.
        modulo: 1,
        // The exponent value at and beneath which `toString` returns exponential notation.
        // JavaScript numbers: -7
        toExpNeg: -7,
        // The exponent value at and above which `toString` returns exponential notation.
        // JavaScript numbers: 21
        toExpPos: 21,
        // The minimum exponent value, beneath which underflow to zero occurs.
        // JavaScript numbers: -324  (5e-324)
        minE: -EXP_LIMIT,
        // The maximum exponent value, above which overflow to Infinity occurs.
        // JavaScript numbers: 308  (1.7976931348623157e+308)
        maxE: EXP_LIMIT,
        // Whether to use cryptographically-secure random number generation, if available.
        crypto: false // true/false
    }, // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //
    Decimal, inexact, noConflict, quadrant, external = true, decimalError = '[DecimalError] ', invalidArgument = decimalError + 'Invalid argument: ', precisionLimitExceeded = decimalError + 'Precision limit exceeded', cryptoUnavailable = decimalError + 'crypto unavailable', tag = '[object Decimal]', mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, // Decimal.prototype object
    P = {
        toStringTag: tag
    };
    // Decimal prototype methods
    /*
   *  absoluteValue             abs
   *  ceil
   *  clampedTo                 clamp
   *  comparedTo                cmp
   *  cosine                    cos
   *  cubeRoot                  cbrt
   *  decimalPlaces             dp
   *  dividedBy                 div
   *  dividedToIntegerBy        divToInt
   *  equals                    eq
   *  floor
   *  greaterThan               gt
   *  greaterThanOrEqualTo      gte
   *  hyperbolicCosine          cosh
   *  hyperbolicSine            sinh
   *  hyperbolicTangent         tanh
   *  inverseCosine             acos
   *  inverseHyperbolicCosine   acosh
   *  inverseHyperbolicSine     asinh
   *  inverseHyperbolicTangent  atanh
   *  inverseSine               asin
   *  inverseTangent            atan
   *  isFinite
   *  isInteger                 isInt
   *  isNaN
   *  isNegative                isNeg
   *  isPositive                isPos
   *  isZero
   *  lessThan                  lt
   *  lessThanOrEqualTo         lte
   *  logarithm                 log
   *  [maximum]                 [max]
   *  [minimum]                 [min]
   *  minus                     sub
   *  modulo                    mod
   *  naturalExponential        exp
   *  naturalLogarithm          ln
   *  negated                   neg
   *  plus                      add
   *  precision                 sd
   *  round
   *  sine                      sin
   *  squareRoot                sqrt
   *  tangent                   tan
   *  times                     mul
   *  toBinary
   *  toDecimalPlaces           toDP
   *  toExponential
   *  toFixed
   *  toFraction
   *  toHexadecimal             toHex
   *  toNearest
   *  toNumber
   *  toOctal
   *  toPower                   pow
   *  toPrecision
   *  toSignificantDigits       toSD
   *  toString
   *  truncated                 trunc
   *  valueOf                   toJSON
   */ /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */ P.absoluteValue = P.abs = function() {
        var x = new this.constructor(this);
        if (x.s < 0) x.s = 1;
        return finalise(x);
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   */ P.ceil = function() {
        return finalise(new this.constructor(this), this.e + 1, 2);
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal clamped to the range
   * delineated by `min` and `max`.
   *
   * min {number|string|bigint|Decimal}
   * max {number|string|bigint|Decimal}
   *
   */ P.clampedTo = P.clamp = function(min, max) {
        var k, x = this, Ctor = x.constructor;
        min = new Ctor(min);
        max = new Ctor(max);
        if (!min.s || !max.s) return new Ctor(NaN);
        if (min.gt(max)) throw Error(invalidArgument + max);
        k = x.cmp(min);
        return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
    };
    /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   */ P.comparedTo = P.cmp = function(y) {
        var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
        // Either NaN or ±Infinity?
        if (!xd || !yd) return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
        // Either zero?
        if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
        // Signs differ?
        if (xs !== ys) return xs;
        // Compare exponents.
        if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
        xdL = xd.length;
        ydL = yd.length;
        // Compare digit by digit.
        for(i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i){
            if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
        }
        // Compare lengths.
        return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    /*
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * cos(0)         = 1
   * cos(-0)        = 1
   * cos(Infinity)  = NaN
   * cos(-Infinity) = NaN
   * cos(NaN)       = NaN
   *
   */ P.cosine = P.cos = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (!x.d) return new Ctor(NaN);
        // cos(0) = cos(-0) = 1
        if (!x.d[0]) return new Ctor(1);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
        Ctor.rounding = 1;
        x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
    };
    /*
   *
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   *  cbrt(0)  =  0
   *  cbrt(-0) = -0
   *  cbrt(1)  =  1
   *  cbrt(-1) = -1
   *  cbrt(N)  =  N
   *  cbrt(-I) = -I
   *  cbrt(I)  =  I
   *
   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
   *
   */ P.cubeRoot = P.cbrt = function() {
        var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
        if (!x.isFinite() || x.isZero()) return new Ctor(x);
        external = false;
        // Initial estimate.
        s = x.s * mathpow(x.s * x, 1 / 3);
        // Math.cbrt underflow/overflow?
        // Pass x to Math.pow as integer, then adjust the exponent of the result.
        if (!s || Math.abs(s) == 1 / 0) {
            n = digitsToString(x.d);
            e = x.e;
            // Adjust n exponent so it is a multiple of 3 away from x exponent.
            if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? '0' : '00';
            s = mathpow(n, 1 / 3);
            // Rarely, e may be one less than the result exponent value.
            e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
            if (s == 1 / 0) n = '5e' + e;
            else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf('e') + 1) + e;
            }
            r = new Ctor(n);
            r.s = x.s;
        } else r = new Ctor(s.toString());
        sd = (e = Ctor.precision) + 3;
        // Halley's method.
        // TODO? Compare Newton's method.
        for(;;){
            t = r;
            t3 = t.times(t).times(t);
            t3plusx = t3.plus(x);
            r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
            // TODO? Replace with for-loop and checkRoundingDigits.
            if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
                n = n.slice(sd - 3, sd + 1);
                // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
                // , i.e. approaching a rounding boundary, continue the iteration.
                if (n == '9999' || !rep && n == '4999') {
                    // On the first iteration only, check to see if rounding up gives the exact result as the
                    // nines may infinitely repeat.
                    if (!rep) {
                        finalise(t, e + 1, 0);
                        if (t.times(t).times(t).eq(x)) {
                            r = t;
                            break;
                        }
                    }
                    sd += 4;
                    rep = 1;
                } else {
                    // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
                    // If not, then there are further digits and m will be truthy.
                    if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                        // Truncate to the first rounding digit.
                        finalise(r, e + 1, 1);
                        m = !r.times(r).times(r).eq(x);
                    }
                    break;
                }
            }
        }
        external = true;
        return finalise(r, e, Ctor.rounding, m);
    };
    /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */ P.decimalPlaces = P.dp = function() {
        var w, d = this.d, n = NaN;
        if (d) {
            w = d.length - 1;
            n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last word.
            w = d[w];
            if (w) for(; w % 10 == 0; w /= 10)n--;
            if (n < 0) n = 0;
        }
        return n;
    };
    /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   */ P.dividedBy = P.div = function(y) {
        return divide(this, new this.constructor(y));
    };
    /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */ P.dividedToIntegerBy = P.divToInt = function(y) {
        var x = this, Ctor = x.constructor;
        return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */ P.equals = P.eq = function(y) {
        return this.cmp(y) === 0;
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   */ P.floor = function() {
        return finalise(new this.constructor(this), this.e + 1, 3);
    };
    /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */ P.greaterThan = P.gt = function(y) {
        return this.cmp(y) > 0;
    };
    /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */ P.greaterThanOrEqualTo = P.gte = function(y) {
        var k = this.cmp(y);
        return k == 1 || k === 0;
    };
    /*
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [1, Infinity]
   *
   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
   *
   * cosh(0)         = 1
   * cosh(-0)        = 1
   * cosh(Infinity)  = Infinity
   * cosh(-Infinity) = Infinity
   * cosh(NaN)       = NaN
   *
   *  x        time taken (ms)   result
   * 1000      9                 9.8503555700852349694e+433
   * 10000     25                4.4034091128314607936e+4342
   * 100000    171               1.4033316802130615897e+43429
   * 1000000   3817              1.5166076984010437725e+434294
   * 10000000  abandoned after 2 minute wait
   *
   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
   *
   */ P.hyperbolicCosine = P.cosh = function() {
        var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
        if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
        if (x.isZero()) return one;
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
        Ctor.rounding = 1;
        len = x.d.length;
        // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
        // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))
        // Estimate the optimum number of times to use the argument reduction.
        // TODO? Estimation reused from cosine() and may not be optimal here.
        if (len < 32) {
            k = Math.ceil(len / 3);
            n = (1 / tinyPow(4, k)).toString();
        } else {
            k = 16;
            n = '2.3283064365386962890625e-10';
        }
        x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
        // Reverse argument reduction
        var cosh2_x, i = k, d8 = new Ctor(8);
        for(; i--;){
            cosh2_x = x.times(x);
            x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
        }
        return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    /*
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
   *
   * sinh(0)         = 0
   * sinh(-0)        = -0
   * sinh(Infinity)  = Infinity
   * sinh(-Infinity) = -Infinity
   * sinh(NaN)       = NaN
   *
   * x        time taken (ms)
   * 10       2 ms
   * 100      5 ms
   * 1000     14 ms
   * 10000    82 ms
   * 100000   886 ms            1.4033316802130615897e+43429
   * 200000   2613 ms
   * 300000   5407 ms
   * 400000   8824 ms
   * 500000   13026 ms          8.7080643612718084129e+217146
   * 1000000  48543 ms
   *
   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
   *
   */ P.hyperbolicSine = P.sinh = function() {
        var k, pr, rm, len, x = this, Ctor = x.constructor;
        if (!x.isFinite() || x.isZero()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
        Ctor.rounding = 1;
        len = x.d.length;
        if (len < 3) x = taylorSeries(Ctor, 2, x, x, true);
        else {
            // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
            // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
            // 3 multiplications and 1 addition
            // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
            // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
            // 4 multiplications and 2 additions
            // Estimate the optimum number of times to use the argument reduction.
            k = 1.4 * Math.sqrt(len);
            k = k > 16 ? 16 : k | 0;
            x = x.times(1 / tinyPow(5, k));
            x = taylorSeries(Ctor, 2, x, x, true);
            // Reverse argument reduction
            var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
            for(; k--;){
                sinh2_x = x.times(x);
                x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
            }
        }
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return finalise(x, pr, rm, true);
    };
    /*
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * tanh(x) = sinh(x) / cosh(x)
   *
   * tanh(0)         = 0
   * tanh(-0)        = -0
   * tanh(Infinity)  = 1
   * tanh(-Infinity) = -1
   * tanh(NaN)       = NaN
   *
   */ P.hyperbolicTangent = P.tanh = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (!x.isFinite()) return new Ctor(x.s);
        if (x.isZero()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + 7;
        Ctor.rounding = 1;
        return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    /*
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
   * this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [0, pi]
   *
   * acos(x) = pi/2 - asin(x)
   *
   * acos(0)       = pi/2
   * acos(-0)      = pi/2
   * acos(1)       = 0
   * acos(-1)      = pi
   * acos(1/2)     = pi/3
   * acos(-1/2)    = 2*pi/3
   * acos(|x| > 1) = NaN
   * acos(NaN)     = NaN
   *
   */ P.inverseCosine = P.acos = function() {
        var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
        if (k !== -1) return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
        if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
        // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3
        Ctor.precision = pr + 6;
        Ctor.rounding = 1;
        // See https://github.com/MikeMcl/decimal.js/pull/217
        x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return x.times(2);
    };
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * Domain: [1, Infinity]
   * Range: [0, Infinity]
   *
   * acosh(x) = ln(x + sqrt(x^2 - 1))
   *
   * acosh(x < 1)     = NaN
   * acosh(NaN)       = NaN
   * acosh(Infinity)  = Infinity
   * acosh(-Infinity) = NaN
   * acosh(0)         = NaN
   * acosh(-0)        = NaN
   * acosh(1)         = 0
   * acosh(-1)        = NaN
   *
   */ P.inverseHyperbolicCosine = P.acosh = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
        if (!x.isFinite()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
        Ctor.rounding = 1;
        external = false;
        x = x.times(x).minus(1).sqrt().plus(x);
        external = true;
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return x.ln();
    };
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * asinh(x) = ln(x + sqrt(x^2 + 1))
   *
   * asinh(NaN)       = NaN
   * asinh(Infinity)  = Infinity
   * asinh(-Infinity) = -Infinity
   * asinh(0)         = 0
   * asinh(-0)        = -0
   *
   */ P.inverseHyperbolicSine = P.asinh = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (!x.isFinite() || x.isZero()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
        Ctor.rounding = 1;
        external = false;
        x = x.times(x).plus(1).sqrt().plus(x);
        external = true;
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return x.ln();
    };
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [-Infinity, Infinity]
   *
   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
   *
   * atanh(|x| > 1)   = NaN
   * atanh(NaN)       = NaN
   * atanh(Infinity)  = NaN
   * atanh(-Infinity) = NaN
   * atanh(0)         = 0
   * atanh(-0)        = -0
   * atanh(1)         = Infinity
   * atanh(-1)        = -Infinity
   *
   */ P.inverseHyperbolicTangent = P.atanh = function() {
        var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
        if (!x.isFinite()) return new Ctor(NaN);
        if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        xsd = x.sd();
        if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
        Ctor.precision = wpr = xsd - x.e;
        x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
        Ctor.precision = pr + 4;
        Ctor.rounding = 1;
        x = x.ln();
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return x.times(0.5);
    };
    /*
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
   *
   * asin(0)       = 0
   * asin(-0)      = -0
   * asin(1/2)     = pi/6
   * asin(-1/2)    = -pi/6
   * asin(1)       = pi/2
   * asin(-1)      = -pi/2
   * asin(|x| > 1) = NaN
   * asin(NaN)     = NaN
   *
   * TODO? Compare performance of Taylor series.
   *
   */ P.inverseSine = P.asin = function() {
        var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
        if (x.isZero()) return new Ctor(x);
        k = x.abs().cmp(1);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        if (k !== -1) {
            // |x| is 1
            if (k === 0) {
                halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
                halfPi.s = x.s;
                return halfPi;
            }
            // |x| > 1 or x is NaN
            return new Ctor(NaN);
        }
        // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6
        Ctor.precision = pr + 6;
        Ctor.rounding = 1;
        x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return x.times(2);
    };
    /*
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
   *
   * atan(0)         = 0
   * atan(-0)        = -0
   * atan(1)         = pi/4
   * atan(-1)        = -pi/4
   * atan(Infinity)  = pi/2
   * atan(-Infinity) = -pi/2
   * atan(NaN)       = NaN
   *
   */ P.inverseTangent = P.atan = function() {
        var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
        if (!x.isFinite()) {
            if (!x.s) return new Ctor(NaN);
            if (pr + 4 <= PI_PRECISION) {
                r = getPi(Ctor, pr + 4, rm).times(0.5);
                r.s = x.s;
                return r;
            }
        } else if (x.isZero()) return new Ctor(x);
        else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
            r = getPi(Ctor, pr + 4, rm).times(0.25);
            r.s = x.s;
            return r;
        }
        Ctor.precision = wpr = pr + 10;
        Ctor.rounding = 1;
        // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);
        // Argument reduction
        // Ensure |x| < 0.42
        // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))
        k = Math.min(28, wpr / LOG_BASE + 2 | 0);
        for(i = k; i; --i)x = x.div(x.times(x).plus(1).sqrt().plus(1));
        external = false;
        j = Math.ceil(wpr / LOG_BASE);
        n = 1;
        x2 = x.times(x);
        r = new Ctor(x);
        px = x;
        // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
        for(; i !== -1;){
            px = px.times(x2);
            t = r.minus(px.div(n += 2));
            px = px.times(x2);
            r = t.plus(px.div(n += 2));
            if (r.d[j] !== void 0) for(i = j; r.d[i] === t.d[i] && i--;);
        }
        if (k) r = r.times(2 << k - 1);
        external = true;
        return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    /*
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   */ P.isFinite = function() {
        return !!this.d;
    };
    /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */ P.isInteger = P.isInt = function() {
        return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    /*
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   */ P.isNaN = function() {
        return !this.s;
    };
    /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */ P.isNegative = P.isNeg = function() {
        return this.s < 0;
    };
    /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */ P.isPositive = P.isPos = function() {
        return this.s > 0;
    };
    /*
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   */ P.isZero = function() {
        return !!this.d && this.d[0] === 0;
    };
    /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */ P.lessThan = P.lt = function(y) {
        return this.cmp(y) < 0;
    };
    /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */ P.lessThanOrEqualTo = P.lte = function(y) {
        return this.cmp(y) < 1;
    };
    /*
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * If no base is specified, return log[10](arg).
   *
   * log[base](arg) = ln(arg) / ln(base)
   *
   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
   * otherwise:
   *
   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
   * between the result and the correctly rounded result will be one ulp (unit in the last place).
   *
   * log[-b](a)       = NaN
   * log[0](a)        = NaN
   * log[1](a)        = NaN
   * log[NaN](a)      = NaN
   * log[Infinity](a) = NaN
   * log[b](0)        = -Infinity
   * log[b](-0)       = -Infinity
   * log[b](-a)       = NaN
   * log[b](1)        = 0
   * log[b](Infinity) = Infinity
   * log[b](NaN)      = NaN
   *
   * [base] {number|string|bigint|Decimal} The base of the logarithm.
   *
   */ P.logarithm = P.log = function(base) {
        var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
        // Default base is 10.
        if (base == null) {
            base = new Ctor(10);
            isBase10 = true;
        } else {
            base = new Ctor(base);
            d = base.d;
            // Return NaN if base is negative, or non-finite, or is 0 or 1.
            if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
            isBase10 = base.eq(10);
        }
        d = arg.d;
        // Is arg negative, non-finite, 0 or 1?
        if (arg.s < 0 || !d || !d[0] || arg.eq(1)) return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
        // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
        // integer power of 10.
        if (isBase10) {
            if (d.length > 1) inf = true;
            else {
                for(k = d[0]; k % 10 === 0;)k /= 10;
                inf = k !== 1;
            }
        }
        external = false;
        sd = pr + guard;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        // The result will have 5 rounding digits.
        r = divide(num, denominator, sd, 1);
        // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
        // calculate 10 further digits.
        //
        // If the result is known to have an infinite decimal expansion, repeat this until it is clear
        // that the result is above or below the boundary. Otherwise, if after calculating the 10
        // further digits, the last 14 are nines, round up and assume the result is exact.
        // Also assume the result is exact if the last 14 are zero.
        //
        // Example of a result that will be incorrectly rounded:
        // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
        // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
        // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
        // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
        // place is still 2.6.
        if (checkRoundingDigits(r.d, k = pr, rm)) do {
            sd += 10;
            num = naturalLogarithm(arg, sd);
            denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
            r = divide(num, denominator, sd, 1);
            if (!inf) {
                // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
                if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) r = finalise(r, pr + 1, 0);
                break;
            }
        }while (checkRoundingDigits(r.d, k += 10, rm));
        external = true;
        return finalise(r, pr, rm);
    };
    /*
   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|bigint|Decimal}
   *
  P.max = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, -1);
  };
   */ /*
   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|bigint|Decimal}
   *
  P.min = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 1);
  };
   */ /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */ P.minus = P.sub = function(y) {
        var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
        y = new Ctor(y);
        // If either is not finite...
        if (!x.d || !y.d) {
            // Return NaN if either is NaN.
            if (!x.s || !y.s) y = new Ctor(NaN);
            else if (x.d) y.s = -y.s;
            else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
            return y;
        }
        // If signs differ...
        if (x.s != y.s) {
            y.s = -y.s;
            return x.plus(y);
        }
        xd = x.d;
        yd = y.d;
        pr = Ctor.precision;
        rm = Ctor.rounding;
        // If either is zero...
        if (!xd[0] || !yd[0]) {
            // Return y negated if x is zero and y is non-zero.
            if (yd[0]) y.s = -y.s;
            else if (xd[0]) y = new Ctor(x);
            else return new Ctor(rm === 3 ? -0 : 0);
            return external ? finalise(y, pr, rm) : y;
        }
        // x and y are finite, non-zero numbers with the same sign.
        // Calculate base 1e7 exponents.
        e = mathfloor(y.e / LOG_BASE);
        xe = mathfloor(x.e / LOG_BASE);
        xd = xd.slice();
        k = xe - e;
        // If base 1e7 exponents differ...
        if (k) {
            xLTy = k < 0;
            if (xLTy) {
                d = xd;
                k = -k;
                len = yd.length;
            } else {
                d = yd;
                e = xe;
                len = xd.length;
            }
            // Numbers with massively different exponents would result in a very high number of
            // zeros needing to be prepended, but this can be avoided while still ensuring correct
            // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
            i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
            if (k > i) {
                k = i;
                d.length = 1;
            }
            // Prepend zeros to equalise exponents.
            d.reverse();
            for(i = k; i--;)d.push(0);
            d.reverse();
        // Base 1e7 exponents equal.
        } else {
            // Check digits to determine which is the bigger number.
            i = xd.length;
            len = yd.length;
            xLTy = i < len;
            if (xLTy) len = i;
            for(i = 0; i < len; i++)if (xd[i] != yd[i]) {
                xLTy = xd[i] < yd[i];
                break;
            }
            k = 0;
        }
        if (xLTy) {
            d = xd;
            xd = yd;
            yd = d;
            y.s = -y.s;
        }
        len = xd.length;
        // Append zeros to `xd` if shorter.
        // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
        for(i = yd.length - len; i > 0; --i)xd[len++] = 0;
        // Subtract yd from xd.
        for(i = yd.length; i > k;){
            if (xd[--i] < yd[i]) {
                for(j = i; j && xd[--j] === 0;)xd[j] = BASE - 1;
                --xd[j];
                xd[i] += BASE;
            }
            xd[i] -= yd[i];
        }
        // Remove trailing zeros.
        for(; xd[--len] === 0;)xd.pop();
        // Remove leading zeros and adjust exponent accordingly.
        for(; xd[0] === 0; xd.shift())--e;
        // Zero?
        if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
        y.d = xd;
        y.e = getBase10Exponent(xd, e);
        return external ? finalise(y, pr, rm) : y;
    };
    /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * The result depends on the modulo mode.
   *
   */ P.modulo = P.mod = function(y) {
        var q, x = this, Ctor = x.constructor;
        y = new Ctor(y);
        // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
        if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
        // Return x if y is ±Infinity or x is ±0.
        if (!y.d || x.d && !x.d[0]) return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
        // Prevent rounding of intermediate calculations.
        external = false;
        if (Ctor.modulo == 9) {
            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // result = x - q * y    where  0 <= result < abs(y)
            q = divide(x, y.abs(), 0, 3, 1);
            q.s *= y.s;
        } else q = divide(x, y, 0, Ctor.modulo, 1);
        q = q.times(y);
        external = true;
        return x.minus(q);
    };
    /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */ P.naturalExponential = P.exp = function() {
        return naturalExponential(this);
    };
    /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */ P.naturalLogarithm = P.ln = function() {
        return naturalLogarithm(this);
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */ P.negated = P.neg = function() {
        var x = new this.constructor(this);
        x.s = -x.s;
        return finalise(x);
    };
    /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */ P.plus = P.add = function(y) {
        var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
        y = new Ctor(y);
        // If either is not finite...
        if (!x.d || !y.d) {
            // Return NaN if either is NaN.
            if (!x.s || !y.s) y = new Ctor(NaN);
            else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
            return y;
        }
        // If signs differ...
        if (x.s != y.s) {
            y.s = -y.s;
            return x.minus(y);
        }
        xd = x.d;
        yd = y.d;
        pr = Ctor.precision;
        rm = Ctor.rounding;
        // If either is zero...
        if (!xd[0] || !yd[0]) {
            // Return x if y is zero.
            // Return y if y is non-zero.
            if (!yd[0]) y = new Ctor(x);
            return external ? finalise(y, pr, rm) : y;
        }
        // x and y are finite, non-zero numbers with the same sign.
        // Calculate base 1e7 exponents.
        k = mathfloor(x.e / LOG_BASE);
        e = mathfloor(y.e / LOG_BASE);
        xd = xd.slice();
        i = k - e;
        // If base 1e7 exponents differ...
        if (i) {
            if (i < 0) {
                d = xd;
                i = -i;
                len = yd.length;
            } else {
                d = yd;
                e = k;
                len = xd.length;
            }
            // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
            k = Math.ceil(pr / LOG_BASE);
            len = k > len ? k + 1 : len + 1;
            if (i > len) {
                i = len;
                d.length = 1;
            }
            // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
            d.reverse();
            for(; i--;)d.push(0);
            d.reverse();
        }
        len = xd.length;
        i = yd.length;
        // If yd is longer than xd, swap xd and yd so xd points to the longer array.
        if (len - i < 0) {
            i = len;
            d = yd;
            yd = xd;
            xd = d;
        }
        // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
        for(carry = 0; i;){
            carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
            xd[i] %= BASE;
        }
        if (carry) {
            xd.unshift(carry);
            ++e;
        }
        // Remove trailing zeros.
        // No need to check for zero, as +x + +y != 0 && -x + -y != 0
        for(len = xd.length; xd[--len] == 0;)xd.pop();
        y.d = xd;
        y.e = getBase10Exponent(xd, e);
        return external ? finalise(y, pr, rm) : y;
    };
    /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */ P.precision = P.sd = function(z) {
        var k, x = this;
        if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
        if (x.d) {
            k = getPrecision(x.d);
            if (z && x.e + 1 > k) k = x.e + 1;
        } else k = NaN;
        return k;
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */ P.round = function() {
        var x = this, Ctor = x.constructor;
        return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
    };
    /*
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * sin(x) = x - x^3/3! + x^5/5! - ...
   *
   * sin(0)         = 0
   * sin(-0)        = -0
   * sin(Infinity)  = NaN
   * sin(-Infinity) = NaN
   * sin(NaN)       = NaN
   *
   */ P.sine = P.sin = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (!x.isFinite()) return new Ctor(NaN);
        if (x.isZero()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
        Ctor.rounding = 1;
        x = sine(Ctor, toLessThanHalfPi(Ctor, x));
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
    };
    /*
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   *  sqrt(-n) =  N
   *  sqrt(N)  =  N
   *  sqrt(-I) =  N
   *  sqrt(I)  =  I
   *  sqrt(0)  =  0
   *  sqrt(-0) = -0
   *
   */ P.squareRoot = P.sqrt = function() {
        var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
        // Negative/NaN/Infinity/zero?
        if (s !== 1 || !d || !d[0]) return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
        external = false;
        // Initial estimate.
        s = Math.sqrt(+x);
        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
        if (s == 0 || s == 1 / 0) {
            n = digitsToString(d);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(n);
            e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) n = '5e' + e;
            else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf('e') + 1) + e;
            }
            r = new Ctor(n);
        } else r = new Ctor(s.toString());
        sd = (e = Ctor.precision) + 3;
        // Newton-Raphson iteration.
        for(;;){
            t = r;
            r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
            // TODO? Replace with for-loop and checkRoundingDigits.
            if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
                n = n.slice(sd - 3, sd + 1);
                // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
                // 4999, i.e. approaching a rounding boundary, continue the iteration.
                if (n == '9999' || !rep && n == '4999') {
                    // On the first iteration only, check to see if rounding up gives the exact result as the
                    // nines may infinitely repeat.
                    if (!rep) {
                        finalise(t, e + 1, 0);
                        if (t.times(t).eq(x)) {
                            r = t;
                            break;
                        }
                    }
                    sd += 4;
                    rep = 1;
                } else {
                    // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
                    // If not, then there are further digits and m will be truthy.
                    if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                        // Truncate to the first rounding digit.
                        finalise(r, e + 1, 1);
                        m = !r.times(r).eq(x);
                    }
                    break;
                }
            }
        }
        external = true;
        return finalise(r, e, Ctor.rounding, m);
    };
    /*
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * tan(0)         = 0
   * tan(-0)        = -0
   * tan(Infinity)  = NaN
   * tan(-Infinity) = NaN
   * tan(NaN)       = NaN
   *
   */ P.tangent = P.tan = function() {
        var pr, rm, x = this, Ctor = x.constructor;
        if (!x.isFinite()) return new Ctor(NaN);
        if (x.isZero()) return new Ctor(x);
        pr = Ctor.precision;
        rm = Ctor.rounding;
        Ctor.precision = pr + 10;
        Ctor.rounding = 1;
        x = x.sin();
        x.s = 1;
        x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
        Ctor.precision = pr;
        Ctor.rounding = rm;
        return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
    };
    /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   */ P.times = P.mul = function(y) {
        var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
        y.s *= x.s;
        // If either is NaN, ±Infinity or ±0...
        if (!xd || !xd[0] || !yd || !yd[0]) return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
        e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
        xdL = xd.length;
        ydL = yd.length;
        // Ensure xd points to the longer array.
        if (xdL < ydL) {
            r = xd;
            xd = yd;
            yd = r;
            rL = xdL;
            xdL = ydL;
            ydL = rL;
        }
        // Initialise the result array with zeros.
        r = [];
        rL = xdL + ydL;
        for(i = rL; i--;)r.push(0);
        // Multiply!
        for(i = ydL; --i >= 0;){
            carry = 0;
            for(k = xdL + i; k > i;){
                t = r[k] + yd[i] * xd[k - i - 1] + carry;
                r[k--] = t % BASE | 0;
                carry = t / BASE | 0;
            }
            r[k] = (r[k] + carry) % BASE | 0;
        }
        // Remove trailing zeros.
        for(; !r[--rL];)r.pop();
        if (carry) ++e;
        else r.shift();
        y.d = r;
        y.e = getBase10Exponent(r, e);
        return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    /*
   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toBinary = function(sd, rm) {
        return toStringBinary(this, 2, sd, rm);
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toDecimalPlaces = P.toDP = function(dp, rm) {
        var x = this, Ctor = x.constructor;
        x = new Ctor(x);
        if (dp === void 0) return x;
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        return finalise(x, dp + x.e + 1, rm);
    };
    /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toExponential = function(dp, rm) {
        var str, x = this, Ctor = x.constructor;
        if (dp === void 0) str = finiteToString(x, true);
        else {
            checkInt32(dp, 0, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
            x = finalise(new Ctor(x), dp + 1, rm);
            str = finiteToString(x, true, dp + 1);
        }
        return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */ P.toFixed = function(dp, rm) {
        var str, y, x = this, Ctor = x.constructor;
        if (dp === void 0) str = finiteToString(x);
        else {
            checkInt32(dp, 0, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
            y = finalise(new Ctor(x), dp + x.e + 1, rm);
            str = finiteToString(y, false, dp + y.e + 1);
        }
        // To determine whether to add the minus sign look at the value before it was rounded,
        // i.e. look at `x` rather than `y`.
        return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    /*
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * The denominator will be a positive non-zero value less than or equal to the specified maximum
   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
   * value necessary to represent the number exactly.
   *
   * [maxD] {number|string|bigint|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
   *
   */ P.toFraction = function(maxD) {
        var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
        if (!xd) return new Ctor(x);
        n1 = d0 = new Ctor(1);
        d1 = n0 = new Ctor(0);
        d = new Ctor(d1);
        e = d.e = getPrecision(xd) - x.e - 1;
        k = e % LOG_BASE;
        d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
        if (maxD == null) // d is 10**e, the minimum max-denominator needed.
        maxD = e > 0 ? d : n1;
        else {
            n = new Ctor(maxD);
            if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
            maxD = n.gt(d) ? e > 0 ? d : n1 : n;
        }
        external = false;
        n = new Ctor(digitsToString(xd));
        pr = Ctor.precision;
        Ctor.precision = e = xd.length * LOG_BASE * 2;
        for(;;){
            q = divide(n, d, 0, 1, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.cmp(maxD) == 1) break;
            d0 = d1;
            d1 = d2;
            d2 = n1;
            n1 = n0.plus(q.times(d2));
            n0 = d2;
            d2 = d;
            d = n.minus(q.times(d2));
            n = d2;
        }
        d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        // Determine which fraction is closer to x, n0/d0 or n1/d1?
        r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [
            n1,
            d1
        ] : [
            n0,
            d0
        ];
        Ctor.precision = pr;
        external = true;
        return r;
    };
    /*
   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toHexadecimal = P.toHex = function(sd, rm) {
        return toStringBinary(this, 16, sd, rm);
    };
    /*
   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
   *
   * The return value will always have the same sign as this Decimal, unless either this Decimal
   * or `y` is NaN, in which case the return value will be also be NaN.
   *
   * The return value is not affected by the value of `precision`.
   *
   * y {number|string|bigint|Decimal} The magnitude to round to a multiple of.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toNearest() rounding mode not an integer: {rm}'
   * 'toNearest() rounding mode out of range: {rm}'
   *
   */ P.toNearest = function(y, rm) {
        var x = this, Ctor = x.constructor;
        x = new Ctor(x);
        if (y == null) {
            // If x is not finite, return x.
            if (!x.d) return x;
            y = new Ctor(1);
            rm = Ctor.rounding;
        } else {
            y = new Ctor(y);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
            // If x is not finite, return x if y is not NaN, else NaN.
            if (!x.d) return y.s ? x : y;
            // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
            if (!y.d) {
                if (y.s) y.s = x.s;
                return y;
            }
        }
        // If y is not zero, calculate the nearest multiple of y to x.
        if (y.d[0]) {
            external = false;
            x = divide(x, y, 0, rm, 1).times(y);
            external = true;
            finalise(x);
        // If y is zero, return zero with the sign of x.
        } else {
            y.s = x.s;
            x = y;
        }
        return x;
    };
    /*
   * Return the value of this Decimal converted to a number primitive.
   * Zero keeps its sign.
   *
   */ P.toNumber = function() {
        return +this;
    };
    /*
   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toOctal = function(sd, rm) {
        return toStringBinary(this, 8, sd, rm);
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * ECMAScript compliant.
   *
   *   pow(x, NaN)                           = NaN
   *   pow(x, ±0)                            = 1

   *   pow(NaN, non-zero)                    = NaN
   *   pow(abs(x) > 1, +Infinity)            = +Infinity
   *   pow(abs(x) > 1, -Infinity)            = +0
   *   pow(abs(x) == 1, ±Infinity)           = NaN
   *   pow(abs(x) < 1, +Infinity)            = +0
   *   pow(abs(x) < 1, -Infinity)            = +Infinity
   *   pow(+Infinity, y > 0)                 = +Infinity
   *   pow(+Infinity, y < 0)                 = +0
   *   pow(-Infinity, odd integer > 0)       = -Infinity
   *   pow(-Infinity, even integer > 0)      = +Infinity
   *   pow(-Infinity, odd integer < 0)       = -0
   *   pow(-Infinity, even integer < 0)      = +0
   *   pow(+0, y > 0)                        = +0
   *   pow(+0, y < 0)                        = +Infinity
   *   pow(-0, odd integer > 0)              = -0
   *   pow(-0, even integer > 0)             = +0
   *   pow(-0, odd integer < 0)              = -Infinity
   *   pow(-0, even integer < 0)             = +Infinity
   *   pow(finite x < 0, finite non-integer) = NaN
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
   * probability of an incorrectly rounded result
   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
   * i.e. 1 in 250,000,000,000,000
   *
   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
   *
   * y {number|string|bigint|Decimal} The power to which to raise this Decimal.
   *
   */ P.toPower = P.pow = function(y) {
        var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
        // Either ±Infinity, NaN or ±0?
        if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
        x = new Ctor(x);
        if (x.eq(1)) return x;
        pr = Ctor.precision;
        rm = Ctor.rounding;
        if (y.eq(1)) return finalise(x, pr, rm);
        // y exponent
        e = mathfloor(y.e / LOG_BASE);
        // If y is a small integer use the 'exponentiation by squaring' algorithm.
        if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
            r = intPow(Ctor, x, k, pr);
            return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
        }
        s = x.s;
        // if x is negative
        if (s < 0) {
            // if y is not an integer
            if (e < y.d.length - 1) return new Ctor(NaN);
            // Result is positive if x is negative and the last digit of integer y is even.
            if ((y.d[e] & 1) == 0) s = 1;
            // if x.eq(-1)
            if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
                x.s = s;
                return x;
            }
        }
        // Estimate result exponent.
        // x^y = 10^e,  where e = y * log10(x)
        // log10(x) = log10(x_significand) + x_exponent
        // log10(x_significand) = ln(x_significand) / ln(10)
        k = mathpow(+x, yn);
        e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + '').e;
        // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.
        // Overflow/underflow?
        if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
        external = false;
        Ctor.rounding = x.s = 1;
        // Estimate the extra guard digits needed to ensure five correct rounding digits from
        // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
        // new Decimal(2.32456).pow('2087987436534566.46411')
        // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
        k = Math.min(12, (e + '').length);
        // r = x^y = exp(y*ln(x))
        r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
        // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
        if (r.d) {
            // Truncate to the required precision plus five rounding digits.
            r = finalise(r, pr + 5, 1);
            // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
            // the result.
            if (checkRoundingDigits(r.d, pr, rm)) {
                e = pr + 10;
                // Truncate to the increased precision plus five rounding digits.
                r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
                // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
                if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) r = finalise(r, pr + 1, 0);
            }
        }
        r.s = s;
        external = true;
        Ctor.rounding = rm;
        return finalise(r, pr, rm);
    };
    /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */ P.toPrecision = function(sd, rm) {
        var str, x = this, Ctor = x.constructor;
        if (sd === void 0) str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
        else {
            checkInt32(sd, 1, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
            x = finalise(new Ctor(x), sd, rm);
            str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
        }
        return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toSD() digits out of range: {sd}'
   * 'toSD() digits not an integer: {sd}'
   * 'toSD() rounding mode not an integer: {rm}'
   * 'toSD() rounding mode out of range: {rm}'
   *
   */ P.toSignificantDigits = P.toSD = function(sd, rm) {
        var x = this, Ctor = x.constructor;
        if (sd === void 0) {
            sd = Ctor.precision;
            rm = Ctor.rounding;
        } else {
            checkInt32(sd, 1, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
        }
        return finalise(new Ctor(x), sd, rm);
    };
    /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */ P.toString = function() {
        var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
        return x.isNeg() && !x.isZero() ? '-' + str : str;
    };
    /*
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   */ P.truncated = P.trunc = function() {
        return finalise(new this.constructor(this), this.e + 1, 1);
    };
    /*
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   */ P.valueOf = P.toJSON = function() {
        var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
        return x.isNeg() ? '-' + str : str;
    };
    // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.
    /*
   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
   *                           finiteToString, naturalExponential, naturalLogarithm
   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
   *  convertBase              toStringBinary, parseOther
   *  cos                      P.cos
   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
   *                           taylorSeries, atan2, parseOther
   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
   *                           naturalLogarithm, ceil, floor, round, trunc
   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
   *                           toStringBinary
   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
   *  getLn10                  P.logarithm, naturalLogarithm
   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
   *  getPrecision             P.precision, P.toFraction
   *  getZeroString            digitsToString, finiteToString
   *  intPow                   P.toPower, parseOther
   *  isOdd                    toLessThanHalfPi
   *  maxOrMin                 max, min
   *  naturalExponential       P.naturalExponential, P.toPower
   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
   *                           P.toPower, naturalExponential
   *  nonFiniteToString        finiteToString, toStringBinary
   *  parseDecimal             Decimal
   *  parseOther               Decimal
   *  sin                      P.sin
   *  taylorSeries             P.cosh, P.sinh, cos, sin
   *  toLessThanHalfPi         P.cos, P.sin
   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
   *  truncate                 intPow
   *
   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
   *                           naturalLogarithm, config, parseOther, random, Decimal
   */ function digitsToString(d) {
        var i, k, ws, indexOfLastWord = d.length - 1, str = '', w = d[0];
        if (indexOfLastWord > 0) {
            str += w;
            for(i = 1; i < indexOfLastWord; i++){
                ws = d[i] + '';
                k = LOG_BASE - ws.length;
                if (k) str += getZeroString(k);
                str += ws;
            }
            w = d[i];
            ws = w + '';
            k = LOG_BASE - ws.length;
            if (k) str += getZeroString(k);
        } else if (w === 0) return '0';
        // Remove trailing zeros of last w.
        for(; w % 10 === 0;)w /= 10;
        return str + w;
    }
    function checkInt32(i, min, max) {
        if (i !== ~~i || i < min || i > max) throw Error(invalidArgument + i);
    }
    /*
   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
   * `repeating == null` if caller is `log` or `pow`,
   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
   */ function checkRoundingDigits(d, i, rm, repeating) {
        var di, k, r, rd;
        // Get the length of the first word of the array d.
        for(k = d[0]; k >= 10; k /= 10)--i;
        // Is the rounding digit in the first word of d?
        if (--i < 0) {
            i += LOG_BASE;
            di = 0;
        } else {
            di = Math.ceil((i + 1) / LOG_BASE);
            i %= LOG_BASE;
        }
        // i is the index (0 - 6) of the rounding digit.
        // E.g. if within the word 3487563 the first rounding digit is 5,
        // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
        k = mathpow(10, LOG_BASE - i);
        rd = d[di] % k | 0;
        if (repeating == null) {
            if (i < 3) {
                if (i == 0) rd = rd / 100 | 0;
                else if (i == 1) rd = rd / 10 | 0;
                r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
            } else r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        } else if (i < 4) {
            if (i == 0) rd = rd / 1000 | 0;
            else if (i == 1) rd = rd / 100 | 0;
            else if (i == 2) rd = rd / 10 | 0;
            r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
        return r;
    }
    // Convert string of `baseIn` to an array of numbers of `baseOut`.
    // Eg. convertBase('255', 10, 16) returns [15, 15].
    // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
    function convertBase(str, baseIn, baseOut) {
        var j, arr = [
            0
        ], arrL, i = 0, strL = str.length;
        for(; i < strL;){
            for(arrL = arr.length; arrL--;)arr[arrL] *= baseIn;
            arr[0] += NUMERALS.indexOf(str.charAt(i++));
            for(j = 0; j < arr.length; j++)if (arr[j] > baseOut - 1) {
                if (arr[j + 1] === void 0) arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
            }
        }
        return arr.reverse();
    }
    /*
   * cos(x) = 1 - x^2/2! + x^4/4! - ...
   * |x| < pi/2
   *
   */ function cosine(Ctor, x) {
        var k, len, y;
        if (x.isZero()) return x;
        // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
        // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1
        // Estimate the optimum number of times to use the argument reduction.
        len = x.d.length;
        if (len < 32) {
            k = Math.ceil(len / 3);
            y = (1 / tinyPow(4, k)).toString();
        } else {
            k = 16;
            y = '2.3283064365386962890625e-10';
        }
        Ctor.precision += k;
        x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
        // Reverse argument reduction
        for(var i = k; i--;){
            var cos2x = x.times(x);
            x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
        }
        Ctor.precision -= k;
        return x;
    }
    /*
   * Perform division in the specified base.
   */ var divide = function() {
        // Assumes non-zero x and k, and hence non-zero result.
        function multiplyInteger(x, k, base) {
            var temp, carry = 0, i = x.length;
            for(x = x.slice(); i--;){
                temp = x[i] * k + carry;
                x[i] = temp % base | 0;
                carry = temp / base | 0;
            }
            if (carry) x.unshift(carry);
            return x;
        }
        function compare(a, b, aL, bL) {
            var i, r;
            if (aL != bL) r = aL > bL ? 1 : -1;
            else {
                for(i = r = 0; i < aL; i++)if (a[i] != b[i]) {
                    r = a[i] > b[i] ? 1 : -1;
                    break;
                }
            }
            return r;
        }
        function subtract(a, b, aL, base) {
            var i = 0;
            // Subtract b from a.
            for(; aL--;){
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
            }
            // Remove leading zeros.
            for(; !a[0] && a.length > 1;)a.shift();
        }
        return function(x, y, pr, rm, dp, base) {
            var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
            // Either NaN, Infinity or 0?
            if (!xd || !xd[0] || !yd || !yd[0]) return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
            xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
            if (base) {
                logBase = 1;
                e = x.e - y.e;
            } else {
                base = BASE;
                logBase = LOG_BASE;
                e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
            }
            yL = yd.length;
            xL = xd.length;
            q = new Ctor(sign);
            qd = q.d = [];
            // Result exponent may be one less than e.
            // The digit array of a Decimal from toStringBinary may have trailing zeros.
            for(i = 0; yd[i] == (xd[i] || 0); i++);
            if (yd[i] > (xd[i] || 0)) e--;
            if (pr == null) {
                sd = pr = Ctor.precision;
                rm = Ctor.rounding;
            } else if (dp) sd = pr + (x.e - y.e) + 1;
            else sd = pr;
            if (sd < 0) {
                qd.push(1);
                more = true;
            } else {
                // Convert precision in number of base 10 digits to base 1e7 digits.
                sd = sd / logBase + 2 | 0;
                i = 0;
                // divisor < 1e7
                if (yL == 1) {
                    k = 0;
                    yd = yd[0];
                    sd++;
                    // k is the carry.
                    for(; (i < xL || k) && sd--; i++){
                        t = k * base + (xd[i] || 0);
                        qd[i] = t / yd | 0;
                        k = t % yd | 0;
                    }
                    more = k || i < xL;
                // divisor >= 1e7
                } else {
                    // Normalise xd and yd so highest order digit of yd is >= base/2
                    k = base / (yd[0] + 1) | 0;
                    if (k > 1) {
                        yd = multiplyInteger(yd, k, base);
                        xd = multiplyInteger(xd, k, base);
                        yL = yd.length;
                        xL = xd.length;
                    }
                    xi = yL;
                    rem = xd.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL;)rem[remL++] = 0;
                    yz = yd.slice();
                    yz.unshift(0);
                    yd0 = yd[0];
                    if (yd[1] >= base / 2) ++yd0;
                    do {
                        k = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yd, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, k.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // k will be how many times the divisor goes into the current remainder.
                            k = rem0 / yd0 | 0;
                            //  Algorithm:
                            //  1. product = divisor * trial digit (k)
                            //  2. if product > remainder: product -= divisor, k--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, k++
                            if (k > 1) {
                                if (k >= base) k = base - 1;
                                // product = divisor * trial digit.
                                prod = multiplyInteger(yd, k, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                cmp = compare(prod, rem, prodL, remL);
                                // product > remainder.
                                if (cmp == 1) {
                                    k--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                                }
                            } else {
                                // cmp is -1.
                                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                                if (k == 0) cmp = k = 1;
                                prod = yd.slice();
                            }
                            prodL = prod.length;
                            if (prodL < remL) prod.unshift(0);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            // If product was < previous remainder.
                            if (cmp == -1) {
                                remL = rem.length;
                                // Compare divisor and new remainder.
                                cmp = compare(yd, rem, yL, remL);
                                // If divisor < new remainder, subtract divisor from remainder.
                                if (cmp < 1) {
                                    k++;
                                    // Subtract divisor from remainder.
                                    subtract(rem, yL < remL ? yz : yd, remL, base);
                                }
                            }
                            remL = rem.length;
                        } else if (cmp === 0) {
                            k++;
                            rem = [
                                0
                            ];
                        } // if cmp === 1, k will be 0
                        // Add the next digit, k, to the result array.
                        qd[i++] = k;
                        // Update the remainder.
                        if (cmp && rem[0]) rem[remL++] = xd[xi] || 0;
                        else {
                            rem = [
                                xd[xi]
                            ];
                            remL = 1;
                        }
                    }while ((xi++ < xL || rem[0] !== void 0) && sd--);
                    more = rem[0] !== void 0;
                }
                // Leading zero?
                if (!qd[0]) qd.shift();
            }
            // logBase is 1 when divide is being used for base conversion.
            if (logBase == 1) {
                q.e = e;
                inexact = more;
            } else {
                // To calculate q.e, first get the number of digits of qd[0].
                for(i = 1, k = qd[0]; k >= 10; k /= 10)i++;
                q.e = i + e * logBase - 1;
                finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
            }
            return q;
        };
    }();
    /*
   * Round `x` to `sd` significant digits using rounding mode `rm`.
   * Check for over/under-flow.
   */ function finalise(x, sd, rm, isTruncated) {
        var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
        // Don't round if sd is null or undefined.
        out: if (sd != null) {
            xd = x.d;
            // Infinity/NaN.
            if (!xd) return x;
            // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
            // w: the word of xd containing rd, a base 1e7 number.
            // xdi: the index of w within xd.
            // digits: the number of digits of w.
            // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
            // they had leading zeros)
            // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).
            // Get the length of the first word of the digits array xd.
            for(digits = 1, k = xd[0]; k >= 10; k /= 10)digits++;
            i = sd - digits;
            // Is the rounding digit in the first word of xd?
            if (i < 0) {
                i += LOG_BASE;
                j = sd;
                w = xd[xdi = 0];
                // Get the rounding digit at index j of w.
                rd = w / mathpow(10, digits - j - 1) % 10 | 0;
            } else {
                xdi = Math.ceil((i + 1) / LOG_BASE);
                k = xd.length;
                if (xdi >= k) {
                    if (isTruncated) {
                        // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
                        for(; k++ <= xdi;)xd.push(0);
                        w = rd = 0;
                        digits = 1;
                        i %= LOG_BASE;
                        j = i - LOG_BASE + 1;
                    } else break out;
                } else {
                    w = k = xd[xdi];
                    // Get the number of digits of w.
                    for(digits = 1; k >= 10; k /= 10)digits++;
                    // Get the index of rd within w.
                    i %= LOG_BASE;
                    // Get the index of rd within w, adjusted for leading zeros.
                    // The number of leading zeros of w is given by LOG_BASE - digits.
                    j = i - LOG_BASE + digits;
                    // Get the rounding digit at index j of w.
                    rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
                }
            }
            // Are there any non-zero digits after the rounding digit?
            isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
            // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
            // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
            // will give 714.
            roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
            if (sd < 1 || !xd[0]) {
                xd.length = 0;
                if (roundUp) {
                    // Convert sd to decimal places.
                    sd -= x.e + 1;
                    // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                    xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
                    x.e = -sd || 0;
                } else // Zero.
                xd[0] = x.e = 0;
                return x;
            }
            // Remove excess digits.
            if (i == 0) {
                xd.length = xdi;
                k = 1;
                xdi--;
            } else {
                xd.length = xdi + 1;
                k = mathpow(10, LOG_BASE - i);
                // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                // j > 0 means i > number of leading zeros of w.
                xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
            }
            if (roundUp) {
                for(;;)// Is the digit to be rounded up in the first word of xd?
                if (xdi == 0) {
                    // i will be the length of xd[0] before k is added.
                    for(i = 1, j = xd[0]; j >= 10; j /= 10)i++;
                    j = xd[0] += k;
                    for(k = 1; j >= 10; j /= 10)k++;
                    // if i != k the length has increased.
                    if (i != k) {
                        x.e++;
                        if (xd[0] == BASE) xd[0] = 1;
                    }
                    break;
                } else {
                    xd[xdi] += k;
                    if (xd[xdi] != BASE) break;
                    xd[xdi--] = 0;
                    k = 1;
                }
            }
            // Remove trailing zeros.
            for(i = xd.length; xd[--i] === 0;)xd.pop();
        }
        if (external) {
            // Overflow?
            if (x.e > Ctor.maxE) {
                // Infinity.
                x.d = null;
                x.e = NaN;
            // Underflow?
            } else if (x.e < Ctor.minE) {
                // Zero.
                x.e = 0;
                x.d = [
                    0
                ];
            // Ctor.underflow = true;
            } // else Ctor.underflow = false;
        }
        return x;
    }
    function finiteToString(x, isExp, sd) {
        if (!x.isFinite()) return nonFiniteToString(x);
        var k, e = x.e, str = digitsToString(x.d), len = str.length;
        if (isExp) {
            if (sd && (k = sd - len) > 0) str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
            else if (len > 1) str = str.charAt(0) + '.' + str.slice(1);
            str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
        } else if (e < 0) {
            str = '0.' + getZeroString(-e - 1) + str;
            if (sd && (k = sd - len) > 0) str += getZeroString(k);
        } else if (e >= len) {
            str += getZeroString(e + 1 - len);
            if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
        } else {
            if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
            if (sd && (k = sd - len) > 0) {
                if (e + 1 === len) str += '.';
                str += getZeroString(k);
            }
        }
        return str;
    }
    // Calculate the base 10 exponent from the base 1e7 exponent.
    function getBase10Exponent(digits, e) {
        var w = digits[0];
        // Add the number of digits of the first word of the digits array.
        for(e *= LOG_BASE; w >= 10; w /= 10)e++;
        return e;
    }
    function getLn10(Ctor, sd, pr) {
        if (sd > LN10_PRECISION) {
            // Reset global state in case the exception is caught.
            external = true;
            if (pr) Ctor.precision = pr;
            throw Error(precisionLimitExceeded);
        }
        return finalise(new Ctor(LN10), sd, 1, true);
    }
    function getPi(Ctor, sd, rm) {
        if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
        return finalise(new Ctor(PI), sd, rm, true);
    }
    function getPrecision(digits) {
        var w = digits.length - 1, len = w * LOG_BASE + 1;
        w = digits[w];
        // If non-zero...
        if (w) {
            // Subtract the number of trailing zeros of the last word.
            for(; w % 10 == 0; w /= 10)len--;
            // Add the number of digits of the first word.
            for(w = digits[0]; w >= 10; w /= 10)len++;
        }
        return len;
    }
    function getZeroString(k) {
        var zs = '';
        for(; k--;)zs += '0';
        return zs;
    }
    /*
   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
   * integer of type number.
   *
   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
   *
   */ function intPow(Ctor, x, n, pr) {
        var isTruncated, r = new Ctor(1), // Max n of 9007199254740991 takes 53 loop iterations.
        // Maximum digits array length; leaves [28, 34] guard digits.
        k = Math.ceil(pr / LOG_BASE + 4);
        external = false;
        for(;;){
            if (n % 2) {
                r = r.times(x);
                if (truncate(r.d, k)) isTruncated = true;
            }
            n = mathfloor(n / 2);
            if (n === 0) {
                // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
                n = r.d.length - 1;
                if (isTruncated && r.d[n] === 0) ++r.d[n];
                break;
            }
            x = x.times(x);
            truncate(x.d, k);
        }
        external = true;
        return r;
    }
    function isOdd(n) {
        return n.d[n.d.length - 1] & 1;
    }
    /*
   * Handle `max` (`n` is -1) and `min` (`n` is 1).
   */ function maxOrMin(Ctor, args, n) {
        var k, y, x = new Ctor(args[0]), i = 0;
        for(; ++i < args.length;){
            y = new Ctor(args[i]);
            // NaN?
            if (!y.s) {
                x = y;
                break;
            }
            k = x.cmp(y);
            if (k === n || k === 0 && x.s === n) x = y;
        }
        return x;
    }
    /*
   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
   * digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(Infinity)  = Infinity
   *  exp(-Infinity) = 0
   *  exp(NaN)       = NaN
   *  exp(±0)        = 1
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   *  The result will always be correctly rounded.
   *
   */ function naturalExponential(x, sd) {
        var denominator, guard, j, pow, sum, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
        // 0/NaN/Infinity?
        if (!x.d || !x.d[0] || x.e > 17) return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
        if (sd == null) {
            external = false;
            wpr = pr;
        } else wpr = sd;
        t = new Ctor(0.03125);
        // while abs(x) >= 0.1
        while(x.e > -2){
            // x = x / 2^5
            x = x.times(t);
            k += 5;
        }
        // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
        // necessary to ensure the first 4 rounding digits are correct.
        guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
        wpr += guard;
        denominator = pow = sum = new Ctor(1);
        Ctor.precision = wpr;
        for(;;){
            pow = finalise(pow.times(x), wpr, 1);
            denominator = denominator.times(++i);
            t = sum.plus(divide(pow, denominator, wpr, 1));
            if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
                j = k;
                while(j--)sum = finalise(sum.times(sum), wpr, 1);
                // Check to see if the first 4 rounding digits are [49]999.
                // If so, repeat the summation with a higher precision, otherwise
                // e.g. with precision: 18, rounding: 1
                // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
                // `wpr - guard` is the index of first rounding digit.
                if (sd == null) {
                    if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
                        Ctor.precision = wpr += 10;
                        denominator = pow = t = new Ctor(1);
                        i = 0;
                        rep++;
                    } else return finalise(sum, Ctor.precision = pr, rm, external = true);
                } else {
                    Ctor.precision = pr;
                    return sum;
                }
            }
            sum = t;
        }
    }
    /*
   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
   * digits.
   *
   *  ln(-n)        = NaN
   *  ln(0)         = -Infinity
   *  ln(-0)        = -Infinity
   *  ln(1)         = 0
   *  ln(Infinity)  = Infinity
   *  ln(-Infinity) = NaN
   *  ln(NaN)       = NaN
   *
   *  ln(n) (n != 1) is non-terminating.
   *
   */ function naturalLogarithm(y, sd) {
        var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
        // Is x negative or Infinity, NaN, 0 or 1?
        if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
        if (sd == null) {
            external = false;
            wpr = pr;
        } else wpr = sd;
        Ctor.precision = wpr += guard;
        c = digitsToString(xd);
        c0 = c.charAt(0);
        if (Math.abs(e = x.e) < 1.5e15) {
            // Argument reduction.
            // The series converges faster the closer the argument is to 1, so using
            // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
            // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
            // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
            // later be divided by this number, then separate out the power of 10 using
            // ln(a*10^b) = ln(a) + b*ln(10).
            // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
            //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
            // max n is 6 (gives 0.7 - 1.3)
            while(c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3){
                x = x.times(y);
                c = digitsToString(x.d);
                c0 = c.charAt(0);
                n++;
            }
            e = x.e;
            if (c0 > 1) {
                x = new Ctor('0.' + c);
                e++;
            } else x = new Ctor(c0 + '.' + c.slice(1));
        } else {
            // The argument reduction method above may result in overflow if the argument y is a massive
            // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
            // function using ln(x*10^e) = ln(x) + e*ln(10).
            t = getLn10(Ctor, wpr + 2, pr).times(e + '');
            x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
            Ctor.precision = pr;
            return sd == null ? finalise(x, pr, rm, external = true) : x;
        }
        // x1 is x reduced to a value near 1.
        x1 = x;
        // Taylor series.
        // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
        // where x = (y - 1)/(y + 1)    (|x| < 1)
        sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
        x2 = finalise(x.times(x), wpr, 1);
        denominator = 3;
        for(;;){
            numerator = finalise(numerator.times(x2), wpr, 1);
            t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));
            if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
                sum = sum.times(2);
                // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
                // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
                if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
                sum = divide(sum, new Ctor(n), wpr, 1);
                // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
                // been repeated previously) and the first 4 rounding digits 9999?
                // If so, restart the summation with a higher precision, otherwise
                // e.g. with precision: 12, rounding: 1
                // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
                // `wpr - guard` is the index of first rounding digit.
                if (sd == null) {
                    if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
                        Ctor.precision = wpr += guard;
                        t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
                        x2 = finalise(x.times(x), wpr, 1);
                        denominator = rep = 1;
                    } else return finalise(sum, Ctor.precision = pr, rm, external = true);
                } else {
                    Ctor.precision = pr;
                    return sum;
                }
            }
            sum = t;
            denominator += 2;
        }
    }
    // ±Infinity, NaN.
    function nonFiniteToString(x) {
        // Unsigned.
        return String(x.s * x.s / 0);
    }
    /*
   * Parse the value of a new Decimal `x` from string `str`.
   */ function parseDecimal(x, str) {
        var e, i, len;
        // TODO BigInt str: no need to check for decimal point, exponential form or leading zeros.
        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {
            // Determine exponent.
            if (e < 0) e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
        } else if (e < 0) // Integer.
        e = str.length;
        // Determine leading zeros.
        for(i = 0; str.charCodeAt(i) === 48; i++);
        // Determine trailing zeros.
        for(len = str.length; str.charCodeAt(len - 1) === 48; --len);
        str = str.slice(i, len);
        if (str) {
            len -= i;
            x.e = e = e - i - 1;
            x.d = [];
            // Transform base
            // e is the base 10 exponent.
            // i is where to slice str to get the first word of the digits array.
            i = (e + 1) % LOG_BASE;
            if (e < 0) i += LOG_BASE;
            if (i < len) {
                if (i) x.d.push(+str.slice(0, i));
                for(len -= LOG_BASE; i < len;)x.d.push(+str.slice(i, i += LOG_BASE));
                str = str.slice(i);
                i = LOG_BASE - str.length;
            } else i -= len;
            for(; i--;)str += '0';
            x.d.push(+str);
            if (external) {
                // Overflow?
                if (x.e > x.constructor.maxE) {
                    // Infinity.
                    x.d = null;
                    x.e = NaN;
                // Underflow?
                } else if (x.e < x.constructor.minE) {
                    // Zero.
                    x.e = 0;
                    x.d = [
                        0
                    ];
                // x.constructor.underflow = true;
                } // else x.constructor.underflow = false;
            }
        } else {
            // Zero.
            x.e = 0;
            x.d = [
                0
            ];
        }
        return x;
    }
    /*
   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
   */ function parseOther(x, str) {
        var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
        if (str.indexOf('_') > -1) {
            str = str.replace(/(\d)_(?=\d)/g, '$1');
            if (isDecimal.test(str)) return parseDecimal(x, str);
        } else if (str === 'Infinity' || str === 'NaN') {
            if (!+str) x.s = NaN;
            x.e = NaN;
            x.d = null;
            return x;
        }
        if (isHex.test(str)) {
            base = 16;
            str = str.toLowerCase();
        } else if (isBinary.test(str)) base = 2;
        else if (isOctal.test(str)) base = 8;
        else throw Error(invalidArgument + str);
        // Is there a binary exponent part?
        i = str.search(/p/i);
        if (i > 0) {
            p = +str.slice(i + 1);
            str = str.substring(2, i);
        } else str = str.slice(2);
        // Convert `str` as an integer then divide the result by `base` raised to a power such that the
        // fraction part will be restored.
        i = str.indexOf('.');
        isFloat = i >= 0;
        Ctor = x.constructor;
        if (isFloat) {
            str = str.replace('.', '');
            len = str.length;
            i = len - i;
            // log[10](16) = 1.2041... , log[10](88) = 1.9444....
            divisor = intPow(Ctor, new Ctor(base), i, i * 2);
        }
        xd = convertBase(str, base, BASE);
        xe = xd.length - 1;
        // Remove trailing zeros.
        for(i = xe; xd[i] === 0; --i)xd.pop();
        if (i < 0) return new Ctor(x.s * 0);
        x.e = getBase10Exponent(xd, xe);
        x.d = xd;
        external = false;
        // At what precision to perform the division to ensure exact conversion?
        // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
        // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
        // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
        // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
        // Therefore using 4 * the number of digits of str will always be enough.
        if (isFloat) x = divide(x, divisor, len * 4);
        // Multiply by the binary exponent part if present.
        if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
        external = true;
        return x;
    }
    /*
   * sin(x) = x - x^3/3! + x^5/5! - ...
   * |x| < pi/2
   *
   */ function sine(Ctor, x) {
        var k, len = x.d.length;
        if (len < 3) return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
        // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
        // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
        // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))
        // Estimate the optimum number of times to use the argument reduction.
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x);
        // Reverse argument reduction
        var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for(; k--;){
            sin2_x = x.times(x);
            x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
        }
        return x;
    }
    // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
        var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
        external = false;
        x2 = x.times(x);
        u = new Ctor(y);
        for(;;){
            t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
            u = isHyperbolic ? y.plus(t) : y.minus(t);
            y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
            t = u.plus(y);
            if (t.d[k] !== void 0) {
                for(j = k; t.d[j] === u.d[j] && j--;);
                if (j == -1) break;
            }
            j = u;
            u = y;
            y = t;
            t = j;
            i++;
        }
        external = true;
        t.d.length = k + 1;
        return t;
    }
    // Exponent e must be positive and non-zero.
    function tinyPow(b, e) {
        var n = b;
        while(--e)n *= b;
        return n;
    }
    // Return the absolute value of `x` reduced to less than or equal to half pi.
    function toLessThanHalfPi(Ctor, x) {
        var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
        x = x.abs();
        if (x.lte(halfPi)) {
            quadrant = isNeg ? 4 : 1;
            return x;
        }
        t = x.divToInt(pi);
        if (t.isZero()) quadrant = isNeg ? 3 : 2;
        else {
            x = x.minus(t.times(pi));
            // 0 <= x < pi
            if (x.lte(halfPi)) {
                quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
                return x;
            }
            quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
        }
        return x.minus(pi).abs();
    }
    /*
   * Return the value of Decimal `x` as a string in base `baseOut`.
   *
   * If the optional `sd` argument is present include a binary exponent suffix.
   */ function toStringBinary(x, baseOut, sd, rm) {
        var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
        if (isExp) {
            checkInt32(sd, 1, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;
            else checkInt32(rm, 0, 8);
        } else {
            sd = Ctor.precision;
            rm = Ctor.rounding;
        }
        if (!x.isFinite()) str = nonFiniteToString(x);
        else {
            str = finiteToString(x);
            i = str.indexOf('.');
            // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
            // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
            // minBinaryExponent = floor(decimalExponent * log[2](10))
            // log[2](10) = 3.321928094887362347870319429489390175864
            if (isExp) {
                base = 2;
                if (baseOut == 16) sd = sd * 4 - 3;
                else if (baseOut == 8) sd = sd * 3 - 2;
            } else base = baseOut;
            // Convert the number as an integer then divide the result by its base raised to a power such
            // that the fraction part will be restored.
            // Non-integer.
            if (i >= 0) {
                str = str.replace('.', '');
                y = new Ctor(1);
                y.e = str.length - i;
                y.d = convertBase(finiteToString(y), 10, base);
                y.e = y.d.length;
            }
            xd = convertBase(str, 10, base);
            e = len = xd.length;
            // Remove trailing zeros.
            for(; xd[--len] == 0;)xd.pop();
            if (!xd[0]) str = isExp ? '0p+0' : '0';
            else {
                if (i < 0) e--;
                else {
                    x = new Ctor(x);
                    x.d = xd;
                    x.e = e;
                    x = divide(x, y, sd, rm, 0, base);
                    xd = x.d;
                    e = x.e;
                    roundUp = inexact;
                }
                // The rounding digit, i.e. the digit after the digit that may be rounded up.
                i = xd[sd];
                k = base / 2;
                roundUp = roundUp || xd[sd + 1] !== void 0;
                roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
                xd.length = sd;
                if (roundUp) // Rounding up may mean the previous digit has to be rounded up and so on.
                for(; ++xd[--sd] > base - 1;){
                    xd[sd] = 0;
                    if (!sd) {
                        ++e;
                        xd.unshift(1);
                    }
                }
                // Determine trailing zeros.
                for(len = xd.length; !xd[len - 1]; --len);
                // E.g. [4, 11, 15] becomes 4bf.
                for(i = 0, str = ''; i < len; i++)str += NUMERALS.charAt(xd[i]);
                // Add binary exponent suffix?
                if (isExp) {
                    if (len > 1) {
                        if (baseOut == 16 || baseOut == 8) {
                            i = baseOut == 16 ? 4 : 3;
                            for(--len; len % i; len++)str += '0';
                            xd = convertBase(str, base, baseOut);
                            for(len = xd.length; !xd[len - 1]; --len);
                            // xd[0] will always be be 1
                            for(i = 1, str = '1.'; i < len; i++)str += NUMERALS.charAt(xd[i]);
                        } else str = str.charAt(0) + '.' + str.slice(1);
                    }
                    str = str + (e < 0 ? 'p' : 'p+') + e;
                } else if (e < 0) {
                    for(; ++e;)str = '0' + str;
                    str = '0.' + str;
                } else {
                    if (++e > len) for(e -= len; e--;)str += '0';
                    else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
                }
            }
            str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
        }
        return x.s < 0 ? '-' + str : str;
    }
    // Does not strip trailing zeros.
    function truncate(arr, len) {
        if (arr.length > len) {
            arr.length = len;
            return true;
        }
    }
    // Decimal methods
    /*
   *  abs
   *  acos
   *  acosh
   *  add
   *  asin
   *  asinh
   *  atan
   *  atanh
   *  atan2
   *  cbrt
   *  ceil
   *  clamp
   *  clone
   *  config
   *  cos
   *  cosh
   *  div
   *  exp
   *  floor
   *  hypot
   *  ln
   *  log
   *  log2
   *  log10
   *  max
   *  min
   *  mod
   *  mul
   *  pow
   *  random
   *  round
   *  set
   *  sign
   *  sin
   *  sinh
   *  sqrt
   *  sub
   *  sum
   *  tan
   *  tanh
   *  trunc
   */ /*
   * Return a new Decimal whose value is the absolute value of `x`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function abs(x) {
        return new this(x).abs();
    }
    /*
   * Return a new Decimal whose value is the arccosine in radians of `x`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function acos(x) {
        return new this(x).acos();
    }
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function acosh(x) {
        return new this(x).acosh();
    }
    /*
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   * y {number|string|bigint|Decimal}
   *
   */ function add(x, y) {
        return new this(x).plus(y);
    }
    /*
   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function asin(x) {
        return new this(x).asin();
    }
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function asinh(x) {
        return new this(x).asinh();
    }
    /*
   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function atan(x) {
        return new this(x).atan();
    }
    /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function atanh(x) {
        return new this(x).atanh();
    }
    /*
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi, pi]
   *
   * y {number|string|bigint|Decimal} The y-coordinate.
   * x {number|string|bigint|Decimal} The x-coordinate.
   *
   * atan2(±0, -0)               = ±pi
   * atan2(±0, +0)               = ±0
   * atan2(±0, -x)               = ±pi for x > 0
   * atan2(±0, x)                = ±0 for x > 0
   * atan2(-y, ±0)               = -pi/2 for y > 0
   * atan2(y, ±0)                = pi/2 for y > 0
   * atan2(±y, -Infinity)        = ±pi for finite y > 0
   * atan2(±y, +Infinity)        = ±0 for finite y > 0
   * atan2(±Infinity, x)         = ±pi/2 for finite x
   * atan2(±Infinity, -Infinity) = ±3*pi/4
   * atan2(±Infinity, +Infinity) = ±pi/4
   * atan2(NaN, x) = NaN
   * atan2(y, NaN) = NaN
   *
   */ function atan2(y, x) {
        y = new this(y);
        x = new this(x);
        var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
        // Either NaN
        if (!y.s || !x.s) r = new this(NaN);
        else if (!y.d && !x.d) {
            r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
            r.s = y.s;
        // x is ±Infinity or y is ±0
        } else if (!x.d || y.isZero()) {
            r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
            r.s = y.s;
        // y is ±Infinity or x is ±0
        } else if (!y.d || x.isZero()) {
            r = getPi(this, wpr, 1).times(0.5);
            r.s = y.s;
        // Both non-zero and finite
        } else if (x.s < 0) {
            this.precision = wpr;
            this.rounding = 1;
            r = this.atan(divide(y, x, wpr, 1));
            x = getPi(this, wpr, 1);
            this.precision = pr;
            this.rounding = rm;
            r = y.s < 0 ? r.minus(x) : r.plus(x);
        } else r = this.atan(divide(y, x, wpr, 1));
        return r;
    }
    /*
   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function cbrt(x) {
        return new this(x).cbrt();
    }
    /*
   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function ceil(x) {
        return finalise(x = new this(x), x.e + 1, 2);
    }
    /*
   * Return a new Decimal whose value is `x` clamped to the range delineated by `min` and `max`.
   *
   * x {number|string|bigint|Decimal}
   * min {number|string|bigint|Decimal}
   * max {number|string|bigint|Decimal}
   *
   */ function clamp(x, min, max) {
        return new this(x).clamp(min, max);
    }
    /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */ function config(obj) {
        if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
        var i, p, v, useDefaults = obj.defaults === true, ps = [
            'precision',
            1,
            MAX_DIGITS,
            'rounding',
            0,
            8,
            'toExpNeg',
            -EXP_LIMIT,
            0,
            'toExpPos',
            0,
            EXP_LIMIT,
            'maxE',
            0,
            EXP_LIMIT,
            'minE',
            -EXP_LIMIT,
            0,
            'modulo',
            0,
            9
        ];
        for(i = 0; i < ps.length; i += 3){
            if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
            if ((v = obj[p]) !== void 0) {
                if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
                else throw Error(invalidArgument + p + ': ' + v);
            }
        }
        if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
            if (v === true || v === false || v === 0 || v === 1) {
                if (v) {
                    if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[p] = true;
                    else throw Error(cryptoUnavailable);
                } else this[p] = false;
            } else throw Error(invalidArgument + p + ': ' + v);
        }
        return this;
    }
    /*
   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function cos(x) {
        return new this(x).cos();
    }
    /*
   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function cosh(x) {
        return new this(x).cosh();
    }
    /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */ function clone(obj) {
        var i, p, ps;
        /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * v {number|string|bigint|Decimal} A numeric value.
     *
     */ function Decimal(v) {
            var e, i, t, x = this;
            // Decimal called without new.
            if (!(x instanceof Decimal)) return new Decimal(v);
            // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
            // which points to Object.
            x.constructor = Decimal;
            if (isDecimalInstance(v)) {
                x.s = v.s;
                if (external) {
                    if (!v.d || v.e > Decimal.maxE) {
                        // Infinity.
                        x.e = NaN;
                        x.d = null;
                    } else if (v.e < Decimal.minE) {
                        // Zero.
                        x.e = 0;
                        x.d = [
                            0
                        ];
                    } else {
                        x.e = v.e;
                        x.d = v.d.slice();
                    }
                } else {
                    x.e = v.e;
                    x.d = v.d ? v.d.slice() : v.d;
                }
                return;
            }
            t = typeof v;
            if (t === 'number') {
                if (v === 0) {
                    x.s = 1 / v < 0 ? -1 : 1;
                    x.e = 0;
                    x.d = [
                        0
                    ];
                    return;
                }
                if (v < 0) {
                    v = -v;
                    x.s = -1;
                } else x.s = 1;
                // Fast path for small integers.
                if (v === ~~v && v < 1e7) {
                    for(e = 0, i = v; i >= 10; i /= 10)e++;
                    if (external) {
                        if (e > Decimal.maxE) {
                            x.e = NaN;
                            x.d = null;
                        } else if (e < Decimal.minE) {
                            x.e = 0;
                            x.d = [
                                0
                            ];
                        } else {
                            x.e = e;
                            x.d = [
                                v
                            ];
                        }
                    } else {
                        x.e = e;
                        x.d = [
                            v
                        ];
                    }
                    return;
                }
                // Infinity or NaN?
                if (v * 0 !== 0) {
                    if (!v) x.s = NaN;
                    x.e = NaN;
                    x.d = null;
                    return;
                }
                return parseDecimal(x, v.toString());
            }
            if (t === 'string') {
                if ((i = v.charCodeAt(0)) === 45) {
                    v = v.slice(1);
                    x.s = -1;
                } else {
                    if (i === 43) v = v.slice(1); // plus sign
                    x.s = 1;
                }
                return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
            }
            if (t === 'bigint') {
                if (v < 0) {
                    v = -v;
                    x.s = -1;
                } else x.s = 1;
                return parseDecimal(x, v.toString());
            }
            throw Error(invalidArgument + v);
        }
        Decimal.prototype = P;
        Decimal.ROUND_UP = 0;
        Decimal.ROUND_DOWN = 1;
        Decimal.ROUND_CEIL = 2;
        Decimal.ROUND_FLOOR = 3;
        Decimal.ROUND_HALF_UP = 4;
        Decimal.ROUND_HALF_DOWN = 5;
        Decimal.ROUND_HALF_EVEN = 6;
        Decimal.ROUND_HALF_CEIL = 7;
        Decimal.ROUND_HALF_FLOOR = 8;
        Decimal.EUCLID = 9;
        Decimal.config = Decimal.set = config;
        Decimal.clone = clone;
        Decimal.isDecimal = isDecimalInstance;
        Decimal.abs = abs;
        Decimal.acos = acos;
        Decimal.acosh = acosh; // ES6
        Decimal.add = add;
        Decimal.asin = asin;
        Decimal.asinh = asinh; // ES6
        Decimal.atan = atan;
        Decimal.atanh = atanh; // ES6
        Decimal.atan2 = atan2;
        Decimal.cbrt = cbrt; // ES6
        Decimal.ceil = ceil;
        Decimal.clamp = clamp;
        Decimal.cos = cos;
        Decimal.cosh = cosh; // ES6
        Decimal.div = div;
        Decimal.exp = exp;
        Decimal.floor = floor;
        Decimal.hypot = hypot; // ES6
        Decimal.ln = ln;
        Decimal.log = log;
        Decimal.log10 = log10; // ES6
        Decimal.log2 = log2; // ES6
        Decimal.max = max;
        Decimal.min = min;
        Decimal.mod = mod;
        Decimal.mul = mul;
        Decimal.pow = pow;
        Decimal.random = random;
        Decimal.round = round;
        Decimal.sign = sign; // ES6
        Decimal.sin = sin;
        Decimal.sinh = sinh; // ES6
        Decimal.sqrt = sqrt;
        Decimal.sub = sub;
        Decimal.sum = sum;
        Decimal.tan = tan;
        Decimal.tanh = tanh; // ES6
        Decimal.trunc = trunc; // ES6
        if (obj === void 0) obj = {};
        if (obj) {
            if (obj.defaults !== true) {
                ps = [
                    'precision',
                    'rounding',
                    'toExpNeg',
                    'toExpPos',
                    'maxE',
                    'minE',
                    'modulo',
                    'crypto'
                ];
                for(i = 0; i < ps.length;)if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
            }
        }
        Decimal.config(obj);
        return Decimal;
    }
    /*
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   * y {number|string|bigint|Decimal}
   *
   */ function div(x, y) {
        return new this(x).div(y);
    }
    /*
   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} The power to which to raise the base of the natural log.
   *
   */ function exp(x) {
        return new this(x).exp();
    }
    /*
   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function floor(x) {
        return finalise(x = new this(x), x.e + 1, 3);
    }
    /*
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
   *
   * arguments {number|string|bigint|Decimal}
   *
   */ function hypot() {
        var i, n, t = new this(0);
        external = false;
        for(i = 0; i < arguments.length;){
            n = new this(arguments[i++]);
            if (!n.d) {
                if (n.s) {
                    external = true;
                    return new this(1 / 0);
                }
                t = n;
            } else if (t.d) t = t.plus(n.times(n));
        }
        external = true;
        return t.sqrt();
    }
    /*
   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
   * otherwise return false.
   *
   */ function isDecimalInstance(obj) {
        return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
    }
    /*
   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function ln(x) {
        return new this(x).ln();
    }
    /*
   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * log[y](x)
   *
   * x {number|string|bigint|Decimal} The argument of the logarithm.
   * y {number|string|bigint|Decimal} The base of the logarithm.
   *
   */ function log(x, y) {
        return new this(x).log(y);
    }
    /*
   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function log2(x) {
        return new this(x).log(2);
    }
    /*
   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function log10(x) {
        return new this(x).log(10);
    }
    /*
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * arguments {number|string|bigint|Decimal}
   *
   */ function max() {
        return maxOrMin(this, arguments, -1);
    }
    /*
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * arguments {number|string|bigint|Decimal}
   *
   */ function min() {
        return maxOrMin(this, arguments, 1);
    }
    /*
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   * y {number|string|bigint|Decimal}
   *
   */ function mod(x, y) {
        return new this(x).mod(y);
    }
    /*
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   * y {number|string|bigint|Decimal}
   *
   */ function mul(x, y) {
        return new this(x).mul(y);
    }
    /*
   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} The base.
   * y {number|string|bigint|Decimal} The exponent.
   *
   */ function pow(x, y) {
        return new this(x).pow(y);
    }
    /*
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
   * are produced).
   *
   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   *
   */ function random(sd) {
        var d, e, k, n, i = 0, r = new this(1), rd = [];
        if (sd === void 0) sd = this.precision;
        else checkInt32(sd, 1, MAX_DIGITS);
        k = Math.ceil(sd / LOG_BASE);
        if (!this.crypto) for(; i < k;)rd[i++] = Math.random() * 1e7 | 0;
        else if (crypto.getRandomValues) {
            d = crypto.getRandomValues(new Uint32Array(k));
            for(; i < k;){
                n = d[i];
                // 0 <= n < 4294967296
                // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
                if (n >= 4.29e9) d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
                else // 0 <= n <= 4289999999
                // 0 <= (n % 1e7) <= 9999999
                rd[i++] = n % 1e7;
            }
        // Node.js supporting crypto.randomBytes.
        } else if (crypto.randomBytes) {
            // buffer
            d = crypto.randomBytes(k *= 4);
            for(; i < k;){
                // 0 <= n < 2147483648
                n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);
                // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
                if (n >= 2.14e9) crypto.randomBytes(4).copy(d, i);
                else {
                    // 0 <= n <= 2139999999
                    // 0 <= (n % 1e7) <= 9999999
                    rd.push(n % 1e7);
                    i += 4;
                }
            }
            i = k / 4;
        } else throw Error(cryptoUnavailable);
        k = rd[--i];
        sd %= LOG_BASE;
        // Convert trailing digits to zeros according to sd.
        if (k && sd) {
            n = mathpow(10, LOG_BASE - sd);
            rd[i] = (k / n | 0) * n;
        }
        // Remove trailing words which are zero.
        for(; rd[i] === 0; i--)rd.pop();
        // Zero?
        if (i < 0) {
            e = 0;
            rd = [
                0
            ];
        } else {
            e = -1;
            // Remove leading words which are zero and adjust exponent accordingly.
            for(; rd[0] === 0; e -= LOG_BASE)rd.shift();
            // Count the digits of the first word of rd to determine leading zeros.
            for(k = 1, n = rd[0]; n >= 10; n /= 10)k++;
            // Adjust the exponent for leading zeros of the first word of rd.
            if (k < LOG_BASE) e -= LOG_BASE - k;
        }
        r.e = e;
        r.d = rd;
        return r;
    }
    /*
   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
   *
   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
   *
   * x {number|string|bigint|Decimal}
   *
   */ function round(x) {
        return finalise(x = new this(x), x.e + 1, this.rounding);
    }
    /*
   * Return
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * x {number|string|bigint|Decimal}
   *
   */ function sign(x) {
        x = new this(x);
        return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
    }
    /*
   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function sin(x) {
        return new this(x).sin();
    }
    /*
   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function sinh(x) {
        return new this(x).sinh();
    }
    /*
   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function sqrt(x) {
        return new this(x).sqrt();
    }
    /*
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal}
   * y {number|string|bigint|Decimal}
   *
   */ function sub(x, y) {
        return new this(x).sub(y);
    }
    /*
   * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * Only the result is rounded, not the intermediate calculations.
   *
   * arguments {number|string|bigint|Decimal}
   *
   */ function sum() {
        var i = 0, args = arguments, x = new this(args[i]);
        external = false;
        for(; x.s && ++i < args.length;)x = x.plus(args[i]);
        external = true;
        return finalise(x, this.precision, this.rounding);
    }
    /*
   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function tan(x) {
        return new this(x).tan();
    }
    /*
   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|bigint|Decimal} A value in radians.
   *
   */ function tanh(x) {
        return new this(x).tanh();
    }
    /*
   * Return a new Decimal whose value is `x` truncated to an integer.
   *
   * x {number|string|bigint|Decimal}
   *
   */ function trunc(x) {
        return finalise(x = new this(x), x.e + 1, 1);
    }
    // Create and configure initial Decimal constructor.
    Decimal = clone(DEFAULTS);
    Decimal.prototype.constructor = Decimal;
    Decimal['default'] = Decimal.Decimal = Decimal;
    // Create the internal constants from their string values.
    LN10 = new Decimal(LN10);
    PI = new Decimal(PI);
    // Export.
    // AMD.
    if (typeof define == 'function' && define.amd) define(function() {
        return Decimal;
    });
    else if (module.exports) {
        if (typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol') {
            P[Symbol['for']('nodejs.util.inspect.custom')] = P.toString;
            P[Symbol.toStringTag] = 'Decimal';
        }
        module.exports = Decimal;
    // Browser.
    } else {
        if (!globalScope) globalScope = typeof self != 'undefined' && self && self.self == self ? self : window;
        noConflict = globalScope.Decimal;
        Decimal.noConflict = function() {
            globalScope.Decimal = noConflict;
            return Decimal;
        };
        globalScope.Decimal = Decimal;
    }
})(this);

},{}],"adq2h":[function(require,module,exports,__globalThis) {
// src/shared_types.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S_Level", ()=>S_Level);
parcelHelpers.export(exports, "ProtoType", ()=>ProtoType);
parcelHelpers.export(exports, "PROTO_TYPE_COUNT", ()=>PROTO_TYPE_COUNT);
parcelHelpers.export(exports, "SymmetryBias", ()=>SymmetryBias);
parcelHelpers.export(exports, "InteractionChannelType", ()=>InteractionChannelType);
parcelHelpers.export(exports, "DEFAULT_SIM_CONFIG", ()=>DEFAULT_SIM_CONFIG);
parcelHelpers.export(exports, "protoTypeCompatibility", ()=>protoTypeCompatibility);
var S_Level = /*#__PURE__*/ function(S_Level) {
    S_Level[S_Level["S0_Vacuum"] = 0] = "S0_Vacuum";
    S_Level[S_Level["S1_SimpleFixedPoint"] = 1] = "S1_SimpleFixedPoint";
    S_Level[S_Level["S2_RecursiveStructure"] = 2] = "S2_RecursiveStructure";
    S_Level[S_Level["S3_DynamicEquilibrium"] = 3] = "S3_DynamicEquilibrium";
    S_Level[S_Level["S4_CompositeStability"] = 4] = "S4_CompositeStability";
    return S_Level;
}({});
var ProtoType = /*#__PURE__*/ function(ProtoType) {
    ProtoType[ProtoType["Standard"] = 0] = "Standard";
    ProtoType[ProtoType["Leptonic"] = 1] = "Leptonic";
    ProtoType[ProtoType["Quarkic"] = 2] = "Quarkic";
    return ProtoType;
}({});
const PROTO_TYPE_COUNT = Object.keys(ProtoType).length / 2;
var SymmetryBias = /*#__PURE__*/ function(SymmetryBias) {
    SymmetryBias[SymmetryBias["None"] = 0] = "None";
    SymmetryBias[SymmetryBias["Rotational"] = 1] = "Rotational";
    SymmetryBias[SymmetryBias["Reflectional"] = 2] = "Reflectional";
    return SymmetryBias;
}({});
var InteractionChannelType = /*#__PURE__*/ function(InteractionChannelType) {
    InteractionChannelType[InteractionChannelType["Generic"] = 0] = "Generic";
    InteractionChannelType[InteractionChannelType["EM_Like"] = 1] = "EM_Like";
    InteractionChannelType[InteractionChannelType["Strong_Like"] = 2] = "Strong_Like";
    InteractionChannelType[InteractionChannelType["Weak_Like"] = 3] = "Weak_Like";
    return InteractionChannelType;
}({});
const DEFAULT_SIM_CONFIG = {
    precision: 'high',
    seed: Date.now(),
    initial_proto_valence: 2,
    initial_valence_adaptation_ratio: 1.0,
    enable_adaptation_valence: true,
    enable_adaptation_polarity: true,
    enable_adaptation_prototype: true,
    enable_transformation_prototype: true,
    enable_collapse: true,
    enable_dynamic_rule_weighting: true,
    max_valence_factor: 1.5,
    min_valence: 1,
    absolute_max_valence: 7,
    enable_stress_propagation: true,
    stress_propagation_factor: 0.1,
    stress_penalty_homogeneous_env: 0.75
};
const protoTypeCompatibility = {
    [0]: {
        [0]: true,
        [1]: {
            channel: 1,
            resistanceMod: 1.2
        },
        [2]: false
    },
    [1]: {
        [0]: {
            channel: 1,
            resistanceMod: 1.2
        },
        [1]: true,
        [2]: false
    },
    [2]: {
        [0]: false,
        [1]: false,
        [2]: {
            channel: 2,
            resistanceMod: 0.8
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2OuCz":[function(require,module,exports,__globalThis) {
// src/rule_genesis.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GenesisRule", ()=>GenesisRule);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const GenesisRule = {
    name: 'genesis',
    description: 'Create a new distinction, with a small chance of being a non-standard type.',
    base_cost: (0, _precision.PrecisionNumber).from(1.0, 'high'),
    isApplicable: (graph, sim)=>graph.order < sim['UNBOUNDED_NODE_LIMIT'],
    apply: (graph, sim)=>{
        const futureGraph = (0, _graphUtils.deepCopyGraph)(graph);
        const newNodeId = sim.getNextNodeId();
        // --- REFACTOR BASED ON AUDIT ---
        // Introduce variety from the start, as per framework principles.
        let newProtoType = (0, _sharedTypes.ProtoType).Standard;
        const randomProtoType = sim.random();
        if (randomProtoType < 0.025) newProtoType = (0, _sharedTypes.ProtoType).Leptonic;
        else if (randomProtoType < 0.05) newProtoType = (0, _sharedTypes.ProtoType).Quarkic;
        // --- END REFACTOR ---
        sim.createDistinction(futureGraph, newNodeId, sim.random() < 0.5 ? 1 : -1, undefined, newProtoType);
        sim.updateAllNodeStresses(futureGraph);
        const descriptor = sim.calculatePatternDescriptor(futureGraph);
        return [
            {
                move_name: 'genesis',
                nodes_involved: [
                    newNodeId
                ],
                cost: (0, _ruleUtils.getRuleBaseCost)('genesis', sim),
                resulting_graph: futureGraph,
                descriptor
            }
        ];
    }
};

},{"./precision":"jjewU","./shared_types":"adq2h","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6yRFS":[function(require,module,exports,__globalThis) {
// src/rule_utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Helper function to get the base cost of a rule by its name.
 * It extracts the base name (e.g., "adaptation" from "adaptation_valence_up")
 * to find the corresponding rule object in the simulator's rule list.
 * @param ruleName The full name of the move (e.g., "adaptation_valence_up").
 * @param sim The simulator instance.
 * @returns The base cost of the rule as a PrecisionNumber.
 */ parcelHelpers.export(exports, "getRuleBaseCost", ()=>getRuleBaseCost);
var _precision = require("./precision");
function getRuleBaseCost(ruleName, sim) {
    const baseRuleKey = ruleName.split('_')[0];
    const rule = sim.rules.find((r)=>r.name === baseRuleKey);
    return rule ? rule.base_cost : (0, _precision.PrecisionNumber).from(1, sim.config.precision); // Default cost if rule not found
}

},{"./precision":"jjewU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kDVmr":[function(require,module,exports,__globalThis) {
// src/graph_utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a robust deep copy of the graph, ensuring all node and edge attributes are explicitly
 * reconstructed to prevent corruption or loss of properties.
 * This replaces graph.copy() and previous shallow spread-operator copies.
 * @param originalGraph The graph to copy.
 * @returns A new Graph instance that is a deep copy of the original.
 */ parcelHelpers.export(exports, "deepCopyGraph", ()=>deepCopyGraph);
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
function deepCopyGraph(originalGraph) {
    const newGraph = new (0, _graphologyDefault.default)({
        multi: false,
        allowSelfLoops: false
    });
    originalGraph.forEachNode((node, attrs)=>{
        // Manually and defensively construct the new attribute object.
        // Provide default values from a known good source if a property is missing.
        const newAttrs = {
            id: attrs.id ?? node,
            polarity: attrs.polarity ?? 1,
            protoType: attrs.protoType ?? (0, _sharedTypes.ProtoType).Standard,
            protoValence: attrs.protoValence ?? 2,
            valence: attrs.valence ?? 2,
            stress: attrs.stress ? (0, _precision.PrecisionNumber).from(attrs.stress, attrs.stress.mode) : (0, _precision.PrecisionNumber).from(2, 'high'),
            sLevel: attrs.sLevel ?? (0, _sharedTypes.S_Level).S1_SimpleFixedPoint,
            symmetryBias: attrs.symmetryBias ?? (0, _sharedTypes.SymmetryBias).None,
            coherencePotential: attrs.coherencePotential ? (0, _precision.PrecisionNumber).from(attrs.coherencePotential, attrs.coherencePotential.mode) : undefined,
            aestheticValue: attrs.aestheticValue ? (0, _precision.PrecisionNumber).from(attrs.aestheticValue, attrs.aestheticValue.mode) : undefined
        };
        newGraph.addNode(node, newAttrs);
    });
    originalGraph.forEachEdge((edgeKey, attrs, source, target)=>{
        if (newGraph.hasNode(source) && newGraph.hasNode(target)) {
            // Manually and defensively construct the new edge attribute object.
            const newEdgeAttrs = {
                flowResistance: attrs.flowResistance ? (0, _precision.PrecisionNumber).from(attrs.flowResistance, attrs.flowResistance.mode) : (0, _precision.PrecisionNumber).from(1, 'high'),
                interactionChannelType: attrs.interactionChannelType ?? (0, _sharedTypes.InteractionChannelType).Generic,
                coherencePotential: attrs.coherencePotential ? (0, _precision.PrecisionNumber).from(attrs.coherencePotential, attrs.coherencePotential.mode) : undefined,
                aestheticValue: attrs.aestheticValue ? (0, _precision.PrecisionNumber).from(attrs.aestheticValue, attrs.aestheticValue.mode) : undefined
            };
            newGraph.addEdgeWithKey(edgeKey, source, target, newEdgeAttrs);
        }
    });
    return newGraph;
}

},{"graphology":"3u8J2","./precision":"jjewU","./shared_types":"adq2h","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2ToxX":[function(require,module,exports,__globalThis) {
// src/rule_bonding.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BondingRule", ()=>BondingRule);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const BondingRule = {
    name: 'bonding',
    description: 'Form a relation (bond) based on compatibility.',
    base_cost: (0, _precision.PrecisionNumber).from(0.3, 'high'),
    isApplicable: (graph)=>graph.order >= 2,
    apply: (graph, sim)=>{
        const futures = [];
        const nodes = graph.nodes();
        for(let i = 0; i < nodes.length; i++)for(let j = i + 1; j < nodes.length; j++){
            const n1_id = nodes[i], n2_id = nodes[j];
            const n1_attrs = graph.getNodeAttributes(n1_id);
            const n2_attrs = graph.getNodeAttributes(n2_id);
            // Guard against corrupted attributes
            if (typeof n1_attrs.valence !== 'number' || typeof n2_attrs.valence !== 'number') continue;
            const type1Compatibility = (0, _sharedTypes.protoTypeCompatibility)[n1_attrs.protoType];
            const compatibilityInfo = type1Compatibility ? type1Compatibility[n2_attrs.protoType] : undefined;
            if (compatibilityInfo === undefined || compatibilityInfo === false) continue;
            let assignedChannel = (0, _sharedTypes.InteractionChannelType).Generic;
            let resistanceModifier = 1.0;
            if (typeof compatibilityInfo === 'object') {
                assignedChannel = compatibilityInfo.channel;
                resistanceModifier = compatibilityInfo.resistanceMod;
            }
            if (n1_attrs.polarity !== n2_attrs.polarity && !graph.hasEdge(n1_id, n2_id) && graph.degree(n1_id) < n1_attrs.valence && graph.degree(n2_id) < n2_attrs.valence) {
                const futureGraph = (0, _graphUtils.deepCopyGraph)(graph);
                const baseFlowResistanceForNewBond = 1.0;
                const flowResistance = (0, _precision.PrecisionNumber).from(baseFlowResistanceForNewBond * resistanceModifier, sim.config.precision);
                futureGraph.addEdge(n1_id, n2_id, {
                    flowResistance,
                    interactionChannelType: assignedChannel
                });
                sim.updateAllNodeStresses(futureGraph);
                const descriptor = sim.calculatePatternDescriptor(futureGraph);
                futures.push({
                    move_name: 'bonding',
                    nodes_involved: [
                        n1_id,
                        n2_id
                    ].sort(),
                    cost: (0, _ruleUtils.getRuleBaseCost)('bonding', sim),
                    resulting_graph: futureGraph,
                    descriptor
                });
            }
        }
        return futures;
    }
};

},{"./precision":"jjewU","./shared_types":"adq2h","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dscri":[function(require,module,exports,__globalThis) {
// src/rule_annihilation.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnnihilationRule", ()=>AnnihilationRule);
var _precision = require("./precision");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const AnnihilationRule = {
    name: 'annihilation',
    description: 'Remove terminally bonded pair.',
    base_cost: (0, _precision.PrecisionNumber).from(0.2, 'high'),
    isApplicable: (g)=>g.size > 0,
    apply: (g, s)=>{
        const fut = [];
        g.forEachEdge((_e, _a, n1, n2)=>{
            const n1a = g.getNodeAttributes(n1);
            const n2a = g.getNodeAttributes(n2);
            // Guard against corrupted attributes
            if (!n1a || !n2a) return;
            if (n1a.polarity !== n2a.polarity && g.degree(n1) === 1 && g.degree(n2) === 1) {
                const fG = (0, _graphUtils.deepCopyGraph)(g); // Use robust deep copy
                fG.dropNode(n1);
                fG.dropNode(n2);
                s.updateAllNodeStresses(fG);
                const d = s.calculatePatternDescriptor(fG);
                fut.push({
                    move_name: 'annihilation',
                    nodes_involved: [
                        n1,
                        n2
                    ].sort(),
                    cost: (0, _ruleUtils.getRuleBaseCost)('annihilation', s),
                    resulting_graph: fG,
                    descriptor: d
                });
            }
        });
        return fut;
    }
};

},{"./precision":"jjewU","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8lMbM":[function(require,module,exports,__globalThis) {
// src/rule_adaptation.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdaptationRule", ()=>AdaptationRule);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const AdaptationRule = {
    name: 'adaptation',
    description: 'Distinction fine-tunes properties based on stress and stagnation.',
    base_cost: (0, _precision.PrecisionNumber).from(0.6, 'high'),
    isApplicable: (g, s)=>g.order > 0 && (s.config.enable_adaptation_valence || s.config.enable_adaptation_polarity || s.config.enable_adaptation_prototype),
    apply: (g, s)=>{
        const fut = [];
        g.forEachNode((nId, a)=>{
            try {
                if (typeof a.valence !== 'number' || isNaN(a.valence) || typeof a.protoValence !== 'number' || isNaN(a.protoValence)) {
                    console.warn(`[AdaptationRule] Skipping node ${nId} due to invalid valence/protoValence attributes.`);
                    return;
                }
                const cS = a.stress.toNumber();
                const cV = a.valence;
                const cPV = a.protoValence;
                let maxAV = Math.floor(cPV * s.config.max_valence_factor);
                maxAV = Math.min(maxAV, s.config.absolute_max_valence);
                maxAV = Math.max(s.config.min_valence, maxAV);
                const deg = g.degree(nId);
                let mC = (0, _ruleUtils.getRuleBaseCost)('adaptation', s);
                // --- Valence Adaptation (based on simple stress) ---
                if (s.config.enable_adaptation_valence) {
                    // **REFACTOR:** Condition restored to be more principled.
                    // Increase valence if stressed from being "full" or over-full.
                    const conditionValenceUp = cS > 0.5 && deg >= cV && cV < maxAV;
                    if (conditionValenceUp) {
                        const fG = (0, _graphUtils.deepCopyGraph)(g);
                        fG.setNodeAttribute(nId, 'valence', cV + 1);
                        s.updateAllNodeStresses(fG);
                        const d = s.calculatePatternDescriptor(fG);
                        fut.push({
                            move_name: 'adaptation_valence_up',
                            nodes_involved: [
                                nId
                            ],
                            cost: mC.add(0.1),
                            resulting_graph: fG,
                            descriptor: d
                        });
                    }
                    // Decrease valence if low stress and over-provisioned
                    const conditionValenceDown = cS < 0.3 && cV > s.config.min_valence && deg < cV;
                    if (conditionValenceDown) {
                        const fG = (0, _graphUtils.deepCopyGraph)(g);
                        fG.setNodeAttribute(nId, 'valence', Math.max(s.config.min_valence, cV - 1));
                        s.updateAllNodeStresses(fG);
                        const d = s.calculatePatternDescriptor(fG);
                        fut.push({
                            move_name: 'adaptation_valence_down',
                            nodes_involved: [
                                nId
                            ],
                            cost: mC.add(0.1),
                            resulting_graph: fG,
                            descriptor: d
                        });
                    }
                }
                // --- Drastic Adaptations (based on persistent stagnation) ---
                const stagnation = s.getNodeStagnation(nId);
                if (s.config.enable_adaptation_polarity && stagnation > s.config.polarity_flip_stagnation_threshold) {
                    const fG = (0, _graphUtils.deepCopyGraph)(g);
                    fG.setNodeAttribute(nId, 'polarity', a.polarity * -1);
                    s.updateAllNodeStresses(fG);
                    const d = s.calculatePatternDescriptor(fG);
                    fut.push({
                        move_name: 'adaptation_polarity_flip',
                        nodes_involved: [
                            nId
                        ],
                        cost: mC.add(0.4),
                        resulting_graph: fG,
                        descriptor: d
                    });
                }
                if (s.config.enable_adaptation_prototype && stagnation > s.config.prototype_adapt_stagnation_threshold) {
                    const fG = (0, _graphUtils.deepCopyGraph)(g);
                    const nPT = (a.protoType + 1) % (0, _sharedTypes.PROTO_TYPE_COUNT);
                    fG.setNodeAttribute(nId, 'protoType', nPT);
                    s.updateAllNodeStresses(fG);
                    const d = s.calculatePatternDescriptor(fG);
                    fut.push({
                        move_name: `adaptation_prototype_${(0, _sharedTypes.ProtoType)[nPT].toLowerCase()}`,
                        nodes_involved: [
                            nId
                        ],
                        cost: mC.add(0.5),
                        resulting_graph: fG,
                        descriptor: d
                    });
                }
            } catch (error) {
                console.error(`  [AdaptationRule] ERROR processing node ${nId}:`, error);
            }
        });
        return fut;
    }
};

},{"./precision":"jjewU","./shared_types":"adq2h","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"VR3d5":[function(require,module,exports,__globalThis) {
// src/rule_transformation.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransformationRule", ()=>TransformationRule);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const TransformationRule = {
    name: 'transformation',
    description: 'A distinction undergoes a fundamental change in ProtoType due to persistent stagnation.',
    base_cost: (0, _precision.PrecisionNumber).from(0.8, 'high'),
    isApplicable: (g, s)=>g.order > 0 && s.config.enable_transformation_prototype,
    apply: (g, s)=>{
        const fut = [];
        g.forEachNode((nId, a)=>{
            try {
                // Guard against corrupted attributes
                if (typeof a.sLevel !== 'number' || typeof a.stress?.toNumber() !== 'number') return;
                const stagnation = s.getNodeStagnation(nId);
                const randomCheck = s.random();
                // REFACTOR: Condition is now based on stagnation, not an arbitrary stress threshold.
                // Transformation is a drastic, probabilistic move for nodes that are not complex (S1)
                // and have been stuck in a high-stress state for a long time.
                const conditionMet = a.sLevel <= (0, _sharedTypes.S_Level).S1_SimpleFixedPoint && stagnation > s.config.transformation_stagnation_threshold && randomCheck < 0.25; // Increased chance slightly for more dynamic behavior
                if (conditionMet) {
                    const fG = (0, _graphUtils.deepCopyGraph)(g);
                    // Choose a new ProtoType that is different from the current one
                    const nPT = (a.protoType + Math.floor(s.random() * ((0, _sharedTypes.PROTO_TYPE_COUNT) - 1)) + 1) % (0, _sharedTypes.PROTO_TYPE_COUNT);
                    if (nPT !== a.protoType) {
                        fG.setNodeAttribute(nId, 'protoType', nPT);
                        // A transformation could also reset adaptive valence, but for now, we let adaptation handle it.
                        s.updateAllNodeStresses(fG);
                        const d = s.calculatePatternDescriptor(fG);
                        fut.push({
                            move_name: `transformation_prototype_to_${(0, _sharedTypes.ProtoType)[nPT].toLowerCase()}`,
                            nodes_involved: [
                                nId
                            ],
                            cost: (0, _ruleUtils.getRuleBaseCost)('transformation', s),
                            resulting_graph: fG,
                            descriptor: d
                        });
                    }
                }
            } catch (error) {
                console.error(`  [TransformationRule] ERROR processing node ${nId}:`, error);
            }
        });
        return fut;
    }
};

},{"./precision":"jjewU","./shared_types":"adq2h","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8YShf":[function(require,module,exports,__globalThis) {
// src/rule_collapse.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollapseRule", ()=>CollapseRule);
var _precision = require("./precision");
var _ruleUtils = require("./rule_utils");
var _graphUtils = require("./graph_utils");
const CollapseRule = {
    name: 'collapse',
    description: 'Simplify redundant linear structures.',
    base_cost: (0, _precision.PrecisionNumber).from(0.4, 'high'),
    isApplicable: (g, s)=>g.order >= 3 && s.config.enable_collapse,
    apply: (g, s)=>{
        const fut = [];
        g.forEachNode((nodeB_id)=>{
            // This rule applies to nodes that are simple bridges between two other nodes
            if (g.degree(nodeB_id) === 2) {
                const neighbors = g.neighbors(nodeB_id);
                if (neighbors.length === 2) {
                    const nodeA_id = neighbors[0];
                    const nodeC_id = neighbors[1];
                    // Ensure it's a linear chain (A-B-C) and not a triangle (A-B, B-C, C-A)
                    // Also ensures we don't have a weird case of a node connected to itself twice via B
                    if (nodeA_id !== nodeC_id && !g.hasEdge(nodeA_id, nodeC_id)) {
                        const fG = (0, _graphUtils.deepCopyGraph)(g); // Use robust deep copy
                        // Dropping the node also removes its incident edges (A-B and B-C)
                        fG.dropNode(nodeB_id);
                        // After collapse, recalculate stresses for the now-affected nodes A and C
                        s.updateAllNodeStresses(fG);
                        const d = s.calculatePatternDescriptor(fG);
                        fut.push({
                            move_name: 'collapse_linear_trim',
                            nodes_involved: [
                                nodeA_id,
                                nodeB_id,
                                nodeC_id
                            ].sort(),
                            cost: (0, _ruleUtils.getRuleBaseCost)('collapse', s),
                            resulting_graph: fG,
                            descriptor: d
                        });
                    }
                }
            }
        });
        return fut;
    }
};

},{"./precision":"jjewU","./rule_utils":"6yRFS","./graph_utils":"kDVmr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8wCjq":[function(require,module,exports,__globalThis) {
// src/simulator_step.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "step", ()=>step);
var _precision = require("./precision");
var _simulatorAnalysis = require("./simulator_analysis");
// The old compareDescriptors function is REMOVED.
/**
 * Selects the best future state based on the Greedy Local Optimization principle.
 * It finds the future(s) with the maximum Autaxic Lagrangian (L_A) score and
 * performs stochastic tie-breaking if necessary.
 * @param sim The simulator instance.
 * @param futures An array of possible next states.
 * @returns The single chosen PotentialFuture.
 */ function selectBestFuture(sim, futures) {
    if (futures.length === 0) return null;
    // 1. Evaluate: Calculate the L_A score for every potential future.
    const futuresWithScores = futures.map((future)=>({
            future,
            score: (0, _simulatorAnalysis.calculateAutaxicLagrangian)(future.descriptor)
        }));
    // 2. Select: Find the maximum L_A score among all futures.
    let maxScore = futuresWithScores[0].score;
    for(let i = 1; i < futuresWithScores.length; i++)if (futuresWithScores[i].score.isGreaterThan(maxScore)) maxScore = futuresWithScores[i].score;
    // 3. Collect all futures that have this maximum score.
    const bestFutures = futuresWithScores.filter((item)=>item.score.isEqualTo(maxScore)).map((item)=>item.future);
    // 4. Actualize: If there's only one best future, choose it.
    // If there are multiple, perform stochastic tie-breaking by picking one randomly.
    if (bestFutures.length === 1) return bestFutures[0];
    else {
        const randomIndex = Math.floor(sim.random() * bestFutures.length);
        return bestFutures[randomIndex];
    }
}
function calculateDescriptorDelta(newDesc, oldDesc) {
    if (!oldDesc) return {
        s_level: newDesc.S.level,
        robustness: newDesc.S.robustness.toNumber(),
        complexity: newDesc.C.toNumber(),
        totalStress: newDesc.totalStress.toNumber()
    };
    return {
        s_level: newDesc.S.level - oldDesc.S.level,
        robustness: newDesc.S.robustness.subtract(oldDesc.S.robustness).toNumber(),
        complexity: newDesc.C.subtract(oldDesc.C).toNumber(),
        totalStress: newDesc.totalStress.subtract(oldDesc.totalStress).toNumber()
    };
}
function adjustRuleWeight(sim, ruleName, delta) {
    if (!sim.config.enable_dynamic_rule_weighting) return;
    const baseRuleName = sim.rules.find((r)=>ruleName.startsWith(r.name))?.name;
    if (!baseRuleName) return;
    const cW = sim.rule_weights.get(baseRuleName);
    if (!cW) return;
    let aF = (0, _precision.PrecisionNumber).from(0, sim.config.precision);
    if (delta.s_level > 0) aF = aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(2));
    else if (delta.s_level === 0) {
        if (delta.robustness > 0.001) aF = aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR']);
        if (delta.complexity < 0 && Math.abs(delta.robustness) < 0.001) aF = aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(0.5));
        if (delta.totalStress < -0.01) aF = aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(0.25));
    } else aF = aF.subtract(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(1.5));
    let nW = cW.add(aF);
    if (nW.isNegative() || nW.isZero()) nW = (0, _precision.PrecisionNumber).from(0.01, sim.config.precision);
    sim.rule_weights.set(baseRuleName, nW);
}
function normalizeRuleWeights(sim) {
    if (!sim.config.enable_dynamic_rule_weighting || sim.rules.length === 0) return;
    let sOW = new (0, _precision.PrecisionNumber)(0, sim.config.precision);
    sim.rule_weights.forEach((w)=>sOW = sOW.add(w));
    if (sOW.isZero() || sOW.isNegative()) {
        sim.rules.forEach((r)=>sim.rule_weights.set(r.name, new (0, _precision.PrecisionNumber)(1.0, sim.config.precision)));
        return;
    }
    const nR = new (0, _precision.PrecisionNumber)(sim.rules.length, sim.config.precision);
    sim.rule_weights.forEach((w, rN)=>{
        sim.rule_weights.set(rN, w.divide(sOW).multiply(nR));
    });
}
function updateStagnationCounters(sim) {
    const toRemove = [];
    sim.node_stagnation_counter.forEach((_count, nodeId)=>{
        if (!sim.graph.hasNode(nodeId)) toRemove.push(nodeId);
    });
    toRemove.forEach((nodeId)=>{
        sim.node_stagnation_counter.delete(nodeId);
        sim.node_last_stress.delete(nodeId);
    });
    sim.graph.forEachNode((nodeId, attrs)=>{
        const lastStress = sim.node_last_stress.get(nodeId);
        const currentStress = attrs.stress;
        if (lastStress && currentStress.isGreaterThanOrEqualTo(lastStress) && currentStress.isGreaterThan(0)) {
            const currentCount = sim.node_stagnation_counter.get(nodeId) || 0;
            sim.node_stagnation_counter.set(nodeId, currentCount + 1);
        } else sim.node_stagnation_counter.set(nodeId, 0);
        sim.node_last_stress.set(nodeId, currentStress);
    });
}
function step(sim) {
    if (sim.graph.order > sim['UNBOUNDED_NODE_LIMIT'] || sim.step_counter >= sim['MAX_STEPS_PER_SIM']) {
        const r = sim.graph.order > sim['UNBOUNDED_NODE_LIMIT'] ? 'UNBOUNDED_GROWTH' : 'MAX_STEPS_REACHED';
        return {
            halt: true,
            reason: r,
            descriptor: (0, _simulatorAnalysis.calculatePatternDescriptor)(sim)
        };
    }
    (0, _simulatorAnalysis.updateAllNodeStresses)(sim);
    updateStagnationCounters(sim);
    const currentDescriptor = (0, _simulatorAnalysis.calculatePatternDescriptor)(sim);
    const currentGraphHash = (0, _simulatorAnalysis.getGraphHash)(sim.graph);
    if (sim.graph.order > 0 && sim.graph_state_history.has(currentGraphHash) && sim.graph_state_history.get(currentGraphHash).step < sim.step_counter) return {
        halt: true,
        reason: 'LIMIT_CYCLE',
        descriptor: currentDescriptor
    };
    if (sim.graph.order === 0) {
        const nId = sim.getNextNodeId();
        sim.createDistinction(sim.graph, nId, sim.random() < 0.5 ? 1 : -1);
        (0, _simulatorAnalysis.updateAllNodeStresses)(sim);
        sim.step_counter++;
        const dAI = (0, _simulatorAnalysis.calculatePatternDescriptor)(sim);
        sim.node_last_stress.set(nId, dAI.totalStress);
        const dlt = calculateDescriptorDelta(dAI, null);
        const mR = {
            rule_name: 'genesis_ignition',
            nodes_involved: [
                nId
            ],
            cost: (0, _precision.PrecisionNumber).from(0, sim.config.precision),
            step_number: sim.step_counter,
            delta_descriptor: dlt
        };
        sim.simulation_history.push(mR);
        if (sim.graph.order > 0) sim.graph_state_history.set((0, _simulatorAnalysis.getGraphHash)(sim.graph), {
            step: sim.step_counter,
            descriptor: dAI
        });
        sim.last_descriptor = dAI;
        return {
            halt: false,
            descriptor: dAI,
            move_record: mR
        };
    }
    sim.last_descriptor = currentDescriptor;
    sim.graph_state_history.set(currentGraphHash, {
        step: sim.step_counter,
        descriptor: currentDescriptor
    });
    const pF = [];
    sim.rules.forEach((r)=>{
        if (r.isApplicable(sim.graph, sim)) {
            const fFR = r.apply(sim.graph, sim);
            fFR.forEach((f)=>{
                const bRN = sim.rules.find((rl)=>f.move_name.startsWith(rl.name))?.name;
                f.origin_rule_weight = bRN ? sim.rule_weights.get(bRN) : undefined;
            });
            pF.push(...fFR);
        }
    });
    if (pF.length === 0) {
        console.error(`HALT @ Step ${sim.step_counter}: NO_APPLICABLE_MOVES. Current Descriptor:`, JSON.parse(JSON.stringify(currentDescriptor)));
        return {
            halt: true,
            reason: 'NO_APPLICABLE_MOVES',
            descriptor: currentDescriptor
        };
    }
    const cF = selectBestFuture(sim, pF, currentDescriptor);
    if (!cF) {
        console.error(`HALT @ Step ${sim.step_counter}: STUCK_NO_VIABLE_FUTURE despite ${pF.length} options. Current Descriptor:`, JSON.parse(JSON.stringify(currentDescriptor)));
        return {
            halt: true,
            reason: 'STUCK_NO_VIABLE_FUTURE',
            descriptor: currentDescriptor
        };
    }
    sim.graph = cF.resulting_graph;
    sim.step_counter++;
    const finD = (0, _simulatorAnalysis.calculatePatternDescriptor)(sim);
    const dlt = calculateDescriptorDelta(finD, sim.last_descriptor);
    const mR = {
        rule_name: cF.move_name,
        nodes_involved: cF.nodes_involved,
        cost: cF.cost,
        step_number: sim.step_counter,
        delta_descriptor: dlt
    };
    sim.simulation_history.push(mR);
    if (sim.config.enable_dynamic_rule_weighting) {
        adjustRuleWeight(sim, cF.move_name, dlt);
        if (sim.step_counter % sim['RULE_WEIGHT_NORMALIZATION_INTERVAL'] === 0) normalizeRuleWeights(sim);
    }
    sim.last_descriptor = finD;
    return {
        halt: false,
        descriptor: finD,
        move_record: mR
    };
}

},{"./precision":"jjewU","./simulator_analysis":"cDPjC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cDPjC":[function(require,module,exports,__globalThis) {
// src/simulator_analysis.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// --- NEW: Autaxic Lagrangian Calculation ---
/**
 * Calculates the Autaxic Lagrangian (L_A) for a given pattern descriptor.
 * This serves as the "existential fitness" function for a graph state.
 * Based on AUTX-D2.2, it prioritizes the Stability-to-Complexity ratio (S/C)
 * and penalizes relational tension (stress).
 * @param descriptor The PatternDescriptor of the graph state.
 * @returns A PrecisionNumber representing the L_A score.
 */ parcelHelpers.export(exports, "calculateAutaxicLagrangian", ()=>calculateAutaxicLagrangian);
// --- Stress Calculation ---
parcelHelpers.export(exports, "calculateIntrinsicNodeStress", ()=>calculateIntrinsicNodeStress);
parcelHelpers.export(exports, "updateAllNodeStresses", ()=>updateAllNodeStresses);
// --- Descriptor Calculation ---
parcelHelpers.export(exports, "calculatePatternDescriptor", ()=>calculatePatternDescriptor);
parcelHelpers.export(exports, "getGraphHash", ()=>getGraphHash);
var _precision = require("./precision");
var _sharedTypes = require("./shared_types");
function calculateAutaxicLagrangian(descriptor) {
    const { C, S, totalStress } = descriptor;
    // Handle the vacuum state (C=0) to avoid division by zero.
    // The Lagrangian of the void is axiomatically low or zero.
    if (C.isZero()) return (0, _precision.PrecisionNumber).from(0, C.mode);
    // L_A is a function of Stability / Complexity, penalized by Stress.
    // We can model Stability as a combination of S-Level and robustness.
    // S_Level is weighted heavily as it represents the mechanism of closure.
    const stabilityScore = (0, _precision.PrecisionNumber).from(S.level * S.level, C.mode).add(S.robustness); // S.level squared to give it more weight
    // The Lagrangian is the stability score per unit of complexity, penalized by stress.
    // L_A = (S_Score - Stress) / C
    const lagrangian = stabilityScore.subtract(totalStress).divide(C);
    return lagrangian;
}
function calculateIntrinsicNodeStress(nodeId, graph, sim) {
    const attrs = graph.getNodeAttributes(nodeId);
    const degree = graph.degree(nodeId);
    let stress = 0;
    if (typeof attrs.valence !== 'number' || isNaN(attrs.valence) || typeof attrs.protoValence !== 'number' || isNaN(attrs.protoValence)) return new (0, _precision.PrecisionNumber)(10, sim.config.precision); // High stress for invalid state
    const unmetAdaptiveValence = attrs.valence - degree;
    if (unmetAdaptiveValence > 0) stress += unmetAdaptiveValence;
    if (degree > attrs.valence) stress += (degree - attrs.valence) * 0.5;
    const maxAllowedAdaptiveValence = Math.min(Math.floor(attrs.protoValence * sim.config.max_valence_factor), sim.config.absolute_max_valence);
    if (attrs.valence > maxAllowedAdaptiveValence) stress += (attrs.valence - maxAllowedAdaptiveValence) * 0.5;
    else if (attrs.valence > attrs.protoValence) stress += (attrs.valence - attrs.protoValence) * 0.25;
    if (degree > 0) {
        let samePolarityNeighbors = 0;
        graph.forEachNeighbor(nodeId, (_n, na)=>{
            if (na.polarity === attrs.polarity) samePolarityNeighbors++;
        });
        if (samePolarityNeighbors === degree) stress += sim.config.stress_penalty_homogeneous_env;
    }
    return new (0, _precision.PrecisionNumber)(stress, sim.config.precision);
}
function updateAllNodeStresses(sim) {
    const graph = sim.graph;
    const intrinsicStresses = new Map();
    graph.forEachNode((nodeId)=>{
        intrinsicStresses.set(nodeId, calculateIntrinsicNodeStress(nodeId, graph, sim));
    });
    if (sim.config.enable_stress_propagation && sim.config.stress_propagation_factor > 0 && graph.size > 0) {
        const propagatedStressContributions = new Map();
        graph.forEachNode((nodeId)=>propagatedStressContributions.set(nodeId, (0, _precision.PrecisionNumber).from(0, sim.config.precision)));
        graph.forEachNode((sourceNodeId)=>{
            const sourceIntrinsicStress = intrinsicStresses.get(sourceNodeId);
            if (sourceIntrinsicStress.isGreaterThan(sim['HIGH_STRESS_THRESHOLD_FOR_PROPAGATION'])) graph.forEachNeighbor(sourceNodeId, (neighborNodeId, edgeAttributes)=>{
                const relationAttrs = edgeAttributes;
                const resistanceFactor = (0, _precision.PrecisionNumber).from(1, sim.config.precision).divide(relationAttrs.flowResistance.add(1));
                const stressToPropagateToNeighbor = sourceIntrinsicStress.multiply(sim.config.stress_propagation_factor).multiply(resistanceFactor);
                const currentPropStress = propagatedStressContributions.get(neighborNodeId);
                propagatedStressContributions.set(neighborNodeId, currentPropStress.add(stressToPropagateToNeighbor));
            });
        });
        graph.forEachNode((nodeId)=>{
            const finalStress = intrinsicStresses.get(nodeId).add(propagatedStressContributions.get(nodeId));
            graph.setNodeAttribute(nodeId, 'stress', finalStress);
        });
    } else graph.forEachNode((nodeId)=>{
        graph.setNodeAttribute(nodeId, 'stress', intrinsicStresses.get(nodeId));
    });
}
// --- S-Level Detection ---
function detectS2Recursive(g, sim) {
    if (g.order < 3) return {
        isS2: false,
        score: new (0, _precision.PrecisionNumber)(0, sim.config.precision)
    };
    let hS2S = new (0, _precision.PrecisionNumber)(0, sim.config.precision);
    let fS2 = false;
    for (const sN of g.nodes()){
        const neigh = g.neighbors(sN);
        for (const n1 of neigh){
            if (n1 === sN) continue;
            for (const n2 of g.neighbors(n1)){
                if (n2 === sN || n2 === n1) continue;
                if (g.hasEdge(n2, sN)) {
                    const cN = [
                        sN,
                        n1,
                        n2
                    ];
                    const fNA = g.getNodeAttributes(sN);
                    const iCC = cN.every((cn)=>{
                        const a = g.getNodeAttributes(cn);
                        return a.protoType === fNA.protoType && a.polarity === fNA.polarity && g.degree(cn) === 2;
                    });
                    if (iCC) {
                        fS2 = true;
                        const cS = new (0, _precision.PrecisionNumber)(1.0 / 6, sim.config.precision);
                        if (cS.compareTo(hS2S) > 0) hS2S = cS;
                    }
                }
            }
        }
    }
    return {
        isS2: fS2,
        score: hS2S
    };
}
function detectS4Composite(g) {
    return {
        isS4: false,
        components: []
    };
}
function calculatePatternDescriptor(sim) {
    const g = sim.graph;
    const o = g.order;
    const sz = g.size;
    const C = new (0, _precision.PrecisionNumber)(o + sz, sim.config.precision);
    let hPB = 0;
    g.forEachEdge((_e, _a, s, t)=>{
        const sAttrs = g.getNodeAttributes(s);
        const tAttrs = g.getNodeAttributes(t);
        if (sAttrs && tAttrs && sAttrs.polarity !== tAttrs.polarity) hPB++;
    });
    const r = (0, _precision.PrecisionNumber).divide(hPB, C.isZero() ? 1 : C.toNumber(), sim.config.precision);
    let sL = (0, _sharedTypes.S_Level).S0_Vacuum;
    let s2i = {
        isS2: false,
        score: new (0, _precision.PrecisionNumber)(0, sim.config.precision)
    };
    if (o > 0) {
        sL = (0, _sharedTypes.S_Level).S1_SimpleFixedPoint;
        const cH = getGraphHash(g);
        if (sim.graph_state_history.has(cH) && sim.graph_state_history.get(cH).step < sim.step_counter) sL = (0, _sharedTypes.S_Level).S3_DynamicEquilibrium;
        else {
            s2i = detectS2Recursive(g, sim);
            if (s2i.isS2) sL = (0, _sharedTypes.S_Level).S2_RecursiveStructure;
        }
    }
    let tS = (0, _precision.PrecisionNumber).from(0, sim.config.precision);
    g.forEachNode((nId)=>{
        const sA = g.getNodeAttribute(nId, 'stress');
        if (sA) tS = tS.add(sA);
    });
    let tRFR = (0, _precision.PrecisionNumber).from(0, sim.config.precision);
    g.forEachEdge((_e, a)=>{
        const frA = a.flowResistance;
        if (frA) tRFR = tRFR.add(frA);
    });
    return {
        C,
        S: {
            level: sL,
            robustness: r
        },
        totalStress: tS,
        totalRelationFlowResistance: tRFR,
        s2_score: s2i.score
    };
}
function getGraphHash(g) {
    const nodeStrings = g.nodes().sort((a, b)=>parseInt(a.split('_')[1]) - parseInt(b.split('_')[1])).map((nId)=>{
        const a = g.getNodeAttributes(nId);
        return `${a.id}:${a.polarity}:${a.protoType}:${a.protoValence}:${a.valence}:${a.sLevel.toString()}`;
    });
    const edgeStrings = g.edges().map((e)=>{
        const [u, v] = g.extremities(e).sort();
        const ea = g.getEdgeAttributes(e);
        const r = ea.flowResistance ? ea.flowResistance.toNumber().toFixed(2) : "N/A";
        const c = ea.interactionChannelType !== undefined ? (0, _sharedTypes.InteractionChannelType)[ea.interactionChannelType] : "N/A";
        return `${u}-[${c}](${r})-${v}`;
    }).sort();
    return `${nodeStrings.join('|')};${edgeStrings.join('|')}`;
}

},{"./precision":"jjewU","./shared_types":"adq2h","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fA297":[function(require,module,exports,__globalThis) {
// src/visualizer_graph.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawGraph", ()=>drawGraph);
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _sharedTypes = require("./shared_types");
var _graphologyLayoutForceatlas2 = require("graphology-layout-forceatlas2");
var _graphologyLayoutForceatlas2Default = parcelHelpers.interopDefault(_graphologyLayoutForceatlas2);
function circularLayout(graph, positions, width, height) {
    const nodes = graph.nodes();
    const order = nodes.length;
    if (order === 0) return;
    const angleStep = 2 * Math.PI / order;
    const radiusFactor = order === 1 ? 0 : order < 10 ? 0.25 : 0.4;
    const layoutRadius = Math.min(width, height) * radiusFactor;
    nodes.forEach((node, i)=>{
        positions[node] = {
            x: width / 2 + (order > 1 ? layoutRadius * Math.cos(i * angleStep) : 0),
            y: height / 2 + (order > 1 ? layoutRadius * Math.sin(i * angleStep) : 0)
        };
    });
}
function drawGraph(graph, canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get 2D context from canvas for drawGraph");
        return;
    }
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    if (graph.order === 0) return;
    const positions = {};
    if (graph.order > 0) {
        const layoutGraph = new (0, _graphologyDefault.default)();
        graph.forEachNode((node, attrs)=>{
            layoutGraph.addNode(node, {
                ...attrs
            });
            if (!Object.prototype.hasOwnProperty.call(attrs, 'x')) layoutGraph.setNodeAttribute(node, 'x', (Math.random() - 0.5) * width * 0.1);
            if (!Object.prototype.hasOwnProperty.call(attrs, 'y')) layoutGraph.setNodeAttribute(node, 'y', (Math.random() - 0.5) * height * 0.1);
        });
        graph.forEachEdge((edgeKey, attrs, source, target)=>{
            if (layoutGraph.hasNode(source) && layoutGraph.hasNode(target)) {
                if (!layoutGraph.hasEdge(source, target)) layoutGraph.addEdgeWithKey(edgeKey, source, target, {
                    ...attrs
                });
                else layoutGraph.mergeEdgeAttributes(edgeKey, {
                    ...attrs
                });
            }
        });
        if (graph.order > 2 && graph.order < 300) try {
            (0, _graphologyLayoutForceatlas2Default.default).assign(layoutGraph, {
                iterations: Math.max(30, Math.min(150, graph.order * 3)),
                settings: {
                    gravity: 1.2,
                    edgeWeightInfluence: 0.1,
                    scalingRatio: 20.0,
                    barnesHutOptimize: graph.order > 75,
                    barnesHutTheta: 0.7,
                    slowDown: 1 + Math.log(graph.order + 1),
                    adjustSizes: true,
                    linLogMode: true
                }
            });
            layoutGraph.forEachNode((node, attrs)=>{
                const scaleFactor = Math.min(width, height) / Math.max(10, Math.sqrt(graph.order) * 25);
                positions[node] = {
                    x: attrs.x * scaleFactor + width / 2,
                    y: attrs.y * scaleFactor + height / 2
                };
            });
        } catch (e) {
            console.error("ForceAtlas2 layout failed, falling back to circular:", e);
            circularLayout(graph, positions, width, height);
        }
        else circularLayout(graph, positions, width, height);
    }
    // Draw Edges
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    graph.forEachEdge((_edge, attrs, source, target)=>{
        const posSrc = positions[source];
        const posTgt = positions[target];
        if (posSrc && posTgt) {
            ctx.beginPath();
            ctx.moveTo(posSrc.x, posSrc.y);
            ctx.lineTo(posTgt.x, posTgt.y);
            const resistance = attrs.flowResistance.toNumber();
            ctx.lineWidth = Math.max(0.3, 2.0 - resistance * 0.4);
            ctx.stroke();
        }
    });
    ctx.lineWidth = 1;
    // Draw Nodes
    graph.forEachNode((node, attrs)=>{
        const pos = positions[node];
        if (!pos) {
            positions[node] = {
                x: Math.random() * width,
                y: Math.random() * height
            };
            console.warn(`No position calculated for node ${node}, placed randomly.`);
        }
        const baseRadius = attrs.protoType === (0, _sharedTypes.ProtoType).Quarkic ? 4.5 : attrs.protoType === (0, _sharedTypes.ProtoType).Leptonic ? 5 : 5.5;
        const stressVal = attrs.stress ? attrs.stress.toNumber() : 0;
        const stressFactor = Math.min(2.0, 1 + stressVal * 0.1);
        const radius = Math.max(2.5, baseRadius * stressFactor);
        ctx.beginPath();
        ctx.arc(positions[node].x, positions[node].y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = attrs.polarity === 1 ? '#00aaff' : '#ffaa00';
        if (attrs.protoType === (0, _sharedTypes.ProtoType).Leptonic) ctx.fillStyle = '#33cc33';
        else if (attrs.protoType === (0, _sharedTypes.ProtoType).Quarkic) ctx.fillStyle = '#ff6666';
        ctx.fill();
        if (attrs.sLevel >= (0, _sharedTypes.S_Level).S2_RecursiveStructure) {
            ctx.strokeStyle = attrs.sLevel === (0, _sharedTypes.S_Level).S3_DynamicEquilibrium ? '#FFD700' : attrs.sLevel === (0, _sharedTypes.S_Level).S2_RecursiveStructure ? '#FFFFFF' : '#DDDDDD';
            ctx.lineWidth = attrs.sLevel === (0, _sharedTypes.S_Level).S3_DynamicEquilibrium ? 1.5 : 1;
            ctx.stroke();
        }
    });
}

},{"graphology":"3u8J2","./shared_types":"adq2h","graphology-layout-forceatlas2":"8U6DU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8U6DU":[function(require,module,exports,__globalThis) {
/**
 * Graphology ForceAtlas2 Layout
 * ==============================
 *
 * Library endpoint.
 */ var isGraph = require("7f83ac560ae9a7e7");
var createEdgeWeightGetter = require("f74885cbe2a17aac").createEdgeWeightGetter;
var iterate = require("1b32baea6102d195");
var helpers = require("3fb63933c4609498");
var DEFAULT_SETTINGS = require("fb01b7cb0bdfae1");
/**
 * Asbtract function used to run a certain number of iterations.
 *
 * @param  {boolean}       assign          - Whether to assign positions.
 * @param  {Graph}         graph           - Target graph.
 * @param  {object|number} params          - If number, params.iterations, else:
 * @param  {function}        getWeight     - Edge weight getter function.
 * @param  {number}          iterations    - Number of iterations.
 * @param  {function|null}   outputReducer - A node reducer
 * @param  {object}          [settings]    - Settings.
 * @return {object|undefined}
 */ function abstractSynchronousLayout(assign, graph, params) {
    if (!isGraph(graph)) throw new Error('graphology-layout-forceatlas2: the given graph is not a valid graphology instance.');
    if (typeof params === 'number') params = {
        iterations: params
    };
    var iterations = params.iterations;
    if (typeof iterations !== 'number') throw new Error('graphology-layout-forceatlas2: invalid number of iterations.');
    if (iterations <= 0) throw new Error('graphology-layout-forceatlas2: you should provide a positive number of iterations.');
    var getEdgeWeight = createEdgeWeightGetter('getEdgeWeight' in params ? params.getEdgeWeight : 'weight').fromEntry;
    var outputReducer = typeof params.outputReducer === 'function' ? params.outputReducer : null;
    // Validating settings
    var settings = helpers.assign({}, DEFAULT_SETTINGS, params.settings);
    var validationError = helpers.validateSettings(settings);
    if (validationError) throw new Error('graphology-layout-forceatlas2: ' + validationError.message);
    // Building matrices
    var matrices = helpers.graphToByteArrays(graph, getEdgeWeight);
    var i;
    // Iterating
    for(i = 0; i < iterations; i++)iterate(settings, matrices.nodes, matrices.edges);
    // Applying
    if (assign) {
        helpers.assignLayoutChanges(graph, matrices.nodes, outputReducer);
        return;
    }
    return helpers.collectLayoutChanges(graph, matrices.nodes);
}
/**
 * Function returning sane layout settings for the given graph.
 *
 * @param  {Graph|number} graph - Target graph or graph order.
 * @return {object}
 */ function inferSettings(graph) {
    var order = typeof graph === 'number' ? graph : graph.order;
    return {
        barnesHutOptimize: order > 2000,
        strongGravityMode: true,
        gravity: 0.05,
        scalingRatio: 10,
        slowDown: 1 + Math.log(order)
    };
}
/**
 * Exporting.
 */ var synchronousLayout = abstractSynchronousLayout.bind(null, false);
synchronousLayout.assign = abstractSynchronousLayout.bind(null, true);
synchronousLayout.inferSettings = inferSettings;
module.exports = synchronousLayout;

},{"7f83ac560ae9a7e7":"idmEa","f74885cbe2a17aac":"4Y4Ix","1b32baea6102d195":"iwcGK","3fb63933c4609498":"bVS2M","fb01b7cb0bdfae1":"jGMd6"}],"idmEa":[function(require,module,exports,__globalThis) {
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

},{}],"4Y4Ix":[function(require,module,exports,__globalThis) {
/**
 * Graphology Weight Getter
 * =========================
 *
 * Function creating weight getters.
 */ function coerceWeight(value) {
    // Ensuring target value is a correct number
    if (typeof value !== 'number' || isNaN(value)) return 1;
    return value;
}
function createNodeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === 'undefined') return defaultValue;
        return v;
    };
    if (typeof defaultValue === 'function') coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === 'string') {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, node) {
            return get(graph.getNodeAttributes(node));
        };
        getter.fromEntry = function(node, attributes) {
            return get(attributes);
        };
    } else if (typeof nameOrFunction === 'function') {
        getter.fromAttributes = function() {
            throw new Error('graphology-utils/getters/createNodeValueGetter: irrelevant usage.');
        };
        getter.fromGraph = function(graph, node) {
            return coerceToDefault(nameOrFunction(node, graph.getNodeAttributes(node)));
        };
        getter.fromEntry = function(node, attributes) {
            return coerceToDefault(nameOrFunction(node, attributes));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
    }
    return getter;
}
function createEdgeValueGetter(nameOrFunction, defaultValue) {
    var getter = {};
    var coerceToDefault = function(v) {
        if (typeof v === 'undefined') return defaultValue;
        return v;
    };
    if (typeof defaultValue === 'function') coerceToDefault = defaultValue;
    var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
    };
    var returnDefault = function() {
        return coerceToDefault(undefined);
    };
    if (typeof nameOrFunction === 'string') {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, edge) {
            return get(graph.getEdgeAttributes(edge));
        };
        getter.fromEntry = function(edge, attributes) {
            return get(attributes);
        };
        getter.fromPartialEntry = getter.fromEntry;
        getter.fromMinimalEntry = getter.fromEntry;
    } else if (typeof nameOrFunction === 'function') {
        getter.fromAttributes = function() {
            throw new Error('graphology-utils/getters/createEdgeValueGetter: irrelevant usage.');
        };
        getter.fromGraph = function(graph, edge) {
            // TODO: we can do better, check #310
            var extremities = graph.extremities(edge);
            return coerceToDefault(nameOrFunction(edge, graph.getEdgeAttributes(edge), extremities[0], extremities[1], graph.getNodeAttributes(extremities[0]), graph.getNodeAttributes(extremities[1]), graph.isUndirected(edge)));
        };
        getter.fromEntry = function(e, a, s, t, sa, ta, u) {
            return coerceToDefault(nameOrFunction(e, a, s, t, sa, ta, u));
        };
        getter.fromPartialEntry = function(e, a, s, t) {
            return coerceToDefault(nameOrFunction(e, a, s, t));
        };
        getter.fromMinimalEntry = function(e, a) {
            return coerceToDefault(nameOrFunction(e, a));
        };
    } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
        getter.fromMinimalEntry = returnDefault;
    }
    return getter;
}
exports.createNodeValueGetter = createNodeValueGetter;
exports.createEdgeValueGetter = createEdgeValueGetter;
exports.createEdgeWeightGetter = function(name) {
    return createEdgeValueGetter(name, coerceWeight);
};

},{}],"iwcGK":[function(require,module,exports,__globalThis) {
/* eslint no-constant-condition: 0 */ /**
 * Graphology ForceAtlas2 Iteration
 * =================================
 *
 * Function used to perform a single iteration of the algorithm.
 */ /**
 * Matrices properties accessors.
 */ var NODE_X = 0;
var NODE_Y = 1;
var NODE_DX = 2;
var NODE_DY = 3;
var NODE_OLD_DX = 4;
var NODE_OLD_DY = 5;
var NODE_MASS = 6;
var NODE_CONVERGENCE = 7;
var NODE_SIZE = 8;
var NODE_FIXED = 9;
var EDGE_SOURCE = 0;
var EDGE_TARGET = 1;
var EDGE_WEIGHT = 2;
var REGION_NODE = 0;
var REGION_CENTER_X = 1;
var REGION_CENTER_Y = 2;
var REGION_SIZE = 3;
var REGION_NEXT_SIBLING = 4;
var REGION_FIRST_CHILD = 5;
var REGION_MASS = 6;
var REGION_MASS_CENTER_X = 7;
var REGION_MASS_CENTER_Y = 8;
var SUBDIVISION_ATTEMPTS = 3;
/**
 * Constants.
 */ var PPN = 10;
var PPE = 3;
var PPR = 9;
var MAX_FORCE = 10;
/**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @param  {Float32Array} EdgeMatrix - Edge data.
 * @return {object}                  - Some metadata.
 */ module.exports = function iterate(options, NodeMatrix, EdgeMatrix) {
    // Initializing variables
    var l, r, n, n1, n2, rn, e, w, g, s;
    var order = NodeMatrix.length, size = EdgeMatrix.length;
    var adjustSizes = options.adjustSizes;
    var thetaSquared = options.barnesHutTheta * options.barnesHutTheta;
    var outboundAttCompensation, coefficient, xDist, yDist, ewc, distance, factor;
    var RegionMatrix = [];
    // 1) Initializing layout data
    //-----------------------------
    // Resetting positions & computing max values
    for(n = 0; n < order; n += PPN){
        NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX];
        NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY];
        NodeMatrix[n + NODE_DX] = 0;
        NodeMatrix[n + NODE_DY] = 0;
    }
    // If outbound attraction distribution, compensate
    if (options.outboundAttractionDistribution) {
        outboundAttCompensation = 0;
        for(n = 0; n < order; n += PPN)outboundAttCompensation += NodeMatrix[n + NODE_MASS];
        outboundAttCompensation /= order / PPN;
    }
    // 1.bis) Barnes-Hut computation
    //------------------------------
    if (options.barnesHutOptimize) {
        // Setting up
        var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, q, q2, subdivisionAttempts;
        // Computing min and max values
        for(n = 0; n < order; n += PPN){
            minX = Math.min(minX, NodeMatrix[n + NODE_X]);
            maxX = Math.max(maxX, NodeMatrix[n + NODE_X]);
            minY = Math.min(minY, NodeMatrix[n + NODE_Y]);
            maxY = Math.max(maxY, NodeMatrix[n + NODE_Y]);
        }
        // squarify bounds, it's a quadtree
        var dx = maxX - minX, dy = maxY - minY;
        if (dx > dy) {
            minY -= (dx - dy) / 2;
            maxY = minY + dx;
        } else {
            minX -= (dy - dx) / 2;
            maxX = minX + dy;
        }
        // Build the Barnes Hut root region
        RegionMatrix[0 + REGION_NODE] = -1;
        RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2;
        RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2;
        RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY);
        RegionMatrix[0 + REGION_NEXT_SIBLING] = -1;
        RegionMatrix[0 + REGION_FIRST_CHILD] = -1;
        RegionMatrix[0 + REGION_MASS] = 0;
        RegionMatrix[0 + REGION_MASS_CENTER_X] = 0;
        RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0;
        // Add each node in the tree
        l = 1;
        for(n = 0; n < order; n += PPN){
            // Current region, starting with root
            r = 0;
            subdivisionAttempts = SUBDIVISION_ATTEMPTS;
            while(true){
                // Are there sub-regions?
                // We look at first child index
                if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                    // There are sub-regions
                    // We just iterate to find a "leaf" of the tree
                    // that is an empty region or a region with a single node
                    // (see next case)
                    // Find the quadrant of n
                    if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Left quarter
                        q = RegionMatrix[r + REGION_FIRST_CHILD];
                        else // Bottom Left quarter
                        q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                    } else if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Right quarter
                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                    else // Bottom Right quarter
                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                    // Update center of mass and mass (we only do it for non-leave regions)
                    RegionMatrix[r + REGION_MASS_CENTER_X] = (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                    RegionMatrix[r + REGION_MASS_CENTER_Y] = (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) / (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);
                    RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS];
                    // Iterate on the right quadrant
                    r = q;
                    continue;
                } else // There are no sub-regions: we are in a "leaf"
                // Is there a node in this leave?
                if (RegionMatrix[r + REGION_NODE] < 0) {
                    // There is no node in region:
                    // we record node n and go on
                    RegionMatrix[r + REGION_NODE] = n;
                    break;
                } else {
                    // There is a node in this region
                    // We will need to create sub-regions, stick the two
                    // nodes (the old one r[0] and the new one n) in two
                    // subregions. If they fall in the same quadrant,
                    // we will iterate.
                    // Create sub-regions
                    RegionMatrix[r + REGION_FIRST_CHILD] = l * PPR;
                    w = RegionMatrix[r + REGION_SIZE] / 2; // new size (half)
                    // NOTE: we use screen coordinates
                    // from Top Left to Bottom Right
                    // Top Left sub-region
                    g = RegionMatrix[r + REGION_FIRST_CHILD];
                    RegionMatrix[g + REGION_NODE] = -1;
                    RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                    RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                    RegionMatrix[g + REGION_SIZE] = w;
                    RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                    RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                    RegionMatrix[g + REGION_MASS] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                    // Bottom Left sub-region
                    g += PPR;
                    RegionMatrix[g + REGION_NODE] = -1;
                    RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
                    RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                    RegionMatrix[g + REGION_SIZE] = w;
                    RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                    RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                    RegionMatrix[g + REGION_MASS] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                    // Top Right sub-region
                    g += PPR;
                    RegionMatrix[g + REGION_NODE] = -1;
                    RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                    RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
                    RegionMatrix[g + REGION_SIZE] = w;
                    RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
                    RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                    RegionMatrix[g + REGION_MASS] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                    // Bottom Right sub-region
                    g += PPR;
                    RegionMatrix[g + REGION_NODE] = -1;
                    RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
                    RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
                    RegionMatrix[g + REGION_SIZE] = w;
                    RegionMatrix[g + REGION_NEXT_SIBLING] = RegionMatrix[r + REGION_NEXT_SIBLING];
                    RegionMatrix[g + REGION_FIRST_CHILD] = -1;
                    RegionMatrix[g + REGION_MASS] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
                    RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;
                    l += 4;
                    // Now the goal is to find two different sub-regions
                    // for the two nodes: the one previously recorded (r[0])
                    // and the one we want to add (n)
                    // Find the quadrant of the old node
                    if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                        if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Left quarter
                        q = RegionMatrix[r + REGION_FIRST_CHILD];
                        else // Bottom Left quarter
                        q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                    } else if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Right quarter
                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                    else // Bottom Right quarter
                    q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                    // We remove r[0] from the region r, add its mass to r and record it in q
                    RegionMatrix[r + REGION_MASS] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS];
                    RegionMatrix[r + REGION_MASS_CENTER_X] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X];
                    RegionMatrix[r + REGION_MASS_CENTER_Y] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y];
                    RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE];
                    RegionMatrix[r + REGION_NODE] = -1;
                    // Find the quadrant of n
                    if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
                        if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Left quarter
                        q2 = RegionMatrix[r + REGION_FIRST_CHILD];
                        else // Bottom Left quarter
                        q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
                    } else if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) // Top Right quarter
                    q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
                    else // Bottom Right quarter
                    q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
                    if (q === q2) {
                        // If both nodes are in the same quadrant,
                        // we have to try it again on this quadrant
                        if (subdivisionAttempts--) {
                            r = q;
                            continue; // while
                        } else {
                            // we are out of precision here, and we cannot subdivide anymore
                            // but we have to break the loop anyway
                            subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                            break; // while
                        }
                    }
                    // If both quadrants are different, we record n
                    // in its quadrant
                    RegionMatrix[q2 + REGION_NODE] = n;
                    break;
                }
            }
        }
    }
    // 2) Repulsion
    //--------------
    // NOTES: adjustSizes = antiCollision & scalingRatio = coefficient
    if (options.barnesHutOptimize) {
        coefficient = options.scalingRatio;
        // Applying repulsion through regions
        for(n = 0; n < order; n += PPN){
            // Computing leaf quad nodes iteration
            r = 0; // Starting with root region
            while(true)if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {
                // The region has sub-regions
                // We run the Barnes Hut test to see if we are at the right distance
                distance = Math.pow(NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X], 2) + Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2);
                s = RegionMatrix[r + REGION_SIZE];
                if (4 * s * s / distance < thetaSquared) {
                    // We treat the region as a single body, and we repulse
                    xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X];
                    yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y];
                    if (adjustSizes === true) {
                        //-- Linear Anti-collision Repulsion
                        if (distance > 0) {
                            factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                            NodeMatrix[n + NODE_DX] += xDist * factor;
                            NodeMatrix[n + NODE_DY] += yDist * factor;
                        } else if (distance < 0) {
                            factor = -coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / Math.sqrt(distance);
                            NodeMatrix[n + NODE_DX] += xDist * factor;
                            NodeMatrix[n + NODE_DY] += yDist * factor;
                        }
                    } else //-- Linear Repulsion
                    if (distance > 0) {
                        factor = coefficient * NodeMatrix[n + NODE_MASS] * RegionMatrix[r + REGION_MASS] / distance;
                        NodeMatrix[n + NODE_DX] += xDist * factor;
                        NodeMatrix[n + NODE_DY] += yDist * factor;
                    }
                    // When this is done, we iterate. We have to look at the next sibling.
                    r = RegionMatrix[r + REGION_NEXT_SIBLING];
                    if (r < 0) break; // No next sibling: we have finished the tree
                    continue;
                } else {
                    // The region is too close and we have to look at sub-regions
                    r = RegionMatrix[r + REGION_FIRST_CHILD];
                    continue;
                }
            } else {
                // The region has no sub-region
                // If there is a node r[0] and it is not n, then repulse
                rn = RegionMatrix[r + REGION_NODE];
                if (rn >= 0 && rn !== n) {
                    xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X];
                    yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y];
                    distance = xDist * xDist + yDist * yDist;
                    if (adjustSizes === true) {
                        //-- Linear Anti-collision Repulsion
                        if (distance > 0) {
                            factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                            NodeMatrix[n + NODE_DX] += xDist * factor;
                            NodeMatrix[n + NODE_DY] += yDist * factor;
                        } else if (distance < 0) {
                            factor = -coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / Math.sqrt(distance);
                            NodeMatrix[n + NODE_DX] += xDist * factor;
                            NodeMatrix[n + NODE_DY] += yDist * factor;
                        }
                    } else //-- Linear Repulsion
                    if (distance > 0) {
                        factor = coefficient * NodeMatrix[n + NODE_MASS] * NodeMatrix[rn + NODE_MASS] / distance;
                        NodeMatrix[n + NODE_DX] += xDist * factor;
                        NodeMatrix[n + NODE_DY] += yDist * factor;
                    }
                }
                // When this is done, we iterate. We have to look at the next sibling.
                r = RegionMatrix[r + REGION_NEXT_SIBLING];
                if (r < 0) break; // No next sibling: we have finished the tree
                continue;
            }
        }
    } else {
        coefficient = options.scalingRatio;
        // Square iteration
        for(n1 = 0; n1 < order; n1 += PPN)for(n2 = 0; n2 < n1; n2 += PPN){
            // Common to both methods
            xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
            yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
            if (adjustSizes === true) {
                //-- Anticollision Linear Repulsion
                distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
                if (distance > 0) {
                    factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                    // Updating nodes' dx and dy
                    NodeMatrix[n1 + NODE_DX] += xDist * factor;
                    NodeMatrix[n1 + NODE_DY] += yDist * factor;
                    NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                    NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                } else if (distance < 0) {
                    factor = 100 * coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS];
                    // Updating nodes' dx and dy
                    NodeMatrix[n1 + NODE_DX] += xDist * factor;
                    NodeMatrix[n1 + NODE_DY] += yDist * factor;
                    NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                    NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                }
            } else {
                //-- Linear Repulsion
                distance = Math.sqrt(xDist * xDist + yDist * yDist);
                if (distance > 0) {
                    factor = coefficient * NodeMatrix[n1 + NODE_MASS] * NodeMatrix[n2 + NODE_MASS] / distance / distance;
                    // Updating nodes' dx and dy
                    NodeMatrix[n1 + NODE_DX] += xDist * factor;
                    NodeMatrix[n1 + NODE_DY] += yDist * factor;
                    NodeMatrix[n2 + NODE_DX] -= xDist * factor;
                    NodeMatrix[n2 + NODE_DY] -= yDist * factor;
                }
            }
        }
    }
    // 3) Gravity
    //------------
    g = options.gravity / options.scalingRatio;
    coefficient = options.scalingRatio;
    for(n = 0; n < order; n += PPN){
        factor = 0;
        // Common to both methods
        xDist = NodeMatrix[n + NODE_X];
        yDist = NodeMatrix[n + NODE_Y];
        distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        if (options.strongGravityMode) //-- Strong gravity
        {
            if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g;
        } else //-- Linear Anti-collision Repulsion n
        if (distance > 0) factor = coefficient * NodeMatrix[n + NODE_MASS] * g / distance;
        // Updating node's dx and dy
        NodeMatrix[n + NODE_DX] -= xDist * factor;
        NodeMatrix[n + NODE_DY] -= yDist * factor;
    }
    // 4) Attraction
    //---------------
    coefficient = 1 * (options.outboundAttractionDistribution ? outboundAttCompensation : 1);
    // TODO: simplify distance
    // TODO: coefficient is always used as -c --> optimize?
    for(e = 0; e < size; e += PPE){
        n1 = EdgeMatrix[e + EDGE_SOURCE];
        n2 = EdgeMatrix[e + EDGE_TARGET];
        w = EdgeMatrix[e + EDGE_WEIGHT];
        // Edge weight influence
        ewc = Math.pow(w, options.edgeWeightInfluence);
        // Common measures
        xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
        yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];
        // Applying attraction to nodes
        if (adjustSizes === true) {
            distance = Math.sqrt(xDist * xDist + yDist * yDist) - NodeMatrix[n1 + NODE_SIZE] - NodeMatrix[n2 + NODE_SIZE];
            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) //-- LinLog Degree Distributed Anti-collision Attraction
                {
                    if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                } else //-- LinLog Anti-collision Attraction
                if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance;
            } else {
                if (options.outboundAttractionDistribution) //-- Linear Degree Distributed Anti-collision Attraction
                {
                    if (distance > 0) factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
                } else //-- Linear Anti-collision Attraction
                if (distance > 0) factor = -coefficient * ewc;
            }
        } else {
            distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
            if (options.linLogMode) {
                if (options.outboundAttractionDistribution) //-- LinLog Degree Distributed Attraction
                {
                    if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance / NodeMatrix[n1 + NODE_MASS];
                } else //-- LinLog Attraction
                if (distance > 0) factor = -coefficient * ewc * Math.log(1 + distance) / distance;
            } else if (options.outboundAttractionDistribution) {
                //-- Linear Attraction Mass Distributed
                // NOTE: Distance is set to 1 to override next condition
                distance = 1;
                factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
            } else {
                //-- Linear Attraction
                // NOTE: Distance is set to 1 to override next condition
                distance = 1;
                factor = -coefficient * ewc;
            }
        }
        // Updating nodes' dx and dy
        // TODO: if condition or factor = 1?
        if (distance > 0) {
            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor;
            NodeMatrix[n1 + NODE_DY] += yDist * factor;
            NodeMatrix[n2 + NODE_DX] -= xDist * factor;
            NodeMatrix[n2 + NODE_DY] -= yDist * factor;
        }
    }
    // 5) Apply Forces
    //-----------------
    var force, swinging, traction, nodespeed, newX, newY;
    // MATH: sqrt and square distances
    if (adjustSizes === true) {
        for(n = 0; n < order; n += PPN)if (NodeMatrix[n + NODE_FIXED] !== 1) {
            force = Math.sqrt(Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2));
            if (force > MAX_FORCE) {
                NodeMatrix[n + NODE_DX] = NodeMatrix[n + NODE_DX] * MAX_FORCE / force;
                NodeMatrix[n + NODE_DY] = NodeMatrix[n + NODE_DY] * MAX_FORCE / force;
            }
            swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
            traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
            nodespeed = 0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
            // Updating node's positon
            newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
            NodeMatrix[n + NODE_X] = newX;
            newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
            NodeMatrix[n + NODE_Y] = newY;
        }
    } else {
        for(n = 0; n < order; n += PPN)if (NodeMatrix[n + NODE_FIXED] !== 1) {
            swinging = NodeMatrix[n + NODE_MASS] * Math.sqrt((NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]));
            traction = Math.sqrt((NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) * (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) + (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) * (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])) / 2;
            nodespeed = NodeMatrix[n + NODE_CONVERGENCE] * Math.log(1 + traction) / (1 + Math.sqrt(swinging));
            // Updating node convergence
            NodeMatrix[n + NODE_CONVERGENCE] = Math.min(1, Math.sqrt(nodespeed * (Math.pow(NodeMatrix[n + NODE_DX], 2) + Math.pow(NodeMatrix[n + NODE_DY], 2)) / (1 + Math.sqrt(swinging))));
            // Updating node's positon
            newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] * (nodespeed / options.slowDown);
            NodeMatrix[n + NODE_X] = newX;
            newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] * (nodespeed / options.slowDown);
            NodeMatrix[n + NODE_Y] = newY;
        }
    }
    // We return the information about the layout (no need to return the matrices)
    return {};
};

},{}],"bVS2M":[function(require,module,exports,__globalThis) {
/**
 * Graphology ForceAtlas2 Helpers
 * ===============================
 *
 * Miscellaneous helper functions.
 */ /**
 * Constants.
 */ var PPN = 10;
var PPE = 3;
/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */ exports.assign = function(target) {
    target = target || {};
    var objects = Array.prototype.slice.call(arguments).slice(1), i, k, l;
    for(i = 0, l = objects.length; i < l; i++){
        if (!objects[i]) continue;
        for(k in objects[i])target[k] = objects[i][k];
    }
    return target;
};
/**
 * Function used to validate the given settings.
 *
 * @param  {object}      settings - Settings to validate.
 * @return {object|null}
 */ exports.validateSettings = function(settings) {
    if ('linLogMode' in settings && typeof settings.linLogMode !== 'boolean') return {
        message: 'the `linLogMode` setting should be a boolean.'
    };
    if ('outboundAttractionDistribution' in settings && typeof settings.outboundAttractionDistribution !== 'boolean') return {
        message: 'the `outboundAttractionDistribution` setting should be a boolean.'
    };
    if ('adjustSizes' in settings && typeof settings.adjustSizes !== 'boolean') return {
        message: 'the `adjustSizes` setting should be a boolean.'
    };
    if ('edgeWeightInfluence' in settings && typeof settings.edgeWeightInfluence !== 'number') return {
        message: 'the `edgeWeightInfluence` setting should be a number.'
    };
    if ('scalingRatio' in settings && !(typeof settings.scalingRatio === 'number' && settings.scalingRatio >= 0)) return {
        message: 'the `scalingRatio` setting should be a number >= 0.'
    };
    if ('strongGravityMode' in settings && typeof settings.strongGravityMode !== 'boolean') return {
        message: 'the `strongGravityMode` setting should be a boolean.'
    };
    if ('gravity' in settings && !(typeof settings.gravity === 'number' && settings.gravity >= 0)) return {
        message: 'the `gravity` setting should be a number >= 0.'
    };
    if ('slowDown' in settings && !(typeof settings.slowDown === 'number' || settings.slowDown >= 0)) return {
        message: 'the `slowDown` setting should be a number >= 0.'
    };
    if ('barnesHutOptimize' in settings && typeof settings.barnesHutOptimize !== 'boolean') return {
        message: 'the `barnesHutOptimize` setting should be a boolean.'
    };
    if ('barnesHutTheta' in settings && !(typeof settings.barnesHutTheta === 'number' && settings.barnesHutTheta >= 0)) return {
        message: 'the `barnesHutTheta` setting should be a number >= 0.'
    };
    return null;
};
/**
 * Function generating a flat matrix for both nodes & edges of the given graph.
 *
 * @param  {Graph}    graph         - Target graph.
 * @param  {function} getEdgeWeight - Edge weight getter function.
 * @return {object}                 - Both matrices.
 */ exports.graphToByteArrays = function(graph, getEdgeWeight) {
    var order = graph.order;
    var size = graph.size;
    var index = {};
    var j;
    // NOTE: float32 could lead to issues if edge array needs to index large
    // number of nodes.
    var NodeMatrix = new Float32Array(order * PPN);
    var EdgeMatrix = new Float32Array(size * PPE);
    // Iterate through nodes
    j = 0;
    graph.forEachNode(function(node, attr) {
        // Node index
        index[node] = j;
        // Populating byte array
        NodeMatrix[j] = attr.x;
        NodeMatrix[j + 1] = attr.y;
        NodeMatrix[j + 2] = 0; // dx
        NodeMatrix[j + 3] = 0; // dy
        NodeMatrix[j + 4] = 0; // old_dx
        NodeMatrix[j + 5] = 0; // old_dy
        NodeMatrix[j + 6] = 1; // mass
        NodeMatrix[j + 7] = 1; // convergence
        NodeMatrix[j + 8] = attr.size || 1;
        NodeMatrix[j + 9] = attr.fixed ? 1 : 0;
        j += PPN;
    });
    // Iterate through edges
    j = 0;
    graph.forEachEdge(function(edge, attr, source, target, sa, ta, u) {
        var sj = index[source];
        var tj = index[target];
        var weight = getEdgeWeight(edge, attr, source, target, sa, ta, u);
        // Incrementing mass to be a node's weighted degree
        NodeMatrix[sj + 6] += weight;
        NodeMatrix[tj + 6] += weight;
        // Populating byte array
        EdgeMatrix[j] = sj;
        EdgeMatrix[j + 1] = tj;
        EdgeMatrix[j + 2] = weight;
        j += PPE;
    });
    return {
        nodes: NodeMatrix,
        edges: EdgeMatrix
    };
};
/**
 * Function applying the layout back to the graph.
 *
 * @param {Graph}         graph         - Target graph.
 * @param {Float32Array}  NodeMatrix    - Node matrix.
 * @param {function|null} outputReducer - A node reducer.
 */ exports.assignLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var i = 0;
    graph.updateEachNodeAttributes(function(node, attr) {
        attr.x = NodeMatrix[i];
        attr.y = NodeMatrix[i + 1];
        i += PPN;
        return outputReducer ? outputReducer(node, attr) : attr;
    });
};
/**
 * Function reading the positions (only) from the graph, to write them in the matrix.
 *
 * @param {Graph}        graph      - Target graph.
 * @param {Float32Array} NodeMatrix - Node matrix.
 */ exports.readGraphPositions = function(graph, NodeMatrix) {
    var i = 0;
    graph.forEachNode(function(node, attr) {
        NodeMatrix[i] = attr.x;
        NodeMatrix[i + 1] = attr.y;
        i += PPN;
    });
};
/**
 * Function collecting the layout positions.
 *
 * @param  {Graph}         graph         - Target graph.
 * @param  {Float32Array}  NodeMatrix    - Node matrix.
 * @param  {function|null} outputReducer - A nodes reducer.
 * @return {object}                      - Map to node positions.
 */ exports.collectLayoutChanges = function(graph, NodeMatrix, outputReducer) {
    var nodes = graph.nodes(), positions = {};
    for(var i = 0, j = 0, l = NodeMatrix.length; i < l; i += PPN){
        if (outputReducer) {
            var newAttr = Object.assign({}, graph.getNodeAttributes(nodes[j]));
            newAttr.x = NodeMatrix[i];
            newAttr.y = NodeMatrix[i + 1];
            newAttr = outputReducer(nodes[j], newAttr);
            positions[nodes[j]] = {
                x: newAttr.x,
                y: newAttr.y
            };
        } else positions[nodes[j]] = {
            x: NodeMatrix[i],
            y: NodeMatrix[i + 1]
        };
        j++;
    }
    return positions;
};
/**
 * Function returning a web worker from the given function.
 *
 * @param  {function}  fn - Function for the worker.
 * @return {DOMString}
 */ exports.createWorker = function createWorker(fn) {
    var xURL = window.URL || window.webkitURL;
    var code = fn.toString();
    var objectUrl = xURL.createObjectURL(new Blob([
        '(' + code + ').call(this);'
    ], {
        type: 'text/javascript'
    }));
    var worker = new Worker(objectUrl);
    xURL.revokeObjectURL(objectUrl);
    return worker;
};

},{}],"jGMd6":[function(require,module,exports,__globalThis) {
/**
 * Graphology ForceAtlas2 Layout Default Settings
 * ===============================================
 */ module.exports = {
    linLogMode: false,
    outboundAttractionDistribution: false,
    adjustSizes: false,
    edgeWeightInfluence: 1,
    scalingRatio: 1,
    strongGravityMode: false,
    gravity: 1,
    slowDown: 1,
    barnesHutOptimize: false,
    barnesHutTheta: 0.5
};

},{}],"du8Bx":[function(require,module,exports,__globalThis) {
// src/visualizer_multiverse.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawMultiverse", ()=>drawMultiverse);
var _graphology = require("graphology");
var _graphologyDefault = parcelHelpers.interopDefault(_graphology);
var _sharedTypes = require("./shared_types");
var _graphologyLayoutForceatlas2 = require("graphology-layout-forceatlas2");
var _graphologyLayoutForceatlas2Default = parcelHelpers.interopDefault(_graphologyLayoutForceatlas2);
function getSLevelColor(level) {
    switch(level){
        case (0, _sharedTypes.S_Level).S0_Vacuum:
            return '#495057';
        case (0, _sharedTypes.S_Level).S1_SimpleFixedPoint:
            return '#6c757d';
        case (0, _sharedTypes.S_Level).S2_RecursiveStructure:
            return '#007bff';
        case (0, _sharedTypes.S_Level).S3_DynamicEquilibrium:
            return '#ffc107';
        case (0, _sharedTypes.S_Level).S4_CompositeStability:
            return '#28a745';
        default:
            return '#ced4da';
    }
}
function drawMultiverse(universes, canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get 2D context from canvas for drawMultiverse");
        return;
    }
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    if (universes.length === 0) return;
    const multiverseGraph = new (0, _graphologyDefault.default)();
    universes.forEach((uni, i)=>{
        const complexity = uni.descriptor.C.toNumber();
        const size = Math.max(3, Math.log(complexity + 1) * 2.5 + 3);
        const color = getSLevelColor(uni.descriptor.S.level);
        multiverseGraph.addNode(i.toString(), {
            size: size,
            color: color,
            x: (Math.random() - 0.5) * width * 0.4,
            y: (Math.random() - 0.5) * height * 0.4,
            originalDescriptor: uni.descriptor
        });
    });
    if (multiverseGraph.order > 1) try {
        (0, _graphologyLayoutForceatlas2Default.default).assign(multiverseGraph, {
            iterations: Math.max(50, Math.min(150, multiverseGraph.order * 2)),
            settings: {
                gravity: Math.max(1.0, multiverseGraph.order * 0.05),
                scalingRatio: Math.min(width, height) / Math.max(10, Math.sqrt(multiverseGraph.order) * 15),
                barnesHutOptimize: multiverseGraph.order > 75,
                barnesHutTheta: 0.8,
                strongGravityMode: true,
                slowDown: 1 + Math.log10(multiverseGraph.order + 1),
                adjustSizes: true
            }
        });
    } catch (e) {
        console.error("Multiverse ForceAtlas2 layout failed:", e);
    }
    multiverseGraph.forEachNode((_node, attrs)=>{
        const x = attrs.x + width / 2;
        const y = attrs.y + height / 2;
        ctx.beginPath();
        ctx.arc(x, y, attrs.size, 0, 2 * Math.PI);
        ctx.fillStyle = attrs.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
    });
    ctx.globalAlpha = 1.0;
}

},{"graphology":"3u8J2","./shared_types":"adq2h","graphology-layout-forceatlas2":"8U6DU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1a9PO":[function(require,module,exports,__globalThis) {
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

},{}]},["elbaT","gNc1f"], "gNc1f", "parcelRequirea6a8", {})

//# sourceMappingURL=mvu2-sim.0f289648.js.map
