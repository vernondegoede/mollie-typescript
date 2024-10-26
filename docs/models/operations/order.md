# Order

The API resource URL of the [order](get-order) this payment was created for. Not present if not created for an order.

## Example Usage

```typescript
import { Order } from "mollie/models/operations";

let value: Order = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |