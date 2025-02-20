/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListAllChargebacksRequest = {
  /**
   * Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the result set.
   */
  from?: string | null | undefined;
  /**
   * The maximum number of items to return. Defaults to 50 items.
   */
  limit?: number | null | undefined;
  /**
   * This endpoint allows you to include additional information via the `include` query string parameter.
   *
   * @remarks
   *
   * * `payment`: Include the payment these chargebacks were issued for.
   */
  include?: string | null | undefined;
  /**
   * The identifier referring to the [profile](get-profile) you wish to retrieve chargebacks for.
   *
   * @remarks
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` is already implied.
   *
   * To retrieve all chargebacks across the organization, use an organization-level API credential and omit the `profileId` parameter.
   */
  profileId?: string | null | undefined;
  /**
   * Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query parameter can be omitted. For organization-level credentials such as OAuth access tokens, you can enable test mode by setting the `testmode` query parameter to `true`.
   *
   * @remarks
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null | undefined;
};

export type ListAllChargebacksRefunds = {};

export type ListAllChargebacksEmbedded = {
  /**
   * A list of chargeback objects. For a complete reference of the chargeback object, refer to the [Get chargeback endpoint](get-chargeback) documentation.
   */
  refunds?: Array<ListAllChargebacksRefunds> | undefined;
};

/**
 * The URL to the current set of items.
 */
export type ListAllChargebacksSelf = {
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
 * The previous set of items, if available.
 */
export type ListAllChargebacksPrevious = {
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
 * The next set of items, if available.
 */
export type ListAllChargebacksNext = {
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
export type ListAllChargebacksDocumentation = {
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
 * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
 */
export type ListAllChargebacksLinks = {
  /**
   * The URL to the current set of items.
   */
  self?: ListAllChargebacksSelf | undefined;
  /**
   * The previous set of items, if available.
   */
  previous?: ListAllChargebacksPrevious | null | undefined;
  /**
   * The next set of items, if available.
   */
  next?: ListAllChargebacksNext | null | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: ListAllChargebacksDocumentation | undefined;
};

/**
 * A list of chargeback objects. For a complete reference of the chargeback object, refer to the [Get chargeback endpoint](get-chargeback) documentation.
 */
export type ListAllChargebacksResponseBody = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.
   *
   * @remarks
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items.
   */
  count?: number | undefined;
  embedded?: ListAllChargebacksEmbedded | undefined;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
   */
  links?: ListAllChargebacksLinks | undefined;
};

/** @internal */
export const ListAllChargebacksRequest$inboundSchema: z.ZodType<
  ListAllChargebacksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  profileId: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/** @internal */
export type ListAllChargebacksRequest$Outbound = {
  from?: string | null | undefined;
  limit: number | null;
  include?: string | null | undefined;
  profileId?: string | null | undefined;
  testmode: boolean | null;
};

/** @internal */
export const ListAllChargebacksRequest$outboundSchema: z.ZodType<
  ListAllChargebacksRequest$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksRequest
> = z.object({
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  profileId: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksRequest$ {
  /** @deprecated use `ListAllChargebacksRequest$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksRequest$inboundSchema;
  /** @deprecated use `ListAllChargebacksRequest$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksRequest$outboundSchema;
  /** @deprecated use `ListAllChargebacksRequest$Outbound` instead. */
  export type Outbound = ListAllChargebacksRequest$Outbound;
}

/** @internal */
export const ListAllChargebacksRefunds$inboundSchema: z.ZodType<
  ListAllChargebacksRefunds,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListAllChargebacksRefunds$Outbound = {};

/** @internal */
export const ListAllChargebacksRefunds$outboundSchema: z.ZodType<
  ListAllChargebacksRefunds$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksRefunds
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksRefunds$ {
  /** @deprecated use `ListAllChargebacksRefunds$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksRefunds$inboundSchema;
  /** @deprecated use `ListAllChargebacksRefunds$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksRefunds$outboundSchema;
  /** @deprecated use `ListAllChargebacksRefunds$Outbound` instead. */
  export type Outbound = ListAllChargebacksRefunds$Outbound;
}

/** @internal */
export const ListAllChargebacksEmbedded$inboundSchema: z.ZodType<
  ListAllChargebacksEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  refunds: z.array(z.lazy(() => ListAllChargebacksRefunds$inboundSchema))
    .optional(),
});

/** @internal */
export type ListAllChargebacksEmbedded$Outbound = {
  refunds?: Array<ListAllChargebacksRefunds$Outbound> | undefined;
};

/** @internal */
export const ListAllChargebacksEmbedded$outboundSchema: z.ZodType<
  ListAllChargebacksEmbedded$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksEmbedded
> = z.object({
  refunds: z.array(z.lazy(() => ListAllChargebacksRefunds$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksEmbedded$ {
  /** @deprecated use `ListAllChargebacksEmbedded$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksEmbedded$inboundSchema;
  /** @deprecated use `ListAllChargebacksEmbedded$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksEmbedded$outboundSchema;
  /** @deprecated use `ListAllChargebacksEmbedded$Outbound` instead. */
  export type Outbound = ListAllChargebacksEmbedded$Outbound;
}

/** @internal */
export const ListAllChargebacksSelf$inboundSchema: z.ZodType<
  ListAllChargebacksSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListAllChargebacksSelf$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListAllChargebacksSelf$outboundSchema: z.ZodType<
  ListAllChargebacksSelf$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksSelf
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksSelf$ {
  /** @deprecated use `ListAllChargebacksSelf$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksSelf$inboundSchema;
  /** @deprecated use `ListAllChargebacksSelf$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksSelf$outboundSchema;
  /** @deprecated use `ListAllChargebacksSelf$Outbound` instead. */
  export type Outbound = ListAllChargebacksSelf$Outbound;
}

/** @internal */
export const ListAllChargebacksPrevious$inboundSchema: z.ZodType<
  ListAllChargebacksPrevious,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListAllChargebacksPrevious$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListAllChargebacksPrevious$outboundSchema: z.ZodType<
  ListAllChargebacksPrevious$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksPrevious
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksPrevious$ {
  /** @deprecated use `ListAllChargebacksPrevious$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksPrevious$inboundSchema;
  /** @deprecated use `ListAllChargebacksPrevious$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksPrevious$outboundSchema;
  /** @deprecated use `ListAllChargebacksPrevious$Outbound` instead. */
  export type Outbound = ListAllChargebacksPrevious$Outbound;
}

/** @internal */
export const ListAllChargebacksNext$inboundSchema: z.ZodType<
  ListAllChargebacksNext,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListAllChargebacksNext$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListAllChargebacksNext$outboundSchema: z.ZodType<
  ListAllChargebacksNext$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksNext
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksNext$ {
  /** @deprecated use `ListAllChargebacksNext$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksNext$inboundSchema;
  /** @deprecated use `ListAllChargebacksNext$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksNext$outboundSchema;
  /** @deprecated use `ListAllChargebacksNext$Outbound` instead. */
  export type Outbound = ListAllChargebacksNext$Outbound;
}

/** @internal */
export const ListAllChargebacksDocumentation$inboundSchema: z.ZodType<
  ListAllChargebacksDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListAllChargebacksDocumentation$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListAllChargebacksDocumentation$outboundSchema: z.ZodType<
  ListAllChargebacksDocumentation$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksDocumentation
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksDocumentation$ {
  /** @deprecated use `ListAllChargebacksDocumentation$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksDocumentation$inboundSchema;
  /** @deprecated use `ListAllChargebacksDocumentation$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksDocumentation$outboundSchema;
  /** @deprecated use `ListAllChargebacksDocumentation$Outbound` instead. */
  export type Outbound = ListAllChargebacksDocumentation$Outbound;
}

/** @internal */
export const ListAllChargebacksLinks$inboundSchema: z.ZodType<
  ListAllChargebacksLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => ListAllChargebacksSelf$inboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListAllChargebacksPrevious$inboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListAllChargebacksNext$inboundSchema))
    .optional(),
  documentation: z.lazy(() => ListAllChargebacksDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type ListAllChargebacksLinks$Outbound = {
  self?: ListAllChargebacksSelf$Outbound | undefined;
  previous?: ListAllChargebacksPrevious$Outbound | null | undefined;
  next?: ListAllChargebacksNext$Outbound | null | undefined;
  documentation?: ListAllChargebacksDocumentation$Outbound | undefined;
};

/** @internal */
export const ListAllChargebacksLinks$outboundSchema: z.ZodType<
  ListAllChargebacksLinks$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksLinks
> = z.object({
  self: z.lazy(() => ListAllChargebacksSelf$outboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListAllChargebacksPrevious$outboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListAllChargebacksNext$outboundSchema))
    .optional(),
  documentation: z.lazy(() => ListAllChargebacksDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksLinks$ {
  /** @deprecated use `ListAllChargebacksLinks$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksLinks$inboundSchema;
  /** @deprecated use `ListAllChargebacksLinks$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksLinks$outboundSchema;
  /** @deprecated use `ListAllChargebacksLinks$Outbound` instead. */
  export type Outbound = ListAllChargebacksLinks$Outbound;
}

/** @internal */
export const ListAllChargebacksResponseBody$inboundSchema: z.ZodType<
  ListAllChargebacksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  _embedded: z.lazy(() => ListAllChargebacksEmbedded$inboundSchema).optional(),
  _links: z.lazy(() => ListAllChargebacksLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_embedded": "embedded",
    "_links": "links",
  });
});

/** @internal */
export type ListAllChargebacksResponseBody$Outbound = {
  count?: number | undefined;
  _embedded?: ListAllChargebacksEmbedded$Outbound | undefined;
  _links?: ListAllChargebacksLinks$Outbound | undefined;
};

/** @internal */
export const ListAllChargebacksResponseBody$outboundSchema: z.ZodType<
  ListAllChargebacksResponseBody$Outbound,
  z.ZodTypeDef,
  ListAllChargebacksResponseBody
> = z.object({
  count: z.number().int().optional(),
  embedded: z.lazy(() => ListAllChargebacksEmbedded$outboundSchema).optional(),
  links: z.lazy(() => ListAllChargebacksLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    embedded: "_embedded",
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChargebacksResponseBody$ {
  /** @deprecated use `ListAllChargebacksResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAllChargebacksResponseBody$inboundSchema;
  /** @deprecated use `ListAllChargebacksResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListAllChargebacksResponseBody$outboundSchema;
  /** @deprecated use `ListAllChargebacksResponseBody$Outbound` instead. */
  export type Outbound = ListAllChargebacksResponseBody$Outbound;
}
