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
    root.OrderCloud.NativeIntegrationProxyAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NativeIntegrationProxyAssignment model module.
   * @module model/NativeIntegrationProxyAssignment
   * @version 1.0
   */

  /**
   * Constructs a new <code>NativeIntegrationProxyAssignment</code>.
   * @alias module:model/NativeIntegrationProxyAssignment
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NativeIntegrationProxyAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NativeIntegrationProxyAssignment} obj Optional instance to populate.
   * @return {module:model/NativeIntegrationProxyAssignment} The populated <code>NativeIntegrationProxyAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('NativeIntegrationProxyConfigID')) {
        obj['NativeIntegrationProxyConfigID'] = ApiClient.convertToType(data['NativeIntegrationProxyConfigID'], 'Number');
      }
      if (data.hasOwnProperty('ClientID')) {
        obj['ClientID'] = ApiClient.convertToType(data['ClientID'], 'String');
      }
      if (data.hasOwnProperty('BaseProxyName')) {
        obj['BaseProxyName'] = ApiClient.convertToType(data['BaseProxyName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} NativeIntegrationProxyConfigID
   */
  exports.prototype['NativeIntegrationProxyConfigID'] = undefined;
  /**
   * @member {String} ClientID
   */
  exports.prototype['ClientID'] = undefined;
  /**
   * @member {String} BaseProxyName
   */
  exports.prototype['BaseProxyName'] = undefined;



  return exports;
}));


