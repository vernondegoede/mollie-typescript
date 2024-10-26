# EnableMethodRequest

## Example Usage

```typescript
import { EnableMethodRequest } from "mollie/models/operations";

let value: EnableMethodRequest = {
  profileId: "pfl_QkEhN94Ba",
  id: "ideal",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `profileId`                                                       | *string*                                                          | :heavy_check_mark:                                                | Provide the ID of the related profile.                            | pfl_QkEhN94Ba                                                     |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Provide the ID of the item you want to perform this operation on. | ideal                                                             |