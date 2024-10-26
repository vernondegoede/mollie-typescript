# ListCapturesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListCapturesLinks } from "mollie/models/operations";

let value: ListCapturesLinks = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `self`                                                                                       | [operations.ListCapturesSelf](../../models/operations/listcapturesself.md)                   | :heavy_minus_sign:                                                                           | The URL to the current set of items.                                                         |
| `previous`                                                                                   | [operations.ListCapturesPrevious](../../models/operations/listcapturesprevious.md)           | :heavy_minus_sign:                                                                           | The previous set of items, if available.                                                     |
| `next`                                                                                       | [operations.ListCapturesNext](../../models/operations/listcapturesnext.md)                   | :heavy_minus_sign:                                                                           | The next set of items, if available.                                                         |
| `documentation`                                                                              | [operations.ListCapturesDocumentation](../../models/operations/listcapturesdocumentation.md) | :heavy_minus_sign:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |