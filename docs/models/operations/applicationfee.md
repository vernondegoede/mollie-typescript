# ApplicationFee

With Mollie Connect you can charge fees on payments that your app is processing on behalf of other Mollie merchants.

If you use OAuth to create payments on a connected merchant's account, you can charge a fee using this `applicationFee` parameter. If the payment succeeds, the fee will be deducted from the merchant's balance and sent to your own account balance.

If instead you want to split a payment on your own account between yourself and a connected merchant, refer to the `routing` parameter.

## Example Usage

```typescript
import { ApplicationFee } from "mollie/models/operations";

let value: ApplicationFee = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                        | [operations.CreatePaymentAmount](../../models/operations/createpaymentamount.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                              | The fee that you wish to charge.<br/><br/>Be careful to leave enough space for Mollie's own fees to be deducted as well. For example, you cannot charge a €0.99 fee on a €1.00 payment. |
| `description`                                                                                                                                                                   | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | The description of the application fee. This will appear on settlement reports towards both you and the connected merchant.                                                     |