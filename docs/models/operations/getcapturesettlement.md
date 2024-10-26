# GetCaptureSettlement

The API resource URL of the [settlement](get-settlement) this capture has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { GetCaptureSettlement } from "mollie/models/operations";

let value: GetCaptureSettlement = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |