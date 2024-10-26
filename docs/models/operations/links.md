# Links

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { Links } from "mollie/models/operations";

let value: Links = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [operations.Self](../../models/operations/self.md)                                         | :heavy_minus_sign:                                                                         | The URL to the current set of items.                                                       |
| `previous`                                                                                 | [operations.Previous](../../models/operations/previous.md)                                 | :heavy_minus_sign:                                                                         | The previous set of items, if available.                                                   |
| `next`                                                                                     | [operations.Next](../../models/operations/next.md)                                         | :heavy_minus_sign:                                                                         | The next set of items, if available.                                                       |
| `documentation`                                                                            | [operations.Documentation](../../models/operations/documentation.md)                       | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |