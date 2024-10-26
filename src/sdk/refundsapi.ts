/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { refundsAPICancelRefund } from "../funcs/refundsAPICancelRefund.js";
import { refundsAPICreateOrderRefund } from "../funcs/refundsAPICreateOrderRefund.js";
import { refundsAPICreateRefund } from "../funcs/refundsAPICreateRefund.js";
import { refundsAPIGetRefund } from "../funcs/refundsAPIGetRefund.js";
import { refundsAPIListAllRefunds } from "../funcs/refundsAPIListAllRefunds.js";
import { refundsAPIListOrderRefunds } from "../funcs/refundsAPIListOrderRefunds.js";
import { refundsAPIListRefunds } from "../funcs/refundsAPIListRefunds.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class RefundsAPI extends ClientSDK {
  /**
   * Create payment refund
   *
   * @remarks
   * Creates a refund for a specific payment. The refunded amount is credited to your customer usually either via a bank transfer or by refunding the amount to your customer's credit card.
   */
  async createRefund(
    request: operations.CreateRefundRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(refundsAPICreateRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * List payment refunds
   *
   * @remarks
   * Retrieve a list of all refunds created for a specific payment.
   *
   * The results are paginated.
   */
  async listRefunds(
    request: operations.ListRefundsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListRefundsResponseBody> {
    return unwrapAsync(refundsAPIListRefunds(
      this,
      request,
      options,
    ));
  }

  /**
   * Get payment refund
   *
   * @remarks
   * Retrieve a single payment refund by its ID and the ID of its parent payment.
   */
  async getRefund(
    request: operations.GetRefundRequest,
    options?: RequestOptions,
  ): Promise<operations.GetRefundResponseBody> {
    return unwrapAsync(refundsAPIGetRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel payment refund
   *
   * @remarks
   * For certain payment methods, like iDEAL, the underlying banking system will delay refunds until the next day. Until that time, refunds may be canceled manually via the Mollie Dashboard, or by using this endpoint.
   *
   * A refund can only be canceled while its `status` field is either `queued` or `pending`. See the [Get refund endpoint](get-refund) for more information.
   */
  async cancelRefund(
    request: operations.CancelRefundRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(refundsAPICancelRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * Create order refund
   *
   * @remarks
   * When using the Orders API, refunds should be made for a specific order.
   *
   * If you want to refund arbitrary amounts, however, you can also use the [Create payment refund endpoint](create-refund) by creating a refund on the payment itself.
   *
   * If an order line is still in the `authorized` state, it cannot be refunded. You should cancel it instead. Order lines that are `paid`, `shipping` or `completed` can be refunded.
   */
  async createOrderRefund(
    request: operations.CreateOrderRefundRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateOrderRefundResponseBody> {
    return unwrapAsync(refundsAPICreateOrderRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * List order refunds
   *
   * @remarks
   * Retrieve a list of all refunds created for a specific order.
   *
   * The results are paginated.
   */
  async listOrderRefunds(
    request: operations.ListOrderRefundsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListOrderRefundsResponseBody> {
    return unwrapAsync(refundsAPIListOrderRefunds(
      this,
      request,
      options,
    ));
  }

  /**
   * List all refunds
   *
   * @remarks
   * Retrieve a list of all of your refunds.
   *
   * The results are paginated.
   */
  async listAllRefunds(
    request: operations.ListAllRefundsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListAllRefundsResponseBody> {
    return unwrapAsync(refundsAPIListAllRefunds(
      this,
      request,
      options,
    ));
  }
}
