# CreatePaymentAmount

The fee that you wish to charge.

Be careful to leave enough space for Mollie's own fees to be deducted as well. For example, you cannot charge a €0.99 fee on a €1.00 payment.

## Example Usage

```typescript
import { CreatePaymentAmount } from "mollie/models/operations";

let value: CreatePaymentAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |