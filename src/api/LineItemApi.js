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
    define(['ApiClient', 'model/Address', 'model/LineItem', 'model/ListLineItem', 'model/Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/LineItem'), require('../model/ListLineItem'), require('../model/Task'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItemApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.LineItem, root.OrderCloud.ListLineItem, root.OrderCloud.Task);
  }
}(this, function(ApiClient, Address, LineItem, ListLineItem, Task) {
  'use strict';

  /**
   * LineItem service.
   * @module api/LineItemApi
   * @version 1.0
   */

  /**
   * Constructs a new LineItemApi. 
   * @alias module:api/LineItemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/LineItemApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:api/LineItemApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Task}
     */
    this.callDelete = function(buyerID, orderID, lineItemID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling callDelete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling callDelete");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling callDelete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/LineItemApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/LineItem} lineItem 
     * @param {module:api/LineItemApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.create = function(buyerID, orderID, lineItem, callback) {
      var postBody = lineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling create");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling create");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling create");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/LineItemApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:api/LineItemApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.get = function(buyerID, orderID, lineItemID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling get");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/LineItemApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListLineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/LineItemApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListLineItem}
     */
    this.list = function(buyerID, orderID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling list");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling list");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListLineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patch operation.
     * @callback module:api/LineItemApi~patchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} partialLineItem 
     * @param {module:api/LineItemApi~patchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.patch = function(buyerID, orderID, lineItemID, partialLineItem, callback) {
      var postBody = partialLineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling patch");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling patch");
      }

      // verify the required parameter 'partialLineItem' is set
      if (partialLineItem == undefined || partialLineItem == null) {
        throw new Error("Missing the required parameter 'partialLineItem' when calling patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchShippingAddress operation.
     * @callback module:api/LineItemApi~patchShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} partialAddress 
     * @param {module:api/LineItemApi~patchShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.patchShippingAddress = function(buyerID, orderID, lineItemID, partialAddress, callback) {
      var postBody = partialAddress;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patchShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling patchShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling patchShippingAddress");
      }

      // verify the required parameter 'partialAddress' is set
      if (partialAddress == undefined || partialAddress == null) {
        throw new Error("Missing the required parameter 'partialAddress' when calling patchShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setShippingAddress operation.
     * @callback module:api/LineItemApi~setShippingAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} address 
     * @param {module:api/LineItemApi~setShippingAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.setShippingAddress = function(buyerID, orderID, lineItemID, address, callback) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling setShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling setShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling setShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling setShippingAddress");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}/shipto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/LineItemApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} lineItem 
     * @param {module:api/LineItemApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LineItem}
     */
    this.update = function(buyerID, orderID, lineItemID, lineItem, callback) {
      var postBody = lineItem;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling update");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling update");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/lineitems/{lineItemID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));