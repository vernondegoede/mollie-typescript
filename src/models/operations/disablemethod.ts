/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DisableMethodRequest = {
  /**
   * Provide the ID of the related profile.
   */
  profileId: string;
  /**
   * Provide the ID of the item you want to perform this operation on.
   */
  id: string;
};

/** @internal */
export const DisableMethodRequest$inboundSchema: z.ZodType<
  DisableMethodRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  profileId: z.string(),
  id: z.string(),
});

/** @internal */
export type DisableMethodRequest$Outbound = {
  profileId: string;
  id: string;
};

/** @internal */
export const DisableMethodRequest$outboundSchema: z.ZodType<
  DisableMethodRequest$Outbound,
  z.ZodTypeDef,
  DisableMethodRequest
> = z.object({
  profileId: z.string(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisableMethodRequest$ {
  /** @deprecated use `DisableMethodRequest$inboundSchema` instead. */
  export const inboundSchema = DisableMethodRequest$inboundSchema;
  /** @deprecated use `DisableMethodRequest$outboundSchema` instead. */
  export const outboundSchema = DisableMethodRequest$outboundSchema;
  /** @deprecated use `DisableMethodRequest$Outbound` instead. */
  export type Outbound = DisableMethodRequest$Outbound;
}
