# Reason

Reason for the chargeback as given by the bank. Only available for chargebacks of SEPA Direct Debit payments.

## Example Usage

```typescript
import { Reason } from "mollie/models/operations";

let value: Reason = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `code`                                      | *string*                                    | :heavy_minus_sign:                          | Technical code provided by the bank.        |
| `description`                               | *string*                                    | :heavy_minus_sign:                          | A more detailed human-friendly description. |