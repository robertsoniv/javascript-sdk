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
    instance = new OrderCloud.CreditCardApi();
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

  describe('CreditCardApi', function() {
    describe('buyersBuyerIDCreditcardsAssignmentsGet', function() {
      it('should call buyersBuyerIDCreditcardsAssignmentsGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsAssignmentsGet
        //instance.buyersBuyerIDCreditcardsAssignmentsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsAssignmentsPost', function() {
      it('should call buyersBuyerIDCreditcardsAssignmentsPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsAssignmentsPost
        //instance.buyersBuyerIDCreditcardsAssignmentsPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsCreditCardIDAssignmentsDelete', function() {
      it('should call buyersBuyerIDCreditcardsCreditCardIDAssignmentsDelete successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsCreditCardIDAssignmentsDelete
        //instance.buyersBuyerIDCreditcardsCreditCardIDAssignmentsDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsCreditCardIDDelete', function() {
      it('should call buyersBuyerIDCreditcardsCreditCardIDDelete successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsCreditCardIDDelete
        //instance.buyersBuyerIDCreditcardsCreditCardIDDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsCreditCardIDGet', function() {
      it('should call buyersBuyerIDCreditcardsCreditCardIDGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsCreditCardIDGet
        //instance.buyersBuyerIDCreditcardsCreditCardIDGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsCreditCardIDPatch', function() {
      it('should call buyersBuyerIDCreditcardsCreditCardIDPatch successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsCreditCardIDPatch
        //instance.buyersBuyerIDCreditcardsCreditCardIDPatch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsCreditCardIDPut', function() {
      it('should call buyersBuyerIDCreditcardsCreditCardIDPut successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsCreditCardIDPut
        //instance.buyersBuyerIDCreditcardsCreditCardIDPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsGet', function() {
      it('should call buyersBuyerIDCreditcardsGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsGet
        //instance.buyersBuyerIDCreditcardsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCreditcardsPost', function() {
      it('should call buyersBuyerIDCreditcardsPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCreditcardsPost
        //instance.buyersBuyerIDCreditcardsPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
