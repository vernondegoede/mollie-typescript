# ChangePaymentState

For test mode payments in certain scenarios, a hosted interface is available to help you test different payment states.

Firstly, for recurring test mode payments. Recurring payments do not have a checkout URL, because these payments are executed without any user interaction.

Secondly, for paid test mode payments. The payment state screen will then allow you to create a refund or chargeback for the test payment.

## Example Usage

```typescript
import { ChangePaymentState } from "mollie/models/operations";

let value: ChangePaymentState = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |