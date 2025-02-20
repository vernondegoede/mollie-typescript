/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type ListOrderRefundsDocumentation = {
  href?: any | undefined;
  type?: any | undefined;
};

export type ListOrderRefundsLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation?: ListOrderRefundsDocumentation | undefined;
};

/**
 * An error response object.
 */
export type ListOrderRefundsResponseBodyData = {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status?: number | undefined;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title?: string | undefined;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail?: string | undefined;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name of the field that caused the issue.
   */
  field?: string | null | undefined;
  links?: ListOrderRefundsLinks | undefined;
};

/**
 * An error response object.
 */
export class ListOrderRefundsResponseBody extends Error {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status?: number | undefined;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title?: string | undefined;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail?: string | undefined;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name of the field that caused the issue.
   */
  field?: string | null | undefined;
  links?: ListOrderRefundsLinks | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListOrderRefundsResponseBodyData;

  constructor(err: ListOrderRefundsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.status != null) this.status = err.status;
    if (err.title != null) this.title = err.title;
    if (err.detail != null) this.detail = err.detail;
    if (err.field != null) this.field = err.field;
    if (err.links != null) this.links = err.links;

    this.name = "ListOrderRefundsResponseBody";
  }
}

/** @internal */
export const ListOrderRefundsDocumentation$inboundSchema: z.ZodType<
  ListOrderRefundsDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.any(),
  type: z.any(),
});

/** @internal */
export type ListOrderRefundsDocumentation$Outbound = {
  href?: any;
  type?: any;
};

/** @internal */
export const ListOrderRefundsDocumentation$outboundSchema: z.ZodType<
  ListOrderRefundsDocumentation$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsDocumentation
> = z.object({
  href: z.any(),
  type: z.any(),
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
  documentation: z.lazy(() => ListOrderRefundsDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type ListOrderRefundsLinks$Outbound = {
  documentation?: ListOrderRefundsDocumentation$Outbound | undefined;
};

/** @internal */
export const ListOrderRefundsLinks$outboundSchema: z.ZodType<
  ListOrderRefundsLinks$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsLinks
> = z.object({
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
  status: z.number().int().optional(),
  title: z.string().optional(),
  detail: z.string().optional(),
  field: z.nullable(z.string()).optional(),
  _links: z.lazy(() => ListOrderRefundsLinks$inboundSchema).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new ListOrderRefundsResponseBody(remapped);
  });

/** @internal */
export type ListOrderRefundsResponseBody$Outbound = {
  status?: number | undefined;
  title?: string | undefined;
  detail?: string | undefined;
  field?: string | null | undefined;
  _links?: ListOrderRefundsLinks$Outbound | undefined;
};

/** @internal */
export const ListOrderRefundsResponseBody$outboundSchema: z.ZodType<
  ListOrderRefundsResponseBody$Outbound,
  z.ZodTypeDef,
  ListOrderRefundsResponseBody
> = z.instanceof(ListOrderRefundsResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      field: z.nullable(z.string()).optional(),
      links: z.lazy(() => ListOrderRefundsLinks$outboundSchema).optional(),
    }).transform((v) => {
      return remap$(v, {
        links: "_links",
      });
    }),
  );

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
