"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = exports.query = void 0;
exports.query = function (plugin) { return ({
    get: function (input, client) {
        return plugin.get(input.key);
    },
    has: function (input, client) {
        return plugin.has(input.key);
    }
}); };
exports.mutation = function (plugin) { return ({
    set: function (input, client) {
        return plugin.set(input.key, input.value, input.timeout);
    },
    add: function (input, client) {
        return plugin.add(input.key, input.value, input.timeout);
    },
    delete: function (input, client) {
        return plugin.delete(input.key);
    },
    clear: function (input, client) {
        return plugin.clear();
    },
}); };
//# sourceMappingURL=resolvers.js.map