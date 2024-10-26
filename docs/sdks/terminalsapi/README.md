# TerminalsAPI
(*terminalsAPI*)

## Overview

### Available Operations

* [listTerminals](#listterminals) - List terminals
* [getTerminal](#getterminal) - Get terminal

## listTerminals

Retrieve a list of all physical point-of-sale devices.

The results are paginated.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.terminalsAPI.listTerminals({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { terminalsAPIListTerminals } from "mollie/funcs/terminalsAPIListTerminals.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await terminalsAPIListTerminals(mollie, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTerminalsRequest](../../models/operations/listterminalsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTerminalsResponseBody](../../models/operations/listterminalsresponsebody.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.ListTerminalsResponseBody | 400                              | application/hal+json             |
| errors.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## getTerminal

Retrieve a single terminal by its ID.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.terminalsAPI.getTerminal({
    id: "term_7MgL4wea46qkRcoTZjWEH",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { terminalsAPIGetTerminal } from "mollie/funcs/terminalsAPIGetTerminal.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await terminalsAPIGetTerminal(mollie, {
    id: "term_7MgL4wea46qkRcoTZjWEH",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTerminalRequest](../../models/operations/getterminalrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTerminalResponseBody](../../models/operations/getterminalresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetTerminalResponseBody | 404                            | application/hal+json           |
| errors.SDKError                | 4XX, 5XX                       | \*/\*                          |