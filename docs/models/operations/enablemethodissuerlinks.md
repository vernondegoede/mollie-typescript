# EnableMethodIssuerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { EnableMethodIssuerLinks } from "mollie/models/operations";

let value: EnableMethodIssuerLinks = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                   | [operations.EnableMethodIssuerSelf](../../models/operations/enablemethodissuerself.md)                   | :heavy_minus_sign:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |
| `documentation`                                                                                          | [operations.EnableMethodIssuerDocumentation](../../models/operations/enablemethodissuerdocumentation.md) | :heavy_minus_sign:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |