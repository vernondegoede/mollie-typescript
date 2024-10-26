# CreateCaptureRequest

## Example Usage

```typescript
import { CreateCaptureRequest } from "mollie/models/operations";

let value: CreateCaptureRequest = {
  paymentId: "tr_7UhSN1zuXS",
  requestBody: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `paymentId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related payment.                                                     | tr_7UhSN1zuXS                                                                              |
| `requestBody`                                                                              | [operations.CreateCaptureRequestBody](../../models/operations/createcapturerequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |