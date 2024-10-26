# GetMethodLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetMethodLinks } from "mollie/models/operations";

let value: GetMethodLinks = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [operations.GetMethodSelf](../../models/operations/getmethodself.md)                       | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `documentation`                                                                            | [operations.GetMethodDocumentation](../../models/operations/getmethoddocumentation.md)     | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |