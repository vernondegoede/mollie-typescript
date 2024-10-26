# GetChargebackSettlement

The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { GetChargebackSettlement } from "mollie/models/operations";

let value: GetChargebackSettlement = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |