# ListOrderRefundsEmbedded

## Example Usage

```typescript
import { ListOrderRefundsEmbedded } from "mollie/models/operations";

let value: ListOrderRefundsEmbedded = {};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refunds`                                                                                                                                                  | [operations.ListOrderRefundsRefunds](../../models/operations/listorderrefundsrefunds.md)[]                                                                 | :heavy_minus_sign:                                                                                                                                         | An array of refund objects. For a complete reference of the refund object, refer to the [Create order refund endpoint](create-order-refund) documentation. |