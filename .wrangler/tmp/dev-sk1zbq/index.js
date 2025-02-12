function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
    init_cloudflare();
    globalThis.clearImmediate = clearImmediateFallback;
  }
});

// node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
var init_utils = __esm({
  "node_modules/unenv/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// node_modules/unenv/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate;
var init_immediate = __esm({
  "node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Immediate = class {
      _onImmediate;
      _timeout;
      constructor(callback, args) {
        this._onImmediate = callback;
        if ("setTimeout" in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args);
        } else {
          callback(...args);
        }
      }
      ref() {
        this._timeout?.ref();
        return this;
      }
      unref() {
        this._timeout?.unref();
        return this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        if ("clearTimeout" in globalThis) {
          clearTimeout(this._timeout);
        }
      }
    };
    __name(Immediate, "Immediate");
  }
});

// node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
var init_set_immediate = __esm({
  "node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_immediate();
    __name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
    __name(setImmediateFallback, "setImmediateFallback");
    setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
    __name(clearImmediateFallback, "clearImmediateFallback");
  }
});

// node_modules/unenv/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
  "node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_set_immediate();
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
    init_cloudflare();
    globalThis.setImmediate = setImmediateFallback;
  }
});

// node_modules/unenv/runtime/mock/proxy.mjs
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
var fn, proxy_default;
var init_proxy = __esm({
  "node_modules/unenv/runtime/mock/proxy.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    fn = /* @__PURE__ */ __name(function() {
    }, "fn");
    __name(createMock, "createMock");
    proxy_default = createMock("mock");
  }
});

// node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, assert, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console;
var init_console = __esm({
  "node_modules/unenv/runtime/node/console/index.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_noop();
    init_utils();
    init_proxy();
    init_noop();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? notImplemented("console.createTask");
    assert = notImplemented("console.assert");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? proxy_default.__createMock__("console.Console");
  }
});

// node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole, assert2, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, cloudflare_default;
var init_cloudflare2 = __esm({
  "node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert: assert2,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler: noop_default,
      _stdout,
      _stdoutErrorHandler: noop_default,
      _times: proxy_default
    });
    cloudflare_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
    init_cloudflare2();
    globalThis.console = cloudflare_default;
  }
});

// node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes, _PerformanceEntry, PerformanceEntry, _PerformanceMark, PerformanceMark, _PerformanceMeasure, PerformanceMeasure, _PerformanceResourceTiming, PerformanceResourceTiming;
var init_entry = __esm({
  "node_modules/unenv/runtime/web/performance/_entry.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _supportedEntryTypes = [
      "event",
      // PerformanceEntry
      "mark",
      // PerformanceMark
      "measure",
      // PerformanceMeasure
      "resource"
      // PerformanceResourceTiming
    ];
    _PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || performance.now();
        this.detail = options?.detail;
      }
      get duration() {
        return performance.now() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(_PerformanceEntry, "_PerformanceEntry");
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
    _PerformanceMark = class extends _PerformanceEntry {
      entryType = "mark";
    };
    __name(_PerformanceMark, "_PerformanceMark");
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
    _PerformanceMeasure = class extends _PerformanceEntry {
      entryType = "measure";
    };
    __name(_PerformanceMeasure, "_PerformanceMeasure");
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
  }
});

// node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2;
var init_performance = __esm({
  "node_modules/unenv/runtime/web/performance/_performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_proxy();
    init_entry();
    _timeOrigin = Date.now();
    _Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = proxy_default.__createMock__("PerformanceNavigation");
      timing = proxy_default.__createMock__("PerformanceTiming");
      onresourcetimingbufferfull = null;
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
          return globalThis.performance.now();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== "resource" || e.entryType !== "navigation"
        );
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter(
          (e) => e.name === name && (!type2 || e.entryType === type2)
        );
      }
      getEntriesByType(type2) {
        return this._entries.filter(
          (e) => e.entryType === type2
        );
      }
      mark(name, options) {
        const entry = new _PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: { start, end }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
    };
    __name(_Performance, "_Performance");
    Performance = globalThis.Performance || _Performance;
    performance2 = globalThis.performance || new Performance();
  }
});

// node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver, PerformanceObserver, _PerformanceObserverEntryList, PerformanceObserverEntryList;
var init_observer = __esm({
  "node_modules/unenv/runtime/web/performance/_observer.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_entry();
    _PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
    };
    __name(_PerformanceObserver, "_PerformanceObserver");
    __publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
    _PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    __name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
    PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
  }
});

// node_modules/unenv/runtime/web/performance/index.mjs
var init_performance2 = __esm({
  "node_modules/unenv/runtime/web/performance/index.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance();
    init_observer();
    init_entry();
  }
});

// node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
var global_this_default;
var init_global_this = __esm({
  "node_modules/unenv/runtime/polyfill/global-this.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(getGlobal, "getGlobal");
    global_this_default = getGlobal();
  }
});

// node_modules/unenv/runtime/polyfill/performance.mjs
var performance_default;
var init_performance3 = __esm({
  "node_modules/unenv/runtime/polyfill/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance2();
    init_global_this();
    global_this_default.performance = global_this_default.performance || performance2;
    global_this_default.Performance = global_this_default.Performance || Performance;
    global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
    global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
    global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
    global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
    global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
    global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
    performance_default = global_this_default.performance;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
    init_performance3();
    globalThis.performance = performance_default;
  }
});

// node_modules/unenv/runtime/node/tty/internal/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/runtime/node/tty/internal/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/runtime/node/tty/internal/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/runtime/node/tty/internal/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env5) {
        return 1;
      }
      hasColors(count3, env5) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/runtime/node/tty/index.mjs
var init_tty = __esm({
  "node_modules/unenv/runtime/node/tty/index.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/runtime/mock/empty.mjs
var empty_default;
var init_empty = __esm({
  "node_modules/unenv/runtime/mock/empty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    empty_default = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true }
      })
    );
  }
});

// node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env;
var init_env = __esm({
  "node_modules/unenv/runtime/node/process/internal/env.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _envShim = /* @__PURE__ */ Object.create(null);
    _processEnv = globalThis.process?.env;
    _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
    env = new Proxy(_envShim, {
      get(_, prop) {
        const env22 = _getEnv();
        return env22[prop] ?? _envShim[prop];
      },
      has(_, prop) {
        const env22 = _getEnv();
        return prop in env22 || prop in _envShim;
      },
      set(_, prop, value) {
        const env22 = _getEnv(true);
        env22[prop] = value;
        return true;
      },
      deleteProperty(_, prop) {
        const env22 = _getEnv(true);
        delete env22[prop];
        return true;
      },
      ownKeys() {
        const env22 = _getEnv();
        return Object.keys(env22);
      }
    });
  }
});

// node_modules/unenv/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick22;
}
var hrtime, nextTick;
var init_time = __esm({
  "node_modules/unenv/runtime/node/process/internal/time.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    hrtime = Object.assign(
      /* @__PURE__ */ __name(function hrtime2(startTime) {
        const now = Date.now();
        const seconds = Math.trunc(now / 1e3);
        const nanos = now % 1e3 * 1e6;
        if (startTime) {
          let diffSeconds = seconds - startTime[0];
          let diffNanos = nanos - startTime[0];
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1;
            diffNanos = 1e9 + diffNanos;
          }
          return [diffSeconds, diffNanos];
        }
        return [seconds, nanos];
      }, "hrtime2"),
      {
        bigint: /* @__PURE__ */ __name(function bigint() {
          return BigInt(Date.now() * 1e6);
        }, "bigint")
      }
    );
    nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : _createNextTickWithTimeout();
    __name(_createNextTickWithTimeout, "_createNextTickWithTimeout");
  }
});

// node_modules/unenv/runtime/node/process/internal/process.mjs
function noop() {
  return process2;
}
var title, argv, version, versions, on, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, listeners, listenerCount, binding, _cwd, cwd, chdir, umask, getegid, geteuid, getgid, getuid, getgroups, getBuiltinModule, abort, allowedNodeEnvironmentFlags, arch, argv0, config, connected, constrainedMemory, availableMemory, cpuUsage, debugPort, dlopen, disconnect, emitWarning, eventNames, execArgv, execPath, exit, features, getActiveResourcesInfo, getMaxListeners, kill, memoryUsage, pid, platform, ppid, rawListeners, release, report, resourceUsage, setegid, seteuid, setgid, setgroups, setuid, setMaxListeners, setSourceMapsEnabled, stdin, stdout, stderr, traceDeprecation, uptime, exitCode, setUncaughtExceptionCaptureCallback, hasUncaughtExceptionCaptureCallback, sourceMapsEnabled, loadEnvFile, mainModule, permission, channel, throwDeprecation, finalization, assert3, openStdin, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _linkedBinding, domain, initgroups, moduleLoadList, reallyExit, _exiting, _events, _eventsCount, _maxListeners, process2;
var init_process = __esm({
  "node_modules/unenv/runtime/node/process/internal/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_tty();
    init_empty();
    init_utils();
    init_env();
    init_time();
    init_time();
    title = "unenv";
    argv = [];
    version = "";
    versions = {
      ares: "",
      http_parser: "",
      icu: "",
      modules: "",
      node: "",
      openssl: "",
      uv: "",
      v8: "",
      zlib: ""
    };
    __name(noop, "noop");
    on = noop;
    addListener = noop;
    once = noop;
    off = noop;
    removeListener = noop;
    removeAllListeners = noop;
    emit = /* @__PURE__ */ __name(function emit2(event) {
      if (event === "message" || event === "multipleResolves") {
        return process2;
      }
      return false;
    }, "emit2");
    prependListener = noop;
    prependOnceListener = noop;
    listeners = /* @__PURE__ */ __name(function(name) {
      return [];
    }, "listeners");
    listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
    binding = /* @__PURE__ */ __name(function(name) {
      throw new Error("[unenv] process.binding is not supported");
    }, "binding");
    _cwd = "/";
    cwd = /* @__PURE__ */ __name(function cwd2() {
      return _cwd;
    }, "cwd2");
    chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
      _cwd = dir3;
    }, "chdir2");
    umask = /* @__PURE__ */ __name(function umask2() {
      return 0;
    }, "umask2");
    getegid = /* @__PURE__ */ __name(function getegid2() {
      return 1e3;
    }, "getegid2");
    geteuid = /* @__PURE__ */ __name(function geteuid2() {
      return 1e3;
    }, "geteuid2");
    getgid = /* @__PURE__ */ __name(function getgid2() {
      return 1e3;
    }, "getgid2");
    getuid = /* @__PURE__ */ __name(function getuid2() {
      return 1e3;
    }, "getuid2");
    getgroups = /* @__PURE__ */ __name(function getgroups2() {
      return [];
    }, "getgroups2");
    getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
    abort = notImplemented("process.abort");
    allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
    arch = "";
    argv0 = "";
    config = empty_default;
    connected = false;
    constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
    availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
    cpuUsage = notImplemented("process.cpuUsage");
    debugPort = 0;
    dlopen = notImplemented("process.dlopen");
    disconnect = noop;
    emitWarning = noop;
    eventNames = notImplemented("process.eventNames");
    execArgv = [];
    execPath = "";
    exit = notImplemented("process.exit");
    features = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0
    });
    getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
    getMaxListeners = notImplemented(
      "process.getMaxListeners"
    );
    kill = notImplemented("process.kill");
    memoryUsage = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }),
      { rss: () => 0 }
    );
    pid = 1e3;
    platform = "";
    ppid = 1e3;
    rawListeners = notImplemented(
      "process.rawListeners"
    );
    release = /* @__PURE__ */ Object.create({
      name: "",
      lts: "",
      sourceUrl: void 0,
      headersUrl: void 0
    });
    report = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented("process.report.getReport"),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented("process.report.writeReport")
    });
    resourceUsage = notImplemented(
      "process.resourceUsage"
    );
    setegid = notImplemented("process.setegid");
    seteuid = notImplemented("process.seteuid");
    setgid = notImplemented("process.setgid");
    setgroups = notImplemented("process.setgroups");
    setuid = notImplemented("process.setuid");
    setMaxListeners = notImplemented(
      "process.setMaxListeners"
    );
    setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
    stdin = new ReadStream(0);
    stdout = new WriteStream(1);
    stderr = new WriteStream(2);
    traceDeprecation = false;
    uptime = /* @__PURE__ */ __name(() => 0, "uptime");
    exitCode = 0;
    setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
    hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
    sourceMapsEnabled = false;
    loadEnvFile = notImplemented(
      "process.loadEnvFile"
    );
    mainModule = void 0;
    permission = {
      has: () => false
    };
    channel = {
      ref() {
      },
      unref() {
      }
    };
    throwDeprecation = false;
    finalization = {
      register() {
      },
      unregister() {
      },
      registerBeforeExit() {
      }
    };
    assert3 = notImplemented("process.assert");
    openStdin = notImplemented("process.openStdin");
    _debugEnd = notImplemented("process._debugEnd");
    _debugProcess = notImplemented("process._debugProcess");
    _fatalException = notImplemented("process._fatalException");
    _getActiveHandles = notImplemented("process._getActiveHandles");
    _getActiveRequests = notImplemented("process._getActiveRequests");
    _kill = notImplemented("process._kill");
    _preload_modules = [];
    _rawDebug = notImplemented("process._rawDebug");
    _startProfilerIdleNotifier = notImplemented(
      "process._startProfilerIdleNotifier"
    );
    _stopProfilerIdleNotifier = notImplemented(
      "process.__stopProfilerIdleNotifier"
    );
    _tickCallback = notImplemented("process._tickCallback");
    _linkedBinding = notImplemented("process._linkedBinding");
    domain = void 0;
    initgroups = notImplemented("process.initgroups");
    moduleLoadList = [];
    reallyExit = noop;
    _exiting = false;
    _events = [];
    _eventsCount = 0;
    _maxListeners = 0;
    process2 = {
      // @ts-expect-error
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      exitCode,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      throwDeprecation,
      mainModule,
      permission,
      channel,
      arch,
      argv,
      argv0,
      assert: assert3,
      binding,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions
    };
  }
});

// node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess, getBuiltinModule2, workerdProcess, env2, exit2, nextTick2, platform2, _process, cloudflare_default2;
var init_cloudflare3 = __esm({
  "node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_process();
    unpatchedGlobalThisProcess = globalThis["process"];
    getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule2("node:process");
    ({ env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess);
    _process = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd,
      _debugProcess,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _linkedBinding,
      _maxListeners,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert3,
      availableMemory,
      binding,
      chdir,
      config,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain,
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exit: exit2,
      exitCode,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList,
      off,
      on,
      once,
      openStdin,
      pid,
      platform: platform2,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      setUncaughtExceptionCaptureCallback,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      umask,
      uptime,
      version,
      versions,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env2,
      getBuiltinModule: getBuiltinModule2,
      nextTick: nextTick2
    };
    cloudflare_default2 = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
    init_cloudflare3();
    globalThis.process = cloudflare_default2;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse2;
    exports.serialize = serialize2;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = /* @__PURE__ */ __name(function() {
      }, "C");
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse2(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode2;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    __name(parse2, "parse");
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    __name(startIndex, "startIndex");
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    __name(endIndex, "endIndex");
    function serialize2(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    __name(serialize2, "serialize");
    function decode2(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    __name(decode2, "decode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    __name(isDate, "isDate");
  }
});

// .wrangler/tmp/bundle-F1HKPb/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// .wrangler/tmp/bundle-F1HKPb/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// apps/api/src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/memoirist/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var createNode = /* @__PURE__ */ __name((part, inert) => {
  const inertMap = inert?.length ? {} : null;
  if (inertMap)
    for (const child of inert)
      inertMap[child.part.charCodeAt(0)] = child;
  return {
    part,
    store: null,
    inert: inertMap,
    params: null,
    wildcardStore: null
  };
}, "createNode");
var cloneNode = /* @__PURE__ */ __name((node, part) => ({
  ...node,
  part
}), "cloneNode");
var createParamNode = /* @__PURE__ */ __name((name) => ({
  name,
  store: null,
  inert: null
}), "createParamNode");
var _a;
var Memoirist = (/* @__PURE__ */ __name(_a = class {
  constructor(config2 = {}) {
    this.config = config2;
    if (config2.lazy)
      this.find = this.lazyFind;
  }
  root = {};
  history = [];
  deferred = [];
  lazyFind = (method, url) => {
    if (!this.config.lazy)
      return this.find;
    this.build();
    return this.find(method, url);
  };
  build() {
    if (!this.config.lazy)
      return;
    for (const [method, path, store] of this.deferred)
      this.add(method, path, store, { lazy: false, ignoreHistory: true });
    this.deferred = [];
    this.find = (method, url) => {
      const root = this.root[method];
      if (!root)
        return null;
      return matchRoute(url, url.length, root, 0);
    };
  }
  add(method, path, store, {
    ignoreError = false,
    ignoreHistory = false,
    lazy = this.config.lazy
  } = {}) {
    if (lazy) {
      this.find = this.lazyFind;
      this.deferred.push([method, path, store]);
      return store;
    }
    if (typeof path !== "string")
      throw new TypeError("Route path must be a string");
    if (path === "")
      path = "/";
    else if (path[0] !== "/")
      path = `/${path}`;
    const isWildcard = path[path.length - 1] === "*";
    const optionalParams = path.match(_a.regex.optionalParams);
    if (optionalParams) {
      const originalPath = path.replaceAll("?", "");
      this.add(method, originalPath, store, {
        ignoreError,
        ignoreHistory,
        lazy
      });
      for (let i = 0; i < optionalParams.length; i++) {
        let newPath = path.replace("/" + optionalParams[i], "");
        this.add(method, newPath, store, {
          ignoreError: true,
          ignoreHistory,
          lazy
        });
      }
      return store;
    }
    if (optionalParams)
      path = path.replaceAll("?", "");
    if (this.history.find(([m, p, s]) => m === method && p === path))
      return store;
    if (isWildcard || optionalParams && path.charCodeAt(path.length - 1) === 63)
      path = path.slice(0, -1);
    if (!ignoreHistory)
      this.history.push([method, path, store]);
    const inertParts = path.split(_a.regex.static);
    const paramParts = path.match(_a.regex.params) || [];
    if (inertParts[inertParts.length - 1] === "")
      inertParts.pop();
    let node;
    if (!this.root[method])
      node = this.root[method] = createNode("/");
    else
      node = this.root[method];
    let paramPartsIndex = 0;
    for (let i = 0; i < inertParts.length; ++i) {
      let part = inertParts[i];
      if (i > 0) {
        const param = paramParts[paramPartsIndex++].slice(1);
        if (node.params === null)
          node.params = createParamNode(param);
        else if (node.params.name !== param) {
          if (ignoreError)
            return store;
          else
            throw new Error(
              `Cannot create route "${path}" with parameter "${param}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`
            );
        }
        const params = node.params;
        if (params.inert === null) {
          node = params.inert = createNode(part);
          continue;
        }
        node = params.inert;
      }
      for (let j = 0; ; ) {
        if (j === part.length) {
          if (j < node.part.length) {
            const childNode = cloneNode(node, node.part.slice(j));
            Object.assign(node, createNode(part, [childNode]));
          }
          break;
        }
        if (j === node.part.length) {
          if (node.inert === null)
            node.inert = {};
          const inert = node.inert[part.charCodeAt(j)];
          if (inert) {
            node = inert;
            part = part.slice(j);
            j = 0;
            continue;
          }
          const childNode = createNode(part.slice(j));
          node.inert[part.charCodeAt(j)] = childNode;
          node = childNode;
          break;
        }
        if (part[j] !== node.part[j]) {
          const existingChild = cloneNode(node, node.part.slice(j));
          const newChild = createNode(part.slice(j));
          Object.assign(
            node,
            createNode(node.part.slice(0, j), [
              existingChild,
              newChild
            ])
          );
          node = newChild;
          break;
        }
        ++j;
      }
    }
    if (paramPartsIndex < paramParts.length) {
      const param = paramParts[paramPartsIndex];
      const name = param.slice(1);
      if (node.params === null)
        node.params = createParamNode(name);
      else if (node.params.name !== name) {
        if (ignoreError)
          return store;
        else
          throw new Error(
            `Cannot create route "${path}" with parameter "${name}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`
          );
      }
      if (node.params.store === null)
        node.params.store = store;
      return node.params.store;
    }
    if (isWildcard) {
      if (node.wildcardStore === null)
        node.wildcardStore = store;
      return node.wildcardStore;
    }
    if (node.store === null)
      node.store = store;
    return node.store;
  }
  find(method, url) {
    const root = this.root[method];
    if (!root)
      return null;
    return matchRoute(url, url.length, root, 0);
  }
}, "_Memoirist"), __publicField(_a, "regex", {
  static: /:.+?(?=\/|$)/,
  params: /:.+?(?=\/|$)/g,
  optionalParams: /:.+?\?(?=\/|$)/g
}), _a);
var matchRoute = /* @__PURE__ */ __name((url, urlLength, node, startIndex) => {
  const part = node.part;
  const length = part.length;
  const endIndex = startIndex + length;
  if (length > 1) {
    if (endIndex > urlLength)
      return null;
    if (length < 15) {
      for (let i = 1, j = startIndex + 1; i < length; ++i, ++j)
        if (part.charCodeAt(i) !== url.charCodeAt(j))
          return null;
    } else if (url.slice(startIndex, endIndex) !== part)
      return null;
  }
  if (endIndex === urlLength) {
    if (node.store !== null)
      return {
        store: node.store,
        params: {}
      };
    if (node.wildcardStore !== null)
      return {
        store: node.wildcardStore,
        params: { "*": "" }
      };
    return null;
  }
  if (node.inert !== null) {
    const inert = node.inert[url.charCodeAt(endIndex)];
    if (inert !== void 0) {
      const route = matchRoute(url, urlLength, inert, endIndex);
      if (route !== null)
        return route;
    }
  }
  if (node.params !== null) {
    const { store, name, inert } = node.params;
    const slashIndex = url.indexOf("/", endIndex);
    if (slashIndex !== endIndex) {
      if (slashIndex === -1 || slashIndex >= urlLength) {
        if (store !== null) {
          const params = {};
          params[name] = url.substring(endIndex, urlLength);
          return {
            store,
            params
          };
        }
      } else if (inert !== null) {
        const route = matchRoute(url, urlLength, inert, slashIndex);
        if (route !== null) {
          route.params[name] = url.substring(endIndex, slashIndex);
          return route;
        }
      }
    }
  }
  if (node.wildcardStore !== null)
    return {
      store: node.wildcardStore,
      params: {
        "*": url.substring(endIndex, urlLength)
      }
    };
  return null;
}, "matchRoute");

// node_modules/elysia/dist/type-system.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var value_exports = {};
__export(value_exports, {
  HasPropertyKey: () => HasPropertyKey,
  IsArray: () => IsArray,
  IsAsyncIterator: () => IsAsyncIterator,
  IsBigInt: () => IsBigInt,
  IsBoolean: () => IsBoolean,
  IsDate: () => IsDate,
  IsFunction: () => IsFunction,
  IsIterator: () => IsIterator,
  IsNull: () => IsNull,
  IsNumber: () => IsNumber,
  IsObject: () => IsObject,
  IsRegExp: () => IsRegExp,
  IsString: () => IsString,
  IsSymbol: () => IsSymbol,
  IsUint8Array: () => IsUint8Array,
  IsUndefined: () => IsUndefined
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function HasPropertyKey(value, key) {
  return key in value;
}
__name(HasPropertyKey, "HasPropertyKey");
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
__name(IsAsyncIterator, "IsAsyncIterator");
function IsArray(value) {
  return Array.isArray(value);
}
__name(IsArray, "IsArray");
function IsBigInt(value) {
  return typeof value === "bigint";
}
__name(IsBigInt, "IsBigInt");
function IsBoolean(value) {
  return typeof value === "boolean";
}
__name(IsBoolean, "IsBoolean");
function IsDate(value) {
  return value instanceof globalThis.Date;
}
__name(IsDate, "IsDate");
function IsFunction(value) {
  return typeof value === "function";
}
__name(IsFunction, "IsFunction");
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
__name(IsIterator, "IsIterator");
function IsNull(value) {
  return value === null;
}
__name(IsNull, "IsNull");
function IsNumber(value) {
  return typeof value === "number";
}
__name(IsNumber, "IsNumber");
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
__name(IsObject, "IsObject");
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
__name(IsRegExp, "IsRegExp");
function IsString(value) {
  return typeof value === "string";
}
__name(IsString, "IsString");
function IsSymbol(value) {
  return typeof value === "symbol";
}
__name(IsSymbol, "IsSymbol");
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
__name(IsUint8Array, "IsUint8Array");
function IsUndefined(value) {
  return value === void 0;
}
__name(IsUndefined, "IsUndefined");

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
__name(ArrayType, "ArrayType");
function DateType(value) {
  return new Date(value.getTime());
}
__name(DateType, "DateType");
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
__name(Uint8ArrayType, "Uint8ArrayType");
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
__name(RegExpType, "RegExpType");
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
__name(ObjectType, "ObjectType");
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
__name(Visit, "Visit");
function Clone(value) {
  return Visit(value);
}
__name(Clone, "Clone");

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === void 0 ? Clone(schema) : Clone({ ...options, ...schema });
}
__name(CloneType, "CloneType");

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
__name(IsAsyncIterator2, "IsAsyncIterator");
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
__name(IsIterator2, "IsIterator");
function IsStandardObject(value) {
  return IsObject2(value) && (globalThis.Object.getPrototypeOf(value) === Object.prototype || globalThis.Object.getPrototypeOf(value) === null);
}
__name(IsStandardObject, "IsStandardObject");
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
__name(IsPromise, "IsPromise");
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
__name(IsDate2, "IsDate");
function IsMap(value) {
  return value instanceof globalThis.Map;
}
__name(IsMap, "IsMap");
function IsSet(value) {
  return value instanceof globalThis.Set;
}
__name(IsSet, "IsSet");
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
__name(IsTypedArray, "IsTypedArray");
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
__name(IsUint8Array2, "IsUint8Array");
function HasPropertyKey2(value, key) {
  return key in value;
}
__name(HasPropertyKey2, "HasPropertyKey");
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
__name(IsObject2, "IsObject");
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
__name(IsArray2, "IsArray");
function IsUndefined2(value) {
  return value === void 0;
}
__name(IsUndefined2, "IsUndefined");
function IsNull2(value) {
  return value === null;
}
__name(IsNull2, "IsNull");
function IsBoolean2(value) {
  return typeof value === "boolean";
}
__name(IsBoolean2, "IsBoolean");
function IsNumber2(value) {
  return typeof value === "number";
}
__name(IsNumber2, "IsNumber");
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
__name(IsInteger, "IsInteger");
function IsBigInt2(value) {
  return typeof value === "bigint";
}
__name(IsBigInt2, "IsBigInt");
function IsString2(value) {
  return typeof value === "string";
}
__name(IsString2, "IsString");
function IsFunction2(value) {
  return typeof value === "function";
}
__name(IsFunction2, "IsFunction");
function IsSymbol2(value) {
  return typeof value === "symbol";
}
__name(IsSymbol2, "IsSymbol");
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}
__name(IsValueType, "IsValueType");

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
  }
  __name(IsExactOptionalProperty, "IsExactOptionalProperty");
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject2 = IsObject2(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject2 : isObject2 && !IsArray2(value);
  }
  __name(IsObjectLike, "IsObjectLike");
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  __name(IsRecordLike, "IsRecordLike");
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  __name(IsNumberLike, "IsNumberLike");
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  __name(IsVoidLike, "IsVoidLike");
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
__name(ImmutableArray, "ImmutableArray");
function ImmutableDate(value) {
  return value;
}
__name(ImmutableDate, "ImmutableDate");
function ImmutableUint8Array(value) {
  return value;
}
__name(ImmutableUint8Array, "ImmutableUint8Array");
function ImmutableRegExp(value) {
  return value;
}
__name(ImmutableRegExp, "ImmutableRegExp");
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
__name(ImmutableObject, "ImmutableObject");
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}
__name(Immutable, "Immutable");

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== void 0 ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}
__name(CreateType, "CreateType");

// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TypeBoxError = class extends Error {
  constructor(message) {
    super(message);
  }
};
__name(TypeBoxError, "TypeBoxError");

// node_modules/@sinclair/typebox/build/esm/type/guard/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
__name(IsReadonly, "IsReadonly");
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
__name(IsOptional, "IsOptional");
function IsAny(value) {
  return IsKindOf(value, "Any");
}
__name(IsAny, "IsAny");
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
__name(IsArray3, "IsArray");
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
__name(IsAsyncIterator3, "IsAsyncIterator");
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
__name(IsBigInt3, "IsBigInt");
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
__name(IsBoolean3, "IsBoolean");
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
__name(IsComputed, "IsComputed");
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
__name(IsConstructor, "IsConstructor");
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
__name(IsDate3, "IsDate");
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
__name(IsFunction3, "IsFunction");
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
__name(IsInteger2, "IsInteger");
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
__name(IsIntersect, "IsIntersect");
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
__name(IsIterator3, "IsIterator");
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
__name(IsKindOf, "IsKindOf");
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
__name(IsLiteralValue, "IsLiteralValue");
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
__name(IsLiteral, "IsLiteral");
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
__name(IsMappedKey, "IsMappedKey");
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
__name(IsMappedResult, "IsMappedResult");
function IsNever(value) {
  return IsKindOf(value, "Never");
}
__name(IsNever, "IsNever");
function IsNot(value) {
  return IsKindOf(value, "Not");
}
__name(IsNot, "IsNot");
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
__name(IsNull3, "IsNull");
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
__name(IsNumber3, "IsNumber");
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
__name(IsObject3, "IsObject");
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
__name(IsPromise2, "IsPromise");
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
__name(IsRecord, "IsRecord");
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
__name(IsRef, "IsRef");
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
__name(IsRegExp2, "IsRegExp");
function IsString3(value) {
  return IsKindOf(value, "String");
}
__name(IsString3, "IsString");
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
__name(IsSymbol3, "IsSymbol");
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
__name(IsTemplateLiteral, "IsTemplateLiteral");
function IsThis(value) {
  return IsKindOf(value, "This");
}
__name(IsThis, "IsThis");
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
__name(IsTransform, "IsTransform");
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
__name(IsTuple, "IsTuple");
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
__name(IsUndefined3, "IsUndefined");
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
__name(IsUnion, "IsUnion");
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
__name(IsUint8Array3, "IsUint8Array");
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
__name(IsUnknown, "IsUnknown");
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
__name(IsUnsafe, "IsUnsafe");
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
__name(IsVoid, "IsVoid");
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
__name(IsKind, "IsKind");
function IsSchema(value) {
  return IsAny(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
__name(IsSchema, "IsSchema");

// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var type_exports = {};
__export(type_exports, {
  IsAny: () => IsAny2,
  IsArray: () => IsArray4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsBigInt: () => IsBigInt4,
  IsBoolean: () => IsBoolean4,
  IsComputed: () => IsComputed2,
  IsConstructor: () => IsConstructor2,
  IsDate: () => IsDate4,
  IsFunction: () => IsFunction4,
  IsImport: () => IsImport,
  IsInteger: () => IsInteger3,
  IsIntersect: () => IsIntersect2,
  IsIterator: () => IsIterator4,
  IsKind: () => IsKind2,
  IsKindOf: () => IsKindOf2,
  IsLiteral: () => IsLiteral2,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralString: () => IsLiteralString,
  IsLiteralValue: () => IsLiteralValue2,
  IsMappedKey: () => IsMappedKey2,
  IsMappedResult: () => IsMappedResult2,
  IsNever: () => IsNever2,
  IsNot: () => IsNot2,
  IsNull: () => IsNull4,
  IsNumber: () => IsNumber4,
  IsObject: () => IsObject4,
  IsOptional: () => IsOptional2,
  IsPromise: () => IsPromise3,
  IsProperties: () => IsProperties,
  IsReadonly: () => IsReadonly2,
  IsRecord: () => IsRecord2,
  IsRecursive: () => IsRecursive,
  IsRef: () => IsRef2,
  IsRegExp: () => IsRegExp3,
  IsSchema: () => IsSchema2,
  IsString: () => IsString4,
  IsSymbol: () => IsSymbol4,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsThis: () => IsThis2,
  IsTransform: () => IsTransform2,
  IsTuple: () => IsTuple2,
  IsUint8Array: () => IsUint8Array4,
  IsUndefined: () => IsUndefined4,
  IsUnion: () => IsUnion2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnknown: () => IsUnknown2,
  IsUnsafe: () => IsUnsafe2,
  IsVoid: () => IsVoid2,
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TypeGuardUnknownTypeError = class extends TypeBoxError {
};
__name(TypeGuardUnknownTypeError, "TypeGuardUnknownTypeError");
var KnownTypes = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
__name(IsPattern, "IsPattern");
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
__name(IsControlCharacterFree, "IsControlCharacterFree");
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
__name(IsAdditionalProperties, "IsAdditionalProperties");
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
__name(IsOptionalBigInt, "IsOptionalBigInt");
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
__name(IsOptionalNumber, "IsOptionalNumber");
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
__name(IsOptionalBoolean, "IsOptionalBoolean");
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
__name(IsOptionalString, "IsOptionalString");
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
__name(IsOptionalPattern, "IsOptionalPattern");
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
__name(IsOptionalFormat, "IsOptionalFormat");
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
__name(IsOptionalSchema, "IsOptionalSchema");
function IsReadonly2(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
__name(IsReadonly2, "IsReadonly");
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
__name(IsOptional2, "IsOptional");
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
__name(IsAny2, "IsAny");
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
__name(IsArray4, "IsArray");
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
__name(IsAsyncIterator4, "IsAsyncIterator");
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
__name(IsBigInt4, "IsBigInt");
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
__name(IsBoolean4, "IsBoolean");
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
__name(IsComputed2, "IsComputed");
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
__name(IsConstructor2, "IsConstructor");
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
__name(IsDate4, "IsDate");
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
__name(IsFunction4, "IsFunction");
function IsImport(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey(value, "$defs") && IsObject(value.$defs) && IsProperties(value.$defs) && HasPropertyKey(value, "$ref") && IsString(value.$ref) && value.$ref in value.$defs;
}
__name(IsImport, "IsImport");
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
__name(IsInteger3, "IsInteger");
function IsProperties(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
__name(IsProperties, "IsProperties");
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
__name(IsIntersect2, "IsIntersect");
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
__name(IsIterator4, "IsIterator");
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
__name(IsKindOf2, "IsKindOf");
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString(value.const);
}
__name(IsLiteralString, "IsLiteralString");
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
__name(IsLiteralNumber, "IsLiteralNumber");
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
__name(IsLiteralBoolean, "IsLiteralBoolean");
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
__name(IsLiteral2, "IsLiteral");
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
__name(IsLiteralValue2, "IsLiteralValue");
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
__name(IsMappedKey2, "IsMappedKey");
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
__name(IsMappedResult2, "IsMappedResult");
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
__name(IsNever2, "IsNever");
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
__name(IsNot2, "IsNot");
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
__name(IsNull4, "IsNull");
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
__name(IsNumber4, "IsNumber");
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
__name(IsObject4, "IsObject");
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
__name(IsPromise3, "IsPromise");
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
__name(IsRecord2, "IsRecord");
function IsRecursive(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
__name(IsRecursive, "IsRecursive");
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
__name(IsRef2, "IsRef");
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
__name(IsRegExp3, "IsRegExp");
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
__name(IsString4, "IsString");
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
__name(IsSymbol4, "IsSymbol");
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
__name(IsTemplateLiteral2, "IsTemplateLiteral");
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
__name(IsThis2, "IsThis");
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
__name(IsTransform2, "IsTransform");
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && // empty
  (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
__name(IsTuple2, "IsTuple");
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
__name(IsUndefined4, "IsUndefined");
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
__name(IsUnionLiteral, "IsUnionLiteral");
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
__name(IsUnion2, "IsUnion");
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
__name(IsUint8Array4, "IsUint8Array");
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
__name(IsUnknown2, "IsUnknown");
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
__name(IsUnsafe2, "IsUnsafe");
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
__name(IsVoid2, "IsVoid");
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
__name(IsKind2, "IsKind");
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
__name(IsSchema2, "IsSchema");

// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/@sinclair/typebox/build/esm/type/registry/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var format_exports = {};
__export(format_exports, {
  Clear: () => Clear,
  Delete: () => Delete,
  Entries: () => Entries,
  Get: () => Get,
  Has: () => Has,
  Set: () => Set2
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var map = /* @__PURE__ */ new Map();
function Entries() {
  return new Map(map);
}
__name(Entries, "Entries");
function Clear() {
  return map.clear();
}
__name(Clear, "Clear");
function Delete(format) {
  return map.delete(format);
}
__name(Delete, "Delete");
function Has(format) {
  return map.has(format);
}
__name(Has, "Has");
function Set2(format, func) {
  map.set(format, func);
}
__name(Set2, "Set");
function Get(format) {
  return map.get(format);
}
__name(Get, "Get");

// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var type_exports2 = {};
__export(type_exports2, {
  Clear: () => Clear2,
  Delete: () => Delete2,
  Entries: () => Entries2,
  Get: () => Get2,
  Has: () => Has2,
  Set: () => Set3
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var map2 = /* @__PURE__ */ new Map();
function Entries2() {
  return new Map(map2);
}
__name(Entries2, "Entries");
function Clear2() {
  return map2.clear();
}
__name(Clear2, "Clear");
function Delete2(kind) {
  return map2.delete(kind);
}
__name(Delete2, "Delete");
function Has2(kind) {
  return map2.has(kind);
}
__name(Has2, "Has");
function Set3(kind, func) {
  map2.set(kind, func);
}
__name(Set3, "Set");
function Get2(kind) {
  return map2.get(kind);
}
__name(Get2, "Get");

// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function SetIncludes(T, S) {
  return T.includes(S);
}
__name(SetIncludes, "SetIncludes");
function SetDistinct(T) {
  return [...new Set(T)];
}
__name(SetDistinct, "SetDistinct");
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
__name(SetIntersect, "SetIntersect");
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
__name(SetIntersectManyResolve, "SetIntersectManyResolve");
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
__name(SetIntersectMany, "SetIntersectMany");
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
__name(SetUnionMany, "SetUnionMany");

// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}
__name(Any, "Any");

// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}
__name(Array2, "Array");

// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}
__name(AsyncIterator, "AsyncIterator");

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}
__name(Computed, "Computed");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
__name(DiscardKey, "DiscardKey");
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
__name(Discard, "Discard");

// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}
__name(Never, "Never");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}
__name(MappedResult, "MappedResult");

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}
__name(Constructor, "Constructor");

// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Function2(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}
__name(Function2, "Function");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function UnionCreate(T, options) {
  return CreateType({ [Kind]: "Union", anyOf: T }, options);
}
__name(UnionCreate, "UnionCreate");

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type2) => IsOptional(type2));
}
__name(IsUnionOptional, "IsUnionOptional");
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
__name(RemoveOptionalFromRest, "RemoveOptionalFromRest");
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
__name(RemoveOptionalFromType, "RemoveOptionalFromType");
function ResolveUnion(types, options) {
  const isOptional2 = IsUnionOptional(types);
  return isOptional2 ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
__name(ResolveUnion, "ResolveUnion");
function UnionEvaluated(T, options) {
  return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}
__name(UnionEvaluated, "UnionEvaluated");

// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}
__name(Union, "Union");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TemplateLiteralParserError = class extends TypeBoxError {
};
__name(TemplateLiteralParserError, "TemplateLiteralParserError");
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
__name(Unescape, "Unescape");
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
__name(IsNonEscaped, "IsNonEscaped");
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
__name(IsOpenParen, "IsOpenParen");
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
__name(IsCloseParen, "IsCloseParen");
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
__name(IsSeparator, "IsSeparator");
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count3 = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count3 += 1;
    if (IsCloseParen(pattern, index))
      count3 -= 1;
    if (count3 === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
__name(IsGroup, "IsGroup");
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
__name(InGroup, "InGroup");
function IsPrecedenceOr(pattern) {
  let count3 = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count3 += 1;
    if (IsCloseParen(pattern, index))
      count3 -= 1;
    if (IsSeparator(pattern, index) && count3 === 0)
      return true;
  }
  return false;
}
__name(IsPrecedenceOr, "IsPrecedenceOr");
function IsPrecedenceAnd(pattern) {
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
__name(IsPrecedenceAnd, "IsPrecedenceAnd");
function Or(pattern) {
  let [count3, start] = [0, 0];
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count3 += 1;
    if (IsCloseParen(pattern, index))
      count3 -= 1;
    if (IsSeparator(pattern, index) && count3 === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
__name(Or, "Or");
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count3 = 0;
    for (let scan = index; scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count3 += 1;
      if (IsCloseParen(value, scan))
        count3 -= 1;
      if (count3 === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  __name(Group, "Group");
  function Range(pattern2, index) {
    for (let scan = index; scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  __name(Range, "Range");
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
__name(And, "And");
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
__name(TemplateLiteralParse, "TemplateLiteralParse");
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}
__name(TemplateLiteralParseExact, "TemplateLiteralParseExact");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
var TemplateLiteralFiniteError = class extends TypeBoxError {
};
__name(TemplateLiteralFiniteError, "TemplateLiteralFiniteError");
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
__name(IsNumberExpression, "IsNumberExpression");
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
__name(IsBooleanExpression, "IsBooleanExpression");
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
__name(IsStringExpression, "IsStringExpression");
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
__name(IsTemplateLiteralExpressionFinite, "IsTemplateLiteralExpressionFinite");
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}
__name(IsTemplateLiteralFinite, "IsTemplateLiteralFinite");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TemplateLiteralGenerateError = class extends TypeBoxError {
};
__name(TemplateLiteralGenerateError, "TemplateLiteralGenerateError");
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
__name(GenerateReduce, "GenerateReduce");
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
__name(GenerateAnd, "GenerateAnd");
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
__name(GenerateOr, "GenerateOr");
function* GenerateConst(expression) {
  return yield expression.const;
}
__name(GenerateConst, "GenerateConst");
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
__name(TemplateLiteralExpressionGenerate, "TemplateLiteralExpressionGenerate");
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}
__name(TemplateLiteralGenerate, "TemplateLiteralGenerate");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}
__name(Literal, "Literal");

// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Boolean(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}
__name(Boolean, "Boolean");

// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}
__name(BigInt2, "BigInt");

// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}
__name(Number2, "Number");

// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}
__name(String2, "String");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
__name(FromUnion, "FromUnion");
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2; i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
__name(FromTerminal, "FromTerminal");
function* FromSyntax(syntax) {
  for (let i = 0; i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
__name(FromSyntax, "FromSyntax");
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
__name(TemplateLiteralSyntax, "TemplateLiteralSyntax");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TemplateLiteralPatternError = class extends TypeBoxError {
};
__name(TemplateLiteralPatternError, "TemplateLiteralPatternError");
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(Escape, "Escape");
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
__name(Visit2, "Visit");
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}
__name(TemplateLiteralPattern, "TemplateLiteralPattern");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
__name(TemplateLiteralToUnion, "TemplateLiteralToUnion");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}
__name(TemplateLiteral, "TemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
__name(FromTemplateLiteral, "FromTemplateLiteral");
function FromUnion2(types) {
  const result = [];
  for (const type2 of types)
    result.push(...IndexPropertyKeys(type2));
  return result;
}
__name(FromUnion2, "FromUnion");
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
__name(FromLiteral, "FromLiteral");
function IndexPropertyKeys(type2) {
  return [...new Set(IsTemplateLiteral(type2) ? FromTemplateLiteral(type2) : IsUnion(type2) ? FromUnion2(type2.anyOf) : IsLiteral(type2) ? FromLiteral(type2.const) : IsNumber3(type2) ? ["[number]"] : IsInteger2(type2) ? ["[number]"] : [])];
}
__name(IndexPropertyKeys, "IndexPropertyKeys");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromProperties(type2, properties, options) {
  const result = {};
  for (const K2 of Object.getOwnPropertyNames(properties)) {
    result[K2] = Index(type2, IndexPropertyKeys(properties[K2]), options);
  }
  return result;
}
__name(FromProperties, "FromProperties");
function FromMappedResult(type2, mappedResult, options) {
  return FromProperties(type2, mappedResult.properties, options);
}
__name(FromMappedResult, "FromMappedResult");
function IndexFromMappedResult(type2, mappedResult, options) {
  const properties = FromMappedResult(type2, mappedResult, options);
  return MappedResult(properties);
}
__name(IndexFromMappedResult, "IndexFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type2) => IndexFromPropertyKey(type2, key));
}
__name(FromRest, "FromRest");
function FromIntersectRest(types) {
  return types.filter((type2) => !IsNever(type2));
}
__name(FromIntersectRest, "FromIntersectRest");
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
__name(FromIntersect, "FromIntersect");
function FromUnionRest(types) {
  return types.some((L) => IsNever(L)) ? [] : types;
}
__name(FromUnionRest, "FromUnionRest");
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
__name(FromUnion3, "FromUnion");
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
__name(FromTuple, "FromTuple");
function FromArray(type2, key) {
  return key === "[number]" ? type2 : Never();
}
__name(FromArray, "FromArray");
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
__name(FromProperty, "FromProperty");
function IndexFromPropertyKey(type2, propertyKey) {
  return IsIntersect(type2) ? FromIntersect(type2.allOf, propertyKey) : IsUnion(type2) ? FromUnion3(type2.anyOf, propertyKey) : IsTuple(type2) ? FromTuple(type2.items ?? [], propertyKey) : IsArray3(type2) ? FromArray(type2.items, propertyKey) : IsObject3(type2) ? FromProperty(type2.properties, propertyKey) : Never();
}
__name(IndexFromPropertyKey, "IndexFromPropertyKey");
function IndexFromPropertyKeys(type2, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type2, propertyKey));
}
__name(IndexFromPropertyKeys, "IndexFromPropertyKeys");
function FromSchema(type2, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type2, propertyKeys));
}
__name(FromSchema, "FromSchema");
function Index(type2, key, options) {
  if (IsRef(type2) || IsRef(key)) {
    const error4 = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type2) || !IsSchema(key))
      throw new TypeBoxError(error4);
    return Computed("Index", [type2, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type2, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type2, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type2, IndexPropertyKeys(key)) : FromSchema(type2, key), options);
}
__name(Index, "Index");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type2, key, options) {
  return { [key]: Index(type2, [key], Clone(options)) };
}
__name(MappedIndexPropertyKey, "MappedIndexPropertyKey");
function MappedIndexPropertyKeys(type2, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type2, left, options) };
  }, {});
}
__name(MappedIndexPropertyKeys, "MappedIndexPropertyKeys");
function MappedIndexProperties(type2, mappedKey, options) {
  return MappedIndexPropertyKeys(type2, mappedKey.keys, options);
}
__name(MappedIndexProperties, "MappedIndexProperties");
function IndexFromMappedKey(type2, mappedKey, options) {
  const properties = MappedIndexProperties(type2, mappedKey, options);
  return MappedResult(properties);
}
__name(IndexFromMappedKey, "IndexFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}
__name(Iterator, "Iterator");

// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RequiredKeys(properties) {
  const keys = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys.push(key);
  }
  return keys;
}
__name(RequiredKeys, "RequiredKeys");
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
__name(_Object, "_Object");
var Object2 = _Object;

// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}
__name(Promise2, "Promise");

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
__name(RemoveReadonly, "RemoveReadonly");
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
__name(AddReadonly, "AddReadonly");
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
__name(ReadonlyWithFlag, "ReadonlyWithFlag");
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}
__name(Readonly, "Readonly");

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
__name(FromProperties2, "FromProperties");
function FromMappedResult2(R, F) {
  return FromProperties2(R.properties, F);
}
__name(FromMappedResult2, "FromMappedResult");
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult2(R, F);
  return MappedResult(P);
}
__name(ReadonlyFromMappedResult, "ReadonlyFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}
__name(Tuple, "Tuple");

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
__name(FromMappedResult3, "FromMappedResult");
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
__name(MappedKeyToKnownMappedResultProperties, "MappedKeyToKnownMappedResultProperties");
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
__name(MappedKeyToUnknownMappedResultProperties, "MappedKeyToUnknownMappedResultProperties");
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
__name(MappedKeyToMappedResultProperties, "MappedKeyToMappedResultProperties");
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult3(K, R);
}
__name(FromMappedKey, "FromMappedKey");
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
__name(FromRest2, "FromRest");
function FromProperties3(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
__name(FromProperties3, "FromProperties");
function FromSchemaType(K, T) {
  const options = { ...T };
  return (
    // unevaluated modifier types
    IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : (
      // unevaluated mapped types
      IsMappedResult(T) ? FromMappedResult3(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : (
        // unevaluated types
        IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf), options) : IsUnion(T) ? Union(FromRest2(K, T.anyOf), options) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? []), options) : IsObject3(T) ? Object2(FromProperties3(K, T.properties), options) : IsArray3(T) ? Array2(FromSchemaType(K, T.items), options) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item), options) : T
      )
    )
  );
}
__name(FromSchemaType, "FromSchemaType");
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
__name(MappedFunctionReturnType, "MappedFunctionReturnType");
function Mapped(key, map3, options) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return Object2(R, options);
}
__name(Mapped, "Mapped");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
__name(RemoveOptional, "RemoveOptional");
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
__name(AddOptional, "AddOptional");
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
__name(OptionalWithFlag, "OptionalWithFlag");
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}
__name(Optional, "Optional");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
__name(FromProperties4, "FromProperties");
function FromMappedResult4(R, F) {
  return FromProperties4(R.properties, F);
}
__name(FromMappedResult4, "FromMappedResult");
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult4(R, F);
  return MappedResult(P);
}
__name(OptionalFromMappedResult, "OptionalFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function IntersectCreate(T, options = {}) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T }, options);
}
__name(IntersectCreate, "IntersectCreate");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
__name(IsIntersectOptional, "IsIntersectOptional");
function RemoveOptionalFromType2(type2) {
  return Discard(type2, [OptionalKind]);
}
__name(RemoveOptionalFromType2, "RemoveOptionalFromType");
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
__name(RemoveOptionalFromRest2, "RemoveOptionalFromRest");
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
__name(ResolveIntersect, "ResolveIntersect");
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}
__name(IntersectEvaluated, "IntersectEvaluated");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}
__name(Intersect, "Intersect");

// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}
__name(Ref, "Ref");

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
__name(FromComputed, "FromComputed");
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
__name(FromRef, "FromRef");
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
__name(FromIntersect2, "FromIntersect");
function FromUnion4(types) {
  return Union(FromRest3(types));
}
__name(FromUnion4, "FromUnion");
function FromPromise(type2) {
  return Awaited(type2);
}
__name(FromPromise, "FromPromise");
function FromRest3(types) {
  return types.map((type2) => Awaited(type2));
}
__name(FromRest3, "FromRest");
function Awaited(type2, options) {
  return CreateType(IsComputed(type2) ? FromComputed(type2.target, type2.parameters) : IsIntersect(type2) ? FromIntersect2(type2.allOf) : IsUnion(type2) ? FromUnion4(type2.anyOf) : IsPromise2(type2) ? FromPromise(type2.item) : IsRef(type2) ? FromRef(type2.$ref) : type2, options);
}
__name(Awaited, "Awaited");

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromRest4(types) {
  const result = [];
  for (const L of types)
    result.push(KeyOfPropertyKeys(L));
  return result;
}
__name(FromRest4, "FromRest");
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
__name(FromIntersect3, "FromIntersect");
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
__name(FromUnion5, "FromUnion");
function FromTuple2(types) {
  return types.map((_, indexer) => indexer.toString());
}
__name(FromTuple2, "FromTuple");
function FromArray2(_) {
  return ["[number]"];
}
__name(FromArray2, "FromArray");
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
__name(FromProperties5, "FromProperties");
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
__name(FromPatternProperties, "FromPatternProperties");
function KeyOfPropertyKeys(type2) {
  return IsIntersect(type2) ? FromIntersect3(type2.allOf) : IsUnion(type2) ? FromUnion5(type2.anyOf) : IsTuple(type2) ? FromTuple2(type2.items ?? []) : IsArray3(type2) ? FromArray2(type2.items) : IsObject3(type2) ? FromProperties5(type2.properties) : IsRecord(type2) ? FromPatternProperties(type2.patternProperties) : [];
}
__name(KeyOfPropertyKeys, "KeyOfPropertyKeys");
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}
__name(KeyOfPattern, "KeyOfPattern");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
__name(FromComputed2, "FromComputed");
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
__name(FromRef2, "FromRef");
function KeyOfFromType(type2, options) {
  const propertyKeys = KeyOfPropertyKeys(type2);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
__name(KeyOfFromType, "KeyOfFromType");
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L) => L === "[number]" ? Number2() : Literal(L));
}
__name(KeyOfPropertyKeysToRest, "KeyOfPropertyKeysToRest");
function KeyOf(type2, options) {
  return IsComputed(type2) ? FromComputed2(type2.target, type2.parameters) : IsRef(type2) ? FromRef2(type2.$ref) : IsMappedResult(type2) ? KeyOfFromMappedResult(type2, options) : KeyOfFromType(type2, options);
}
__name(KeyOf, "KeyOf");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = KeyOf(properties[K2], Clone(options));
  return result;
}
__name(FromProperties6, "FromProperties");
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
__name(FromMappedResult5, "FromMappedResult");
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}
__name(KeyOfFromMappedResult, "KeyOfFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}
__name(KeyOfPropertyEntries, "KeyOfPropertyEntries");

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
__name(CompositeKeys, "CompositeKeys");
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
__name(FilterNever, "FilterNever");
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
__name(CompositeProperty, "CompositeProperty");
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
__name(CompositeProperties, "CompositeProperties");
function Composite(T, options) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
__name(Composite, "Composite");

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}
__name(Date2, "Date");

// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}
__name(Null, "Null");

// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}
__name(Symbol2, "Symbol");

// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}
__name(Undefined, "Undefined");

// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}
__name(Uint8Array2, "Uint8Array");

// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}
__name(Unknown, "Unknown");

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T) {
  return T.map((L) => FromValue(L, false));
}
__name(FromArray3, "FromArray");
function FromProperties7(value) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value))
    Acc[K] = Readonly(FromValue(value[K], false));
  return Acc;
}
__name(FromProperties7, "FromProperties");
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
__name(ConditionalReadonly, "ConditionalReadonly");
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
__name(FromValue, "FromValue");
function Const(T, options) {
  return CreateType(FromValue(T, true), options);
}
__name(Const, "Const");

// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}
__name(ConstructorParameters, "ConstructorParameters");

// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
__name(Enum, "Enum");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ExtendsResolverError = class extends TypeBoxError {
};
__name(ExtendsResolverError, "ExtendsResolverError");
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
__name(IntoBooleanResult, "IntoBooleanResult");
function Throw(message) {
  throw new ExtendsResolverError(message);
}
__name(Throw, "Throw");
function IsStructuralRight(right) {
  return type_exports.IsNever(right) || type_exports.IsIntersect(right) || type_exports.IsUnion(right) || type_exports.IsUnknown(right) || type_exports.IsAny(right);
}
__name(IsStructuralRight, "IsStructuralRight");
function StructuralRight(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
__name(StructuralRight, "StructuralRight");
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
__name(FromAnyRight, "FromAnyRight");
function FromAny(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) && right.anyOf.some((schema) => type_exports.IsAny(schema) || type_exports.IsUnknown(schema)) ? ExtendsResult.True : type_exports.IsUnion(right) ? ExtendsResult.Union : type_exports.IsUnknown(right) ? ExtendsResult.True : type_exports.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
__name(FromAny, "FromAny");
function FromArrayRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromArrayRight, "FromArrayRight");
function FromArray4(left, right) {
  return type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromArray4, "FromArray");
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromAsyncIterator, "FromAsyncIterator");
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBigInt, "FromBigInt");
function FromBooleanRight(left, right) {
  return type_exports.IsLiteralBoolean(left) ? ExtendsResult.True : type_exports.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBooleanRight, "FromBooleanRight");
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBoolean, "FromBoolean");
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
__name(FromConstructor, "FromConstructor");
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromDate, "FromDate");
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
__name(FromFunction, "FromFunction");
function FromIntegerRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsNumber(left.const) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntegerRight, "FromIntegerRight");
function FromInteger(left, right) {
  return type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
__name(FromInteger, "FromInteger");
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntersectRight, "FromIntersectRight");
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntersect4, "FromIntersect");
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromIterator, "FromIterator");
function FromLiteral2(left, right) {
  return type_exports.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
__name(FromLiteral2, "FromLiteral");
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
__name(FromNeverRight, "FromNeverRight");
function FromNever(left, right) {
  return ExtendsResult.True;
}
__name(FromNever, "FromNever");
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!type_exports.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
__name(UnwrapTNot, "UnwrapTNot");
function FromNot(left, right) {
  return type_exports.IsNot(left) ? Visit3(UnwrapTNot(left), right) : type_exports.IsNot(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
__name(FromNot, "FromNot");
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNull, "FromNull");
function FromNumberRight(left, right) {
  return type_exports.IsLiteralNumber(left) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNumberRight, "FromNumberRight");
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNumber, "FromNumber");
function IsObjectPropertyCount(schema, count3) {
  return Object.getOwnPropertyNames(schema.properties).length === count3;
}
__name(IsObjectPropertyCount, "IsObjectPropertyCount");
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
__name(IsObjectStringLike, "IsObjectStringLike");
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && type_exports.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (type_exports.IsString(schema.properties.description.anyOf[0]) && type_exports.IsUndefined(schema.properties.description.anyOf[1]) || type_exports.IsString(schema.properties.description.anyOf[1]) && type_exports.IsUndefined(schema.properties.description.anyOf[0]));
}
__name(IsObjectSymbolLike, "IsObjectSymbolLike");
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectNumberLike, "IsObjectNumberLike");
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectBooleanLike, "IsObjectBooleanLike");
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectBigIntLike, "IsObjectBigIntLike");
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectDateLike, "IsObjectDateLike");
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
__name(IsObjectUint8ArrayLike, "IsObjectUint8ArrayLike");
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
__name(IsObjectFunctionLike, "IsObjectFunctionLike");
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectConstructorLike, "IsObjectConstructorLike");
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
__name(IsObjectArrayLike, "IsObjectArrayLike");
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
__name(IsObjectPromiseLike, "IsObjectPromiseLike");
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : type_exports.IsOptional(left) && !type_exports.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
__name(Property, "Property");
function FromObjectRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) || type_exports.IsLiteralString(left) && IsObjectStringLike(right) || type_exports.IsLiteralNumber(left) && IsObjectNumberLike(right) || type_exports.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsBigInt(left) && IsObjectBigIntLike(right) || type_exports.IsString(left) && IsObjectStringLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsNumber(left) && IsObjectNumberLike(right) || type_exports.IsInteger(left) && IsObjectNumberLike(right) || type_exports.IsBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || type_exports.IsDate(left) && IsObjectDateLike(right) || type_exports.IsConstructor(left) && IsObjectConstructorLike(right) || type_exports.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : type_exports.IsRecord(left) && type_exports.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : type_exports.IsRecord(left) && type_exports.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
__name(FromObjectRight, "FromObjectRight");
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : !type_exports.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
__name(FromObject, "FromObject");
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !type_exports.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
__name(FromPromise2, "FromPromise");
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : PatternStringExact in schema.patternProperties ? String2() : Throw("Unknown record key pattern");
}
__name(RecordKey, "RecordKey");
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
__name(RecordValue, "RecordValue");
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return type_exports.IsLiteralString(left) && type_exports.IsNumber(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : type_exports.IsUint8Array(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsString(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsArray(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
__name(FromRecordRight, "FromRecordRight");
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsRecord(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
__name(FromRecord, "FromRecord");
function FromRegExp(left, right) {
  const L = type_exports.IsRegExp(left) ? String2() : left;
  const R = type_exports.IsRegExp(right) ? String2() : right;
  return Visit3(L, R);
}
__name(FromRegExp, "FromRegExp");
function FromStringRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsString(left.const) ? ExtendsResult.True : type_exports.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromStringRight, "FromStringRight");
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromString, "FromString");
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromSymbol, "FromSymbol");
function FromTemplateLiteral2(left, right) {
  return type_exports.IsTemplateLiteral(left) ? Visit3(TemplateLiteralToUnion(left), right) : type_exports.IsTemplateLiteral(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
__name(FromTemplateLiteral2, "FromTemplateLiteral");
function IsArrayOfTuple(left, right) {
  return type_exports.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
__name(IsArrayOfTuple, "IsArrayOfTuple");
function FromTupleRight(left, right) {
  return type_exports.IsNever(left) ? ExtendsResult.True : type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
__name(FromTupleRight, "FromTupleRight");
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : type_exports.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !type_exports.IsTuple(right) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) || !value_exports.IsUndefined(left.items) && value_exports.IsUndefined(right.items) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromTuple3, "FromTuple");
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUint8Array, "FromUint8Array");
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsVoid(right) ? FromVoidRight(left, right) : type_exports.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUndefined, "FromUndefined");
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnionRight, "FromUnionRight");
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnion6, "FromUnion");
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
__name(FromUnknownRight, "FromUnknownRight");
function FromUnknown(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : type_exports.IsArray(right) ? FromArrayRight(left, right) : type_exports.IsTuple(right) ? FromTupleRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnknown, "FromUnknown");
function FromVoidRight(left, right) {
  return type_exports.IsUndefined(left) ? ExtendsResult.True : type_exports.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromVoidRight, "FromVoidRight");
function FromVoid(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromVoid, "FromVoid");
function Visit3(left, right) {
  return (
    // resolvable
    type_exports.IsTemplateLiteral(left) || type_exports.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : type_exports.IsRegExp(left) || type_exports.IsRegExp(right) ? FromRegExp(left, right) : type_exports.IsNot(left) || type_exports.IsNot(right) ? FromNot(left, right) : (
      // standard
      type_exports.IsAny(left) ? FromAny(left, right) : type_exports.IsArray(left) ? FromArray4(left, right) : type_exports.IsBigInt(left) ? FromBigInt(left, right) : type_exports.IsBoolean(left) ? FromBoolean(left, right) : type_exports.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : type_exports.IsConstructor(left) ? FromConstructor(left, right) : type_exports.IsDate(left) ? FromDate(left, right) : type_exports.IsFunction(left) ? FromFunction(left, right) : type_exports.IsInteger(left) ? FromInteger(left, right) : type_exports.IsIntersect(left) ? FromIntersect4(left, right) : type_exports.IsIterator(left) ? FromIterator(left, right) : type_exports.IsLiteral(left) ? FromLiteral2(left, right) : type_exports.IsNever(left) ? FromNever(left, right) : type_exports.IsNull(left) ? FromNull(left, right) : type_exports.IsNumber(left) ? FromNumber(left, right) : type_exports.IsObject(left) ? FromObject(left, right) : type_exports.IsRecord(left) ? FromRecord(left, right) : type_exports.IsString(left) ? FromString(left, right) : type_exports.IsSymbol(left) ? FromSymbol(left, right) : type_exports.IsTuple(left) ? FromTuple3(left, right) : type_exports.IsPromise(left) ? FromPromise2(left, right) : type_exports.IsUint8Array(left) ? FromUint8Array(left, right) : type_exports.IsUndefined(left) ? FromUndefined(left, right) : type_exports.IsUnion(left) ? FromUnion6(left, right) : type_exports.IsUnknown(left) ? FromUnknown(left, right) : type_exports.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`)
    )
  );
}
__name(Visit3, "Visit");
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}
__name(ExtendsCheck, "ExtendsCheck");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromProperties8(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, Clone(options));
  return Acc;
}
__name(FromProperties8, "FromProperties");
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
__name(FromMappedResult6, "FromMappedResult");
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}
__name(ExtendsFromMappedResult, "ExtendsFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
__name(ExtendsResolve, "ExtendsResolve");
function Extends(L, R, T, F, options) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}
__name(Extends, "Extends");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, Clone(options))
  };
}
__name(FromPropertyKey, "FromPropertyKey");
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
__name(FromPropertyKeys, "FromPropertyKeys");
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
__name(FromMappedKey2, "FromMappedKey");
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
__name(ExtendsFromMappedKey, "ExtendsFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
__name(Intersect2, "Intersect");
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
__name(Union2, "Union");
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
__name(Not, "Not");
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}
__name(ExtendsUndefinedCheck, "ExtendsUndefinedCheck");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}
__name(ExcludeFromTemplateLiteral, "ExcludeFromTemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
__name(ExcludeRest, "ExcludeRest");
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CreateType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExcludeFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}
__name(Exclude, "Exclude");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
__name(FromProperties9, "FromProperties");
function FromMappedResult7(R, T) {
  return FromProperties9(R.properties, T);
}
__name(FromMappedResult7, "FromMappedResult");
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
__name(ExcludeFromMappedResult, "ExcludeFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}
__name(ExtractFromTemplateLiteral, "ExtractFromTemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
__name(ExtractRest, "ExtractRest");
function Extract(L, R, options) {
  if (IsTemplateLiteral(L))
    return CreateType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExtractFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}
__name(Extract, "Extract");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
__name(FromProperties10, "FromProperties");
function FromMappedResult8(R, T) {
  return FromProperties10(R.properties, T);
}
__name(FromMappedResult8, "FromMappedResult");
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
__name(ExtractFromMappedResult, "ExtractFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}
__name(InstanceType, "InstanceType");

// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}
__name(Integer, "Integer");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, Clone(options))
  };
}
__name(MappedIntrinsicPropertyKey, "MappedIntrinsicPropertyKey");
function MappedIntrinsicPropertyKeys(K, M, options) {
  const result = K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
  return result;
}
__name(MappedIntrinsicPropertyKeys, "MappedIntrinsicPropertyKeys");
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
__name(MappedIntrinsicProperties, "MappedIntrinsicProperties");
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}
__name(IntrinsicFromMappedKey, "IntrinsicFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
__name(ApplyUncapitalize, "ApplyUncapitalize");
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
__name(ApplyCapitalize, "ApplyCapitalize");
function ApplyUppercase(value) {
  return value.toUpperCase();
}
__name(ApplyUppercase, "ApplyUppercase");
function ApplyLowercase(value) {
  return value.toLowerCase();
}
__name(ApplyLowercase, "ApplyLowercase");
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
__name(FromTemplateLiteral3, "FromTemplateLiteral");
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
__name(FromLiteralValue, "FromLiteralValue");
function FromRest5(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
__name(FromRest5, "FromRest");
function Intrinsic(schema, mode, options = {}) {
  return (
    // Intrinsic-Mapped-Inference
    IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : (
      // Standard-Inference
      IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : (
        // Default Type
        CreateType(schema, options)
      )
    )
  );
}
__name(Intrinsic, "Intrinsic");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
__name(Capitalize, "Capitalize");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
__name(Lowercase, "Lowercase");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
__name(Uncapitalize, "Uncapitalize");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
__name(Uppercase, "Uppercase");

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromProperties11(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Omit(properties[K2], propertyKeys, Clone(options));
  return result;
}
__name(FromProperties11, "FromProperties");
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties11(mappedResult.properties, propertyKeys, options);
}
__name(FromMappedResult9, "FromMappedResult");
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}
__name(OmitFromMappedResult, "OmitFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect5(types, propertyKeys) {
  return types.map((type2) => OmitResolve(type2, propertyKeys));
}
__name(FromIntersect5, "FromIntersect");
function FromUnion7(types, propertyKeys) {
  return types.map((type2) => OmitResolve(type2, propertyKeys));
}
__name(FromUnion7, "FromUnion");
function FromProperty2(properties, key) {
  const { [key]: _, ...R } = properties;
  return R;
}
__name(FromProperty2, "FromProperty");
function FromProperties12(properties, propertyKeys) {
  return propertyKeys.reduce((T, K2) => FromProperty2(T, K2), properties);
}
__name(FromProperties12, "FromProperties");
function FromObject2(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties12(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
__name(FromObject2, "FromObject");
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
__name(UnionFromPropertyKeys, "UnionFromPropertyKeys");
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect5(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion7(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject2(properties, propertyKeys) : Object2({});
}
__name(OmitResolve, "OmitResolve");
function Omit(type2, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type2);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type2) ? OmitFromMappedResult(type2, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type2, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type2, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type2, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type2, typeKey], options) : CreateType({ ...OmitResolve(type2, propertyKeys), ...options });
}
__name(Omit, "Omit");

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type2, key, options) {
  return { [key]: Omit(type2, [key], Clone(options)) };
}
__name(FromPropertyKey2, "FromPropertyKey");
function FromPropertyKeys2(type2, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type2, LK, options) };
  }, {});
}
__name(FromPropertyKeys2, "FromPropertyKeys");
function FromMappedKey3(type2, mappedKey, options) {
  return FromPropertyKeys2(type2, mappedKey.keys, options);
}
__name(FromMappedKey3, "FromMappedKey");
function OmitFromMappedKey(type2, mappedKey, options) {
  const properties = FromMappedKey3(type2, mappedKey, options);
  return MappedResult(properties);
}
__name(OmitFromMappedKey, "OmitFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromProperties13(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Pick(properties[K2], propertyKeys, Clone(options));
  return result;
}
__name(FromProperties13, "FromProperties");
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties13(mappedResult.properties, propertyKeys, options);
}
__name(FromMappedResult10, "FromMappedResult");
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}
__name(PickFromMappedResult, "PickFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type2) => PickResolve(type2, propertyKeys));
}
__name(FromIntersect6, "FromIntersect");
function FromUnion8(types, propertyKeys) {
  return types.map((type2) => PickResolve(type2, propertyKeys));
}
__name(FromUnion8, "FromUnion");
function FromProperties14(properties, propertyKeys) {
  const result = {};
  for (const K2 of propertyKeys)
    if (K2 in properties)
      result[K2] = properties[K2];
  return result;
}
__name(FromProperties14, "FromProperties");
function FromObject3(T, K) {
  const options = Discard(T, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties14(T["properties"], K);
  return Object2(properties, options);
}
__name(FromObject3, "FromObject");
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
__name(UnionFromPropertyKeys2, "UnionFromPropertyKeys");
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect6(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion8(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject3(properties, propertyKeys) : Object2({});
}
__name(PickResolve, "PickResolve");
function Pick(type2, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type2);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type2) ? PickFromMappedResult(type2, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type2, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type2, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type2, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type2, typeKey], options) : CreateType({ ...PickResolve(type2, propertyKeys), ...options });
}
__name(Pick, "Pick");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type2, key, options) {
  return {
    [key]: Pick(type2, [key], Clone(options))
  };
}
__name(FromPropertyKey3, "FromPropertyKey");
function FromPropertyKeys3(type2, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type2, leftKey, options) };
  }, {});
}
__name(FromPropertyKeys3, "FromPropertyKeys");
function FromMappedKey4(type2, mappedKey, options) {
  return FromPropertyKeys3(type2, mappedKey.keys, options);
}
__name(FromMappedKey4, "FromMappedKey");
function PickFromMappedKey(type2, mappedKey, options) {
  const properties = FromMappedKey4(type2, mappedKey, options);
  return MappedResult(properties);
}
__name(PickFromMappedKey, "PickFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
__name(FromComputed3, "FromComputed");
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
__name(FromRef3, "FromRef");
function FromProperties15(properties) {
  const partialProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K] = Optional(properties[K]);
  return partialProperties;
}
__name(FromProperties15, "FromProperties");
function FromObject4(T) {
  const options = Discard(T, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T["properties"]);
  return Object2(properties, options);
}
__name(FromObject4, "FromObject");
function FromRest6(types) {
  return types.map((type2) => PartialResolve(type2));
}
__name(FromRest6, "FromRest");
function PartialResolve(type2) {
  return IsComputed(type2) ? FromComputed3(type2.target, type2.parameters) : IsRef(type2) ? FromRef3(type2.$ref) : IsIntersect(type2) ? Intersect(FromRest6(type2.allOf)) : IsUnion(type2) ? Union(FromRest6(type2.anyOf)) : IsObject3(type2) ? FromObject4(type2) : Object2({});
}
__name(PartialResolve, "PartialResolve");
function Partial(type2, options) {
  if (IsMappedResult(type2)) {
    return PartialFromMappedResult(type2, options);
  } else {
    return CreateType({ ...PartialResolve(type2), ...options });
  }
}
__name(Partial, "Partial");

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties16(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], Clone(options));
  return Acc;
}
__name(FromProperties16, "FromProperties");
function FromMappedResult11(R, options) {
  return FromProperties16(R.properties, options);
}
__name(FromMappedResult11, "FromMappedResult");
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult11(R, options);
  return MappedResult(P);
}
__name(PartialFromMappedResult, "PartialFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RecordCreateFromPattern(pattern, T, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T } }, options);
}
__name(RecordCreateFromPattern, "RecordCreateFromPattern");
function RecordCreateFromKeys(K, T, options) {
  const result = {};
  for (const K2 of K)
    result[K2] = T;
  return Object2(result, { ...options, [Hint]: "Record" });
}
__name(RecordCreateFromKeys, "RecordCreateFromKeys");
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
__name(FromTemplateLiteralKey, "FromTemplateLiteralKey");
function FromUnionKey(key, type2, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type2, options);
}
__name(FromUnionKey, "FromUnionKey");
function FromLiteralKey(key, type2, options) {
  return RecordCreateFromKeys([key.toString()], type2, options);
}
__name(FromLiteralKey, "FromLiteralKey");
function FromRegExpKey(key, type2, options) {
  return RecordCreateFromPattern(key.source, type2, options);
}
__name(FromRegExpKey, "FromRegExpKey");
function FromStringKey(key, type2, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type2, options);
}
__name(FromStringKey, "FromStringKey");
function FromAnyKey(_, type2, options) {
  return RecordCreateFromPattern(PatternStringExact, type2, options);
}
__name(FromAnyKey, "FromAnyKey");
function FromNeverKey(_key, type2, options) {
  return RecordCreateFromPattern(PatternNeverExact, type2, options);
}
__name(FromNeverKey, "FromNeverKey");
function FromIntegerKey(_key, type2, options) {
  return RecordCreateFromPattern(PatternNumberExact, type2, options);
}
__name(FromIntegerKey, "FromIntegerKey");
function FromNumberKey(_, type2, options) {
  return RecordCreateFromPattern(PatternNumberExact, type2, options);
}
__name(FromNumberKey, "FromNumberKey");
function Record(key, type2, options = {}) {
  return IsComputed(type2) ? Computed("Record", [key, Computed(type2.target, type2.parameters)], options) : IsComputed(key) ? Computed("Record", [Computed(type2.target, type2.parameters), type2], options) : IsRef(key) ? Computed("Record", [Ref(key.$ref), type2]) : IsUnion(key) ? FromUnionKey(key.anyOf, type2, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type2, options) : IsLiteral(key) ? FromLiteralKey(key.const, type2, options) : IsInteger2(key) ? FromIntegerKey(key, type2, options) : IsNumber3(key) ? FromNumberKey(key, type2, options) : IsRegExp2(key) ? FromRegExpKey(key, type2, options) : IsString3(key) ? FromStringKey(key, type2, options) : IsAny(key) ? FromAnyKey(key, type2, options) : IsNever(key) ? FromNeverKey(key, type2, options) : Never(options);
}
__name(Record, "Record");

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
__name(FromComputed4, "FromComputed");
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
__name(FromRef4, "FromRef");
function FromProperties17(properties) {
  const requiredProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K] = Discard(properties[K], [OptionalKind]);
  return requiredProperties;
}
__name(FromProperties17, "FromProperties");
function FromObject5(type2) {
  const options = Discard(type2, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties17(type2["properties"]);
  return Object2(properties, options);
}
__name(FromObject5, "FromObject");
function FromRest7(types) {
  return types.map((type2) => RequiredResolve(type2));
}
__name(FromRest7, "FromRest");
function RequiredResolve(type2) {
  return IsComputed(type2) ? FromComputed4(type2.target, type2.parameters) : IsRef(type2) ? FromRef4(type2.$ref) : IsIntersect(type2) ? Intersect(FromRest7(type2.allOf)) : IsUnion(type2) ? Union(FromRest7(type2.anyOf)) : IsObject3(type2) ? FromObject5(type2) : Object2({});
}
__name(RequiredResolve, "RequiredResolve");
function Required(type2, options) {
  if (IsMappedResult(type2)) {
    return RequiredFromMappedResult(type2, options);
  } else {
    return CreateType({ ...RequiredResolve(type2), ...options });
  }
}
__name(Required, "Required");

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties18(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
__name(FromProperties18, "FromProperties");
function FromMappedResult12(R, options) {
  return FromProperties18(R.properties, options);
}
__name(FromMappedResult12, "FromMappedResult");
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
__name(RequiredFromMappedResult, "RequiredFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DerefParameters(moduleProperties, types) {
  return types.map((type2) => {
    return IsRef(type2) ? Deref(moduleProperties, type2.$ref) : FromType(moduleProperties, type2);
  });
}
__name(DerefParameters, "DerefParameters");
function Deref(moduleProperties, ref) {
  return ref in moduleProperties ? IsRef(moduleProperties[ref]) ? Deref(moduleProperties, moduleProperties[ref].$ref) : FromType(moduleProperties, moduleProperties[ref]) : Never();
}
__name(Deref, "Deref");
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
__name(FromAwaited, "FromAwaited");
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
__name(FromIndex, "FromIndex");
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
__name(FromKeyOf, "FromKeyOf");
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
__name(FromPartial, "FromPartial");
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
__name(FromOmit, "FromOmit");
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
__name(FromPick, "FromPick");
function FromRecord2(parameters) {
  return Record(parameters[0], parameters[1]);
}
__name(FromRecord2, "FromRecord");
function FromRequired(parameters) {
  return Required(parameters[0]);
}
__name(FromRequired, "FromRequired");
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DerefParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Record" ? FromRecord2(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
__name(FromComputed5, "FromComputed");
function FromObject6(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType(moduleProperties, properties[key]) };
  }, {}));
}
__name(FromObject6, "FromObject");
function FromConstructor2(moduleProperties, parameters, instanceType) {
  return Constructor(FromRest8(moduleProperties, parameters), FromType(moduleProperties, instanceType));
}
__name(FromConstructor2, "FromConstructor");
function FromFunction2(moduleProperties, parameters, returnType) {
  return Function2(FromRest8(moduleProperties, parameters), FromType(moduleProperties, returnType));
}
__name(FromFunction2, "FromFunction");
function FromTuple4(moduleProperties, types) {
  return Tuple(FromRest8(moduleProperties, types));
}
__name(FromTuple4, "FromTuple");
function FromIntersect7(moduleProperties, types) {
  return Intersect(FromRest8(moduleProperties, types));
}
__name(FromIntersect7, "FromIntersect");
function FromUnion9(moduleProperties, types) {
  return Union(FromRest8(moduleProperties, types));
}
__name(FromUnion9, "FromUnion");
function FromArray5(moduleProperties, type2) {
  return Array2(FromType(moduleProperties, type2));
}
__name(FromArray5, "FromArray");
function FromAsyncIterator2(moduleProperties, type2) {
  return AsyncIterator(FromType(moduleProperties, type2));
}
__name(FromAsyncIterator2, "FromAsyncIterator");
function FromIterator2(moduleProperties, type2) {
  return Iterator(FromType(moduleProperties, type2));
}
__name(FromIterator2, "FromIterator");
function FromRest8(moduleProperties, types) {
  return types.map((type2) => FromType(moduleProperties, type2));
}
__name(FromRest8, "FromRest");
function FromType(moduleProperties, type2) {
  return (
    // Modifier Unwrap - Reapplied via CreateType Options
    IsOptional(type2) ? CreateType(FromType(moduleProperties, Discard(type2, [OptionalKind])), type2) : IsReadonly(type2) ? CreateType(FromType(moduleProperties, Discard(type2, [ReadonlyKind])), type2) : (
      // Traveral
      IsArray3(type2) ? CreateType(FromArray5(moduleProperties, type2.items), type2) : IsAsyncIterator3(type2) ? CreateType(FromAsyncIterator2(moduleProperties, type2.items), type2) : IsComputed(type2) ? CreateType(FromComputed5(moduleProperties, type2.target, type2.parameters)) : IsConstructor(type2) ? CreateType(FromConstructor2(moduleProperties, type2.parameters, type2.returns), type2) : IsFunction3(type2) ? CreateType(FromFunction2(moduleProperties, type2.parameters, type2.returns), type2) : IsIntersect(type2) ? CreateType(FromIntersect7(moduleProperties, type2.allOf), type2) : IsIterator3(type2) ? CreateType(FromIterator2(moduleProperties, type2.items), type2) : IsObject3(type2) ? CreateType(FromObject6(moduleProperties, type2.properties), type2) : IsTuple(type2) ? CreateType(FromTuple4(moduleProperties, type2.items || []), type2) : IsUnion(type2) ? CreateType(FromUnion9(moduleProperties, type2.anyOf), type2) : type2
    )
  );
}
__name(FromType, "FromType");
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType(moduleProperties, moduleProperties[key]) : Never();
}
__name(ComputeType, "ComputeType");
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}
__name(ComputeModuleProperties, "ComputeModuleProperties");

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
var TModule = class {
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  /** `[Json]` Imports a Type by Key. */
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  // prettier-ignore
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
};
__name(TModule, "TModule");
function Module(properties) {
  return new TModule(properties);
}
__name(Module, "Module");

// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Not2(type2, options) {
  return CreateType({ [Kind]: "Not", not: type2 }, options);
}
__name(Not2, "Not");

// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}
__name(Parameters, "Parameters");

// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
__name(ReadonlyOptional, "ReadonlyOptional");

// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}
__name(Recursive, "Recursive");

// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}
__name(RegExp2, "RegExp");

// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function RestResolve(T) {
  return IsIntersect(T) ? T.allOf : IsUnion(T) ? T.anyOf : IsTuple(T) ? T.items ?? [] : [];
}
__name(RestResolve, "RestResolve");
function Rest(T) {
  return RestResolve(T);
}
__name(Rest, "Rest");

// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}
__name(ReturnType, "ReturnType");

// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TransformDecodeBuilder = class {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode2) {
    return new TransformEncodeBuilder(this.schema, decode2);
  }
};
__name(TransformDecodeBuilder, "TransformDecodeBuilder");
var TransformEncodeBuilder = class {
  constructor(schema, decode2) {
    this.schema = schema;
    this.decode = decode2;
  }
  EncodeTransform(encode, schema) {
    const Encode2 = /* @__PURE__ */ __name((value) => schema[TransformKind].Encode(encode(value)), "Encode");
    const Decode2 = /* @__PURE__ */ __name((value) => this.decode(schema[TransformKind].Decode(value)), "Decode");
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
};
__name(TransformEncodeBuilder, "TransformEncodeBuilder");
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}
__name(Transform, "Transform");

// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}
__name(Unsafe, "Unsafe");

// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}
__name(Void, "Void");

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var type_exports3 = {};
__export(type_exports3, {
  Any: () => Any,
  Array: () => Array2,
  AsyncIterator: () => AsyncIterator,
  Awaited: () => Awaited,
  BigInt: () => BigInt2,
  Boolean: () => Boolean,
  Capitalize: () => Capitalize,
  Composite: () => Composite,
  Const: () => Const,
  Constructor: () => Constructor,
  ConstructorParameters: () => ConstructorParameters,
  Date: () => Date2,
  Enum: () => Enum,
  Exclude: () => Exclude,
  Extends: () => Extends,
  Extract: () => Extract,
  Function: () => Function2,
  Index: () => Index,
  InstanceType: () => InstanceType,
  Integer: () => Integer,
  Intersect: () => Intersect,
  Iterator: () => Iterator,
  KeyOf: () => KeyOf,
  Literal: () => Literal,
  Lowercase: () => Lowercase,
  Mapped: () => Mapped,
  Module: () => Module,
  Never: () => Never,
  Not: () => Not2,
  Null: () => Null,
  Number: () => Number2,
  Object: () => Object2,
  Omit: () => Omit,
  Optional: () => Optional,
  Parameters: () => Parameters,
  Partial: () => Partial,
  Pick: () => Pick,
  Promise: () => Promise2,
  Readonly: () => Readonly,
  ReadonlyOptional: () => ReadonlyOptional,
  Record: () => Record,
  Recursive: () => Recursive,
  Ref: () => Ref,
  RegExp: () => RegExp2,
  Required: () => Required,
  Rest: () => Rest,
  ReturnType: () => ReturnType,
  String: () => String2,
  Symbol: () => Symbol2,
  TemplateLiteral: () => TemplateLiteral,
  Transform: () => Transform,
  Tuple: () => Tuple,
  Uint8Array: () => Uint8Array2,
  Uncapitalize: () => Uncapitalize,
  Undefined: () => Undefined,
  Union: () => Union,
  Unknown: () => Unknown,
  Unsafe: () => Unsafe,
  Uppercase: () => Uppercase,
  Void: () => Void
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = type_exports3;

// node_modules/@sinclair/typebox/build/esm/system/system.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TypeSystemDuplicateTypeKind = class extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
};
__name(TypeSystemDuplicateTypeKind, "TypeSystemDuplicateTypeKind");
var TypeSystemDuplicateFormat = class extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
};
__name(TypeSystemDuplicateFormat, "TypeSystemDuplicateFormat");
var TypeSystem;
(function(TypeSystem2) {
  function Type2(kind, check) {
    if (type_exports2.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    type_exports2.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  __name(Type2, "Type");
  TypeSystem2.Type = Type2;
  function Format2(format, check) {
    if (format_exports.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    format_exports.Set(format, check);
    return format;
  }
  __name(Format2, "Format");
  TypeSystem2.Format = Format2;
})(TypeSystem || (TypeSystem = {}));

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function DefaultErrorFunction(error4) {
  switch (error4.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error4.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error4.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error4.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error4.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error4.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error4.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error4.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error4.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error4.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error4.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error4.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error4.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error4.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error4.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error4.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error4.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error4.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error4.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error4.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error4.schema.const === "string" ? `'${error4.schema.const}'` : error4.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error4.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error4.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error4.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error4.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error4.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error4.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error4.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error4.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error4.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error4.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error4.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error4.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error4.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error4.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error4.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error4.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
__name(DefaultErrorFunction, "DefaultErrorFunction");
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}
__name(GetErrorFunction, "GetErrorFunction");

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TypeDereferenceError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
};
__name(TypeDereferenceError, "TypeDereferenceError");
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === void 0)
    throw new TypeDereferenceError(schema);
  return Deref2(target, references);
}
__name(Resolve, "Resolve");
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
__name(Pushref, "Pushref");
function Deref2(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}
__name(Deref2, "Deref");

// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ValueHashError = class extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
};
__name(ValueHashError, "ValueHashError");
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt(
  "18446744073709551616"
  /* 2 ^ 64 */
)];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0; i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
__name(NumberToBytes, "NumberToBytes");
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
__name(ArrayType2, "ArrayType");
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
__name(BooleanType, "BooleanType");
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte2 of F64Out) {
    FNV1A64(byte2);
  }
}
__name(BigIntType, "BigIntType");
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
__name(DateType2, "DateType");
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
__name(NullType, "NullType");
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte2 of F64Out) {
    FNV1A64(byte2);
  }
}
__name(NumberType, "NumberType");
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
__name(ObjectType2, "ObjectType");
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0; i < value.length; i++) {
    for (const byte2 of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte2);
    }
  }
}
__name(StringType, "StringType");
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
__name(SymbolType, "SymbolType");
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0; i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
__name(Uint8ArrayType2, "Uint8ArrayType");
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
__name(UndefinedType, "UndefinedType");
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
__name(Visit4, "Visit");
function FNV1A64(byte2) {
  Accumulator = Accumulator ^ Bytes[byte2];
  Accumulator = Accumulator * Prime % Size;
}
__name(FNV1A64, "FNV1A64");
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}
__name(Hash, "Hash");

// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ValueCheckUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
};
__name(ValueCheckUnknownTypeError, "ValueCheckUnknownTypeError");
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
__name(IsAnyOrUnknown, "IsAnyOrUnknown");
function IsDefined(value) {
  return value !== void 0;
}
__name(IsDefined, "IsDefined");
function FromAny2(schema, references, value) {
  return true;
}
__name(FromAny2, "FromAny");
function FromArray6(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
__name(FromArray6, "FromArray");
function FromAsyncIterator3(schema, references, value) {
  return IsAsyncIterator2(value);
}
__name(FromAsyncIterator3, "FromAsyncIterator");
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
__name(FromBigInt2, "FromBigInt");
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
__name(FromBoolean2, "FromBoolean");
function FromConstructor3(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
__name(FromConstructor3, "FromConstructor");
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
__name(FromDate2, "FromDate");
function FromFunction3(schema, references, value) {
  return IsFunction2(value);
}
__name(FromFunction3, "FromFunction");
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
__name(FromImport, "FromImport");
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
__name(FromInteger2, "FromInteger");
function FromIntersect8(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
__name(FromIntersect8, "FromIntersect");
function FromIterator3(schema, references, value) {
  return IsIterator2(value);
}
__name(FromIterator3, "FromIterator");
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
__name(FromLiteral3, "FromLiteral");
function FromNever2(schema, references, value) {
  return false;
}
__name(FromNever2, "FromNever");
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
__name(FromNot2, "FromNot");
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
__name(FromNull2, "FromNull");
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
__name(FromNumber2, "FromNumber");
function FromObject7(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
__name(FromObject7, "FromObject");
function FromPromise3(schema, references, value) {
  return IsPromise(value);
}
__name(FromPromise3, "FromPromise");
function FromRecord3(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex2.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex2.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex2.test(key);
  }) : true;
  return check1 && check2 && check3;
}
__name(FromRecord3, "FromRecord");
function FromRef5(schema, references, value) {
  return Visit5(Deref2(schema, references), references, value);
}
__name(FromRef5, "FromRef");
function FromRegExp2(schema, references, value) {
  const regex2 = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex2.test(value);
}
__name(FromRegExp2, "FromRegExp");
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!format_exports.Has(schema.format))
      return false;
    const func = format_exports.Get(schema.format);
    return func(value);
  }
  return true;
}
__name(FromString2, "FromString");
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
__name(FromSymbol2, "FromSymbol");
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
__name(FromTemplateLiteral4, "FromTemplateLiteral");
function FromThis(schema, references, value) {
  return Visit5(Deref2(schema, references), references, value);
}
__name(FromThis, "FromThis");
function FromTuple5(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === void 0 && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0; i < schema.items.length; i++) {
    if (!Visit5(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
__name(FromTuple5, "FromTuple");
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
__name(FromUndefined2, "FromUndefined");
function FromUnion10(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
__name(FromUnion10, "FromUnion");
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
__name(FromUint8Array2, "FromUint8Array");
function FromUnknown2(schema, references, value) {
  return true;
}
__name(FromUnknown2, "FromUnknown");
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
__name(FromVoid2, "FromVoid");
function FromKind(schema, references, value) {
  if (!type_exports2.Has(schema[Kind]))
    return false;
  const func = type_exports2.Get(schema[Kind]);
  return func(schema, value);
}
__name(FromKind, "FromKind");
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Array":
      return FromArray6(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator3(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor3(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction3(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect8(schema_, references_, value);
    case "Iterator":
      return FromIterator3(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject7(schema_, references_, value);
    case "Promise":
      return FromPromise3(schema_, references_, value);
    case "Record":
      return FromRecord3(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple5(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion10(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
__name(Visit5, "Visit");
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}
__name(Check, "Check");

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
var ValueErrorsUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
__name(ValueErrorsUnknownTypeError, "ValueErrorsUnknownTypeError");
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
__name(EscapeKey, "EscapeKey");
function IsDefined2(value) {
  return value !== void 0;
}
__name(IsDefined2, "IsDefined");
var ValueErrorIterator = class {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  /** Returns the first value error or undefined if no errors */
  First() {
    const next2 = this.iterator.next();
    return next2.done ? void 0 : next2.value;
  }
};
__name(ValueErrorIterator, "ValueErrorIterator");
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
__name(Create, "Create");
function* FromAny3(schema, references, path, value) {
}
__name(FromAny3, "FromAny");
function* FromArray7(schema, references, path, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0; i < value.length; i++) {
    yield* Visit6(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
__name(FromArray7, "FromArray");
function* FromAsyncIterator4(schema, references, path, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
__name(FromAsyncIterator4, "FromAsyncIterator");
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
__name(FromBigInt3, "FromBigInt");
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
__name(FromBoolean3, "FromBoolean");
function* FromConstructor4(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
__name(FromConstructor4, "FromConstructor");
function* FromDate3(schema, references, path, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
__name(FromDate3, "FromDate");
function* FromFunction4(schema, references, path, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
__name(FromFunction4, "FromFunction");
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
__name(FromImport2, "FromImport");
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
__name(FromInteger3, "FromInteger");
function* FromIntersect9(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error4 of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error4;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next2 = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next2.done)
          yield next2.value;
      }
    }
  }
}
__name(FromIntersect9, "FromIntersect");
function* FromIterator4(schema, references, path, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
__name(FromIterator4, "FromIterator");
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
__name(FromLiteral4, "FromLiteral");
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
__name(FromNever3, "FromNever");
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
__name(FromNot3, "FromNot");
function* FromNull3(schema, references, path, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
__name(FromNull3, "FromNull");
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
__name(FromNumber3, "FromNumber");
function* FromObject8(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
__name(FromObject8, "FromObject");
function* FromPromise4(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
__name(FromPromise4, "FromPromise");
function* FromRecord4(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex2.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex2.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex2.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
__name(FromRecord4, "FromRecord");
function* FromRef6(schema, references, path, value) {
  yield* Visit6(Deref2(schema, references), references, path, value);
}
__name(FromRef6, "FromRef");
function* FromRegExp3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex2 = new RegExp(schema.source, schema.flags);
  if (!regex2.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
__name(FromRegExp3, "FromRegExp");
function* FromString3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString2(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!format_exports.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = format_exports.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
__name(FromString3, "FromString");
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
__name(FromSymbol3, "FromSymbol");
function* FromTemplateLiteral5(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex2 = new RegExp(schema.pattern);
  if (!regex2.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
__name(FromTemplateLiteral5, "FromTemplateLiteral");
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref2(schema, references), references, path, value);
}
__name(FromThis2, "FromThis");
function* FromTuple6(schema, references, path, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === void 0 && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0; i < schema.items.length; i++) {
    yield* Visit6(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
__name(FromTuple6, "FromTuple");
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
__name(FromUndefined3, "FromUndefined");
function* FromUnion11(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
__name(FromUnion11, "FromUnion");
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
__name(FromUint8Array3, "FromUint8Array");
function* FromUnknown3(schema, references, path, value) {
}
__name(FromUnknown3, "FromUnknown");
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
__name(FromVoid3, "FromVoid");
function* FromKind2(schema, references, path, value) {
  const check = type_exports2.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
__name(FromKind2, "FromKind");
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Array":
      return yield* FromArray7(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator4(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor4(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction4(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect9(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator4(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject8(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise4(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord4(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple6(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion11(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
__name(Visit6, "Visit");
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}
__name(Errors, "Errors");

// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TransformDecodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error4) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error4;
  }
};
__name(TransformDecodeCheckError, "TransformDecodeCheckError");
var TransformDecodeError = class extends TypeBoxError {
  constructor(schema, path, value, error4) {
    super(error4 instanceof Error ? error4.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error4;
  }
};
__name(TransformDecodeError, "TransformDecodeError");
function Default(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error4) {
    throw new TransformDecodeError(schema, path, value, error4);
  }
}
__name(Default, "Default");
function FromArray8(schema, references, path, value) {
  return IsArray2(value) ? Default(schema, path, value.map((value2, index) => Visit7(schema.items, references, `${path}/${index}`, value2))) : Default(schema, path, value);
}
__name(FromArray8, "FromArray");
function FromIntersect10(schema, references, path, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit7(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
__name(FromIntersect10, "FromIntersect");
function FromImport3(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const transform = schema[TransformKind];
  const transformTarget = { [TransformKind]: transform, ...target };
  return Visit7(transformTarget, [...references, ...definitions], path, value);
}
__name(FromImport3, "FromImport");
function FromNot4(schema, references, path, value) {
  return Default(schema, path, Visit7(schema.not, references, path, value));
}
__name(FromNot4, "FromNot");
function FromObject9(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit7(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
__name(FromObject9, "FromObject");
function FromRecord5(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit7(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
__name(FromRecord5, "FromRecord");
function FromRef7(schema, references, path, value) {
  const target = Deref2(schema, references);
  return Default(schema, path, Visit7(target, references, path, value));
}
__name(FromRef7, "FromRef");
function FromThis3(schema, references, path, value) {
  const target = Deref2(schema, references);
  return Default(schema, path, Visit7(target, references, path, value));
}
__name(FromThis3, "FromThis");
function FromTuple7(schema, references, path, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default(schema, path, schema.items.map((schema2, index) => Visit7(schema2, references, `${path}/${index}`, value[index]))) : Default(schema, path, value);
}
__name(FromTuple7, "FromTuple");
function FromUnion12(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit7(subschema, references, path, value);
    return Default(schema, path, decoded);
  }
  return Default(schema, path, value);
}
__name(FromUnion12, "FromUnion");
function Visit7(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, path, value);
    case "Import":
      return FromImport3(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect10(schema_, references_, path, value);
    case "Not":
      return FromNot4(schema_, references_, path, value);
    case "Object":
      return FromObject9(schema_, references_, path, value);
    case "Record":
      return FromRecord5(schema_, references_, path, value);
    case "Ref":
      return FromRef7(schema_, references_, path, value);
    case "Symbol":
      return Default(schema_, path, value);
    case "This":
      return FromThis3(schema_, references_, path, value);
    case "Tuple":
      return FromTuple7(schema_, references_, path, value);
    case "Union":
      return FromUnion12(schema_, references_, path, value);
    default:
      return Default(schema_, path, value);
  }
}
__name(Visit7, "Visit");
function TransformDecode(schema, references, value) {
  return Visit7(schema, references, "", value);
}
__name(TransformDecode, "TransformDecode");

// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var TransformEncodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error4) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error4;
  }
};
__name(TransformEncodeCheckError, "TransformEncodeCheckError");
var TransformEncodeError = class extends TypeBoxError {
  constructor(schema, path, value, error4) {
    super(`${error4 instanceof Error ? error4.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error4;
  }
};
__name(TransformEncodeError, "TransformEncodeError");
function Default2(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error4) {
    throw new TransformEncodeError(schema, path, value, error4);
  }
}
__name(Default2, "Default");
function FromArray9(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  return IsArray2(defaulted) ? defaulted.map((value2, index) => Visit8(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
__name(FromArray9, "FromArray");
function FromImport4(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const transform = schema[TransformKind];
  const transformTarget = { [TransformKind]: transform, ...target };
  return Visit8(transformTarget, [...references, ...definitions], path, value);
}
__name(FromImport4, "FromImport");
function FromIntersect11(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit8(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromIntersect11, "FromIntersect");
function FromNot5(schema, references, path, value) {
  return Default2(schema.not, path, Default2(schema, path, value));
}
__name(FromNot5, "FromNot");
function FromObject10(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit8(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromObject10, "FromObject");
function FromRecord6(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit8(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromRecord6, "FromRecord");
function FromRef8(schema, references, path, value) {
  const target = Deref2(schema, references);
  const resolved = Visit8(target, references, path, value);
  return Default2(schema, path, resolved);
}
__name(FromRef8, "FromRef");
function FromThis4(schema, references, path, value) {
  const target = Deref2(schema, references);
  const resolved = Visit8(target, references, path, value);
  return Default2(schema, path, resolved);
}
__name(FromThis4, "FromThis");
function FromTuple8(schema, references, path, value) {
  const value1 = Default2(schema, path, value);
  return IsArray2(schema.items) ? schema.items.map((schema2, index) => Visit8(schema2, references, `${path}/${index}`, value1[index])) : [];
}
__name(FromTuple8, "FromTuple");
function FromUnion13(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit8(subschema, references, path, value);
    return Default2(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit8(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default2(schema, path, value1);
  }
  return Default2(schema, path, value);
}
__name(FromUnion13, "FromUnion");
function Visit8(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, path, value);
    case "Import":
      return FromImport4(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject10(schema_, references_, path, value);
    case "Record":
      return FromRecord6(schema_, references_, path, value);
    case "Ref":
      return FromRef8(schema_, references_, path, value);
    case "This":
      return FromThis4(schema_, references_, path, value);
    case "Tuple":
      return FromTuple8(schema_, references_, path, value);
    case "Union":
      return FromUnion13(schema_, references_, path, value);
    default:
      return Default2(schema_, path, value);
  }
}
__name(Visit8, "Visit");
function TransformEncode(schema, references, value) {
  return Visit8(schema, references, "", value);
}
__name(TransformEncode, "TransformEncode");

// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromArray10(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
__name(FromArray10, "FromArray");
function FromAsyncIterator5(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
__name(FromAsyncIterator5, "FromAsyncIterator");
function FromConstructor5(schema, references) {
  return IsTransform(schema) || Visit9(schema.returns, references) || schema.parameters.some((schema2) => Visit9(schema2, references));
}
__name(FromConstructor5, "FromConstructor");
function FromFunction5(schema, references) {
  return IsTransform(schema) || Visit9(schema.returns, references) || schema.parameters.some((schema2) => Visit9(schema2, references));
}
__name(FromFunction5, "FromFunction");
function FromIntersect12(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit9(schema2, references));
}
__name(FromIntersect12, "FromIntersect");
function FromIterator5(schema, references) {
  return IsTransform(schema) || Visit9(schema.items, references);
}
__name(FromIterator5, "FromIterator");
function FromNot6(schema, references) {
  return IsTransform(schema) || Visit9(schema.not, references);
}
__name(FromNot6, "FromNot");
function FromObject11(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit9(schema2, references)) || IsSchema(schema.additionalProperties) && Visit9(schema.additionalProperties, references);
}
__name(FromObject11, "FromObject");
function FromPromise5(schema, references) {
  return IsTransform(schema) || Visit9(schema.item, references);
}
__name(FromPromise5, "FromPromise");
function FromRecord7(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit9(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
__name(FromRecord7, "FromRecord");
function FromRef9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit9(Deref2(schema, references), references);
}
__name(FromRef9, "FromRef");
function FromThis5(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit9(Deref2(schema, references), references);
}
__name(FromThis5, "FromThis");
function FromTuple9(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema2) => Visit9(schema2, references));
}
__name(FromTuple9, "FromTuple");
function FromUnion14(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit9(schema2, references));
}
__name(FromUnion14, "FromUnion");
function Visit9(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray10(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor5(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Intersect":
      return FromIntersect12(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot6(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord7(schema_, references_);
    case "Ref":
      return FromRef9(schema_, references_);
    case "This":
      return FromThis5(schema_, references_);
    case "Tuple":
      return FromTuple9(schema_, references_);
    case "Union":
      return FromUnion14(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
__name(Visit9, "Visit");
var visited = /* @__PURE__ */ new Set();
function HasTransform(schema, references) {
  visited.clear();
  return Visit9(schema, references);
}
__name(HasTransform, "HasTransform");

// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
var TypeCheck = class {
  constructor(schema, references, checkFunc, code) {
    this.schema = schema;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema, references);
  }
  /** Returns the generated assertion code used to validate this type. */
  Code() {
    return this.code;
  }
  /** Returns the schema type used to validate */
  Schema() {
    return this.schema;
  }
  /** Returns reference types used to validate */
  References() {
    return this.references;
  }
  /** Returns an iterator for each error in this value. */
  Errors(value) {
    return Errors(this.schema, this.references, value);
  }
  /** Returns true if the value matches the compiled type. */
  Check(value) {
    return this.checkFunc(value);
  }
  /** Decodes a value or throws if error */
  Decode(value) {
    if (!this.checkFunc(value))
      throw new TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value) : value;
  }
  /** Encodes a value or throws if error */
  Encode(value) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value) : value;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
    return encoded;
  }
};
__name(TypeCheck, "TypeCheck");
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  __name(DollarSign, "DollarSign");
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  __name(IsUnderscore, "IsUnderscore");
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  __name(IsAlpha, "IsAlpha");
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  __name(IsNumeric, "IsNumeric");
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value) {
    if (value.length === 0)
      return false;
    return Character.IsNumeric(value.charCodeAt(0));
  }
  __name(IsFirstCharacterNumeric, "IsFirstCharacterNumeric");
  function IsAccessor(value) {
    if (IsFirstCharacterNumeric(value))
      return false;
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check)
        return false;
    }
    return true;
  }
  __name(IsAccessor, "IsAccessor");
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  __name(EscapeHyphen, "EscapeHyphen");
  function Encode2(object, key) {
    return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
  }
  __name(Encode2, "Encode");
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0; i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  __name(Encode2, "Encode");
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  __name(Escape3, "Escape");
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));
var TypeCompilerUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
__name(TypeCompilerUnknownTypeError, "TypeCompilerUnknownTypeError");
var TypeCompilerTypeGuardError = class extends TypeBoxError {
  constructor(schema) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema;
  }
};
__name(TypeCompilerTypeGuardError, "TypeCompilerTypeGuardError");
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
  }
  __name(IsExactOptionalProperty, "IsExactOptionalProperty");
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
  }
  __name(IsObjectLike, "IsObjectLike");
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
  }
  __name(IsRecordLike, "IsRecordLike");
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value} === 'number'` : `Number.isFinite(${value})`;
  }
  __name(IsNumberLike, "IsNumberLike");
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
  }
  __name(IsVoidLike, "IsVoidLike");
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema) {
    return schema[Kind] === "Any" || schema[Kind] === "Unknown";
  }
  __name(IsAnyOrUnknown2, "IsAnyOrUnknown");
  function* FromAny5(schema, references, value) {
    yield "true";
  }
  __name(FromAny5, "FromAny");
  function* FromArray17(schema, references, value) {
    yield `Array.isArray(${value})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber2(schema.maxItems))
      yield `${value}.length <= ${schema.maxItems}`;
    if (IsNumber2(schema.minItems))
      yield `${value}.length >= ${schema.minItems}`;
    const elementExpression = CreateExpression(schema.items, references, "value");
    yield `${value}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains)) {
      const containsSchema = IsSchema2(schema.contains) ? schema.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber2(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
      const checkMaxContains = IsNumber2(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
    }
    if (schema.uniqueItems === true) {
      const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check} }`;
      yield `((${parameter}) => { ${block} )(${value})`;
    }
  }
  __name(FromArray17, "FromArray");
  function* FromAsyncIterator7(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
  }
  __name(FromAsyncIterator7, "FromAsyncIterator");
  function* FromBigInt6(schema, references, value) {
    yield `(typeof ${value} === 'bigint')`;
    if (IsBigInt2(schema.exclusiveMaximum))
      yield `${value} < BigInt(${schema.exclusiveMaximum})`;
    if (IsBigInt2(schema.exclusiveMinimum))
      yield `${value} > BigInt(${schema.exclusiveMinimum})`;
    if (IsBigInt2(schema.maximum))
      yield `${value} <= BigInt(${schema.maximum})`;
    if (IsBigInt2(schema.minimum))
      yield `${value} >= BigInt(${schema.minimum})`;
    if (IsBigInt2(schema.multipleOf))
      yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
  }
  __name(FromBigInt6, "FromBigInt");
  function* FromBoolean6(schema, references, value) {
    yield `(typeof ${value} === 'boolean')`;
  }
  __name(FromBoolean6, "FromBoolean");
  function* FromConstructor8(schema, references, value) {
    yield* Visit17(schema.returns, references, `${value}.prototype`);
  }
  __name(FromConstructor8, "FromConstructor");
  function* FromDate8(schema, references, value) {
    yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
    if (IsNumber2(schema.exclusiveMaximumTimestamp))
      yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
    if (IsNumber2(schema.exclusiveMinimumTimestamp))
      yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
    if (IsNumber2(schema.maximumTimestamp))
      yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
    if (IsNumber2(schema.minimumTimestamp))
      yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
    if (IsNumber2(schema.multipleOfTimestamp))
      yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
  }
  __name(FromDate8, "FromDate");
  function* FromFunction7(schema, references, value) {
    yield `(typeof ${value} === 'function')`;
  }
  __name(FromFunction7, "FromFunction");
  function* FromImport10(schema, references, value) {
    const members = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => {
      return [...result, schema.$defs[key]];
    }, []);
    yield* Visit17(Ref(schema.$ref), [...references, ...members], value);
  }
  __name(FromImport10, "FromImport");
  function* FromInteger6(schema, references, value) {
    yield `Number.isInteger(${value})`;
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  __name(FromInteger6, "FromInteger");
  function* FromIntersect18(schema, references, value) {
    const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
    if (schema.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check2})`;
    } else if (IsSchema2(schema.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
      yield `(${check1} && ${check2})`;
    } else {
      yield `(${check1})`;
    }
  }
  __name(FromIntersect18, "FromIntersect");
  function* FromIterator7(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
  }
  __name(FromIterator7, "FromIterator");
  function* FromLiteral7(schema, references, value) {
    if (typeof schema.const === "number" || typeof schema.const === "boolean") {
      yield `(${value} === ${schema.const})`;
    } else {
      yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
    }
  }
  __name(FromLiteral7, "FromLiteral");
  function* FromNever6(schema, references, value) {
    yield `false`;
  }
  __name(FromNever6, "FromNever");
  function* FromNot8(schema, references, value) {
    const expression = CreateExpression(schema.not, references, value);
    yield `(!${expression})`;
  }
  __name(FromNot8, "FromNot");
  function* FromNull6(schema, references, value) {
    yield `(${value} === null)`;
  }
  __name(FromNull6, "FromNull");
  function* FromNumber6(schema, references, value) {
    yield Policy.IsNumberLike(value);
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  __name(FromNumber6, "FromNumber");
  function* FromObject18(schema, references, value) {
    yield Policy.IsObjectLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value, knownKey);
      const property = schema.properties[knownKey];
      if (schema.required && schema.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value, knownKey, expression);
      }
    }
    if (schema.additionalProperties === false) {
      if (schema.required && schema.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema.additionalProperties === "object") {
      const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  __name(FromObject18, "FromObject");
  function* FromPromise7(schema, references, value) {
    yield `${value} instanceof Promise`;
  }
  __name(FromPromise7, "FromPromise");
  function* FromRecord13(schema, references, value) {
    yield Policy.IsRecordLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check2 = IsSchema2(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
    yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
  }
  __name(FromRecord13, "FromRecord");
  function* FromRef15(schema, references, value) {
    const target = Deref2(schema, references);
    if (state.functions.has(schema.$ref))
      return yield `${CreateFunctionName(schema.$ref)}(${value})`;
    yield* Visit17(target, references, value);
  }
  __name(FromRef15, "FromRef");
  function* FromRegExp5(schema, references, value) {
    const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    yield `${variable}.test(${value})`;
  }
  __name(FromRegExp5, "FromRegExp");
  function* FromString6(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    if (schema.pattern !== void 0) {
      const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
      yield `${variable}.test(${value})`;
    }
    if (schema.format !== void 0) {
      yield `format('${schema.format}', ${value})`;
    }
  }
  __name(FromString6, "FromString");
  function* FromSymbol6(schema, references, value) {
    yield `(typeof ${value} === 'symbol')`;
  }
  __name(FromSymbol6, "FromSymbol");
  function* FromTemplateLiteral7(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
    yield `${variable}.test(${value})`;
  }
  __name(FromTemplateLiteral7, "FromTemplateLiteral");
  function* FromThis11(schema, references, value) {
    yield `${CreateFunctionName(schema.$ref)}(${value})`;
  }
  __name(FromThis11, "FromThis");
  function* FromTuple15(schema, references, value) {
    yield `Array.isArray(${value})`;
    if (schema.items === void 0)
      return yield `${value}.length === 0`;
    yield `(${value}.length === ${schema.maxItems})`;
    for (let i = 0; i < schema.items.length; i++) {
      const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
      yield `${expression}`;
    }
  }
  __name(FromTuple15, "FromTuple");
  function* FromUndefined6(schema, references, value) {
    yield `${value} === undefined`;
  }
  __name(FromUndefined6, "FromUndefined");
  function* FromUnion20(schema, references, value) {
    const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
    yield `(${expressions.join(" || ")})`;
  }
  __name(FromUnion20, "FromUnion");
  function* FromUint8Array5(schema, references, value) {
    yield `${value} instanceof Uint8Array`;
    if (IsNumber2(schema.maxByteLength))
      yield `(${value}.length <= ${schema.maxByteLength})`;
    if (IsNumber2(schema.minByteLength))
      yield `(${value}.length >= ${schema.minByteLength})`;
  }
  __name(FromUint8Array5, "FromUint8Array");
  function* FromUnknown5(schema, references, value) {
    yield "true";
  }
  __name(FromUnknown5, "FromUnknown");
  function* FromVoid5(schema, references, value) {
    yield Policy.IsVoidLike(value);
  }
  __name(FromVoid5, "FromVoid");
  function* FromKind4(schema, references, value) {
    const instance = state.instances.size;
    state.instances.set(instance, schema);
    yield `kind('${schema[Kind]}', ${instance}, ${value})`;
  }
  __name(FromKind4, "FromKind");
  function* Visit17(schema, references, value, useHoisting = true) {
    const references_ = IsString2(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    if (useHoisting && IsString2(schema.$id)) {
      const functionName = CreateFunctionName(schema.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value})`;
      } else {
        state.functions.set(functionName, "<deferred>");
        const functionCode = CreateFunction(functionName, schema, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value);
      case "Array":
        return yield* FromArray17(schema_, references_, value);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value);
      case "Constructor":
        return yield* FromConstructor8(schema_, references_, value);
      case "Date":
        return yield* FromDate8(schema_, references_, value);
      case "Function":
        return yield* FromFunction7(schema_, references_, value);
      case "Import":
        return yield* FromImport10(schema_, references_, value);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value);
      case "Intersect":
        return yield* FromIntersect18(schema_, references_, value);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value);
      case "Never":
        return yield* FromNever6(schema_, references_, value);
      case "Not":
        return yield* FromNot8(schema_, references_, value);
      case "Null":
        return yield* FromNull6(schema_, references_, value);
      case "Number":
        return yield* FromNumber6(schema_, references_, value);
      case "Object":
        return yield* FromObject18(schema_, references_, value);
      case "Promise":
        return yield* FromPromise7(schema_, references_, value);
      case "Record":
        return yield* FromRecord13(schema_, references_, value);
      case "Ref":
        return yield* FromRef15(schema_, references_, value);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value);
      case "String":
        return yield* FromString6(schema_, references_, value);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value);
      case "This":
        return yield* FromThis11(schema_, references_, value);
      case "Tuple":
        return yield* FromTuple15(schema_, references_, value);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value);
      case "Union":
        return yield* FromUnion20(schema_, references_, value);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value);
      case "Void":
        return yield* FromVoid5(schema_, references_, value);
      default:
        if (!type_exports2.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema);
        return yield* FromKind4(schema_, references_, value);
    }
  }
  __name(Visit17, "Visit");
  const state = {
    language: "javascript",
    // target language
    functions: /* @__PURE__ */ new Map(),
    // local functions
    variables: /* @__PURE__ */ new Map(),
    // local variables
    instances: /* @__PURE__ */ new Map()
    // exterior kind instances
  };
  function CreateExpression(schema, references, value, useHoisting = true) {
    return `(${[...Visit17(schema, references, value, useHoisting)].join(" && ")})`;
  }
  __name(CreateExpression, "CreateExpression");
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  __name(CreateFunctionName, "CreateFunctionName");
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  __name(CreateVariable, "CreateVariable");
  function CreateFunction(name, schema, references, value, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
  }
  __name(CreateFunction, "CreateFunction");
  function CreateParameter(name, type2) {
    const annotation = state.language === "typescript" ? `: ${type2}` : "";
    return `${name}${annotation}`;
  }
  __name(CreateParameter, "CreateParameter");
  function CreateReturns(type2) {
    return state.language === "typescript" ? `: ${type2}` : "";
  }
  __name(CreateReturns, "CreateReturns");
  function Build(schema, references, options) {
    const functionCode = CreateFunction("check", schema, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString2(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  __name(Build, "Build");
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema, references, options] = args.length === 2 && IsArray2(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray2(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema))
      throw new TypeCompilerTypeGuardError(schema);
    for (const schema2 of references)
      if (!IsSchema2(schema2))
        throw new TypeCompilerTypeGuardError(schema2);
    return Build(schema, references, options);
  }
  __name(Code, "Code");
  TypeCompiler2.Code = Code;
  function Compile(schema, references = []) {
    const generatedCode = Code(schema, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value) {
      if (!type_exports2.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = type_exports2.Get(kind);
      const schema2 = instances.get(instance);
      return checkFunc(schema2, value);
    }
    __name(typeRegistryFunction, "typeRegistryFunction");
    function formatRegistryFunction(format, value) {
      if (!format_exports.Has(format))
        return false;
      const checkFunc = format_exports.Get(format);
      return checkFunc(value);
    }
    __name(formatRegistryFunction, "formatRegistryFunction");
    function hashFunction(value) {
      return Hash(value);
    }
    __name(hashFunction, "hashFunction");
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema, references, checkFunction, generatedCode);
  }
  __name(Compile, "Compile");
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));

// node_modules/@sinclair/typebox/build/esm/value/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/assert/assert.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AssertError_instances;
var _AssertError_iterator;
var _AssertError_Iterator;
var AssertError = class extends TypeBoxError {
  constructor(iterator) {
    const error4 = iterator.First();
    super(error4 === void 0 ? "Invalid Value" : error4.message);
    _AssertError_instances.add(this);
    _AssertError_iterator.set(this, void 0);
    __classPrivateFieldSet(this, _AssertError_iterator, iterator, "f");
    this.error = error4;
  }
  /** Returns an iterator for each error in this value. */
  Errors() {
    return new ValueErrorIterator(__classPrivateFieldGet(this, _AssertError_instances, "m", _AssertError_Iterator).call(this));
  }
};
__name(AssertError, "AssertError");
_AssertError_iterator = /* @__PURE__ */ new WeakMap(), _AssertError_instances = /* @__PURE__ */ new WeakSet(), _AssertError_Iterator = /* @__PURE__ */ __name(function* _AssertError_Iterator2() {
  if (this.error)
    yield this.error;
  yield* __classPrivateFieldGet(this, _AssertError_iterator, "f");
}, "_AssertError_Iterator");
function AssertValue(schema, references, value) {
  if (Check(schema, references, value))
    return;
  throw new AssertError(Errors(schema, references, value));
}
__name(AssertValue, "AssertValue");
function Assert(...args) {
  return args.length === 3 ? AssertValue(args[0], args[1], args[2]) : AssertValue(args[0], [], args[1]);
}
__name(Assert, "Assert");

// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function FromObject12(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
__name(FromObject12, "FromObject");
function FromArray11(value) {
  return value.map((element) => Clone2(element));
}
__name(FromArray11, "FromArray");
function FromTypedArray(value) {
  return value.slice();
}
__name(FromTypedArray, "FromTypedArray");
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
__name(FromMap, "FromMap");
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
__name(FromSet, "FromSet");
function FromDate4(value) {
  return new Date(value.toISOString());
}
__name(FromDate4, "FromDate");
function FromValue2(value) {
  return value;
}
__name(FromValue2, "FromValue");
function Clone2(value) {
  if (IsArray2(value))
    return FromArray11(value);
  if (IsDate2(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject2(value))
    return FromObject12(value);
  if (IsValueType(value))
    return FromValue2(value);
  throw new Error("ValueClone: Unable to clone value");
}
__name(Clone2, "Clone");

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
var ValueCreateError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
__name(ValueCreateError, "ValueCreateError");
function FromDefault(value) {
  return IsFunction2(value) ? value() : Clone2(value);
}
__name(FromDefault, "FromDefault");
function FromAny4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
__name(FromAny4, "FromAny");
function FromArray12(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== void 0) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit10(schema.items, references);
    });
  } else {
    return [];
  }
}
__name(FromArray12, "FromArray");
function FromAsyncIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
}
__name(FromAsyncIterator6, "FromAsyncIterator");
function FromBigInt4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
__name(FromBigInt4, "FromBigInt");
function FromBoolean4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
__name(FromBoolean4, "FromBoolean");
function FromConstructor6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit10(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self2 = this;
            self2[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
__name(FromConstructor6, "FromConstructor");
function FromDate5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== void 0) {
    return new Date(schema.minimumTimestamp);
  } else {
    return /* @__PURE__ */ new Date();
  }
}
__name(FromDate5, "FromDate");
function FromFunction6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit10(schema.returns, references);
  }
}
__name(FromFunction6, "FromFunction");
function FromImport5(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit10(target, [...references, ...definitions]);
}
__name(FromImport5, "FromImport");
function FromInteger4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
__name(FromInteger4, "FromInteger");
function FromIntersect13(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next2 = Visit10(schema2, references);
      return typeof next2 === "object" ? { ...acc, ...next2 } : next2;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
__name(FromIntersect13, "FromIntersect");
function FromIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
}
__name(FromIterator6, "FromIterator");
function FromLiteral5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
__name(FromLiteral5, "FromLiteral");
function FromNever4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
__name(FromNever4, "FromNever");
function FromNot7(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
__name(FromNot7, "FromNot");
function FromNull4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
__name(FromNull4, "FromNull");
function FromNumber4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
__name(FromNumber4, "FromNumber");
function FromObject13(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit10(subschema, references);
    }
    return Acc;
  }
}
__name(FromObject13, "FromObject");
function FromPromise6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit10(schema.item, references));
  }
}
__name(FromPromise6, "FromPromise");
function FromRecord8(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    const Acc = {};
    for (const key of propertyKeys)
      Acc[key] = Visit10(valueSchema, references);
    return Acc;
  } else {
    return {};
  }
}
__name(FromRecord8, "FromRecord");
function FromRef10(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit10(Deref2(schema, references), references);
  }
}
__name(FromRef10, "FromRef");
function FromRegExp4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
__name(FromRegExp4, "FromRegExp");
function FromString4(schema, references) {
  if (schema.pattern !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey2(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== void 0) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
__name(FromString4, "FromString");
function FromSymbol4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
__name(FromSymbol4, "FromSymbol");
function FromTemplateLiteral6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
__name(FromTemplateLiteral6, "FromTemplateLiteral");
function FromThis6(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit10(Deref2(schema, references), references);
  }
}
__name(FromThis6, "FromThis");
function FromTuple10(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === void 0) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit10(schema.items[index], references));
  }
}
__name(FromTuple10, "FromTuple");
function FromUndefined4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
__name(FromUndefined4, "FromUndefined");
function FromUnion15(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit10(schema.anyOf[0], references);
  }
}
__name(FromUnion15, "FromUnion");
function FromUint8Array4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== void 0) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
__name(FromUint8Array4, "FromUint8Array");
function FromUnknown4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
__name(FromUnknown4, "FromUnknown");
function FromVoid4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
__name(FromVoid4, "FromVoid");
function FromKind3(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
__name(FromKind3, "FromKind");
function Visit10(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Array":
      return FromArray12(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport5(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject13(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord8(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral6(schema_, references_);
    case "This":
      return FromThis6(schema_, references_);
    case "Tuple":
      return FromTuple10(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
__name(Visit10, "Visit");
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit10(args[0], args[1]) : Visit10(args[0], []);
}
__name(Create2, "Create");

// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
var ValueCastError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
__name(ValueCastError, "ValueCastError");
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull2(value)) {
    const object = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal = schema2[Kind] === "Literal" && schema2.const === value[key] ? max : 0;
      const checks = Check(schema2, references, value[key]) ? point : 0;
      const exists = keys.includes(key) ? point : 0;
      return acc + (literal + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
__name(ScoreUnion, "ScoreUnion");
function SelectUnion(union, references, value) {
  const schemas = union.anyOf.map((schema) => Deref2(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
__name(SelectUnion, "SelectUnion");
function CastUnion(union, references, value) {
  if ("default" in union) {
    return typeof value === "function" ? union.default : Clone2(union.default);
  } else {
    const schema = SelectUnion(union, references, value);
    return Cast(schema, references, value);
  }
}
__name(CastUnion, "CastUnion");
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
__name(DefaultClone, "DefaultClone");
function Default3(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
__name(Default3, "Default");
function FromArray13(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray2(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber2(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber2(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit11(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
__name(FromArray13, "FromArray");
function FromConstructor7(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = /* @__PURE__ */ __name(function() {
  }, "result");
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === void 0)
      continue;
    result.prototype[key] = Visit11(property, references, value.prototype[key]);
  }
  return result;
}
__name(FromConstructor7, "FromConstructor");
function FromImport6(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit11(target, [...references, ...definitions], value);
}
__name(FromImport6, "FromImport");
function FromIntersect14(schema, references, value) {
  const created = Create2(schema, references);
  const mapped = IsObject2(created) && IsObject2(value) ? { ...created, ...value } : value;
  return Check(schema, references, mapped) ? mapped : Create2(schema, references);
}
__name(FromIntersect14, "FromIntersect");
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
__name(FromNever5, "FromNever");
function FromObject14(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === void 0)
      continue;
    result[key] = Visit11(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit11(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
__name(FromObject14, "FromObject");
function FromRecord9(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit11(subschema, references, propValue);
  }
  return result;
}
__name(FromRecord9, "FromRecord");
function FromRef11(schema, references, value) {
  return Visit11(Deref2(schema, references), references, value);
}
__name(FromRef11, "FromRef");
function FromThis7(schema, references, value) {
  return Visit11(Deref2(schema, references), references, value);
}
__name(FromThis7, "FromThis");
function FromTuple11(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray2(value))
    return Create2(schema, references);
  if (schema.items === void 0)
    return [];
  return schema.items.map((schema2, index) => Visit11(schema2, references, value[index]));
}
__name(FromTuple11, "FromTuple");
function FromUnion16(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
__name(FromUnion16, "FromUnion");
function Visit11(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_, value);
    case "Constructor":
      return FromConstructor7(schema_, references_, value);
    case "Import":
      return FromImport6(schema_, references_, value);
    case "Intersect":
      return FromIntersect14(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject14(schema_, references_, value);
    case "Record":
      return FromRecord9(schema_, references_, value);
    case "Ref":
      return FromRef11(schema_, references_, value);
    case "This":
      return FromThis7(schema_, references_, value);
    case "Tuple":
      return FromTuple11(schema_, references_, value);
    case "Union":
      return FromUnion16(schema_, references_, value);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    default:
      return Default3(schema_, references_, value);
  }
}
__name(Visit11, "Visit");
function Cast(...args) {
  return args.length === 3 ? Visit11(args[0], args[1], args[2]) : Visit11(args[0], [], args[1]);
}
__name(Cast, "Cast");

// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
__name(IsCheckable, "IsCheckable");
function FromArray14(schema, references, value) {
  if (!IsArray2(value))
    return value;
  return value.map((value2) => Visit12(schema.items, references, value2));
}
__name(FromArray14, "FromArray");
function FromImport7(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit12(target, [...references, ...definitions], value);
}
__name(FromImport7, "FromImport");
function FromIntersect15(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit12(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject2(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject2(value) || !IsObject2(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit12(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
__name(FromIntersect15, "FromIntersect");
function FromObject15(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey2(schema.properties, key)) {
      value[key] = Visit12(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit12(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
__name(FromObject15, "FromObject");
function FromRecord10(schema, references, value) {
  if (!IsObject2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit12(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit12(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
__name(FromRecord10, "FromRecord");
function FromRef12(schema, references, value) {
  return Visit12(Deref2(schema, references), references, value);
}
__name(FromRef12, "FromRef");
function FromThis8(schema, references, value) {
  return Visit12(Deref2(schema, references), references, value);
}
__name(FromThis8, "FromThis");
function FromTuple12(schema, references, value) {
  if (!IsArray2(value))
    return value;
  if (IsUndefined2(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0; i < length; i++) {
    value[i] = Visit12(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
__name(FromTuple12, "FromTuple");
function FromUnion17(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit12(inner, references, value);
    }
  }
  return value;
}
__name(FromUnion17, "FromUnion");
function Visit12(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray14(schema_, references_, value);
    case "Import":
      return FromImport7(schema_, references_, value);
    case "Intersect":
      return FromIntersect15(schema_, references_, value);
    case "Object":
      return FromObject15(schema_, references_, value);
    case "Record":
      return FromRecord10(schema_, references_, value);
    case "Ref":
      return FromRef12(schema_, references_, value);
    case "This":
      return FromThis8(schema_, references_, value);
    case "Tuple":
      return FromTuple12(schema_, references_, value);
    case "Union":
      return FromUnion17(schema_, references_, value);
    default:
      return value;
  }
}
__name(Visit12, "Visit");
function Clean(...args) {
  return args.length === 3 ? Visit12(args[0], args[1], args[2]) : Visit12(args[0], [], args[1]);
}
__name(Clean, "Clean");

// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function IsStringNumeric(value) {
  return IsString2(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
__name(IsStringNumeric, "IsStringNumeric");
function IsValueToString(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNumber2(value);
}
__name(IsValueToString, "IsValueToString");
function IsValueTrue(value) {
  return value === true || IsNumber2(value) && value === 1 || IsBigInt2(value) && value === BigInt("1") || IsString2(value) && (value.toLowerCase() === "true" || value === "1");
}
__name(IsValueTrue, "IsValueTrue");
function IsValueFalse(value) {
  return value === false || IsNumber2(value) && (value === 0 || Object.is(value, -0)) || IsBigInt2(value) && value === BigInt("0") || IsString2(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
__name(IsValueFalse, "IsValueFalse");
function IsTimeStringWithTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
__name(IsTimeStringWithTimeZone, "IsTimeStringWithTimeZone");
function IsTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
__name(IsTimeStringWithoutTimeZone, "IsTimeStringWithoutTimeZone");
function IsDateTimeStringWithTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
__name(IsDateTimeStringWithTimeZone, "IsDateTimeStringWithTimeZone");
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
__name(IsDateTimeStringWithoutTimeZone, "IsDateTimeStringWithoutTimeZone");
function IsDateString(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
__name(IsDateString, "IsDateString");
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralString, "TryConvertLiteralString");
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralNumber, "TryConvertLiteralNumber");
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralBoolean, "TryConvertLiteralBoolean");
function TryConvertLiteral(schema, value) {
  return IsString2(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber2(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean2(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : value;
}
__name(TryConvertLiteral, "TryConvertLiteral");
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
__name(TryConvertBoolean, "TryConvertBoolean");
function TryConvertBigInt(value) {
  const truncateInteger = /* @__PURE__ */ __name((value2) => value2.split(".")[0], "truncateInteger");
  return IsStringNumeric(value) ? BigInt(truncateInteger(value)) : IsNumber2(value) ? BigInt(Math.trunc(value)) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
__name(TryConvertBigInt, "TryConvertBigInt");
function TryConvertString(value) {
  return IsSymbol2(value) && value.description !== void 0 ? value.description.toString() : IsValueToString(value) ? value.toString() : value;
}
__name(TryConvertString, "TryConvertString");
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
__name(TryConvertNumber, "TryConvertNumber");
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber2(value) ? Math.trunc(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
__name(TryConvertInteger, "TryConvertInteger");
function TryConvertNull(value) {
  return IsString2(value) && value.toLowerCase() === "null" ? null : value;
}
__name(TryConvertNull, "TryConvertNull");
function TryConvertUndefined(value) {
  return IsString2(value) && value === "undefined" ? void 0 : value;
}
__name(TryConvertUndefined, "TryConvertUndefined");
function TryConvertDate(value) {
  return IsDate2(value) ? value : IsNumber2(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
}
__name(TryConvertDate, "TryConvertDate");
function Default4(value) {
  return value;
}
__name(Default4, "Default");
function FromArray15(schema, references, value) {
  const elements = IsArray2(value) ? value : [value];
  return elements.map((element) => Visit13(schema.items, references, element));
}
__name(FromArray15, "FromArray");
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
__name(FromBigInt5, "FromBigInt");
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
__name(FromBoolean5, "FromBoolean");
function FromDate6(schema, references, value) {
  return TryConvertDate(value);
}
__name(FromDate6, "FromDate");
function FromImport8(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit13(target, [...references, ...definitions], value);
}
__name(FromImport8, "FromImport");
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
__name(FromInteger5, "FromInteger");
function FromIntersect16(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit13(schema2, references, value2), value);
}
__name(FromIntersect16, "FromIntersect");
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
__name(FromLiteral6, "FromLiteral");
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
__name(FromNull5, "FromNull");
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
__name(FromNumber5, "FromNumber");
function FromObject16(schema, references, value) {
  if (!IsObject2(value))
    return value;
  for (const propertyKey of Object.getOwnPropertyNames(schema.properties)) {
    if (!HasPropertyKey2(value, propertyKey))
      continue;
    value[propertyKey] = Visit13(schema.properties[propertyKey], references, value[propertyKey]);
  }
  return value;
}
__name(FromObject16, "FromObject");
function FromRecord11(schema, references, value) {
  const isConvertable = IsObject2(value);
  if (!isConvertable)
    return value;
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  for (const [propKey, propValue] of Object.entries(value)) {
    value[propKey] = Visit13(property, references, propValue);
  }
  return value;
}
__name(FromRecord11, "FromRecord");
function FromRef13(schema, references, value) {
  return Visit13(Deref2(schema, references), references, value);
}
__name(FromRef13, "FromRef");
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
__name(FromString5, "FromString");
function FromSymbol5(schema, references, value) {
  return IsString2(value) || IsNumber2(value) ? Symbol(value) : value;
}
__name(FromSymbol5, "FromSymbol");
function FromThis9(schema, references, value) {
  return Visit13(Deref2(schema, references), references, value);
}
__name(FromThis9, "FromThis");
function FromTuple13(schema, references, value) {
  const isConvertable = IsArray2(value) && !IsUndefined2(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit13(schema.items[index], references, value2) : value2;
  });
}
__name(FromTuple13, "FromTuple");
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
__name(FromUndefined5, "FromUndefined");
function FromUnion18(schema, references, value) {
  for (const subschema of schema.anyOf) {
    const converted = Visit13(subschema, references, Clone2(value));
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
__name(FromUnion18, "FromUnion");
function Visit13(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray15(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport8(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect16(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject16(schema_, references_, value);
    case "Record":
      return FromRecord11(schema_, references_, value);
    case "Ref":
      return FromRef13(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis9(schema_, references_, value);
    case "Tuple":
      return FromTuple13(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion18(schema_, references_, value);
    default:
      return Default4(value);
  }
}
__name(Visit13, "Visit");
function Convert(...args) {
  return args.length === 3 ? Visit13(args[0], args[1], args[2]) : Visit13(args[0], [], args[1]);
}
__name(Convert, "Convert");

// node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
__name(Decode, "Decode");

// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey2(schema, "default") ? schema.default : void 0;
  const clone = IsFunction2(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined2(value) ? clone : IsObject2(value) && IsObject2(clone) ? Object.assign(clone, value) : value;
}
__name(ValueOrDefault, "ValueOrDefault");
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
__name(HasDefaultProperty, "HasDefaultProperty");
function FromArray16(schema, references, value) {
  if (IsArray2(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = Visit14(schema.items, references, value[i]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted))
    return defaulted;
  for (let i = 0; i < defaulted.length; i++) {
    defaulted[i] = Visit14(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
__name(FromArray16, "FromArray");
function FromDate7(schema, references, value) {
  return IsDate2(value) ? value : ValueOrDefault(schema, value);
}
__name(FromDate7, "FromDate");
function FromImport9(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit14(target, [...references, ...definitions], value);
}
__name(FromImport9, "FromImport");
function FromIntersect17(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next2 = Visit14(schema2, references, defaulted);
    return IsObject2(next2) ? { ...acc, ...next2 } : next2;
  }, {});
}
__name(FromIntersect17, "FromIntersect");
function FromObject17(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit14(schema.properties[key], references, defaulted[key]);
    if (IsUndefined2(propertyValue))
      continue;
    defaulted[key] = Visit14(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit14(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
__name(FromObject17, "FromObject");
function FromRecord12(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit14(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit14(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
__name(FromRecord12, "FromRecord");
function FromRef14(schema, references, value) {
  return Visit14(Deref2(schema, references), references, ValueOrDefault(schema, value));
}
__name(FromRef14, "FromRef");
function FromThis10(schema, references, value) {
  return Visit14(Deref2(schema, references), references, value);
}
__name(FromThis10, "FromThis");
function FromTuple14(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted) || IsUndefined2(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0; i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit14(items[i], references, defaulted[i]);
  }
  return defaulted;
}
__name(FromTuple14, "FromTuple");
function FromUnion19(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit14(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
__name(FromUnion19, "FromUnion");
function Visit14(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray16(schema_, references_, value);
    case "Date":
      return FromDate7(schema_, references_, value);
    case "Import":
      return FromImport9(schema_, references_, value);
    case "Intersect":
      return FromIntersect17(schema_, references_, value);
    case "Object":
      return FromObject17(schema_, references_, value);
    case "Record":
      return FromRecord12(schema_, references_, value);
    case "Ref":
      return FromRef14(schema_, references_, value);
    case "This":
      return FromThis10(schema_, references_, value);
    case "Tuple":
      return FromTuple14(schema_, references_, value);
    case "Union":
      return FromUnion19(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
__name(Visit14, "Visit");
function Default5(...args) {
  return args.length === 3 ? Visit14(args[0], args[1], args[2]) : Visit14(args[0], [], args[1]);
}
__name(Default5, "Default");

// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/pointer/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var pointer_exports = {};
__export(pointer_exports, {
  Delete: () => Delete3,
  Format: () => Format,
  Get: () => Get3,
  Has: () => Has3,
  Set: () => Set4,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  ValuePointerRootSetError: () => ValuePointerRootSetError
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ValuePointerRootSetError = class extends TypeBoxError {
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
};
__name(ValuePointerRootSetError, "ValuePointerRootSetError");
var ValuePointerRootDeleteError = class extends TypeBoxError {
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
};
__name(ValuePointerRootDeleteError, "ValuePointerRootDeleteError");
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
__name(Escape2, "Escape");
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0; i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
__name(Format, "Format");
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next2, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next2[component] === void 0)
      next2[component] = {};
    owner = next2;
    next2 = next2[component];
    key = component;
  }
  owner[key] = update;
}
__name(Set4, "Set");
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next2, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next2[component] === void 0 || next2[component] === null)
      return;
    owner = next2;
    next2 = next2[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
__name(Delete3, "Delete");
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next2, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next2[component] === void 0)
      return false;
    owner = next2;
    next2 = next2[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
__name(Has3, "Has");
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === void 0)
      return void 0;
    current = current[component];
  }
  return current;
}
__name(Get3, "Get");

// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function ObjectType3(left, right) {
  if (!IsObject2(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
__name(ObjectType3, "ObjectType");
function DateType3(left, right) {
  return IsDate2(right) && left.getTime() === right.getTime();
}
__name(DateType3, "DateType");
function ArrayType3(left, right) {
  if (!IsArray2(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
__name(ArrayType3, "ArrayType");
function TypedArrayType(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
__name(TypedArrayType, "TypedArrayType");
function ValueType(left, right) {
  return left === right;
}
__name(ValueType, "ValueType");
function Equal(left, right) {
  if (IsDate2(left))
    return DateType3(left, right);
  if (IsTypedArray(left))
    return TypedArrayType(left, right);
  if (IsArray2(left))
    return ArrayType3(left, right);
  if (IsObject2(left))
    return ObjectType3(left, right);
  if (IsValueType(left))
    return ValueType(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
__name(Equal, "Equal");

// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);
var ValueDiffError = class extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
};
__name(ValueDiffError, "ValueDiffError");
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
__name(CreateUpdate, "CreateUpdate");
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
__name(CreateInsert, "CreateInsert");
function CreateDelete(path) {
  return { type: "delete", path };
}
__name(CreateDelete, "CreateDelete");
function AssertDiffable(value) {
  if (globalThis.Object.getOwnPropertySymbols(value).length > 0)
    throw new ValueDiffError(value, "Cannot diff objects with symbols");
}
__name(AssertDiffable, "AssertDiffable");
function* ObjectType4(path, current, next2) {
  AssertDiffable(current);
  AssertDiffable(next2);
  if (!IsStandardObject(next2))
    return yield CreateUpdate(path, next2);
  const currentKeys = globalThis.Object.getOwnPropertyNames(current);
  const nextKeys = globalThis.Object.getOwnPropertyNames(next2);
  for (const key of nextKeys) {
    if (HasPropertyKey2(current, key))
      continue;
    yield CreateInsert(`${path}/${key}`, next2[key]);
  }
  for (const key of currentKeys) {
    if (!HasPropertyKey2(next2, key))
      continue;
    if (Equal(current, next2))
      continue;
    yield* Visit15(`${path}/${key}`, current[key], next2[key]);
  }
  for (const key of currentKeys) {
    if (HasPropertyKey2(next2, key))
      continue;
    yield CreateDelete(`${path}/${key}`);
  }
}
__name(ObjectType4, "ObjectType");
function* ArrayType4(path, current, next2) {
  if (!IsArray2(next2))
    return yield CreateUpdate(path, next2);
  for (let i = 0; i < Math.min(current.length, next2.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next2[i]);
  }
  for (let i = 0; i < next2.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next2[i]);
  }
  for (let i = current.length - 1; i >= 0; i--) {
    if (i < next2.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
__name(ArrayType4, "ArrayType");
function* TypedArrayType2(path, current, next2) {
  if (!IsTypedArray(next2) || current.length !== next2.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next2).constructor.name)
    return yield CreateUpdate(path, next2);
  for (let i = 0; i < Math.min(current.length, next2.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next2[i]);
  }
}
__name(TypedArrayType2, "TypedArrayType");
function* ValueType2(path, current, next2) {
  if (current === next2)
    return;
  yield CreateUpdate(path, next2);
}
__name(ValueType2, "ValueType");
function* Visit15(path, current, next2) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next2);
  if (IsArray2(current))
    return yield* ArrayType4(path, current, next2);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next2);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next2);
  throw new ValueDiffError(current, "Unable to diff value");
}
__name(Visit15, "Visit");
function Diff(current, next2) {
  return [...Visit15("", current, next2)];
}
__name(Diff, "Diff");
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
__name(IsRootUpdate, "IsRootUpdate");
function IsIdentity(edits) {
  return edits.length === 0;
}
__name(IsIdentity, "IsIdentity");
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "update": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "delete": {
        pointer_exports.Delete(clone, edit.path);
        break;
      }
    }
  }
  return clone;
}
__name(Patch, "Patch");

// node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}
__name(Encode, "Encode");

// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function IsStandardObject2(value) {
  return IsObject2(value) && !IsArray2(value);
}
__name(IsStandardObject2, "IsStandardObject");
var ValueMutateError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
__name(ValueMutateError, "ValueMutateError");
function ObjectType5(root, path, current, next2) {
  if (!IsStandardObject2(current)) {
    pointer_exports.Set(root, path, Clone2(next2));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next2);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit16(root, `${path}/${nextKey}`, current[nextKey], next2[nextKey]);
    }
  }
}
__name(ObjectType5, "ObjectType");
function ArrayType5(root, path, current, next2) {
  if (!IsArray2(current)) {
    pointer_exports.Set(root, path, Clone2(next2));
  } else {
    for (let index = 0; index < next2.length; index++) {
      Visit16(root, `${path}/${index}`, current[index], next2[index]);
    }
    current.splice(next2.length);
  }
}
__name(ArrayType5, "ArrayType");
function TypedArrayType3(root, path, current, next2) {
  if (IsTypedArray(current) && current.length === next2.length) {
    for (let i = 0; i < current.length; i++) {
      current[i] = next2[i];
    }
  } else {
    pointer_exports.Set(root, path, Clone2(next2));
  }
}
__name(TypedArrayType3, "TypedArrayType");
function ValueType3(root, path, current, next2) {
  if (current === next2)
    return;
  pointer_exports.Set(root, path, next2);
}
__name(ValueType3, "ValueType");
function Visit16(root, path, current, next2) {
  if (IsArray2(next2))
    return ArrayType5(root, path, current, next2);
  if (IsTypedArray(next2))
    return TypedArrayType3(root, path, current, next2);
  if (IsStandardObject2(next2))
    return ObjectType5(root, path, current, next2);
  if (IsValueType(next2))
    return ValueType3(root, path, current, next2);
}
__name(Visit16, "Visit");
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
__name(IsNonMutableValue, "IsNonMutableValue");
function IsMismatchedValue(current, next2) {
  return IsStandardObject2(current) && IsArray2(next2) || IsArray2(current) && IsStandardObject2(next2);
}
__name(IsMismatchedValue, "IsMismatchedValue");
function Mutate(current, next2) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next2))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next2))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit16(current, "", current, next2);
}
__name(Mutate, "Mutate");

// node_modules/@sinclair/typebox/build/esm/value/parse/parse.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ParseError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
__name(ParseError, "ParseError");
var ParseRegistry;
(function(ParseRegistry2) {
  const registry = /* @__PURE__ */ new Map([
    ["Clone", (_type, _references, value) => Clone2(value)],
    ["Clean", (type2, references, value) => Clean(type2, references, value)],
    ["Default", (type2, references, value) => Default5(type2, references, value)],
    ["Convert", (type2, references, value) => Convert(type2, references, value)],
    ["Assert", (type2, references, value) => {
      Assert(type2, references, value);
      return value;
    }],
    ["Decode", (type2, references, value) => HasTransform(type2, references) ? TransformDecode(type2, references, value) : value],
    ["Encode", (type2, references, value) => HasTransform(type2, references) ? TransformEncode(type2, references, value) : value]
  ]);
  function Delete5(key) {
    registry.delete(key);
  }
  __name(Delete5, "Delete");
  ParseRegistry2.Delete = Delete5;
  function Set5(key, callback) {
    registry.set(key, callback);
  }
  __name(Set5, "Set");
  ParseRegistry2.Set = Set5;
  function Get4(key) {
    return registry.get(key);
  }
  __name(Get4, "Get");
  ParseRegistry2.Get = Get4;
})(ParseRegistry || (ParseRegistry = {}));
var ParseDefault = [
  "Clone",
  "Clean",
  "Default",
  "Convert",
  "Assert",
  "Decode"
];
function ParseValue(operations, type2, references, value) {
  return operations.reduce((value2, operationKey) => {
    const operation = ParseRegistry.Get(operationKey);
    if (IsUndefined2(operation))
      throw new ParseError(`Unable to find Parse operation '${operationKey}'`);
    return operation(type2, references, value2);
  }, value);
}
__name(ParseValue, "ParseValue");
function Parse(...args) {
  const [operations, schema, references, value] = args.length === 4 ? [args[0], args[1], args[2], args[3]] : args.length === 3 ? IsArray2(args[0]) ? [args[0], args[1], [], args[2]] : [ParseDefault, args[0], args[1], args[2]] : args.length === 2 ? [ParseDefault, args[0], [], args[1]] : (() => {
    throw new ParseError("Invalid Arguments");
  })();
  return ParseValue(operations, schema, references, value);
}
__name(Parse, "Parse");

// node_modules/@sinclair/typebox/build/esm/value/value/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var value_exports2 = {};
__export(value_exports2, {
  Assert: () => Assert,
  Cast: () => Cast,
  Check: () => Check,
  Clean: () => Clean,
  Clone: () => Clone2,
  Convert: () => Convert,
  Create: () => Create2,
  Decode: () => Decode,
  Default: () => Default5,
  Diff: () => Diff,
  Edit: () => Edit,
  Encode: () => Encode,
  Equal: () => Equal,
  Errors: () => Errors,
  Hash: () => Hash,
  Mutate: () => Mutate,
  Parse: () => Parse,
  Patch: () => Patch,
  ValueErrorIterator: () => ValueErrorIterator
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/formats.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var fullFormats = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: getTime(true),
  "date-time": getDateTime(true),
  "iso-time": getTime(false),
  "iso-date-time": getDateTime(false),
  // duration: https://tools.ietf.org/html/rfc3339#appendix-A
  duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
  uri,
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // uri-template: https://tools.ietf.org/html/rfc6570
  "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  // For the source: https://gist.github.com/dperini/729294
  // For test cases: https://mathiasbynens.be/demo/url-regex
  url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
  regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
  "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
  // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
  // byte: https://github.com/miguelmota/is-base64
  byte,
  // signed 32 bit integer
  int32: { type: "number", validate: validateInt32 },
  // signed 64 bit integer
  int64: { type: "number", validate: validateInt64 },
  // C-type float
  float: { type: "number", validate: validateNumber },
  // C-type double
  double: { type: "number", validate: validateNumber },
  // hint to the UI to hide input strings
  password: true,
  // unchecked string payload
  binary: true
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
__name(isLeapYear, "isLeapYear");
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function date(str) {
  const matches = DATE.exec(str);
  if (!matches)
    return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
__name(date, "date");
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function getTime(strictTimeZone) {
  return /* @__PURE__ */ __name(function time3(str) {
    const matches = TIME.exec(str);
    if (!matches)
      return false;
    const hr = +matches[1];
    const min = +matches[2];
    const sec = +matches[3];
    const tz = matches[4];
    const tzSign = matches[5] === "-" ? -1 : 1;
    const tzH = +(matches[6] || 0);
    const tzM = +(matches[7] || 0);
    if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
      return false;
    if (hr <= 23 && min <= 59 && sec < 60)
      return true;
    const utcMin = min - tzM * tzSign;
    const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
  }, "time");
}
__name(getTime, "getTime");
var DATE_TIME_SEPARATOR = /t|\s/i;
function getDateTime(strictTimeZone) {
  const time3 = getTime(strictTimeZone);
  return /* @__PURE__ */ __name(function date_time(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length === 2 && date(dateTime[0]) && time3(dateTime[1]);
  }, "date_time");
}
__name(getDateTime, "getDateTime");
var NOT_URI_FRAGMENT = /\/|:/;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}
__name(uri, "uri");
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function byte(str) {
  BYTE.lastIndex = 0;
  return BYTE.test(str);
}
__name(byte, "byte");
var MIN_INT32 = -(2 ** 31);
var MAX_INT32 = 2 ** 31 - 1;
function validateInt32(value) {
  return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
}
__name(validateInt32, "validateInt32");
function validateInt64(value) {
  return Number.isInteger(value);
}
__name(validateInt64, "validateInt64");
function validateNumber() {
  return true;
}
__name(validateNumber, "validateNumber");
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str))
    return false;
  try {
    new RegExp(str);
    return true;
  } catch (e) {
    return false;
  }
}
__name(regex, "regex");

// node_modules/elysia/dist/error.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var hasHeaderShorthand = "toJSON" in new Headers();
var replaceUrlPath = /* @__PURE__ */ __name((url, pathname) => {
  const urlObject = new URL(url);
  urlObject.pathname = pathname;
  return urlObject.toString();
}, "replaceUrlPath");
var isClass = /* @__PURE__ */ __name((v) => typeof v === "function" && /^\s*class\s+/.test(v.toString()) || // Handle Object.create(null)
v.toString && // Handle import * as Sentry from '@sentry/bun'
// This also handle [object Date], [object Array]
// and FFI value like [object Prisma]
v.toString().startsWith("[object ") && v.toString() !== "[object Object]" || // If object prototype is not pure, then probably a class-like object
isNotEmpty(Object.getPrototypeOf(v)), "isClass");
var isObject = /* @__PURE__ */ __name((item) => item && typeof item === "object" && !Array.isArray(item), "isObject");
var mergeDeep = /* @__PURE__ */ __name((target, source, {
  skipKeys,
  override = true
} = {}) => {
  if (!isObject(target) || !isObject(source))
    return target;
  for (const [key, value] of Object.entries(source)) {
    if (skipKeys?.includes(key))
      continue;
    if (!isObject(value) || !(key in target) || isClass(value)) {
      if (override || !(key in target))
        target[key] = value;
      continue;
    }
    target[key] = mergeDeep(
      target[key],
      value,
      { skipKeys, override }
    );
  }
  return target;
}, "mergeDeep");
var mergeCookie = /* @__PURE__ */ __name((a, b) => {
  const v = mergeDeep(Object.assign({}, a), b, {
    skipKeys: ["properties"]
  });
  if ("properties" in v)
    delete v.properties;
  return v;
}, "mergeCookie");
var mergeObjectArray = /* @__PURE__ */ __name((a = [], b = []) => {
  if (!a)
    return void 0;
  if (!b)
    return a;
  const array = [];
  const checksums = [];
  if (!Array.isArray(a))
    a = [a];
  if (!Array.isArray(b))
    b = [b];
  for (const item of a) {
    array.push(item);
    if (item.checksum)
      checksums.push(item.checksum);
  }
  for (const item of b)
    if (!checksums.includes(item.checksum))
      array.push(item);
  return array;
}, "mergeObjectArray");
var primitiveHooks = [
  "start",
  "request",
  "parse",
  "transform",
  "resolve",
  "beforeHandle",
  "afterHandle",
  "mapResponse",
  "afterResponse",
  "trace",
  "error",
  "stop",
  "body",
  "headers",
  "params",
  "query",
  "response",
  "type",
  "detail"
];
var primitiveHookMap = primitiveHooks.reduce(
  (acc, x) => (acc[x] = true, acc),
  {}
);
var mergeResponse = /* @__PURE__ */ __name((a, b) => {
  const isRecordNumber = /* @__PURE__ */ __name((x) => typeof x === "object" && Object.keys(x).every(isNumericString), "isRecordNumber");
  if (isRecordNumber(a) && isRecordNumber(b))
    return Object.assign(a, b);
  else if (a && !isRecordNumber(a) && isRecordNumber(b))
    return Object.assign({ 200: a }, b);
  return b ?? a;
}, "mergeResponse");
var mergeSchemaValidator = /* @__PURE__ */ __name((a, b) => {
  return {
    body: b?.body ?? a?.body,
    headers: b?.headers ?? a?.headers,
    params: b?.params ?? a?.params,
    query: b?.query ?? a?.query,
    cookie: b?.cookie ?? a?.cookie,
    // @ts-ignore ? This order is correct - SaltyAom
    response: mergeResponse(
      // @ts-ignore
      a?.response,
      // @ts-ignore
      b?.response
    )
  };
}, "mergeSchemaValidator");
var mergeHook = /* @__PURE__ */ __name((a, b) => {
  const { resolve: resolveA, ...restA } = a ?? {};
  const { resolve: resolveB, ...restB } = b ?? {};
  return {
    ...restA,
    ...restB,
    // Merge local hook first
    // @ts-ignore
    body: b?.body ?? a?.body,
    // @ts-ignore
    headers: b?.headers ?? a?.headers,
    // @ts-ignore
    params: b?.params ?? a?.params,
    // @ts-ignore
    query: b?.query ?? a?.query,
    // @ts-ignore
    cookie: b?.cookie ?? a?.cookie,
    // ? This order is correct - SaltyAom
    response: mergeResponse(
      // @ts-ignore
      a?.response,
      // @ts-ignore
      b?.response
    ),
    type: a?.type || b?.type,
    detail: mergeDeep(
      // @ts-ignore
      b?.detail ?? {},
      // @ts-ignore
      a?.detail ?? {}
    ),
    parse: mergeObjectArray(a?.parse, b?.parse),
    transform: mergeObjectArray(a?.transform, b?.transform),
    beforeHandle: mergeObjectArray(
      mergeObjectArray(
        fnToContainer(resolveA, "resolve"),
        a?.beforeHandle
      ),
      mergeObjectArray(
        fnToContainer(resolveB, "resolve"),
        b?.beforeHandle
      )
    ),
    afterHandle: mergeObjectArray(a?.afterHandle, b?.afterHandle),
    mapResponse: mergeObjectArray(a?.mapResponse, b?.mapResponse),
    afterResponse: mergeObjectArray(
      a?.afterResponse,
      b?.afterResponse
    ),
    trace: mergeObjectArray(a?.trace, b?.trace),
    error: mergeObjectArray(a?.error, b?.error)
  };
}, "mergeHook");
var replaceSchemaType = /* @__PURE__ */ __name((schema, options, root = true) => {
  if (!Array.isArray(options))
    return _replaceSchemaType(schema, options, root);
  for (const option of options)
    schema = _replaceSchemaType(schema, option, root);
  return schema;
}, "replaceSchemaType");
var _replaceSchemaType = /* @__PURE__ */ __name((schema, options, root = true) => {
  if (!schema)
    return schema;
  if (options.untilObjectFound && !root && schema.type === "object")
    return schema;
  const fromSymbol = options.from[Kind];
  if (schema.oneOf) {
    for (let i = 0; i < schema.oneOf.length; i++)
      schema.oneOf[i] = _replaceSchemaType(schema.oneOf[i], options, root);
    return schema;
  }
  if (schema.anyOf) {
    for (let i = 0; i < schema.anyOf.length; i++)
      schema.anyOf[i] = _replaceSchemaType(schema.anyOf[i], options, root);
    return schema;
  }
  if (schema.allOf) {
    for (let i = 0; i < schema.allOf.length; i++)
      schema.allOf[i] = _replaceSchemaType(schema.allOf[i], options, root);
    return schema;
  }
  if (schema.not) {
    for (let i = 0; i < schema.not.length; i++)
      schema.not[i] = _replaceSchemaType(schema.not[i], options, root);
    return schema;
  }
  const isRoot = root && !!options.excludeRoot;
  if (schema[Kind] === fromSymbol) {
    const { anyOf, oneOf, allOf, not, properties: properties2, items, ...rest } = schema;
    const to = options.to(rest);
    let transform;
    const composeProperties = /* @__PURE__ */ __name((v) => {
      if (properties2 && v.type === "object") {
        const newProperties = {};
        for (const [key, value2] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(
            value2,
            options,
            false
          );
        return {
          ...rest,
          ...v,
          properties: newProperties
        };
      }
      if (items && v.type === "array")
        return {
          ...rest,
          ...v,
          items: _replaceSchemaType(items, options, false)
        };
      const value = {
        ...rest,
        ...v
      };
      delete value["required"];
      if (properties2 && v.type === "string" && v.format === "ObjectString" && v.default === "{}") {
        transform = t.ObjectString(properties2, rest);
        value.default = JSON.stringify(
          value_exports2.Create(t.Object(properties2))
        );
        value.properties = properties2;
      }
      if (items && v.type === "string" && v.format === "ArrayString" && v.default === "[]") {
        transform = t.ArrayString(items, rest);
        value.default = JSON.stringify(value_exports2.Create(t.Array(items)));
        value.items = items;
      }
      return value;
    }, "composeProperties");
    if (isRoot) {
      if (properties2) {
        const newProperties = {};
        for (const [key, value] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(
            value,
            options,
            false
          );
        return {
          ...rest,
          properties: newProperties
        };
      } else if (items?.map)
        return {
          ...rest,
          items: items.map(
            (v) => _replaceSchemaType(v, options, false)
          )
        };
      return rest;
    }
    if (to.anyOf)
      for (let i = 0; i < to.anyOf.length; i++)
        to.anyOf[i] = composeProperties(to.anyOf[i]);
    else if (to.oneOf)
      for (let i = 0; i < to.oneOf.length; i++)
        to.oneOf[i] = composeProperties(to.oneOf[i]);
    else if (to.allOf)
      for (let i = 0; i < to.allOf.length; i++)
        to.allOf[i] = composeProperties(to.allOf[i]);
    else if (to.not)
      for (let i = 0; i < to.not.length; i++)
        to.not[i] = composeProperties(to.not[i]);
    if (transform)
      to[TransformKind] = transform[TransformKind];
    if (to.anyOf || to.oneOf || to.allOf || to.not)
      return to;
    if (properties2) {
      const newProperties = {};
      for (const [key, value] of Object.entries(properties2))
        newProperties[key] = _replaceSchemaType(
          value,
          options,
          false
        );
      return {
        ...rest,
        ...to,
        properties: newProperties
      };
    } else if (items?.map)
      return {
        ...rest,
        ...to,
        items: items.map(
          (v) => _replaceSchemaType(v, options, false)
        )
      };
    return {
      ...rest,
      ...to
    };
  }
  const properties = schema?.properties;
  if (properties && root && options.rootOnly !== true)
    for (const [key, value] of Object.entries(properties)) {
      switch (value[Kind]) {
        case fromSymbol:
          const { anyOf, oneOf, allOf, not, type: type2, ...rest } = value;
          const to = options.to(rest);
          if (to.anyOf)
            for (let i = 0; i < to.anyOf.length; i++)
              to.anyOf[i] = { ...rest, ...to.anyOf[i] };
          else if (to.oneOf)
            for (let i = 0; i < to.oneOf.length; i++)
              to.oneOf[i] = { ...rest, ...to.oneOf[i] };
          else if (to.allOf)
            for (let i = 0; i < to.allOf.length; i++)
              to.allOf[i] = { ...rest, ...to.allOf[i] };
          else if (to.not)
            for (let i = 0; i < to.not.length; i++)
              to.not[i] = { ...rest, ...to.not[i] };
          properties[key] = {
            ...rest,
            ..._replaceSchemaType(rest, options, false)
          };
          break;
        case "Object":
        case "Union":
          properties[key] = _replaceSchemaType(value, options, false);
          break;
        default:
          if (value.items)
            for (let i = 0; i < value.items.length; i++) {
              value.items[i] = _replaceSchemaType(
                value.items[i],
                options,
                false
              );
            }
          else if (value.anyOf || value.oneOf || value.allOf || value.not)
            properties[key] = _replaceSchemaType(
              value,
              options,
              false
            );
          break;
      }
    }
  return schema;
}, "_replaceSchemaType");
var createCleaner = /* @__PURE__ */ __name((schema) => (value) => {
  if (typeof value === "object")
    try {
      return value_exports2.Clean(schema, structuredClone(value));
    } catch {
      try {
        return value_exports2.Clean(schema, value);
      } catch {
        return value;
      }
    }
  return value;
}, "createCleaner");
var getSchemaValidator = /* @__PURE__ */ __name((s, {
  models = {},
  dynamic = false,
  modules,
  normalize = false,
  additionalProperties = false,
  coerce = false,
  additionalCoerce = []
} = {
  modules: t.Module({})
}) => {
  if (!s)
    return void 0;
  if (typeof s === "string" && !(s in models))
    return void 0;
  let schema = typeof s === "string" ? (
    // @ts-expect-error
    modules.Import(s) ?? models[s]
  ) : s;
  if (coerce || additionalCoerce) {
    if (coerce)
      schema = replaceSchemaType(schema, [
        {
          from: t.Ref(""),
          // @ts-expect-error
          to: (options) => modules.Import(options["$ref"])
        },
        {
          from: t.Number(),
          to: (options) => t.Numeric(options),
          untilObjectFound: true
        },
        {
          from: t.Boolean(),
          to: (options) => t.BooleanString(options),
          untilObjectFound: true
        },
        ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
      ]);
    else {
      schema = replaceSchemaType(schema, [
        {
          from: t.Ref(""),
          // @ts-expect-error
          to: (options) => modules.Import(options["$ref"])
        },
        ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
      ]);
    }
  }
  if (schema.type === "object" && "additionalProperties" in schema === false)
    schema.additionalProperties = additionalProperties;
  if (dynamic) {
    const validator = {
      schema,
      references: "",
      checkFunc: () => {
      },
      code: "",
      Check: (value) => value_exports2.Check(schema, value),
      Errors: (value) => value_exports2.Errors(schema, value),
      Code: () => "",
      Clean: createCleaner(schema),
      Decode: (value) => value_exports2.Decode(schema, value),
      Encode: (value) => value_exports2.Encode(schema, value)
    };
    if (normalize && schema.additionalProperties === false)
      validator.Clean = createCleaner(schema);
    if (schema.config) {
      validator.config = schema.config;
      if (validator?.schema?.config)
        delete validator.schema.config;
    }
    validator.parse = (v) => {
      try {
        return validator.Decode(v);
      } catch (error4) {
        throw [...validator.Errors(v)].map(mapValueError);
      }
    };
    validator.safeParse = (v) => {
      try {
        return { success: true, data: validator.Decode(v), error: null };
      } catch (error4) {
        const errors = [...compiled.Errors(v)].map(mapValueError);
        return {
          success: false,
          data: null,
          error: errors[0]?.summary,
          errors
        };
      }
    };
    return validator;
  }
  const compiled = TypeCompiler.Compile(schema, Object.values(models));
  compiled.Clean = createCleaner(schema);
  if (schema.config) {
    compiled.config = schema.config;
    if (compiled?.schema?.config)
      delete compiled.schema.config;
  }
  compiled.parse = (v) => {
    try {
      return compiled.Decode(v);
    } catch (error4) {
      throw [...compiled.Errors(v)].map(mapValueError);
    }
  };
  compiled.safeParse = (v) => {
    try {
      return { success: true, data: compiled.Decode(v), error: null };
    } catch (error4) {
      const errors = [...compiled.Errors(v)].map(mapValueError);
      return {
        success: false,
        data: null,
        error: errors[0]?.summary,
        errors
      };
    }
  };
  return compiled;
}, "getSchemaValidator");
var getResponseSchemaValidator = /* @__PURE__ */ __name((s, {
  models = {},
  modules,
  dynamic = false,
  normalize = false,
  additionalProperties = false
}) => {
  if (!s)
    return;
  if (typeof s === "string" && !(s in models))
    return;
  const maybeSchemaOrRecord = typeof s === "string" ? (
    // @ts-ignore
    modules.Import(s) ?? models[s]
  ) : s;
  const compile = /* @__PURE__ */ __name((schema, references) => {
    if (dynamic)
      return {
        schema,
        references: "",
        checkFunc: () => {
        },
        code: "",
        Check: (value) => value_exports2.Check(schema, value),
        Errors: (value) => value_exports2.Errors(schema, value),
        Code: () => "",
        Clean: createCleaner(schema),
        Decode: (value) => value_exports2.Decode(schema, value),
        Encode: (value) => value_exports2.Encode(schema, value)
      };
    const compiledValidator = TypeCompiler.Compile(schema, references);
    if (normalize && schema.additionalProperties === false)
      compiledValidator.Clean = createCleaner(schema);
    return compiledValidator;
  }, "compile");
  if (Kind in maybeSchemaOrRecord) {
    if ("additionalProperties" in maybeSchemaOrRecord === false)
      maybeSchemaOrRecord.additionalProperties = additionalProperties;
    return {
      200: compile(maybeSchemaOrRecord, Object.values(models))
    };
  }
  const record = {};
  Object.keys(maybeSchemaOrRecord).forEach((status) => {
    const maybeNameOrSchema = maybeSchemaOrRecord[+status];
    if (typeof maybeNameOrSchema === "string") {
      if (maybeNameOrSchema in models) {
        const schema = models[maybeNameOrSchema];
        schema.type === "object" && "additionalProperties" in schema === false;
        record[+status] = Kind in schema ? compile(schema, Object.values(models)) : schema;
      }
      return void 0;
    }
    if (maybeNameOrSchema.type === "object" && "additionalProperties" in maybeNameOrSchema === false)
      maybeNameOrSchema.additionalProperties = additionalProperties;
    record[+status] = Kind in maybeNameOrSchema ? compile(maybeNameOrSchema, Object.values(models)) : maybeNameOrSchema;
  });
  return record;
}, "getResponseSchemaValidator");
var isBun = typeof Bun !== "undefined";
var hasHash = isBun && typeof Bun.hash === "function";
var checksum = /* @__PURE__ */ __name((s) => {
  if (hasHash)
    return Bun.hash(s);
  let h = 9;
  for (let i = 0; i < s.length; )
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return h = h ^ h >>> 9;
}, "checksum");
var _stringToStructureCoercions;
var stringToStructureCoercions = /* @__PURE__ */ __name(() => {
  if (!_stringToStructureCoercions) {
    _stringToStructureCoercions = [
      {
        from: t.Object({}),
        to: () => t.ObjectString({}),
        excludeRoot: true
      },
      {
        from: t.Array(t.Any()),
        to: () => t.ArrayString(t.Any())
      }
    ];
  }
  return _stringToStructureCoercions;
}, "stringToStructureCoercions");
var _coercePrimitiveRoot;
var coercePrimitiveRoot = /* @__PURE__ */ __name(() => {
  if (!_coercePrimitiveRoot)
    _coercePrimitiveRoot = [
      {
        from: t.Number(),
        to: (options) => t.Numeric(options),
        rootOnly: true
      },
      {
        from: t.Boolean(),
        to: (options) => t.BooleanString(options),
        rootOnly: true
      }
    ];
  return _coercePrimitiveRoot;
}, "coercePrimitiveRoot");
var getCookieValidator = /* @__PURE__ */ __name(({
  validator,
  modules,
  defaultConfig = {},
  config: config2,
  dynamic,
  models
}) => {
  let cookieValidator = getSchemaValidator(validator, {
    modules,
    dynamic,
    models,
    additionalProperties: true,
    coerce: true,
    additionalCoerce: stringToStructureCoercions()
  });
  if (isNotEmpty(defaultConfig)) {
    if (cookieValidator) {
      cookieValidator.config = mergeCookie(
        // @ts-expect-error private
        cookieValidator.config,
        config2
      );
    } else {
      cookieValidator = getSchemaValidator(t.Cookie({}), {
        modules,
        dynamic,
        models,
        additionalProperties: true
      });
      cookieValidator.config = defaultConfig;
    }
  }
  return cookieValidator;
}, "getCookieValidator");
var injectChecksum = /* @__PURE__ */ __name((checksum2, x) => {
  if (!x)
    return;
  if (!Array.isArray(x)) {
    const fn2 = x;
    if (checksum2 && !fn2.checksum)
      fn2.checksum = checksum2;
    if (fn2.scope === "scoped")
      fn2.scope = "local";
    return fn2;
  }
  const fns = [...x];
  for (const fn2 of fns) {
    if (checksum2 && !fn2.checksum)
      fn2.checksum = checksum2;
    if (fn2.scope === "scoped")
      fn2.scope = "local";
  }
  return fns;
}, "injectChecksum");
var mergeLifeCycle = /* @__PURE__ */ __name((a, b, checksum2) => {
  return {
    start: mergeObjectArray(
      a.start,
      injectChecksum(checksum2, b?.start)
    ),
    request: mergeObjectArray(
      a.request,
      injectChecksum(checksum2, b?.request)
    ),
    parse: mergeObjectArray(
      a.parse,
      injectChecksum(checksum2, b?.parse)
    ),
    transform: mergeObjectArray(
      a.transform,
      injectChecksum(checksum2, b?.transform)
    ),
    beforeHandle: mergeObjectArray(
      mergeObjectArray(
        // @ts-ignore
        fnToContainer(a.resolve, "resolve"),
        a.beforeHandle
      ),
      injectChecksum(
        checksum2,
        mergeObjectArray(
          fnToContainer(b?.resolve, "resolve"),
          b?.beforeHandle
        )
      )
    ),
    afterHandle: mergeObjectArray(
      a.afterHandle,
      injectChecksum(checksum2, b?.afterHandle)
    ),
    mapResponse: mergeObjectArray(
      a.mapResponse,
      injectChecksum(checksum2, b?.mapResponse)
    ),
    afterResponse: mergeObjectArray(
      a.afterResponse,
      injectChecksum(checksum2, b?.afterResponse)
    ),
    // Already merged on Elysia._use, also logic is more complicated, can't directly merge
    trace: mergeObjectArray(
      a.trace,
      injectChecksum(checksum2, b?.trace)
    ),
    error: mergeObjectArray(
      a.error,
      injectChecksum(checksum2, b?.error)
    ),
    stop: mergeObjectArray(
      a.stop,
      injectChecksum(checksum2, b?.stop)
    )
  };
}, "mergeLifeCycle");
var asHookType = /* @__PURE__ */ __name((fn2, inject, { skipIfHasType = false } = {}) => {
  if (!fn2)
    return fn2;
  if (!Array.isArray(fn2)) {
    if (skipIfHasType)
      fn2.scope ??= inject;
    else
      fn2.scope = inject;
    return fn2;
  }
  for (const x of fn2)
    if (skipIfHasType)
      x.scope ??= inject;
    else
      x.scope = inject;
  return fn2;
}, "asHookType");
var filterGlobal = /* @__PURE__ */ __name((fn2) => {
  if (!fn2)
    return fn2;
  if (!Array.isArray(fn2))
    switch (fn2.scope) {
      case "global":
      case "scoped":
        return { ...fn2 };
      default:
        return { fn: fn2 };
    }
  const array = [];
  for (const x of fn2)
    switch (x.scope) {
      case "global":
      case "scoped":
        array.push({
          ...x
        });
        break;
    }
  return array;
}, "filterGlobal");
var filterGlobalHook = /* @__PURE__ */ __name((hook) => {
  return {
    // rest is validator
    ...hook,
    type: hook?.type,
    detail: hook?.detail,
    parse: filterGlobal(hook?.parse),
    transform: filterGlobal(hook?.transform),
    beforeHandle: filterGlobal(hook?.beforeHandle),
    afterHandle: filterGlobal(hook?.afterHandle),
    mapResponse: filterGlobal(hook?.mapResponse),
    afterResponse: filterGlobal(hook?.afterResponse),
    error: filterGlobal(hook?.error),
    trace: filterGlobal(hook?.trace)
  };
}, "filterGlobalHook");
var StatusMap = {
  Continue: 100,
  "Switching Protocols": 101,
  Processing: 102,
  "Early Hints": 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  Found: 302,
  "See Other": 303,
  "Not Modified": 304,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  Unauthorized: 401,
  "Payment Required": 402,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  Conflict: 409,
  Gone: 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a teapot": 418,
  "Misdirected Request": 421,
  "Unprocessable Content": 422,
  Locked: 423,
  "Failed Dependency": 424,
  "Too Early": 425,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Unavailable For Legal Reasons": 451,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Not Extended": 510,
  "Network Authentication Required": 511
};
var InvertedStatusMap = Object.fromEntries(
  Object.entries(StatusMap).map(([k, v]) => [v, k])
);
function removeTrailingEquals(digest) {
  let trimmedDigest = digest;
  while (trimmedDigest.endsWith("=")) {
    trimmedDigest = trimmedDigest.slice(0, -1);
  }
  return trimmedDigest;
}
__name(removeTrailingEquals, "removeTrailingEquals");
var encoder = new TextEncoder();
var signCookie = /* @__PURE__ */ __name(async (val, secret) => {
  if (typeof val !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (secret === null)
    throw new TypeError("Secret key must be provided.");
  const secretKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const hmacBuffer = await crypto.subtle.sign(
    "HMAC",
    secretKey,
    encoder.encode(val)
  );
  return val + "." + removeTrailingEquals(Buffer.from(hmacBuffer).toString("base64"));
}, "signCookie");
var unsignCookie = /* @__PURE__ */ __name(async (input, secret) => {
  if (typeof input !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (null === secret)
    throw new TypeError("Secret key must be provided.");
  const tentativeValue = input.slice(0, input.lastIndexOf("."));
  const expectedInput = await signCookie(tentativeValue, secret);
  return expectedInput === input ? tentativeValue : false;
}, "unsignCookie");
var traceBackMacro = /* @__PURE__ */ __name((extension, property, manage) => {
  if (!extension || typeof extension !== "object" || !property)
    return;
  for (const [key, value] of Object.entries(property)) {
    if (key in primitiveHookMap || !(key in extension))
      continue;
    const v = extension[key];
    if (typeof v === "function") {
      const hook = v(value);
      if (typeof hook === "object") {
        for (const [k, v2] of Object.entries(hook)) {
          manage(k)({
            fn: v2
          });
        }
      }
    }
    delete property[key];
  }
}, "traceBackMacro");
var createMacroManager = /* @__PURE__ */ __name(({
  globalHook,
  localHook
}) => (stackName) => (type2, fn2) => {
  if (typeof type2 === "function")
    type2 = {
      fn: type2
    };
  if (stackName === "resolve") {
    type2 = {
      ...type2,
      subType: "resolve"
    };
  }
  if ("fn" in type2 || Array.isArray(type2)) {
    if (!localHook[stackName])
      localHook[stackName] = [];
    if (typeof localHook[stackName] === "function")
      localHook[stackName] = [localHook[stackName]];
    if (Array.isArray(type2))
      localHook[stackName] = localHook[stackName].concat(type2);
    else
      localHook[stackName].push(type2);
    return;
  }
  const { insert = "after", stack = "local" } = type2;
  if (typeof fn2 === "function")
    fn2 = { fn: fn2 };
  if (stack === "global") {
    if (!Array.isArray(fn2)) {
      if (insert === "before") {
        ;
        globalHook[stackName].unshift(fn2);
      } else {
        ;
        globalHook[stackName].push(fn2);
      }
    } else {
      if (insert === "before") {
        globalHook[stackName] = fn2.concat(
          globalHook[stackName]
        );
      } else {
        globalHook[stackName] = globalHook[stackName].concat(fn2);
      }
    }
  } else {
    if (!localHook[stackName])
      localHook[stackName] = [];
    if (typeof localHook[stackName] === "function")
      localHook[stackName] = [localHook[stackName]];
    if (!Array.isArray(fn2)) {
      if (insert === "before") {
        ;
        localHook[stackName].unshift(fn2);
      } else {
        ;
        localHook[stackName].push(fn2);
      }
    } else {
      if (insert === "before") {
        localHook[stackName] = fn2.concat(localHook[stackName]);
      } else {
        localHook[stackName] = localHook[stackName].concat(fn2);
      }
    }
  }
}, "createMacroManager");
var parseNumericString = /* @__PURE__ */ __name((message) => {
  if (typeof message === "number")
    return message;
  if (message.length < 16) {
    if (message.trim().length === 0)
      return null;
    const length = Number(message);
    if (Number.isNaN(length))
      return null;
    return length;
  }
  if (message.length === 16) {
    if (message.trim().length === 0)
      return null;
    const number = Number(message);
    if (Number.isNaN(number) || number.toString() !== message)
      return null;
    return number;
  }
  return null;
}, "parseNumericString");
var isNumericString = /* @__PURE__ */ __name((message) => parseNumericString(message) !== null, "isNumericString");
var PromiseGroup = class {
  constructor(onError = console.error) {
    this.onError = onError;
    this.root = null;
    this.promises = [];
  }
  /**
   * The number of promises still being awaited.
   */
  get size() {
    return this.promises.length;
  }
  /**
   * Add a promise to the group.
   * @returns The promise that was added.
   */
  add(promise) {
    this.promises.push(promise);
    this.root ||= this.drain();
    return promise;
  }
  async drain() {
    while (this.promises.length > 0) {
      try {
        await this.promises[0];
      } catch (error4) {
        this.onError(error4);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  // Allow the group to be awaited.
  then(onfulfilled, onrejected) {
    return (this.root ?? Promise.resolve()).then(onfulfilled, onrejected);
  }
};
__name(PromiseGroup, "PromiseGroup");
var fnToContainer = /* @__PURE__ */ __name((fn2, subType) => {
  if (!fn2)
    return fn2;
  if (!Array.isArray(fn2)) {
    if (typeof fn2 === "function" || typeof fn2 === "string")
      return subType ? { fn: fn2, subType } : { fn: fn2 };
    else if ("fn" in fn2)
      return fn2;
  }
  const fns = [];
  for (const x of fn2) {
    if (typeof x === "function" || typeof x === "string")
      fns.push(subType ? { fn: x, subType } : { fn: x });
    else if ("fn" in x)
      fns.push(x);
  }
  return fns;
}, "fnToContainer");
var localHookToLifeCycleStore = /* @__PURE__ */ __name((a) => {
  return {
    ...a,
    start: fnToContainer(a?.start),
    request: fnToContainer(a?.request),
    parse: fnToContainer(a?.parse),
    transform: fnToContainer(a?.transform),
    beforeHandle: fnToContainer(a?.beforeHandle),
    afterHandle: fnToContainer(a?.afterHandle),
    mapResponse: fnToContainer(a?.mapResponse),
    afterResponse: fnToContainer(a?.afterResponse),
    trace: fnToContainer(a?.trace),
    error: fnToContainer(a?.error),
    stop: fnToContainer(a?.stop)
  };
}, "localHookToLifeCycleStore");
var lifeCycleToFn = /* @__PURE__ */ __name((a) => {
  const hook = {};
  if (a.start?.map)
    hook.start = a.start.map((x) => x.fn);
  if (a.request?.map)
    hook.request = a.request.map((x) => x.fn);
  if (a.parse?.map)
    hook.parse = a.parse.map((x) => x.fn);
  if (a.transform?.map)
    hook.transform = a.transform.map((x) => x.fn);
  if (a.beforeHandle?.map)
    hook.beforeHandle = a.beforeHandle.map((x) => x.fn);
  if (a.afterHandle?.map)
    hook.afterHandle = a.afterHandle.map((x) => x.fn);
  if (a.mapResponse?.map)
    hook.mapResponse = a.mapResponse.map((x) => x.fn);
  if (a.afterResponse?.map)
    hook.afterResponse = a.afterResponse.map((x) => x.fn);
  if (a.trace?.map)
    hook.trace = a.trace.map((x) => x.fn);
  if (a.error?.map)
    hook.error = a.error.map((x) => x.fn);
  if (a.stop?.map)
    hook.stop = a.stop.map((x) => x.fn);
  return hook;
}, "lifeCycleToFn");
var cloneInference = /* @__PURE__ */ __name((inference) => ({
  body: inference.body,
  cookie: inference.cookie,
  headers: inference.headers,
  query: inference.query,
  set: inference.set,
  server: inference.server,
  request: inference.request,
  route: inference.route
}), "cloneInference");
var redirect = /* @__PURE__ */ __name((url, status = 302) => Response.redirect(url, status), "redirect");
var ELYSIA_FORM_DATA = Symbol("ElysiaFormData");
var ELYSIA_REQUEST_ID = Symbol("ElysiaRequestId");
var randomId = /* @__PURE__ */ __name(() => {
  const uuid = crypto.randomUUID();
  return uuid.slice(0, 8) + uuid.slice(24, 32);
}, "randomId");
var deduplicateChecksum = /* @__PURE__ */ __name((array) => {
  const hashes = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item.checksum) {
      if (hashes.includes(item.checksum)) {
        array.splice(i, 1);
        i--;
      }
      hashes.push(item.checksum);
    }
  }
  return array;
}, "deduplicateChecksum");
var promoteEvent = /* @__PURE__ */ __name((events, as = "scoped") => {
  if (!events)
    return;
  if (as === "scoped") {
    for (const event of events)
      if ("scope" in event && event.scope === "local")
        event.scope = "scoped";
    return;
  }
  for (const event of events)
    if ("scope" in event)
      event.scope = "global";
}, "promoteEvent");
var getLoosePath = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) === 47)
    return path.slice(0, path.length - 1);
  return path + "/";
}, "getLoosePath");
var isNotEmpty = /* @__PURE__ */ __name((obj) => {
  if (!obj)
    return false;
  for (const x in obj)
    return true;
  return false;
}, "isNotEmpty");
var isEmptyHookProperty = /* @__PURE__ */ __name((prop) => {
  if (Array.isArray(prop))
    return prop.length === 0;
  return !prop;
}, "isEmptyHookProperty");
var compressHistoryHook = /* @__PURE__ */ __name((hook) => {
  const history = { ...hook };
  if (isEmptyHookProperty(hook.afterHandle))
    delete history.afterHandle;
  if (isEmptyHookProperty(hook.afterResponse))
    delete history.afterResponse;
  if (isEmptyHookProperty(hook.beforeHandle))
    delete history.beforeHandle;
  if (isEmptyHookProperty(hook.error))
    delete history.error;
  if (isEmptyHookProperty(hook.mapResponse))
    delete history.mapResponse;
  if (isEmptyHookProperty(hook.parse))
    delete history.parse;
  if (isEmptyHookProperty(hook.request))
    delete history.request;
  if (isEmptyHookProperty(hook.start))
    delete history.start;
  if (isEmptyHookProperty(hook.stop))
    delete history.stop;
  if (isEmptyHookProperty(hook.trace))
    delete history.trace;
  if (isEmptyHookProperty(hook.transform))
    delete history.transform;
  if (!history.type)
    delete history.type;
  if (history.detail && !Object.keys(history.detail).length)
    delete history.detail;
  if (!history.body)
    delete history.body;
  if (!history.cookie)
    delete history.cookie;
  if (!history.headers)
    delete history.headers;
  if (!history.query)
    delete history.query;
  if (!history.params)
    delete history.params;
  if (!history.response)
    delete history.response;
  return history;
}, "compressHistoryHook");

// node_modules/elysia/dist/error.mjs
var env3 = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : void 0;
var ERROR_CODE = Symbol("ElysiaErrorCode");
var isProduction = (env3?.NODE_ENV ?? env3?.ENV) === "production";
var ElysiaCustomStatusResponse = class {
  constructor(code, response) {
    const res = response ?? (code in InvertedStatusMap ? (
      // @ts-expect-error Always correct
      InvertedStatusMap[code]
    ) : code);
    this.code = StatusMap[code] ?? code;
    this.response = res;
  }
};
__name(ElysiaCustomStatusResponse, "ElysiaCustomStatusResponse");
var error3 = /* @__PURE__ */ __name((code, response) => new ElysiaCustomStatusResponse(code, response), "error");
var InternalServerError = class extends Error {
  constructor(message) {
    super(message ?? "INTERNAL_SERVER_ERROR");
    this.code = "INTERNAL_SERVER_ERROR";
    this.status = 500;
  }
};
__name(InternalServerError, "InternalServerError");
var NotFoundError = class extends Error {
  constructor(message) {
    super(message ?? "NOT_FOUND");
    this.code = "NOT_FOUND";
    this.status = 404;
  }
};
__name(NotFoundError, "NotFoundError");
var ParseError2 = class extends Error {
  constructor() {
    super("Bad Request");
    this.code = "PARSE";
    this.status = 400;
  }
};
__name(ParseError2, "ParseError");
var InvalidCookieSignature = class extends Error {
  constructor(key, message) {
    super(message ?? `"${key}" has invalid cookie signature`);
    this.key = key;
    this.code = "INVALID_COOKIE_SIGNATURE";
    this.status = 400;
  }
};
__name(InvalidCookieSignature, "InvalidCookieSignature");
var mapValueError = /* @__PURE__ */ __name((error22) => {
  if (!error22)
    return {
      summary: void 0
    };
  const { message, path, value, type: type2 } = error22;
  const property = path.slice(1).replaceAll("/", ".");
  const isRoot = path === "";
  switch (type2) {
    case 42:
      return {
        ...error22,
        summary: isRoot ? `Value should not be provided` : `Property '${property}' should not be provided`
      };
    case 45:
      return {
        ...error22,
        summary: isRoot ? `Value is missing` : `Property '${property}' is missing`
      };
    case 50:
      const quoteIndex = message.indexOf("'");
      const format = message.slice(
        quoteIndex + 1,
        message.indexOf("'", quoteIndex + 1)
      );
      return {
        ...error22,
        summary: isRoot ? `Value should be an email` : `Property '${property}' should be ${format}`
      };
    case 54:
      return {
        ...error22,
        summary: `${message.slice(
          0,
          9
        )} property '${property}' to be ${message.slice(
          8
        )} but found: ${value}`
      };
    case 62:
      const union = error22.schema.anyOf.map((x) => `'${x?.format ?? x.type}'`).join(", ");
      return {
        ...error22,
        summary: isRoot ? `Value should be one of ${union}` : `Property '${property}' should be one of: ${union}`
      };
    default:
      return { summary: message, ...error22 };
  }
}, "mapValueError");
var ValidationError = class extends Error {
  constructor(type2, validator, value) {
    if (value && typeof value === "object" && value instanceof ElysiaCustomStatusResponse)
      value = value.response;
    const error22 = isProduction ? void 0 : "Errors" in validator ? validator.Errors(value).First() : value_exports2.Errors(validator, value).First();
    const customError = error22?.schema?.message || error22?.schema?.error !== void 0 ? typeof error22.schema.error === "function" ? error22.schema.error({
      type: type2,
      validator,
      value,
      get errors() {
        return [...validator.Errors(value)].map(
          mapValueError
        );
      }
    }) : error22.schema.error : void 0;
    const accessor = error22?.path || "root";
    let message = "";
    if (customError !== void 0) {
      message = typeof customError === "object" ? JSON.stringify(customError) : customError + "";
    } else if (isProduction) {
      message = JSON.stringify({
        type: "validation",
        on: type2,
        summary: mapValueError(error22).summary,
        message: error22?.message,
        found: value
      });
    } else {
      const schema = validator?.schema ?? validator;
      const errors = "Errors" in validator ? [...validator.Errors(value)].map(mapValueError) : [...value_exports2.Errors(validator, value)].map(mapValueError);
      let expected;
      try {
        expected = value_exports2.Create(schema);
      } catch (error32) {
        expected = {
          type: "Could not create expected value",
          // @ts-expect-error
          message: error32?.message,
          error: error32
        };
      }
      message = JSON.stringify(
        {
          type: "validation",
          on: type2,
          summary: mapValueError(error22).summary,
          property: accessor,
          message: error22?.message,
          expected,
          found: value,
          errors
        },
        null,
        2
      );
    }
    super(message);
    this.type = type2;
    this.validator = validator;
    this.value = value;
    this.code = "VALIDATION";
    this.status = 422;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
  get all() {
    return "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(mapValueError) : (
      // @ts-ignore
      [...value_exports2.Errors(this.validator, this.value)].map(mapValueError)
    );
  }
  static simplifyModel(validator) {
    const model = "schema" in validator ? validator.schema : validator;
    try {
      return value_exports2.Create(model);
    } catch {
      return model;
    }
  }
  get model() {
    return ValidationError.simplifyModel(this.validator);
  }
  toResponse(headers) {
    return new Response(this.message, {
      status: 400,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
};
__name(ValidationError, "ValidationError");

// node_modules/elysia/dist/type-system.mjs
var isISO8601 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var isFormalDate = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var isShortenDate = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var _validateDate = fullFormats.date;
var _validateDateTime = fullFormats["date-time"];
if (!format_exports.Has("date"))
  TypeSystem.Format("date", (value) => {
    const temp = value.replace(/"/g, "");
    if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDate(temp)) {
      const date2 = new Date(temp);
      if (!Number.isNaN(date2.getTime()))
        return true;
    }
    return false;
  });
if (!format_exports.Has("date-time"))
  TypeSystem.Format("date-time", (value) => {
    const temp = value.replace(/"/g, "");
    if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDateTime(temp)) {
      const date2 = new Date(temp);
      if (!Number.isNaN(date2.getTime()))
        return true;
    }
    return false;
  });
Object.entries(fullFormats).forEach((formatEntry) => {
  const [formatName, formatValue] = formatEntry;
  if (!format_exports.Has(formatName)) {
    if (formatValue instanceof RegExp)
      TypeSystem.Format(formatName, (value) => formatValue.test(value));
    else if (typeof formatValue === "function")
      TypeSystem.Format(formatName, formatValue);
  }
});
var t = Object.assign({}, Type);
var parseFileUnit = /* @__PURE__ */ __name((size) => {
  if (typeof size === "string")
    switch (size.slice(-1)) {
      case "k":
        return +size.slice(0, size.length - 1) * 1024;
      case "m":
        return +size.slice(0, size.length - 1) * 1048576;
      default:
        return +size;
    }
  return size;
}, "parseFileUnit");
var validateFile = /* @__PURE__ */ __name((options, value) => {
  if (!(value instanceof Blob))
    return false;
  if (options.minSize && value.size < parseFileUnit(options.minSize))
    return false;
  if (options.maxSize && value.size > parseFileUnit(options.maxSize))
    return false;
  if (options.extension)
    if (typeof options.extension === "string") {
      if (!value.type.startsWith(options.extension))
        return false;
    } else {
      for (let i = 0; i < options.extension.length; i++)
        if (value.type.startsWith(options.extension[i]))
          return true;
      return false;
    }
  return true;
}, "validateFile");
var File2 = type_exports2.Get("Files") ?? TypeSystem.Type("File", validateFile);
var Files = type_exports2.Get("Files") ?? TypeSystem.Type(
  "Files",
  (options, value) => {
    if (!Array.isArray(value))
      return validateFile(options, value);
    if (options.minItems && value.length < options.minItems)
      return false;
    if (options.maxItems && value.length > options.maxItems)
      return false;
    for (let i = 0; i < value.length; i++)
      if (!validateFile(options, value[i]))
        return false;
    return true;
  }
);
if (!format_exports.Has("numeric"))
  format_exports.Set("numeric", (value) => !!value && !isNaN(+value));
if (!format_exports.Has("integer"))
  format_exports.Set(
    "integer",
    (value) => !!value && Number.isInteger(+value)
  );
if (!format_exports.Has("boolean"))
  format_exports.Set(
    "boolean",
    (value) => value === "true" || value === "false"
  );
if (!format_exports.Has("ObjectString"))
  format_exports.Set("ObjectString", (value) => {
    let start = value.charCodeAt(0);
    if (start === 9 || start === 10 || start === 32)
      start = value.trimStart().charCodeAt(0);
    if (start !== 123 && start !== 91)
      return false;
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  });
if (!format_exports.Has("ArrayString"))
  format_exports.Set("ArrayString", (value) => {
    let start = value.charCodeAt(0);
    if (start === 9 || start === 10 || start === 32)
      start = value.trimStart().charCodeAt(0);
    if (start !== 123 && start !== 91)
      return false;
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  });
type_exports2.Set("UnionEnum", (schema, value) => {
  return (typeof value === "number" || typeof value === "string" || value === null) && schema.enum.includes(value);
});
var ElysiaType = {
  Numeric: (property) => {
    const schema = Type.Number(property);
    return t.Transform(
      t.Union(
        [
          t.String({
            format: "numeric",
            default: 0
          }),
          t.Number(property)
        ],
        property
      )
    ).Decode((value) => {
      const number = +value;
      if (isNaN(number))
        return value;
      if (property && !value_exports2.Check(schema, number))
        throw new ValidationError("property", schema, number);
      return number;
    }).Encode((value) => value);
  },
  Integer: (property) => {
    const schema = Type.Integer(property);
    return t.Transform(
      t.Union(
        [
          t.String({
            format: "integer",
            default: 0
          }),
          t.Number(property)
        ],
        property
      )
    ).Decode((value) => {
      const number = +value;
      if (!value_exports2.Check(schema, number))
        throw new ValidationError("property", schema, number);
      return number;
    }).Encode((value) => value);
  },
  Date: (property) => {
    const schema = Type.Date(property);
    return t.Transform(
      t.Union(
        [
          Type.Date(property),
          t.String({
            format: "date",
            default: (/* @__PURE__ */ new Date()).toISOString()
          }),
          t.String({
            format: "date-time",
            default: (/* @__PURE__ */ new Date()).toISOString()
          }),
          t.Number()
        ],
        property
      )
    ).Decode((value) => {
      if (typeof value === "number") {
        const date22 = new Date(value);
        if (!value_exports2.Check(schema, date22))
          throw new ValidationError("property", schema, date22);
        return date22;
      }
      if (value instanceof Date)
        return value;
      const date2 = new Date(value);
      if (!value_exports2.Check(schema, date2))
        throw new ValidationError("property", schema, date2);
      return date2;
    }).Encode((value) => {
      if (typeof value === "string")
        return new Date(value);
      return value;
    });
  },
  BooleanString: (property) => {
    const schema = Type.Boolean(property);
    return t.Transform(
      t.Union(
        [
          t.Boolean(property),
          t.String({
            format: "boolean",
            default: false
          })
        ],
        property
      )
    ).Decode((value) => {
      if (typeof value === "string")
        return value === "true";
      if (value !== void 0 && !value_exports2.Check(schema, value))
        throw new ValidationError("property", schema, value);
      return value;
    }).Encode((value) => value);
  },
  ObjectString: (properties, options) => {
    const schema = t.Object(properties, options);
    const defaultValue = JSON.stringify(value_exports2.Create(schema));
    let compiler;
    try {
      compiler = TypeCompiler.Compile(schema);
    } catch {
    }
    return t.Transform(
      t.Union([
        t.String({
          format: "ObjectString",
          default: defaultValue
        }),
        schema
      ])
    ).Decode((value) => {
      if (typeof value === "string") {
        if (value.charCodeAt(0) !== 123)
          throw new ValidationError("property", schema, value);
        try {
          value = JSON.parse(value);
        } catch {
          throw new ValidationError("property", schema, value);
        }
        if (compiler) {
          if (!compiler.Check(value))
            throw new ValidationError("property", schema, value);
          return compiler.Decode(value);
        }
        if (!value_exports2.Check(schema, value))
          throw new ValidationError("property", schema, value);
        return value_exports2.Decode(schema, value);
      }
      return value;
    }).Encode((value) => {
      if (typeof value === "string")
        try {
          value = JSON.parse(value);
        } catch {
          throw new ValidationError("property", schema, value);
        }
      if (!value_exports2.Check(schema, value))
        throw new ValidationError("property", schema, value);
      return JSON.stringify(value);
    });
  },
  ArrayString: (children = {}, options) => {
    const schema = t.Array(children, options);
    const defaultValue = JSON.stringify(value_exports2.Create(schema));
    let compiler;
    try {
      compiler = TypeCompiler.Compile(schema);
    } catch {
    }
    return t.Transform(
      t.Union([
        t.String({
          format: "ArrayString",
          default: defaultValue
        }),
        schema
      ])
    ).Decode((value) => {
      if (typeof value === "string") {
        if (value.charCodeAt(0) !== 91)
          throw new ValidationError("property", schema, value);
        try {
          value = JSON.parse(value);
        } catch {
          throw new ValidationError("property", schema, value);
        }
        if (compiler) {
          if (!compiler.Check(value))
            throw new ValidationError("property", schema, value);
          return compiler.Decode(value);
        }
        if (!value_exports2.Check(schema, value))
          throw new ValidationError("property", schema, value);
        return value_exports2.Decode(schema, value);
      }
      return value;
    }).Encode((value) => {
      if (typeof value === "string")
        try {
          value = JSON.parse(value);
        } catch {
          throw new ValidationError("property", schema, value);
        }
      if (!value_exports2.Check(schema, value))
        throw new ValidationError("property", schema, value);
      return JSON.stringify(value);
    });
  },
  File: File2,
  Files: (options = {}) => t.Transform(Files(options)).Decode((value) => {
    if (Array.isArray(value))
      return value;
    return [value];
  }).Encode((value) => value),
  Nullable: (schema, options) => t.Union([schema, t.Null()], options),
  /**
   * Allow Optional, Nullable and Undefined
   */
  MaybeEmpty: (schema, options) => t.Union([schema, t.Null(), t.Undefined()], options),
  Cookie: (properties, {
    domain: domain2,
    expires,
    httpOnly,
    maxAge,
    path,
    priority,
    sameSite,
    secure,
    secrets,
    sign,
    ...options
  } = {}) => {
    const v = t.Object(properties, options);
    v.config = {
      domain: domain2,
      expires,
      httpOnly,
      maxAge,
      path,
      priority,
      sameSite,
      secure,
      secrets,
      sign
    };
    return v;
  },
  // based on https://github.com/elysiajs/elysia/issues/512#issuecomment-1980134955
  UnionEnum: (values, options = {}) => {
    const type2 = values.every((value) => typeof value === "string") ? { type: "string" } : values.every((value) => typeof value === "number") ? { type: "number" } : values.every((value) => value === null) ? { type: "null" } : {};
    if (values.some((x) => typeof x === "object" && x !== null))
      throw new Error("This type does not support objects or arrays");
    return {
      // why it need default??
      default: values[0],
      ...options,
      [Kind]: "UnionEnum",
      ...type2,
      enum: values
    };
  }
};
t.BooleanString = ElysiaType.BooleanString;
t.ObjectString = ElysiaType.ObjectString;
t.ArrayString = ElysiaType.ArrayString;
t.Numeric = ElysiaType.Numeric;
t.Integer = ElysiaType.Integer;
t.File = (arg = {}) => ElysiaType.File({
  default: "File",
  ...arg,
  extension: arg?.type,
  type: "string",
  format: "binary"
});
t.Files = (arg = {}) => ElysiaType.Files({
  ...arg,
  elysiaMeta: "Files",
  default: "Files",
  extension: arg?.type,
  type: "array",
  items: {
    ...arg,
    default: "Files",
    type: "string",
    format: "binary"
  }
});
t.Nullable = (schema) => ElysiaType.Nullable(schema);
t.MaybeEmpty = ElysiaType.MaybeEmpty;
t.Cookie = ElysiaType.Cookie;
t.Date = ElysiaType.Date;
t.UnionEnum = ElysiaType.UnionEnum;

// node_modules/elysia/dist/sucrose.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var hasReturn = /* @__PURE__ */ __name((fn2) => {
  const fnLiteral = typeof fn2 === "object" ? fn2.fn.toString() : typeof fn2 === "string" ? fn2.toString() : fn2;
  const parenthesisEnd = fnLiteral.indexOf(")");
  if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123) {
    return true;
  }
  return fnLiteral.includes("return");
}, "hasReturn");
var separateFunction = /* @__PURE__ */ __name((code) => {
  if (code.startsWith("async"))
    code = code.slice(5);
  code = code.trimStart();
  let index = -1;
  if (code.charCodeAt(0) === 40) {
    index = code.indexOf("=>", code.indexOf(")"));
    if (index !== -1) {
      let bracketEndIndex = index;
      while (bracketEndIndex > 0)
        if (code.charCodeAt(--bracketEndIndex) === 41)
          break;
      let body = code.slice(index + 2);
      if (body.charCodeAt(0) === 32)
        body = body.trimStart();
      return [
        code.slice(1, bracketEndIndex),
        body,
        {
          isArrowReturn: body.charCodeAt(0) !== 123
        }
      ];
    }
  }
  if (/^(\w+)=>/g.test(code)) {
    index = code.indexOf("=>");
    if (index !== -1) {
      let body = code.slice(index + 2);
      if (body.charCodeAt(0) === 32)
        body = body.trimStart();
      return [
        code.slice(0, index),
        body,
        {
          isArrowReturn: body.charCodeAt(0) !== 123
        }
      ];
    }
  }
  if (code.startsWith("function")) {
    index = code.indexOf("(");
    const end = code.indexOf(")");
    return [
      code.slice(index + 1, end),
      code.slice(end + 2),
      {
        isArrowReturn: false
      }
    ];
  }
  const start = code.indexOf("(");
  if (start !== -1) {
    const sep = code.indexOf("\n", 2);
    const parameter = code.slice(0, sep);
    const end = parameter.lastIndexOf(")") + 1;
    const body = code.slice(sep + 1);
    return [
      parameter.slice(start, end),
      "{" + body,
      {
        isArrowReturn: false
      }
    ];
  }
  const x = code.split("\n", 2);
  return [x[0], x[1], { isArrowReturn: false }];
}, "separateFunction");
var bracketPairRange = /* @__PURE__ */ __name((parameter) => {
  const start = parameter.indexOf("{");
  if (start === -1)
    return [-1, 0];
  let end = start + 1;
  let deep = 1;
  for (; end < parameter.length; end++) {
    const char = parameter.charCodeAt(end);
    if (char === 123)
      deep++;
    else if (char === 125)
      deep--;
    if (deep === 0)
      break;
  }
  if (deep !== 0)
    return [0, parameter.length];
  return [start, end + 1];
}, "bracketPairRange");
var bracketPairRangeReverse = /* @__PURE__ */ __name((parameter) => {
  const end = parameter.lastIndexOf("}");
  if (end === -1)
    return [-1, 0];
  let start = end - 1;
  let deep = 1;
  for (; start >= 0; start--) {
    const char = parameter.charCodeAt(start);
    if (char === 125)
      deep++;
    else if (char === 123)
      deep--;
    if (deep === 0)
      break;
  }
  if (deep !== 0)
    return [-1, 0];
  return [start, end + 1];
}, "bracketPairRangeReverse");
var removeColonAlias = /* @__PURE__ */ __name((parameter) => {
  while (true) {
    const start = parameter.indexOf(":");
    if (start === -1)
      break;
    let end = parameter.indexOf(",", start);
    if (end === -1)
      end = parameter.indexOf("}", start) - 1;
    if (end === -2)
      end = parameter.length;
    parameter = parameter.slice(0, start) + parameter.slice(end);
  }
  return parameter;
}, "removeColonAlias");
var retrieveRootParamters = /* @__PURE__ */ __name((parameter) => {
  let hasParenthesis = false;
  if (parameter.charCodeAt(0) === 40)
    parameter = parameter.slice(1, -1);
  if (parameter.charCodeAt(0) === 123) {
    hasParenthesis = true;
    parameter = parameter.slice(1, -1);
  }
  parameter = parameter.replace(/( |\t|\n)/g, "").trim();
  let parameters = [];
  while (true) {
    let [start, end] = bracketPairRange(parameter);
    if (start === -1)
      break;
    parameters.push(parameter.slice(0, start - 1));
    if (parameter.charCodeAt(end) === 44)
      end++;
    parameter = parameter.slice(end);
  }
  parameter = removeColonAlias(parameter);
  if (parameter)
    parameters = parameters.concat(parameter.split(","));
  const newParameters = [];
  for (const p of parameters) {
    if (p.indexOf(",") === -1) {
      newParameters.push(p);
      continue;
    }
    for (const q of p.split(","))
      newParameters.push(q.trim());
  }
  parameters = newParameters;
  return {
    hasParenthesis,
    parameters
  };
}, "retrieveRootParamters");
var findParameterReference = /* @__PURE__ */ __name((parameter, inference) => {
  const { parameters, hasParenthesis } = retrieveRootParamters(parameter);
  if (!inference.query && parameters.includes("query"))
    inference.query = true;
  if (!inference.headers && parameters.includes("headers"))
    inference.headers = true;
  if (!inference.body && parameters.includes("body"))
    inference.body = true;
  if (!inference.cookie && parameters.includes("cookie"))
    inference.cookie = true;
  if (!inference.set && parameters.includes("set"))
    inference.set = true;
  if (!inference.server && parameters.includes("server"))
    inference.server = true;
  if (!inference.request && parameters.includes("request"))
    inference.request = true;
  if (!inference.route && parameters.includes("route"))
    inference.route = true;
  if (hasParenthesis)
    return `{ ${parameters.join(", ")} }`;
  return parameters.join(", ");
}, "findParameterReference");
var findEndIndex = /* @__PURE__ */ __name((type2, content, index) => {
  const newLineIndex = content.indexOf(type2 + "\n", index);
  const newTabIndex = content.indexOf(type2 + "	", index);
  const commaIndex = content.indexOf(type2 + ",", index);
  const semicolonIndex = content.indexOf(type2 + ";", index);
  const emptyIndex = content.indexOf(type2 + " ", index);
  return [newLineIndex, newTabIndex, commaIndex, semicolonIndex, emptyIndex].filter((i) => i > 0).sort((a, b) => a - b)[0] || -1;
}, "findEndIndex");
var findAlias = /* @__PURE__ */ __name((type2, body, depth = 0) => {
  if (depth > 5)
    return [];
  const aliases = [];
  let content = body;
  while (true) {
    let index = findEndIndex(" = " + type2, content);
    if (index === -1)
      index = findEndIndex("=" + type2, content);
    if (index === -1) {
      let lastIndex = content.indexOf(" = " + type2);
      if (lastIndex === -1)
        lastIndex = content.indexOf("=" + type2);
      if (lastIndex + 3 + type2.length !== content.length)
        break;
      index = lastIndex;
    }
    const part = content.slice(0, index);
    const lastPart = part.lastIndexOf(" ");
    let variable = part.slice(lastPart !== -1 ? lastPart + 1 : -1);
    if (variable === "}") {
      const [start, end] = bracketPairRangeReverse(part);
      aliases.push(removeColonAlias(content.slice(start, end)));
      content = content.slice(index + 3 + type2.length);
      continue;
    }
    while (variable.charCodeAt(0) === 44)
      variable = variable.slice(1);
    while (variable.charCodeAt(0) === 9)
      variable = variable.slice(1);
    if (!variable.includes("("))
      aliases.push(variable);
    content = content.slice(index + 3 + type2.length);
  }
  for (const alias of aliases) {
    if (alias.charCodeAt(0) === 123)
      continue;
    const deepAlias = findAlias(alias, body);
    if (deepAlias.length > 0)
      aliases.push(...deepAlias);
  }
  return aliases;
}, "findAlias");
var extractMainParameter = /* @__PURE__ */ __name((parameter) => {
  if (!parameter)
    return;
  if (parameter.charCodeAt(0) !== 123)
    return parameter;
  parameter = parameter.slice(2, -2);
  const hasComma = parameter.includes(",");
  if (!hasComma) {
    if (parameter.includes("..."))
      return parameter.slice(parameter.indexOf("...") + 3);
    return;
  }
  const spreadIndex = parameter.indexOf("...");
  if (spreadIndex === -1)
    return;
  return parameter.slice(spreadIndex + 3).trimEnd();
}, "extractMainParameter");
var inferBodyReference = /* @__PURE__ */ __name((code, aliases, inference) => {
  const access = /* @__PURE__ */ __name((type2, alias) => code.includes(alias + "." + type2) || code.includes(alias + '["' + type2 + '"]') || code.includes(alias + "['" + type2 + "']"), "access");
  for (const alias of aliases) {
    if (!alias)
      continue;
    if (alias.charCodeAt(0) === 123) {
      const parameters = retrieveRootParamters(alias).parameters;
      if (!inference.query && parameters.includes("query"))
        inference.query = true;
      if (!inference.headers && parameters.includes("headers"))
        inference.headers = true;
      if (!inference.body && parameters.includes("body"))
        inference.body = true;
      if (!inference.cookie && parameters.includes("cookie"))
        inference.cookie = true;
      if (!inference.set && parameters.includes("set"))
        inference.set = true;
      if (!inference.query && parameters.includes("server"))
        inference.server = true;
      if (!inference.request && parameters.includes("request"))
        inference.request = true;
      if (!inference.route && parameters.includes("route"))
        inference.route = true;
      continue;
    }
    if (!inference.query && access("query", alias))
      inference.query = true;
    if (code.includes("return " + alias) || code.includes("return " + alias + ".query"))
      inference.query = true;
    if (!inference.headers && access("headers", alias))
      inference.headers = true;
    if (!inference.body && access("body", alias))
      inference.body = true;
    if (!inference.cookie && access("cookie", alias))
      inference.cookie = true;
    if (!inference.set && access("set", alias))
      inference.set = true;
    if (!inference.server && access("server", alias))
      inference.server = true;
    if (inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.server && inference.route)
      break;
  }
  return aliases;
}, "inferBodyReference");
var isContextPassToFunction = /* @__PURE__ */ __name((context2, body, inference) => {
  try {
    const captureFunction = new RegExp(`(?:\\w)\\((?:.*)?${context2}`, "gs");
    captureFunction.test(body);
    const nextChar = body.charCodeAt(captureFunction.lastIndex);
    if (nextChar === 41 || nextChar === 44) {
      inference.query = true;
      inference.headers = true;
      inference.body = true;
      inference.cookie = true;
      inference.set = true;
      inference.server = true;
      inference.route = true;
      inference.request = true;
      return true;
    }
    return false;
  } catch (error4) {
    console.log(
      "[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"
    );
    console.log("--- body ---");
    console.log(body);
    console.log("--- context ---");
    console.log(context2);
    return true;
  }
}, "isContextPassToFunction");
var sucrose = /* @__PURE__ */ __name((lifeCycle, inference = {
  query: false,
  headers: false,
  body: false,
  cookie: false,
  set: false,
  server: false,
  request: false,
  route: false
}) => {
  const events = [];
  if (lifeCycle.handler && typeof lifeCycle.handler === "function")
    events.push(lifeCycle.handler);
  if (lifeCycle.request?.length)
    events.push(...lifeCycle.request);
  if (lifeCycle.beforeHandle?.length)
    events.push(...lifeCycle.beforeHandle);
  if (lifeCycle.parse?.length)
    events.push(...lifeCycle.parse);
  if (lifeCycle.error?.length)
    events.push(...lifeCycle.error);
  if (lifeCycle.transform?.length)
    events.push(...lifeCycle.transform);
  if (lifeCycle.afterHandle?.length)
    events.push(...lifeCycle.afterHandle);
  if (lifeCycle.mapResponse?.length)
    events.push(...lifeCycle.mapResponse);
  if (lifeCycle.afterResponse?.length)
    events.push(...lifeCycle.afterResponse);
  for (const e of events) {
    if (!e)
      continue;
    const event = "fn" in e ? e.fn : e;
    if (typeof event !== "function")
      continue;
    const [parameter, body, { isArrowReturn }] = separateFunction(
      event.toString()
    );
    const rootParameters = findParameterReference(parameter, inference);
    const mainParameter = extractMainParameter(rootParameters);
    if (mainParameter) {
      const aliases = findAlias(mainParameter, body);
      aliases.splice(0, -1, mainParameter);
      if (!isContextPassToFunction(mainParameter, body, inference))
        inferBodyReference(body, aliases, inference);
      if (!inference.query && body.includes("return " + mainParameter + ".query"))
        inference.query = true;
    }
    if (inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.request && inference.route)
      break;
  }
  return inference;
}, "sucrose");

// node_modules/elysia/dist/adapter/bun/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/adapter/web-standard/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/adapter/web-standard/handler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/cookies.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var import_cookie = __toESM(require_dist(), 1);

// node_modules/elysia/dist/deuri.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var hex = [];
for (let i = 48; i < 58; i++)
  hex[i] = i - 48;
for (let i = 0; i < 6; i++)
  hex[i + 65] = hex[i + 97] = i + 10;
var calcHex = /* @__PURE__ */ __name((a, b) => {
  if (a in hex && b in hex)
    return hex[a] << 4 | hex[b];
  return 255;
}, "calcHex");
var type = [
  ...new Array(128).fill(0),
  ...new Array(16).fill(1),
  ...new Array(16).fill(2),
  ...new Array(32).fill(3),
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  7,
  7,
  10,
  9,
  9,
  9,
  11,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4
];
var next = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  12,
  0,
  0,
  0,
  0,
  24,
  36,
  48,
  60,
  72,
  84,
  96,
  0,
  12,
  12,
  12,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  48,
  48,
  48,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  48,
  48,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  48,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];
var mask = type.map(
  (val) => [
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ][val]
);
var decode = /* @__PURE__ */ __name((url) => {
  let percentPosition = url.indexOf("%");
  if (percentPosition === -1)
    return url;
  let end = url.length - 3;
  if (percentPosition > end)
    return null;
  let decoded = "", start = 0, codepoint = 0, startOfOctets = percentPosition, state = 12, byte2;
  for (; ; ) {
    byte2 = calcHex(
      url.charCodeAt(percentPosition + 1),
      url.charCodeAt(percentPosition + 2)
    );
    state = next[state + type[byte2]];
    if (state === 0)
      return null;
    if (state === 12) {
      decoded += url.substring(start, startOfOctets);
      codepoint = codepoint << 6 | byte2 & mask[byte2];
      if (codepoint > 65535)
        decoded += String.fromCharCode(
          55232 + (codepoint >> 10),
          56320 + (codepoint & 1023)
        );
      else
        decoded += String.fromCharCode(codepoint);
      start = percentPosition + 3;
      percentPosition = url.indexOf("%", start);
      if (percentPosition === -1)
        return decoded + url.substring(start);
      if (percentPosition > end)
        return null;
      startOfOctets = percentPosition;
      codepoint = 0;
    } else {
      percentPosition += 3;
      if (percentPosition > end || url.charCodeAt(percentPosition) !== 37)
        return null;
      codepoint = codepoint << 6 | byte2 & mask[byte2];
    }
  }
}, "decode");

// node_modules/elysia/dist/cookies.mjs
var Cookie = class {
  constructor(name, jar, initial = {}) {
    this.name = name;
    this.jar = jar;
    this.initial = initial;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie(jar) {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    this.jar[this.name] = jar;
  }
  get setCookie() {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    return this.jar[this.name];
  }
  set setCookie(jar) {
    this.cookie = jar;
  }
  get value() {
    return this.cookie.value;
  }
  set value(value) {
    this.setCookie.value = value;
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires(expires) {
    this.setCookie.expires = expires;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge(maxAge) {
    this.setCookie.maxAge = maxAge;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain(domain2) {
    this.setCookie.domain = domain2;
  }
  get path() {
    return this.cookie.path;
  }
  set path(path) {
    this.setCookie.path = path;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure(secure) {
    this.setCookie.secure = secure;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly(httpOnly) {
    this.setCookie.httpOnly = httpOnly;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite(sameSite) {
    this.setCookie.sameSite = sameSite;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority(priority) {
    this.setCookie.priority = priority;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned(partitioned) {
    this.setCookie.partitioned = partitioned;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets(secrets) {
    this.setCookie.secrets = secrets;
  }
  update(config2) {
    this.setCookie = Object.assign(
      this.cookie,
      typeof config2 === "function" ? config2(this.cookie) : config2
    );
    return this;
  }
  set(config2) {
    this.setCookie = Object.assign(
      {
        ...this.initial,
        value: this.value
      },
      typeof config2 === "function" ? config2(this.cookie) : config2
    );
    return this;
  }
  remove() {
    if (this.value === void 0)
      return;
    this.set({
      expires: /* @__PURE__ */ new Date(0),
      maxAge: 0,
      value: ""
    });
    return this;
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
};
__name(Cookie, "Cookie");
var createCookieJar = /* @__PURE__ */ __name((set2, store, initial) => {
  if (!set2.cookie)
    set2.cookie = {};
  return new Proxy(store, {
    get(_, key) {
      if (key in store)
        return new Cookie(
          key,
          set2.cookie,
          Object.assign({}, initial ?? {}, store[key])
        );
      return new Cookie(
        key,
        set2.cookie,
        Object.assign({}, initial)
      );
    }
  });
}, "createCookieJar");
var parseCookie = /* @__PURE__ */ __name(async (set2, cookieString, {
  secrets,
  sign,
  ...initial
} = {}) => {
  if (!cookieString)
    return createCookieJar(set2, {}, initial);
  const isStringKey = typeof secrets === "string";
  if (sign && sign !== true && !Array.isArray(sign))
    sign = [sign];
  const jar = {};
  const cookies = (0, import_cookie.parse)(cookieString);
  for (const [name, v] of Object.entries(cookies)) {
    if (v === void 0)
      continue;
    let value = decode(v);
    if (sign === true || sign?.includes(name)) {
      if (!secrets)
        throw new Error("No secret is provided to cookie plugin");
      if (isStringKey) {
        const temp = await unsignCookie(value, secrets);
        if (temp === false)
          throw new InvalidCookieSignature(name);
        value = temp;
      } else {
        let decoded = true;
        for (let i = 0; i < secrets.length; i++) {
          const temp = await unsignCookie(value, secrets[i]);
          if (temp !== false) {
            decoded = true;
            value = temp;
            break;
          }
        }
        if (!decoded)
          throw new InvalidCookieSignature(name);
      }
    }
    jar[name] = {
      value
    };
  }
  return createCookieJar(set2, jar, initial);
}, "parseCookie");
var serializeCookie = /* @__PURE__ */ __name((cookies) => {
  if (!cookies || !isNotEmpty(cookies))
    return void 0;
  const set2 = [];
  for (const [key, property] of Object.entries(cookies)) {
    if (!key || !property)
      continue;
    const value = property.value;
    if (value === void 0 || value === null)
      continue;
    set2.push(
      (0, import_cookie.serialize)(
        key,
        typeof value === "object" ? JSON.stringify(value) : value + "",
        property
      )
    );
  }
  if (set2.length === 0)
    return void 0;
  if (set2.length === 1)
    return set2[0];
  return set2;
}, "serializeCookie");

// node_modules/elysia/dist/adapter/web-standard/handler.mjs
var handleFile = /* @__PURE__ */ __name((response, set2) => {
  const size = response.size;
  if (!set2 && size || size && set2 && set2.status !== 206 && set2.status !== 304 && set2.status !== 412 && set2.status !== 416) {
    if (set2) {
      if (set2.headers instanceof Headers) {
        let setHeaders = {
          "accept-ranges": "bytes",
          "content-range": `bytes 0-${size - 1}/${size}`,
          "transfer-encoding": "chunked"
        };
        if (hasHeaderShorthand)
          setHeaders = set2.headers.toJSON();
        else {
          setHeaders = {};
          for (const [key, value] of set2.headers.entries())
            if (key in set2.headers)
              setHeaders[key] = value;
        }
        return new Response(response, {
          status: set2.status,
          headers: setHeaders
        });
      }
      if (isNotEmpty(set2.headers))
        return new Response(response, {
          status: set2.status,
          headers: Object.assign(
            {
              "accept-ranges": "bytes",
              "content-range": `bytes 0-${size - 1}/${size}`,
              "transfer-encoding": "chunked"
            },
            set2.headers
          )
        });
    }
    return new Response(response, {
      headers: {
        "accept-ranges": "bytes",
        "content-range": `bytes 0-${size - 1}/${size}`,
        "transfer-encoding": "chunked"
      }
    });
  }
  return new Response(response);
}, "handleFile");
var parseSetCookies = /* @__PURE__ */ __name((headers, setCookie) => {
  if (!headers)
    return headers;
  headers.delete("set-cookie");
  for (let i = 0; i < setCookie.length; i++) {
    const index = setCookie[i].indexOf("=");
    headers.append(
      "set-cookie",
      `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1) || ""}`
    );
  }
  return headers;
}, "parseSetCookies");
var handleStream = /* @__PURE__ */ __name(async (generator, set2, request) => {
  let init = generator.next();
  if (init instanceof Promise)
    init = await init;
  if (init.done) {
    if (set2)
      return mapResponse(init.value, set2, request);
    return mapCompactResponse(init.value, request);
  }
  return new Response(
    new ReadableStream({
      async start(controller) {
        let end = false;
        request?.signal?.addEventListener("abort", () => {
          end = true;
          try {
            controller.close();
          } catch {
          }
        });
        if (init.value !== void 0 && init.value !== null) {
          if (typeof init.value === "object")
            try {
              controller.enqueue(
                // @ts-expect-error this is a valid operation
                Buffer.from(JSON.stringify(init.value))
              );
            } catch {
              controller.enqueue(
                // @ts-expect-error this is a valid operation
                Buffer.from(init.value.toString())
              );
            }
          else
            controller.enqueue(
              // @ts-expect-error this is a valid operation
              Buffer.from(init.value.toString())
            );
        }
        for await (const chunk of generator) {
          if (end)
            break;
          if (chunk === void 0 || chunk === null)
            continue;
          if (typeof chunk === "object")
            try {
              controller.enqueue(
                // @ts-expect-error this is a valid operation
                Buffer.from(JSON.stringify(chunk))
              );
            } catch {
              controller.enqueue(
                // @ts-expect-error this is a valid operation
                Buffer.from(chunk.toString())
              );
            }
          else
            controller.enqueue(
              // @ts-expect-error this is a valid operation
              Buffer.from(chunk.toString())
            );
          await new Promise(
            (resolve) => setTimeout(() => resolve(), 0)
          );
        }
        try {
          controller.close();
        } catch {
        }
      }
    }),
    {
      ...set2,
      headers: {
        // Manually set transfer-encoding for direct response, eg. app.handle, eden
        "transfer-encoding": "chunked",
        "content-type": "text/event-stream; charset=utf-8",
        ...set2?.headers
      }
    }
  );
}, "handleStream");
async function* streamResponse(response) {
  const body = response.body;
  if (!body)
    return;
  const reader = body.getReader();
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        break;
      yield decoder.decode(value);
    }
  } finally {
    reader.releaseLock();
  }
}
__name(streamResponse, "streamResponse");
var handleSet = /* @__PURE__ */ __name((set2) => {
  if (typeof set2.status === "string")
    set2.status = StatusMap[set2.status];
  if (set2.cookie && isNotEmpty(set2.cookie)) {
    const cookie = serializeCookie(set2.cookie);
    if (cookie)
      set2.headers["set-cookie"] = cookie;
  }
  if (set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"])) {
    set2.headers = parseSetCookies(
      new Headers(set2.headers),
      set2.headers["set-cookie"]
    );
  }
}, "handleSet");
var mergeResponseWithSetHeaders = /* @__PURE__ */ __name((response, set2) => {
  if (response.status !== set2.status && set2.status !== 200 && (response.status <= 300 || response.status > 400))
    response = new Response(response.body, {
      headers: response.headers,
      status: set2.status
    });
  let isCookieSet = false;
  if (set2.headers instanceof Headers)
    for (const key of set2.headers.keys()) {
      if (key === "set-cookie") {
        if (isCookieSet)
          continue;
        isCookieSet = true;
        for (const cookie of set2.headers.getSetCookie())
          response.headers.append("set-cookie", cookie);
      } else
        response.headers.append(key, set2.headers?.get(key) ?? "");
    }
  else
    for (const key in set2.headers)
      response.headers.append(key, set2.headers[key]);
  return response;
}, "mergeResponseWithSetHeaders");
var mapResponse = /* @__PURE__ */ __name((response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie) {
    handleSet(set2);
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Array":
      case "Object":
        return Response.json(response, set2);
      case "ElysiaFile":
        return handleFile(response.value);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        set2.status = response.code;
        return mapResponse(
          response.response,
          set2,
          request
        );
      case "ReadableStream":
        if (!set2.headers["content-type"]?.startsWith(
          "text/event-stream"
        ))
          set2.headers["content-type"] = "text/event-stream; charset=utf-8";
        request?.signal?.addEventListener(
          "abort",
          {
            handleEvent() {
              if (request?.signal && !request?.signal?.aborted)
                response.cancel();
            }
          },
          {
            once: true
          }
        );
        return new Response(response, set2);
      case void 0:
        if (!response)
          return new Response("", set2);
        return Response.json(response, set2);
      case "Response":
        response = mergeResponseWithSetHeaders(
          response,
          set2
        );
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(
            streamResponse(response),
            set2,
            request
          );
        return response;
      case "Error":
        return errorToResponse(response, set2);
      case "Promise":
        return response.then(
          (x) => mapResponse(x, set2, request)
        );
      case "Function":
        return mapResponse(response(), set2, request);
      case "Number":
      case "Boolean":
        return new Response(
          response.toString(),
          set2
        );
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response) {
          response = mergeResponseWithSetHeaders(
            response,
            set2
          );
          if (response.headers.get(
            "transfer-encoding"
          ) === "chunked")
            return handleStream(
              streamResponse(response),
              set2,
              request
            );
          return response;
        }
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (response instanceof ElysiaCustomStatusResponse) {
          set2.status = response.code;
          return mapResponse(
            response.response,
            set2,
            request
          );
        }
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if (typeof response?.then === "function")
          return response.then((x) => mapResponse(x, set2));
        if (typeof response?.toResponse === "function")
          return mapResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(
              JSON.stringify(response),
              set2
            );
          }
        }
        return new Response(response, set2);
    }
  }
  if (
    // @ts-expect-error
    typeof response?.next === "function" || response instanceof ReadableStream || response instanceof Response && response.headers.get("transfer-encoding") === "chunked"
  )
    return handleStream(response, set2, request);
  return mapCompactResponse(response, request);
}, "mapResponse");
var mapEarlyResponse = /* @__PURE__ */ __name((response, set2, request) => {
  if (response === void 0 || response === null)
    return;
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie) {
    handleSet(set2);
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Array":
      case "Object":
        return Response.json(response, set2);
      case "ElysiaFile":
        return handleFile(response.value);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        set2.status = response.code;
        return mapEarlyResponse(
          response.response,
          set2,
          request
        );
      case "ReadableStream":
        if (!set2.headers["content-type"]?.startsWith(
          "text/event-stream"
        ))
          set2.headers["content-type"] = "text/event-stream; charset=utf-8";
        request?.signal?.addEventListener(
          "abort",
          {
            handleEvent() {
              if (request?.signal && !request?.signal?.aborted)
                response.cancel();
            }
          },
          {
            once: true
          }
        );
        return new Response(response, set2);
      case void 0:
        if (!response)
          return;
        return Response.json(response, set2);
      case "Response":
        response = mergeResponseWithSetHeaders(
          response,
          set2
        );
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(
            streamResponse(response),
            set2,
            request
          );
        return response;
      case "Promise":
        return response.then(
          (x) => mapEarlyResponse(x, set2)
        );
      case "Error":
        return errorToResponse(response, set2);
      case "Function":
        return mapEarlyResponse(response(), set2);
      case "Number":
      case "Boolean":
        return new Response(
          response.toString(),
          set2
        );
      case "FormData":
        return new Response(response);
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      default:
        if (response instanceof Response) {
          response = mergeResponseWithSetHeaders(
            response,
            set2
          );
          if (response.headers.get(
            "transfer-encoding"
          ) === "chunked")
            return handleStream(
              streamResponse(response),
              set2,
              request
            );
          return response;
        }
        if (response instanceof Promise)
          return response.then((x) => mapEarlyResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (response instanceof ElysiaCustomStatusResponse) {
          set2.status = response.code;
          return mapEarlyResponse(
            response.response,
            set2,
            request
          );
        }
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if (typeof response?.then === "function")
          return response.then((x) => mapEarlyResponse(x, set2));
        if (typeof response?.toResponse === "function")
          return mapEarlyResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(
              JSON.stringify(response),
              set2
            );
          }
        }
        return new Response(response, set2);
    }
  } else
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response);
      case "Array":
      case "Object":
        return Response.json(response, set2);
      case "ElysiaFile":
        return handleFile(response.value);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        set2.status = response.code;
        return mapEarlyResponse(
          response.response,
          set2,
          request
        );
      case "ReadableStream":
        request?.signal?.addEventListener(
          "abort",
          {
            handleEvent() {
              if (request?.signal && !request?.signal?.aborted)
                response.cancel();
            }
          },
          {
            once: true
          }
        );
        return new Response(response, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8"
          }
        });
      case void 0:
        if (!response)
          return new Response("");
        return new Response(JSON.stringify(response), {
          headers: {
            "content-type": "application/json"
          }
        });
      case "Response":
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(
            streamResponse(response)
          );
        return response;
      case "Promise":
        return response.then((x) => {
          const r = mapEarlyResponse(x, set2);
          if (r !== void 0)
            return r;
        });
      case "Error":
        return errorToResponse(response, set2);
      case "Function":
        return mapCompactResponse(response(), request);
      case "Number":
      case "Boolean":
        return new Response(response.toString());
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response);
      default:
        if (response instanceof Response)
          return response;
        if (response instanceof Promise)
          return response.then((x) => mapEarlyResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (response instanceof ElysiaCustomStatusResponse) {
          set2.status = response.code;
          return mapEarlyResponse(
            response.response,
            set2,
            request
          );
        }
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if (typeof response?.then === "function")
          return response.then((x) => mapEarlyResponse(x, set2));
        if (typeof response?.toResponse === "function")
          return mapEarlyResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(
              JSON.stringify(response),
              set2
            );
          }
        }
        return new Response(response);
    }
}, "mapEarlyResponse");
var mapCompactResponse = /* @__PURE__ */ __name((response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response);
    case "Object":
    case "Array":
      return Response.json(response);
    case "ElysiaFile":
      return handleFile(response.value);
    case "Blob":
      return handleFile(response);
    case "ElysiaCustomStatusResponse":
      return mapResponse(
        response.response,
        {
          status: response.code,
          headers: {}
        }
      );
    case "ReadableStream":
      request?.signal?.addEventListener(
        "abort",
        {
          handleEvent() {
            if (request?.signal && !request?.signal?.aborted)
              response.cancel();
          }
        },
        {
          once: true
        }
      );
      return new Response(response, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8"
        }
      });
    case void 0:
      if (!response)
        return new Response("");
      return new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      });
    case "Response":
      if (response.headers.get("transfer-encoding") === "chunked")
        return handleStream(streamResponse(response));
      return response;
    case "Error":
      return errorToResponse(response);
    case "Promise":
      return response.then(
        (x) => mapCompactResponse(x, request)
      );
    case "Function":
      return mapCompactResponse(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then(
          (x) => mapCompactResponse(x, request)
        );
      if (response instanceof Error)
        return errorToResponse(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse(
          response.response,
          {
            status: response.code,
            headers: {}
          }
        );
      if (typeof response?.next === "function")
        return handleStream(response, void 0, request);
      if (typeof response?.then === "function")
        return response.then((x) => mapResponse(x, set));
      if (typeof response?.toResponse === "function")
        return mapCompactResponse(response.toResponse());
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91) {
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
        }
      }
      return new Response(response);
  }
}, "mapCompactResponse");
var errorToResponse = /* @__PURE__ */ __name((error4, set2) => new Response(
  JSON.stringify({
    name: error4?.name,
    message: error4?.message,
    cause: error4?.cause
  }),
  {
    status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
    headers: set2?.headers
  }
), "errorToResponse");
var createStaticHandler = /* @__PURE__ */ __name((handle, hooks, setHeaders = {}) => {
  if (typeof handle === "function")
    return;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return response.clone.bind(response);
}, "createStaticHandler");

// node_modules/elysia/dist/adapter/web-standard/index.mjs
var WebStandardAdapter = {
  name: "web-standard",
  isWebStandard: true,
  handler: {
    mapResponse,
    mapEarlyResponse,
    mapCompactResponse,
    createStaticHandler
  },
  composeHandler: {
    mapResponseContext: "c.request",
    preferWebstandardHeaders: true,
    // @ts-ignore Bun specific
    headers: "c.headers = {}\nfor (const [key, value] of c.request.headers.entries())c.headers[key] = value\n",
    parser: {
      json(isOptional2) {
        if (isOptional2)
          return `try{c.body=await c.request.json()}catch{}
`;
        return `c.body=await c.request.json()
`;
      },
      text() {
        return `c.body=await c.request.text()
`;
      },
      urlencoded() {
        return `c.body=parseQuery(await c.request.text())
`;
      },
      arrayBuffer() {
        return `c.body=await c.request.arrayBuffer()
`;
      },
      formData(isOptional2) {
        let fnLiteral = "\nc.body={}\n";
        if (isOptional2)
          fnLiteral += `let form;try{form=await c.request.formData()}catch{}`;
        else
          fnLiteral += `const form=await c.request.formData()
`;
        return fnLiteral + `for(const key of form.keys()){if(c.body[key]) continue
const value=form.getAll(key)
if(value.length===1)c.body[key]=value[0]
else c.body[key]=value}`;
      }
    }
  },
  composeGeneralHandler: {
    parameters: "r",
    createContext(app2) {
      let decoratorsLiteral = "";
      let fnLiteral = "";
      const defaultHeaders = app2.setHeaders;
      for (const key of Object.keys(app2.singleton.decorator))
        decoratorsLiteral += `,${key}: decorator['${key}']`;
      const standardHostname = app2.config.handler?.standardHostname ?? true;
      const hasTrace = !!app2.event.trace?.length;
      fnLiteral += `const u=r.url,s=u.indexOf('/',${standardHostname ? 11 : 7}),qi=u.indexOf('?', s + 1)
let p
if(qi===-1)p=u.substring(s)
else p=u.substring(s, qi)
`;
      if (hasTrace)
        fnLiteral += `const id=randomId()
`;
      fnLiteral += `const c={request:r,store,qi,path:p,url:u,redirect,error,set:{headers:`;
      fnLiteral += Object.keys(defaultHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}";
      fnLiteral += `,status:200}`;
      if (app2.inference.server)
        fnLiteral += `,get server(){return getServer()}`;
      if (hasTrace)
        fnLiteral += ",[ELYSIA_REQUEST_ID]:id";
      fnLiteral += decoratorsLiteral;
      fnLiteral += `}
`;
      return fnLiteral;
    },
    websocket(app2) {
      let fnLiteral = "";
      const wsPaths = app2.router.static.ws;
      const router = app2.router.http;
      router.build();
      if (Object.keys(wsPaths).length || router.root.ws || router.history.find((x) => x["0"] === "ws")) {
        fnLiteral += `if(r.method==='GET'){switch(p){`;
        for (const [path, index] of Object.entries(wsPaths)) {
          fnLiteral += `case'${path}':` + (app2.config.strictPath !== true ? `case'${getLoosePath(path)}':` : "") + `if(r.headers.get('upgrade')==='websocket')return ht[${index}].composed(c)
`;
        }
        fnLiteral += `default:if(r.headers.get('upgrade')==='websocket'){const route=router.find('ws',p)
if(route){c.params=route.params
if(route.store.handler)return route.store.handler(c)
return (route.store.handler=route.store.compile())(c)}}break}}`;
      }
      return fnLiteral;
    },
    error404(hasEventHook, hasErrorHook) {
      let findDynamicRoute = `if(route===null)return `;
      if (hasErrorHook)
        findDynamicRoute += `app.handleError(c,notFound,false,${this.parameters})`;
      else
        findDynamicRoute += hasEventHook ? `new Response(error404Message,{status:c.set.status===200?404:c.set.status,headers:c.set.headers})` : `error404.clone()`;
      return {
        declare: hasErrorHook ? "" : `const error404Message=notFound.message.toString()
const error404=new Response(error404Message,{status:404})
`,
        code: findDynamicRoute
      };
    }
  },
  composeError: {
    mapResponseContext: "",
    validationError: `return new Response(error.message,{headers:Object.assign({'content-type':'application/json'},set.headers),status:set.status})`,
    unknownError: `return new Response(error.message,{headers:set.headers,status:error.status??set.status??500})`
  },
  listen() {
    return () => {
      throw new Error(
        "WebStandard does not support listen, you might want to export default Elysia.fetch instead"
      );
    };
  }
};

// node_modules/elysia/dist/adapter/bun/handler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var createNativeStaticHandler = /* @__PURE__ */ __name((handle, hooks, setHeaders = {}) => {
  if (typeof handle === "function" || handle instanceof Blob)
    return;
  if (typeof handle === "object" && handle?.toString() === "[object HTMLBundle]")
    return () => handle;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length) {
    if (!response.headers.has("content-type"))
      response.headers.append("content-type", "text/plain;charset=utf-8");
    return response.clone.bind(response);
  }
}, "createNativeStaticHandler");

// node_modules/elysia/dist/ws/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var websocket = {
  open(ws) {
    ws.data.open?.(ws);
  },
  message(ws, message) {
    ws.data.message?.(ws, message);
  },
  drain(ws) {
    ws.data.drain?.(ws);
  },
  close(ws, code, reason) {
    ws.data.close?.(ws, code, reason);
  }
};
var ElysiaWS = class {
  constructor(raw, data, body = void 0) {
    this.raw = raw;
    this.data = data;
    this.body = body;
    this.validator = raw.data?.validator;
    this.sendText = raw.sendText.bind(raw);
    this.sendBinary = raw.sendBinary.bind(raw);
    this.close = raw.close.bind(raw);
    this.terminate = raw.terminate.bind(raw);
    this.publishText = raw.publishText.bind(raw);
    this.publishBinary = raw.publishBinary.bind(raw);
    this.subscribe = raw.subscribe.bind(raw);
    this.unsubscribe = raw.unsubscribe.bind(raw);
    this.isSubscribed = raw.isSubscribed.bind(raw);
    this.cork = raw.cork.bind(raw);
    this.remoteAddress = raw.remoteAddress;
    this.binaryType = raw.binaryType;
    this.data = raw.data;
    this.send = this.send.bind(this);
    this.ping = this.ping.bind(this);
    this.pong = this.pong.bind(this);
    this.publish = this.publish.bind(this);
  }
  get id() {
    return this.data.id;
  }
  /**
   * Sends a message to the client.
   *
   * @param data The data to send.
   * @param compress Should the data be compressed? If the client does not support compression, this is ignored.
   * @example
   * ws.send("Hello!");
   * ws.send("Compress this.", true);
   * ws.send(new Uint8Array([1, 2, 3, 4]));
   */
  send(data, compress) {
    if (Buffer.isBuffer(data))
      return this.raw.send(data, compress);
    if (this.validator?.Check(data) === false)
      return this.raw.send(
        new ValidationError("message", this.validator, data).message
      );
    if (typeof data === "object")
      data = JSON.stringify(data);
    return this.raw.send(data, compress);
  }
  /**
   * Sends a ping.
   *
   * @param data The data to send
   */
  ping(data) {
    if (Buffer.isBuffer(data))
      return this.raw.ping(data);
    if (this.validator?.Check(data) === false)
      return this.raw.send(
        new ValidationError("message", this.validator, data).message
      );
    if (typeof data === "object")
      data = JSON.stringify(data);
    return this.raw.ping(data);
  }
  /**
   * Sends a pong.
   *
   * @param data The data to send
   */
  pong(data) {
    if (Buffer.isBuffer(data))
      return this.raw.pong(data);
    if (this.validator?.Check(data) === false)
      return this.raw.send(
        new ValidationError("message", this.validator, data).message
      );
    if (typeof data === "object")
      data = JSON.stringify(data);
    return this.raw.pong(data);
  }
  /**
   * Sends a message to subscribers of the topic.
   *
   * @param topic The topic name.
   * @param data The data to send.
   * @param compress Should the data be compressed? If the client does not support compression, this is ignored.
   * @example
   * ws.publish("chat", "Hello!");
   * ws.publish("chat", "Compress this.", true);
   * ws.publish("chat", new Uint8Array([1, 2, 3, 4]));
   */
  publish(topic, data, compress) {
    if (Buffer.isBuffer(data))
      return this.raw.publish(
        topic,
        data,
        compress
      );
    if (this.validator?.Check(data) === false)
      return this.raw.send(
        new ValidationError("message", this.validator, data).message
      );
    if (typeof data === "object")
      data = JSON.stringify(data);
    return this.raw.publish(topic, data, compress);
  }
  get readyState() {
    return this.raw.readyState;
  }
};
__name(ElysiaWS, "ElysiaWS");
var createWSMessageParser = /* @__PURE__ */ __name((parse2) => {
  const parsers = typeof parse2 === "function" ? [parse2] : parse2;
  return /* @__PURE__ */ __name(async function parseMessage(ws, message) {
    if (typeof message === "string") {
      const start = message?.charCodeAt(0);
      if (start === 47 || start === 123)
        try {
          message = JSON.parse(message);
        } catch {
        }
      else if (isNumericString(message))
        message = +message;
    }
    if (parsers)
      for (let i = 0; i < parsers.length; i++) {
        let temp = parsers[i](ws, message);
        if (temp instanceof Promise)
          temp = await temp;
        if (temp !== void 0)
          return temp;
      }
    return message;
  }, "parseMessage");
}, "createWSMessageParser");
var createHandleWSResponse = /* @__PURE__ */ __name((validateResponse) => {
  const handleWSResponse = /* @__PURE__ */ __name((ws, data) => {
    if (data instanceof Promise)
      return data.then((data2) => handleWSResponse(ws, data2));
    if (Buffer.isBuffer(data))
      return ws.send(data.toString());
    if (data === void 0)
      return;
    const send = /* @__PURE__ */ __name((datum) => {
      if (validateResponse?.Check(datum) === false)
        return ws.send(
          new ValidationError("message", validateResponse, datum).message
        );
      if (typeof datum === "object")
        return ws.send(JSON.stringify(datum));
      ws.send(datum);
    }, "send");
    if (typeof data?.next !== "function")
      return void send(data);
    const init = data.next();
    if (init instanceof Promise)
      return (async () => {
        const first = await init;
        if (validateResponse?.Check(first) === false)
          return ws.send(
            new ValidationError("message", validateResponse, first).message
          );
        send(first.value);
        if (!first.done)
          for await (const datum of data)
            send(datum);
      })();
    send(init.value);
    if (!init.done)
      for (const datum of data)
        send(datum);
  }, "handleWSResponse");
  return handleWSResponse;
}, "createHandleWSResponse");

// node_modules/elysia/dist/adapter/bun/index.mjs
var BunAdapter = {
  ...WebStandardAdapter,
  name: "bun",
  handler: {
    ...WebStandardAdapter.handler,
    createNativeStaticHandler
  },
  composeHandler: {
    ...WebStandardAdapter.composeHandler,
    headers: hasHeaderShorthand ? "c.headers = c.request.headers.toJSON()\n" : "c.headers = {}\nfor (const [key, value] of c.request.headers.entries())c.headers[key] = value\n"
  },
  listen(app2) {
    return (options, callback) => {
      if (typeof Bun === "undefined")
        throw new Error(
          ".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch"
        );
      app2.compile();
      if (typeof options === "string") {
        if (!isNumericString(options))
          throw new Error("Port must be a numeric value");
        options = parseInt(options);
      }
      const fetch = app2.fetch;
      const serve = typeof options === "object" ? {
        development: !isProduction,
        reusePort: true,
        ...app2.config.serve || {},
        ...options || {},
        // @ts-ignore
        static: {
          ...app2.router.static.http.static,
          ...app2.config.serve?.static
        },
        websocket: {
          ...app2.config.websocket || {},
          ...websocket || {}
        },
        fetch,
        // @ts-expect-error private property
        error: app2.outerErrorHandler
      } : {
        development: !isProduction,
        reusePort: true,
        ...app2.config.serve || {},
        // @ts-ignore
        static: app2.router.static.http.static,
        websocket: {
          ...app2.config.websocket || {},
          ...websocket || {}
        },
        port: options,
        fetch,
        // @ts-expect-error private property
        error: app2.outerErrorHandler
      };
      app2.server = Bun?.serve(serve);
      if (app2.event.start)
        for (let i = 0; i < app2.event.start.length; i++)
          app2.event.start[i].fn(app2);
      if (callback)
        callback(app2.server);
      process.on("beforeExit", () => {
        if (app2.server) {
          app2.server.stop?.();
          app2.server = null;
          if (app2.event.stop)
            for (let i = 0; i < app2.event.stop.length; i++)
              app2.event.stop[i].fn(app2);
        }
      });
      app2.promisedModules.then(() => {
        Bun?.gc(false);
      });
    };
  },
  ws(app2, path, options) {
    const { parse: parse2, body, response, ...rest } = options;
    const validateMessage = getSchemaValidator(body, {
      // @ts-expect-error private property
      modules: app2.definitions.typebox,
      // @ts-expect-error private property
      models: app2.definitions.type,
      normalize: app2.config.normalize
    });
    const validateResponse = getSchemaValidator(response, {
      // @ts-expect-error private property
      modules: app2.definitions.typebox,
      // @ts-expect-error private property
      models: app2.definitions.type,
      normalize: app2.config.normalize
    });
    app2.route(
      "$INTERNALWS",
      path,
      async (context2) => {
        const server = app2.getServer();
        const { set: set2, path: path2, qi, headers, query, params } = context2;
        context2.validator = validateResponse;
        if (options.upgrade) {
          if (typeof options.upgrade === "function") {
            const temp = options.upgrade(context2);
            if (temp instanceof Promise)
              await temp;
          } else if (options.upgrade)
            Object.assign(
              set2.headers,
              options.upgrade
            );
        }
        if (set2.cookie && isNotEmpty(set2.cookie)) {
          const cookie = serializeCookie(set2.cookie);
          if (cookie)
            set2.headers["set-cookie"] = cookie;
        }
        if (set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]))
          set2.headers = parseSetCookies(
            new Headers(set2.headers),
            set2.headers["set-cookie"]
          );
        const handleResponse = createHandleWSResponse(validateResponse);
        const parseMessage = createWSMessageParser(parse2);
        let _id;
        if (server?.upgrade(context2.request, {
          headers: isNotEmpty(set2.headers) ? set2.headers : void 0,
          data: {
            ...context2,
            get id() {
              if (_id)
                return _id;
              return _id = randomId();
            },
            validator: validateResponse,
            ping(data) {
              options.ping?.(data);
            },
            pong(data) {
              options.pong?.(data);
            },
            open(ws) {
              handleResponse(
                ws,
                options.open?.(
                  new ElysiaWS(ws, context2)
                )
              );
            },
            message: async (ws, _message) => {
              const message = await parseMessage(ws, _message);
              if (validateMessage?.Check(message) === false)
                return void ws.send(
                  new ValidationError(
                    "message",
                    validateMessage,
                    message
                  ).message
                );
              handleResponse(
                ws,
                options.message?.(
                  new ElysiaWS(
                    ws,
                    context2,
                    message
                  ),
                  message
                )
              );
            },
            drain(ws) {
              handleResponse(
                ws,
                options.drain?.(
                  new ElysiaWS(ws, context2)
                )
              );
            },
            close(ws, code, reason) {
              handleResponse(
                ws,
                options.close?.(
                  new ElysiaWS(ws, context2),
                  code,
                  reason
                )
              );
            }
          }
        }))
          return;
        set2.status = 400;
        return "Expected a websocket connection";
      },
      {
        ...rest,
        websocket: options
      }
    );
  }
};

// node_modules/elysia/dist/universal/env.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/universal/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var isBun2 = typeof Bun !== "undefined";

// node_modules/elysia/dist/universal/env.mjs
var env4 = isBun2 ? Bun.env : typeof process !== "undefined" && process?.env ? process.env : {};

// node_modules/elysia/dist/compose.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/fast-querystring.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var plusRegex = /\+/g;
function parseQueryFromURL(input) {
  const result = {};
  if (typeof input !== "string")
    return result;
  let key = "";
  let value = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let flags = 0;
  const l = input.length;
  for (let i = 0; i < l; i++) {
    switch (input.charCodeAt(i)) {
      case 38:
        const hasBothKeyValuePair = equalityIndex > startingIndex;
        if (!hasBothKeyValuePair)
          equalityIndex = i;
        key = input.slice(startingIndex + 1, equalityIndex);
        if (hasBothKeyValuePair || key.length > 0) {
          if (flags & 1)
            key = key.replace(plusRegex, " ");
          if (flags & 2)
            key = decode(key) || key;
          if (!result[key]) {
            if (hasBothKeyValuePair) {
              value = input.slice(equalityIndex + 1, i);
              if (flags & 4)
                value = value.replace(plusRegex, " ");
              if (flags & 8)
                value = decode(value) || value;
            }
            result[key] = value;
          }
        }
        key = "";
        value = "";
        startingIndex = i;
        equalityIndex = i;
        flags = 0;
        break;
      case 61:
        if (equalityIndex <= startingIndex)
          equalityIndex = i;
        else
          flags |= 8;
        break;
      case 43:
        if (equalityIndex > startingIndex)
          flags |= 4;
        else
          flags |= 1;
        break;
      case 37:
        if (equalityIndex > startingIndex)
          flags |= 8;
        else
          flags |= 2;
        break;
    }
  }
  if (startingIndex < l) {
    const hasBothKeyValuePair = equalityIndex > startingIndex;
    key = input.slice(
      startingIndex + 1,
      hasBothKeyValuePair ? equalityIndex : l
    );
    if (hasBothKeyValuePair || key.length > 0) {
      if (flags & 1)
        key = key.replace(plusRegex, " ");
      if (flags & 2)
        key = decode(key) || key;
      if (!result[key]) {
        if (hasBothKeyValuePair) {
          value = input.slice(equalityIndex + 1, l);
          if (flags & 4)
            value = value.replace(plusRegex, " ");
          if (flags & 8)
            value = decode(value) || value;
        }
        result[key] = value;
      }
    }
  }
  return result;
}
__name(parseQueryFromURL, "parseQueryFromURL");
var parseQuery = /* @__PURE__ */ __name((input) => {
  const result = {};
  if (typeof input !== "string")
    return result;
  const inputLength = input.length;
  let key = "";
  let value = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let shouldDecodeKey = false;
  let shouldDecodeValue = false;
  let keyHasPlus = false;
  let valueHasPlus = false;
  let hasBothKeyValuePair = false;
  let c = 0;
  for (let i = 0; i < inputLength + 1; i++) {
    if (i !== inputLength)
      c = input.charCodeAt(i);
    else
      c = 38;
    switch (c) {
      case 38: {
        hasBothKeyValuePair = equalityIndex > startingIndex;
        if (!hasBothKeyValuePair)
          equalityIndex = i;
        key = input.slice(startingIndex + 1, equalityIndex);
        if (hasBothKeyValuePair || key.length > 0) {
          if (keyHasPlus)
            key = key.replace(plusRegex, " ");
          if (shouldDecodeKey)
            key = decode(key) || key;
          if (hasBothKeyValuePair) {
            value = input.slice(equalityIndex + 1, i);
            if (valueHasPlus)
              value = value.replace(plusRegex, " ");
            if (shouldDecodeValue)
              value = decode(value) || value;
          }
          const currentValue = result[key];
          if (currentValue === void 0)
            result[key] = value;
          else {
            if (currentValue.pop)
              currentValue.push(value);
            else
              result[key] = [currentValue, value];
          }
        }
        value = "";
        startingIndex = i;
        equalityIndex = i;
        shouldDecodeKey = false;
        shouldDecodeValue = false;
        keyHasPlus = false;
        valueHasPlus = false;
        break;
      }
      case 61:
        if (equalityIndex <= startingIndex)
          equalityIndex = i;
        else
          shouldDecodeValue = true;
        break;
      case 43:
        if (equalityIndex > startingIndex)
          valueHasPlus = true;
        else
          keyHasPlus = true;
        break;
      case 37:
        if (equalityIndex > startingIndex)
          shouldDecodeValue = true;
        else
          shouldDecodeKey = true;
        break;
    }
  }
  return result;
}, "parseQuery");

// node_modules/elysia/dist/trace.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var ELYSIA_TRACE = Symbol("ElysiaTrace");
var createProcess = /* @__PURE__ */ __name(() => {
  const { promise, resolve } = Promise.withResolvers();
  const { promise: end, resolve: resolveEnd } = Promise.withResolvers();
  const { promise: error4, resolve: resolveError } = Promise.withResolvers();
  const callbacks = [];
  const callbacksEnd = [];
  return [
    (callback) => {
      if (callback)
        callbacks.push(callback);
      return promise;
    },
    (process3) => {
      const processes = [];
      const resolvers = [];
      let groupError = null;
      for (let i = 0; i < (process3.total ?? 0); i++) {
        const { promise: promise2, resolve: resolve2 } = Promise.withResolvers();
        const { promise: end2, resolve: resolveEnd2 } = Promise.withResolvers();
        const { promise: error22, resolve: resolveError2 } = Promise.withResolvers();
        const callbacks2 = [];
        const callbacksEnd2 = [];
        processes.push((callback) => {
          if (callback)
            callbacks2.push(callback);
          return promise2;
        });
        resolvers.push((process22) => {
          const result2 = {
            ...process22,
            end: end2,
            error: error22,
            index: i,
            onStop(callback) {
              if (callback)
                callbacksEnd2.push(callback);
              return end2;
            }
          };
          resolve2(result2);
          for (let i2 = 0; i2 < callbacks2.length; i2++)
            callbacks2[i2](result2);
          return (error32 = null) => {
            const end3 = performance.now();
            if (error32)
              groupError = error32;
            const detail = {
              end: end3,
              error: error32,
              get elapsed() {
                return end3 - process22.begin;
              }
            };
            for (let i2 = 0; i2 < callbacksEnd2.length; i2++)
              callbacksEnd2[i2](detail);
            resolveEnd2(end3);
            resolveError2(error32);
          };
        });
      }
      const result = {
        ...process3,
        end,
        error: error4,
        onEvent(callback) {
          for (let i = 0; i < processes.length; i++)
            processes[i](callback);
        },
        onStop(callback) {
          if (callback)
            callbacksEnd.push(callback);
          return end;
        }
      };
      resolve(result);
      for (let i = 0; i < callbacks.length; i++)
        callbacks[i](result);
      return {
        resolveChild: resolvers,
        resolve(error22 = null) {
          const end2 = performance.now();
          if (!error22 && groupError)
            error22 = groupError;
          const detail = {
            end: end2,
            error: error22,
            get elapsed() {
              return end2 - process3.begin;
            }
          };
          for (let i = 0; i < callbacksEnd.length; i++)
            callbacksEnd[i](detail);
          resolveEnd(end2);
          resolveError(error22);
        }
      };
    }
  ];
}, "createProcess");
var createTracer = /* @__PURE__ */ __name((traceListener) => {
  return (context2) => {
    const [onRequest, resolveRequest] = createProcess();
    const [onParse, resolveParse] = createProcess();
    const [onTransform, resolveTransform] = createProcess();
    const [onBeforeHandle, resolveBeforeHandle] = createProcess();
    const [onHandle, resolveHandle] = createProcess();
    const [onAfterHandle, resolveAfterHandle] = createProcess();
    const [onError, resolveError] = createProcess();
    const [onMapResponse, resolveMapResponse] = createProcess();
    const [onAfterResponse, resolveAfterResponse] = createProcess();
    traceListener({
      // @ts-ignore
      id: context2[ELYSIA_REQUEST_ID],
      context: context2,
      set: context2.set,
      // @ts-ignore
      onRequest,
      // @ts-ignore
      onParse,
      // @ts-ignore
      onTransform,
      // @ts-ignore
      onBeforeHandle,
      // @ts-ignore
      onHandle,
      // @ts-ignore
      onAfterHandle,
      // @ts-ignore
      onMapResponse,
      // @ts-ignore
      onAfterResponse,
      // @ts-ignore
      onError
    });
    return {
      request: resolveRequest,
      parse: resolveParse,
      transform: resolveTransform,
      beforeHandle: resolveBeforeHandle,
      handle: resolveHandle,
      afterHandle: resolveAfterHandle,
      error: resolveError,
      mapResponse: resolveMapResponse,
      afterResponse: resolveAfterResponse
    };
  };
}, "createTracer");

// node_modules/elysia/dist/compose.mjs
var TypeBoxSymbol = {
  optional: Symbol.for("TypeBox.Optional"),
  kind: Symbol.for("TypeBox.Kind")
};
var isOptional = /* @__PURE__ */ __name((validator) => {
  if (!validator)
    return false;
  const schema = validator?.schema;
  if (schema?.[TypeBoxSymbol.kind] === "Import")
    return validator.References().some(isOptional);
  return !!schema && TypeBoxSymbol.optional in schema;
}, "isOptional");
var allocateIf = /* @__PURE__ */ __name((value, condition) => condition ? value : "", "allocateIf");
var defaultParsers = [
  "json",
  "text",
  "urlencoded",
  "arrayBuffer",
  "formdata",
  "application/json",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "text/plain",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "application/x-www-form-urlencoded",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "application/octet-stream",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "multipart/form-data"
];
var hasAdditionalProperties = /* @__PURE__ */ __name((_schema) => {
  if (!_schema)
    return false;
  const schema = _schema?.schema ?? _schema;
  if (schema[TypeBoxSymbol.kind] === "Import" && _schema.References()) {
    return _schema.References().some(hasAdditionalProperties);
  }
  if (schema.anyOf)
    return schema.anyOf.some(hasAdditionalProperties);
  if (schema.someOf)
    return schema.someOf.some(hasAdditionalProperties);
  if (schema.allOf)
    return schema.allOf.some(hasAdditionalProperties);
  if (schema.not)
    return schema.not.some(hasAdditionalProperties);
  if (schema.type === "object") {
    const properties = schema.properties;
    if ("additionalProperties" in schema)
      return schema.additionalProperties;
    if ("patternProperties" in schema)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasAdditionalProperties(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasAdditionalProperties(property.anyOf[i]))
            return true;
      }
      return property.additionalProperties;
    }
    return false;
  }
  return false;
}, "hasAdditionalProperties");
var createReport = /* @__PURE__ */ __name(({
  context: context2 = "c",
  trace: trace3 = [],
  addFn
}) => {
  if (!trace3.length)
    return () => {
      return {
        resolveChild() {
          return () => {
          };
        },
        resolve() {
        }
      };
    };
  for (let i = 0; i < trace3.length; i++)
    addFn(
      `let report${i}, reportChild${i}, reportErr${i}, reportErrChild${i};let trace${i} = ${context2}[ELYSIA_TRACE]?.[${i}] ?? trace[${i}](${context2});
`
    );
  return (event, {
    name,
    total = 0
  } = {}) => {
    if (!name)
      name = "anonymous";
    const reporter = event === "error" ? "reportErr" : "report";
    for (let i = 0; i < trace3.length; i++)
      addFn(
        `${reporter}${i} = trace${i}.${event}({id,event:'${event}',name:'${name}',begin:performance.now(),total:${total}})
`
      );
    return {
      resolve() {
        for (let i = 0; i < trace3.length; i++)
          addFn(`${reporter}${i}.resolve()
`);
      },
      resolveChild(name2) {
        for (let i = 0; i < trace3.length; i++)
          addFn(
            `${reporter}Child${i}=${reporter}${i}.resolveChild?.shift()?.({id,event:'${event}',name:'${name2}',begin:performance.now()})
`
          );
        return (binding2) => {
          for (let i = 0; i < trace3.length; i++) {
            if (binding2)
              addFn(
                `if(${binding2} instanceof Error){${reporter}Child${i}?.(${binding2}) }else{${reporter}Child${i}?.()}`
              );
            else
              addFn(`${reporter}Child${i}?.()
`);
          }
        };
      }
    };
  };
}, "createReport");
var composeValidationFactory = /* @__PURE__ */ __name(({
  injectResponse = "",
  normalize = false,
  validator
}) => ({
  composeValidation: (type2, value = `c.${type2}`) => `c.set.status=422;throw new ValidationError('${type2}',validator.${type2},${value})`,
  composeResponseValidation: (name = "r") => {
    let code = injectResponse + "\n";
    code += `if(${name} instanceof ElysiaCustomStatusResponse){c.set.status=${name}.code
${name}=${name}.response}const isResponse=${name} instanceof Response
switch(c.set.status){`;
    for (const [status, value] of Object.entries(
      validator.response
    )) {
      code += `
case ${status}:if(!isResponse){`;
      if (normalize && "Clean" in value && !hasAdditionalProperties(value))
        code += `${name}=validator.response['${status}'].Clean(${name})
`;
      code += `if(validator.response['${status}'].Check(${name})===false){c.set.status=422
throw new ValidationError('response',validator.response['${status}'],${name})}c.set.status = ${status}}break
`;
    }
    return code + "}";
  }
}), "composeValidationFactory");
var KindSymbol = Symbol.for("TypeBox.Kind");
var hasProperty = /* @__PURE__ */ __name((expectedProperty, _schema) => {
  if (!_schema)
    return;
  const schema = _schema.schema ?? _schema;
  if (schema[TypeBoxSymbol.kind] === "Import")
    return _schema.References().some((schema2) => hasProperty(expectedProperty, schema2));
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (expectedProperty in property)
        return true;
      if (property.type === "object") {
        if (hasProperty(expectedProperty, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++) {
          if (hasProperty(expectedProperty, property.anyOf[i]))
            return true;
        }
      }
    }
    return false;
  }
  return expectedProperty in schema;
}, "hasProperty");
var TransformSymbol = Symbol.for("TypeBox.Transform");
var hasTransform = /* @__PURE__ */ __name((schema) => {
  if (!schema)
    return;
  if (schema.type === "object" && schema.properties) {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasTransform(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasTransform(property.anyOf[i]))
            return true;
      }
      const hasTransformSymbol = TransformSymbol in property;
      if (hasTransformSymbol)
        return true;
    }
    return false;
  }
  return TransformSymbol in schema || schema.properties && TransformSymbol in schema.properties;
}, "hasTransform");
var matchFnReturn = /(?:return|=>) \S+\(/g;
var isAsyncName = /* @__PURE__ */ __name((v) => {
  const fn2 = v?.fn ?? v;
  return fn2.constructor.name === "AsyncFunction";
}, "isAsyncName");
var isAsync = /* @__PURE__ */ __name((v) => {
  const fn2 = v?.fn ?? v;
  if (fn2.constructor.name === "AsyncFunction")
    return true;
  const literal = fn2.toString();
  if (literal.includes("=> response.clone("))
    return false;
  if (literal.includes("await"))
    return true;
  if (literal.includes("async"))
    return true;
  if (literal.includes("=>response.clone("))
    return false;
  return !!literal.match(matchFnReturn);
}, "isAsync");
var isGenerator = /* @__PURE__ */ __name((v) => {
  const fn2 = v?.fn ?? v;
  return fn2.constructor.name === "AsyncGeneratorFunction" || fn2.constructor.name === "GeneratorFunction";
}, "isGenerator");
var composeHandler = /* @__PURE__ */ __name(({
  app: app2,
  path,
  method,
  hooks,
  validator,
  handler,
  allowMeta = false,
  inference,
  asManifest = false
}) => {
  const adapter = app2["~adapter"].composeHandler;
  const adapterHandler = app2["~adapter"].handler;
  const isHandleFn = typeof handler === "function";
  if (!isHandleFn) {
    handler = adapterHandler.mapResponse(handler, {
      // @ts-expect-error private property
      headers: app2.setHeaders ?? {}
    });
    if (hooks.parse?.length && hooks.transform?.length && hooks.beforeHandle?.length && hooks.afterHandle?.length) {
      if (handler instanceof Response)
        return Function(
          "a",
          `return function(){return a.clone()}`
        )(handler);
      return Function("a", "return function(){return a}")(handler);
    }
  }
  const handle = isHandleFn ? `handler(c)` : `handler`;
  const hasAfterResponse = !!hooks.afterResponse?.length;
  const hasTrace = !!hooks.trace?.length;
  let fnLiteral = "";
  inference = sucrose(
    Object.assign({}, hooks, {
      handler
    }),
    inference
  );
  if (adapter.declare) {
    const literal = adapter.declare(inference);
    if (literal)
      fnLiteral += literal;
  }
  if (inference.server)
    fnLiteral += "Object.defineProperty(c,'server',{get:function(){return getServer()}})\n";
  validator.createBody?.();
  validator.createQuery?.();
  validator.createHeaders?.();
  validator.createParams?.();
  validator.createCookie?.();
  validator.createResponse?.();
  const hasValidation = validator.body || validator.headers || validator.params || validator.query || validator.cookie || validator.response;
  const hasQuery = inference.query || !!validator.query;
  const hasBody = method !== "$INTERNALWS" && method !== "GET" && method !== "HEAD" && (inference.body || !!validator.body || !!hooks.parse?.length);
  if (hasBody)
    fnLiteral += `let isParsing=false
`;
  const defaultHeaders = app2.setHeaders;
  const hasDefaultHeaders = defaultHeaders && !!Object.keys(defaultHeaders).length;
  const hasHeaders = inference.headers || validator.headers || adapter.preferWebstandardHeaders !== true && inference.body;
  const hasCookie = inference.cookie || !!validator.cookie;
  const cookieValidator = hasCookie ? getCookieValidator({
    // @ts-expect-error private property
    modules: app2.definitions.typebox,
    validator: validator.cookie,
    defaultConfig: app2.config.cookie,
    dynamic: !!app2.config.aot,
    // @ts-expect-error
    config: validator.cookie?.config ?? {},
    // @ts-expect-error
    models: app2.definitions.type
  }) : void 0;
  const cookieMeta = cookieValidator?.config;
  let encodeCookie = "";
  if (cookieMeta?.sign) {
    if (!cookieMeta.secrets)
      throw new Error(
        `t.Cookie required secret which is not set in (${method}) ${path}.`
      );
    const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
    encodeCookie += "const _setCookie = c.set.cookie\nif(_setCookie){";
    if (cookieMeta.sign === true) {
      encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)){c.set.cookie[key].value=await signCookie(cookie.value,'${secret}')}`;
    } else
      for (const name of cookieMeta.sign)
        encodeCookie += `if(_setCookie['${name}']?.value){c.set.cookie['${name}'].value=await signCookie(_setCookie['${name}'].value,'${secret}')}`;
    encodeCookie += "}\n";
  }
  const normalize = app2.config.normalize;
  const { composeValidation, composeResponseValidation } = composeValidationFactory({
    normalize,
    validator
  });
  if (hasHeaders)
    fnLiteral += adapter.headers;
  if (hasTrace)
    fnLiteral += "const id=c[ELYSIA_REQUEST_ID]\n";
  const report2 = createReport({
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  fnLiteral += "try{";
  if (hasCookie) {
    const get = /* @__PURE__ */ __name((name, defaultValue) => {
      const value = cookieMeta?.[name] ?? defaultValue;
      if (!value)
        return typeof defaultValue === "string" ? `${name}:"${defaultValue}",` : `${name}:${defaultValue},`;
      if (typeof value === "string")
        return `${name}:'${value}',`;
      if (value instanceof Date)
        return `${name}: new Date(${value.getTime()}),`;
      return `${name}:${value},`;
    }, "get");
    const options = cookieMeta ? `{secrets:${cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? `'${cookieMeta.secrets}'` : "[" + cookieMeta.secrets.reduce(
      (a, b) => a + `'${b}',`,
      ""
    ) + "]" : "undefined"},sign:${cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? "[" + cookieMeta.sign.reduce(
      (a, b) => a + `'${b}',`,
      ""
    ) + "]" : "undefined"},` + get("domain") + get("expires") + get("httpOnly") + get("maxAge") + get("path", "/") + get("priority") + get("sameSite") + get("secure") + "}" : "undefined";
    if (hasHeaders)
      fnLiteral += `
c.cookie=await parseCookie(c.set,c.headers.cookie,${options})
`;
    else
      fnLiteral += `
c.cookie=await parseCookie(c.set,c.request.headers.get('cookie'),${options})
`;
  }
  if (hasQuery) {
    const destructured = [];
    if (validator.query && validator.query.schema.type === "object") {
      const properties = validator.query.schema.properties;
      if (!hasAdditionalProperties(validator.query))
        for (let [key, _value] of Object.entries(properties)) {
          let value = _value;
          if (value && TypeBoxSymbol.optional in value && value.type === "array" && value.items)
            value = value.items;
          const { type: type2, anyOf } = value;
          const isArray = type2 === "array" || anyOf?.some(
            (v) => v.type === "string" && v.format === "ArrayString"
          );
          destructured.push({
            key,
            isArray,
            isNestedObjectArray: isArray && value.items?.type === "object" || !!value.items?.anyOf?.some(
              // @ts-expect-error
              (x) => x.type === "object" || x.type === "array"
            ),
            isObject: type2 === "object" || anyOf?.some(
              (v) => v.type === "string" && v.format === "ArrayString"
            ),
            anyOf: !!anyOf
          });
        }
    }
    if (!destructured.length) {
      fnLiteral += "if(c.qi===-1){c.query={}}else{c.query=parseQueryFromURL(c.url.slice(c.qi + 1))}";
    } else {
      fnLiteral += `if(c.qi!==-1){let url = '&' + decodeURIComponent(c.url.slice(c.qi + 1))
`;
      let index = 0;
      for (const {
        key,
        isArray,
        isObject: isObject2,
        isNestedObjectArray,
        anyOf
      } of destructured) {
        const init2 = (index === 0 ? "let " : "") + `memory=url.indexOf('&${key}=')
let a${index}
`;
        if (isArray) {
          fnLiteral += init2;
          if (isNestedObjectArray)
            fnLiteral += `while(memory!==-1){const start=memory+${key.length + 2}
memory=url.indexOf('&',start)
if(a${index}===undefined)
a${index}=''
else
a${index}+=','
let temp
if(memory===-1)temp=decodeURIComponent(url.slice(start).replace(/\\+/g,' '))
else temp=decodeURIComponent(url.slice(start, memory).replace(/\\+/g,' '))
const charCode = temp.charCodeAt(0)
if(charCode !== 91 && charCode !== 123)
temp='"'+temp+'"'
a${index} += temp
if(memory === -1)break
memory=url.indexOf('&${key}=',memory)
if(memory === -1)break}try{if(a${index}.charCodeAt(0) === 91)a${index} = JSON.parse(a${index})
else
a${index}=JSON.parse('['+a${index}+']')}catch{}
`;
          else
            fnLiteral += `while(memory!==-1){const start=memory+${key.length + 2}
memory=url.indexOf('&',start)
if(a${index}===undefined)a${index}=[]
if(memory===-1){a${index}.push(decodeURIComponent(url.slice(start)).replace(/\\+/g,' '))
break}else a${index}.push(decodeURIComponent(url.slice(start, memory)).replace(/\\+/g,' '))
memory=url.indexOf('&${key}=',memory)
if(memory===-1) break
}`;
        } else if (isObject2)
          fnLiteral += init2 + `if(memory!==-1){const start=memory+${key.length + 2}
memory=url.indexOf('&',start)
if(memory===-1)a${index}=decodeURIComponent(url.slice(start).replace(/\\+/g,' '))else a${index}=decodeURIComponent(url.slice(start,memory).replace(/\\+/g,' '))if(a${index}!==undefined)try{a${index}=JSON.parse(a${index})}catch{}}`;
        else {
          fnLiteral += init2 + `if(memory!==-1){const start=memory+${key.length + 2}
memory=url.indexOf('&',start)
if(memory===-1)a${index}=decodeURIComponent(url.slice(start).replace(/\\+/g,' '))
else{a${index}=decodeURIComponent(url.slice(start,memory).replace(/\\+/g,' '))`;
          if (anyOf)
            fnLiteral += `
let deepMemory=url.indexOf('&${key}=',memory)
if(deepMemory!==-1){a${index}=[a${index}]
let first=true
while(true){const start=deepMemory+${key.length + 2}
if(first)first=false
else deepMemory = url.indexOf('&', start)
let value
if(deepMemory===-1)value=decodeURIComponent(url.slice(start).replace(/\\+/g,' '))
else value=decodeURIComponent(url.slice(start, deepMemory).replace(/\\+/g,' '))
const vStart=value.charCodeAt(0)
const vEnd=value.charCodeAt(value.length - 1)
if((vStart===91&&vEnd===93)||(vStart===123&&vEnd===125))
try{a${index}.push(JSON.parse(value))}catch{a${index}.push(value)}if(deepMemory===-1)break}}`;
          fnLiteral += "}}";
        }
        index++;
        fnLiteral += "\n";
      }
      fnLiteral += `c.query={` + destructured.map(({ key }, index2) => `'${key}':a${index2}`).join(",") + `}`;
      fnLiteral += `} else c.query = {}
`;
    }
  }
  const isAsyncHandler = typeof handler === "function" && isAsync(handler);
  const saveResponse = hasTrace || hooks.afterResponse?.length ? "c.response= " : "";
  const maybeAsync = hasCookie || hasBody || isAsyncHandler || !!hooks.parse?.length || !!hooks.afterHandle?.some(isAsync) || !!hooks.beforeHandle?.some(isAsync) || !!hooks.transform?.some(isAsync) || !!hooks.mapResponse?.some(isAsync);
  const maybeStream = (typeof handler === "function" ? isGenerator(handler) : false) || !!hooks.beforeHandle?.some(isGenerator) || !!hooks.afterHandle?.some(isGenerator) || !!hooks.transform?.some(isGenerator);
  const hasSet = inference.cookie || inference.set || hasHeaders || hasTrace || validator.response || isHandleFn && hasDefaultHeaders || maybeStream;
  const mapResponseContext = adapter.mapResponseContext ? `,${adapter.mapResponseContext}` : "";
  if (inference.route)
    fnLiteral += `c.route=\`${path}\`
`;
  const parseReporter = report2("parse", {
    total: hooks.parse?.length
  });
  if (hasBody) {
    const isOptionalBody = isOptional(validator.body);
    const hasBodyInference = !!hooks.parse?.length || inference.body || validator.body;
    if (adapter.parser.declare)
      fnLiteral += adapter.parser.declare;
    fnLiteral += "\nisParsing=true\n";
    const parser = typeof hooks.parse === "string" ? hooks.parse : Array.isArray(hooks.parse) && hooks.parse.length === 1 ? typeof hooks.parse[0] === "string" ? hooks.parse[0] : typeof hooks.parse[0].fn === "string" ? hooks.parse[0].fn : void 0 : void 0;
    if (parser && defaultParsers.includes(parser)) {
      const reporter = report2("parse", {
        total: hooks.parse?.length
      });
      switch (parser) {
        case "json":
        case "application/json":
          fnLiteral += adapter.parser.json(isOptionalBody);
          break;
        case "text":
        case "text/plain":
          fnLiteral += adapter.parser.text(isOptionalBody);
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          fnLiteral += adapter.parser.urlencoded(isOptionalBody);
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
          break;
        case "formdata":
        case "multipart/form-data":
          fnLiteral += adapter.parser.formData(isOptionalBody);
          break;
        default:
          if (parser[0] in app2["~parser"]) {
            fnLiteral += hasHeaders ? `let contentType = c.headers['content-type']` : `let contentType = c.request.headers.get('content-type')`;
            fnLiteral += `
if(contentType){const index=contentType.indexOf(';')
if(index!==-1)contentType=contentType.substring(0, index)}
else{contentType=''}c.contentType=contentType
`;
            fnLiteral += `let result=parser['${parser}'](c, contentType)
if(result instanceof Promise)result=await result
if(result instanceof ElysiaCustomStatusResponse)throw result
if(result!==undefined)c.body=result
delete c.contentType
`;
          }
          break;
      }
      reporter.resolve();
    } else if (hasBodyInference) {
      fnLiteral += "\n";
      fnLiteral += hasHeaders ? `let contentType = c.headers['content-type']` : `let contentType = c.request.headers.get('content-type')`;
      fnLiteral += `
if(contentType){const index=contentType.indexOf(';')
if(index!==-1)contentType=contentType.substring(0, index)}
else{contentType=''}c.contentType=contentType
`;
      if (hooks.parse?.length)
        fnLiteral += `let used=false
`;
      const reporter = report2("parse", {
        total: hooks.parse?.length
      });
      let hasDefaultParser = false;
      if (hooks.parse)
        for (let i = 0; i < hooks.parse.length; i++) {
          const name = `bo${i}`;
          if (i !== 0)
            fnLiteral += `
if(!used){`;
          if (typeof hooks.parse[i].fn === "string") {
            const endUnit = reporter.resolveChild(
              hooks.parse[i].fn
            );
            switch (hooks.parse[i].fn) {
              case "json":
              case "application/json":
                hasDefaultParser = true;
                fnLiteral += adapter.parser.json(isOptionalBody);
                break;
              case "text":
              case "text/plain":
                hasDefaultParser = true;
                fnLiteral += adapter.parser.text(isOptionalBody);
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                hasDefaultParser = true;
                fnLiteral += adapter.parser.urlencoded(isOptionalBody);
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                hasDefaultParser = true;
                fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
                break;
              case "formdata":
              case "multipart/form-data":
                hasDefaultParser = true;
                fnLiteral += adapter.parser.formData(isOptionalBody);
                break;
              default:
                fnLiteral += `${name}=parser['${hooks.parse[i].fn}'](c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true}
`;
            }
            endUnit();
          } else {
            const endUnit = reporter.resolveChild(
              hooks.parse[i].fn.name
            );
            fnLiteral += `let ${name}=e.parse[${i}]
${name}=${name}(c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true}`;
            endUnit();
          }
          if (i !== 0)
            fnLiteral += `}`;
          if (hasDefaultParser)
            break;
        }
      reporter.resolve();
      if (!hasDefaultParser) {
        if (hooks.parse?.length)
          fnLiteral += `
if(!used){
if(!contentType) throw new ParseError()
`;
        fnLiteral += `switch(contentType){`;
        fnLiteral += `case 'application/json':
` + adapter.parser.json(isOptionalBody) + `break
case 'text/plain':` + adapter.parser.text(isOptionalBody) + `break
case 'application/x-www-form-urlencoded':` + adapter.parser.urlencoded(isOptionalBody) + `break
case 'application/octet-stream':` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 'multipart/form-data':` + adapter.parser.formData(isOptionalBody) + `break
`;
        for (const key of Object.keys(app2["~parser"]))
          fnLiteral += `case '${key}':let bo${key}=parser['${key}'](c,contentType)
if(bo${key} instanceof Promise)bo${key}=await bo${key}
if(bo${key} instanceof ElysiaCustomStatusResponse)throw result
if(bo${key}!==undefined)c.body=bo${key}
break
`;
        if (hooks.parse?.length)
          fnLiteral += "}";
        fnLiteral += "}";
      }
    }
    fnLiteral += "\ndelete c.contentType";
    fnLiteral += "\nisParsing=false\n";
  }
  parseReporter.resolve();
  if (hooks?.transform) {
    const reporter = report2("transform", {
      total: hooks.transform.length
    });
    if (hooks.transform.length)
      fnLiteral += "let transformed\n";
    for (let i = 0; i < hooks.transform.length; i++) {
      const transform = hooks.transform[i];
      const endUnit = reporter.resolveChild(transform.fn.name);
      fnLiteral += isAsync(transform) ? `transformed=await e.transform[${i}](c)
` : `transformed=e.transform[${i}](c)
`;
      if (transform.subType === "mapDerive")
        fnLiteral += `if(transformed instanceof ElysiaCustomStatusResponse)throw transformed
else{transformed.request=c.request
transformed.store=c.store
transformed.qi=c.qi
transformed.path=c.path
transformed.url=c.url
transformed.redirect=c.redirect
transformed.set=c.set
transformed.error=c.error
c=transformed}`;
      else
        fnLiteral += `if(transformed instanceof ElysiaCustomStatusResponse)throw transformed
else Object.assign(c,transformed)
`;
      endUnit();
    }
    reporter.resolve();
  }
  if (validator) {
    if (validator.headers) {
      if (normalize && "Clean" in validator.headers && !hasAdditionalProperties(validator.headers))
        fnLiteral += "c.headers=validator.headers.Clean(c.headers);\n";
      if (hasProperty("default", validator.headers))
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.headers.schema,
            {}
          )
        )) {
          const parsed = typeof value === "object" ? JSON.stringify(value) : typeof value === "string" ? `'${value}'` : value;
          if (parsed !== void 0)
            fnLiteral += `c.headers['${key}']??=${parsed}
`;
        }
      if (isOptional(validator.headers))
        fnLiteral += `if(isNotEmpty(c.headers)){`;
      fnLiteral += `if(validator.headers.Check(c.headers) === false){` + composeValidation("headers") + "}";
      if (hasTransform(validator.headers.schema))
        fnLiteral += `c.headers=validator.headers.Decode(c.headers)
`;
      if (isOptional(validator.headers))
        fnLiteral += "}";
    }
    if (validator.params) {
      if (hasProperty("default", validator.params))
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.params.schema,
            {}
          )
        )) {
          const parsed = typeof value === "object" ? JSON.stringify(value) : typeof value === "string" ? `'${value}'` : value;
          if (parsed !== void 0)
            fnLiteral += `c.params['${key}']??=${parsed}
`;
        }
      fnLiteral += `if(validator.params.Check(c.params)===false){` + composeValidation("params") + "}";
      if (hasTransform(validator.params.schema))
        fnLiteral += `c.params=validator.params.Decode(c.params)
`;
    }
    if (validator.query) {
      if (normalize && "Clean" in validator.query && !hasAdditionalProperties(validator.query))
        fnLiteral += "c.query=validator.query.Clean(c.query)\n";
      if (hasProperty("default", validator.query))
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.query.schema,
            {}
          )
        )) {
          const parsed = typeof value === "object" ? JSON.stringify(value) : typeof value === "string" ? `'${value}'` : value;
          if (parsed !== void 0)
            fnLiteral += `if(c.query['${key}']===undefined)c.query['${key}']=${parsed}
`;
        }
      if (isOptional(validator.query))
        fnLiteral += `if(isNotEmpty(c.query)){`;
      fnLiteral += `if(validator.query.Check(c.query)===false){` + composeValidation("query") + `}`;
      if (hasTransform(validator.query.schema))
        fnLiteral += `c.query=validator.query.Decode(Object.assign({},c.query))
`;
      if (isOptional(validator.query))
        fnLiteral += `}`;
    }
    if (validator.body) {
      if (normalize && "Clean" in validator.body && !hasAdditionalProperties(validator.body))
        fnLiteral += "c.body=validator.body.Clean(c.body)\n";
      const doesHaveTransform = hasTransform(validator.body.schema);
      if (doesHaveTransform || isOptional(validator.body))
        fnLiteral += `const isNotEmptyObject=c.body&&(typeof c.body==="object"&&isNotEmpty(c.body))
`;
      if (hasProperty("default", validator.body)) {
        const value = value_exports2.Default(
          // @ts-expect-error private property
          validator.body.schema,
          // @ts-expect-error private property
          validator.body.schema.type === "object" ? {} : void 0
        );
        const parsed = typeof value === "object" ? JSON.stringify(value) : typeof value === "string" ? `'${value}'` : value;
        fnLiteral += `if(validator.body.Check(c.body)===false){if(typeof c.body==='object')c.body=Object.assign(${parsed},c.body)
else c.body=${parsed}
`;
        if (isOptional(validator.body))
          fnLiteral += `if(isNotEmptyObject&&validator.body.Check(c.body)===false){` + composeValidation("body") + "}";
        else
          fnLiteral += `if(validator.body.Check(c.body)===false){` + composeValidation("body") + `}`;
        fnLiteral += "}";
      } else {
        if (isOptional(validator.body))
          fnLiteral += `if(isNotEmptyObject&&validator.body.Check(c.body)===false){` + composeValidation("body") + "}";
        else
          fnLiteral += `if(validator.body.Check(c.body)===false){` + composeValidation("body") + "}";
      }
      if (doesHaveTransform)
        fnLiteral += `if(isNotEmptyObject)c.body=validator.body.Decode(c.body)
`;
    }
    if (cookieValidator && isNotEmpty(
      // @ts-ignore
      cookieValidator?.schema?.properties ?? // @ts-ignore
      cookieValidator?.schema?.schema ?? {}
    )) {
      fnLiteral += `const cookieValue={}
for(const [key,value] of Object.entries(c.cookie))cookieValue[key]=value.value
`;
      if (hasProperty("default", cookieValidator))
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            cookieValidator.schema,
            {}
          )
        )) {
          fnLiteral += `cookieValue['${key}'] = ${typeof value === "object" ? JSON.stringify(value) : value}
`;
        }
      if (isOptional(validator.cookie))
        fnLiteral += `if(isNotEmpty(c.cookie)){`;
      fnLiteral += `if(validator.cookie.Check(cookieValue)===false){` + composeValidation("cookie", "cookieValue") + "}";
      if (hasTransform(validator.cookie.schema))
        fnLiteral += `for(const [key,value] of Object.entries(validator.cookie.Decode(cookieValue)))c.cookie[key].value=value
`;
      if (isOptional(validator.cookie))
        fnLiteral += `}`;
    }
  }
  if (hooks?.beforeHandle) {
    const reporter = report2("beforeHandle", {
      total: hooks.beforeHandle.length
    });
    let hasResolve = false;
    for (let i = 0; i < hooks.beforeHandle.length; i++) {
      const beforeHandle = hooks.beforeHandle[i];
      const endUnit = reporter.resolveChild(beforeHandle.fn.name);
      const returning = hasReturn(beforeHandle);
      const isResolver = beforeHandle.subType === "resolve" || beforeHandle.subType === "mapResolve";
      if (isResolver) {
        if (!hasResolve) {
          hasResolve = true;
          fnLiteral += "\nlet resolved\n";
        }
        fnLiteral += isAsync(beforeHandle) ? `resolved=await e.beforeHandle[${i}](c);
` : `resolved=e.beforeHandle[${i}](c);
`;
        if (beforeHandle.subType === "mapResolve")
          fnLiteral += `if(resolved instanceof ElysiaCustomStatusResponse)throw resolved
else{resolved.request = c.request
resolved.store = c.store
resolved.qi = c.qi
resolved.path = c.path
resolved.url = c.url
resolved.redirect = c.redirect
resolved.set = c.set
resolved.error = c.error
c = resolved}`;
        else
          fnLiteral += `if(resolved instanceof ElysiaCustomStatusResponse)throw resolved
else Object.assign(c, resolved)
`;
      } else if (!returning) {
        fnLiteral += isAsync(beforeHandle) ? `await e.beforeHandle[${i}](c)
` : `e.beforeHandle[${i}](c)
`;
        endUnit();
      } else {
        fnLiteral += isAsync(beforeHandle) ? `be=await e.beforeHandle[${i}](c)
` : `be=e.beforeHandle[${i}](c)
`;
        endUnit("be");
        fnLiteral += `if(be!==undefined){`;
        reporter.resolve();
        if (hooks.afterHandle?.length) {
          report2("handle", {
            name: isHandleFn ? handler.name : void 0
          }).resolve();
          const reporter2 = report2("afterHandle", {
            total: hooks.afterHandle.length
          });
          for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
            const hook = hooks.afterHandle[i2];
            const returning2 = hasReturn(hook);
            const endUnit2 = reporter2.resolveChild(hook.fn.name);
            fnLiteral += `c.response = be
`;
            if (!returning2) {
              fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i2}](c, be)
` : `e.afterHandle[${i2}](c, be)
`;
            } else {
              fnLiteral += isAsync(hook.fn) ? `af = await e.afterHandle[${i2}](c)
` : `af = e.afterHandle[${i2}](c)
`;
              fnLiteral += `if(af!==undefined) c.response=be=af
`;
            }
            endUnit2("af");
          }
          reporter2.resolve();
        }
        if (validator.response)
          fnLiteral += composeResponseValidation("be");
        const mapResponseReporter = report2("mapResponse", {
          total: hooks.mapResponse?.length
        });
        if (hooks.mapResponse?.length) {
          fnLiteral += `c.response=be
`;
          for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
            const mapResponse2 = hooks.mapResponse[i2];
            const endUnit2 = mapResponseReporter.resolveChild(
              mapResponse2.fn.name
            );
            fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i2}](c)
if(mr!==undefined)be=c.response=mr}`;
            endUnit2();
          }
        }
        mapResponseReporter.resolve();
        fnLiteral += encodeCookie;
        fnLiteral += `return mapEarlyResponse(${saveResponse}be,c.set${mapResponseContext})}
`;
      }
    }
    reporter.resolve();
  }
  if (hooks.afterHandle?.length) {
    const handleReporter = report2("handle", {
      name: isHandleFn ? handler.name : void 0
    });
    if (hooks.afterHandle.length)
      fnLiteral += isAsyncHandler ? `let r=c.response=await ${handle}
` : `let r=c.response=${handle}
`;
    else
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`;
    handleReporter.resolve();
    const reporter = report2("afterHandle", {
      total: hooks.afterHandle.length
    });
    for (let i = 0; i < hooks.afterHandle.length; i++) {
      const hook = hooks.afterHandle[i];
      const returning = hasReturn(hook);
      const endUnit = reporter.resolveChild(hook.fn.name);
      if (!returning) {
        fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i}](c)
` : `e.afterHandle[${i}](c)
`;
        endUnit();
      } else {
        fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i}](c)
` : `af=e.afterHandle[${i}](c)
`;
        endUnit("af");
        if (validator.response) {
          fnLiteral += `if(af!==undefined){`;
          reporter.resolve();
          fnLiteral += composeResponseValidation("af");
          fnLiteral += `c.response=af}`;
        } else {
          fnLiteral += `if(af!==undefined){`;
          reporter.resolve();
          fnLiteral += `c.response=af}`;
        }
      }
    }
    reporter.resolve();
    fnLiteral += `r=c.response
`;
    if (validator.response)
      fnLiteral += composeResponseValidation();
    fnLiteral += encodeCookie;
    const mapResponseReporter = report2("mapResponse", {
      total: hooks.mapResponse?.length
    });
    if (hooks.mapResponse?.length) {
      for (let i = 0; i < hooks.mapResponse.length; i++) {
        const mapResponse2 = hooks.mapResponse[i];
        const endUnit = mapResponseReporter.resolveChild(
          mapResponse2.fn.name
        );
        fnLiteral += `mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=mr
`;
        endUnit();
      }
    }
    mapResponseReporter.resolve();
    if (hasSet)
      fnLiteral += `return mapResponse(${saveResponse}r,c.set${mapResponseContext})
`;
    else
      fnLiteral += `return mapCompactResponse(${saveResponse}r${mapResponseContext})
`;
  } else {
    const handleReporter = report2("handle", {
      name: isHandleFn ? handler.name : void 0
    });
    if (validator.response || hooks.mapResponse?.length) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`;
      handleReporter.resolve();
      if (validator.response)
        fnLiteral += composeResponseValidation();
      report2("afterHandle").resolve();
      const mapResponseReporter = report2("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += "\nc.response=r\n";
        for (let i = 0; i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i];
          const endUnit = mapResponseReporter.resolveChild(
            mapResponse2.fn.name
          );
          fnLiteral += `
if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=mr}
`;
          endUnit();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += encodeCookie;
      if (handler instanceof Response) {
        fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})else return ${handle}.clone()` : `return ${handle}.clone()`;
        fnLiteral += "\n";
      } else if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse}r,c.set${mapResponseContext})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse}r${mapResponseContext})
`;
    } else if (hasCookie || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`;
      handleReporter.resolve();
      report2("afterHandle").resolve();
      const mapResponseReporter = report2("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += "c.response= r\n";
        for (let i = 0; i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i];
          const endUnit = mapResponseReporter.resolveChild(
            mapResponse2.fn.name
          );
          fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=mr}`;
          endUnit();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += encodeCookie;
      if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse}r,c.set${mapResponseContext})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse}r${mapResponseContext})
`;
    } else {
      handleReporter.resolve();
      const handled = isAsyncHandler ? `await ${handle}` : handle;
      report2("afterHandle").resolve();
      if (handler instanceof Response) {
        fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()
` : `return ${handle}.clone()
`;
      } else if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse}${handled},c.set${mapResponseContext})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse}${handled}${mapResponseContext})
`;
    }
  }
  fnLiteral += `
}catch(error){`;
  if (hasBody)
    fnLiteral += `if(isParsing)error=new ParseError()
`;
  if (!maybeAsync)
    fnLiteral += `return(async()=>{`;
  fnLiteral += `const set=c.set
if(!set.status||set.status<300)set.status=error?.status||500
`;
  if (hasTrace && hooks.trace)
    for (let i = 0; i < hooks.trace.length; i++)
      fnLiteral += `report${i}?.resolve(error);reportChild${i}?.(error)
`;
  const errorReporter = report2("error", {
    total: hooks.error?.length
  });
  if (hooks.error?.length) {
    fnLiteral += `c.error=error
`;
    if (hasValidation)
      fnLiteral += `if(error instanceof TypeBoxError){c.code="VALIDATION"
c.set.status=422}else{c.code=error.code??error[ERROR_CODE]??"UNKNOWN"}`;
    else
      fnLiteral += `c.code=error.code??error[ERROR_CODE]??"UNKNOWN"
`;
    fnLiteral += `let er
`;
    for (let i = 0; i < hooks.error.length; i++) {
      const endUnit = errorReporter.resolveChild(hooks.error[i].fn.name);
      if (isAsync(hooks.error[i]))
        fnLiteral += `er=await e.error[${i}](c)
`;
      else
        fnLiteral += `er=e.error[${i}](c)
if(er instanceof Promise)er=await er
`;
      endUnit();
      const mapResponseReporter = report2("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
          const mapResponse2 = hooks.mapResponse[i2];
          const endUnit2 = mapResponseReporter.resolveChild(
            mapResponse2.fn.name
          );
          fnLiteral += `c.response=er
er=e.mapResponse[${i2}](c)
if(er instanceof Promise)er=await er
`;
          endUnit2();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += `er=mapEarlyResponse(er,set${mapResponseContext})
`;
      fnLiteral += `if(er){`;
      if (hasTrace && hooks.trace) {
        for (let i2 = 0; i2 < hooks.trace.length; i2++)
          fnLiteral += `report${i2}.resolve()
`;
        errorReporter.resolve();
      }
      fnLiteral += `return er}`;
    }
  }
  errorReporter.resolve();
  fnLiteral += `return handleError(c,error,true)`;
  if (!maybeAsync)
    fnLiteral += "})()";
  fnLiteral += "}";
  if (hasAfterResponse || hasTrace) {
    fnLiteral += `finally{ `;
    if (!maybeAsync)
      fnLiteral += ";(async()=>{";
    const reporter = report2("afterResponse", {
      total: hooks.afterResponse?.length
    });
    if (hasAfterResponse && hooks.afterResponse) {
      for (let i = 0; i < hooks.afterResponse.length; i++) {
        const endUnit = reporter.resolveChild(
          hooks.afterResponse[i].fn.name
        );
        fnLiteral += `
await e.afterResponse[${i}](c)
`;
        endUnit();
      }
    }
    reporter.resolve();
    if (!maybeAsync)
      fnLiteral += "})()";
    fnLiteral += `}`;
  }
  const adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  let init = `const {handler,handleError,hooks:e, ` + allocateIf(`validator,`, hasValidation) + `mapResponse,mapCompactResponse,mapEarlyResponse,isNotEmpty,utils:{` + allocateIf(`parseQuery,`, hasBody) + allocateIf(`parseQueryFromURL,`, hasQuery) + `},error:{` + allocateIf(`ValidationError,`, hasValidation) + `InternalServerError,` + allocateIf(`ParseError`, hasBody) + `},schema,definitions,ERROR_CODE,` + allocateIf(`parseCookie,`, hasCookie) + allocateIf(`signCookie,`, hasCookie) + allocateIf(`decodeURIComponent,`, hasQuery) + `ElysiaCustomStatusResponse,` + allocateIf(`ELYSIA_TRACE,`, hasTrace) + allocateIf(`ELYSIA_REQUEST_ID,`, hasTrace) + allocateIf("parser,", hooks.parse?.length) + allocateIf(`getServer,`, inference.server) + adapterVariables + allocateIf("TypeBoxError", hasValidation) + `}=hooks
const trace=e.trace?.map(x=>typeof x==='function'?x:x.fn)??[]
return ${maybeAsync ? "async " : ""}function handle(c){`;
  if (hooks.beforeHandle?.length)
    init += "let be\n";
  if (hooks.afterHandle?.length)
    init += "let af\n";
  if (hooks.mapResponse?.length)
    init += "let mr\n";
  if (allowMeta)
    init += "c.schema = schema\nc.defs = definitions\n";
  init += fnLiteral + "}";
  try {
    if (asManifest)
      return Function("hooks", init);
    return Function(
      "hooks",
      init
    )({
      handler,
      hooks: lifeCycleToFn(hooks),
      validator: hasValidation ? validator : void 0,
      // @ts-expect-error
      handleError: app2.handleError,
      mapResponse: adapterHandler.mapResponse,
      mapCompactResponse: adapterHandler.mapCompactResponse,
      mapEarlyResponse: adapterHandler.mapEarlyResponse,
      isNotEmpty,
      utils: {
        parseQuery: hasBody ? parseQuery : void 0,
        parseQueryFromURL: hasQuery ? parseQueryFromURL : void 0
      },
      error: {
        ValidationError: hasValidation ? ValidationError : void 0,
        InternalServerError,
        ParseError: hasBody ? ParseError2 : void 0
      },
      schema: app2.router.history,
      // @ts-expect-error
      definitions: app2.definitions.type,
      ERROR_CODE,
      parseCookie: hasCookie ? parseCookie : void 0,
      signCookie: hasCookie ? signCookie : void 0,
      decodeURIComponent: hasQuery ? decode : void 0,
      ElysiaCustomStatusResponse,
      ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
      ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
      // @ts-expect-error private property
      getServer: () => app2.getServer(),
      TypeBoxError: hasValidation ? TypeBoxError : void 0,
      parser: app2["~parser"],
      ...adapter.inject
    });
  } catch (error22) {
    const debugHooks = lifeCycleToFn(hooks);
    console.log("[Composer] failed to generate optimized handler");
    console.log("---");
    console.log({
      handler: typeof handler === "function" ? handler.toString() : handler,
      instruction: init,
      hooks: {
        ...debugHooks,
        // @ts-expect-error
        transform: debugHooks?.transform?.map?.((x) => x.toString()),
        // @ts-expect-error
        resolve: debugHooks?.resolve?.map?.((x) => x.toString()),
        // @ts-expect-error
        beforeHandle: debugHooks?.beforeHandle?.map?.(
          (x) => x.toString()
        ),
        // @ts-expect-error
        afterHandle: debugHooks?.afterHandle?.map?.(
          (x) => x.toString()
        ),
        // @ts-expect-error
        mapResponse: debugHooks?.mapResponse?.map?.(
          (x) => x.toString()
        ),
        // @ts-expect-error
        parse: debugHooks?.parse?.map?.((x) => x.toString()),
        // @ts-expect-error
        error: debugHooks?.error?.map?.((x) => x.toString()),
        // @ts-expect-error
        afterResponse: debugHooks?.afterResponse?.map?.(
          (x) => x.toString()
        ),
        // @ts-expect-error
        stop: debugHooks?.stop?.map?.((x) => x.toString())
      },
      validator,
      // @ts-expect-error
      definitions: app2.definitions.type,
      error: error22,
      fnLiteral
    });
    console.log("---");
    process.exit(1);
  }
}, "composeHandler");
var composeGeneralHandler = /* @__PURE__ */ __name((app2, { asManifest = false } = {}) => {
  const adapter = app2["~adapter"].composeGeneralHandler;
  app2.router.http.build();
  const error404 = adapter.error404(
    !!app2.event.request?.length,
    !!app2.event.error?.length
  );
  const hasTrace = app2.event.trace?.length;
  let fnLiteral = "";
  const router = app2.router;
  let findDynamicRoute = `const route=router.find(r.method,p)`;
  findDynamicRoute += router.http.root.ALL ? '??router.find("ALL",p)\n' : "\n";
  findDynamicRoute += error404.code;
  findDynamicRoute += `
c.params=route.params
if(route.store.handler)return route.store.handler(c)
return (route.store.handler=route.store.compile())(c)
`;
  let switchMap = ``;
  for (const [path, { code, all }] of Object.entries(
    router.static.http.map
  )) {
    switchMap += `case'${path}':`;
    if (app2.config.strictPath !== true)
      switchMap += `case'${getLoosePath(path)}':`;
    switchMap += `switch(r.method){${code}
` + (all ?? `default: break map`) + "}";
  }
  const maybeAsync = !!app2.event.request?.some(isAsync);
  const adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  fnLiteral += `
const {app,mapEarlyResponse,NotFoundError,randomId,handleError,error,redirect,` + allocateIf(`ELYSIA_TRACE,`, hasTrace) + allocateIf(`ELYSIA_REQUEST_ID,`, hasTrace) + adapterVariables + `}=data
const store=app.singleton.store
const decorator=app.singleton.decorator
const staticRouter=app.router.static.http
const ht=app.router.history
const router=app.router.http
const trace=app.event.trace?.map(x=>typeof x==='function'?x:x.fn)??[]
const notFound=new NotFoundError()
const hoc=app.extender.higherOrderFunctions.map(x=>x.fn)
`;
  if (app2.event.request?.length)
    fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`;
  fnLiteral += error404.declare;
  if (app2.event.trace?.length)
    fnLiteral += `const ` + app2.event.trace.map((_, i) => `tr${i}=app.event.trace[${i}].fn`).join(",") + "\n";
  fnLiteral += `${maybeAsync ? "async " : ""}function map(${adapter.parameters}){`;
  if (app2.event.request?.length)
    fnLiteral += `let re
`;
  fnLiteral += adapter.createContext(app2);
  if (app2.event.trace?.length)
    fnLiteral += `c[ELYSIA_TRACE]=[` + app2.event.trace.map((_, i) => `tr${i}(c)`).join(",") + `]
`;
  const report2 = createReport({
    trace: app2.event.trace,
    addFn(word) {
      fnLiteral += word;
    }
  });
  const reporter = report2("request", {
    total: app2.event.request?.length
  });
  if (app2.event.request?.length) {
    fnLiteral += `try{`;
    for (let i = 0; i < app2.event.request.length; i++) {
      const hook = app2.event.request[i];
      const withReturn = hasReturn(hook);
      const maybeAsync2 = isAsync(hook);
      const endUnit = reporter.resolveChild(app2.event.request[i].fn.name);
      if (withReturn) {
        fnLiteral += `re=mapEarlyResponse(${maybeAsync2 ? "await " : ""}onRequest[${i}](c),c.set)
`;
        endUnit("re");
        fnLiteral += `if(re!==undefined)return re
`;
      } else {
        fnLiteral += `${maybeAsync2 ? "await " : ""}onRequest[${i}](c)
`;
        endUnit();
      }
    }
    fnLiteral += `}catch(error){return app.handleError(c,error,false)}`;
  }
  reporter.resolve();
  fnLiteral += adapter.websocket(app2);
  fnLiteral += `
map:switch(p){
` + switchMap + `default:break}` + findDynamicRoute + `}
`;
  if (app2.extender.higherOrderFunctions.length) {
    let handler = "map";
    for (let i = 0; i < app2.extender.higherOrderFunctions.length; i++)
      handler = `hoc[${i}](${handler},${adapter.parameters})`;
    fnLiteral += `return function hocMap(${adapter.parameters}){return ${handler}(${adapter.parameters})}`;
  } else
    fnLiteral += `return map`;
  const handleError = composeErrorHandler(app2);
  app2.handleError = handleError;
  return Function(
    "data",
    fnLiteral
  )({
    app: app2,
    mapEarlyResponse: app2["~adapter"]["handler"].mapEarlyResponse,
    NotFoundError,
    randomId,
    handleError,
    error: error3,
    redirect,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
    ...adapter.inject
  });
}, "composeGeneralHandler");
var composeErrorHandler = /* @__PURE__ */ __name((app2) => {
  const hooks = app2.event;
  let fnLiteral = "";
  const adapter = app2["~adapter"].composeError;
  const adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  const hasTrace = !!app2.event.trace?.length;
  fnLiteral += `const {app:{event:{error:onErrorContainer,afterResponse:resContainer,mapResponse:_onMapResponse,trace:_trace}},mapResponse,ERROR_CODE,ElysiaCustomStatusResponse,` + allocateIf(`ELYSIA_TRACE,`, hasTrace) + allocateIf(`ELYSIA_REQUEST_ID,`, hasTrace) + adapterVariables + `}=inject
`;
  fnLiteral += `const trace=_trace?.map(x=>typeof x==='function'?x:x.fn)??[]
const onMapResponse=[]
if(_onMapResponse)for(let i=0;i<_onMapResponse.length;i++)onMapResponse.push(_onMapResponse[i].fn??_onMapResponse[i])
delete _onMapResponse
const onError=onErrorContainer?.map(x=>x.fn)??[]
const res=resContainer?.map(x=>x.fn)??[]
return ${app2.event.error?.find(isAsync) || app2.event.mapResponse?.find(isAsync) ? "async " : ""}function(context,error,skipGlobal){`;
  fnLiteral += "";
  if (hasTrace)
    fnLiteral += "const id=context[ELYSIA_REQUEST_ID]\n";
  const report2 = createReport({
    context: "context",
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  fnLiteral += `const set=context.set
let _r
if(!context.code)context.code=error.code??error[ERROR_CODE]
if(!(context.error instanceof Error))context.error=error
if(error instanceof ElysiaCustomStatusResponse){set.status=error.status=error.code
error.message=error.response}`;
  if (adapter.declare)
    fnLiteral += adapter.declare;
  const saveResponse = hasTrace || !!hooks.afterResponse?.length || !!hooks.afterResponse?.length ? "context.response = " : "";
  if (app2.event.error)
    for (let i = 0; i < app2.event.error.length; i++) {
      const handler = app2.event.error[i];
      const response = `${isAsync(handler) ? "await " : ""}onError[${i}](context)
`;
      fnLiteral += "if(skipGlobal!==true){";
      if (hasReturn(handler)) {
        fnLiteral += `_r=${response}
if(_r!==undefined){if(_r instanceof Response)return mapResponse(_r,set${adapter.mapResponseContext})
if(_r instanceof ElysiaCustomStatusResponse){error.status=error.code
error.message = error.response}if(set.status===200||!set.status)set.status=error.status
`;
        const mapResponseReporter2 = report2("mapResponse", {
          total: hooks.mapResponse?.length,
          name: "context"
        });
        if (hooks.mapResponse?.length) {
          for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
            const mapResponse2 = hooks.mapResponse[i2];
            const endUnit = mapResponseReporter2.resolveChild(
              mapResponse2.fn.name
            );
            fnLiteral += `context.response=_r_r=${isAsyncName(mapResponse2) ? "await " : ""}onMapResponse[${i2}](context)
`;
            endUnit();
          }
        }
        mapResponseReporter2.resolve();
        fnLiteral += `return mapResponse(${saveResponse}_r,set${adapter.mapResponseContext})}`;
      } else
        fnLiteral += response;
      fnLiteral += "}";
    }
  fnLiteral += `if(error.constructor.name==="ValidationError"||error.constructor.name==="TransformDecodeError"){if(error.error)error=error.error
set.status=error.status??422
` + adapter.validationError + `}`;
  fnLiteral += `if(error instanceof Error){` + adapter.unknownError + `}`;
  const mapResponseReporter = report2("mapResponse", {
    total: hooks.mapResponse?.length,
    name: "context"
  });
  fnLiteral += "\nif(!context.response)context.response=error.message??error\n";
  if (hooks.mapResponse?.length) {
    fnLiteral += "let mr\n";
    for (let i = 0; i < hooks.mapResponse.length; i++) {
      const mapResponse2 = hooks.mapResponse[i];
      const endUnit = mapResponseReporter.resolveChild(
        mapResponse2.fn.name
      );
      fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}onMapResponse[${i}](context)
if(mr!==undefined)error=context.response=mr}`;
      endUnit();
    }
  }
  mapResponseReporter.resolve();
  fnLiteral += `
return mapResponse(${saveResponse}error,set${adapter.mapResponseContext})}`;
  return Function(
    "inject",
    fnLiteral
  )({
    app: app2,
    mapResponse: app2["~adapter"].handler.mapResponse,
    ERROR_CODE,
    ElysiaCustomStatusResponse,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
    ...adapter.inject
  });
}, "composeErrorHandler");

// node_modules/elysia/dist/dynamic-handle.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var injectDefaultValues = /* @__PURE__ */ __name((typeChecker, obj) => {
  for (const [key, keySchema] of Object.entries(
    // @ts-expect-error private
    typeChecker.schema.properties
  )) {
    obj[key] ??= keySchema.default;
  }
}, "injectDefaultValues");
var createDynamicHandler = /* @__PURE__ */ __name((app2) => {
  const { mapResponse: mapResponse2, mapEarlyResponse: mapEarlyResponse2 } = app2["~adapter"].handler;
  return async (request) => {
    const url = request.url, s = url.indexOf("/", 11), qi = url.indexOf("?", s + 1), path = qi === -1 ? url.substring(s) : url.substring(s, qi);
    const set2 = {
      cookie: {},
      status: 200,
      headers: {}
    };
    const context2 = Object.assign(
      {},
      // @ts-expect-error
      app2.singleton.decorator,
      {
        set: set2,
        // @ts-expect-error
        store: app2.singleton.store,
        request,
        path,
        qi,
        redirect
      }
    );
    try {
      if (app2.event.request)
        for (let i = 0; i < app2.event.request.length; i++) {
          const onRequest = app2.event.request[i].fn;
          let response2 = onRequest(context2);
          if (response2 instanceof Promise)
            response2 = await response2;
          response2 = mapEarlyResponse2(response2, set2);
          if (response2)
            return context2.response = response2;
        }
      const handler = app2.router.dynamic.find(request.method, path) ?? app2.router.dynamic.find("ALL", path);
      if (!handler)
        throw new NotFoundError();
      const { handle, hooks, validator, content } = handler.store;
      let body;
      if (request.method !== "GET" && request.method !== "HEAD") {
        if (content) {
          switch (content) {
            case "application/json":
              body = await request.json();
              break;
            case "text/plain":
              body = await request.text();
              break;
            case "application/x-www-form-urlencoded":
              body = parseQuery(await request.text());
              break;
            case "application/octet-stream":
              body = await request.arrayBuffer();
              break;
            case "multipart/form-data":
              body = {};
              const form2 = await request.formData();
              for (const key of form2.keys()) {
                if (body[key])
                  continue;
                const value = form2.getAll(key);
                if (value.length === 1)
                  body[key] = value[0];
                else
                  body[key] = value;
              }
              break;
          }
        } else {
          let contentType = request.headers.get("content-type");
          if (contentType) {
            const index = contentType.indexOf(";");
            if (index !== -1)
              contentType = contentType.slice(0, index);
            context2.contentType = contentType;
            if (hooks.parse)
              for (let i = 0; i < hooks.parse.length; i++) {
                const hook = hooks.parse[i].fn;
                let temp = hook(context2, contentType);
                if (temp instanceof Promise)
                  temp = await temp;
                if (temp) {
                  body = temp;
                  break;
                }
              }
            delete context2.contentType;
            if (body === void 0) {
              switch (contentType) {
                case "application/json":
                  body = await request.json();
                  break;
                case "text/plain":
                  body = await request.text();
                  break;
                case "application/x-www-form-urlencoded":
                  body = parseQuery(await request.text());
                  break;
                case "application/octet-stream":
                  body = await request.arrayBuffer();
                  break;
                case "multipart/form-data":
                  body = {};
                  const form2 = await request.formData();
                  for (const key of form2.keys()) {
                    if (body[key])
                      continue;
                    const value = form2.getAll(key);
                    if (value.length === 1)
                      body[key] = value[0];
                    else
                      body[key] = value;
                  }
                  break;
              }
            }
          }
        }
      }
      context2.body = body;
      context2.params = handler?.params || void 0;
      context2.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1));
      context2.headers = {};
      for (const [key, value] of request.headers.entries())
        context2.headers[key] = value;
      const cookieMeta = Object.assign(
        {},
        app2.config?.cookie,
        // @ts-expect-error
        validator?.cookie?.config
      );
      const cookieHeaderValue = request.headers.get("cookie");
      context2.cookie = await parseCookie(
        context2.set,
        cookieHeaderValue,
        cookieMeta ? {
          secrets: cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets.join(",") : void 0,
          sign: cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? typeof cookieMeta.sign === "string" ? cookieMeta.sign : cookieMeta.sign.join(",") : void 0
        } : void 0
      );
      const headerValidator = validator?.createHeaders?.();
      if (headerValidator)
        injectDefaultValues(headerValidator, context2.headers);
      const paramsValidator = validator?.createParams?.();
      if (paramsValidator)
        injectDefaultValues(paramsValidator, context2.params);
      const queryValidator = validator?.createQuery?.();
      if (queryValidator)
        injectDefaultValues(queryValidator, context2.query);
      if (hooks.transform)
        for (let i = 0; i < hooks.transform.length; i++) {
          const hook = hooks.transform[i];
          const operation = hook.fn(context2);
          if (hook.subType === "derive") {
            if (operation instanceof Promise)
              Object.assign(context2, await operation);
            else
              Object.assign(context2, operation);
          } else if (operation instanceof Promise)
            await operation;
        }
      if (validator) {
        if (headerValidator) {
          const _header = structuredClone(context2.headers);
          for (const [key, value] of request.headers)
            _header[key] = value;
          if (validator.headers.Check(_header) === false)
            throw new ValidationError(
              "header",
              validator.headers,
              _header
            );
        } else if (validator.headers?.Decode)
          context2.headers = validator.headers.Decode(context2.headers);
        if (paramsValidator?.Check(context2.params) === false) {
          throw new ValidationError(
            "params",
            validator.params,
            context2.params
          );
        } else if (validator.params?.Decode)
          context2.params = validator.params.Decode(context2.params);
        if (queryValidator?.Check(context2.query) === false)
          throw new ValidationError(
            "query",
            validator.query,
            context2.query
          );
        else if (validator.query?.Decode)
          context2.query = validator.query.Decode(context2.query);
        if (validator.createCookie?.()) {
          let cookieValue = {};
          for (const [key, value] of Object.entries(context2.cookie))
            cookieValue[key] = value.value;
          if (validator.cookie.Check(cookieValue) === false)
            throw new ValidationError(
              "cookie",
              validator.cookie,
              cookieValue
            );
          else if (validator.cookie?.Decode)
            cookieValue = validator.cookie.Decode(
              cookieValue
            );
        }
        if (validator.createBody?.()?.Check(body) === false)
          throw new ValidationError("body", validator.body, body);
        else if (validator.body?.Decode)
          context2.body = validator.body.Decode(body);
      }
      if (hooks.beforeHandle)
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          const hook = hooks.beforeHandle[i];
          let response2 = hook.fn(context2);
          if (hook.subType === "resolve") {
            if (response2 instanceof ElysiaCustomStatusResponse) {
              const result = mapEarlyResponse2(
                response2,
                context2.set
              );
              if (result)
                return context2.response = result;
            }
            if (response2 instanceof Promise)
              Object.assign(context2, await response2);
            else
              Object.assign(context2, response2);
            continue;
          } else if (response2 instanceof Promise)
            response2 = await response2;
          if (response2 !== void 0) {
            ;
            context2.response = response2;
            if (hooks.afterHandle)
              for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
                let newResponse = hooks.afterHandle[i2].fn(
                  context2
                );
                if (newResponse instanceof Promise)
                  newResponse = await newResponse;
                if (newResponse)
                  response2 = newResponse;
              }
            const result = mapEarlyResponse2(response2, context2.set);
            if (result)
              return context2.response = result;
          }
        }
      let response = typeof handle === "function" ? handle(context2) : handle;
      if (response instanceof Promise)
        response = await response;
      if (hooks.afterHandle)
        if (!hooks.afterHandle.length) {
          const status = response instanceof ElysiaCustomStatusResponse ? response.code : set2.status ? typeof set2.status === "string" ? StatusMap[set2.status] : set2.status : 200;
          const responseValidator = validator?.createResponse?.()?.[status];
          if (responseValidator?.Check(response) === false)
            throw new ValidationError(
              "response",
              responseValidator,
              response
            );
          else if (responseValidator?.Decode)
            response = responseValidator.Decode(response);
        } else {
          ;
          context2.response = response;
          for (let i = 0; i < hooks.afterHandle.length; i++) {
            let newResponse = hooks.afterHandle[i].fn(
              context2
            );
            if (newResponse instanceof Promise)
              newResponse = await newResponse;
            const result = mapEarlyResponse2(
              newResponse,
              context2.set
            );
            if (result !== void 0) {
              const responseValidator = (
                // @ts-expect-error
                validator?.response?.[result.status]
              );
              if (responseValidator?.Check(result) === false)
                throw new ValidationError(
                  "response",
                  responseValidator,
                  result
                );
              else if (responseValidator?.Decode)
                response = responseValidator.Decode(response);
              return context2.response = result;
            }
          }
        }
      if (context2.set.cookie && cookieMeta?.sign) {
        const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
        if (cookieMeta.sign === true)
          for (const [key, cookie] of Object.entries(
            context2.set.cookie
          ))
            context2.set.cookie[key].value = await signCookie(
              cookie.value,
              "${secret}"
            );
        else {
          const properties = validator?.cookie?.schema?.properties;
          for (const name of cookieMeta.sign) {
            if (!(name in properties))
              continue;
            if (context2.set.cookie[name]?.value) {
              context2.set.cookie[name].value = await signCookie(
                context2.set.cookie[name].value,
                secret
              );
            }
          }
        }
      }
      return mapResponse2(context2.response = response, context2.set);
    } catch (error4) {
      const reportedError = error4 instanceof TransformDecodeError && error4.error ? error4.error : error4;
      return app2.handleError(context2, reportedError);
    } finally {
      if (app2.event.afterResponse)
        for (const afterResponse of app2.event.afterResponse)
          await afterResponse.fn(context2);
    }
  };
}, "createDynamicHandler");
var createDynamicErrorHandler = /* @__PURE__ */ __name((app2) => {
  const { mapResponse: mapResponse2 } = app2["~adapter"].handler;
  return async (context2, error4) => {
    const errorContext = Object.assign(context2, { error: error4, code: error4.code });
    errorContext.set = context2.set;
    if (app2.event.error)
      for (let i = 0; i < app2.event.error.length; i++) {
        const hook = app2.event.error[i];
        let response = hook.fn(errorContext);
        if (response instanceof Promise)
          response = await response;
        if (response !== void 0 && response !== null)
          return context2.response = mapResponse2(
            response,
            context2.set
          );
      }
    return new Response(
      typeof error4.cause === "string" ? error4.cause : error4.message,
      {
        headers: context2.set.headers,
        status: error4.status ?? 500
      }
    );
  };
}, "createDynamicErrorHandler");

// node_modules/elysia/dist/universal/file.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/elysia/dist/index.mjs
var Elysia = class {
  constructor(config2 = {}) {
    this.server = null;
    this.dependencies = {};
    this._routes = {};
    this._types = {
      Prefix: "",
      Singleton: {},
      Definitions: {},
      Metadata: {}
    };
    this._ephemeral = {};
    this._volatile = {};
    this.singleton = {
      decorator: {},
      store: {},
      derive: {},
      resolve: {}
    };
    this.definitions = {
      typebox: t.Module({}),
      type: {},
      error: {}
    };
    this.extender = {
      macros: [],
      higherOrderFunctions: []
    };
    this.validator = {
      global: null,
      scoped: null,
      local: null,
      getCandidate() {
        return mergeSchemaValidator(
          mergeSchemaValidator(this.global, this.scoped),
          this.local
        );
      }
    };
    this.event = {};
    this.telemetry = {
      stack: void 0
    };
    this.router = {
      "~http": void 0,
      get http() {
        if (!this["~http"])
          this["~http"] = new Memoirist({ lazy: true });
        return this["~http"];
      },
      "~dynamic": void 0,
      // Use in non-AOT mode
      get dynamic() {
        if (!this["~dynamic"])
          this["~dynamic"] = new Memoirist();
        return this["~dynamic"];
      },
      static: {
        http: {
          static: {},
          // handlers: [] as ComposedHandler[],
          map: {},
          all: ""
        },
        // Static WS Router is consists of pathname and websocket handler index to compose
        ws: {}
      },
      history: []
    };
    this.routeTree = /* @__PURE__ */ new Map();
    this.inference = {
      body: false,
      cookie: false,
      headers: false,
      query: false,
      set: false,
      server: false,
      request: false,
      route: false
    };
    this["~parser"] = {};
    this.handle = async (request) => this.fetch(request);
    this.fetch = (request) => {
      return (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this))(request);
    };
    this.handleError = async (context2, error22) => {
      return (this.handleError = this.config.aot ? composeErrorHandler(this) : createDynamicErrorHandler(this))(context2, error22);
    };
    this.outerErrorHandler = (error22) => new Response(error22.message || error22.name || "Error", {
      // @ts-ignore
      status: error22?.status ?? 500
    });
    this.listen = (options, callback) => {
      this["~adapter"].listen(this)(options, callback);
      return this;
    };
    this.stop = async (closeActiveConnections) => {
      if (!this.server)
        throw new Error(
          "Elysia isn't running. Call `app.listen` to start the server."
        );
      if (this.server) {
        this.server.stop(closeActiveConnections);
        this.server = null;
        if (this.event.stop?.length)
          for (let i = 0; i < this.event.stop.length; i++)
            this.event.stop[i].fn(this);
      }
    };
    if (config2.tags) {
      if (!config2.detail)
        config2.detail = {
          tags: config2.tags
        };
      else
        config2.detail.tags = config2.tags;
    }
    if (config2.nativeStaticResponse === void 0)
      config2.nativeStaticResponse = true;
    this.config = {};
    this.applyConfig(config2 ?? {});
    this["~adapter"] = config2.adapter ?? (typeof Bun !== "undefined" ? BunAdapter : WebStandardAdapter);
    if (config2?.analytic && (config2?.name || config2?.seed !== void 0))
      this.telemetry.stack = new Error().stack;
  }
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  getServer() {
    return this.server;
  }
  get promisedModules() {
    if (!this._promisedModules)
      this._promisedModules = new PromiseGroup();
    return this._promisedModules;
  }
  env(model, _env = env4) {
    const validator = getSchemaValidator(model, {
      modules: this.definitions.typebox,
      dynamic: true,
      additionalProperties: true,
      coerce: true
    });
    if (validator.Check(_env) === false) {
      const error22 = new ValidationError("env", model, _env);
      throw new Error(error22.all.map((x) => x.summary).join("\n"));
    }
    return this;
  }
  /**
   * @private DO_NOT_USE_OR_YOU_WILL_BE_FIRED
   * @version 1.1.0
   *
   * ! Do not use unless you now exactly what you are doing
   * ? Add Higher order function to Elysia.fetch
   */
  wrap(fn2) {
    this.extender.higherOrderFunctions.push({
      checksum: checksum(
        JSON.stringify({
          name: this.config.name,
          seed: this.config.seed,
          content: fn2.toString()
        })
      ),
      fn: fn2
    });
    return this;
  }
  applyMacro(localHook) {
    if (this.extender.macros.length) {
      const manage = createMacroManager({
        globalHook: this.event,
        localHook
      });
      const manager = {
        events: {
          global: this.event,
          local: localHook
        },
        get onParse() {
          return manage("parse");
        },
        get onTransform() {
          return manage("transform");
        },
        get onBeforeHandle() {
          return manage("beforeHandle");
        },
        get onAfterHandle() {
          return manage("afterHandle");
        },
        get mapResponse() {
          return manage("mapResponse");
        },
        get onAfterResponse() {
          return manage("afterResponse");
        },
        get onError() {
          return manage("error");
        }
      };
      for (const macro of this.extender.macros)
        traceBackMacro(macro.fn(manager), localHook, manage);
    }
  }
  applyConfig(config2) {
    this.config = {
      prefix: "",
      aot: env4.ELYSIA_AOT !== "false",
      normalize: true,
      ...config2,
      cookie: {
        path: "/",
        ...config2?.cookie
      },
      experimental: config2?.experimental ?? {},
      seed: config2?.seed === void 0 ? "" : config2?.seed
    };
    return this;
  }
  get models() {
    const models = {};
    for (const name of Object.keys(this.definitions.type))
      models[name] = getSchemaValidator(
        // @ts-expect-error
        this.definitions.typebox.Import(name)
      );
    models.modules = this.definitions.typebox;
    return models;
  }
  add(method, path, handle, localHook, { allowMeta = false, skipPrefix = false } = {
    allowMeta: false,
    skipPrefix: false
  }) {
    localHook = compressHistoryHook(localHookToLifeCycleStore(localHook));
    if (path !== "" && path.charCodeAt(0) !== 47)
      path = "/" + path;
    if (this.config.prefix && !skipPrefix)
      path = this.config.prefix + path;
    if (localHook?.type)
      switch (localHook.type) {
        case "text":
          localHook.type = "text/plain";
          break;
        case "json":
          localHook.type = "application/json";
          break;
        case "formdata":
          localHook.type = "multipart/form-data";
          break;
        case "urlencoded":
          localHook.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          localHook.type = "application/octet-stream";
          break;
        default:
          break;
      }
    const models = this.definitions.type;
    const dynamic = !this.config.aot;
    const instanceValidator = { ...this.validator.getCandidate() };
    const cloned = {
      body: localHook?.body ?? instanceValidator?.body,
      headers: localHook?.headers ?? instanceValidator?.headers,
      params: localHook?.params ?? instanceValidator?.params,
      query: localHook?.query ?? instanceValidator?.query,
      cookie: localHook?.cookie ?? instanceValidator?.cookie,
      response: localHook?.response ?? instanceValidator?.response
    };
    const cookieValidator = /* @__PURE__ */ __name(() => cloned.cookie ? getCookieValidator({
      modules,
      validator: cloned.cookie,
      defaultConfig: this.config.cookie,
      config: cloned.cookie?.config ?? {},
      dynamic,
      models
    }) : void 0, "cookieValidator");
    const normalize = this.config.normalize;
    const modules = this.definitions.typebox;
    const validator = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.schema === true ? {
      body: getSchemaValidator(cloned.body, {
        modules,
        dynamic,
        models,
        normalize,
        additionalCoerce: coercePrimitiveRoot()
      }),
      headers: getSchemaValidator(cloned.headers, {
        modules,
        dynamic,
        models,
        additionalProperties: !this.config.normalize,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      params: getSchemaValidator(cloned.params, {
        modules,
        dynamic,
        models,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      query: getSchemaValidator(cloned.query, {
        modules,
        dynamic,
        models,
        normalize,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      cookie: cookieValidator(),
      response: getResponseSchemaValidator(cloned.response, {
        modules,
        dynamic,
        models,
        normalize
      })
    } : {
      createBody() {
        if (this.body)
          return this.body;
        return this.body = getSchemaValidator(
          cloned.body,
          {
            modules,
            dynamic,
            models,
            normalize,
            additionalCoerce: coercePrimitiveRoot()
          }
        );
      },
      createHeaders() {
        if (this.headers)
          return this.headers;
        return this.headers = getSchemaValidator(
          cloned.headers,
          {
            modules,
            dynamic,
            models,
            additionalProperties: !normalize,
            coerce: true,
            additionalCoerce: stringToStructureCoercions()
          }
        );
      },
      createParams() {
        if (this.params)
          return this.params;
        return this.params = getSchemaValidator(
          cloned.params,
          {
            modules,
            dynamic,
            models,
            coerce: true,
            additionalCoerce: stringToStructureCoercions()
          }
        );
      },
      createQuery() {
        if (this.query)
          return this.query;
        return this.query = getSchemaValidator(
          cloned.query,
          {
            modules,
            dynamic,
            models,
            coerce: true,
            additionalCoerce: stringToStructureCoercions()
          }
        );
      },
      createCookie() {
        if (this.cookie)
          return this.cookie;
        return this.cookie = cookieValidator();
      },
      createResponse() {
        if (this.response)
          return this.response;
        return this.response = getResponseSchemaValidator(
          cloned.response,
          {
            modules,
            dynamic,
            models,
            normalize
          }
        );
      }
    };
    localHook = mergeHook(
      localHook,
      compressHistoryHook(instanceValidator)
    );
    if (localHook.tags) {
      if (!localHook.detail)
        localHook.detail = {
          tags: localHook.tags
        };
      else
        localHook.detail.tags = localHook.tags;
    }
    if (isNotEmpty(this.config.detail))
      localHook.detail = mergeDeep(
        Object.assign({}, this.config.detail),
        localHook.detail
      );
    this.applyMacro(localHook);
    const hooks = compressHistoryHook(mergeHook(this.event, localHook));
    if (this.config.aot === false) {
      this.router.dynamic.add(method, path, {
        validator,
        hooks,
        content: localHook?.type,
        handle
      });
      if (this.config.strictPath === false)
        this.router.dynamic.add(method, getLoosePath(path), {
          validator,
          hooks,
          content: localHook?.type,
          handle
        });
      this.router.history.push({
        method,
        path,
        composed: null,
        handler: handle,
        hooks
      });
      return;
    }
    const shouldPrecompile = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.compose === true;
    const inference = cloneInference(this.inference);
    const adapter = this["~adapter"].handler;
    const staticHandler = typeof handle !== "function" && typeof adapter.createStaticHandler === "function" ? adapter.createStaticHandler(handle, hooks, this.setHeaders) : void 0;
    const nativeStaticHandler = typeof handle !== "function" ? adapter.createNativeStaticHandler?.(
      handle,
      hooks,
      this.setHeaders
    ) : void 0;
    if (this.config.nativeStaticResponse === true && nativeStaticHandler && (method === "GET" || method === "ALL"))
      this.router.static.http.static[path] = nativeStaticHandler();
    let compile = /* @__PURE__ */ __name((asManifest = false) => composeHandler({
      app: this,
      path,
      method,
      hooks,
      validator,
      handler: typeof handle !== "function" && typeof adapter.createStaticHandler !== "function" ? () => handle : handle,
      allowMeta,
      inference,
      asManifest
    }), "compile");
    if (this.routeTree.has(method + path))
      for (let i = 0; i < this.router.history.length; i++) {
        const route = this.router.history[i];
        if (route.path === path && route.method === method) {
          const removed = this.router.history.splice(i, 1)[0];
          if (removed && this.routeTree.has(removed?.method + removed?.path))
            this.routeTree.delete(removed.method + removed.path);
        }
      }
    else
      this.routeTree.set(method + path, this.router.history.length);
    const history = this.router.history;
    const index = this.router.history.length;
    const mainHandler = shouldPrecompile ? compile() : (ctx) => {
      const temp = (history[index].composed = compile())(ctx);
      compile = void 0;
      return temp;
    };
    if (shouldPrecompile)
      compile = void 0;
    const isWebSocket = method === "$INTERNALWS";
    this.router.history.push(
      // @ts-ignore
      Object.assign(
        {
          method,
          path,
          composed: mainHandler,
          handler: handle,
          hooks
        },
        localHook.webSocket ? { websocket: localHook.websocket } : {}
      )
    );
    const staticRouter = this.router.static.http;
    const handler = {
      handler: shouldPrecompile ? mainHandler : void 0,
      compile() {
        return this.handler = compile();
      }
    };
    if (isWebSocket) {
      const loose = getLoosePath(path);
      if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
        this.router.static.ws[path] = index;
      } else {
        this.router.http.add("ws", path, handler);
        if (loose)
          this.router.http.add("ws", loose, handler);
      }
      return;
    }
    if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
      if (!staticRouter.map[path])
        staticRouter.map[path] = {
          code: ""
        };
      const ctx = staticHandler ? "" : "c";
      if (method === "ALL")
        staticRouter.map[path].all = `default:return ht[${index}].composed(${ctx})
`;
      else
        staticRouter.map[path].code = `case '${method}':return ht[${index}].composed(${ctx})
${staticRouter.map[path].code}`;
      if (!this.config.strictPath && this.config.nativeStaticResponse === true && nativeStaticHandler && (method === "GET" || method === "ALL"))
        this.router.static.http.static[getLoosePath(path)] = nativeStaticHandler();
    } else {
      this.router.http.add(method, path, handler);
      if (!this.config.strictPath) {
        const loosePath = getLoosePath(path);
        if (this.config.nativeStaticResponse === true && staticHandler && (method === "GET" || method === "ALL"))
          this.router.static.http.static[loosePath] = staticHandler();
        this.router.http.add(method, loosePath, handler);
      }
    }
  }
  headers(header) {
    if (!header)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    this.setHeaders = mergeDeep(this.setHeaders, header);
    return this;
  }
  /**
   * ### start | Life cycle event
   * Called after server is ready for serving
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onStart(({ server }) => {
   *         console.log("Running at ${server?.url}:${server?.port}")
   *     })
   *     .listen(3000)
   * ```
   */
  onStart(handler) {
    this.on("start", handler);
    return this;
  }
  /**
   * ### request | Life cycle event
   * Called on every new request is accepted
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onRequest(({ method, url }) => {
   *         saveToAnalytic({ method, url })
   *     })
   * ```
   */
  onRequest(handler) {
    this.on("request", handler);
    return this;
  }
  onParse(options, handler) {
    if (!handler) {
      if (typeof options === "string")
        return this.on("parse", this["~parser"][options]);
      return this.on("parse", options);
    }
    return this.on(
      options,
      "parse",
      handler
    );
  }
  /**
   * ### parse | Life cycle event
   * Callback function to handle body parsing
   *
   * If truthy value is returned, will be assigned to `context.body`
   * Otherwise will skip the callback and look for the next one.
   *
   * Equivalent to Express's body parser
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onParse((request, contentType) => {
   *         if(contentType === "application/json")
   *             return request.json()
   *     })
   * ```
   */
  parser(name, parser) {
    this["~parser"][name] = parser;
    return this;
  }
  onTransform(options, handler) {
    if (!handler)
      return this.on("transform", options);
    return this.on(
      options,
      "transform",
      handler
    );
  }
  resolve(optionsOrResolve, resolve) {
    if (!resolve) {
      resolve = optionsOrResolve;
      optionsOrResolve = { as: "local" };
    }
    const hook = {
      subType: "resolve",
      fn: resolve
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  mapResolve(optionsOrResolve, mapper) {
    if (!mapper) {
      mapper = optionsOrResolve;
      optionsOrResolve = { as: "local" };
    }
    const hook = {
      subType: "mapResolve",
      fn: mapper
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  onBeforeHandle(options, handler) {
    if (!handler)
      return this.on("beforeHandle", options);
    return this.on(
      options,
      "beforeHandle",
      handler
    );
  }
  onAfterHandle(options, handler) {
    if (!handler)
      return this.on("afterHandle", options);
    return this.on(
      options,
      "afterHandle",
      handler
    );
  }
  mapResponse(options, handler) {
    if (!handler)
      return this.on("mapResponse", options);
    return this.on(
      options,
      "mapResponse",
      handler
    );
  }
  onAfterResponse(options, handler) {
    if (!handler)
      return this.on("afterResponse", options);
    return this.on(
      options,
      "afterResponse",
      handler
    );
  }
  /**
   * ### After Handle | Life cycle event
   * Intercept request **after** main handler is called.
   *
   * If truthy value is returned, will be assigned as `Response`
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onAfterHandle((context, response) => {
   *         if(typeof response === "object")
   *             return JSON.stringify(response)
   *     })
   * ```
   */
  trace(options, handler) {
    if (!handler) {
      handler = options;
      options = { as: "local" };
    }
    if (!Array.isArray(handler))
      handler = [handler];
    for (const fn2 of handler)
      this.on(
        options,
        "trace",
        createTracer(fn2)
      );
    return this;
  }
  error(name, error22) {
    switch (typeof name) {
      case "string":
        error22.prototype[ERROR_CODE] = name;
        this.definitions.error[name] = error22;
        return this;
      case "function":
        this.definitions.error = name(this.definitions.error);
        return this;
    }
    for (const [code, error32] of Object.entries(name)) {
      error32.prototype[ERROR_CODE] = code;
      this.definitions.error[code] = error32;
    }
    return this;
  }
  /**
   * ### Error | Life cycle event
   * Called when error is thrown during processing request
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onError(({ code }) => {
   *         if(code === "NOT_FOUND")
   *             return "Path not found :("
   *     })
   * ```
   */
  onError(options, handler) {
    if (!handler)
      return this.on("error", options);
    return this.on(
      options,
      "error",
      handler
    );
  }
  /**
   * ### stop | Life cycle event
   * Called after server stop serving request
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onStop((app) => {
   *         cleanup()
   *     })
   * ```
   */
  onStop(handler) {
    this.on("stop", handler);
    return this;
  }
  on(optionsOrType, typeOrHandlers, handlers) {
    let type2;
    switch (typeof optionsOrType) {
      case "string":
        type2 = optionsOrType;
        handlers = typeOrHandlers;
        break;
      case "object":
        type2 = typeOrHandlers;
        if (!Array.isArray(typeOrHandlers) && typeof typeOrHandlers === "object")
          handlers = typeOrHandlers;
        break;
    }
    if (Array.isArray(handlers))
      handlers = fnToContainer(handlers);
    else {
      if (typeof handlers === "function")
        handlers = [
          {
            fn: handlers
          }
        ];
      else
        handlers = [handlers];
    }
    const handles = handlers;
    for (const handle of handles) {
      handle.scope = typeof optionsOrType === "string" ? "local" : optionsOrType?.as ?? "local";
      if (type2 === "resolve" || type2 === "derive")
        handle.subType = type2;
    }
    if (type2 !== "trace")
      sucrose(
        {
          [type2]: handles.map((x) => x.fn)
        },
        this.inference
      );
    for (const handle of handles) {
      const fn2 = asHookType(handle, "global", { skipIfHasType: true });
      switch (type2) {
        case "start":
          this.event.start ??= [];
          this.event.start.push(fn2);
          break;
        case "request":
          this.event.request ??= [];
          this.event.request.push(fn2);
          break;
        case "parse":
          this.event.parse ??= [];
          this.event.parse.push(fn2);
          break;
        case "transform":
          this.event.transform ??= [];
          this.event.transform.push(fn2);
          break;
        case "derive":
          this.event.transform ??= [];
          this.event.transform.push(
            fnToContainer(fn2, "derive")
          );
          break;
        case "beforeHandle":
          this.event.beforeHandle ??= [];
          this.event.beforeHandle.push(fn2);
          break;
        case "resolve":
          this.event.beforeHandle ??= [];
          this.event.beforeHandle.push(
            fnToContainer(fn2, "resolve")
          );
          break;
        case "afterHandle":
          this.event.afterHandle ??= [];
          this.event.afterHandle.push(fn2);
          break;
        case "mapResponse":
          this.event.mapResponse ??= [];
          this.event.mapResponse.push(fn2);
          break;
        case "afterResponse":
          this.event.afterResponse ??= [];
          this.event.afterResponse.push(fn2);
          break;
        case "trace":
          this.event.trace ??= [];
          this.event.trace.push(fn2);
          break;
        case "error":
          this.event.error ??= [];
          this.event.error.push(fn2);
          break;
        case "stop":
          this.event.stop ??= [];
          this.event.stop.push(fn2);
          break;
      }
    }
    return this;
  }
  /**
   * @deprecated use `Elysia.as` instead
   *
   * Will be removed in Elysia 1.2
   */
  propagate() {
    promoteEvent(this.event.parse);
    promoteEvent(this.event.transform);
    promoteEvent(this.event.beforeHandle);
    promoteEvent(this.event.afterHandle);
    promoteEvent(this.event.mapResponse);
    promoteEvent(this.event.afterResponse);
    promoteEvent(this.event.trace);
    promoteEvent(this.event.error);
    return this;
  }
  as(type2) {
    const castType = { plugin: "scoped", scoped: "scoped", global: "global" }[type2];
    promoteEvent(this.event.parse, castType);
    promoteEvent(this.event.transform, castType);
    promoteEvent(this.event.beforeHandle, castType);
    promoteEvent(this.event.afterHandle, castType);
    promoteEvent(this.event.mapResponse, castType);
    promoteEvent(this.event.afterResponse, castType);
    promoteEvent(this.event.trace, castType);
    promoteEvent(this.event.error, castType);
    if (type2 === "plugin") {
      this.validator.scoped = mergeSchemaValidator(
        this.validator.scoped,
        this.validator.local
      );
      this.validator.local = null;
    } else if (type2 === "global") {
      this.validator.global = mergeSchemaValidator(
        this.validator.global,
        mergeSchemaValidator(
          this.validator.scoped,
          this.validator.local
        )
      );
      this.validator.scoped = null;
      this.validator.local = null;
    }
    return this;
  }
  /**
   * ### group
   * Encapsulate and group path with prefix
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .group('/v1', app => app
   *         .get('/', () => 'Hi')
   *         .get('/name', () => 'Elysia')
   *     })
   * ```
   */
  group(prefix, schemaOrRun, run) {
    const instance = new Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton };
    instance.definitions = { ...this.definitions };
    instance.getServer = () => this.getServer();
    instance.inference = cloneInference(this.inference);
    instance.extender = { ...this.extender };
    const isSchema = typeof schemaOrRun === "object";
    const sandbox = (isSchema ? run : schemaOrRun)(instance);
    this.singleton = mergeDeep(this.singleton, instance.singleton);
    this.definitions = mergeDeep(this.definitions, instance.definitions);
    if (sandbox.event.request?.length)
      this.event.request = [
        ...this.event.request || [],
        ...sandbox.event.request || []
      ];
    if (sandbox.event.mapResponse?.length)
      this.event.mapResponse = [
        ...this.event.mapResponse || [],
        ...sandbox.event.mapResponse || []
      ];
    this.model(sandbox.definitions.type);
    Object.values(instance.router.history).forEach(
      ({ method, path, handler, hooks }) => {
        path = (isSchema ? "" : this.config.prefix) + prefix + path;
        if (isSchema) {
          const hook = schemaOrRun;
          const localHook = hooks;
          this.add(
            method,
            path,
            handler,
            mergeHook(hook, {
              ...localHook || {},
              error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [
                ...localHook.error || {},
                ...sandbox.event.error || {}
              ] : [
                localHook.error,
                ...sandbox.event.error || {}
              ]
            })
          );
        } else {
          this.add(
            method,
            path,
            handler,
            mergeHook(hooks, {
              error: sandbox.event.error
            }),
            {
              skipPrefix: true
            }
          );
        }
      }
    );
    return this;
  }
  /**
   * ### guard
   * Encapsulate and pass hook into all child handler
   *
   * ---
   * @example
   * ```typescript
   * import { t } from 'elysia'
   *
   * new Elysia()
   *     .guard({
   *          schema: {
   *              body: t.Object({
   *                  username: t.String(),
   *                  password: t.String()
   *              })
   *          }
   *     }, app => app
   *         .get("/", () => 'Hi')
   *         .get("/name", () => 'Elysia')
   *     })
   * ```
   */
  guard(hook, run) {
    if (!run) {
      if (typeof hook === "object") {
        this.applyMacro(hook);
        const type2 = hook.as ?? "local";
        this.validator[type2] = {
          body: hook.body ?? this.validator[type2]?.body,
          headers: hook.headers ?? this.validator[type2]?.headers,
          params: hook.params ?? this.validator[type2]?.params,
          query: hook.query ?? this.validator[type2]?.query,
          response: hook.response ?? this.validator[type2]?.response,
          cookie: hook.cookie ?? this.validator[type2]?.cookie
        };
        if (hook.parse)
          this.on({ as: type2 }, "parse", hook.parse);
        if (hook.transform)
          this.on({ as: type2 }, "transform", hook.transform);
        if (hook.derive)
          this.on({ as: type2 }, "derive", hook.derive);
        if (hook.beforeHandle)
          this.on({ as: type2 }, "beforeHandle", hook.beforeHandle);
        if (hook.resolve)
          this.on({ as: type2 }, "resolve", hook.resolve);
        if (hook.afterHandle)
          this.on({ as: type2 }, "afterHandle", hook.afterHandle);
        if (hook.mapResponse)
          this.on({ as: type2 }, "mapResponse", hook.mapResponse);
        if (hook.afterResponse)
          this.on({ as: type2 }, "afterResponse", hook.afterResponse);
        if (hook.error)
          this.on({ as: type2 }, "error", hook.error);
        if (hook.detail) {
          if (this.config.detail)
            this.config.detail = mergeDeep(
              Object.assign({}, this.config.detail),
              hook.detail
            );
          else
            this.config.detail = hook.detail;
        }
        if (hook?.tags) {
          if (!this.config.detail)
            this.config.detail = {
              tags: hook.tags
            };
          else
            this.config.detail.tags = hook.tags;
        }
        return this;
      }
      return this.guard({}, hook);
    }
    const instance = new Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton };
    instance.definitions = { ...this.definitions };
    instance.inference = cloneInference(this.inference);
    instance.extender = { ...this.extender };
    const sandbox = run(instance);
    this.singleton = mergeDeep(this.singleton, instance.singleton);
    this.definitions = mergeDeep(this.definitions, instance.definitions);
    sandbox.getServer = () => this.server;
    if (sandbox.event.request?.length)
      this.event.request = [
        ...this.event.request || [],
        ...sandbox.event.request || []
      ];
    if (sandbox.event.mapResponse?.length)
      this.event.mapResponse = [
        ...this.event.mapResponse || [],
        ...sandbox.event.mapResponse || []
      ];
    this.model(sandbox.definitions.type);
    Object.values(instance.router.history).forEach(
      ({ method, path, handler, hooks: localHook }) => {
        this.add(
          method,
          path,
          handler,
          mergeHook(hook, {
            ...localHook || {},
            error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [
              ...localHook.error || {},
              ...sandbox.event.error || []
            ] : [
              localHook.error,
              ...sandbox.event.error || []
            ]
          })
        );
      }
    );
    return this;
  }
  /**
   * ### use
   * Merge separate logic of Elysia with current
   *
   * ---
   * @example
   * ```typescript
   * const plugin = (app: Elysia) => app
   *     .get('/plugin', () => 'hi')
   *
   * new Elysia()
   *     .use(plugin)
   * ```
   */
  use(plugin, options) {
    if (Array.isArray(plugin)) {
      let app2 = this;
      for (const p of plugin)
        app2 = app2.use(p);
      return app2;
    }
    if (options?.scoped)
      return this.guard({}, (app2) => app2.use(plugin));
    if (Array.isArray(plugin)) {
      let current = this;
      for (const p of plugin)
        current = this.use(p);
      return current;
    }
    if (plugin instanceof Promise) {
      this.promisedModules.add(
        plugin.then((plugin2) => {
          if (typeof plugin2 === "function")
            return plugin2(this);
          if (plugin2 instanceof Elysia)
            return this._use(plugin2).compile();
          if (plugin2.constructor.name === "Elysia")
            return this._use(
              plugin2
            ).compile();
          if (typeof plugin2.default === "function")
            return plugin2.default(this);
          if (plugin2.default instanceof Elysia)
            return this._use(plugin2.default);
          if (plugin2.constructor.name === "Elysia")
            return this._use(plugin2.default);
          if (plugin2.constructor.name === "_Elysia")
            return this._use(plugin2.default);
          try {
            return this._use(plugin2.default);
          } catch (error22) {
            console.error(
              'Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.'
            );
            throw error22;
          }
        }).then((x) => x.compile())
      );
      return this;
    }
    return this._use(plugin);
  }
  _use(plugin) {
    if (typeof plugin === "function") {
      const instance = plugin(this);
      if (instance instanceof Promise) {
        this.promisedModules.add(
          instance.then((plugin2) => {
            if (plugin2 instanceof Elysia) {
              plugin2.getServer = () => this.getServer();
              plugin2.getGlobalRoutes = () => this.getGlobalRoutes();
              plugin2.model(this.definitions.type);
              plugin2.error(this.definitions.error);
              for (const {
                method,
                path,
                handler,
                hooks
              } of Object.values(plugin2.router.history))
                this.add(
                  method,
                  path,
                  handler,
                  mergeHook(hooks, {
                    error: plugin2.event.error
                  })
                );
              plugin2.compile();
              return plugin2;
            }
            if (typeof plugin2 === "function")
              return plugin2(
                this
              );
            if (typeof plugin2.default === "function")
              return plugin2.default(
                this
              );
            return this._use(plugin2);
          }).then((x) => x.compile())
        );
        return this;
      }
      return instance;
    }
    const { name, seed } = plugin.config;
    plugin.getServer = () => this.getServer();
    plugin.getGlobalRoutes = () => this.getGlobalRoutes();
    plugin.model(this.definitions.type);
    plugin.error(this.definitions.error);
    this["~parser"] = {
      ...plugin["~parser"],
      ...this["~parser"]
    };
    this.headers(plugin.setHeaders);
    if (name) {
      if (!(name in this.dependencies))
        this.dependencies[name] = [];
      const current = seed !== void 0 ? checksum(name + JSON.stringify(seed)) : 0;
      if (!this.dependencies[name].some(
        ({ checksum: checksum3 }) => current === checksum3
      )) {
        this.extender.macros = this.extender.macros.concat(
          plugin.extender.macros
        );
        this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(
          plugin.extender.higherOrderFunctions
        );
      }
    } else {
      this.extender.macros = this.extender.macros.concat(
        plugin.extender.macros
      );
      this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(
        plugin.extender.higherOrderFunctions
      );
    }
    deduplicateChecksum(this.extender.macros);
    deduplicateChecksum(this.extender.higherOrderFunctions);
    const hofHashes = [];
    for (let i = 0; i < this.extender.higherOrderFunctions.length; i++) {
      const hof = this.extender.higherOrderFunctions[i];
      if (hof.checksum) {
        if (hofHashes.includes(hof.checksum)) {
          this.extender.higherOrderFunctions.splice(i, 1);
          i--;
        }
        hofHashes.push(hof.checksum);
      }
    }
    this.inference = {
      body: this.inference.body || plugin.inference.body,
      cookie: this.inference.cookie || plugin.inference.cookie,
      headers: this.inference.headers || plugin.inference.headers,
      query: this.inference.query || plugin.inference.query,
      set: this.inference.set || plugin.inference.set,
      server: this.inference.server || plugin.inference.server,
      request: this.inference.request || plugin.inference.request,
      route: this.inference.route || plugin.inference.route
    };
    this.decorate(plugin.singleton.decorator);
    this.state(plugin.singleton.store);
    this.model(plugin.definitions.type);
    this.error(plugin.definitions.error);
    plugin.extender.macros = this.extender.macros.concat(
      plugin.extender.macros
    );
    for (const { method, path, handler, hooks } of Object.values(
      plugin.router.history
    )) {
      this.add(
        method,
        path,
        handler,
        mergeHook(hooks, {
          error: plugin.event.error
        })
      );
    }
    if (name) {
      if (!(name in this.dependencies))
        this.dependencies[name] = [];
      const current = seed !== void 0 ? checksum(name + JSON.stringify(seed)) : 0;
      if (this.dependencies[name].some(
        ({ checksum: checksum3 }) => current === checksum3
      ))
        return this;
      this.dependencies[name].push(
        this.config?.analytic ? {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies,
          stack: plugin.telemetry.stack,
          routes: plugin.router.history,
          decorators: plugin.singleton,
          store: plugin.singleton.store,
          error: plugin.definitions.error,
          derive: plugin.event.transform?.filter((x) => x?.subType === "derive").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          })),
          resolve: plugin.event.transform?.filter((x) => x?.subType === "resolve").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          }))
        } : {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies
        }
      );
      this.event = mergeLifeCycle(
        this.event,
        filterGlobalHook(plugin.event),
        current
      );
    } else {
      this.event = mergeLifeCycle(
        this.event,
        filterGlobalHook(plugin.event)
      );
    }
    this.validator.global = mergeHook(this.validator.global, {
      ...plugin.validator.global
    });
    this.validator.local = mergeHook(this.validator.local, {
      ...plugin.validator.scoped
    });
    return this;
  }
  macro(macro) {
    if (typeof macro === "function") {
      const hook = {
        checksum: checksum(
          JSON.stringify({
            name: this.config.name,
            seed: this.config.seed,
            content: macro.toString()
          })
        ),
        fn: macro
      };
      this.extender.macros.push(hook);
    } else if (typeof macro === "object") {
      for (const name of Object.keys(macro))
        if (typeof macro[name] === "object") {
          const actualValue = { ...macro[name] };
          macro[name] = (v) => {
            if (v === true)
              return actualValue;
          };
        }
      const hook = {
        checksum: checksum(
          JSON.stringify({
            name: this.config.name,
            seed: this.config.seed,
            content: Object.entries(macro).map(([k, v]) => `${k}+${v}`).join(",")
          })
        ),
        fn: () => macro
      };
      this.extender.macros.push(hook);
    }
    return this;
  }
  mount(path, handle) {
    if (path instanceof Elysia || typeof path === "function" || path.length === 0 || path === "/") {
      const run = typeof path === "function" ? path : path instanceof Elysia ? path.compile().fetch : handle instanceof Elysia ? handle.compile().fetch : handle;
      const handler2 = /* @__PURE__ */ __name(async ({ request, path: path2 }) => {
        if (request.method === "GET" || request.method === "HEAD" || !request.headers.get("content-type"))
          return run(
            new Request(
              replaceUrlPath(request.url, path2 || "/"),
              request
            )
          );
        return run(
          new Request(replaceUrlPath(request.url, path2 || "/"), {
            ...request,
            body: await request.arrayBuffer()
          })
        );
      }, "handler2");
      this.all(
        "/*",
        handler2,
        {
          type: "none"
        }
      );
      return this;
    }
    const length = path.length;
    if (handle instanceof Elysia)
      handle = handle.compile().fetch;
    const handler = /* @__PURE__ */ __name(async ({ request, path: path2 }) => {
      if (request.method === "GET" || request.method === "HEAD" || !request.headers.get("content-type"))
        return handle(
          new Request(
            replaceUrlPath(request.url, path2.slice(length) || "/"),
            request
          )
        );
      return handle(
        new Request(
          replaceUrlPath(request.url, path2.slice(length) || "/"),
          {
            ...request,
            body: await request.arrayBuffer()
          }
        )
      );
    }, "handler");
    this.all(
      path,
      handler,
      {
        type: "none"
      }
    );
    this.all(
      path + (path.endsWith("/") ? "*" : "/*"),
      handler,
      {
        type: "none"
      }
    );
    return this;
  }
  /**
   * ### get
   * Register handler for path with method [GET]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .get('/', () => 'hi')
   *     .get('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  get(path, handler, hook) {
    this.add("GET", path, handler, hook);
    return this;
  }
  /**
   * ### post
   * Register handler for path with method [POST]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .post('/', () => 'hi')
   *     .post('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  post(path, handler, hook) {
    this.add("POST", path, handler, hook);
    return this;
  }
  /**
   * ### put
   * Register handler for path with method [PUT]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .put('/', () => 'hi')
   *     .put('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  put(path, handler, hook) {
    this.add("PUT", path, handler, hook);
    return this;
  }
  /**
   * ### patch
   * Register handler for path with method [PATCH]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .patch('/', () => 'hi')
   *     .patch('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  patch(path, handler, hook) {
    this.add("PATCH", path, handler, hook);
    return this;
  }
  /**
   * ### delete
   * Register handler for path with method [DELETE]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .delete('/', () => 'hi')
   *     .delete('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  delete(path, handler, hook) {
    this.add("DELETE", path, handler, hook);
    return this;
  }
  /**
   * ### options
   * Register handler for path with method [POST]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .options('/', () => 'hi')
   *     .options('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  options(path, handler, hook) {
    this.add("OPTIONS", path, handler, hook);
    return this;
  }
  /**
   * ### all
   * Register handler for path with method [ALL]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .all('/', () => 'hi')
   *     .all('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  all(path, handler, hook) {
    this.add("ALL", path, handler, hook);
    return this;
  }
  /**
   * ### head
   * Register handler for path with method [HEAD]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .head('/', () => 'hi')
   *     .head('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  head(path, handler, hook) {
    this.add("HEAD", path, handler, hook);
    return this;
  }
  /**
   * ### connect
   * Register handler for path with method [CONNECT]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .connect('/', () => 'hi')
   *     .connect('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  connect(path, handler, hook) {
    this.add("CONNECT", path, handler, hook);
    return this;
  }
  /**
   * ### route
   * Register handler for path with method [ROUTE]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .route('/', () => 'hi')
   *     .route('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  route(method, path, handler, hook) {
    this.add(method.toUpperCase(), path, handler, hook, hook?.config);
    return this;
  }
  /**
   * ### ws
   * Register handler for path with method [ws]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .ws('/', {
   *         message(ws, message) {
   *             ws.send(message)
   *         }
   *     })
   * ```
   */
  ws(path, options) {
    if (this["~adapter"].ws)
      this["~adapter"].ws(this, path, options);
    else
      console.warn(`Current adapter doesn't support WebSocket`);
    return this;
  }
  /**
   * ### state
   * Assign global mutatable state accessible for all handler
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .state('counter', 0)
   *     .get('/', (({ counter }) => ++counter)
   * ```
   */
  state(options, name, value) {
    if (name === void 0) {
      value = options;
      options = { as: "append" };
      name = "";
    } else if (value === void 0) {
      if (typeof options === "string") {
        value = name;
        name = options;
        options = { as: "append" };
      } else if (typeof options === "object") {
        value = name;
        name = "";
      }
    }
    const { as } = options;
    if (typeof name !== "string")
      return this;
    switch (typeof value) {
      case "object":
        if (name) {
          if (name in this.singleton.store)
            this.singleton.store[name] = mergeDeep(
              this.singleton.store[name],
              value,
              {
                override: as === "override"
              }
            );
          else
            this.singleton.store[name] = value;
          return this;
        }
        if (value === null)
          return this;
        this.singleton.store = mergeDeep(this.singleton.store, value, {
          override: as === "override"
        });
        return this;
      case "function":
        if (name) {
          if (as === "override" || !(name in this.singleton.store))
            this.singleton.store[name] = value;
        } else
          this.singleton.store = value(this.singleton.store);
        return this;
      default:
        if (as === "override" || !(name in this.singleton.store))
          this.singleton.store[name] = value;
        return this;
    }
  }
  /**
   * ### decorate
   * Define custom method to `Context` accessible for all handler
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .decorate('getDate', () => Date.now())
   *     .get('/', (({ getDate }) => getDate())
   * ```
   */
  decorate(options, name, value) {
    if (name === void 0) {
      value = options;
      options = { as: "append" };
      name = "";
    } else if (value === void 0) {
      if (typeof options === "string") {
        value = name;
        name = options;
        options = { as: "append" };
      } else if (typeof options === "object") {
        value = name;
        name = "";
      }
    }
    const { as } = options;
    if (typeof name !== "string")
      return this;
    switch (typeof value) {
      case "object":
        if (name) {
          if (name in this.singleton.decorator)
            this.singleton.decorator[name] = mergeDeep(
              this.singleton.decorator[name],
              value,
              {
                override: as === "override"
              }
            );
          else
            this.singleton.decorator[name] = value;
          return this;
        }
        if (value === null)
          return this;
        this.singleton.decorator = mergeDeep(
          this.singleton.decorator,
          value,
          {
            override: as === "override"
          }
        );
        return this;
      case "function":
        if (name) {
          if (as === "override" || !(name in this.singleton.decorator))
            this.singleton.decorator[name] = value;
        } else
          this.singleton.decorator = value(this.singleton.decorator);
        return this;
      default:
        if (as === "override" || !(name in this.singleton.decorator))
          this.singleton.decorator[name] = value;
        return this;
    }
  }
  derive(optionsOrTransform, transform) {
    if (!transform) {
      transform = optionsOrTransform;
      optionsOrTransform = { as: "local" };
    }
    const hook = {
      subType: "derive",
      fn: transform
    };
    return this.onTransform(optionsOrTransform, hook);
  }
  model(name, model) {
    const coerce = /* @__PURE__ */ __name((schema) => replaceSchemaType(schema, [
      {
        from: t.Number(),
        to: (options) => t.Numeric(options),
        untilObjectFound: true
      },
      {
        from: t.Boolean(),
        to: (options) => t.BooleanString(options),
        untilObjectFound: true
      }
    ]), "coerce");
    switch (typeof name) {
      case "object":
        const parsedSchemas = {};
        Object.entries(name).forEach(([key, value]) => {
          if (!(key in this.definitions.type))
            parsedSchemas[key] = this.definitions.type[key] = coerce(value);
        });
        this.definitions.typebox = t.Module({
          ...this.definitions.typebox["$defs"],
          ...parsedSchemas
        });
        return this;
      case "function":
        const result = coerce(name(this.definitions.type));
        this.definitions.type = result;
        this.definitions.typebox = t.Module(result);
        return this;
    }
    ;
    this.definitions.type[name] = model;
    this.definitions.typebox = t.Module({
      ...this.definitions.typebox["$defs"],
      [name]: model
    });
    return this;
  }
  mapDerive(optionsOrDerive, mapper) {
    if (!mapper) {
      mapper = optionsOrDerive;
      optionsOrDerive = { as: "local" };
    }
    const hook = {
      subType: "mapDerive",
      fn: mapper
    };
    return this.onTransform(optionsOrDerive, hook);
  }
  affix(base, type2, word) {
    if (word === "")
      return this;
    const delimieter = ["_", "-", " "];
    const capitalize = /* @__PURE__ */ __name((word2) => word2[0].toUpperCase() + word2.slice(1), "capitalize");
    const joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix);
    const remap = /* @__PURE__ */ __name((type22) => {
      const store = {};
      switch (type22) {
        case "decorator":
          for (const key in this.singleton.decorator) {
            store[joinKey(word, key)] = this.singleton.decorator[key];
          }
          this.singleton.decorator = store;
          break;
        case "state":
          for (const key in this.singleton.store)
            store[joinKey(word, key)] = this.singleton.store[key];
          this.singleton.store = store;
          break;
        case "model":
          for (const key in this.definitions.type)
            store[joinKey(word, key)] = this.definitions.type[key];
          this.definitions.type = store;
          break;
        case "error":
          for (const key in this.definitions.error)
            store[joinKey(word, key)] = this.definitions.error[key];
          this.definitions.error = store;
          break;
      }
    }, "remap");
    const types = Array.isArray(type2) ? type2 : [type2];
    for (const type22 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
      remap(type22);
    return this;
  }
  prefix(type2, word) {
    return this.affix("prefix", type2, word);
  }
  suffix(type2, word) {
    return this.affix("suffix", type2, word);
  }
  compile() {
    if (this["~adapter"].isWebStandard) {
      this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this);
      if (typeof this.server?.reload === "function")
        this.server.reload({
          ...this.server || {},
          fetch: this.fetch
        });
      return this;
    }
    if (typeof this.server?.reload === "function")
      this.server.reload(this.server || {});
    this._handle = composeGeneralHandler(this);
    return this;
  }
  /**
   * Wait until all lazy loaded modules all load is fully
   */
  get modules() {
    return Promise.all(this.promisedModules.promises);
  }
};
__name(Elysia, "Elysia");

// apps/api/src/controller/auth.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var authController = new Elysia().post("/register", ({ body: { steamID } }) => `Hello ${steamID}`, {
  body: t.Object({
    steamID: t.String({ pattern: "STEAM_[10]:[10]:[0-9]+" })
    // Verifies it's an actual steamID
  })
});

// apps/api/src/index.ts
var app = new Elysia({ aot: false }).get("/", () => "Hello Elysia").use(authController);
var src_default = {
  async fetch(request, env5, ctx) {
    return await app.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var drainBody = /* @__PURE__ */ __name(async (request, env5, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env5);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env5, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env5);
  } catch (e) {
    const error4 = reduceError(e);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-F1HKPb/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env5, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env5, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env5, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env5, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-F1HKPb/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env5, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env5, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env5, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type2, init) {
        if (type2 === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env5, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env5, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env5, ctx) => {
      this.env = env5;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type2, init) => {
      if (type2 === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

elysia/dist/formats.mjs:
  (**
   * @license
   * 
   * MIT License
   * 
   * Copyright (c) 2020 Evgeny Poberezkin
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
//# sourceMappingURL=index.js.map
