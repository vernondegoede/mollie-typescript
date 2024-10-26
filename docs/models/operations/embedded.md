# Embedded

## Example Usage

```typescript
import { Embedded } from "mollie/models/operations";

let value: Embedded = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `payments`                                                                                                                                   | [operations.Payments](../../models/operations/payments.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                           | An array of payment objects. For a complete reference of the payment object, refer to the [Get payment endpoint](get-payment) documentation. |