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
    instance = new OrderCloud.CostCenterApi();
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

  describe('CostCenterApi', function() {
    describe('buyersBuyerIDCostcentersAssignmentsGet', function() {
      it('should call buyersBuyerIDCostcentersAssignmentsGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersAssignmentsGet
        //instance.buyersBuyerIDCostcentersAssignmentsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersAssignmentsPost', function() {
      it('should call buyersBuyerIDCostcentersAssignmentsPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersAssignmentsPost
        //instance.buyersBuyerIDCostcentersAssignmentsPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersCostCenterIDAssignmentsDelete', function() {
      it('should call buyersBuyerIDCostcentersCostCenterIDAssignmentsDelete successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersCostCenterIDAssignmentsDelete
        //instance.buyersBuyerIDCostcentersCostCenterIDAssignmentsDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersCostCenterIDDelete', function() {
      it('should call buyersBuyerIDCostcentersCostCenterIDDelete successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersCostCenterIDDelete
        //instance.buyersBuyerIDCostcentersCostCenterIDDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersCostCenterIDGet', function() {
      it('should call buyersBuyerIDCostcentersCostCenterIDGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersCostCenterIDGet
        //instance.buyersBuyerIDCostcentersCostCenterIDGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersCostCenterIDPatch', function() {
      it('should call buyersBuyerIDCostcentersCostCenterIDPatch successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersCostCenterIDPatch
        //instance.buyersBuyerIDCostcentersCostCenterIDPatch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersCostCenterIDPut', function() {
      it('should call buyersBuyerIDCostcentersCostCenterIDPut successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersCostCenterIDPut
        //instance.buyersBuyerIDCostcentersCostCenterIDPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersGet', function() {
      it('should call buyersBuyerIDCostcentersGet successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersGet
        //instance.buyersBuyerIDCostcentersGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyersBuyerIDCostcentersPost', function() {
      it('should call buyersBuyerIDCostcentersPost successfully', function(done) {
        //uncomment below and update the code to test buyersBuyerIDCostcentersPost
        //instance.buyersBuyerIDCostcentersPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
