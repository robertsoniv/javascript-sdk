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
    define(['ApiClient', 'model/Address', 'model/AddressAssignment', 'model/ListAddress', 'model/ListAddressAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/AddressAssignment'), require('../model/ListAddress'), require('../model/ListAddressAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AddressApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.AddressAssignment, root.OrderCloud.ListAddress, root.OrderCloud.ListAddressAssignment);
  }
}(this, function(ApiClient, Address, AddressAssignment, ListAddress, ListAddressAssignment) {
  'use strict';

  /**
   * Address service.
   * @module api/AddressApi
   * @version 1.0
   */

  /**
   * Constructs a new AddressApi. 
   * @alias module:api/AddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/AddressApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:api/AddressApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.callDelete = function(buyerID, addressID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling callDelete");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling callDelete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
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
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/AddressApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/Address} address 
     * @param {module:api/AddressApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.create = function(buyerID, address, callback) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling create");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling create");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssignment operation.
     * @callback module:api/AddressApi~deleteAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {module:api/AddressApi~deleteAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignment = function(buyerID, addressID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteAssignment");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling deleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/AddressApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:api/AddressApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.get = function(buyerID, addressID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling get");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/AddressApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAddress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/AddressApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAddress}
     */
    this.list = function(buyerID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling list");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = ListAddress;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignments operation.
     * @callback module:api/AddressApi~listAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListAddressAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.addressID ID of the address.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the address.
     * @param {Boolean} opts.isShipping Is shipping of the address.
     * @param {Boolean} opts.isBilling Is billing of the address.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/AddressApi~listAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListAddressAssignment}
     */
    this.listAssignments = function(buyerID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling listAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'addressID': opts['addressID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'isShipping': opts['isShipping'],
        'isBilling': opts['isBilling'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListAddressAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patch operation.
     * @callback module:api/AddressApi~patchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @param {module:api/AddressApi~patchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.patch = function(buyerID, addressID, address, callback) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patch");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling patch");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignment operation.
     * @callback module:api/AddressApi~saveAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/AddressAssignment} assignment 
     * @param {module:api/AddressApi~saveAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignment = function(buyerID, assignment, callback) {
      var postBody = assignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling saveAssignment");
      }

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling saveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = null;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/AddressApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @param {module:api/AddressApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.update = function(buyerID, addressID, address, callback) {
      var postBody = address;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling update");
      }

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling update");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'addressID': addressID
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));