# Terminal

The API resource URL of the [terminal](get-terminal) this payment was created for. Only present for point-of-sale payments.

## Example Usage

```typescript
import { Terminal } from "mollie/models/operations";

let value: Terminal = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |