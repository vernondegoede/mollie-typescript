/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletsAPIRequestApplePayPaymentSession } from "../funcs/walletsAPIRequestApplePayPaymentSession.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class WalletsAPI extends ClientSDK {
  /**
   * Request Apple Pay payment session
   *
   * @remarks
   * When integrating Apple Pay in your own checkout on the web, you need to [provide merchant validation](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation). This is normally done using Apple's [Requesting an Apple Pay Session](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session). The merchant validation proves to Apple that a validated merchant is calling the Apple Pay Javascript APIs.
   *
   * To integrate Apple Pay via Mollie, you will have to call the Mollie API instead of Apple's API. The response of this API call can then be passed as-is to the completion method, `completeMerchantValidation`.
   *
   * Before requesting an Apple Pay Payment Session, you must place the domain validation file on your server at: `https://[domain]/.well-known/apple-developer-merchantid-domain-association`. Without this file, it will not be possible to use Apple Pay on your domain.
   *
   * Each new transaction requires a new payment session object. Merchant session objects are not reusable, and they expire after five minutes.
   *
   * Payment sessions cannot be requested directly from the browser. The request must be sent from your server. For the full documentation, see the official [Apple Pay JS API](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) documentation.
   */
  async requestApplePayPaymentSession(
    request?: operations.RequestApplePayPaymentSessionRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(walletsAPIRequestApplePayPaymentSession(
      this,
      request,
      options,
    ));
  }
}
