# GetPaymentLinkLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetPaymentLinkLinks } from "mollie/models/operations";

let value: GetPaymentLinkLinks = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                     | [operations.GetPaymentLinkSelf](../../models/operations/getpaymentlinkself.md)                             | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
| `paymentLink`                                                                                              | [operations.PaymentLink](../../models/operations/paymentlink.md)                                           | :heavy_minus_sign:                                                                                         | The URL your customer should visit to make the payment. This is where you should redirect the customer to. |
| `documentation`                                                                                            | [operations.GetPaymentLinkDocumentation](../../models/operations/getpaymentlinkdocumentation.md)           | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |