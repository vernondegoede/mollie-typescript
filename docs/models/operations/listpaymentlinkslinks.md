# ListPaymentLinksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListPaymentLinksLinks } from "mollie/models/operations";

let value: ListPaymentLinksLinks = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `self`                                                                                               | [operations.ListPaymentLinksSelf](../../models/operations/listpaymentlinksself.md)                   | :heavy_minus_sign:                                                                                   | The URL to the current set of items.                                                                 |
| `previous`                                                                                           | [operations.ListPaymentLinksPrevious](../../models/operations/listpaymentlinksprevious.md)           | :heavy_minus_sign:                                                                                   | The previous set of items, if available.                                                             |
| `next`                                                                                               | [operations.ListPaymentLinksNext](../../models/operations/listpaymentlinksnext.md)                   | :heavy_minus_sign:                                                                                   | The next set of items, if available.                                                                 |
| `documentation`                                                                                      | [operations.ListPaymentLinksDocumentation](../../models/operations/listpaymentlinksdocumentation.md) | :heavy_minus_sign:                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.           |