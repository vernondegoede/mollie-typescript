# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "mollie/models/operations";

let value: CreatePaymentRequest = {
  requestBody: {
    description:
      "instead technician inasmuch sympathetically disappointment nor",
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    redirectUrl: "https://outrageous-subexpression.com/",
    lines: [
      {
        description: "given only trash within ack incidentally challenge",
        quantity: 822118,
        unitPrice: {
          currency: "EUR",
          value: "10.00",
        },
        discountAmount: {
          currency: "EUR",
          value: "10.00",
        },
        totalAmount: {
          currency: "EUR",
          value: "10.00",
        },
        vatAmount: {
          currency: "EUR",
          value: "10.00",
        },
      },
    ],
    applicationFee: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
    },
    routing: [
      {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        destination: {
          organizationId: "org_12345678",
        },
      },
    ],
    mandateId: "mdt_pWUnw6pkBN",
    customerId: "cst_8wmqcHMN4U",
    profileId: "pfl_QkEhN94Ba",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `include`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | This endpoint allows you to include additional information via the `include` query string parameter.<br/><br/>* `details.qrCode`: Include a QR code object. Only available for iDEAL, Bancontact and bank transfer payments. |
| `requestBody`                                                                                                                                                                                                        | [operations.CreatePaymentRequestBody](../../models/operations/createpaymentrequestbody.md)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |