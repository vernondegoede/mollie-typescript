/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListRefundsRequest = {
  /**
   * Provide the ID of the related payment.
   */
  paymentId: string;
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
   * * `payment`: Include the payments that the refunds were created for.
   */
  include?: string | null | undefined;
  /**
   * Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query parameter can be omitted. For organization-level credentials such as OAuth access tokens, you can enable test mode by setting the `testmode` query parameter to `true`.
   *
   * @remarks
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null | undefined;
};

export type ListRefundsRefunds = {};

export type ListRefundsEmbedded = {
  /**
   * An array of refund objects. For a complete reference of the refund object, refer to the [Get refund endpoint](get-refund) documentation.
   */
  refunds?: Array<ListRefundsRefunds> | undefined;
};

/**
 * The URL to the current set of items.
 */
export type ListRefundsSelf = {
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
export type ListRefundsPrevious = {
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
export type ListRefundsNext = {
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
export type ListRefundsDocumentation = {
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
export type ListRefundsLinks = {
  /**
   * The URL to the current set of items.
   */
  self?: ListRefundsSelf | undefined;
  /**
   * The previous set of items, if available.
   */
  previous?: ListRefundsPrevious | null | undefined;
  /**
   * The next set of items, if available.
   */
  next?: ListRefundsNext | null | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: ListRefundsDocumentation | undefined;
};

/**
 * A list of refund objects. For a complete reference of the refund object, refer to the [Get refund endpoint](get-refund) documentation.
 */
export type ListRefundsResponseBody = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.
   *
   * @remarks
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items.
   */
  count?: number | undefined;
  embedded?: ListRefundsEmbedded | undefined;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
   */
  links?: ListRefundsLinks | undefined;
};

/** @internal */
export const ListRefundsRequest$inboundSchema: z.ZodType<
  ListRefundsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentId: z.string(),
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/** @internal */
export type ListRefundsRequest$Outbound = {
  paymentId: string;
  from?: string | null | undefined;
  limit: number | null;
  include?: string | null | undefined;
  testmode: boolean | null;
};

/** @internal */
export const ListRefundsRequest$outboundSchema: z.ZodType<
  ListRefundsRequest$Outbound,
  z.ZodTypeDef,
  ListRefundsRequest
> = z.object({
  paymentId: z.string(),
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsRequest$ {
  /** @deprecated use `ListRefundsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRefundsRequest$inboundSchema;
  /** @deprecated use `ListRefundsRequest$outboundSchema` instead. */
  export const outboundSchema = ListRefundsRequest$outboundSchema;
  /** @deprecated use `ListRefundsRequest$Outbound` instead. */
  export type Outbound = ListRefundsRequest$Outbound;
}

/** @internal */
export const ListRefundsRefunds$inboundSchema: z.ZodType<
  ListRefundsRefunds,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListRefundsRefunds$Outbound = {};

/** @internal */
export const ListRefundsRefunds$outboundSchema: z.ZodType<
  ListRefundsRefunds$Outbound,
  z.ZodTypeDef,
  ListRefundsRefunds
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsRefunds$ {
  /** @deprecated use `ListRefundsRefunds$inboundSchema` instead. */
  export const inboundSchema = ListRefundsRefunds$inboundSchema;
  /** @deprecated use `ListRefundsRefunds$outboundSchema` instead. */
  export const outboundSchema = ListRefundsRefunds$outboundSchema;
  /** @deprecated use `ListRefundsRefunds$Outbound` instead. */
  export type Outbound = ListRefundsRefunds$Outbound;
}

/** @internal */
export const ListRefundsEmbedded$inboundSchema: z.ZodType<
  ListRefundsEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  refunds: z.array(z.lazy(() => ListRefundsRefunds$inboundSchema)).optional(),
});

/** @internal */
export type ListRefundsEmbedded$Outbound = {
  refunds?: Array<ListRefundsRefunds$Outbound> | undefined;
};

/** @internal */
export const ListRefundsEmbedded$outboundSchema: z.ZodType<
  ListRefundsEmbedded$Outbound,
  z.ZodTypeDef,
  ListRefundsEmbedded
> = z.object({
  refunds: z.array(z.lazy(() => ListRefundsRefunds$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsEmbedded$ {
  /** @deprecated use `ListRefundsEmbedded$inboundSchema` instead. */
  export const inboundSchema = ListRefundsEmbedded$inboundSchema;
  /** @deprecated use `ListRefundsEmbedded$outboundSchema` instead. */
  export const outboundSchema = ListRefundsEmbedded$outboundSchema;
  /** @deprecated use `ListRefundsEmbedded$Outbound` instead. */
  export type Outbound = ListRefundsEmbedded$Outbound;
}

/** @internal */
export const ListRefundsSelf$inboundSchema: z.ZodType<
  ListRefundsSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListRefundsSelf$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListRefundsSelf$outboundSchema: z.ZodType<
  ListRefundsSelf$Outbound,
  z.ZodTypeDef,
  ListRefundsSelf
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsSelf$ {
  /** @deprecated use `ListRefundsSelf$inboundSchema` instead. */
  export const inboundSchema = ListRefundsSelf$inboundSchema;
  /** @deprecated use `ListRefundsSelf$outboundSchema` instead. */
  export const outboundSchema = ListRefundsSelf$outboundSchema;
  /** @deprecated use `ListRefundsSelf$Outbound` instead. */
  export type Outbound = ListRefundsSelf$Outbound;
}

/** @internal */
export const ListRefundsPrevious$inboundSchema: z.ZodType<
  ListRefundsPrevious,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListRefundsPrevious$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListRefundsPrevious$outboundSchema: z.ZodType<
  ListRefundsPrevious$Outbound,
  z.ZodTypeDef,
  ListRefundsPrevious
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsPrevious$ {
  /** @deprecated use `ListRefundsPrevious$inboundSchema` instead. */
  export const inboundSchema = ListRefundsPrevious$inboundSchema;
  /** @deprecated use `ListRefundsPrevious$outboundSchema` instead. */
  export const outboundSchema = ListRefundsPrevious$outboundSchema;
  /** @deprecated use `ListRefundsPrevious$Outbound` instead. */
  export type Outbound = ListRefundsPrevious$Outbound;
}

/** @internal */
export const ListRefundsNext$inboundSchema: z.ZodType<
  ListRefundsNext,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListRefundsNext$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListRefundsNext$outboundSchema: z.ZodType<
  ListRefundsNext$Outbound,
  z.ZodTypeDef,
  ListRefundsNext
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsNext$ {
  /** @deprecated use `ListRefundsNext$inboundSchema` instead. */
  export const inboundSchema = ListRefundsNext$inboundSchema;
  /** @deprecated use `ListRefundsNext$outboundSchema` instead. */
  export const outboundSchema = ListRefundsNext$outboundSchema;
  /** @deprecated use `ListRefundsNext$Outbound` instead. */
  export type Outbound = ListRefundsNext$Outbound;
}

/** @internal */
export const ListRefundsDocumentation$inboundSchema: z.ZodType<
  ListRefundsDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListRefundsDocumentation$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListRefundsDocumentation$outboundSchema: z.ZodType<
  ListRefundsDocumentation$Outbound,
  z.ZodTypeDef,
  ListRefundsDocumentation
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsDocumentation$ {
  /** @deprecated use `ListRefundsDocumentation$inboundSchema` instead. */
  export const inboundSchema = ListRefundsDocumentation$inboundSchema;
  /** @deprecated use `ListRefundsDocumentation$outboundSchema` instead. */
  export const outboundSchema = ListRefundsDocumentation$outboundSchema;
  /** @deprecated use `ListRefundsDocumentation$Outbound` instead. */
  export type Outbound = ListRefundsDocumentation$Outbound;
}

/** @internal */
export const ListRefundsLinks$inboundSchema: z.ZodType<
  ListRefundsLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => ListRefundsSelf$inboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListRefundsPrevious$inboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListRefundsNext$inboundSchema)).optional(),
  documentation: z.lazy(() => ListRefundsDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type ListRefundsLinks$Outbound = {
  self?: ListRefundsSelf$Outbound | undefined;
  previous?: ListRefundsPrevious$Outbound | null | undefined;
  next?: ListRefundsNext$Outbound | null | undefined;
  documentation?: ListRefundsDocumentation$Outbound | undefined;
};

/** @internal */
export const ListRefundsLinks$outboundSchema: z.ZodType<
  ListRefundsLinks$Outbound,
  z.ZodTypeDef,
  ListRefundsLinks
> = z.object({
  self: z.lazy(() => ListRefundsSelf$outboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListRefundsPrevious$outboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListRefundsNext$outboundSchema)).optional(),
  documentation: z.lazy(() => ListRefundsDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRefundsLinks$ {
  /** @deprecated use `ListRefundsLinks$inboundSchema` instead. */
  export const inboundSchema = ListRefundsLinks$inboundSchema;
  /** @deprecated use `ListRefundsLinks$outboundSchema` instead. */
  export const outboundSchema = ListRefundsLinks$outboundSchema;
  /** @deprecated use `ListRefundsLinks$Outbound` instead. */
  export type Outbound = ListRefundsLinks$Outbound;
}

/** @internal */
export const ListRefundsResponseBody$inboundSchema: z.ZodType<
  ListRefundsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  _embedded: z.lazy(() => ListRefundsEmbedded$inboundSchema).optional(),
  _links: z.lazy(() => ListRefundsLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_embedded": "embedded",
    "_links": "links",
  });
});

/** @internal */
export type ListRefundsResponseBody$Outbound = {
  count?: number | undefined;
  _embedded?: ListRefundsEmbedded$Outbound | undefined;
  _links?: ListRefundsLinks$Outbound | undefined;
};

/** @internal */
export const ListRefundsResponseBody$outboundSchema: z.ZodType<
  ListRefundsResponseBody$Outbound,
  z.ZodTypeDef,
  ListRefundsResponseBody
> = z.object({
  count: z.number().int().optional(),
  embedded: z.lazy(() => ListRefundsEmbedded$outboundSchema).optional(),
  links: z.lazy(() => ListRefundsLinks$outboundSchema).optional(),
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
export namespace ListRefundsResponseBody$ {
  /** @deprecated use `ListRefundsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListRefundsResponseBody$inboundSchema;
  /** @deprecated use `ListRefundsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListRefundsResponseBody$outboundSchema;
  /** @deprecated use `ListRefundsResponseBody$Outbound` instead. */
  export type Outbound = ListRefundsResponseBody$Outbound;
}
