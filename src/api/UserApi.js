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
    define(['ApiClient', 'model/AccessToken', 'model/ImpersonateTokenRequest', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'), require('../model/ImpersonateTokenRequest'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdercloudJavascriptSdk) {
      root.OrdercloudJavascriptSdk = {};
    }
    root.OrdercloudJavascriptSdk.UserApi = factory(root.OrdercloudJavascriptSdk.ApiClient, root.OrdercloudJavascriptSdk.AccessToken, root.OrdercloudJavascriptSdk.ImpersonateTokenRequest, root.OrdercloudJavascriptSdk.ListUser, root.OrdercloudJavascriptSdk.User);
  }
}(this, function(ApiClient, AccessToken, ImpersonateTokenRequest, ListUser, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/UserApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:api/UserApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.callDelete = function(buyerID, userID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling callDelete");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling callDelete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
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
        '/buyers/{buyerID}/users/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/UserApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/User} user 
     * @param {module:api/UserApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.create = function(buyerID, user, callback) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling create");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling create");
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
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/UserApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:api/UserApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.get = function(buyerID, userID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling get");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccessToken operation.
     * @callback module:api/UserApi~getAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/ImpersonateTokenRequest} tokenRequest 
     * @param {module:api/UserApi~getAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessToken}
     */
    this.getAccessToken = function(buyerID, userID, tokenRequest, callback) {
      var postBody = tokenRequest;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling getAccessToken");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling getAccessToken");
      }

      // verify the required parameter 'tokenRequest' is set
      if (tokenRequest == undefined || tokenRequest == null) {
        throw new Error("Missing the required parameter 'tokenRequest' when calling getAccessToken");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
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
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}/accesstoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/UserApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/UserApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListUser}
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
        'userGroupID': opts['userGroupID'],
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
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patch operation.
     * @callback module:api/UserApi~patchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @param {module:api/UserApi~patchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.patch = function(buyerID, userID, user, callback) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patch");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling patch");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/UserApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @param {module:api/UserApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.update = function(buyerID, userID, user, callback) {
      var postBody = user;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling update");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling update");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/users/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
