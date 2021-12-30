import { mutation, query } from "./resolvers";
import { manifest } from "./w3";

import {
  Plugin,
  PluginPackageManifest,
  PluginModules,
  PluginPackage,
} from "@web3api/core-js";

export class SimpleCachePlugin extends Plugin {
  private _cache: Map<string, string> = new Map();
  constructor() {
    super();
  }

  public static manifest(): PluginPackageManifest {
    return manifest;
  }

  public getModules(): PluginModules {
    return {
      query: query(this),
      mutation: mutation(this),
    };
  }

  public set(key: string, value: string, timeout?: number | null): boolean {
    if (timeout) return false; // Timeout not implemented!
    this._cache.set(key, value);
    return true;
  }

  public add(key: string, value: string, timeout?: number | null): boolean {
    if (timeout) return false; // Timeout not implemented!
    if (this._cache.has(key)) return false;

    this._cache.set(key, value);
    return true;
  }

  public delete(key: string): boolean {
    return this._cache.delete(key);
  }

  public clear(): boolean {
    this._cache.clear();
    return true;
  }

  public get(key: string): string | null {
    return this._cache.get(key) ?? null;
  }

  public has(key: string): boolean {
    return this._cache.has(key);
  }

}

export const simpleCachePlugin = (): PluginPackage => {
  return {
    factory: () => new SimpleCachePlugin(),
    manifest: SimpleCachePlugin.manifest(),
  };
};

export const plugin = simpleCachePlugin;
