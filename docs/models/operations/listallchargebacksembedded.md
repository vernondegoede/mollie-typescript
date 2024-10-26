# ListAllChargebacksEmbedded

## Example Usage

```typescript
import { ListAllChargebacksEmbedded } from "mollie/models/operations";

let value: ListAllChargebacksEmbedded = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `refunds`                                                                                                                                              | [operations.ListAllChargebacksRefunds](../../models/operations/listallchargebacksrefunds.md)[]                                                         | :heavy_minus_sign:                                                                                                                                     | A list of chargeback objects. For a complete reference of the chargeback object, refer to the [Get chargeback endpoint](get-chargeback) documentation. |