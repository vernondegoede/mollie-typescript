# PaymentLinksAPI
(*paymentLinksAPI*)

## Overview

### Available Operations

* [createPaymentLink](#createpaymentlink) - Create payment link
* [listPaymentLinks](#listpaymentlinks) - List payment links
* [getPaymentLink](#getpaymentlink) - Get payment link

## createPaymentLink

With the Payment links API you can generate payment links that by default, unlike regular payments, do not expire. The payment link can be shared with your customers and will redirect them to them the payment page where they can complete the payment. A [payment](get-payment) will only be created once the customer initiates the payment.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentLinksAPI.createPaymentLink({
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    profileId: "pfl_QkEhN94Ba",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentLinksAPICreatePaymentLink } from "mollie/funcs/paymentLinksAPICreatePaymentLink.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentLinksAPICreatePaymentLink(mollie, {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    profileId: "pfl_QkEhN94Ba",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePaymentLinkRequestBody](../../models/operations/createpaymentlinkrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.CreatePaymentLinkResponseBody                | 404                                                 | application/hal+json                                |
| errors.CreatePaymentLinkPaymentLinksAPIResponseBody | 422                                                 | application/hal+json                                |
| errors.SDKError                                     | 4XX, 5XX                                            | \*/\*                                               |

## listPaymentLinks

Retrieve a list of all payment links.

The results are paginated.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.paymentLinksAPI.listPaymentLinks({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentLinksAPIListPaymentLinks } from "mollie/funcs/paymentLinksAPIListPaymentLinks.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentLinksAPIListPaymentLinks(mollie, {});

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
| `request`                                                                                                                                                                      | [operations.ListPaymentLinksRequest](../../models/operations/listpaymentlinksrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPaymentLinksResponseBody](../../models/operations/listpaymentlinksresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ListPaymentLinksResponseBody | 400                                 | application/hal+json                |
| errors.SDKError                     | 4XX, 5XX                            | \*/\*                               |

## getPaymentLink

Retrieve a single payment link by its ID.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.paymentLinksAPI.getPaymentLink({
    id: "pl_4Y0eZitmBnQ6IDoMqZQKh",
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
import { paymentLinksAPIGetPaymentLink } from "mollie/funcs/paymentLinksAPIGetPaymentLink.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentLinksAPIGetPaymentLink(mollie, {
    id: "pl_4Y0eZitmBnQ6IDoMqZQKh",
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
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkRequest](../../models/operations/getpaymentlinkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPaymentLinkResponseBody](../../models/operations/getpaymentlinkresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetPaymentLinkResponseBody | 404                               | application/hal+json              |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |