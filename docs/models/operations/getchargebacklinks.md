# GetChargebackLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetChargebackLinks } from "mollie/models/operations";

let value: GetChargebackLinks = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                          | [operations.GetChargebackSelf](../../models/operations/getchargebackself.md)                                                    | :heavy_minus_sign:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |
| `payment`                                                                                                                       | [operations.GetChargebackPayment](../../models/operations/getchargebackpayment.md)                                              | :heavy_minus_sign:                                                                                                              | The API resource URL of the [payment](get-payment) that this chargeback belongs to.                                             |
| `settlement`                                                                                                                    | [operations.GetChargebackSettlement](../../models/operations/getchargebacksettlement.md)                                        | :heavy_minus_sign:                                                                                                              | The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                                 | [operations.GetChargebackDocumentation](../../models/operations/getchargebackdocumentation.md)                                  | :heavy_minus_sign:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |