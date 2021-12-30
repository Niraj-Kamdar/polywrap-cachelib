import { SimpleCachePlugin } from ".";
import { Query, Mutation } from "./w3";
export declare const query: (plugin: SimpleCachePlugin) => Query.Module;
export declare const mutation: (plugin: SimpleCachePlugin) => Mutation.Module;
