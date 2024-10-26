# EnableMethodLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { EnableMethodLinks } from "mollie/models/operations";

let value: EnableMethodLinks = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `self`                                                                                       | [operations.EnableMethodSelf](../../models/operations/enablemethodself.md)                   | :heavy_minus_sign:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |
| `documentation`                                                                              | [operations.EnableMethodDocumentation](../../models/operations/enablemethoddocumentation.md) | :heavy_minus_sign:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |