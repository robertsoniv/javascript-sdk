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
    define(['ApiClient', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/UserGroup', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUserGroup'), require('../model/ListUserGroupAssignment'), require('../model/UserGroup'), require('../model/UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdercloudJavascriptSdk) {
      root.OrdercloudJavascriptSdk = {};
    }
    root.OrdercloudJavascriptSdk.UserGroupApi = factory(root.OrdercloudJavascriptSdk.ApiClient, root.OrdercloudJavascriptSdk.ListUserGroup, root.OrdercloudJavascriptSdk.ListUserGroupAssignment, root.OrdercloudJavascriptSdk.UserGroup, root.OrdercloudJavascriptSdk.UserGroupAssignment);
  }
}(this, function(ApiClient, ListUserGroup, ListUserGroupAssignment, UserGroup, UserGroupAssignment) {
  'use strict';

  /**
   * UserGroup service.
   * @module api/UserGroupApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserGroupApi. 
   * @alias module:api/UserGroupApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/UserGroupApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:api/UserGroupApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.callDelete = function(buyerID, userGroupID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling callDelete");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling callDelete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
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
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/UserGroupApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/UserGroup} group 
     * @param {module:api/UserGroupApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGroup}
     */
    this.create = function(buyerID, group, callback) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling create");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling create");
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAssignment operation.
     * @callback module:api/UserGroupApi~deleteUserAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {String} userID ID of the user.
     * @param {module:api/UserGroupApi~deleteUserAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserAssignment = function(buyerID, userGroupID, userID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteUserAssignment");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling deleteUserAssignment");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling deleteUserAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID,
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
        '/buyers/{buyerID}/usergroups/{userGroupID}/assignments/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/UserGroupApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:api/UserGroupApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGroup}
     */
    this.get = function(buyerID, userGroupID, callback) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling get");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/UserGroupApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListUserGroup} data The data returned by the service call.
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
     * @param {module:api/UserGroupApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListUserGroup}
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
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listUserAssignments operation.
     * @callback module:api/UserGroupApi~listUserAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListUserGroupAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.userID ID of the user.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/UserGroupApi~listUserAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListUserGroupAssignment}
     */
    this.listUserAssignments = function(buyerID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling listUserAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'userID': opts['userID'],
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
      var returnType = ListUserGroupAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patch operation.
     * @callback module:api/UserGroupApi~patchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @param {module:api/UserGroupApi~patchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGroup}
     */
    this.patch = function(buyerID, userGroupID, group, callback) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling patch");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling patch");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveUserAssignment operation.
     * @callback module:api/UserGroupApi~saveUserAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/UserGroupAssignment} userGroupAssignment 
     * @param {module:api/UserGroupApi~saveUserAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveUserAssignment = function(buyerID, userGroupAssignment, callback) {
      var postBody = userGroupAssignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling saveUserAssignment");
      }

      // verify the required parameter 'userGroupAssignment' is set
      if (userGroupAssignment == undefined || userGroupAssignment == null) {
        throw new Error("Missing the required parameter 'userGroupAssignment' when calling saveUserAssignment");
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
        '/buyers/{buyerID}/usergroups/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/UserGroupApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} group 
     * @param {module:api/UserGroupApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGroup}
     */
    this.update = function(buyerID, userGroupID, group, callback) {
      var postBody = group;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling update");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling update");
      }

      // verify the required parameter 'group' is set
      if (group == undefined || group == null) {
        throw new Error("Missing the required parameter 'group' when calling update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/usergroups/{userGroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
