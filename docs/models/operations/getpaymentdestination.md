# GetPaymentDestination

The destination of this portion of the payment.

## Example Usage

```typescript
import { GetPaymentDestination } from "mollie/models/operations";

let value: GetPaymentDestination = {
  organizationId: "org_12345678",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The type of destination. Currently only the destination type `organization` is supported.<br/><br/>Possible values: `organization` |                                                                                                                            |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Required for destination type `organization`. The ID of the connected organization the funds should be routed to.          | org_12345678                                                                                                               |