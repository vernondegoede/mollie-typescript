# ListMethodsResponseBody

A list of payment method objects. For a complete reference of the payment method object, refer to the [Get payment method endpoint](get-method) documentation.

## Example Usage

```typescript
import { ListMethodsResponseBody } from "mollie/models/operations";

let value: ListMethodsResponseBody = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `count`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | The number of payment method objects in this result set. Results are **not** paginated. |
| `embedded`                                                                              | [operations.ListMethodsEmbedded](../../models/operations/listmethodsembedded.md)        | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `links`                                                                                 | [operations.ListMethodsLinks](../../models/operations/listmethodslinks.md)              | :heavy_minus_sign:                                                                      | N/A                                                                                     |