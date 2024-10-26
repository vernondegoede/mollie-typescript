# GetPaymentAmount

The amount that you want to charge, e.g. `{currency:"EUR", value:"1000.00"}` if you would want to charge €1000.00.

You can find the minimum and maximum amounts per payment method in our help center. Additionally, they can be retrieved using the Get method endpoint.

## Example Usage

```typescript
import { GetPaymentAmount } from "mollie/models/operations";

let value: GetPaymentAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |