# GetCaptureLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetCaptureLinks } from "mollie/models/operations";

let value: GetCaptureLinks = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                       | [operations.GetCaptureSelf](../../models/operations/getcaptureself.md)                                                       | :heavy_minus_sign:                                                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                   |
| `payment`                                                                                                                    | [operations.GetCapturePayment](../../models/operations/getcapturepayment.md)                                                 | :heavy_minus_sign:                                                                                                           | The API resource URL of the [payment](get-payment) that this capture belongs to.                                             |
| `settlement`                                                                                                                 | [operations.GetCaptureSettlement](../../models/operations/getcapturesettlement.md)                                           | :heavy_minus_sign:                                                                                                           | The API resource URL of the [settlement](get-settlement) this capture has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                              | [operations.GetCaptureDocumentation](../../models/operations/getcapturedocumentation.md)                                     | :heavy_minus_sign:                                                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                   |