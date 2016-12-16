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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdercloudJavascriptSdk) {
      root.OrdercloudJavascriptSdk = {};
    }
    root.OrdercloudJavascriptSdk.SpecOption = factory(root.OrdercloudJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpecOption model module.
   * @module model/SpecOption
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SpecOption</code>.
   * @alias module:model/SpecOption
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SpecOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecOption} obj Optional instance to populate.
   * @return {module:model/SpecOption} The populated <code>SpecOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('IsOpenText')) {
        obj['IsOpenText'] = ApiClient.convertToType(data['IsOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('PriceMarkupType')) {
        obj['PriceMarkupType'] = ApiClient.convertToType(data['PriceMarkupType'], 'String');
      }
      if (data.hasOwnProperty('PriceMarkup')) {
        obj['PriceMarkup'] = ApiClient.convertToType(data['PriceMarkup'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {Boolean} IsOpenText
   */
  exports.prototype['IsOpenText'] = undefined;
  /**
   * @member {String} PriceMarkupType
   */
  exports.prototype['PriceMarkupType'] = undefined;
  /**
   * @member {Number} PriceMarkup
   */
  exports.prototype['PriceMarkup'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


