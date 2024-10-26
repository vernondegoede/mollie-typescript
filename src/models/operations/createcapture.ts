/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The amount captured. If no amount is provided, the full authorized amount is captured.
 */
export type CreateCaptureAmount = {
  /**
   * A three-character ISO 4217 currency code.
   */
  currency: string;
  /**
   * A string containing an exact monetary amount in the given currency.
   */
  value: string;
};

export type CreateCaptureRequestBody = {
  /**
   * The description of the capture.
   */
  description?: string | undefined;
  /**
   * The amount captured. If no amount is provided, the full authorized amount is captured.
   */
  amount?: CreateCaptureAmount | null | undefined;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data alongside the entity. Whenever you fetch the entity with our API, we will also include the metadata. You can use up to approximately 1kB.
   */
  metadata?: string | null | undefined;
};

export type CreateCaptureRequest = {
  /**
   * Provide the ID of the related payment.
   */
  paymentId: string;
  requestBody?: CreateCaptureRequestBody | undefined;
};

/** @internal */
export const CreateCaptureAmount$inboundSchema: z.ZodType<
  CreateCaptureAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/** @internal */
export type CreateCaptureAmount$Outbound = {
  currency: string;
  value: string;
};

/** @internal */
export const CreateCaptureAmount$outboundSchema: z.ZodType<
  CreateCaptureAmount$Outbound,
  z.ZodTypeDef,
  CreateCaptureAmount
> = z.object({
  currency: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCaptureAmount$ {
  /** @deprecated use `CreateCaptureAmount$inboundSchema` instead. */
  export const inboundSchema = CreateCaptureAmount$inboundSchema;
  /** @deprecated use `CreateCaptureAmount$outboundSchema` instead. */
  export const outboundSchema = CreateCaptureAmount$outboundSchema;
  /** @deprecated use `CreateCaptureAmount$Outbound` instead. */
  export type Outbound = CreateCaptureAmount$Outbound;
}

/** @internal */
export const CreateCaptureRequestBody$inboundSchema: z.ZodType<
  CreateCaptureRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  amount: z.nullable(z.lazy(() => CreateCaptureAmount$inboundSchema))
    .optional(),
  metadata: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateCaptureRequestBody$Outbound = {
  description?: string | undefined;
  amount?: CreateCaptureAmount$Outbound | null | undefined;
  metadata?: string | null | undefined;
};

/** @internal */
export const CreateCaptureRequestBody$outboundSchema: z.ZodType<
  CreateCaptureRequestBody$Outbound,
  z.ZodTypeDef,
  CreateCaptureRequestBody
> = z.object({
  description: z.string().optional(),
  amount: z.nullable(z.lazy(() => CreateCaptureAmount$outboundSchema))
    .optional(),
  metadata: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCaptureRequestBody$ {
  /** @deprecated use `CreateCaptureRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateCaptureRequestBody$inboundSchema;
  /** @deprecated use `CreateCaptureRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateCaptureRequestBody$outboundSchema;
  /** @deprecated use `CreateCaptureRequestBody$Outbound` instead. */
  export type Outbound = CreateCaptureRequestBody$Outbound;
}

/** @internal */
export const CreateCaptureRequest$inboundSchema: z.ZodType<
  CreateCaptureRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  paymentId: z.string(),
  RequestBody: z.lazy(() => CreateCaptureRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateCaptureRequest$Outbound = {
  paymentId: string;
  RequestBody?: CreateCaptureRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateCaptureRequest$outboundSchema: z.ZodType<
  CreateCaptureRequest$Outbound,
  z.ZodTypeDef,
  CreateCaptureRequest
> = z.object({
  paymentId: z.string(),
  requestBody: z.lazy(() => CreateCaptureRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCaptureRequest$ {
  /** @deprecated use `CreateCaptureRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCaptureRequest$inboundSchema;
  /** @deprecated use `CreateCaptureRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCaptureRequest$outboundSchema;
  /** @deprecated use `CreateCaptureRequest$Outbound` instead. */
  export type Outbound = CreateCaptureRequest$Outbound;
}
