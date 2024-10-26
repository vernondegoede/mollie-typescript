# GetTerminalLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetTerminalLinks } from "mollie/models/operations";

let value: GetTerminalLinks = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [operations.GetTerminalSelf](../../models/operations/getterminalself.md)                   | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `documentation`                                                                            | [operations.GetTerminalDocumentation](../../models/operations/getterminaldocumentation.md) | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |