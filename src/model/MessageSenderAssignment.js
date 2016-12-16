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
    root.OrdercloudJavascriptSdk.MessageSenderAssignment = factory(root.OrdercloudJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageSenderAssignment model module.
   * @module model/MessageSenderAssignment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MessageSenderAssignment</code>.
   * @alias module:model/MessageSenderAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MessageSenderAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageSenderAssignment} obj Optional instance to populate.
   * @return {module:model/MessageSenderAssignment} The populated <code>MessageSenderAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MessageSenderID')) {
        obj['MessageSenderID'] = ApiClient.convertToType(data['MessageSenderID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('MessageConfigName')) {
        obj['MessageConfigName'] = ApiClient.convertToType(data['MessageConfigName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} MessageSenderID
   */
  exports.prototype['MessageSenderID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} MessageConfigName
   */
  exports.prototype['MessageConfigName'] = undefined;



  return exports;
}));


