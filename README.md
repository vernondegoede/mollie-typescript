# mollie

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *mollie* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=mollie&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/mollie/mollie). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [capturesAPI](docs/sdks/capturesapi/README.md)

* [createCapture](docs/sdks/capturesapi/README.md#createcapture) - Create capture
* [listCaptures](docs/sdks/capturesapi/README.md#listcaptures) - List captures
* [getCapture](docs/sdks/capturesapi/README.md#getcapture) - Get capture

### [chargebacksAPI](docs/sdks/chargebacksapi/README.md)

* [listChargebacks](docs/sdks/chargebacksapi/README.md#listchargebacks) - List payment chargebacks
* [getChargeback](docs/sdks/chargebacksapi/README.md#getchargeback) - Get payment chargeback
* [listAllChargebacks](docs/sdks/chargebacksapi/README.md#listallchargebacks) - List all chargebacks

### [methodsAPI](docs/sdks/methodsapi/README.md)

* [listMethods](docs/sdks/methodsapi/README.md#listmethods) - List payment methods
* [listAllMethods](docs/sdks/methodsapi/README.md#listallmethods) - List all payment methods
* [getMethod](docs/sdks/methodsapi/README.md#getmethod) - Get payment method
* [enableMethod](docs/sdks/methodsapi/README.md#enablemethod) - Enable payment method
* [disableMethod](docs/sdks/methodsapi/README.md#disablemethod) - Disable payment method
* [enableMethodIssuer](docs/sdks/methodsapi/README.md#enablemethodissuer) - Enable payment method issuer
* [disableMethodIssuer](docs/sdks/methodsapi/README.md#disablemethodissuer) - Disable payment method issuer


### [paymentLinksAPI](docs/sdks/paymentlinksapi/README.md)

* [createPaymentLink](docs/sdks/paymentlinksapi/README.md#createpaymentlink) - Create payment link
* [listPaymentLinks](docs/sdks/paymentlinksapi/README.md#listpaymentlinks) - List payment links
* [getPaymentLink](docs/sdks/paymentlinksapi/README.md#getpaymentlink) - Get payment link

### [paymentsAPI](docs/sdks/paymentsapi/README.md)

* [createPayment](docs/sdks/paymentsapi/README.md#createpayment) - Create payment
* [listPayments](docs/sdks/paymentsapi/README.md#listpayments) - List payments
* [getPayment](docs/sdks/paymentsapi/README.md#getpayment) - Get payment
* [updatePayment](docs/sdks/paymentsapi/README.md#updatepayment) - Update payment
* [cancelPayment](docs/sdks/paymentsapi/README.md#cancelpayment) - Cancel payment

### [refundsAPI](docs/sdks/refundsapi/README.md)

* [createRefund](docs/sdks/refundsapi/README.md#createrefund) - Create payment refund
* [listRefunds](docs/sdks/refundsapi/README.md#listrefunds) - List payment refunds
* [getRefund](docs/sdks/refundsapi/README.md#getrefund) - Get payment refund
* [cancelRefund](docs/sdks/refundsapi/README.md#cancelrefund) - Cancel payment refund
* [createOrderRefund](docs/sdks/refundsapi/README.md#createorderrefund) - Create order refund
* [listOrderRefunds](docs/sdks/refundsapi/README.md#listorderrefunds) - List order refunds
* [listAllRefunds](docs/sdks/refundsapi/README.md#listallrefunds) - List all refunds

### [terminalsAPI](docs/sdks/terminalsapi/README.md)

* [listTerminals](docs/sdks/terminalsapi/README.md#listterminals) - List terminals
* [getTerminal](docs/sdks/terminalsapi/README.md#getterminal) - Get terminal

### [walletsAPI](docs/sdks/walletsapi/README.md)

* [requestApplePayPaymentSession](docs/sdks/walletsapi/README.md#requestapplepaypaymentsession) - Request Apple Pay payment session

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`capturesAPICreateCapture`](docs/sdks/capturesapi/README.md#createcapture) - Create capture
- [`capturesAPIGetCapture`](docs/sdks/capturesapi/README.md#getcapture) - Get capture
- [`capturesAPIListCaptures`](docs/sdks/capturesapi/README.md#listcaptures) - List captures
- [`chargebacksAPIGetChargeback`](docs/sdks/chargebacksapi/README.md#getchargeback) - Get payment chargeback
- [`chargebacksAPIListAllChargebacks`](docs/sdks/chargebacksapi/README.md#listallchargebacks) - List all chargebacks
- [`chargebacksAPIListChargebacks`](docs/sdks/chargebacksapi/README.md#listchargebacks) - List payment chargebacks
- [`methodsAPIDisableMethod`](docs/sdks/methodsapi/README.md#disablemethod) - Disable payment method
- [`methodsAPIDisableMethodIssuer`](docs/sdks/methodsapi/README.md#disablemethodissuer) - Disable payment method issuer
- [`methodsAPIEnableMethod`](docs/sdks/methodsapi/README.md#enablemethod) - Enable payment method
- [`methodsAPIEnableMethodIssuer`](docs/sdks/methodsapi/README.md#enablemethodissuer) - Enable payment method issuer
- [`methodsAPIGetMethod`](docs/sdks/methodsapi/README.md#getmethod) - Get payment method
- [`methodsAPIListAllMethods`](docs/sdks/methodsapi/README.md#listallmethods) - List all payment methods
- [`methodsAPIListMethods`](docs/sdks/methodsapi/README.md#listmethods) - List payment methods
- [`paymentLinksAPICreatePaymentLink`](docs/sdks/paymentlinksapi/README.md#createpaymentlink) - Create payment link
- [`paymentLinksAPIGetPaymentLink`](docs/sdks/paymentlinksapi/README.md#getpaymentlink) - Get payment link
- [`paymentLinksAPIListPaymentLinks`](docs/sdks/paymentlinksapi/README.md#listpaymentlinks) - List payment links
- [`paymentsAPICancelPayment`](docs/sdks/paymentsapi/README.md#cancelpayment) - Cancel payment
- [`paymentsAPICreatePayment`](docs/sdks/paymentsapi/README.md#createpayment) - Create payment
- [`paymentsAPIGetPayment`](docs/sdks/paymentsapi/README.md#getpayment) - Get payment
- [`paymentsAPIListPayments`](docs/sdks/paymentsapi/README.md#listpayments) - List payments
- [`paymentsAPIUpdatePayment`](docs/sdks/paymentsapi/README.md#updatepayment) - Update payment
- [`refundsAPICancelRefund`](docs/sdks/refundsapi/README.md#cancelrefund) - Cancel payment refund
- [`refundsAPICreateOrderRefund`](docs/sdks/refundsapi/README.md#createorderrefund) - Create order refund
- [`refundsAPICreateRefund`](docs/sdks/refundsapi/README.md#createrefund) - Create payment refund
- [`refundsAPIGetRefund`](docs/sdks/refundsapi/README.md#getrefund) - Get payment refund
- [`refundsAPIListAllRefunds`](docs/sdks/refundsapi/README.md#listallrefunds) - List all refunds
- [`refundsAPIListOrderRefunds`](docs/sdks/refundsapi/README.md#listorderrefunds) - List order refunds
- [`refundsAPIListRefunds`](docs/sdks/refundsapi/README.md#listrefunds) - List payment refunds
- [`terminalsAPIGetTerminal`](docs/sdks/terminalsapi/README.md#getterminal) - Get terminal
- [`terminalsAPIListTerminals`](docs/sdks/terminalsapi/README.md#listterminals) - List terminals
- [`walletsAPIRequestApplePayPaymentSession`](docs/sdks/walletsapi/README.md#requestapplepaypaymentsession) - Request Apple Pay payment session

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `createPayment` method may throw the following errors:

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.CreatePaymentResponseBody            | 422                                         | application/hal+json                        |
| errors.CreatePaymentPaymentsAPIResponseBody | 503                                         | application/hal+json                        |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

```typescript
import { Mollie } from "mollie";
import {
  CreatePaymentPaymentsAPIResponseBody,
  CreatePaymentResponseBody,
  SDKValidationError,
} from "mollie/models/errors";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    await mollie.paymentsAPI.createPayment({
      requestBody: {
        description:
          "youthfully abaft while hammock covenant so whine very modulo highly",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        redirectUrl: "https://mean-deduction.com/",
        lines: [
          {
            description:
              "youthfully abaft while hammock covenant so whine very modulo highly",
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
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof CreatePaymentResponseBody): {
        // Handle err.data$: CreatePaymentResponseBodyData
        console.error(err);
        return;
      }
      case (err instanceof CreatePaymentPaymentsAPIResponseBody): {
        // Handle err.data$: CreatePaymentPaymentsAPIResponseBodyData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.mollie.com/v2` | None |

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  serverIdx: 0,
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  serverURL: "https://api.mollie.com/v2",
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Mollie } from "mollie";
import { HTTPClient } from "mollie/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Mollie({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bearerAuth`         | http                 | HTTP Bearer          | `MOLLIE_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
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
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Mollie } from "mollie";

const sdk = new Mollie({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MOLLIE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=mollie&utm_campaign=typescript)
