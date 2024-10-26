# GetRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetRefundLinks } from "mollie/models/operations";

let value: GetRefundLinks = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                      | [operations.GetRefundSelf](../../models/operations/getrefundself.md)                                                        | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `payment`                                                                                                                   | [operations.Payment](../../models/operations/payment.md)                                                                    | :heavy_minus_sign:                                                                                                          | The API resource URL of the [payment](get-payment) that this refund belongs to.                                             |
| `settlement`                                                                                                                | [operations.GetRefundSettlement](../../models/operations/getrefundsettlement.md)                                            | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                             | [operations.GetRefundDocumentation](../../models/operations/getrefunddocumentation.md)                                      | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |