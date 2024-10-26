# CreateOrderRefundRequest

## Example Usage

```typescript
import { CreateOrderRefundRequest } from "mollie/models/operations";

let value: CreateOrderRefundRequest = {
  orderId: "ord_pbjz8x",
  requestBody: {
    lines: [
      {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Provide the ID of the related order.                                                               | ord_pbjz8x                                                                                         |
| `requestBody`                                                                                      | [operations.CreateOrderRefundRequestBody](../../models/operations/createorderrefundrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |