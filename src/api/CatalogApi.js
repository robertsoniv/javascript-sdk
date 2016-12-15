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
    define(['ApiClient', 'model/Catalog', 'model/CatalogAssignment', 'model/ListCatalog', 'model/ListCatalogAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Catalog'), require('../model/CatalogAssignment'), require('../model/ListCatalog'), require('../model/ListCatalogAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CatalogApi = factory(root.OrderCloud.ApiClient, root.OrderCloud.Catalog, root.OrderCloud.CatalogAssignment, root.OrderCloud.ListCatalog, root.OrderCloud.ListCatalogAssignment);
  }
}(this, function(ApiClient, Catalog, CatalogAssignment, ListCatalog, ListCatalogAssignment) {
  'use strict';

  /**
   * Catalog service.
   * @module api/CatalogApi
   * @version 1.0
   */

  /**
   * Constructs a new CatalogApi. 
   * @alias module:api/CatalogApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callDelete operation.
     * @callback module:api/CatalogApi~callDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~callDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.callDelete = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling callDelete");
      }


      var pathParams = {
        'catalogID': catalogID
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
        '/catalogs/{catalogID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/CatalogApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.create = function(catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling create");
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssignment operation.
     * @callback module:api/CatalogApi~deleteAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} buyerID ID of the buyer.
     * @param {module:api/CatalogApi~deleteAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAssignment = function(catalogID, buyerID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling deleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling deleteAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'buyerID': buyerID
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
        '/catalogs/{catalogID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/CatalogApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:api/CatalogApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.get = function(catalogID, callback) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling get");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/CatalogApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListCatalog} data The data returned by the service call.
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
     * @param {module:api/CatalogApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalog}
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
      var returnType = ListCatalog;

      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssignments operation.
     * @callback module:api/CatalogApi~listAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListCatalogAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {module:api/CatalogApi~listAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListCatalogAssignment}
     */
    this.listAssignments = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'buyerID': opts['buyerID'],
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
      var returnType = ListCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patch operation.
     * @callback module:api/CatalogApi~patchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} partialCatalog 
     * @param {module:api/CatalogApi~patchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.patch = function(catalogID, partialCatalog, callback) {
      var postBody = partialCatalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling patch");
      }

      // verify the required parameter 'partialCatalog' is set
      if (partialCatalog == undefined || partialCatalog == null) {
        throw new Error("Missing the required parameter 'partialCatalog' when calling patch");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAssignment operation.
     * @callback module:api/CatalogApi~saveAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CatalogAssignment} assignment 
     * @param {module:api/CatalogApi~saveAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/catalogs/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/CatalogApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @param {module:api/CatalogApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Catalog}
     */
    this.update = function(catalogID, catalog, callback) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling update");
      }

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling update");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
