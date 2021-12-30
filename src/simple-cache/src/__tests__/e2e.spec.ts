import { Web3ApiClient } from "@web3api/client-js";
import { simpleCachePlugin } from "../";

describe("e2e", () => {

  let client: Web3ApiClient;
  const uri = "ens/simple-cache-plugin.eth";

  beforeAll(() => {
    // Add the simpleCachePlugin to the Web3ApiClient
    client = new Web3ApiClient({
      plugins: [
        {
          uri: uri,
          plugin: simpleCachePlugin()
        }
      ]
    });
  });

  test("set", async () => {
    const setResult = await client.query({
      uri,
      query: `mutation {
        set(
          key: $key,
          value: $value
        )
      }`,
      variables: {
        key: "a",
        value: "1"
      }
    });

    expect(setResult.errors).toBeFalsy();
    expect(setResult.data).toBeTruthy();
    expect(setResult.data?.set).toBe(true);

    const hasResult = await client.query({
      uri,
      query: `query {
        has(
          key: $key
        )
      }`,
      variables: {
        key: "a",
      }
    });    

    expect(hasResult.errors).toBeFalsy();
    expect(hasResult.data).toBeTruthy();
    expect(hasResult.data?.has).toBe(true);

    const getResult = await client.query({
      uri,
      query: `query {
        get(
          key: $key
        )
      }`,
      variables: {
        key: "a",
      }
    });    

    expect(getResult.errors).toBeFalsy();
    expect(getResult.data).toBeTruthy();
    expect(getResult.data?.get).toBe("1");
  });

  test("delete", async () => {
    const setResult = await client.query({
      uri,
      query: `mutation {
        set(
          key: $key,
          value: $value
        )
      }`,
      variables: {
        key: "a",
        value: "1"
      }
    });

    expect(setResult.errors).toBeFalsy();
    expect(setResult.data).toBeTruthy();
    expect(setResult.data?.set).toBe(true);

    const deleteResult = await client.query({
      uri,
      query: `query {
        has(
          key: $key
        )
      }`,
      variables: {
        key: "a",
      }
    });    

    expect(deleteResult.errors).toBeFalsy();
    expect(deleteResult.data).toBeTruthy();
    expect(deleteResult.data?.delete).toBe(true);

    const hasResult = await client.query({
      uri,
      query: `query {
        has(
          key: $key
        )
      }`,
      variables: {
        key: "a",
      }
    });    

    expect(hasResult.errors).toBeFalsy();
    expect(hasResult.data).toBeTruthy();
    expect(hasResult.data?.has).toBe(false);
  });
});
