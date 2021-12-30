import { Plugin, PluginPackageManifest, PluginModules, PluginPackage } from "@web3api/core-js";
export declare class SimpleCachePlugin extends Plugin {
    private _cache;
    constructor();
    static manifest(): PluginPackageManifest;
    getModules(): PluginModules;
    set(key: string, value: string, timeout?: number | null): boolean;
    add(key: string, value: string, timeout?: number | null): boolean;
    delete(key: string): boolean;
    clear(): boolean;
    get(key: string): string | null;
    has(key: string): boolean;
}
export declare const simpleCachePlugin: () => PluginPackage;
export declare const plugin: () => PluginPackage;
