# OrdercloudJavascriptSdk.CategoryApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](CategoryApi.md#callDelete) | **DELETE** /catalogs/{catalogID}/categories/{categoryID} | 
[**create**](CategoryApi.md#create) | **POST** /catalogs/{catalogID}/categories | 
[**deleteAssignment**](CategoryApi.md#deleteAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/assignments | 
[**deleteProductAssignment**](CategoryApi.md#deleteProductAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID} | 
[**get**](CategoryApi.md#get) | **GET** /catalogs/{catalogID}/categories/{categoryID} | 
[**list**](CategoryApi.md#list) | **GET** /catalogs/{catalogID}/categories | 
[**listAssignments**](CategoryApi.md#listAssignments) | **GET** /catalogs/{catalogID}/categories/assignments | 
[**listProductAssignments**](CategoryApi.md#listProductAssignments) | **GET** /catalogs/{catalogID}/categories/productassignments | 
[**patch**](CategoryApi.md#patch) | **PATCH** /catalogs/{catalogID}/categories/{categoryID} | 
[**saveAssignment**](CategoryApi.md#saveAssignment) | **POST** /catalogs/{catalogID}/categories/assignments | 
[**saveProductAssignment**](CategoryApi.md#saveProductAssignment) | **POST** /catalogs/{catalogID}/categories/productassignments | 
[**update**](CategoryApi.md#update) | **PUT** /catalogs/{catalogID}/categories/{categoryID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(catalogID, categoryID)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.callDelete(catalogID, categoryID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> Category create(catalogID, category)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var category = new OrdercloudJavascriptSdk.Category(); // Category | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.create(catalogID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deleteAssignment"></a>
# **deleteAssignment**
> deleteAssignment(catalogID, categoryID, buyerID, opts)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var buyerID = "buyerID_example"; // String | ID of the buyer.

var opts = { 
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example" // String | ID of the user group.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAssignment(catalogID, categoryID, buyerID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **buyerID** | **String**| ID of the buyer. | 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deleteProductAssignment"></a>
# **deleteProductAssignment**
> deleteProductAssignment(catalogID, categoryID, productID)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var productID = "productID_example"; // String | ID of the product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductAssignment(catalogID, categoryID, productID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **productID** | **String**| ID of the product. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> Category get(catalogID, categoryID)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.get(catalogID, categoryID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListCategory list(catalogID, opts)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'depth': "depth_example", // String | Depth of the category.
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.list(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **depth** | **String**| Depth of the category. | [optional] 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListCategory**](ListCategory.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="listAssignments"></a>
# **listAssignments**
> ListCategoryAssignment listAssignments(catalogID, opts)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'categoryID': "categoryID_example", // String | ID of the category.
  'buyerID': "buyerID_example", // String | ID of the buyer.
  'userID': "userID_example", // String | ID of the user.
  'userGroupID': "userGroupID_example", // String | ID of the user group.
  'level': "level_example", // String | Level of the category.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAssignments(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **buyerID** | **String**| ID of the buyer. | [optional] 
 **userID** | **String**| ID of the user. | [optional] 
 **userGroupID** | **String**| ID of the user group. | [optional] 
 **level** | **String**| Level of the category. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCategoryAssignment**](ListCategoryAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="listProductAssignments"></a>
# **listProductAssignments**
> ListCategoryProductAssignment listProductAssignments(catalogID, opts)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var opts = { 
  'categoryID': "categoryID_example", // String | ID of the category.
  'productID': "productID_example", // String | ID of the product.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56 // Number | Number of results to return per page. Default: 20, max: 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listProductAssignments(catalogID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | [optional] 
 **productID** | **String**| ID of the product. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 

### Return type

[**ListCategoryProductAssignment**](ListCategoryProductAssignment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> Category patch(catalogID, categoryID, category)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var category = new OrdercloudJavascriptSdk.Category(); // Category | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patch(catalogID, categoryID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="saveAssignment"></a>
# **saveAssignment**
> saveAssignment(catalogID, categoryAssignment)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryAssignment = new OrdercloudJavascriptSdk.CategoryAssignment(); // CategoryAssignment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveAssignment(catalogID, categoryAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryAssignment** | [**CategoryAssignment**](CategoryAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="saveProductAssignment"></a>
# **saveProductAssignment**
> saveProductAssignment(catalogID, productAssignment)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var productAssignment = new OrdercloudJavascriptSdk.CategoryProductAssignment(); // CategoryProductAssignment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveProductAssignment(catalogID, productAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **productAssignment** | [**CategoryProductAssignment**](CategoryProductAssignment.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="update"></a>
# **update**
> Category update(catalogID, categoryID, category)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.CategoryApi();

var catalogID = "catalogID_example"; // String | ID of the catalog.

var categoryID = "categoryID_example"; // String | ID of the category.

var category = new OrdercloudJavascriptSdk.Category(); // Category | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(catalogID, categoryID, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogID** | **String**| ID of the catalog. | 
 **categoryID** | **String**| ID of the category. | 
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

