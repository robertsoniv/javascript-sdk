/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BuyerAddress', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuyerAddress'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdercloudJavascriptSdk) {
      root.OrdercloudJavascriptSdk = {};
    }
    root.OrdercloudJavascriptSdk.ListBuyerAddress = factory(root.OrdercloudJavascriptSdk.ApiClient, root.OrdercloudJavascriptSdk.BuyerAddress, root.OrdercloudJavascriptSdk.Meta);
  }
}(this, function(ApiClient, BuyerAddress, Meta) {
  'use strict';




  /**
   * The ListBuyerAddress model module.
   * @module model/ListBuyerAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ListBuyerAddress</code>.
   * @alias module:model/ListBuyerAddress
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListBuyerAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListBuyerAddress} obj Optional instance to populate.
   * @return {module:model/ListBuyerAddress} The populated <code>ListBuyerAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [BuyerAddress]);
      }
      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = Meta.constructFromObject(data['Meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BuyerAddress>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/Meta} Meta
   */
  exports.prototype['Meta'] = undefined;



  return exports;
}));


