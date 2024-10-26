# EnableMethodIssuerDocumentation

In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.

## Example Usage

```typescript
import { EnableMethodIssuerDocumentation } from "mollie/models/operations";

let value: EnableMethodIssuerDocumentation = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |