/**
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.15
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

var superagent = require('superagent');
var querystring = require('querystring');

var ActivityFeed = require('./api/ActivityFeedApi');
var AuthorizedApps = require('./api/AuthorizedAppsApi');
var Automations = require('./api/AutomationsApi');
var BatchWebhooks = require('./api/BatchWebhooksApi');
var Batches = require('./api/BatchesApi');
var CampaignFolders = require('./api/CampaignFoldersApi');
var Campaigns = require('./api/CampaignsApi');
var ConnectedSites = require('./api/ConnectedSitesApi');
var Conversations = require('./api/ConversationsApi');
var Dashboard = require('./api/DashboardApi');
var Ecommerce = require('./api/EcommerceApi');
var ExternalAuths = require('./api/ExternalAuthsApi');
var FacebookAds = require('./api/FacebookAdsApi');
var FileManager = require('./api/FileManagerApi');
var LandingPages = require('./api/LandingPagesApi');
var Lists = require('./api/ListsApi');
var Ping = require('./api/PingApi');
var Postcards = require('./api/PostcardsApi');
var Reporting = require('./api/ReportingApi');
var Reports = require('./api/ReportsApi');
var Root = require('./api/RootApi');
var SearchCampaigns = require('./api/SearchCampaignsApi');
var SearchMembers = require('./api/SearchMembersApi');
var TemplateFolders = require('./api/TemplateFoldersApi');
var Templates = require('./api/TemplatesApi');
var VerifiedDomains = require('./api/VerifiedDomainsApi');

/**
 * @module ApiClient
 * @version 3.0.15
 */

/**
 * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
 * application to use this class directly - the *Api and model classes provide the public API for the service. The
 * contents of this file should be regarded as internal but are documented for completeness.
 * @alias module:ApiClient
 * @class
 */
var exports = function() {

  /**
   * The base URL against which to resolve every API call's (relative) path.
   * @type {String}
   * @default https://server.api.mailchimp.com/3.0
   */
  this.basePath = 'https://server.api.mailchimp.com/3.0'.replace(/\/+$/, '');

  /**
   * The API configuration settings object
   * @type {Object}
   * @default {}
   */
  this.config = {
    apiKey: '',
    accessToken: '',
    server: 'invalid-server'
  };

  /**
   * The default HTTP headers to be included for all API calls.
   * @type {Array.<String>}
   * @default {}
   */
  this.defaultHeaders = {};
  /**
   * The default HTTP timeout for all API calls.
   * @type {Number}
   * @default 60000
   */
  this.timeout = 120000;

  /**
   * If set to false an additional timestamp parameter is added to all API GET calls to
   * prevent browser caching
   * @type {Boolean}
   * @default true
   */
  this.cache = true;

  /**
   * If set to true, the client will save the cookies from each server
   * response, and return them in the next request.
   * @default false
   */
  this.enableCookies = false;

  /*
   * Used to save and return cookies in a node.js (non-browser) setting,
   * if this.enableCookies is set to true.
   */
  if (typeof window === 'undefined') {
    this.agent = new superagent.agent();
  }

  // API Routes
  this.activityFeed = new ActivityFeed(this);
  this.authorizedApps = new AuthorizedApps(this);
  this.automations = new Automations(this);
  this.batchWebhooks = new BatchWebhooks(this);
  this.batches = new Batches(this);
  this.campaignFolders = new CampaignFolders(this);
  this.campaigns = new Campaigns(this);
  this.connectedSites = new ConnectedSites(this);
  this.conversations = new Conversations(this);
  this.dashboard = new Dashboard(this);
  this.ecommerce = new Ecommerce(this);
  this.externalAuths = new ExternalAuths(this);
  this.facebookAds = new FacebookAds(this);
  this.fileManager = new FileManager(this);
  this.landingPages = new LandingPages(this);
  this.lists = new Lists(this);
  this.ping = new Ping(this);
  this.postcards = new Postcards(this);
  this.reporting = new Reporting(this);
  this.reports = new Reports(this);
  this.root = new Root(this);
  this.searchCampaigns = new SearchCampaigns(this);
  this.searchMembers = new SearchMembers(this);
  this.templateFolders = new TemplateFolders(this);
  this.templates = new Templates(this);
  this.verifiedDomains = new VerifiedDomains(this);
};

/**
 * Sets the API configuration settings object.
 * @param config {Object} The configuration object
 */
exports.prototype.setConfig = function(config = {}) {
  var _this = this;
  this.config = config;
};

/**
 * Returns a string representation for an actual parameter.
 * @param param The actual parameter.
 * @returns {String} The string representation of <code>param</code>.
 */
exports.prototype.paramToString = function(param) {
  if (param == undefined || param == null) {
    return '';
  }
  if (param instanceof Date) {
    return param.toJSON();
  }
  return param.toString();
};

/**
 * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
 * NOTE: query parameters are not handled here.
 * @param {String} path The path to append to the base URL.
 * @param {Object} pathParams The parameter values to append.
 * @returns {String} The encoded path with parameter values substituted.
 */
exports.prototype.buildUrl = function(path, pathParams) {
  if (!path.match(/^\//)) {
    path = '/' + path;
  }
  var url = this.basePath + path;
  var _this = this;
  url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
    var value;
    if (pathParams.hasOwnProperty(key)) {
      value = _this.paramToString(pathParams[key]);
    } else {
      value = fullMatch;
    }
    return encodeURIComponent(value);
  });

  // Define the server
  if (typeof this.config.server !== 'undefined') {
    url = url.replace('server', this.config.server);
  }

  return url;
};

/**
 * Checks whether the given content type represents JSON.<br>
 * JSON content type examples:<br>
 * <ul>
 * <li>application/json</li>
 * <li>application/json; charset=UTF8</li>
 * <li>APPLICATION/JSON</li>
 * </ul>
 * @param {String} contentType The MIME content type to check.
 * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
 */
exports.prototype.isJsonMime = function(contentType) {
  return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
};

/**
 * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
 * @param {Array.<String>} contentTypes
 * @returns {String} The chosen content type, preferring JSON.
 */
exports.prototype.jsonPreferredMime = function(contentTypes) {
  for (var i = 0; i < contentTypes.length; i++) {
    if (this.isJsonMime(contentTypes[i])) {
      return contentTypes[i];
    }
  }
  return contentTypes[0];
};

/**
 * Checks whether the given parameter value represents file-like content.
 * @param param The parameter to check.
 * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
 */
exports.prototype.isFileParam = function(param) {
  // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
  if (typeof require === 'function') {
    var fs;
    try {
      fs = require('fs');
    } catch (err) {}
    if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
      return true;
    }
  }
  // Buffer in Node.js
  if (typeof Buffer === 'function' && param instanceof Buffer) {
    return true;
  }
  // Blob in browser
  if (typeof Blob === 'function' && param instanceof Blob) {
    return true;
  }
  // File in browser (it seems File object is also instance of Blob, but keep this for safe)
  if (typeof File === 'function' && param instanceof File) {
    return true;
  }
  return false;
};

/**
 * Normalizes parameter values:
 * <ul>
 * <li>remove nils</li>
 * <li>keep files and arrays</li>
 * <li>format to string with `paramToString` for other cases</li>
 * </ul>
 * @param {Object.<String, Object>} params The parameters as object properties.
 * @returns {Object.<String, Object>} normalized parameters.
 */
exports.prototype.normalizeParams = function(params) {
  var newParams = {};
  for (var key in params) {
    if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
      var value = params[key];
      if (this.isFileParam(value) || Array.isArray(value)) {
        newParams[key] = value;
      } else {
        newParams[key] = this.paramToString(value);
      }
    }
  }
  return newParams;
};

/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
exports.CollectionFormatEnum = {
  /**
   * Comma-separated values. Value: <code>csv</code>
   * @const
   */
  CSV: ',',
  /**
   * Space-separated values. Value: <code>ssv</code>
   * @const
   */
  SSV: ' ',
  /**
   * Tab-separated values. Value: <code>tsv</code>
   * @const
   */
  TSV: '\t',
  /**
   * Pipe(|)-separated values. Value: <code>pipes</code>
   * @const
   */
  PIPES: '|',
  /**
   * Native array. Value: <code>multi</code>
   * @const
   */
  MULTI: 'multi'
};

/**
 * Builds a string representation of an array-type actual parameter, according to the given collection format.
 * @param {Array} param An array parameter.
 * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
 * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
 * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
 */
exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
  if (param == null) {
    return null;
  }
  switch (collectionFormat) {
    case 'csv':
      return param.map(this.paramToString).join(',');
    case 'ssv':
      return param.map(this.paramToString).join(' ');
    case 'tsv':
      return param.map(this.paramToString).join('\t');
    case 'pipes':
      return param.map(this.paramToString).join('|');
    case 'multi':
      // return the array directly as SuperAgent will handle it as expected
      return param.map(this.paramToString);
    default:
      throw new Error('Unknown collection format: ' + collectionFormat);
  }
};

/**
 * Deserializes an HTTP response body into a value of the specified type.
 * @param {Object} response A SuperAgent response object.
 * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
 * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
 * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
 * all properties on <code>data<code> will be converted to this type.
 * @returns A value of the specified type.
 */
exports.prototype.deserialize = function deserialize(response, returnType) {
  if (response == null || returnType == null || response.status == 204) {
    return null;
  }
  // Rely on SuperAgent for parsing response body.
  // See http://visionmedia.github.io/superagent/#parsing-response-bodies
  var data = response.body;
  if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
    // SuperAgent does not always produce a body; use the unparsed response as a fallback
    data = response.text;
  }
  return exports.convertToType(data, returnType);
};

/**
 * Invokes the REST service using the supplied settings and parameters.
 * @param {String} path The base URL to invoke.
 * @param {String} httpMethod The HTTP method to use.
 * @param {Object.<String, String>} pathParams A map of path parameters and their values.
 * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
 * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
 * @param {Object.<String, Object>} formParams A map of form parameters and their values.
 * @param {Object} bodyParam The value to pass as the request body.
 * @param {Array.<String>} authNames An array of authentication type names.
 * @param {Array.<String>} contentTypes An array of request MIME types.
 * @param {Array.<String>} accepts An array of acceptable response MIME types.
 * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
 * constructor for a complex type.
 * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
 */
exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
    queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
    returnType) {

  var _this = this;
  var url = this.buildUrl(path, pathParams);
  var request = superagent(httpMethod, url);

  // Basic Authentication
  if (this.config.apiKey !== undefined && this.config.apiKey !== '') {
    request.auth('user', this.config.apiKey);
  }

  // OAuth Authentication
  else if (this.config.accessToken !== undefined && this.config.accessToken !== '') {
    request.set({'Authorization': 'Bearer ' + this.config.accessToken});
  }

  // set query parameters
  if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
    queryParams['_'] = new Date().getTime();
  }
  request.query(this.normalizeParams(queryParams));

  // set header parameters
  request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

  // set request timeout
  request.timeout(this.timeout);

  var contentType = this.jsonPreferredMime(contentTypes);
  if (contentType) {
    // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
    if(contentType != 'multipart/form-data') {
      request.type(contentType);
    }
  } else if (!HeaderUtils.caseInsensitiveGet(request.header, 'content-type')) {
    request.type('application/json');
  }

  if (contentType === 'application/x-www-form-urlencoded') {
    request.send(querystring.stringify(this.normalizeParams(formParams)));
  } else if (contentType == 'multipart/form-data') {
    var _formParams = this.normalizeParams(formParams);
    for (var key in _formParams) {
      if (_formParams.hasOwnProperty(key)) {
        if (this.isFileParam(_formParams[key])) {
          // file field
          request.attach(key, _formParams[key]);
        } else {
          request.field(key, _formParams[key]);
        }
      }
    }
  } else if (bodyParam) {
    request.send(bodyParam);
  }

  var accept = this.jsonPreferredMime(accepts);
  if (accept) {
    request.accept(accept);
  }

  if (returnType === 'Blob') {
    request.responseType('blob');
  } else if (returnType === 'String') {
    request.responseType('string');
  }

  // Attach previously saved cookies, if enabled
  if (this.enableCookies){
    if (typeof window === 'undefined') {
      this.agent.attachCookies(request);
    }
    else {
      request.withCredentials();
    }
  }

  return new Promise(function(resolve, reject) {
    request.end(function(error, response) {
      if (error) {
        reject(error);
      } else {
        try {
          var data = _this.deserialize(response, returnType);
          if (_this.enableCookies && typeof window === 'undefined'){
            _this.agent.saveCookies(response);
          }
          resolve({data: data, response: response});
        } catch (err) {
          reject(err);
        }
      }
    });
  });
  };

/**
 * Parses an ISO-8601 string representation of a date value.
 * @param {String} str The date value as a string.
 * @returns {Date} The parsed date object.
 */
exports.parseDate = function(str) {
  return new Date(str.replace(/T/i, ' '));
};

/**
 * Converts a value to the specified type.
 * @param {(String|Object)} data The data to convert, as a string or object.
 * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
 * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
 * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
 * all properties on <code>data<code> will be converted to this type.
 * @returns An instance of the specified type or null or undefined if data is null or undefined.
 */
exports.convertToType = function(data, type) {
  if (data === null || data === undefined)
    return data

  switch (type) {
    case 'Boolean':
      return Boolean(data);
    case 'Integer':
      return parseInt(data, 10);
    case 'Number':
      return parseFloat(data);
    case 'String':
      return String(data);
    case 'Date':
      return this.parseDate(String(data));
    case 'Blob':
      return data;
    default:
      if (type === Object) {
        // generic object, return directly
        return data;
      } else if (typeof type === 'function') {
        // for model type like: User
        return type.constructFromObject(data);
      } else if (Array.isArray(type)) {
        // for array type like: ['String']
        var itemType = type[0];
        return data.map(function(item) {
          return exports.convertToType(item, itemType);
        });
      } else if (typeof type === 'object') {
        // for plain object type like: {'String': 'Integer'}
        var keyType, valueType;
        for (var k in type) {
          if (type.hasOwnProperty(k)) {
            keyType = k;
            valueType = type[k];
            break;
          }
        }
        var result = {};
        for (var k in data) {
          if (data.hasOwnProperty(k)) {
            var key = exports.convertToType(k, keyType);
            var value = exports.convertToType(data[k], valueType);
            result[key] = value;
          }
        }
        return result;
      } else {
        // for unknown type, return the data directly
        return data;
      }
  }
};

/**
 * Constructs a new map or array model from REST data.
 * @param data {Object|Array} The REST data.
 * @param obj {Object|Array} The target object or array.
 */
exports.constructFromObject = function(data, obj, itemType) {
  if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      if (data.hasOwnProperty(i))
        obj[i] = exports.convertToType(data[i], itemType);
    }
  } else {
    for (var k in data) {
      if (data.hasOwnProperty(k))
        obj[k] = exports.convertToType(data[k], itemType);
    }
  }
};

  /**
 * The default API client implementation.
 * @type {module:ApiClient}
 */
exports.instance = new exports();

module.exports = exports;
