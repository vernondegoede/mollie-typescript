# EnableMethodIssuerRequest

## Example Usage

```typescript
import { EnableMethodIssuerRequest } from "mollie/models/operations";

let value: EnableMethodIssuerRequest = {
  profileId: "pfl_QkEhN94Ba",
  methodId: "voucher",
  id: "edenred-france-sports",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `profileId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related profile.                                                               | pfl_QkEhN94Ba                                                                                        |
| `methodId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related payment method.                                                        | voucher                                                                                              |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the item you want to perform this operation on.                                    | edenred-france-sports                                                                                |
| `requestBody`                                                                                        | [operations.EnableMethodIssuerRequestBody](../../models/operations/enablemethodissuerrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |