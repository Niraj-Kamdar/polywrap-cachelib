"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.simpleCachePlugin = exports.SimpleCachePlugin = void 0;
var resolvers_1 = require("./resolvers");
var w3_1 = require("./w3");
var core_js_1 = require("@web3api/core-js");
var SimpleCachePlugin = /** @class */ (function (_super) {
    __extends(SimpleCachePlugin, _super);
    function SimpleCachePlugin() {
        var _this = _super.call(this) || this;
        _this._cache = new Map();
        return _this;
    }
    SimpleCachePlugin.manifest = function () {
        return w3_1.manifest;
    };
    SimpleCachePlugin.prototype.getModules = function () {
        return {
            query: resolvers_1.query(this),
            mutation: resolvers_1.mutation(this),
        };
    };
    SimpleCachePlugin.prototype.set = function (key, value, timeout) {
        if (timeout)
            return false; // Timeout not implemented!
        this._cache.set(key, value);
        return true;
    };
    SimpleCachePlugin.prototype.add = function (key, value, timeout) {
        if (timeout)
            return false; // Timeout not implemented!
        if (this._cache.has(key))
            return false;
        this._cache.set(key, value);
        return true;
    };
    SimpleCachePlugin.prototype.delete = function (key) {
        return this._cache.delete(key);
    };
    SimpleCachePlugin.prototype.clear = function () {
        this._cache.clear();
        return true;
    };
    SimpleCachePlugin.prototype.get = function (key) {
        var _a;
        return (_a = this._cache.get(key)) !== null && _a !== void 0 ? _a : null;
    };
    SimpleCachePlugin.prototype.has = function (key) {
        return this._cache.has(key);
    };
    return SimpleCachePlugin;
}(core_js_1.Plugin));
exports.SimpleCachePlugin = SimpleCachePlugin;
exports.simpleCachePlugin = function () {
    return {
        factory: function () { return new SimpleCachePlugin(); },
        manifest: SimpleCachePlugin.manifest(),
    };
};
exports.plugin = exports.simpleCachePlugin;
//# sourceMappingURL=index.js.map