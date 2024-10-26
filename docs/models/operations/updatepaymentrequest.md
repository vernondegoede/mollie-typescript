# UpdatePaymentRequest

## Example Usage

```typescript
import { UpdatePaymentRequest } from "mollie/models/operations";

let value: UpdatePaymentRequest = {
  id: "tr_7UhSN1zuXS",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the item you want to perform this operation on.                          | tr_7UhSN1zuXS                                                                              |
| `requestBody`                                                                              | [operations.UpdatePaymentRequestBody](../../models/operations/updatepaymentrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |