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
    root.OrderCloud.WebHookRoute = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebHookRoute model module.
   * @module model/WebHookRoute
   * @version 1.0
   */

  /**
   * Constructs a new <code>WebHookRoute</code>.
   * @alias module:model/WebHookRoute
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>WebHookRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebHookRoute} obj Optional instance to populate.
   * @return {module:model/WebHookRoute} The populated <code>WebHookRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('Route')) {
        obj['Route'] = ApiClient.convertToType(data['Route'], 'String');
      }
      if (data.hasOwnProperty('Verb')) {
        obj['Verb'] = ApiClient.convertToType(data['Verb'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Route
   */
  exports.prototype['Route'] = undefined;
  /**
   * @member {String} Verb
   */
  exports.prototype['Verb'] = undefined;



  return exports;
}));

