# OrderCloud.PaymentApi

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](PaymentApi.md#callDelete) | **DELETE** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID} | 
[**create**](PaymentApi.md#create) | **POST** /buyers/{buyerID}/orders/{orderID}/payments | 
[**createTransaction**](PaymentApi.md#createTransaction) | **POST** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions | 
[**deleteTransaction**](PaymentApi.md#deleteTransaction) | **DELETE** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
[**get**](PaymentApi.md#get) | **GET** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID} | 
[**list**](PaymentApi.md#list) | **GET** /buyers/{buyerID}/orders/{orderID}/payments | 
[**patch**](PaymentApi.md#patch) | **PATCH** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID} | 
[**patchTransaction**](PaymentApi.md#patchTransaction) | **PATCH** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
[**update**](PaymentApi.md#update) | **PUT** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID} | 
[**updateTransaction**](PaymentApi.md#updateTransaction) | **PUT** /buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID} | 


<a name="callDelete"></a>
# **callDelete**
> callDelete(buyerID, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.callDelete(buyerID, orderID, paymentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="create"></a>
# **create**
> Payment create(buyerID, orderID, payment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var payment = new OrderCloud.Payment(); // Payment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.create(buyerID, orderID, payment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="createTransaction"></a>
# **createTransaction**
> Payment createTransaction(buyerID, orderID, paymentID, transaction)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTransaction(buyerID, orderID, paymentID, transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="deleteTransaction"></a>
# **deleteTransaction**
> deleteTransaction(buyerID, orderID, paymentID, transactionID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transactionID = "transactionID_example"; // String | ID of the transaction.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTransaction(buyerID, orderID, paymentID, transactionID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transactionID** | **String**| ID of the transaction. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="get"></a>
# **get**
> Payment get(buyerID, orderID, paymentID)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.get(buyerID, orderID, paymentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="list"></a>
# **list**
> ListPayment list(buyerID, orderID, opts)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

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
apiInstance.list(buyerID, orderID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListPayment**](ListPayment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patch"></a>
# **patch**
> Payment patch(buyerID, orderID, paymentID, partialPayment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var partialPayment = new OrderCloud.Payment(); // Payment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patch(buyerID, orderID, paymentID, partialPayment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **partialPayment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="patchTransaction"></a>
# **patchTransaction**
> Payment patchTransaction(buyerID, orderID, paymentID, transactionID, partialTransaction)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transactionID = "transactionID_example"; // String | ID of the transaction.

var partialTransaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchTransaction(buyerID, orderID, paymentID, transactionID, partialTransaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transactionID** | **String**| ID of the transaction. | 
 **partialTransaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="update"></a>
# **update**
> Payment update(buyerID, orderID, paymentID, payment)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var payment = new OrderCloud.Payment(); // Payment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(buyerID, orderID, paymentID, payment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="updateTransaction"></a>
# **updateTransaction**
> Payment updateTransaction(buyerID, orderID, paymentID, transactionID, transaction)



### Example
```javascript
var OrderCloud = require('order_cloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.PaymentApi();

var buyerID = "buyerID_example"; // String | ID of the buyer.

var orderID = "orderID_example"; // String | ID of the order.

var paymentID = "paymentID_example"; // String | ID of the payment.

var transactionID = "transactionID_example"; // String | ID of the transaction.

var transaction = new OrderCloud.PaymentTransaction(); // PaymentTransaction | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTransaction(buyerID, orderID, paymentID, transactionID, transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyerID** | **String**| ID of the buyer. | 
 **orderID** | **String**| ID of the order. | 
 **paymentID** | **String**| ID of the payment. | 
 **transactionID** | **String**| ID of the transaction. | 
 **transaction** | [**PaymentTransaction**](PaymentTransaction.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

