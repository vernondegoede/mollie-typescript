# ListAllChargebacksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllChargebacksLinks } from "mollie/models/operations";

let value: ListAllChargebacksLinks = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                   | [operations.ListAllChargebacksSelf](../../models/operations/listallchargebacksself.md)                   | :heavy_minus_sign:                                                                                       | The URL to the current set of items.                                                                     |
| `previous`                                                                                               | [operations.ListAllChargebacksPrevious](../../models/operations/listallchargebacksprevious.md)           | :heavy_minus_sign:                                                                                       | The previous set of items, if available.                                                                 |
| `next`                                                                                                   | [operations.ListAllChargebacksNext](../../models/operations/listallchargebacksnext.md)                   | :heavy_minus_sign:                                                                                       | The next set of items, if available.                                                                     |
| `documentation`                                                                                          | [operations.ListAllChargebacksDocumentation](../../models/operations/listallchargebacksdocumentation.md) | :heavy_minus_sign:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |