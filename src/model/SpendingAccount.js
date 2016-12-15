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
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccount = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpendingAccount model module.
   * @module model/SpendingAccount
   * @version 1.0
   */

  /**
   * Constructs a new <code>SpendingAccount</code>.
   * @alias module:model/SpendingAccount
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SpendingAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendingAccount} obj Optional instance to populate.
   * @return {module:model/SpendingAccount} The populated <code>SpendingAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Balance')) {
        obj['Balance'] = ApiClient.convertToType(data['Balance'], 'Number');
      }
      if (data.hasOwnProperty('AllowAsPaymentMethod')) {
        obj['AllowAsPaymentMethod'] = ApiClient.convertToType(data['AllowAsPaymentMethod'], 'Boolean');
      }
      if (data.hasOwnProperty('RedemptionCode')) {
        obj['RedemptionCode'] = ApiClient.convertToType(data['RedemptionCode'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('EndDate')) {
        obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'String');
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
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} Balance
   */
  exports.prototype['Balance'] = undefined;
  /**
   * @member {Boolean} AllowAsPaymentMethod
   */
  exports.prototype['AllowAsPaymentMethod'] = undefined;
  /**
   * @member {String} RedemptionCode
   */
  exports.prototype['RedemptionCode'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} EndDate
   */
  exports.prototype['EndDate'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


