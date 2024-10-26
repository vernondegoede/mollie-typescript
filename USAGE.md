<!-- Start SDK Example Usage [usage] -->
```typescript
import { Mollie } from "mollie";

const mollie = new Mollie({
  bearerAuth: process.env["MOLLIE_BEARER_AUTH"] ?? "",
});

async function run() {
  await mollie.paymentsAPI.createPayment({
    requestBody: {
      description:
        "youthfully abaft while hammock covenant so whine very modulo highly",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://mean-deduction.com/",
      lines: [
        {
          description:
            "youthfully abaft while hammock covenant so whine very modulo highly",
          quantity: 166482,
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discountAmount: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
        },
      ],
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
      },
      routing: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            organizationId: "org_12345678",
          },
        },
      ],
      mandateId: "mdt_pWUnw6pkBN",
      customerId: "cst_8wmqcHMN4U",
      profileId: "pfl_QkEhN94Ba",
    },
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->