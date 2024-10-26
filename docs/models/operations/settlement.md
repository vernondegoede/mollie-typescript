# Settlement

The API resource URL of the [settlement](get-settlement) this payment has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { Settlement } from "mollie/models/operations";

let value: Settlement = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |