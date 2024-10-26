# ListChargebacksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListChargebacksLinks } from "mollie/models/operations";

let value: ListChargebacksLinks = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.ListChargebacksSelf](../../models/operations/listchargebacksself.md)                   | :heavy_minus_sign:                                                                                 | The URL to the current set of items.                                                               |
| `previous`                                                                                         | [operations.ListChargebacksPrevious](../../models/operations/listchargebacksprevious.md)           | :heavy_minus_sign:                                                                                 | The previous set of items, if available.                                                           |
| `next`                                                                                             | [operations.ListChargebacksNext](../../models/operations/listchargebacksnext.md)                   | :heavy_minus_sign:                                                                                 | The next set of items, if available.                                                               |
| `documentation`                                                                                    | [operations.ListChargebacksDocumentation](../../models/operations/listchargebacksdocumentation.md) | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |