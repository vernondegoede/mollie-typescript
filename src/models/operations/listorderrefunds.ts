/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListOrderRefundsRequest = {
  /**
   * Provide the ID of the related order.
   */
  orderId: string;
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

export type ListOrderRefundsRefunds = {};

export type ListOrderRefundsEmbedded = {
  /**
   * An array of refund objects. For a complete reference of the refund object, refer to the [Create order refund endpoint](create-order-refund) documentation.
   */
  refunds?: Array<ListOrderRefundsRefunds> | undefined;
};

/**
 * The URL to the current set of items.
 */
export type ListOrderRefundsSelf = {
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
export type ListOrderRefundsPrevious = {
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
export type ListOrderRefundsNext = {
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
export type ListOrderRefundsDocumentation = {
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
export type ListOrderRefundsLinks = {
  /**
   * The URL to the current set of items.
   */
  self?: ListOrderRefundsSelf | undefined;
  /**
   * The previous set of items, if available.
   */
  previous?: ListOrderRefundsPrevious | null | undefined;
  /**
   * The next set of items, if available.
   */
  next?: ListOrderRefundsNext | null | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: ListOrderRefundsDocumentation | undefined;
};

/**
 * A list of refund objects. For a complete reference of the refund object, refer to the [Create order refund endpoint](create-order-refund) documentation.
 */
export type ListOrderRefundsResponseBody = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.
   *
   * @remarks
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items.
   */
  count?: number | undefined;
  embedded?: ListOrderRefundsEmbedded | undefined;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
   */
  links?: ListOrderRefundsLinks | undefined;
};

/** @internal */
export const ListOrderRefundsRequest$inboundSchema: z.ZodType<
  ListOrderRefundsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orderId: z.string(),
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/** @internal */
export type ListOrderRefundsRequest$Outbound = {
  orderId: string;
  from?: string | null | undefined;
  limit: number | null;
  include?: string | null | undefined;
  testmode: boolean | null;
};

/** @internal */
export const ListOrderRefundsRequest$outboundSchema: z.ZodType<
  ListOrderRefundsRequest$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsRequest
> = z.object({
  orderId: z.string(),
  from: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int().default(50)),
  include: z.nullable(z.string()).optional(),
  testmode: z.nullable(z.boolean().default(false)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsRequest$ {
  /** @deprecated use `ListOrderRefundsRequest$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsRequest$inboundSchema;
  /** @deprecated use `ListOrderRefundsRequest$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsRequest$outboundSchema;
  /** @deprecated use `ListOrderRefundsRequest$Outbound` instead. */
  export type Outbound = ListOrderRefundsRequest$Outbound;
}

/** @internal */
export const ListOrderRefundsRefunds$inboundSchema: z.ZodType<
  ListOrderRefundsRefunds,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListOrderRefundsRefunds$Outbound = {};

/** @internal */
export const ListOrderRefundsRefunds$outboundSchema: z.ZodType<
  ListOrderRefundsRefunds$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsRefunds
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsRefunds$ {
  /** @deprecated use `ListOrderRefundsRefunds$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsRefunds$inboundSchema;
  /** @deprecated use `ListOrderRefundsRefunds$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsRefunds$outboundSchema;
  /** @deprecated use `ListOrderRefundsRefunds$Outbound` instead. */
  export type Outbound = ListOrderRefundsRefunds$Outbound;
}

/** @internal */
export const ListOrderRefundsEmbedded$inboundSchema: z.ZodType<
  ListOrderRefundsEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  refunds: z.array(z.lazy(() => ListOrderRefundsRefunds$inboundSchema))
    .optional(),
});

/** @internal */
export type ListOrderRefundsEmbedded$Outbound = {
  refunds?: Array<ListOrderRefundsRefunds$Outbound> | undefined;
};

/** @internal */
export const ListOrderRefundsEmbedded$outboundSchema: z.ZodType<
  ListOrderRefundsEmbedded$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsEmbedded
> = z.object({
  refunds: z.array(z.lazy(() => ListOrderRefundsRefunds$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsEmbedded$ {
  /** @deprecated use `ListOrderRefundsEmbedded$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsEmbedded$inboundSchema;
  /** @deprecated use `ListOrderRefundsEmbedded$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsEmbedded$outboundSchema;
  /** @deprecated use `ListOrderRefundsEmbedded$Outbound` instead. */
  export type Outbound = ListOrderRefundsEmbedded$Outbound;
}

/** @internal */
export const ListOrderRefundsSelf$inboundSchema: z.ZodType<
  ListOrderRefundsSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListOrderRefundsSelf$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListOrderRefundsSelf$outboundSchema: z.ZodType<
  ListOrderRefundsSelf$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsSelf
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsSelf$ {
  /** @deprecated use `ListOrderRefundsSelf$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsSelf$inboundSchema;
  /** @deprecated use `ListOrderRefundsSelf$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsSelf$outboundSchema;
  /** @deprecated use `ListOrderRefundsSelf$Outbound` instead. */
  export type Outbound = ListOrderRefundsSelf$Outbound;
}

/** @internal */
export const ListOrderRefundsPrevious$inboundSchema: z.ZodType<
  ListOrderRefundsPrevious,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListOrderRefundsPrevious$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListOrderRefundsPrevious$outboundSchema: z.ZodType<
  ListOrderRefundsPrevious$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsPrevious
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsPrevious$ {
  /** @deprecated use `ListOrderRefundsPrevious$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsPrevious$inboundSchema;
  /** @deprecated use `ListOrderRefundsPrevious$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsPrevious$outboundSchema;
  /** @deprecated use `ListOrderRefundsPrevious$Outbound` instead. */
  export type Outbound = ListOrderRefundsPrevious$Outbound;
}

/** @internal */
export const ListOrderRefundsNext$inboundSchema: z.ZodType<
  ListOrderRefundsNext,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListOrderRefundsNext$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListOrderRefundsNext$outboundSchema: z.ZodType<
  ListOrderRefundsNext$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsNext
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsNext$ {
  /** @deprecated use `ListOrderRefundsNext$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsNext$inboundSchema;
  /** @deprecated use `ListOrderRefundsNext$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsNext$outboundSchema;
  /** @deprecated use `ListOrderRefundsNext$Outbound` instead. */
  export type Outbound = ListOrderRefundsNext$Outbound;
}

/** @internal */
export const ListOrderRefundsDocumentation$inboundSchema: z.ZodType<
  ListOrderRefundsDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListOrderRefundsDocumentation$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListOrderRefundsDocumentation$outboundSchema: z.ZodType<
  ListOrderRefundsDocumentation$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsDocumentation
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsDocumentation$ {
  /** @deprecated use `ListOrderRefundsDocumentation$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsDocumentation$inboundSchema;
  /** @deprecated use `ListOrderRefundsDocumentation$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsDocumentation$outboundSchema;
  /** @deprecated use `ListOrderRefundsDocumentation$Outbound` instead. */
  export type Outbound = ListOrderRefundsDocumentation$Outbound;
}

/** @internal */
export const ListOrderRefundsLinks$inboundSchema: z.ZodType<
  ListOrderRefundsLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => ListOrderRefundsSelf$inboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListOrderRefundsPrevious$inboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListOrderRefundsNext$inboundSchema)).optional(),
  documentation: z.lazy(() => ListOrderRefundsDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type ListOrderRefundsLinks$Outbound = {
  self?: ListOrderRefundsSelf$Outbound | undefined;
  previous?: ListOrderRefundsPrevious$Outbound | null | undefined;
  next?: ListOrderRefundsNext$Outbound | null | undefined;
  documentation?: ListOrderRefundsDocumentation$Outbound | undefined;
};

/** @internal */
export const ListOrderRefundsLinks$outboundSchema: z.ZodType<
  ListOrderRefundsLinks$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsLinks
> = z.object({
  self: z.lazy(() => ListOrderRefundsSelf$outboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListOrderRefundsPrevious$outboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListOrderRefundsNext$outboundSchema))
    .optional(),
  documentation: z.lazy(() => ListOrderRefundsDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOrderRefundsLinks$ {
  /** @deprecated use `ListOrderRefundsLinks$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsLinks$inboundSchema;
  /** @deprecated use `ListOrderRefundsLinks$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsLinks$outboundSchema;
  /** @deprecated use `ListOrderRefundsLinks$Outbound` instead. */
  export type Outbound = ListOrderRefundsLinks$Outbound;
}

/** @internal */
export const ListOrderRefundsResponseBody$inboundSchema: z.ZodType<
  ListOrderRefundsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  _embedded: z.lazy(() => ListOrderRefundsEmbedded$inboundSchema).optional(),
  _links: z.lazy(() => ListOrderRefundsLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_embedded": "embedded",
    "_links": "links",
  });
});

/** @internal */
export type ListOrderRefundsResponseBody$Outbound = {
  count?: number | undefined;
  _embedded?: ListOrderRefundsEmbedded$Outbound | undefined;
  _links?: ListOrderRefundsLinks$Outbound | undefined;
};

/** @internal */
export const ListOrderRefundsResponseBody$outboundSchema: z.ZodType<
  ListOrderRefundsResponseBody$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsResponseBody
> = z.object({
  count: z.number().int().optional(),
  embedded: z.lazy(() => ListOrderRefundsEmbedded$outboundSchema).optional(),
  links: z.lazy(() => ListOrderRefundsLinks$outboundSchema).optional(),
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
export namespace ListOrderRefundsResponseBody$ {
  /** @deprecated use `ListOrderRefundsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListOrderRefundsResponseBody$inboundSchema;
  /** @deprecated use `ListOrderRefundsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListOrderRefundsResponseBody$outboundSchema;
  /** @deprecated use `ListOrderRefundsResponseBody$Outbound` instead. */
  export type Outbound = ListOrderRefundsResponseBody$Outbound;
}
