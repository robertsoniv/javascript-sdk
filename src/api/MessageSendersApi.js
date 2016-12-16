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
    define(['ApiClient', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListMessageCCListenerAssignment'), require('../model/ListMessageSender'), require('../model/ListMessageSenderAssignment'), require('../model/MessageCCListenerAssignment'), require('../model/MessageSender'), require('../model/MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrdercloudJavascriptSdk) {
      root.OrdercloudJavascriptSdk = {};
    }
    root.OrdercloudJavascriptSdk.MessageSendersApi = factory(root.OrdercloudJavascriptSdk.ApiClient, root.OrdercloudJavascriptSdk.ListMessageCCListenerAssignment, root.OrdercloudJavascriptSdk.ListMessageSender, root.OrdercloudJavascriptSdk.ListMessageSenderAssignment, root.OrdercloudJavascriptSdk.MessageCCListenerAssignment, root.OrdercloudJavascriptSdk.MessageSender, root.OrdercloudJavascriptSdk.MessageSenderAssignment);
  }
}(this, function(ApiClient, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment) {
  'use strict';

  /**
   * MessageSenders service.
   * @module api/MessageSendersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MessageSendersApi. 
   * @alias module:api/MessageSendersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteAssignment operation.
     * @callback module:api/MessageSendersApi~deleteAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {module:api/MessageSendersApi~deleteAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignment = function(messageSenderID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling deleteAssignment");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
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
        '/MessageSenders/{messageSenderID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/MessageSendersApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {module:api/MessageSendersApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageSender}
     */
    this.get = function(messageSenderID, callback) {
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling get");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
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
      var returnType = MessageSender;

      return this.apiClient.callApi(
        '/MessageSenders/{messageSenderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/MessageSendersApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/MessageSendersApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageSender}
     */
    this.list = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = ListMessageSender;

      return this.apiClient.callApi(
        '/MessageSenders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignments operation.
     * @callback module:api/MessageSendersApi~listAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageSenderAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.messageSenderID ID of the message sender.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the message sender.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/MessageSendersApi~listAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageSenderAssignment}
     */
    this.listAssignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'messageSenderID': opts['messageSenderID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
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
      var returnType = ListMessageSenderAssignment;

      return this.apiClient.callApi(
        '/MessageSenders/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCCListenerAssignments operation.
     * @callback module:api/MessageSendersApi~listCCListenerAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListMessageCCListenerAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param {module:api/MessageSendersApi~listCCListenerAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListMessageCCListenerAssignment}
     */
    this.listCCListenerAssignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = ListMessageCCListenerAssignment;

      return this.apiClient.callApi(
        '/MessageSenders/CCListenerAssignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignment operation.
     * @callback module:api/MessageSendersApi~saveAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/MessageSenderAssignment} assignment 
     * @param {module:api/MessageSendersApi~saveAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveAssignment = function(assignment, callback) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling saveAssignment");
      }


      var pathParams = {
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
        '/MessageSenders/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveCCListenerAssignment operation.
     * @callback module:api/MessageSendersApi~saveCCListenerAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/MessageCCListenerAssignment} assignment 
     * @param {module:api/MessageSendersApi~saveCCListenerAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveCCListenerAssignment = function(assignment, callback) {
      var postBody = assignment;

      // verify the required parameter 'assignment' is set
      if (assignment == undefined || assignment == null) {
        throw new Error("Missing the required parameter 'assignment' when calling saveCCListenerAssignment");
      }


      var pathParams = {
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
        '/MessageSenders/CCListenerAssignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
