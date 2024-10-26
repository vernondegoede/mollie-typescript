# ListChargebacksEmbedded

## Example Usage

```typescript
import { ListChargebacksEmbedded } from "mollie/models/operations";

let value: ListChargebacksEmbedded = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `refunds`                                                                                                                                              | [operations.ListChargebacksRefunds](../../models/operations/listchargebacksrefunds.md)[]                                                               | :heavy_minus_sign:                                                                                                                                     | A list of chargeback objects. For a complete reference of the chargeback object, refer to the [Get chargeback endpoint](get-chargeback) documentation. |