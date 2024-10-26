/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type GetTerminalDocumentation = {
  href?: any | undefined;
  type?: any | undefined;
};

export type GetTerminalLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation?: GetTerminalDocumentation | undefined;
};

/**
 * An error response object.
 */
export type GetTerminalResponseBodyData = {
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
  links?: GetTerminalLinks | undefined;
};

/**
 * An error response object.
 */
export class GetTerminalResponseBody extends Error {
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
  links?: GetTerminalLinks | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetTerminalResponseBodyData;

  constructor(err: GetTerminalResponseBodyData) {
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

    this.name = "GetTerminalResponseBody";
  }
}

/** @internal */
export const GetTerminalDocumentation$inboundSchema: z.ZodType<
  GetTerminalDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.any(),
  type: z.any(),
});

/** @internal */
export type GetTerminalDocumentation$Outbound = {
  href?: any;
  type?: any;
};

/** @internal */
export const GetTerminalDocumentation$outboundSchema: z.ZodType<
  GetTerminalDocumentation$Outbound,
  z.ZodTypeDef,
  GetTerminalDocumentation
> = z.object({
  href: z.any(),
  type: z.any(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalDocumentation$ {
  /** @deprecated use `GetTerminalDocumentation$inboundSchema` instead. */
  export const inboundSchema = GetTerminalDocumentation$inboundSchema;
  /** @deprecated use `GetTerminalDocumentation$outboundSchema` instead. */
  export const outboundSchema = GetTerminalDocumentation$outboundSchema;
  /** @deprecated use `GetTerminalDocumentation$Outbound` instead. */
  export type Outbound = GetTerminalDocumentation$Outbound;
}

/** @internal */
export const GetTerminalLinks$inboundSchema: z.ZodType<
  GetTerminalLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() => GetTerminalDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type GetTerminalLinks$Outbound = {
  documentation?: GetTerminalDocumentation$Outbound | undefined;
};

/** @internal */
export const GetTerminalLinks$outboundSchema: z.ZodType<
  GetTerminalLinks$Outbound,
  z.ZodTypeDef,
  GetTerminalLinks
> = z.object({
  documentation: z.lazy(() => GetTerminalDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalLinks$ {
  /** @deprecated use `GetTerminalLinks$inboundSchema` instead. */
  export const inboundSchema = GetTerminalLinks$inboundSchema;
  /** @deprecated use `GetTerminalLinks$outboundSchema` instead. */
  export const outboundSchema = GetTerminalLinks$outboundSchema;
  /** @deprecated use `GetTerminalLinks$Outbound` instead. */
  export type Outbound = GetTerminalLinks$Outbound;
}

/** @internal */
export const GetTerminalResponseBody$inboundSchema: z.ZodType<
  GetTerminalResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int().optional(),
  title: z.string().optional(),
  detail: z.string().optional(),
  field: z.nullable(z.string()).optional(),
  _links: z.lazy(() => GetTerminalLinks$inboundSchema).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new GetTerminalResponseBody(remapped);
  });

/** @internal */
export type GetTerminalResponseBody$Outbound = {
  status?: number | undefined;
  title?: string | undefined;
  detail?: string | undefined;
  field?: string | null | undefined;
  _links?: GetTerminalLinks$Outbound | undefined;
};

/** @internal */
export const GetTerminalResponseBody$outboundSchema: z.ZodType<
  GetTerminalResponseBody$Outbound,
  z.ZodTypeDef,
  GetTerminalResponseBody
> = z.instanceof(GetTerminalResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      field: z.nullable(z.string()).optional(),
      links: z.lazy(() => GetTerminalLinks$outboundSchema).optional(),
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
export namespace GetTerminalResponseBody$ {
  /** @deprecated use `GetTerminalResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTerminalResponseBody$inboundSchema;
  /** @deprecated use `GetTerminalResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTerminalResponseBody$outboundSchema;
  /** @deprecated use `GetTerminalResponseBody$Outbound` instead. */
  export type Outbound = GetTerminalResponseBody$Outbound;
}
