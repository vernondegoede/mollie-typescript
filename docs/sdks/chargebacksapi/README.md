# ChargebacksAPI
(*chargebacksAPI*)

## Overview

### Available Operations

* [listChargebacks](#listchargebacks) - List payment chargebacks
* [getChargeback](#getchargeback) - Get payment chargeback
* [listAllChargebacks](#listallchargebacks) - List all chargebacks

## listChargebacks

Retrieve the chargebacks initiated for a specific payment.

The results are paginated.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.chargebacksAPI.listChargebacks({
    paymentId: "tr_7UhSN1zuXS",
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
import { chargebacksAPIListChargebacks } from "mollie/funcs/chargebacksAPIListChargebacks.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chargebacksAPIListChargebacks(mollie, {
    paymentId: "tr_7UhSN1zuXS",
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
| `request`                                                                                                                                                                      | [operations.ListChargebacksRequest](../../models/operations/listchargebacksrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListChargebacksResponseBody](../../models/operations/listchargebacksresponsebody.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.ListChargebacksResponseBody               | 400                                              | application/hal+json                             |
| errors.ListChargebacksChargebacksAPIResponseBody | 404                                              | application/hal+json                             |
| errors.SDKError                                  | 4XX, 5XX                                         | \*/\*                                            |

## getChargeback

Retrieve a single payment chargeback by its ID and the ID of its parent payment.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.chargebacksAPI.getChargeback({
    paymentId: "tr_7UhSN1zuXS",
    id: "chb_n9z0tp",
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
import { chargebacksAPIGetChargeback } from "mollie/funcs/chargebacksAPIGetChargeback.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chargebacksAPIGetChargeback(mollie, {
    paymentId: "tr_7UhSN1zuXS",
    id: "chb_n9z0tp",
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
| `request`                                                                                                                                                                      | [operations.GetChargebackRequest](../../models/operations/getchargebackrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetChargebackResponseBody](../../models/operations/getchargebackresponsebody.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetChargebackResponseBody | 404                              | application/hal+json             |
| errors.SDKError                  | 4XX, 5XX                         | \*/\*                            |

## listAllChargebacks

Retrieve all chargebacks initiated for all your payments.

The results are paginated.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.chargebacksAPI.listAllChargebacks({
    profileId: "pfl_QkEhN94Ba",
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
import { chargebacksAPIListAllChargebacks } from "mollie/funcs/chargebacksAPIListAllChargebacks.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await chargebacksAPIListAllChargebacks(mollie, {
    profileId: "pfl_QkEhN94Ba",
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
| `request`                                                                                                                                                                      | [operations.ListAllChargebacksRequest](../../models/operations/listallchargebacksrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllChargebacksResponseBody](../../models/operations/listallchargebacksresponsebody.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ListAllChargebacksResponseBody               | 400                                                 | application/hal+json                                |
| errors.ListAllChargebacksChargebacksAPIResponseBody | 404                                                 | application/hal+json                                |
| errors.SDKError                                     | 4XX, 5XX                                            | \*/\*                                               |