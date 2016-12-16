# OrdercloudJavascriptSdk.PriceScheduleApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](PriceScheduleApi.md#callDelete) | **DELETE** /priceschedules/{priceScheduleID} | 
[**create**](PriceScheduleApi.md#create) | **POST** /priceschedules | 
[**deletePriceBreak**](PriceScheduleApi.md#deletePriceBreak) | **DELETE** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**get**](PriceScheduleApi.md#get) | **GET** /priceschedules/{priceScheduleID} | 
[**list**](PriceScheduleApi.md#list) | **GET** /priceschedules | 
[**patch**](PriceScheduleApi.md#patch) | **PATCH** /priceschedules/{priceScheduleID} | 
[**savePriceBreak**](PriceScheduleApi.md#savePriceBreak) | **POST** /priceschedules/{priceScheduleID}/PriceBreaks | 
[**update**](PriceScheduleApi.md#update) | **PUT** /priceschedules/{priceScheduleID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(priceScheduleID)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.callDelete(priceScheduleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> PriceSchedule create(priceSchedule)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceSchedule = new OrdercloudJavascriptSdk.PriceSchedule(); // PriceSchedule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.create(priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deletePriceBreak"></a>
# **deletePriceBreak**
> deletePriceBreak(priceScheduleID, quantity)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var quantity = 56; // Number | Quantity of the price schedule.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePriceBreak(priceScheduleID, quantity, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **quantity** | **Number**| Quantity of the price schedule. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> PriceSchedule get(priceScheduleID)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.get(priceScheduleID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListPriceSchedule list(opts)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var opts = { 
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
apiInstance.list(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListPriceSchedule**](ListPriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> PriceSchedule patch(priceScheduleID, priceSchedule)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var priceSchedule = new OrdercloudJavascriptSdk.PriceSchedule(); // PriceSchedule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patch(priceScheduleID, priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="savePriceBreak"></a>
# **savePriceBreak**
> PriceSchedule savePriceBreak(priceScheduleID, priceBreak)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var priceBreak = new OrdercloudJavascriptSdk.PriceBreak(); // PriceBreak | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.savePriceBreak(priceScheduleID, priceBreak, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceBreak** | [**PriceBreak**](PriceBreak.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="update"></a>
# **update**
> PriceSchedule update(priceScheduleID, priceSchedule)



### Example
```javascript
var OrdercloudJavascriptSdk = require('ordercloud-javascript-sdk');
var defaultClient = OrdercloudJavascriptSdk.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrdercloudJavascriptSdk.PriceScheduleApi();

var priceScheduleID = "priceScheduleID_example"; // String | ID of the price schedule.

var priceSchedule = new OrdercloudJavascriptSdk.PriceSchedule(); // PriceSchedule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(priceScheduleID, priceSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **priceScheduleID** | **String**| ID of the price schedule. | 
 **priceSchedule** | [**PriceSchedule**](PriceSchedule.md)|  | 

### Return type

[**PriceSchedule**](PriceSchedule.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

