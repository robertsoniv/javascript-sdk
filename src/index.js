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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken', 'model/Address', 'model/AddressAssignment', 'model/AdminCompany', 'model/ApprovalRule', 'model/BaseSpec', 'model/Buyer', 'model/BuyerAddress', 'model/BuyerCreditCard', 'model/BuyerProduct', 'model/BuyerSpec', 'model/Catalog', 'model/CatalogAssignment', 'model/Category', 'model/CategoryAssignment', 'model/CategoryProductAssignment', 'model/CostCenter', 'model/CostCenterAssignment', 'model/CreditCard', 'model/CreditCardAssignment', 'model/ImpersonateTokenRequest', 'model/Inventory', 'model/LineItem', 'model/LineItemSpec', 'model/ListAddress', 'model/ListAddressAssignment', 'model/ListAdminCompany', 'model/ListApprovalRule', 'model/ListBuyer', 'model/ListBuyerAddress', 'model/ListBuyerCreditCard', 'model/ListBuyerProduct', 'model/ListBuyerSpec', 'model/ListCatalog', 'model/ListCatalogAssignment', 'model/ListCategory', 'model/ListCategoryAssignment', 'model/ListCategoryProductAssignment', 'model/ListCostCenter', 'model/ListCostCenterAssignment', 'model/ListCreditCard', 'model/ListCreditCardAssignment', 'model/ListInventory', 'model/ListLineItem', 'model/ListMessageCCListenerAssignment', 'model/ListMessageConfig', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/ListNativeIntegrationProxyAssignment', 'model/ListNativeIntegrtionProxyConfig', 'model/ListOrder', 'model/ListOrderApproval', 'model/ListOrderPromotion', 'model/ListPayment', 'model/ListPriceSchedule', 'model/ListProduct', 'model/ListProductAssignment', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/ListSecurityProfile', 'model/ListSecurityProfileAssignment', 'model/ListShipment', 'model/ListSpec', 'model/ListSpecOption', 'model/ListSpecProductAssignment', 'model/ListSpendingAccount', 'model/ListSpendingAccountAssignment', 'model/ListUser', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/ListVariant', 'model/ListWebHook', 'model/ListWebHookRoute', 'model/ListXpIndex', 'model/MessageCCListenerAssignment', 'model/MessageConfig', 'model/MessageSender', 'model/MessageSenderAssignment', 'model/Meta', 'model/NativeIntegrationProxyAssignment', 'model/NativeIntegrtionProxyConfig', 'model/Order', 'model/OrderApproval', 'model/OrderPromotion', 'model/PasswordReset', 'model/PasswordResetRequest', 'model/Payment', 'model/PaymentTransaction', 'model/PingResponse', 'model/PriceBreak', 'model/PriceSchedule', 'model/Product', 'model/ProductAssignment', 'model/Promotion', 'model/PromotionAssignment', 'model/SecurityProfile', 'model/SecurityProfileAssignment', 'model/Shipment', 'model/ShipmentItem', 'model/Spec', 'model/SpecOption', 'model/SpecProductAssignment', 'model/SpendingAccount', 'model/SpendingAccountAssignment', 'model/StripeCreditCard', 'model/Usage', 'model/UsageBuyer', 'model/UsageOrganization', 'model/User', 'model/UserGroup', 'model/UserGroupAssignment', 'model/Variant', 'model/WebHook', 'model/WebHookRoute', 'model/XpIndex', 'api/AddressApi', 'api/AdminAddressApi', 'api/AdminUserApi', 'api/AdminUserGroupApi', 'api/ApprovalRuleApi', 'api/BuyerApi', 'api/CatalogApi', 'api/CategoryApi', 'api/CostCenterApi', 'api/CreditCardApi', 'api/LineItemApi', 'api/MeApi', 'api/MessageSendersApi', 'api/OrderApi', 'api/PasswordResetApi', 'api/PaymentApi', 'api/PriceScheduleApi', 'api/ProductApi', 'api/PromotionApi', 'api/SecurityProfileApi', 'api/ShipmentApi', 'api/SpecApi', 'api/SpendingAccountApi', 'api/UserApi', 'api/UserGroupApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessToken'), require('./model/Address'), require('./model/AddressAssignment'), require('./model/AdminCompany'), require('./model/ApprovalRule'), require('./model/BaseSpec'), require('./model/Buyer'), require('./model/BuyerAddress'), require('./model/BuyerCreditCard'), require('./model/BuyerProduct'), require('./model/BuyerSpec'), require('./model/Catalog'), require('./model/CatalogAssignment'), require('./model/Category'), require('./model/CategoryAssignment'), require('./model/CategoryProductAssignment'), require('./model/CostCenter'), require('./model/CostCenterAssignment'), require('./model/CreditCard'), require('./model/CreditCardAssignment'), require('./model/ImpersonateTokenRequest'), require('./model/Inventory'), require('./model/LineItem'), require('./model/LineItemSpec'), require('./model/ListAddress'), require('./model/ListAddressAssignment'), require('./model/ListAdminCompany'), require('./model/ListApprovalRule'), require('./model/ListBuyer'), require('./model/ListBuyerAddress'), require('./model/ListBuyerCreditCard'), require('./model/ListBuyerProduct'), require('./model/ListBuyerSpec'), require('./model/ListCatalog'), require('./model/ListCatalogAssignment'), require('./model/ListCategory'), require('./model/ListCategoryAssignment'), require('./model/ListCategoryProductAssignment'), require('./model/ListCostCenter'), require('./model/ListCostCenterAssignment'), require('./model/ListCreditCard'), require('./model/ListCreditCardAssignment'), require('./model/ListInventory'), require('./model/ListLineItem'), require('./model/ListMessageCCListenerAssignment'), require('./model/ListMessageConfig'), require('./model/ListMessageSender'), require('./model/ListMessageSenderAssignment'), require('./model/ListNativeIntegrationProxyAssignment'), require('./model/ListNativeIntegrtionProxyConfig'), require('./model/ListOrder'), require('./model/ListOrderApproval'), require('./model/ListOrderPromotion'), require('./model/ListPayment'), require('./model/ListPriceSchedule'), require('./model/ListProduct'), require('./model/ListProductAssignment'), require('./model/ListPromotion'), require('./model/ListPromotionAssignment'), require('./model/ListSecurityProfile'), require('./model/ListSecurityProfileAssignment'), require('./model/ListShipment'), require('./model/ListSpec'), require('./model/ListSpecOption'), require('./model/ListSpecProductAssignment'), require('./model/ListSpendingAccount'), require('./model/ListSpendingAccountAssignment'), require('./model/ListUser'), require('./model/ListUserGroup'), require('./model/ListUserGroupAssignment'), require('./model/ListVariant'), require('./model/ListWebHook'), require('./model/ListWebHookRoute'), require('./model/ListXpIndex'), require('./model/MessageCCListenerAssignment'), require('./model/MessageConfig'), require('./model/MessageSender'), require('./model/MessageSenderAssignment'), require('./model/Meta'), require('./model/NativeIntegrationProxyAssignment'), require('./model/NativeIntegrtionProxyConfig'), require('./model/Order'), require('./model/OrderApproval'), require('./model/OrderPromotion'), require('./model/PasswordReset'), require('./model/PasswordResetRequest'), require('./model/Payment'), require('./model/PaymentTransaction'), require('./model/PingResponse'), require('./model/PriceBreak'), require('./model/PriceSchedule'), require('./model/Product'), require('./model/ProductAssignment'), require('./model/Promotion'), require('./model/PromotionAssignment'), require('./model/SecurityProfile'), require('./model/SecurityProfileAssignment'), require('./model/Shipment'), require('./model/ShipmentItem'), require('./model/Spec'), require('./model/SpecOption'), require('./model/SpecProductAssignment'), require('./model/SpendingAccount'), require('./model/SpendingAccountAssignment'), require('./model/StripeCreditCard'), require('./model/Usage'), require('./model/UsageBuyer'), require('./model/UsageOrganization'), require('./model/User'), require('./model/UserGroup'), require('./model/UserGroupAssignment'), require('./model/Variant'), require('./model/WebHook'), require('./model/WebHookRoute'), require('./model/XpIndex'), require('./api/AddressApi'), require('./api/AdminAddressApi'), require('./api/AdminUserApi'), require('./api/AdminUserGroupApi'), require('./api/ApprovalRuleApi'), require('./api/BuyerApi'), require('./api/CatalogApi'), require('./api/CategoryApi'), require('./api/CostCenterApi'), require('./api/CreditCardApi'), require('./api/LineItemApi'), require('./api/MeApi'), require('./api/MessageSendersApi'), require('./api/OrderApi'), require('./api/PasswordResetApi'), require('./api/PaymentApi'), require('./api/PriceScheduleApi'), require('./api/ProductApi'), require('./api/PromotionApi'), require('./api/SecurityProfileApi'), require('./api/ShipmentApi'), require('./api/SpecApi'), require('./api/SpendingAccountApi'), require('./api/UserApi'), require('./api/UserGroupApi'));
  }
}(function(ApiClient, AccessToken, Address, AddressAssignment, AdminCompany, ApprovalRule, BaseSpec, Buyer, BuyerAddress, BuyerCreditCard, BuyerProduct, BuyerSpec, Catalog, CatalogAssignment, Category, CategoryAssignment, CategoryProductAssignment, CostCenter, CostCenterAssignment, CreditCard, CreditCardAssignment, ImpersonateTokenRequest, Inventory, LineItem, LineItemSpec, ListAddress, ListAddressAssignment, ListAdminCompany, ListApprovalRule, ListBuyer, ListBuyerAddress, ListBuyerCreditCard, ListBuyerProduct, ListBuyerSpec, ListCatalog, ListCatalogAssignment, ListCategory, ListCategoryAssignment, ListCategoryProductAssignment, ListCostCenter, ListCostCenterAssignment, ListCreditCard, ListCreditCardAssignment, ListInventory, ListLineItem, ListMessageCCListenerAssignment, ListMessageConfig, ListMessageSender, ListMessageSenderAssignment, ListNativeIntegrationProxyAssignment, ListNativeIntegrtionProxyConfig, ListOrder, ListOrderApproval, ListOrderPromotion, ListPayment, ListPriceSchedule, ListProduct, ListProductAssignment, ListPromotion, ListPromotionAssignment, ListSecurityProfile, ListSecurityProfileAssignment, ListShipment, ListSpec, ListSpecOption, ListSpecProductAssignment, ListSpendingAccount, ListSpendingAccountAssignment, ListUser, ListUserGroup, ListUserGroupAssignment, ListVariant, ListWebHook, ListWebHookRoute, ListXpIndex, MessageCCListenerAssignment, MessageConfig, MessageSender, MessageSenderAssignment, Meta, NativeIntegrationProxyAssignment, NativeIntegrtionProxyConfig, Order, OrderApproval, OrderPromotion, PasswordReset, PasswordResetRequest, Payment, PaymentTransaction, PingResponse, PriceBreak, PriceSchedule, Product, ProductAssignment, Promotion, PromotionAssignment, SecurityProfile, SecurityProfileAssignment, Shipment, ShipmentItem, Spec, SpecOption, SpecProductAssignment, SpendingAccount, SpendingAccountAssignment, StripeCreditCard, Usage, UsageBuyer, UsageOrganization, User, UserGroup, UserGroupAssignment, Variant, WebHook, WebHookRoute, XpIndex, AddressApi, AdminAddressApi, AdminUserApi, AdminUserGroupApi, ApprovalRuleApi, BuyerApi, CatalogApi, CategoryApi, CostCenterApi, CreditCardApi, LineItemApi, MeApi, MessageSendersApi, OrderApi, PasswordResetApi, PaymentApi, PriceScheduleApi, ProductApi, PromotionApi, SecurityProfileApi, ShipmentApi, SpecApi, SpendingAccountApi, UserApi, UserGroupApi) {
  'use strict';

  /**
   * JavaScript SDK autogenerated from swagger spec using the Swagger-CodeGen project.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OrdercloudJavascriptSdk = require('index'); // See note below*.
   * var xxxSvc = new OrdercloudJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OrdercloudJavascriptSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OrdercloudJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OrdercloudJavascriptSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken: AccessToken,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The AddressAssignment model constructor.
     * @property {module:model/AddressAssignment}
     */
    AddressAssignment: AddressAssignment,
    /**
     * The AdminCompany model constructor.
     * @property {module:model/AdminCompany}
     */
    AdminCompany: AdminCompany,
    /**
     * The ApprovalRule model constructor.
     * @property {module:model/ApprovalRule}
     */
    ApprovalRule: ApprovalRule,
    /**
     * The BaseSpec model constructor.
     * @property {module:model/BaseSpec}
     */
    BaseSpec: BaseSpec,
    /**
     * The Buyer model constructor.
     * @property {module:model/Buyer}
     */
    Buyer: Buyer,
    /**
     * The BuyerAddress model constructor.
     * @property {module:model/BuyerAddress}
     */
    BuyerAddress: BuyerAddress,
    /**
     * The BuyerCreditCard model constructor.
     * @property {module:model/BuyerCreditCard}
     */
    BuyerCreditCard: BuyerCreditCard,
    /**
     * The BuyerProduct model constructor.
     * @property {module:model/BuyerProduct}
     */
    BuyerProduct: BuyerProduct,
    /**
     * The BuyerSpec model constructor.
     * @property {module:model/BuyerSpec}
     */
    BuyerSpec: BuyerSpec,
    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog: Catalog,
    /**
     * The CatalogAssignment model constructor.
     * @property {module:model/CatalogAssignment}
     */
    CatalogAssignment: CatalogAssignment,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryAssignment model constructor.
     * @property {module:model/CategoryAssignment}
     */
    CategoryAssignment: CategoryAssignment,
    /**
     * The CategoryProductAssignment model constructor.
     * @property {module:model/CategoryProductAssignment}
     */
    CategoryProductAssignment: CategoryProductAssignment,
    /**
     * The CostCenter model constructor.
     * @property {module:model/CostCenter}
     */
    CostCenter: CostCenter,
    /**
     * The CostCenterAssignment model constructor.
     * @property {module:model/CostCenterAssignment}
     */
    CostCenterAssignment: CostCenterAssignment,
    /**
     * The CreditCard model constructor.
     * @property {module:model/CreditCard}
     */
    CreditCard: CreditCard,
    /**
     * The CreditCardAssignment model constructor.
     * @property {module:model/CreditCardAssignment}
     */
    CreditCardAssignment: CreditCardAssignment,
    /**
     * The ImpersonateTokenRequest model constructor.
     * @property {module:model/ImpersonateTokenRequest}
     */
    ImpersonateTokenRequest: ImpersonateTokenRequest,
    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory: Inventory,
    /**
     * The LineItem model constructor.
     * @property {module:model/LineItem}
     */
    LineItem: LineItem,
    /**
     * The LineItemSpec model constructor.
     * @property {module:model/LineItemSpec}
     */
    LineItemSpec: LineItemSpec,
    /**
     * The ListAddress model constructor.
     * @property {module:model/ListAddress}
     */
    ListAddress: ListAddress,
    /**
     * The ListAddressAssignment model constructor.
     * @property {module:model/ListAddressAssignment}
     */
    ListAddressAssignment: ListAddressAssignment,
    /**
     * The ListAdminCompany model constructor.
     * @property {module:model/ListAdminCompany}
     */
    ListAdminCompany: ListAdminCompany,
    /**
     * The ListApprovalRule model constructor.
     * @property {module:model/ListApprovalRule}
     */
    ListApprovalRule: ListApprovalRule,
    /**
     * The ListBuyer model constructor.
     * @property {module:model/ListBuyer}
     */
    ListBuyer: ListBuyer,
    /**
     * The ListBuyerAddress model constructor.
     * @property {module:model/ListBuyerAddress}
     */
    ListBuyerAddress: ListBuyerAddress,
    /**
     * The ListBuyerCreditCard model constructor.
     * @property {module:model/ListBuyerCreditCard}
     */
    ListBuyerCreditCard: ListBuyerCreditCard,
    /**
     * The ListBuyerProduct model constructor.
     * @property {module:model/ListBuyerProduct}
     */
    ListBuyerProduct: ListBuyerProduct,
    /**
     * The ListBuyerSpec model constructor.
     * @property {module:model/ListBuyerSpec}
     */
    ListBuyerSpec: ListBuyerSpec,
    /**
     * The ListCatalog model constructor.
     * @property {module:model/ListCatalog}
     */
    ListCatalog: ListCatalog,
    /**
     * The ListCatalogAssignment model constructor.
     * @property {module:model/ListCatalogAssignment}
     */
    ListCatalogAssignment: ListCatalogAssignment,
    /**
     * The ListCategory model constructor.
     * @property {module:model/ListCategory}
     */
    ListCategory: ListCategory,
    /**
     * The ListCategoryAssignment model constructor.
     * @property {module:model/ListCategoryAssignment}
     */
    ListCategoryAssignment: ListCategoryAssignment,
    /**
     * The ListCategoryProductAssignment model constructor.
     * @property {module:model/ListCategoryProductAssignment}
     */
    ListCategoryProductAssignment: ListCategoryProductAssignment,
    /**
     * The ListCostCenter model constructor.
     * @property {module:model/ListCostCenter}
     */
    ListCostCenter: ListCostCenter,
    /**
     * The ListCostCenterAssignment model constructor.
     * @property {module:model/ListCostCenterAssignment}
     */
    ListCostCenterAssignment: ListCostCenterAssignment,
    /**
     * The ListCreditCard model constructor.
     * @property {module:model/ListCreditCard}
     */
    ListCreditCard: ListCreditCard,
    /**
     * The ListCreditCardAssignment model constructor.
     * @property {module:model/ListCreditCardAssignment}
     */
    ListCreditCardAssignment: ListCreditCardAssignment,
    /**
     * The ListInventory model constructor.
     * @property {module:model/ListInventory}
     */
    ListInventory: ListInventory,
    /**
     * The ListLineItem model constructor.
     * @property {module:model/ListLineItem}
     */
    ListLineItem: ListLineItem,
    /**
     * The ListMessageCCListenerAssignment model constructor.
     * @property {module:model/ListMessageCCListenerAssignment}
     */
    ListMessageCCListenerAssignment: ListMessageCCListenerAssignment,
    /**
     * The ListMessageConfig model constructor.
     * @property {module:model/ListMessageConfig}
     */
    ListMessageConfig: ListMessageConfig,
    /**
     * The ListMessageSender model constructor.
     * @property {module:model/ListMessageSender}
     */
    ListMessageSender: ListMessageSender,
    /**
     * The ListMessageSenderAssignment model constructor.
     * @property {module:model/ListMessageSenderAssignment}
     */
    ListMessageSenderAssignment: ListMessageSenderAssignment,
    /**
     * The ListNativeIntegrationProxyAssignment model constructor.
     * @property {module:model/ListNativeIntegrationProxyAssignment}
     */
    ListNativeIntegrationProxyAssignment: ListNativeIntegrationProxyAssignment,
    /**
     * The ListNativeIntegrtionProxyConfig model constructor.
     * @property {module:model/ListNativeIntegrtionProxyConfig}
     */
    ListNativeIntegrtionProxyConfig: ListNativeIntegrtionProxyConfig,
    /**
     * The ListOrder model constructor.
     * @property {module:model/ListOrder}
     */
    ListOrder: ListOrder,
    /**
     * The ListOrderApproval model constructor.
     * @property {module:model/ListOrderApproval}
     */
    ListOrderApproval: ListOrderApproval,
    /**
     * The ListOrderPromotion model constructor.
     * @property {module:model/ListOrderPromotion}
     */
    ListOrderPromotion: ListOrderPromotion,
    /**
     * The ListPayment model constructor.
     * @property {module:model/ListPayment}
     */
    ListPayment: ListPayment,
    /**
     * The ListPriceSchedule model constructor.
     * @property {module:model/ListPriceSchedule}
     */
    ListPriceSchedule: ListPriceSchedule,
    /**
     * The ListProduct model constructor.
     * @property {module:model/ListProduct}
     */
    ListProduct: ListProduct,
    /**
     * The ListProductAssignment model constructor.
     * @property {module:model/ListProductAssignment}
     */
    ListProductAssignment: ListProductAssignment,
    /**
     * The ListPromotion model constructor.
     * @property {module:model/ListPromotion}
     */
    ListPromotion: ListPromotion,
    /**
     * The ListPromotionAssignment model constructor.
     * @property {module:model/ListPromotionAssignment}
     */
    ListPromotionAssignment: ListPromotionAssignment,
    /**
     * The ListSecurityProfile model constructor.
     * @property {module:model/ListSecurityProfile}
     */
    ListSecurityProfile: ListSecurityProfile,
    /**
     * The ListSecurityProfileAssignment model constructor.
     * @property {module:model/ListSecurityProfileAssignment}
     */
    ListSecurityProfileAssignment: ListSecurityProfileAssignment,
    /**
     * The ListShipment model constructor.
     * @property {module:model/ListShipment}
     */
    ListShipment: ListShipment,
    /**
     * The ListSpec model constructor.
     * @property {module:model/ListSpec}
     */
    ListSpec: ListSpec,
    /**
     * The ListSpecOption model constructor.
     * @property {module:model/ListSpecOption}
     */
    ListSpecOption: ListSpecOption,
    /**
     * The ListSpecProductAssignment model constructor.
     * @property {module:model/ListSpecProductAssignment}
     */
    ListSpecProductAssignment: ListSpecProductAssignment,
    /**
     * The ListSpendingAccount model constructor.
     * @property {module:model/ListSpendingAccount}
     */
    ListSpendingAccount: ListSpendingAccount,
    /**
     * The ListSpendingAccountAssignment model constructor.
     * @property {module:model/ListSpendingAccountAssignment}
     */
    ListSpendingAccountAssignment: ListSpendingAccountAssignment,
    /**
     * The ListUser model constructor.
     * @property {module:model/ListUser}
     */
    ListUser: ListUser,
    /**
     * The ListUserGroup model constructor.
     * @property {module:model/ListUserGroup}
     */
    ListUserGroup: ListUserGroup,
    /**
     * The ListUserGroupAssignment model constructor.
     * @property {module:model/ListUserGroupAssignment}
     */
    ListUserGroupAssignment: ListUserGroupAssignment,
    /**
     * The ListVariant model constructor.
     * @property {module:model/ListVariant}
     */
    ListVariant: ListVariant,
    /**
     * The ListWebHook model constructor.
     * @property {module:model/ListWebHook}
     */
    ListWebHook: ListWebHook,
    /**
     * The ListWebHookRoute model constructor.
     * @property {module:model/ListWebHookRoute}
     */
    ListWebHookRoute: ListWebHookRoute,
    /**
     * The ListXpIndex model constructor.
     * @property {module:model/ListXpIndex}
     */
    ListXpIndex: ListXpIndex,
    /**
     * The MessageCCListenerAssignment model constructor.
     * @property {module:model/MessageCCListenerAssignment}
     */
    MessageCCListenerAssignment: MessageCCListenerAssignment,
    /**
     * The MessageConfig model constructor.
     * @property {module:model/MessageConfig}
     */
    MessageConfig: MessageConfig,
    /**
     * The MessageSender model constructor.
     * @property {module:model/MessageSender}
     */
    MessageSender: MessageSender,
    /**
     * The MessageSenderAssignment model constructor.
     * @property {module:model/MessageSenderAssignment}
     */
    MessageSenderAssignment: MessageSenderAssignment,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The NativeIntegrationProxyAssignment model constructor.
     * @property {module:model/NativeIntegrationProxyAssignment}
     */
    NativeIntegrationProxyAssignment: NativeIntegrationProxyAssignment,
    /**
     * The NativeIntegrtionProxyConfig model constructor.
     * @property {module:model/NativeIntegrtionProxyConfig}
     */
    NativeIntegrtionProxyConfig: NativeIntegrtionProxyConfig,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderApproval model constructor.
     * @property {module:model/OrderApproval}
     */
    OrderApproval: OrderApproval,
    /**
     * The OrderPromotion model constructor.
     * @property {module:model/OrderPromotion}
     */
    OrderPromotion: OrderPromotion,
    /**
     * The PasswordReset model constructor.
     * @property {module:model/PasswordReset}
     */
    PasswordReset: PasswordReset,
    /**
     * The PasswordResetRequest model constructor.
     * @property {module:model/PasswordResetRequest}
     */
    PasswordResetRequest: PasswordResetRequest,
    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment: Payment,
    /**
     * The PaymentTransaction model constructor.
     * @property {module:model/PaymentTransaction}
     */
    PaymentTransaction: PaymentTransaction,
    /**
     * The PingResponse model constructor.
     * @property {module:model/PingResponse}
     */
    PingResponse: PingResponse,
    /**
     * The PriceBreak model constructor.
     * @property {module:model/PriceBreak}
     */
    PriceBreak: PriceBreak,
    /**
     * The PriceSchedule model constructor.
     * @property {module:model/PriceSchedule}
     */
    PriceSchedule: PriceSchedule,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductAssignment model constructor.
     * @property {module:model/ProductAssignment}
     */
    ProductAssignment: ProductAssignment,
    /**
     * The Promotion model constructor.
     * @property {module:model/Promotion}
     */
    Promotion: Promotion,
    /**
     * The PromotionAssignment model constructor.
     * @property {module:model/PromotionAssignment}
     */
    PromotionAssignment: PromotionAssignment,
    /**
     * The SecurityProfile model constructor.
     * @property {module:model/SecurityProfile}
     */
    SecurityProfile: SecurityProfile,
    /**
     * The SecurityProfileAssignment model constructor.
     * @property {module:model/SecurityProfileAssignment}
     */
    SecurityProfileAssignment: SecurityProfileAssignment,
    /**
     * The Shipment model constructor.
     * @property {module:model/Shipment}
     */
    Shipment: Shipment,
    /**
     * The ShipmentItem model constructor.
     * @property {module:model/ShipmentItem}
     */
    ShipmentItem: ShipmentItem,
    /**
     * The Spec model constructor.
     * @property {module:model/Spec}
     */
    Spec: Spec,
    /**
     * The SpecOption model constructor.
     * @property {module:model/SpecOption}
     */
    SpecOption: SpecOption,
    /**
     * The SpecProductAssignment model constructor.
     * @property {module:model/SpecProductAssignment}
     */
    SpecProductAssignment: SpecProductAssignment,
    /**
     * The SpendingAccount model constructor.
     * @property {module:model/SpendingAccount}
     */
    SpendingAccount: SpendingAccount,
    /**
     * The SpendingAccountAssignment model constructor.
     * @property {module:model/SpendingAccountAssignment}
     */
    SpendingAccountAssignment: SpendingAccountAssignment,
    /**
     * The StripeCreditCard model constructor.
     * @property {module:model/StripeCreditCard}
     */
    StripeCreditCard: StripeCreditCard,
    /**
     * The Usage model constructor.
     * @property {module:model/Usage}
     */
    Usage: Usage,
    /**
     * The UsageBuyer model constructor.
     * @property {module:model/UsageBuyer}
     */
    UsageBuyer: UsageBuyer,
    /**
     * The UsageOrganization model constructor.
     * @property {module:model/UsageOrganization}
     */
    UsageOrganization: UsageOrganization,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserGroup model constructor.
     * @property {module:model/UserGroup}
     */
    UserGroup: UserGroup,
    /**
     * The UserGroupAssignment model constructor.
     * @property {module:model/UserGroupAssignment}
     */
    UserGroupAssignment: UserGroupAssignment,
    /**
     * The Variant model constructor.
     * @property {module:model/Variant}
     */
    Variant: Variant,
    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook: WebHook,
    /**
     * The WebHookRoute model constructor.
     * @property {module:model/WebHookRoute}
     */
    WebHookRoute: WebHookRoute,
    /**
     * The XpIndex model constructor.
     * @property {module:model/XpIndex}
     */
    XpIndex: XpIndex,
    /**
     * The AddressApi service constructor.
     * @property {module:api/AddressApi}
     */
    AddressApi: AddressApi,
    /**
     * The AdminAddressApi service constructor.
     * @property {module:api/AdminAddressApi}
     */
    AdminAddressApi: AdminAddressApi,
    /**
     * The AdminUserApi service constructor.
     * @property {module:api/AdminUserApi}
     */
    AdminUserApi: AdminUserApi,
    /**
     * The AdminUserGroupApi service constructor.
     * @property {module:api/AdminUserGroupApi}
     */
    AdminUserGroupApi: AdminUserGroupApi,
    /**
     * The ApprovalRuleApi service constructor.
     * @property {module:api/ApprovalRuleApi}
     */
    ApprovalRuleApi: ApprovalRuleApi,
    /**
     * The BuyerApi service constructor.
     * @property {module:api/BuyerApi}
     */
    BuyerApi: BuyerApi,
    /**
     * The CatalogApi service constructor.
     * @property {module:api/CatalogApi}
     */
    CatalogApi: CatalogApi,
    /**
     * The CategoryApi service constructor.
     * @property {module:api/CategoryApi}
     */
    CategoryApi: CategoryApi,
    /**
     * The CostCenterApi service constructor.
     * @property {module:api/CostCenterApi}
     */
    CostCenterApi: CostCenterApi,
    /**
     * The CreditCardApi service constructor.
     * @property {module:api/CreditCardApi}
     */
    CreditCardApi: CreditCardApi,
    /**
     * The LineItemApi service constructor.
     * @property {module:api/LineItemApi}
     */
    LineItemApi: LineItemApi,
    /**
     * The MeApi service constructor.
     * @property {module:api/MeApi}
     */
    MeApi: MeApi,
    /**
     * The MessageSendersApi service constructor.
     * @property {module:api/MessageSendersApi}
     */
    MessageSendersApi: MessageSendersApi,
    /**
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The PasswordResetApi service constructor.
     * @property {module:api/PasswordResetApi}
     */
    PasswordResetApi: PasswordResetApi,
    /**
     * The PaymentApi service constructor.
     * @property {module:api/PaymentApi}
     */
    PaymentApi: PaymentApi,
    /**
     * The PriceScheduleApi service constructor.
     * @property {module:api/PriceScheduleApi}
     */
    PriceScheduleApi: PriceScheduleApi,
    /**
     * The ProductApi service constructor.
     * @property {module:api/ProductApi}
     */
    ProductApi: ProductApi,
    /**
     * The PromotionApi service constructor.
     * @property {module:api/PromotionApi}
     */
    PromotionApi: PromotionApi,
    /**
     * The SecurityProfileApi service constructor.
     * @property {module:api/SecurityProfileApi}
     */
    SecurityProfileApi: SecurityProfileApi,
    /**
     * The ShipmentApi service constructor.
     * @property {module:api/ShipmentApi}
     */
    ShipmentApi: ShipmentApi,
    /**
     * The SpecApi service constructor.
     * @property {module:api/SpecApi}
     */
    SpecApi: SpecApi,
    /**
     * The SpendingAccountApi service constructor.
     * @property {module:api/SpendingAccountApi}
     */
    SpendingAccountApi: SpendingAccountApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The UserGroupApi service constructor.
     * @property {module:api/UserGroupApi}
     */
    UserGroupApi: UserGroupApi
  };

  return exports;
}));
