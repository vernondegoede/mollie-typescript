# MobileAppCheckout

The deeplink URL to the app of the payment method. Currently only available for `bancontact`.

## Example Usage

```typescript
import { MobileAppCheckout } from "mollie/models/operations";

let value: MobileAppCheckout = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |