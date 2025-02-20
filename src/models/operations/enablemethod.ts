/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type EnableMethodRequest = {
  /**
   * Provide the ID of the related profile.
   */
  profileId: string;
  /**
   * Provide the ID of the item you want to perform this operation on.
   */
  id: string;
};

/**
 * The minimum payment amount required to use this payment method.
 */
export type EnableMethodMinimumAmount = {
  /**
   * A three-character ISO 4217 currency code.
   */
  currency: string;
  /**
   * A string containing an exact monetary amount in the given currency.
   */
  value: string;
};

/**
 * The maximum payment amount allowed when using this payment method. If there is no method-specific maximum, `null` is returned instead.
 */
export type EnableMethodMaximumAmount = {
  /**
   * A three-character ISO 4217 currency code.
   */
  currency: string;
  /**
   * A string containing an exact monetary amount in the given currency.
   */
  value: string;
};

/**
 * URLs of images representing the payment method.
 */
export type EnableMethodImage = {
  /**
   * The URL pointing to an icon of 32 by 24 pixels.
   */
  size1x?: string | undefined;
  /**
   * The URL pointing to an icon of 64 by 48 pixels.
   */
  size2x?: string | undefined;
  /**
   * The URL pointing to a vector version of the icon. Usage of this format is preferred, since the icon can scale to any desired size without compromising visual quality.
   */
  svg?: string | undefined;
};

/**
 * The fixed price charged per payment.
 */
export type EnableMethodFixed = {
  /**
   * A three-character ISO 4217 currency code.
   */
  currency: string;
  /**
   * A string containing an exact monetary amount in the given currency.
   */
  value: string;
};

export type EnableMethodPricing = {
  /**
   * A description of what the pricing applies to. For example, a specific country (`The Netherlands`) or a category of cards (`American Express`). If a `locale` is provided, the description may be translated.
   */
  description?: string | undefined;
  /**
   * The fixed price charged per payment.
   */
  fixed?: EnableMethodFixed | undefined;
  /**
   * The variable price charged per payment, as a percentage string.
   */
  variable?: string | undefined;
  /**
   * Only present for credit card pricing. It will correspond with the `feeRegion` of credit card payments as returned in the [Payments API](get-payment).
   */
  feeRegion?: string | undefined;
};

/**
 * URLs of images representing the issuer.
 */
export type EnableMethodMethodsAPIImage = {
  /**
   * The URL pointing to an icon of 32 by 24 pixels.
   */
  size1x?: string | undefined;
  /**
   * The URL pointing to an icon of 64 by 48 pixels.
   */
  size2x?: string | undefined;
  /**
   * The URL pointing to a vector version of the icon. Usage of this format is preferred, since the icon can scale to any desired size without compromising visual quality.
   */
  svg?: string | undefined;
};

export type EnableMethodIssuers = {
  resource?: string | undefined;
  id?: string | undefined;
  /**
   * The full name of the issuer.
   */
  name?: string | undefined;
  /**
   * URLs of images representing the issuer.
   */
  image?: EnableMethodMethodsAPIImage | undefined;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type EnableMethodSelf = {
  /**
   * The actual URL string.
   */
  href?: string | undefined;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type?: string | undefined;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type EnableMethodDocumentation = {
  /**
   * The actual URL string.
   */
  href?: string | undefined;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type?: string | undefined;
};

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type EnableMethodLinks = {
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  self?: EnableMethodSelf | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: EnableMethodDocumentation | undefined;
};

/**
 * The payment method object.
 */
export type EnableMethodResponseBody = {
  /**
   * Indicates the response contains a payment method object. Will always contain the string `method` for this endpoint.
   */
  resource?: string | undefined;
  /**
   * The unique identifier of the payment method. When used during [payment creation](create-payment), the payment method selection screen will be skipped.
   *
   * @remarks
   *
   * Possible values: `applepay` `bancontact` `banktransfer` `belfius` `billie` `creditcard` `directdebit` `eps` `giftcard` `giropay` `ideal` `in3` `kbc` `klarna` `klarnapaylater` `klarnapaynow` `klarnasliceit` `mybank` `paypal` `paysafecard` `przelewy24` `sofort` `twint` `voucher`
   */
  id?: string | undefined;
  /**
   * The full name of the payment method.
   *
   * @remarks
   *
   * If a `locale` parameter is provided, the name is translated to the given locale if possible.
   */
  description?: string | undefined;
  /**
   * The minimum payment amount required to use this payment method.
   */
  minimumAmount?: EnableMethodMinimumAmount | undefined;
  /**
   * The maximum payment amount allowed when using this payment method. If there is no method-specific maximum, `null` is returned instead.
   */
  maximumAmount?: EnableMethodMaximumAmount | null | undefined;
  /**
   * URLs of images representing the payment method.
   */
  image?: EnableMethodImage | undefined;
  /**
   * The payment method's activation status for this profile.
   *
   * @remarks
   *
   * Possible values:
   * * `activated`: The payment method is activated and ready for use.
   * * `pending-boarding`: Mollie is waiting for you to finish onboarding in the Merchant Dashboard before the payment method can be activated.
   * * `pending-review`: Mollie needs to review your request for this payment method before it can be activated.
   * * `pending-external`: Activation of this payment method relies on you taking action with an external party, for example signing up with PayPal or a giftcard issuer.
   * * `rejected`: Your request for this payment method was rejected. Whenever Mollie rejects such a request, you will always be informed via email.
   * * `null`: This payment method was not requested.
   */
  status?: string | undefined;
  /**
   * **Optional include.** Array of objects describing the pricing configuration applicable for this payment method on your account.
   */
  pricing?: Array<EnableMethodPricing> | undefined;
  /**
   * **Optional include.** Array of objects for each 'issuer' that is available for this payment method. Only relevant for iDEAL, KBC/CBC, gift cards, and vouchers.
   */
  issuers?: Array<EnableMethodIssuers> | undefined;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
   */
  links?: EnableMethodLinks | undefined;
};

/** @internal */
export const EnableMethodRequest$inboundSchema: z.ZodType<
  EnableMethodRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  profileId: z.string(),
  id: z.string(),
});

/** @internal */
export type EnableMethodRequest$Outbound = {
  profileId: string;
  id: string;
};

/** @internal */
export const EnableMethodRequest$outboundSchema: z.ZodType<
  EnableMethodRequest$Outbound,
  z.ZodTypeDef,
  EnableMethodRequest
> = z.object({
  profileId: z.string(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodRequest$ {
  /** @deprecated use `EnableMethodRequest$inboundSchema` instead. */
  export const inboundSchema = EnableMethodRequest$inboundSchema;
  /** @deprecated use `EnableMethodRequest$outboundSchema` instead. */
  export const outboundSchema = EnableMethodRequest$outboundSchema;
  /** @deprecated use `EnableMethodRequest$Outbound` instead. */
  export type Outbound = EnableMethodRequest$Outbound;
}

/** @internal */
export const EnableMethodMinimumAmount$inboundSchema: z.ZodType<
  EnableMethodMinimumAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/** @internal */
export type EnableMethodMinimumAmount$Outbound = {
  currency: string;
  value: string;
};

/** @internal */
export const EnableMethodMinimumAmount$outboundSchema: z.ZodType<
  EnableMethodMinimumAmount$Outbound,
  z.ZodTypeDef,
  EnableMethodMinimumAmount
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodMinimumAmount$ {
  /** @deprecated use `EnableMethodMinimumAmount$inboundSchema` instead. */
  export const inboundSchema = EnableMethodMinimumAmount$inboundSchema;
  /** @deprecated use `EnableMethodMinimumAmount$outboundSchema` instead. */
  export const outboundSchema = EnableMethodMinimumAmount$outboundSchema;
  /** @deprecated use `EnableMethodMinimumAmount$Outbound` instead. */
  export type Outbound = EnableMethodMinimumAmount$Outbound;
}

/** @internal */
export const EnableMethodMaximumAmount$inboundSchema: z.ZodType<
  EnableMethodMaximumAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/** @internal */
export type EnableMethodMaximumAmount$Outbound = {
  currency: string;
  value: string;
};

/** @internal */
export const EnableMethodMaximumAmount$outboundSchema: z.ZodType<
  EnableMethodMaximumAmount$Outbound,
  z.ZodTypeDef,
  EnableMethodMaximumAmount
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodMaximumAmount$ {
  /** @deprecated use `EnableMethodMaximumAmount$inboundSchema` instead. */
  export const inboundSchema = EnableMethodMaximumAmount$inboundSchema;
  /** @deprecated use `EnableMethodMaximumAmount$outboundSchema` instead. */
  export const outboundSchema = EnableMethodMaximumAmount$outboundSchema;
  /** @deprecated use `EnableMethodMaximumAmount$Outbound` instead. */
  export type Outbound = EnableMethodMaximumAmount$Outbound;
}

/** @internal */
export const EnableMethodImage$inboundSchema: z.ZodType<
  EnableMethodImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  size1x: z.string().optional(),
  size2x: z.string().optional(),
  svg: z.string().optional(),
});

/** @internal */
export type EnableMethodImage$Outbound = {
  size1x?: string | undefined;
  size2x?: string | undefined;
  svg?: string | undefined;
};

/** @internal */
export const EnableMethodImage$outboundSchema: z.ZodType<
  EnableMethodImage$Outbound,
  z.ZodTypeDef,
  EnableMethodImage
> = z.object({
  size1x: z.string().optional(),
  size2x: z.string().optional(),
  svg: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodImage$ {
  /** @deprecated use `EnableMethodImage$inboundSchema` instead. */
  export const inboundSchema = EnableMethodImage$inboundSchema;
  /** @deprecated use `EnableMethodImage$outboundSchema` instead. */
  export const outboundSchema = EnableMethodImage$outboundSchema;
  /** @deprecated use `EnableMethodImage$Outbound` instead. */
  export type Outbound = EnableMethodImage$Outbound;
}

/** @internal */
export const EnableMethodFixed$inboundSchema: z.ZodType<
  EnableMethodFixed,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/** @internal */
export type EnableMethodFixed$Outbound = {
  currency: string;
  value: string;
};

/** @internal */
export const EnableMethodFixed$outboundSchema: z.ZodType<
  EnableMethodFixed$Outbound,
  z.ZodTypeDef,
  EnableMethodFixed
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodFixed$ {
  /** @deprecated use `EnableMethodFixed$inboundSchema` instead. */
  export const inboundSchema = EnableMethodFixed$inboundSchema;
  /** @deprecated use `EnableMethodFixed$outboundSchema` instead. */
  export const outboundSchema = EnableMethodFixed$outboundSchema;
  /** @deprecated use `EnableMethodFixed$Outbound` instead. */
  export type Outbound = EnableMethodFixed$Outbound;
}

/** @internal */
export const EnableMethodPricing$inboundSchema: z.ZodType<
  EnableMethodPricing,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  fixed: z.lazy(() => EnableMethodFixed$inboundSchema).optional(),
  variable: z.string().optional(),
  feeRegion: z.string().optional(),
});

/** @internal */
export type EnableMethodPricing$Outbound = {
  description?: string | undefined;
  fixed?: EnableMethodFixed$Outbound | undefined;
  variable?: string | undefined;
  feeRegion?: string | undefined;
};

/** @internal */
export const EnableMethodPricing$outboundSchema: z.ZodType<
  EnableMethodPricing$Outbound,
  z.ZodTypeDef,
  EnableMethodPricing
> = z.object({
  description: z.string().optional(),
  fixed: z.lazy(() => EnableMethodFixed$outboundSchema).optional(),
  variable: z.string().optional(),
  feeRegion: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodPricing$ {
  /** @deprecated use `EnableMethodPricing$inboundSchema` instead. */
  export const inboundSchema = EnableMethodPricing$inboundSchema;
  /** @deprecated use `EnableMethodPricing$outboundSchema` instead. */
  export const outboundSchema = EnableMethodPricing$outboundSchema;
  /** @deprecated use `EnableMethodPricing$Outbound` instead. */
  export type Outbound = EnableMethodPricing$Outbound;
}

/** @internal */
export const EnableMethodMethodsAPIImage$inboundSchema: z.ZodType<
  EnableMethodMethodsAPIImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  size1x: z.string().optional(),
  size2x: z.string().optional(),
  svg: z.string().optional(),
});

/** @internal */
export type EnableMethodMethodsAPIImage$Outbound = {
  size1x?: string | undefined;
  size2x?: string | undefined;
  svg?: string | undefined;
};

/** @internal */
export const EnableMethodMethodsAPIImage$outboundSchema: z.ZodType<
  EnableMethodMethodsAPIImage$Outbound,
  z.ZodTypeDef,
  EnableMethodMethodsAPIImage
> = z.object({
  size1x: z.string().optional(),
  size2x: z.string().optional(),
  svg: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodMethodsAPIImage$ {
  /** @deprecated use `EnableMethodMethodsAPIImage$inboundSchema` instead. */
  export const inboundSchema = EnableMethodMethodsAPIImage$inboundSchema;
  /** @deprecated use `EnableMethodMethodsAPIImage$outboundSchema` instead. */
  export const outboundSchema = EnableMethodMethodsAPIImage$outboundSchema;
  /** @deprecated use `EnableMethodMethodsAPIImage$Outbound` instead. */
  export type Outbound = EnableMethodMethodsAPIImage$Outbound;
}

/** @internal */
export const EnableMethodIssuers$inboundSchema: z.ZodType<
  EnableMethodIssuers,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().default("issuer"),
  id: z.string().optional(),
  name: z.string().optional(),
  image: z.lazy(() => EnableMethodMethodsAPIImage$inboundSchema).optional(),
});

/** @internal */
export type EnableMethodIssuers$Outbound = {
  resource: string;
  id?: string | undefined;
  name?: string | undefined;
  image?: EnableMethodMethodsAPIImage$Outbound | undefined;
};

/** @internal */
export const EnableMethodIssuers$outboundSchema: z.ZodType<
  EnableMethodIssuers$Outbound,
  z.ZodTypeDef,
  EnableMethodIssuers
> = z.object({
  resource: z.string().default("issuer"),
  id: z.string().optional(),
  name: z.string().optional(),
  image: z.lazy(() => EnableMethodMethodsAPIImage$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodIssuers$ {
  /** @deprecated use `EnableMethodIssuers$inboundSchema` instead. */
  export const inboundSchema = EnableMethodIssuers$inboundSchema;
  /** @deprecated use `EnableMethodIssuers$outboundSchema` instead. */
  export const outboundSchema = EnableMethodIssuers$outboundSchema;
  /** @deprecated use `EnableMethodIssuers$Outbound` instead. */
  export type Outbound = EnableMethodIssuers$Outbound;
}

/** @internal */
export const EnableMethodSelf$inboundSchema: z.ZodType<
  EnableMethodSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type EnableMethodSelf$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const EnableMethodSelf$outboundSchema: z.ZodType<
  EnableMethodSelf$Outbound,
  z.ZodTypeDef,
  EnableMethodSelf
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodSelf$ {
  /** @deprecated use `EnableMethodSelf$inboundSchema` instead. */
  export const inboundSchema = EnableMethodSelf$inboundSchema;
  /** @deprecated use `EnableMethodSelf$outboundSchema` instead. */
  export const outboundSchema = EnableMethodSelf$outboundSchema;
  /** @deprecated use `EnableMethodSelf$Outbound` instead. */
  export type Outbound = EnableMethodSelf$Outbound;
}

/** @internal */
export const EnableMethodDocumentation$inboundSchema: z.ZodType<
  EnableMethodDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type EnableMethodDocumentation$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const EnableMethodDocumentation$outboundSchema: z.ZodType<
  EnableMethodDocumentation$Outbound,
  z.ZodTypeDef,
  EnableMethodDocumentation
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodDocumentation$ {
  /** @deprecated use `EnableMethodDocumentation$inboundSchema` instead. */
  export const inboundSchema = EnableMethodDocumentation$inboundSchema;
  /** @deprecated use `EnableMethodDocumentation$outboundSchema` instead. */
  export const outboundSchema = EnableMethodDocumentation$outboundSchema;
  /** @deprecated use `EnableMethodDocumentation$Outbound` instead. */
  export type Outbound = EnableMethodDocumentation$Outbound;
}

/** @internal */
export const EnableMethodLinks$inboundSchema: z.ZodType<
  EnableMethodLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => EnableMethodSelf$inboundSchema).optional(),
  documentation: z.lazy(() => EnableMethodDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type EnableMethodLinks$Outbound = {
  self?: EnableMethodSelf$Outbound | undefined;
  documentation?: EnableMethodDocumentation$Outbound | undefined;
};

/** @internal */
export const EnableMethodLinks$outboundSchema: z.ZodType<
  EnableMethodLinks$Outbound,
  z.ZodTypeDef,
  EnableMethodLinks
> = z.object({
  self: z.lazy(() => EnableMethodSelf$outboundSchema).optional(),
  documentation: z.lazy(() => EnableMethodDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodLinks$ {
  /** @deprecated use `EnableMethodLinks$inboundSchema` instead. */
  export const inboundSchema = EnableMethodLinks$inboundSchema;
  /** @deprecated use `EnableMethodLinks$outboundSchema` instead. */
  export const outboundSchema = EnableMethodLinks$outboundSchema;
  /** @deprecated use `EnableMethodLinks$Outbound` instead. */
  export type Outbound = EnableMethodLinks$Outbound;
}

/** @internal */
export const EnableMethodResponseBody$inboundSchema: z.ZodType<
  EnableMethodResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().default("method"),
  id: z.string().optional(),
  description: z.string().optional(),
  minimumAmount: z.lazy(() => EnableMethodMinimumAmount$inboundSchema)
    .optional(),
  maximumAmount: z.nullable(
    z.lazy(() => EnableMethodMaximumAmount$inboundSchema),
  ).optional(),
  image: z.lazy(() => EnableMethodImage$inboundSchema).optional(),
  status: z.string().optional(),
  pricing: z.array(z.lazy(() => EnableMethodPricing$inboundSchema)).optional(),
  issuers: z.array(z.lazy(() => EnableMethodIssuers$inboundSchema)).optional(),
  _links: z.lazy(() => EnableMethodLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type EnableMethodResponseBody$Outbound = {
  resource: string;
  id?: string | undefined;
  description?: string | undefined;
  minimumAmount?: EnableMethodMinimumAmount$Outbound | undefined;
  maximumAmount?: EnableMethodMaximumAmount$Outbound | null | undefined;
  image?: EnableMethodImage$Outbound | undefined;
  status?: string | undefined;
  pricing?: Array<EnableMethodPricing$Outbound> | undefined;
  issuers?: Array<EnableMethodIssuers$Outbound> | undefined;
  _links?: EnableMethodLinks$Outbound | undefined;
};

/** @internal */
export const EnableMethodResponseBody$outboundSchema: z.ZodType<
  EnableMethodResponseBody$Outbound,
  z.ZodTypeDef,
  EnableMethodResponseBody
> = z.object({
  resource: z.string().default("method"),
  id: z.string().optional(),
  description: z.string().optional(),
  minimumAmount: z.lazy(() => EnableMethodMinimumAmount$outboundSchema)
    .optional(),
  maximumAmount: z.nullable(
    z.lazy(() => EnableMethodMaximumAmount$outboundSchema),
  ).optional(),
  image: z.lazy(() => EnableMethodImage$outboundSchema).optional(),
  status: z.string().optional(),
  pricing: z.array(z.lazy(() => EnableMethodPricing$outboundSchema)).optional(),
  issuers: z.array(z.lazy(() => EnableMethodIssuers$outboundSchema)).optional(),
  links: z.lazy(() => EnableMethodLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnableMethodResponseBody$ {
  /** @deprecated use `EnableMethodResponseBody$inboundSchema` instead. */
  export const inboundSchema = EnableMethodResponseBody$inboundSchema;
  /** @deprecated use `EnableMethodResponseBody$outboundSchema` instead. */
  export const outboundSchema = EnableMethodResponseBody$outboundSchema;
  /** @deprecated use `EnableMethodResponseBody$Outbound` instead. */
  export type Outbound = EnableMethodResponseBody$Outbound;
}
