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
    root.OrdercloudJavascriptSdk.Inventory = factory(root.OrdercloudJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Inventory model module.
   * @module model/Inventory
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Inventory</code>.
   * @alias module:model/Inventory
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Inventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inventory} obj Optional instance to populate.
   * @return {module:model/Inventory} The populated <code>Inventory</code> instance.
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
      if (data.hasOwnProperty('Available')) {
        obj['Available'] = ApiClient.convertToType(data['Available'], 'Number');
      }
      if (data.hasOwnProperty('Reserved')) {
        obj['Reserved'] = ApiClient.convertToType(data['Reserved'], 'Number');
      }
      if (data.hasOwnProperty('LastUpdated')) {
        obj['LastUpdated'] = ApiClient.convertToType(data['LastUpdated'], 'String');
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
   * @member {Number} Available
   */
  exports.prototype['Available'] = undefined;
  /**
   * @member {Number} Reserved
   */
  exports.prototype['Reserved'] = undefined;
  /**
   * @member {String} LastUpdated
   */
  exports.prototype['LastUpdated'] = undefined;



  return exports;
}));


