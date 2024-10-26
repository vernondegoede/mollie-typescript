# PaymentsAPI
(*paymentsAPI*)

## Overview

### Available Operations

* [createPayment](#createpayment) - Create payment
* [listPayments](#listpayments) - List payments
* [getPayment](#getpayment) - Get payment
* [updatePayment](#updatepayment) - Update payment
* [cancelPayment](#cancelpayment) - Cancel payment

## createPayment

Payment creation is elemental to the Mollie API: this is where most payment implementations start off.

Once you have created a payment, you should redirect your customer to the URL in the `_links.checkout` property from the response.

To wrap your head around the payment process, an explanation and flow charts can be found in the 'Accepting payments' guide.

If you specify the `method` parameter when creating a payment, optional additional parameters may be available for the payment method that are not listed below. Please refer to the guide on [method-specific parameters](extra-payment-parameters).

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description: "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description: "youthfully abaft while hammock covenant so whine very modulo highly",
          quantity: 166482,
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discountAmount: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
        },
      ],
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
      },
      routing: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
      ],
      mandateId: "mdt_pWUnw6pkBN",
      customerId: "cst_8wmqcHMN4U",
      profileId: "pfl_QkEhN94Ba",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentsAPICreatePayment } from "mollie/funcs/paymentsAPICreatePayment.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentsAPICreatePayment(mollie, {
    requestBody: {
      description: "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description: "miserably instead but scratch like willow",
          quantity: 473977,
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discountAmount: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
        },
      ],
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
      },
      routing: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
      ],
      mandateId: "mdt_pWUnw6pkBN",
      customerId: "cst_8wmqcHMN4U",
      profileId: "pfl_QkEhN94Ba",
    },
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
| `request`                                                                                                                                                                      | [operations.CreatePaymentRequest](../../models/operations/createpaymentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.CreatePaymentResponseBody            | 422                                         | application/hal+json                        |
| errors.CreatePaymentPaymentsAPIResponseBody | 503                                         | application/hal+json                        |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## listPayments

Retrieve all payments created with the current website profile.

The results are paginated.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.paymentsAPI.listPayments({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentsAPIListPayments } from "mollie/funcs/paymentsAPIListPayments.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentsAPIListPayments(mollie, {});

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
| `request`                                                                                                                                                                      | [operations.ListPaymentsRequest](../../models/operations/listpaymentsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPaymentsResponseBody](../../models/operations/listpaymentsresponsebody.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ListPaymentsResponseBody | 400                             | application/hal+json            |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## getPayment

Retrieve a single payment object by its payment ID.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await mollie.paymentsAPI.getPayment({
    id: "tr_7UhSN1zuXS",
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
import { paymentsAPIGetPayment } from "mollie/funcs/paymentsAPIGetPayment.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentsAPIGetPayment(mollie, {
    id: "tr_7UhSN1zuXS",
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
| `request`                                                                                                                                                                      | [operations.GetPaymentRequest](../../models/operations/getpaymentrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPaymentResponseBody](../../models/operations/getpaymentresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GetPaymentResponseBody | 404                           | application/hal+json          |
| errors.SDKError               | 4XX, 5XX                      | \*/\*                         |

## updatePayment

Certain details of an existing payment can be updated.

For an in-depth explanation of each parameter, see [Create payment](create-payment).

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.updatePayment({
    id: "tr_7UhSN1zuXS",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentsAPIUpdatePayment } from "mollie/funcs/paymentsAPIUpdatePayment.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentsAPIUpdatePayment(mollie, {
    id: "tr_7UhSN1zuXS",
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
| `request`                                                                                                                                                                      | [operations.UpdatePaymentRequest](../../models/operations/updatepaymentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.UpdatePaymentResponseBody            | 404                                         | application/hal+json                        |
| errors.UpdatePaymentPaymentsAPIResponseBody | 422                                         | application/hal+json                        |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## cancelPayment

Depending on the payment method, you may be able to cancel a payment for a certain amount of time — usually until the next business day or as long as the payment status is open.

Payments may also be canceled manually from the Mollie Dashboard.

The `isCancelable` property on the [Payment object](get-payment) will indicate if the payment can be canceled.

### Example Usage

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.cancelPayment({
    id: "tr_7UhSN1zuXS",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MollieCore } from "mollie/core.js";
import { paymentsAPICancelPayment } from "mollie/funcs/paymentsAPICancelPayment.js";

// Use `MollieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mollie = new MollieCore({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await paymentsAPICancelPayment(mollie, {
    id: "tr_7UhSN1zuXS",
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
| `request`                                                                                                                                                                      | [operations.CancelPaymentRequest](../../models/operations/cancelpaymentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.CancelPaymentResponseBody            | 404                                         | application/hal+json                        |
| errors.CancelPaymentPaymentsAPIResponseBody | 422                                         | application/hal+json                        |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |