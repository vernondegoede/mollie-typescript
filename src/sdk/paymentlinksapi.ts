/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksAPICreatePaymentLink } from "../funcs/paymentLinksAPICreatePaymentLink.js";
import { paymentLinksAPIGetPaymentLink } from "../funcs/paymentLinksAPIGetPaymentLink.js";
import { paymentLinksAPIListPaymentLinks } from "../funcs/paymentLinksAPIListPaymentLinks.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PaymentLinksAPI extends ClientSDK {
  /**
   * Create payment link
   *
   * @remarks
   * With the Payment links API you can generate payment links that by default, unlike regular payments, do not expire. The payment link can be shared with your customers and will redirect them to them the payment page where they can complete the payment. A [payment](get-payment) will only be created once the customer initiates the payment.
   */
  async createPaymentLink(
    request?: operations.CreatePaymentLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(paymentLinksAPICreatePaymentLink(
      this,
      request,
      options,
    ));
  }

  /**
   * List payment links
   *
   * @remarks
   * Retrieve a list of all payment links.
   *
   * The results are paginated.
   */
  async listPaymentLinks(
    request: operations.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPaymentLinksResponseBody> {
    return unwrapAsync(paymentLinksAPIListPaymentLinks(
      this,
      request,
      options,
    ));
  }

  /**
   * Get payment link
   *
   * @remarks
   * Retrieve a single payment link by its ID.
   */
  async getPaymentLink(
    request: operations.GetPaymentLinkRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPaymentLinkResponseBody> {
    return unwrapAsync(paymentLinksAPIGetPaymentLink(
      this,
      request,
      options,
    ));
  }
}
