# ListOrderRefundsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListOrderRefundsLinks } from "mollie/models/operations";

let value: ListOrderRefundsLinks = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `self`                                                                                               | [operations.ListOrderRefundsSelf](../../models/operations/listorderrefundsself.md)                   | :heavy_minus_sign:                                                                                   | The URL to the current set of items.                                                                 |
| `previous`                                                                                           | [operations.ListOrderRefundsPrevious](../../models/operations/listorderrefundsprevious.md)           | :heavy_minus_sign:                                                                                   | The previous set of items, if available.                                                             |
| `next`                                                                                               | [operations.ListOrderRefundsNext](../../models/operations/listorderrefundsnext.md)                   | :heavy_minus_sign:                                                                                   | The next set of items, if available.                                                                 |
| `documentation`                                                                                      | [operations.ListOrderRefundsDocumentation](../../models/operations/listorderrefundsdocumentation.md) | :heavy_minus_sign:                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.           |