# Issuers

## Example Usage

```typescript
import { Issuers } from "mollie/models/operations";

let value: Issuers = {
  id: "ideal_ABNANL2A",
  name: "ING Bank",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `resource`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | ideal_ABNANL2A                                                         |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The full name of the issuer.                                           | ING Bank                                                               |
| `image`                                                                | [operations.GetMethodImage](../../models/operations/getmethodimage.md) | :heavy_minus_sign:                                                     | URLs of images representing the issuer.                                |                                                                        |