/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type CancelPaymentPaymentsAPIDocumentation = {
  href?: any | undefined;
  type?: any | undefined;
};

export type CancelPaymentPaymentsAPILinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation?: CancelPaymentPaymentsAPIDocumentation | undefined;
};

/**
 * An error response object.
 */
export type CancelPaymentPaymentsAPIResponseBodyData = {
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
  links?: CancelPaymentPaymentsAPILinks | undefined;
};

/**
 * An error response object.
 */
export class CancelPaymentPaymentsAPIResponseBody extends Error {
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
  links?: CancelPaymentPaymentsAPILinks | undefined;

  /** The original data that was passed to this error instance. */
  data$: CancelPaymentPaymentsAPIResponseBodyData;

  constructor(err: CancelPaymentPaymentsAPIResponseBodyData) {
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

    this.name = "CancelPaymentPaymentsAPIResponseBody";
  }
}

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type CancelPaymentDocumentation = {
  href?: any | undefined;
  type?: any | undefined;
};

export type CancelPaymentLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation?: CancelPaymentDocumentation | undefined;
};

/**
 * An error response object.
 */
export type CancelPaymentResponseBodyData = {
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
  links?: CancelPaymentLinks | undefined;
};

/**
 * An error response object.
 */
export class CancelPaymentResponseBody extends Error {
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
  links?: CancelPaymentLinks | undefined;

  /** The original data that was passed to this error instance. */
  data$: CancelPaymentResponseBodyData;

  constructor(err: CancelPaymentResponseBodyData) {
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

    this.name = "CancelPaymentResponseBody";
  }
}

/** @internal */
export const CancelPaymentPaymentsAPIDocumentation$inboundSchema: z.ZodType<
  CancelPaymentPaymentsAPIDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.any(),
  type: z.any(),
});

/** @internal */
export type CancelPaymentPaymentsAPIDocumentation$Outbound = {
  href?: any;
  type?: any;
};

/** @internal */
export const CancelPaymentPaymentsAPIDocumentation$outboundSchema: z.ZodType<
  CancelPaymentPaymentsAPIDocumentation$Outbound,
  z.ZodTypeDef,
  CancelPaymentPaymentsAPIDocumentation
> = z.object({
  href: z.any(),
  type: z.any(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelPaymentPaymentsAPIDocumentation$ {
  /** @deprecated use `CancelPaymentPaymentsAPIDocumentation$inboundSchema` instead. */
  export const inboundSchema =
    CancelPaymentPaymentsAPIDocumentation$inboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPIDocumentation$outboundSchema` instead. */
  export const outboundSchema =
    CancelPaymentPaymentsAPIDocumentation$outboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPIDocumentation$Outbound` instead. */
  export type Outbound = CancelPaymentPaymentsAPIDocumentation$Outbound;
}

/** @internal */
export const CancelPaymentPaymentsAPILinks$inboundSchema: z.ZodType<
  CancelPaymentPaymentsAPILinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() =>
    CancelPaymentPaymentsAPIDocumentation$inboundSchema
  ).optional(),
});

/** @internal */
export type CancelPaymentPaymentsAPILinks$Outbound = {
  documentation?: CancelPaymentPaymentsAPIDocumentation$Outbound | undefined;
};

/** @internal */
export const CancelPaymentPaymentsAPILinks$outboundSchema: z.ZodType<
  CancelPaymentPaymentsAPILinks$Outbound,
  z.ZodTypeDef,
  CancelPaymentPaymentsAPILinks
> = z.object({
  documentation: z.lazy(() =>
    CancelPaymentPaymentsAPIDocumentation$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelPaymentPaymentsAPILinks$ {
  /** @deprecated use `CancelPaymentPaymentsAPILinks$inboundSchema` instead. */
  export const inboundSchema = CancelPaymentPaymentsAPILinks$inboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPILinks$outboundSchema` instead. */
  export const outboundSchema = CancelPaymentPaymentsAPILinks$outboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPILinks$Outbound` instead. */
  export type Outbound = CancelPaymentPaymentsAPILinks$Outbound;
}

/** @internal */
export const CancelPaymentPaymentsAPIResponseBody$inboundSchema: z.ZodType<
  CancelPaymentPaymentsAPIResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int().optional(),
  title: z.string().optional(),
  detail: z.string().optional(),
  field: z.nullable(z.string()).optional(),
  _links: z.lazy(() => CancelPaymentPaymentsAPILinks$inboundSchema).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new CancelPaymentPaymentsAPIResponseBody(remapped);
  });

/** @internal */
export type CancelPaymentPaymentsAPIResponseBody$Outbound = {
  status?: number | undefined;
  title?: string | undefined;
  detail?: string | undefined;
  field?: string | null | undefined;
  _links?: CancelPaymentPaymentsAPILinks$Outbound | undefined;
};

/** @internal */
export const CancelPaymentPaymentsAPIResponseBody$outboundSchema: z.ZodType<
  CancelPaymentPaymentsAPIResponseBody$Outbound,
  z.ZodTypeDef,
  CancelPaymentPaymentsAPIResponseBody
> = z.instanceof(CancelPaymentPaymentsAPIResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      field: z.nullable(z.string()).optional(),
      links: z.lazy(() => CancelPaymentPaymentsAPILinks$outboundSchema)
        .optional(),
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
export namespace CancelPaymentPaymentsAPIResponseBody$ {
  /** @deprecated use `CancelPaymentPaymentsAPIResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CancelPaymentPaymentsAPIResponseBody$inboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPIResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CancelPaymentPaymentsAPIResponseBody$outboundSchema;
  /** @deprecated use `CancelPaymentPaymentsAPIResponseBody$Outbound` instead. */
  export type Outbound = CancelPaymentPaymentsAPIResponseBody$Outbound;
}

/** @internal */
export const CancelPaymentDocumentation$inboundSchema: z.ZodType<
  CancelPaymentDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.any(),
  type: z.any(),
});

/** @internal */
export type CancelPaymentDocumentation$Outbound = {
  href?: any;
  type?: any;
};

/** @internal */
export const CancelPaymentDocumentation$outboundSchema: z.ZodType<
  CancelPaymentDocumentation$Outbound,
  z.ZodTypeDef,
  CancelPaymentDocumentation
> = z.object({
  href: z.any(),
  type: z.any(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelPaymentDocumentation$ {
  /** @deprecated use `CancelPaymentDocumentation$inboundSchema` instead. */
  export const inboundSchema = CancelPaymentDocumentation$inboundSchema;
  /** @deprecated use `CancelPaymentDocumentation$outboundSchema` instead. */
  export const outboundSchema = CancelPaymentDocumentation$outboundSchema;
  /** @deprecated use `CancelPaymentDocumentation$Outbound` instead. */
  export type Outbound = CancelPaymentDocumentation$Outbound;
}

/** @internal */
export const CancelPaymentLinks$inboundSchema: z.ZodType<
  CancelPaymentLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() => CancelPaymentDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type CancelPaymentLinks$Outbound = {
  documentation?: CancelPaymentDocumentation$Outbound | undefined;
};

/** @internal */
export const CancelPaymentLinks$outboundSchema: z.ZodType<
  CancelPaymentLinks$Outbound,
  z.ZodTypeDef,
  CancelPaymentLinks
> = z.object({
  documentation: z.lazy(() => CancelPaymentDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelPaymentLinks$ {
  /** @deprecated use `CancelPaymentLinks$inboundSchema` instead. */
  export const inboundSchema = CancelPaymentLinks$inboundSchema;
  /** @deprecated use `CancelPaymentLinks$outboundSchema` instead. */
  export const outboundSchema = CancelPaymentLinks$outboundSchema;
  /** @deprecated use `CancelPaymentLinks$Outbound` instead. */
  export type Outbound = CancelPaymentLinks$Outbound;
}

/** @internal */
export const CancelPaymentResponseBody$inboundSchema: z.ZodType<
  CancelPaymentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int().optional(),
  title: z.string().optional(),
  detail: z.string().optional(),
  field: z.nullable(z.string()).optional(),
  _links: z.lazy(() => CancelPaymentLinks$inboundSchema).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new CancelPaymentResponseBody(remapped);
  });

/** @internal */
export type CancelPaymentResponseBody$Outbound = {
  status?: number | undefined;
  title?: string | undefined;
  detail?: string | undefined;
  field?: string | null | undefined;
  _links?: CancelPaymentLinks$Outbound | undefined;
};

/** @internal */
export const CancelPaymentResponseBody$outboundSchema: z.ZodType<
  CancelPaymentResponseBody$Outbound,
  z.ZodTypeDef,
  CancelPaymentResponseBody
> = z.instanceof(CancelPaymentResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      field: z.nullable(z.string()).optional(),
      links: z.lazy(() => CancelPaymentLinks$outboundSchema).optional(),
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
export namespace CancelPaymentResponseBody$ {
  /** @deprecated use `CancelPaymentResponseBody$inboundSchema` instead. */
  export const inboundSchema = CancelPaymentResponseBody$inboundSchema;
  /** @deprecated use `CancelPaymentResponseBody$outboundSchema` instead. */
  export const outboundSchema = CancelPaymentResponseBody$outboundSchema;
  /** @deprecated use `CancelPaymentResponseBody$Outbound` instead. */
  export type Outbound = CancelPaymentResponseBody$Outbound;
}
