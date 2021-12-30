import { Client } from "@web3api/core-js";
import { SimpleCachePlugin } from ".";
import { Query, Mutation } from "./w3";
import { Input_add, Input_clear, Input_delete, Input_set } from "./w3/mutation";
import { Input_get, Input_has } from "./w3/query";

export const query = (plugin: SimpleCachePlugin): Query.Module => ({
  get(
    input: Input_get,
    client: Client
  ): string | null {
    return plugin.get(input.key);
  },

  has(
    input: Input_has,
    client: Client
  ): boolean {
    return plugin.has(input.key);
  }
});

export const mutation = (plugin: SimpleCachePlugin): Mutation.Module => ({
  set(
    input: Input_set,
    client: Client
  ): boolean {
    return plugin.set(input.key, input.value, input.timeout);
  },

  add(
    input: Input_add,
    client: Client
  ): boolean {
    return plugin.add(input.key, input.value, input.timeout);
  },

  delete(
    input: Input_delete,
    client: Client
  ): boolean {
    return plugin.delete(input.key);
  },

  clear(
    input: Input_clear,
    client: Client
  ): boolean {
    return plugin.clear();
  },
});
