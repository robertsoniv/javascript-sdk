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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.UserApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserApi', function() {
    describe('buyersBuyerIDUsersGet', function() {
      it('should call buyersBuyerIDUsersGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersGet
        //instance.buyersBuyerIDUsersGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersPost', function() {
      it('should call buyersBuyerIDUsersPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersPost
        //instance.buyersBuyerIDUsersPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersUserIDAccesstokenPost', function() {
      it('should call buyersBuyerIDUsersUserIDAccesstokenPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersUserIDAccesstokenPost
        //instance.buyersBuyerIDUsersUserIDAccesstokenPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersUserIDDelete', function() {
      it('should call buyersBuyerIDUsersUserIDDelete successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersUserIDDelete
        //instance.buyersBuyerIDUsersUserIDDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersUserIDGet', function() {
      it('should call buyersBuyerIDUsersUserIDGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersUserIDGet
        //instance.buyersBuyerIDUsersUserIDGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersUserIDPatch', function() {
      it('should call buyersBuyerIDUsersUserIDPatch successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersUserIDPatch
        //instance.buyersBuyerIDUsersUserIDPatch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDUsersUserIDPut', function() {
      it('should call buyersBuyerIDUsersUserIDPut successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDUsersUserIDPut
        //instance.buyersBuyerIDUsersUserIDPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
