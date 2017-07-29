/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(67);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isLength = __webpack_require__(42);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(73),
    baseKeys = __webpack_require__(75),
    isArrayLike = __webpack_require__(4);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    getRawTag = __webpack_require__(133),
    objectToString = __webpack_require__(134);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(56),
    stringToPath = __webpack_require__(194),
    toString = __webpack_require__(40);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(22);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*$AMPERSAND_VERSION*/
var State = __webpack_require__(11);
var CollectionView = __webpack_require__(248);
var domify = __webpack_require__(266);
var uniqueId = __webpack_require__(39);
var pick = __webpack_require__(116);
var assign = __webpack_require__(13);
var forEach = __webpack_require__(112);
var result = __webpack_require__(97);
var last = __webpack_require__(57);
var isString = __webpack_require__(59);
var bind = __webpack_require__(36);
var flatten = __webpack_require__(90);
var invokeMap = __webpack_require__(115);
var events = __webpack_require__(267);
var matches = __webpack_require__(123);
var bindings = __webpack_require__(273);
var getPath = __webpack_require__(121);

function View(attrs) {
    this.cid = uniqueId('view');
    attrs || (attrs = {});
    var parent = attrs.parent;
    delete attrs.parent;
    BaseState.call(this, attrs, {init: false, parent: parent});
    this.on('change:el', this._handleElementChange, this);
    this._upsertBindings();
    this.template = attrs.template || this.template;
    this._cache.rendered = false; // prep `rendered` derived cache immediately
    this.initialize.apply(this, arguments);
    if (this.autoRender && this.template) {
        this.render();
    }
}

var BaseState = State.extend({
    dataTypes: {
        element: {
            set: function (newVal) {
                return {
                    val: newVal,
                    type: newVal instanceof Element ? 'element' : typeof newVal
                };
            },
            compare: function (el1, el2) {
                return el1 === el2;
            }
        },
        collection: {
            set: function (newVal) {
                return {
                    val: newVal,
                    type: newVal && newVal.isCollection ? 'collection' : typeof newVal
                };
            },
            compare: function (currentVal, newVal) {
                return currentVal === newVal;
            }
        }
    },
    props: {
        model: 'state',
        el: 'element',
        collection: 'collection',
    },
    session: {
        _rendered: ['boolean', true, false]
    },
    derived: {
        hasData: {
            deps: ['model'],
            fn: function () {
                return !!this.model;
            }
        },
        rendered: {
            deps: ['_rendered'],
            fn: function() {
                if (this._rendered) {
                    this.trigger('render', this);
                    return true;
                }
                this.trigger('remove', this);
                return false;
            }
        }
    }
});

View.prototype = Object.create(BaseState.prototype);

var queryNoElMsg = 'Query cannot be performed as this.el is not defined. Ensure that the view has been rendered.';

// Set up all inheritable properties and methods.
assign(View.prototype, {
    // ## query
    // Get an single element based on CSS selector scoped to this.el
    // if you pass an empty string it return `this.el`.
    // If you pass an element we just return it back.
    // This lets us use `get` to handle cases where users
    // can pass a selector or an already selected element.
    query: function (selector) {
        if (!this.el) {
            throw new Error(queryNoElMsg);
        }
        if (!selector) return this.el;
        if (typeof selector === 'string') {
            if (matches(this.el, selector)) return this.el;
            return this.el.querySelector(selector) || undefined;
        }
        return selector;
    },

    // ## queryAll
    // Returns an array of elements based on CSS selector scoped to this.el
    // if you pass an empty string it return `this.el`. Also includes root
    // element.
    queryAll: function (selector) {
        if (!this.el) {
            throw new Error(queryNoElMsg);
        }
        if (!selector) return [this.el];
        var res = [];
        if (matches(this.el, selector)) res.push(this.el);
        return res.concat(Array.prototype.slice.call(this.el.querySelectorAll(selector)));
    },

    // ## queryByHook
    // Convenience method for fetching element by it's `data-hook` attribute.
    // Also tries to match against root element.
    // Also supports matching 'one' of several space separated hooks.
    queryByHook: function (hook) {
        return this.query('[data-hook~="' + hook + '"]');
    },

    // ## queryAllByHook
    // Convenience method for fetching all elements by their's `data-hook` attribute.
    queryAllByHook: function (hook) {
        return this.queryAll('[data-hook~="' + hook + '"]');
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {},

    // **render** is the core function that your view can override. Its job is
    // to populate its element (`this.el`), with the appropriate HTML.
    _render: function () {
        this._upsertBindings();
        this.renderWithTemplate(this);
        this._rendered = true;
        return this;
    },

    // Removes this view by taking the element out of the DOM, and removing any
    // applicable events listeners.
    _remove: function () {
        if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
        this._rendered = false;
        this._downsertBindings();
        return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    _handleElementChange: function (element, delegate) {
        if (this.eventManager) this.eventManager.unbind();
        this.eventManager = events(this.el, this);
        this.delegateEvents();
        this._applyBindingsForKey();
        return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function (e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function (events) {
        if (!(events || (events = result(this, 'events')))) return this;
        this.undelegateEvents();
        for (var key in events) {
            this.eventManager.bind(key, events[key]);
        }
        return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function () {
        this.eventManager.unbind();
        return this;
    },

    // ## registerSubview
    // Pass it a view. This can be anything with a `remove` method
    registerSubview: function (view) {
        // Storage for our subviews.
        this._subviews = this._subviews || [];
        this._subviews.push(view);
        // set the parent reference if it has not been set
        if (!view.parent) view.parent = this;
        return view;
    },

    // ## renderSubview
    // Pass it a view instance and a container element
    // to render it in. It's `remove` method will be called
    // when the parent view is destroyed.
    renderSubview: function (view, container) {
        if (typeof container === 'string') {
            container = this.query(container);
        }
        if (!container) container = this.el;
        this.registerSubview(view);
        view.render();
        container.appendChild(view.el);
        return view;
    },

    _applyBindingsForKey: function (name) {
        if (!this.el) return;
        var fns = this._parsedBindings.getGrouped(name);
        var item;
        for (item in fns) {
            fns[item].forEach(function (fn) {
                fn(this.el, getPath(this, item), last(item.split('.')));
            }, this);
        }
    },

    _initializeBindings: function () {
        if (!this.bindings) return;
        this.on('all', function (eventName) {
            if (eventName.slice(0, 7) === 'change:') {
                this._applyBindingsForKey(eventName.split(':')[1]);
            }
        }, this);
    },

    // ## _initializeSubviews
    // this is called at setup and grabs declared subviews
    _initializeSubviews: function () {
        if (!this.subviews) return;
        for (var item in this.subviews) {
            this._parseSubview(this.subviews[item], item);
        }
    },

    // ## _parseSubview
    // helper for parsing out the subview declaration and registering
    // the `waitFor` if need be.
    _parseSubview: function (subview, name) {
        //backwards compatibility with older versions, when `container` was a valid property (#114)
        if (subview.container) {
            subview.selector = subview.container;
        }
        var opts = this._parseSubviewOpts(subview);

        function action() {
            var el, subview;
            // if not rendered or we can't find our element, stop here.
            if (!this.el || !(el = this.query(opts.selector))) return;
            if (!opts.waitFor || getPath(this, opts.waitFor)) {
                subview = this[name] = opts.prepareView.call(this, el);
                if (!subview.el) {
                    this.renderSubview(subview, el);
                } else {
                    subview.render();
                    this.registerSubview(subview);
                }
                this.off('change', action);
            }
        }
        // we listen for main `change` items
        this.on('change', action, this);
    },

    // Parses the declarative subview definition.
    // You may overload this method to create your own declarative subview style.
    // You must return an object with members 'selector', 'waitFor' and 'prepareView'.
    // waitFor is trigged on the view 'change' event and so one way to extend the deferred view
    // construction is to add an additional property (props) to the view. Then setting this property
    // will satisfy the waitFor condition. You can then extend the prepareView function to pass in
    // additional data from the parent view. This can allow you to have multi-stage rendering of
    // custom data formats and to declaratively define.
    _parseSubviewOpts: function (subview) {
        var self = this;
        var opts = {
            selector: subview.selector || '[data-hook="' + subview.hook + '"]',
            waitFor: subview.waitFor || '',
            prepareView: subview.prepareView || function () {
                return new subview.constructor({
                    parent: self
                });
            }
        };
        return opts;
    },

    // Shortcut for doing everything we need to do to
    // render and fully replace current root element.
    // Either define a `template` property of your view
    // or pass in a template directly.
    // The template can either be a string or a function.
    // If it's a function it will be passed the `context`
    // argument.
    renderWithTemplate: function (context, templateArg) {
        var template = templateArg || this.template;
        if (!template) throw new Error('Template string or function needed.');
        var newDom = isString(template) ? template : template.call(this, context || this);
        if (isString(newDom)) newDom = domify(newDom);
        var parent = this.el && this.el.parentNode;
        if (parent) parent.replaceChild(newDom, this.el);
        if (newDom.nodeName === '#document-fragment') throw new Error('Views can only have one root element, including comment nodes.');
        this.el = newDom;
        return this;
    },

    // ## cacheElements
    // This is a shortcut for adding reference to specific elements within your view for
    // access later. This avoids excessive DOM queries and makes it easier to update
    // your view if your template changes.
    //
    // In your `render` method. Use it like so:
    //
    //     render: function () {
    //       this.basicRender();
    //       this.cacheElements({
    //         pages: '#pages',
    //         chat: '#teamChat',
    //         nav: 'nav#views ul',
    //         me: '#me',
    //         cheatSheet: '#cheatSheet',
    //         omniBox: '#awesomeSauce'
    //       });
    //     }
    //
    // Then later you can access elements by reference like so: `this.pages`, or `this.chat`.
    cacheElements: function (hash) {
        for (var item in hash) {
            this[item] = this.query(hash[item]);
        }
        return this;
    },

    // ## animateRemove
    // Placeholder for if you want to do something special when they're removed.
    // For example fade it out, etc.
    // Any override here should call `.remove()` when done.
    animateRemove: function () {
        this.remove();
    },

    // ## renderCollection
    // Method for rendering a collections with individual views.
    // Just pass it the collection, and the view to use for the items in the
    // collection. The collectionView is returned.
    renderCollection: function (collection, ViewClass, container, opts) {
        var containerEl = (typeof container === 'string') ? this.query(container) : container;
        var config = assign({
            collection: collection,
            el: containerEl || this.el,
            view: ViewClass,
            parent: this,
            viewOptions: {
                parent: this
            }
        }, opts);
        var collectionView = new CollectionView(config);
        collectionView.render();
        return this.registerSubview(collectionView);
    },

    _setRender: function(obj) {
        Object.defineProperty(obj, 'render', {
            get: function() {
                return this._render;
            },
            set: function(fn) {
                this._render = function() {
                    fn.apply(this, arguments);
                    this._rendered = true;
                    return this;
                };
            }
        });
    },

    _setRemove: function(obj) {
        Object.defineProperty(obj, 'remove', {
            get: function() {
                return this._remove;
            },
            set: function(fn) {
                this._remove = function() {
                    fn.apply(this, arguments);
                    this._rendered = false;
                    return this;
                };
            }
        });
    },

    _downsertBindings: function() {
        var parsedBindings = this._parsedBindings;
        if (!this.bindingsSet) return;
        if (this._subviews) invokeMap(flatten(this._subviews), 'remove');
        this.stopListening();
        this.bindingsSet = false;
    },

    _upsertBindings: function(attrs) {
        attrs = attrs || this;
        if (this.bindingsSet) return;
        this._parsedBindings = bindings(this.bindings, this);
        this._initializeBindings();
        if (attrs.el && !this.autoRender) {
            this._handleElementChange();
        }
        this._initializeSubviews();
        this.bindingsSet = true;
    }
});

View.prototype._setRender(View.prototype);
View.prototype._setRemove(View.prototype);
View.extend = BaseState.extend;
module.exports = View;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(135),
    getValue = __webpack_require__(138);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*$AMPERSAND_VERSION*/
var uniqueId = __webpack_require__(39);
var assign = __webpack_require__(13);
var cloneObj = function(obj) { return assign({}, obj); };
var omit = __webpack_require__(148);
var escape = __webpack_require__(201);
var forOwn = __webpack_require__(204);
var includes = __webpack_require__(207);
var isString = __webpack_require__(59);
var isObject = __webpack_require__(2);
var isDate = __webpack_require__(214);
var isFunction = __webpack_require__(24);
var _isEqual = __webpack_require__(216); // to avoid shadowing
var has = __webpack_require__(223);
var result = __webpack_require__(97);
var bind = __webpack_require__(36); // because phantomjs doesn't have Function#bind
var union = __webpack_require__(239);
var Events = __webpack_require__(66);
var KeyTree = __webpack_require__(114);
var arrayNext = __webpack_require__(247);
var changeRE = /^change:/;
var noop = function () {};

function Base(attrs, options) {
    options || (options = {});
    this.cid || (this.cid = uniqueId('state'));
    this._events = {};
    this._values = {};
    this._eventBubblingHandlerCache = {};
    this._definition = Object.create(this._definition);
    if (options.parse) attrs = this.parse(attrs, options);
    this.parent = options.parent;
    this.collection = options.collection;
    this._keyTree = new KeyTree();
    this._initCollections();
    this._initChildren();
    this._cache = {};
    this._previousAttributes = {};
    if (attrs) this.set(attrs, assign({silent: true, initial: true}, options));
    this._changed = {};
    if (this._derived) this._initDerived();
    if (options.init !== false) this.initialize.apply(this, arguments);
}

assign(Base.prototype, Events, {
    // can be allow, ignore, reject
    extraProperties: 'ignore',

    idAttribute: 'id',

    namespaceAttribute: 'namespace',

    typeAttribute: 'modelType',

    // Stubbed out to be overwritten
    initialize: function () {
        return this;
    },

    // Get ID of model per configuration.
    // Should *always* be how ID is determined by other code.
    getId: function () {
        return this[this.idAttribute];
    },

    // Get namespace of model per configuration.
    // Should *always* be how namespace is determined by other code.
    getNamespace: function () {
        return this[this.namespaceAttribute];
    },

    // Get type of model per configuration.
    // Should *always* be how type is determined by other code.
    getType: function () {
        return this[this.typeAttribute];
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function () {
        return this.getId() == null;
    },

    // get HTML-escaped value of attribute
    escape: function (attr) {
        return escape(this.get(attr));
    },

    // Check if the model is currently in a valid state.
    isValid: function (options) {
        return this._validate({}, assign(options || {}, { validate: true }));
    },

    // Parse can be used remap/restructure/rename incoming properties
    // before they are applied to attributes.
    parse: function (resp, options) {
        //jshint unused:false
        return resp;
    },

    // Serialize is the inverse of `parse` it lets you massage data
    // on the way out. Before, sending to server, for example.
    serialize: function (options) {
        var attrOpts = assign({props: true}, options);
        var res = this.getAttributes(attrOpts, true);
        forOwn(this._children, bind(function (value, key) {
            res[key] = this[key].serialize();
        }, this));
        forOwn(this._collections, bind(function (value, key) {
            res[key] = this[key].serialize();
        }, this));
        return res;
    },

    // Main set method used by generated setters/getters and can
    // be used directly if you need to pass options or set multiple
    // properties at once.
    set: function (key, value, options) {
        var self = this;
        var extraProperties = this.extraProperties;
        var wasChanging, changeEvents, newType, newVal, def, cast, err, attr,
            attrs, dataType, silent, unset, currentVal, initial, hasChanged, isEqual, onChange;

        // Handle both `"key", value` and `{key: value}` -style arguments.
        if (isObject(key) || key === null) {
            attrs = key;
            options = value;
        } else {
            attrs = {};
            attrs[key] = value;
        }

        options = options || {};

        if (!this._validate(attrs, options)) return false;

        // Extract attributes and options.
        unset = options.unset;
        silent = options.silent;
        initial = options.initial;

        // Initialize change tracking.
        wasChanging = this._changing;
        this._changing = true;
        changeEvents = [];

        // if not already changing, store previous
        if (initial) {
            this._previousAttributes = {};
        } else if (!wasChanging) {
            this._previousAttributes = this.attributes;
            this._changed = {};
        }

        // For each `set` attribute...
        for (var i = 0, keys = Object.keys(attrs), len = keys.length; i < len; i++) {
            attr = keys[i];
            newVal = attrs[attr];
            newType = typeof newVal;
            currentVal = this._values[attr];
            def = this._definition[attr];

            if (!def) {
                // if this is a child model or collection
                if (this._children[attr] || this._collections[attr]) {
                    if (!isObject(newVal)) {
                        newVal = {};
                    }

                    this[attr].set(newVal, options);
                    continue;
                } else if (extraProperties === 'ignore') {
                    continue;
                } else if (extraProperties === 'reject') {
                    throw new TypeError('No "' + attr + '" property defined on ' + (this.type || 'this') + ' model and extraProperties not set to "ignore" or "allow"');
                } else if (extraProperties === 'allow') {
                    def = this._createPropertyDefinition(attr, 'any');
                } else if (extraProperties) {
                    throw new TypeError('Invalid value for extraProperties: "' + extraProperties + '"');
                }
            }

            isEqual = this._getCompareForType(def.type);
            onChange = this._getOnChangeForType(def.type);
            dataType = this._dataTypes[def.type];

            // check type if we have one
            if (dataType && dataType.set) {
                cast = dataType.set(newVal);
                newVal = cast.val;
                newType = cast.type;
            }

            // If we've defined a test, run it
            if (def.test) {
                err = def.test.call(this, newVal, newType);
                if (err) {
                    throw new TypeError('Property \'' + attr + '\' failed validation with error: ' + err);
                }
            }

            // If we are required but undefined, throw error.
            // If we are null and are not allowing null, throw error
            // If we have a defined type and the new type doesn't match, and we are not null, throw error.
            // If we require specific value and new one is not one of them, throw error (unless it has default value or we're unsetting it with undefined).

            if (newVal === undefined && def.required) {
                throw new TypeError('Required property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
            }
            if (newVal === null && def.required && !def.allowNull) {
                throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + ' (cannot be null). Tried to set ' + newVal);
            }
            if ((def.type && def.type !== 'any' && def.type !== newType) && newVal !== null && newVal !== undefined) {
                throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
            }
            if (def.values && !includes(def.values, newVal)) {
                var defaultValue = result(def, 'default');
                if (unset && defaultValue !== undefined) {
                    newVal = defaultValue;
                } else if (!unset || (unset && newVal !== undefined)) {
                    throw new TypeError('Property \'' + attr + '\' must be one of values: ' + def.values.join(', ') + '. Tried to set ' + newVal);
                }
            }

            // We know this has 'changed' if it's the initial set, so skip a potentially expensive isEqual check.
            hasChanged = initial || !isEqual(currentVal, newVal, attr);

            // enforce `setOnce` for properties if set
            if (def.setOnce && currentVal !== undefined && hasChanged) {
                throw new TypeError('Property \'' + attr + '\' can only be set once.');
            }

            // set/unset attributes.
            // If this is not the initial set, keep track of changed attributes
            // and push to changeEvents array so we can fire events.
            if (hasChanged) {

                // This fires no matter what, even on initial set.
                onChange(newVal, currentVal, attr);

                // If this is a change (not an initial set), mark the change.
                // Note it's impossible to unset on the initial set (it will already be unset),
                // so we only include that logic here.
                if (!initial) {
                    this._changed[attr] = newVal;
                    this._previousAttributes[attr] = currentVal;
                    if (unset) {
                        // FIXME delete is very slow. Can we get away with setting to undefined?
                        delete this._values[attr];
                    }
                    if (!silent) {
                        changeEvents.push({prev: currentVal, val: newVal, key: attr});
                    }
                }
                if (!unset) {
                    this._values[attr] = newVal;
                }
            } else {
                // Not changed
                // FIXME delete is very slow. Can we get away with setting to undefined?
                delete this._changed[attr];
            }
        }

        // Fire events. This array is not populated if we are told to be silent.
        if (changeEvents.length) this._pending = true;
        changeEvents.forEach(function (change) {
            self.trigger('change:' + change.key, self, change.val, options);
        });

        // You might be wondering why there's a `while` loop here. Changes can
        // be recursively nested within `"change"` events.
        if (wasChanging) return this;
        while (this._pending) {
            this._pending = false;
            this.trigger('change', this, options);
        }
        this._pending = false;
        this._changing = false;
        return this;
    },

    get: function (attr) {
        return this[attr];
    },

    // Toggle boolean properties or properties that have a `values`
    // array in its definition.
    toggle: function (property) {
        var def = this._definition[property];
        if (def.type === 'boolean') {
            // if it's a bool, just flip it
            this[property] = !this[property];
        } else if (def && def.values) {
            // If it's a property with an array of values
            // skip to the next one looping back if at end.
            this[property] = arrayNext(def.values, this[property]);
        } else {
            throw new TypeError('Can only toggle properties that are type `boolean` or have `values` array.');
        }
        return this;
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function () {
        return cloneObj(this._previousAttributes);
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function (attr) {
        if (attr == null) return !!Object.keys(this._changed).length;
        if (has(this._derived, attr)) {
            return this._derived[attr].depList.some(function (dep) {
                return this.hasChanged(dep);
            }, this);
        }
        return has(this._changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function (diff) {
        if (!diff) return this.hasChanged() ? cloneObj(this._changed) : false;
        var val, changed = false;
        var old = this._changing ? this._previousAttributes : this.attributes;
        var def, isEqual;
        for (var attr in diff) {
            def = this._definition[attr];
            if (!def) continue;
            isEqual = this._getCompareForType(def.type);
            if (isEqual(old[attr], (val = diff[attr]))) continue;
            (changed || (changed = {}))[attr] = val;
        }
        return changed;
    },

    toJSON: function () {
        return this.serialize();
    },

    unset: function (attrs, options) {
        var self = this;
        attrs = Array.isArray(attrs) ? attrs : [attrs];
        attrs.forEach(function (key) {
            var def = self._definition[key];
            if (!def) return;
            var val;
            if (def.required) {
                val = result(def, 'default');
                return self.set(key, val, options);
            } else {
                return self.set(key, val, assign({}, options, {unset: true}));
            }
        });
    },

    clear: function (options) {
        var self = this;
        Object.keys(this.attributes).forEach(function (key) {
            self.unset(key, options);
        });
        return this;
    },

    previous: function (attr) {
        if (attr == null || !Object.keys(this._previousAttributes).length) return null;
        return this._previousAttributes[attr];
    },

    // Get default values for a certain type
    _getDefaultForType: function (type) {
        var dataType = this._dataTypes[type];
        return dataType && dataType['default'];
    },

    // Determine which comparison algorithm to use for comparing a property
    _getCompareForType: function (type) {
        var dataType = this._dataTypes[type];
        if (dataType && dataType.compare) return bind(dataType.compare, this);
        return _isEqual; // if no compare function is defined, use _.isEqual
    },

    _getOnChangeForType : function(type){
        var dataType = this._dataTypes[type];
        if (dataType && dataType.onChange) return bind(dataType.onChange, this);
        return noop;
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function (attrs, options) {
        if (!options.validate || !this.validate) return true;
        attrs = assign({}, this.attributes, attrs);
        var error = this.validationError = this.validate(attrs, options) || null;
        if (!error) return true;
        this.trigger('invalid', this, error, assign(options || {}, {validationError: error}));
        return false;
    },

    _createPropertyDefinition: function (name, desc, isSession) {
        return createPropertyDefinition(this, name, desc, isSession);
    },

    // just makes friendlier errors when trying to define a new model
    // only used when setting up original property definitions
    _ensureValidType: function (type) {
        return includes(['string', 'number', 'boolean', 'array', 'object', 'date', 'state', 'any']
            .concat(Object.keys(this._dataTypes)), type) ? type : undefined;
    },

    getAttributes: function (options, raw) {
        options = assign({
            session: false,
            props: false,
            derived: false
        }, options || {});
        var res = {};
        var val, def;
        for (var item in this._definition) {
            def = this._definition[item];
            if ((options.session && def.session) || (options.props && !def.session)) {
                val = raw ? this._values[item] : this[item];
                if (raw && val && isFunction(val.serialize)) val = val.serialize();
                if (typeof val === 'undefined') val = result(def, 'default');
                if (typeof val !== 'undefined') res[item] = val;
            }
        }
        if (options.derived) {
            for (var derivedItem in this._derived) res[derivedItem] = this[derivedItem];
        }
        return res;
    },

    _initDerived: function () {
        var self = this;

        forOwn(this._derived, function (value, name) {
            var def = self._derived[name];
            def.deps = def.depList;

            var update = function (options) {
                options = options || {};

                var newVal = def.fn.call(self);

                if (self._cache[name] !== newVal || !def.cache) {
                    if (def.cache) {
                        self._previousAttributes[name] = self._cache[name];
                    }
                    self._cache[name] = newVal;
                    self.trigger('change:' + name, self, self._cache[name]);
                }
            };

            def.deps.forEach(function (propString) {
                self._keyTree.add(propString, update);
            });
        });

        this.on('all', function (eventName) {
            if (changeRE.test(eventName)) {
                self._keyTree.get(eventName.split(':')[1]).forEach(function (fn) {
                    fn();
                });
            }
        }, this);
    },

    _getDerivedProperty: function (name, flushCache) {
        // is this a derived property that is cached
        if (this._derived[name].cache) {
            //set if this is the first time, or flushCache is set
            if (flushCache || !this._cache.hasOwnProperty(name)) {
                this._cache[name] = this._derived[name].fn.apply(this);
            }
            return this._cache[name];
        } else {
            return this._derived[name].fn.apply(this);
        }
    },

    _initCollections: function () {
        var coll;
        if (!this._collections) return;
        for (coll in this._collections) {
            this._safeSet(coll, new this._collections[coll](null, {parent: this}));
        }
    },

    _initChildren: function () {
        var child;
        if (!this._children) return;
        for (child in this._children) {
            this._safeSet(child, new this._children[child]({}, {parent: this}));
            this.listenTo(this[child], 'all', this._getCachedEventBubblingHandler(child));
        }
    },

    // Returns a bound handler for doing event bubbling while
    // adding a name to the change string.
    _getCachedEventBubblingHandler: function (propertyName) {
        if (!this._eventBubblingHandlerCache[propertyName]) {
            this._eventBubblingHandlerCache[propertyName] = bind(function (name, model, newValue) {
                if (changeRE.test(name)) {
                    this.trigger('change:' + propertyName + '.' + name.split(':')[1], model, newValue);
                } else if (name === 'change') {
                    this.trigger('change', this);
                }
            }, this);
        }
        return this._eventBubblingHandlerCache[propertyName];
    },

    // Check that all required attributes are present
    _verifyRequired: function () {
        var attrs = this.attributes; // should include session
        for (var def in this._definition) {
            if (this._definition[def].required && typeof attrs[def] === 'undefined') {
                return false;
            }
        }
        return true;
    },

    // expose safeSet method
    _safeSet: function safeSet(property, value) {
        if (property in this) {
            throw new Error('Encountered namespace collision while setting instance property `' + property + '`');
        }
        this[property] = value;
        return this;
    }
});

// getter for attributes
Object.defineProperties(Base.prototype, {
    attributes: {
        get: function () {
            return this.getAttributes({props: true, session: true});
        }
    },
    all: {
        get: function () {
            return this.getAttributes({
                session: true,
                props: true,
                derived: true
            });
        }
    },
    isState: {
        get: function () { return true; },
        set: function () { }
    }
});

// helper for creating/storing property definitions and creating
// appropriate getters/setters
function createPropertyDefinition(object, name, desc, isSession) {
    var def = object._definition[name] = {};
    var type, descArray;

    if (isString(desc)) {
        // grab our type if all we've got is a string
        type = object._ensureValidType(desc);
        if (type) def.type = type;
    } else {
        //Transform array of ['type', required, default] to object form
        if (Array.isArray(desc)) {
            descArray = desc;
            desc = {
                type: descArray[0],
                required: descArray[1],
                'default': descArray[2]
            };
        }

        type = object._ensureValidType(desc.type);
        if (type) def.type = type;

        if (desc.required) def.required = true;

        if (desc['default'] && typeof desc['default'] === 'object') {
            throw new TypeError('The default value for ' + name + ' cannot be an object/array, must be a value or a function which returns a value/object/array');
        }

        def['default'] = desc['default'];

        def.allowNull = desc.allowNull ? desc.allowNull : false;
        if (desc.setOnce) def.setOnce = true;
        if (def.required && def['default'] === undefined && !def.setOnce) def['default'] = object._getDefaultForType(type);
        def.test = desc.test;
        def.values = desc.values;
    }
    if (isSession) def.session = true;

    if (!type) {
        type = isString(desc) ? desc : desc.type;
        // TODO: start throwing a TypeError in future major versions instead of warning
        console.warn('Invalid data type of `' + type + '` for `' + name + '` property. Use one of the default types or define your own');
    }

    // define a getter/setter on the prototype
    // but they get/set on the instance
    Object.defineProperty(object, name, {
        set: function (val) {
            this.set(name, val);
        },
        get: function () {
            if (!this._values) {
                throw Error('You may be trying to `extend` a state object with "' + name + '" which has been defined in `props` on the object being extended');
            }
            var value = this._values[name];
            var typeDef = this._dataTypes[def.type];
            if (typeof value !== 'undefined') {
                if (typeDef && typeDef.get) {
                    value = typeDef.get(value);
                }
                return value;
            }
            var defaultValue = result(def, 'default');
            this._values[name] = defaultValue;
            // If we've set a defaultValue, fire a change handler effectively marking
            // its change from undefined to the default value.
            if (typeof defaultValue !== 'undefined') {
                var onChange = this._getOnChangeForType(def.type);
                onChange(defaultValue, value, name);
            }
            return defaultValue;
        }
    });

    return def;
}

// helper for creating derived property definitions
function createDerivedProperty(modelProto, name, definition) {
    var def = modelProto._derived[name] = {
        fn: isFunction(definition) ? definition : definition.fn,
        cache: (definition.cache !== false),
        depList: definition.deps || []
    };

    // add to our shared dependency list
    def.depList.forEach(function (dep) {
        modelProto._deps[dep] = union(modelProto._deps[dep] || [], [name]);
    });

    // defined a top-level getter for derived names
    Object.defineProperty(modelProto, name, {
        get: function () {
            return this._getDerivedProperty(name);
        },
        set: function () {
            throw new TypeError("`" + name + "` is a derived property, it can't be set directly.");
        }
    });
}

var dataTypes = {
    string: {
        'default': function () {
            return '';
        }
    },
    date: {
        set: function (newVal) {
            var newType;
            if (newVal == null) {
                newType = typeof null;
            } else if (!isDate(newVal)) {
                var err = null;
                var dateVal = new Date(newVal).valueOf();
                if (isNaN(dateVal)) {
                    // If the newVal cant be parsed, then try parseInt first
                    dateVal = new Date(parseInt(newVal, 10)).valueOf();
                    if (isNaN(dateVal)) err = true;
                }
                newVal = dateVal;
                newType = 'date';
                if (err) {
                    newType = typeof newVal;
                }
            } else {
                newType = 'date';
                newVal = newVal.valueOf();
            }

            return {
                val: newVal,
                type: newType
            };
        },
        get: function (val) {
            if (val == null) { return val; }
            return new Date(val);
        },
        'default': function () {
            return new Date();
        }
    },
    array: {
        set: function (newVal) {
            return {
                val: newVal,
                type: Array.isArray(newVal) ? 'array' : typeof newVal
            };
        },
        'default': function () {
            return [];
        }
    },
    object: {
        set: function (newVal) {
            var newType = typeof newVal;
            // we have to have a way of supporting "missing" objects.
            // Null is an object, but setting a value to undefined
            // should work too, IMO. We just override it, in that case.
            if (newType !== 'object' && newVal === undefined) {
                newVal = null;
                newType = 'object';
            }
            return {
                val: newVal,
                type: newType
            };
        },
        'default': function () {
            return {};
        }
    },
    // the `state` data type is a bit special in that setting it should
    // also bubble events
    state: {
        set: function (newVal) {
            var isInstance = newVal instanceof Base || (newVal && newVal.isState);
            if (isInstance) {
                return {
                    val: newVal,
                    type: 'state'
                };
            } else {
                return {
                    val: newVal,
                    type: typeof newVal
                };
            }
        },
        compare: function (currentVal, newVal) {
            return currentVal === newVal;
        },

        onChange : function(newVal, previousVal, attributeName){
            // if this has changed we want to also handle
            // event propagation
            if (previousVal) {
                this.stopListening(previousVal, 'all', this._getCachedEventBubblingHandler(attributeName));
            }

            if (newVal != null) {
                this.listenTo(newVal, 'all', this._getCachedEventBubblingHandler(attributeName));
            }
        }
    }
};

// the extend method used to extend prototypes, maintain inheritance chains for instanceof
// and allow for additions to the model definitions.
function extend(protoProps) {
    /*jshint validthis:true*/
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function () {
            return parent.apply(this, arguments);
        };
    }

    // Add static properties to the constructor function from parent
    assign(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function () { this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // set prototype level objects
    child.prototype._derived =  assign({}, parent.prototype._derived);
    child.prototype._deps = assign({}, parent.prototype._deps);
    child.prototype._definition = assign({}, parent.prototype._definition);
    child.prototype._collections = assign({}, parent.prototype._collections);
    child.prototype._children = assign({}, parent.prototype._children);
    child.prototype._dataTypes = assign({}, parent.prototype._dataTypes || dataTypes);

    // Mix in all prototype properties to the subclass if supplied.
    if (protoProps) {
        var omitFromExtend = [
            'dataTypes', 'props', 'session', 'derived', 'collections', 'children'
        ];
        for(var i = 0; i < arguments.length; i++) {
            var def = arguments[i];
            if (def.dataTypes) {
                forOwn(def.dataTypes, function (def, name) {
                    child.prototype._dataTypes[name] = def;
                });
            }
            if (def.props) {
                forOwn(def.props, function (def, name) {
                    createPropertyDefinition(child.prototype, name, def);
                });
            }
            if (def.session) {
                forOwn(def.session, function (def, name) {
                    createPropertyDefinition(child.prototype, name, def, true);
                });
            }
            if (def.derived) {
                forOwn(def.derived, function (def, name) {
                    createDerivedProperty(child.prototype, name, def);
                });
            }
            if (def.collections) {
                forOwn(def.collections, function (constructor, name) {
                    child.prototype._collections[name] = constructor;
                });
            }
            if (def.children) {
                forOwn(def.children, function (constructor, name) {
                    child.prototype._children[name] = constructor;
                });
            }
            assign(child.prototype, omit(def, omitFromExtend));
        }
    }

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
}

Base.extend = extend;

// Our main exports
module.exports = Base;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(23),
    copyObject = __webpack_require__(14),
    createAssigner = __webpack_require__(139),
    isArrayLike = __webpack_require__(4),
    isPrototype = __webpack_require__(19),
    keys = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(23),
    baseAssignValue = __webpack_require__(68);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(16),
    overRest = __webpack_require__(71),
    setToString = __webpack_require__(41);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(68),
    eq = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(144),
    isObjectLike = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(145);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(150),
    listCacheDelete = __webpack_require__(151),
    listCacheGet = __webpack_require__(152),
    listCacheHas = __webpack_require__(153),
    listCacheSet = __webpack_require__(154);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(168);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(210);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(15),
    createWrap = __webpack_require__(98),
    getHolder = __webpack_require__(38),
    replaceHolders = __webpack_require__(20);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(33),
    isObject = __webpack_require__(2);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(40);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(131);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(140),
    shortOut = __webpack_require__(72);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(146),
    baseUnary = __webpack_require__(45),
    nodeUtil = __webpack_require__(74);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28),
    stackClear = __webpack_require__(155),
    stackDelete = __webpack_require__(156),
    stackGet = __webpack_require__(157),
    stackHas = __webpack_require__(158),
    stackSet = __webpack_require__(159);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(160),
    mapCacheDelete = __webpack_require__(167),
    mapCacheGet = __webpack_require__(169),
    mapCacheHas = __webpack_require__(170),
    mapCacheSet = __webpack_require__(171);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(178),
    stubArray = __webpack_require__(78);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(76);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(180),
    Map = __webpack_require__(47),
    Promise = __webpack_require__(181),
    Set = __webpack_require__(83),
    WeakMap = __webpack_require__(84),
    baseGetTag = __webpack_require__(6),
    toSource = __webpack_require__(70);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(85);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(22);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    isFlattenable = __webpack_require__(200);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(217),
    isObjectLike = __webpack_require__(3);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(48),
    setCacheAdd = __webpack_require__(218),
    setCacheHas = __webpack_require__(219);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(33),
    baseLodash = __webpack_require__(64);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(93);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*$AMPERSAND_VERSION*/
var runOnce = __webpack_require__(242);
var keys = __webpack_require__(5);
var isEmpty = __webpack_require__(244);
var assign = __webpack_require__(13);
var forEach = __webpack_require__(112);
var slice = Array.prototype.slice;

var utils = __webpack_require__(246);

var Events = {
    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function (name, callback, context) {
        if (!utils.eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
        this._events || (this._events = {});
        var events = this._events[name] || (this._events[name] = []);
        events.push({callback: callback, context: context, ctx: context || this});
        return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function (name, callback, context) {
        if (!utils.eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
        var self = this;
        var once = runOnce(function () {
            self.off(name, once);
            callback.apply(this, arguments);
        });
        once._callback = callback;
        return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function (name, callback, context) {
        var retain, ev, events, names, i, l, j, k;
        if (!this._events || !utils.eventsApi(this, 'off', name, [callback, context])) return this;
        if (!name && !callback && !context) {
            this._events = void 0;
            return this;
        }
        names = name ? [name] : keys(this._events);
        for (i = 0, l = names.length; i < l; i++) {
            name = names[i];
            if (events = this._events[name]) {
                this._events[name] = retain = [];
                if (callback || context) {
                    for (j = 0, k = events.length; j < k; j++) {
                        ev = events[j];
                        if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                                (context && context !== ev.context)) {
                            retain.push(ev);
                        }
                    }
                }
                if (!retain.length) delete this._events[name];
            }
        }

        return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function (name) {
        if (!this._events) return this;
        var args = slice.call(arguments, 1);
        if (!utils.eventsApi(this, 'trigger', name, args)) return this;
        var events = this._events[name];
        var allEvents = this._events.all;
        if (events) utils.triggerEvents(events, args);
        if (allEvents) utils.triggerEvents(allEvents, arguments);
        return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function (obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) return this;
        var remove = !name && !callback;
        if (!callback && typeof name === 'object') callback = this;
        if (obj) (listeningTo = {})[obj._listenId] = obj;
        var self = this;
        forEach(listeningTo, function (item, id) {
            item.off(name, callback, self);
            if (remove || isEmpty(item._events)) delete self._listeningTo[id];
        });
        return this;
    },

    // extend an object with event capabilities if passed
    // or just return a new one.
    createEmitter: function (obj) {
        return assign(obj || {}, Events);
    },

    listenTo: utils.createListenMethod('on'),

    listenToOnce: utils.createListenMethod('once'),

    listenToAndRun: function (obj, name, callback) {
        this.listenTo.apply(this, arguments);
        if (!callback && typeof name === 'object') callback = this;
        callback.apply(this);
        return this;
    }
};

// setup aliases
Events.bind = Events.on;
Events.unbind = Events.off;
Events.removeListener = Events.off;
Events.removeAllListeners = Events.off;
Events.emit = Events.trigger;

module.exports = Events;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(69);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(143),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(27),
    isIndex = __webpack_require__(18),
    isTypedArray = __webpack_require__(44);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(67);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(19),
    nativeKeys = __webpack_require__(147);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(73),
    baseKeysIn = __webpack_require__(174),
    isArrayLike = __webpack_require__(4);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    getPrototype = __webpack_require__(53),
    getSymbols = __webpack_require__(51),
    stubArray = __webpack_require__(78);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(81),
    getSymbols = __webpack_require__(51),
    keys = __webpack_require__(5);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(81),
    getSymbolsIn = __webpack_require__(79),
    keysIn = __webpack_require__(77);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(34),
    baseSlice = __webpack_require__(197);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(90),
    overRest = __webpack_require__(71),
    setToString = __webpack_require__(41);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(58);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(205),
    keys = __webpack_require__(5);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(16);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(94),
    baseIsNaN = __webpack_require__(208),
    strictIndexOf = __webpack_require__(209);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(61),
    arraySome = __webpack_require__(220),
    cacheHas = __webpack_require__(62);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(18),
    isLength = __webpack_require__(42),
    toKey = __webpack_require__(8);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    isFunction = __webpack_require__(24),
    toKey = __webpack_require__(8);

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(99),
    createBind = __webpack_require__(225),
    createCurry = __webpack_require__(226),
    createHybrid = __webpack_require__(101),
    createPartial = __webpack_require__(237),
    getData = __webpack_require__(105),
    mergeData = __webpack_require__(238),
    setData = __webpack_require__(108),
    setWrapToString = __webpack_require__(109),
    toInteger = __webpack_require__(35);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(16),
    metaMap = __webpack_require__(100);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(84);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(102),
    composeArgsRight = __webpack_require__(103),
    countHolders = __webpack_require__(227),
    createCtor = __webpack_require__(37),
    createRecurry = __webpack_require__(104),
    getHolder = __webpack_require__(38),
    reorder = __webpack_require__(236),
    replaceHolders = __webpack_require__(20),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(228),
    setData = __webpack_require__(108),
    setWrapToString = __webpack_require__(109);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(100),
    noop = __webpack_require__(106);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(33),
    baseLodash = __webpack_require__(64);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(99),
    shortOut = __webpack_require__(72);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(233),
    insertWrapDetails = __webpack_require__(234),
    setToString = __webpack_require__(41),
    updateWrapDetails = __webpack_require__(235);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(4),
    isObjectLike = __webpack_require__(3);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(49),
    baseEach = __webpack_require__(113),
    castFunction = __webpack_require__(92),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(91),
    createBaseEach = __webpack_require__(245);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

var slice = Array.prototype.slice;

// our constructor
function KeyTreeStore(options) {
    options = options || {};
    if (typeof options !== 'object') {
        throw new TypeError('Options must be an object');
    }
    var DEFAULT_SEPARATOR = '.';

    this.storage = {};
    this.separator = options.separator || DEFAULT_SEPARATOR;
}

// add an object to the store
KeyTreeStore.prototype.add = function (keypath, obj) {
    var arr = this.storage[keypath] || (this.storage[keypath] = []);
    arr.push(obj);
};

// remove an object
KeyTreeStore.prototype.remove = function (obj) {
    var path, arr;
    for (path in this.storage) {
        arr = this.storage[path];
        arr.some(function (item, index) {
            if (item === obj) {
                arr.splice(index, 1);
                return true;
            }
        });
    }
};

// get array of all all relevant functions, without keys
KeyTreeStore.prototype.get = function (keypath) {
    var res = [];
    var key;

    for (key in this.storage) {
        if (!keypath || keypath === key || key.indexOf(keypath + this.separator) === 0) {
            res = res.concat(this.storage[key]);
        }
    }

    return res;
};

// get all results that match keypath but still grouped by key
KeyTreeStore.prototype.getGrouped = function (keypath) {
    var res = {};
    var key;

    for (key in this.storage) {
        if (!keypath || keypath === key || key.indexOf(keypath + this.separator) === 0) {
            res[key] = slice.call(this.storage[key]);
        }
    }

    return res;
};

// get all results that match keypath but still grouped by key
KeyTreeStore.prototype.getAll = function (keypath) {
    var res = {};
    var key;

    for (key in this.storage) {
        if (keypath === key || key.indexOf(keypath + this.separator) === 0) {
            res[key] = slice.call(this.storage[key]);
        }
    }

    return res;
};

// run all matches with optional context
KeyTreeStore.prototype.run = function (keypath, context) {
    var args = slice.call(arguments, 2);
    this.get(keypath).forEach(function (fn) {
        fn.apply(context || this, args);
    });
};

module.exports = KeyTreeStore;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17),
    baseEach = __webpack_require__(113),
    baseInvoke = __webpack_require__(249),
    baseRest = __webpack_require__(15),
    isArrayLike = __webpack_require__(4);

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {...*} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * _.invokeMap([123, 456], String.prototype.split, '');
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
var invokeMap = baseRest(function(collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value) {
    result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
  });
  return result;
});

module.exports = invokeMap;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(250),
    flatRest = __webpack_require__(89);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(253),
    hasPath = __webpack_require__(96);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(256),
    baseMatchesProperty = __webpack_require__(259),
    identity = __webpack_require__(16),
    isArray = __webpack_require__(0),
    property = __webpack_require__(260);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(34);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var assign = __webpack_require__(13);

/// Following code is largely pasted from Backbone.js

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var extend = function(protoProps) {
    var parent = this;
    var child;
    var args = [].slice.call(arguments);

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function () {
            return parent.apply(this, arguments);
        };
    }

    // Add static properties to the constructor function from parent
    assign(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // Mix in all prototype properties to the subclass if supplied.
    if (protoProps) {
        args.unshift(child.prototype);
        assign.apply(null, args);
    }

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
};

// Expose the extend function
module.exports = extend;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _tocktimer = __webpack_require__(284);

var _tocktimer2 = _interopRequireDefault(_tocktimer);

var _region = __webpack_require__(285);

var _region2 = _interopRequireDefault(_region);

var _upgrade = __webpack_require__(126);

var _upgrade2 = _interopRequireDefault(_upgrade);

var _population = __webpack_require__(286);

var _population2 = _interopRequireDefault(_population);

var _progressResource = __webpack_require__(287);

var _progressResource2 = _interopRequireDefault(_progressResource);

var _resourcePool = __webpack_require__(288);

var _utils = __webpack_require__(127);

var _loader = __webpack_require__(290);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(291);

var ticksPerSecond = 10;
var millisPerTick = 1000 / ticksPerSecond;

var regions = {
  northland: new _region2.default({
    cost: 169900
  }),
  auckland: new _region2.default({
    cost: 1593100
  }),
  waikato: new _region2.default({
    name: 'Waikato',
    cost: 444400,
    upgrades: [new _upgrade2.default({
      id: 'wat',
      level: 1
    }, {
      deltaCallback: function deltaCallback(elapsedTicks) {
        return {
          mining: elapsedTicks * this.level,
          technology: elapsedTicks * this.level * 2
        };
      }
    }), new _upgrade2.default({
      id: 'fak',
      level: 1
    }, {
      deltaCallback: function deltaCallback(elapsedTicks) {
        return {
          agriculture: elapsedTicks * this.level,
          forestry: elapsedTicks * this.level * 3
        };
      }
    })]
  }),
  bayOfPlenty: new _region2.default({
    cost: 290500
  }),
  gisbourne: new _region2.default({
    cost: 47600
  }),
  hawkesBay: new _region2.default({
    cost: 160900
  }),
  taranaki: new _region2.default({
    cost: 116300,
    upgrades: [new _upgrade2.default({
      id: 'rekt',
      level: 1
    }, {
      deltaCallback: function deltaCallback(elapsedTicks) {
        return {
          energy: elapsedTicks * this.level * 1.5
        };
      }
    })]
  }),
  manawatu_wanganui: new _region2.default({
    cost: 235800
  }),
  wellington: new _region2.default({
    cost: 501100
  }),
  tasman_nelson: new _region2.default({
    cost: 100200
  }),
  marlborough: new _region2.default({
    cost: 45500
  }),
  westCoast: new _region2.default({
    cost: 32600
  }),
  canterbury: new _region2.default({
    cost: 594100
  }),
  otago: new _region2.default({
    cost: 217200
  }),
  southland: new _region2.default({
    cost: 97700
  })
};

// resetState();

var _loadState = (0, _loader.loadState)(function (state) {
  var savedResources = void 0;
  var savedHappiness = void 0;
  var savedPopulation = void 0;
  var elapsedMs = 0;
  if (state != null) {
    savedResources = state.resourcePool;
    savedHappiness = state.happiness;
    savedPopulation = state.population;
    // load regions/upgrade state
    Object.entries(state.regions).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          savedRegion = _ref2[1];

      if (regions[name] == null) {
        return;
      }
      var region = regions[name];
      if (savedRegion.isActive != null) {
        region.isActive = savedRegion.isActive;
      }
      if (savedRegion.upgrades != null) {
        savedRegion.upgrades.forEach(function (savedUpgrade) {
          if (savedUpgrade.id == null) {
            return;
          }
          var upgrade = region.upgrades.get(savedUpgrade.id);
          if (upgrade == null) {
            return;
          }
          upgrade.level = savedUpgrade.level;
          upgrade.cost = savedUpgrade.cost; // TODO: do we need this? just recalculate cost from level?
        });
      }
    });
    if (state.timestamp != null) {
      elapsedMs = new Date().getTime() - state.timestamp;
    }
  }
  // have to create resource pool before we can run the offline ticks
  var loadedResourcePool = new _resourcePool.ResourcePool(savedResources);
  if (elapsedMs > 0) {
    var elapsedTicks = elapsedMs / millisPerTick;
    (0, _utils.tickRegions)(elapsedTicks, regions, loadedResourcePool);
  }
  return {
    resourcePool: loadedResourcePool,
    population: new _population2.default(Object.assign({}, { total: 10 }, savedPopulation)),
    happiness: new _progressResource2.default(Object.assign({}, { value: 75 }, savedHappiness, { name: 'Happiness', total: 100 }))
  };
}),
    resourcePool = _loadState.resourcePool,
    population = _loadState.population,
    happiness = _loadState.happiness;

var prevTick = 0;
var timer = new _tocktimer2.default({
  interval: millisPerTick,
  callback: function callback(tick) {
    var totalElapsedTime = timer.lap();
    var elapsedTicks = (totalElapsedTime - prevTick) / millisPerTick;
    prevTick = totalElapsedTime;

    (0, _utils.tickRegions)(elapsedTicks, regions, resourcePool);

    if (tick.timeout % 60 === 0) {
      (0, _loader.saveState)({
        resourcePool: resourcePool,
        population: population,
        happiness: happiness,
        regions: regions,
        timestamp: new Date().getTime()
      });
    }
  }
});

timer.start();

exports.default = {
  resourcePool: resourcePool,
  population: population,
  happiness: happiness,
  regions: regions
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var AmpersandEvents = __webpack_require__(66);
var classExtend = __webpack_require__(122);
var isArray = __webpack_require__(0);
var bind = __webpack_require__(36);
var assign = __webpack_require__(13);
var slice = [].slice;

function Collection(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator) this.comparator = options.comparator;
    if (options.parent) this.parent = options.parent;
    if (!this.mainIndex) {
        var idAttribute = this.model && this.model.prototype && this.model.prototype.idAttribute;
        this.mainIndex = idAttribute || 'id';
    }
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, assign({silent: true}, options));
}

assign(Collection.prototype, AmpersandEvents, {
    initialize: function () {},

    isModel: function (model) {
        return this.model && model instanceof this.model;
    },

    add: function (models, options) {
        return this.set(models, assign({merge: false, add: true, remove: false}, options));
    },

    // overridable parse method
    parse: function (res, options) {
        return res;
    },

    // overridable serialize method
    serialize: function () {
        return this.map(function (model) {
            if (model.serialize) {
                return model.serialize();
            } else {
                var out = {};
                assign(out, model);
                delete out.collection;
                return out;
            }
        });
    },

    toJSON: function () {
        return this.serialize();
    },

    set: function (models, options) {
        options = assign({add: true, remove: true, merge: true}, options);
        if (options.parse) models = this.parse(models, options);
        var singular = !isArray(models);
        models = singular ? (models ? [models] : []) : models.slice();
        var id, model, attrs, existing, sort, i, length;
        var at = options.at;
        var sortable = this.comparator && (at == null) && options.sort !== false;
        var sortAttr = ('string' === typeof this.comparator) ? this.comparator : null;
        var toAdd = [], toRemove = [], modelMap = {};
        var add = options.add, merge = options.merge, remove = options.remove;
        var order = !sortable && add && remove ? [] : false;
        var targetProto = this.model && this.model.prototype || Object.prototype;

        // Turn bare objects into model references, and prevent invalid models
        // from being added.
        for (i = 0, length = models.length; i < length; i++) {
            attrs = models[i] || {};
            if (this.isModel(attrs)) {
                id = model = attrs;
            } else if (targetProto.generateId) {
                id = targetProto.generateId(attrs);
            } else {
                id = attrs[this.mainIndex];
                if (id === undefined && this._isDerivedIndex(targetProto)) {
                    id = targetProto._derived[this.mainIndex].fn.call(attrs);
                }
            }

            // If a duplicate is found, prevent it from being added and
            // optionally merge it into the existing model.
            if (existing = this.get(id)) {
                if (remove) modelMap[existing.cid || existing[this.mainIndex]] = true;
                if (merge) {
                    attrs = attrs === model ? model.attributes : attrs;
                    if (options.parse) attrs = existing.parse(attrs, options);
                    // if this is model
                    if (existing.set) {
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                    } else {
                        // if not just update the properties
                        assign(existing, attrs);
                    }
                }
                models[i] = existing;

            // If this is a new, valid model, push it to the `toAdd` list.
            } else if (add) {
                model = models[i] = this._prepareModel(attrs, options);
                if (!model) continue;
                toAdd.push(model);
                this._addReference(model, options);
            }

            // Do not add multiple models with the same `id`.
            model = existing || model;
            if (!model) continue;
            if (order && ((model.isNew && model.isNew() || !model[this.mainIndex]) || !modelMap[model.cid || model[this.mainIndex]])) order.push(model);
            modelMap[model[this.mainIndex]] = true;
        }

        // Remove nonexistent models if appropriate.
        if (remove) {
            for (i = 0, length = this.length; i < length; i++) {
                model = this.models[i];
                if (!modelMap[model.cid || model[this.mainIndex]]) toRemove.push(model);
            }
            if (toRemove.length) this.remove(toRemove, options);

            // Add indexes again to make sure they were not removed above.
            for (i = 0, length = toAdd.length; i < length; i++) {
                this._index(toAdd[i]);
            }
        }

        // See if sorting is needed, update `length` and splice in new models.
        if (toAdd.length || (order && order.length)) {
            if (sortable) sort = true;
            if (at != null) {
                for (i = 0, length = toAdd.length; i < length; i++) {
                    this.models.splice(at + i, 0, toAdd[i]);
                }
            } else {
                var orderedModels = order || toAdd;
                for (i = 0, length = orderedModels.length; i < length; i++) {
                    this.models.push(orderedModels[i]);
                }
            }
        }

        // Silently sort the collection if appropriate.
        if (sort) this.sort({silent: true});

        // Unless silenced, it's time to fire all appropriate add/sort events.
        if (!options.silent) {
            for (i = 0, length = toAdd.length; i < length; i++) {
                model = toAdd[i];
                if (model.trigger) {
                    model.trigger('add', model, this, options);
                } else {
                    this.trigger('add', model, this, options);
                }
            }
            if (sort || (order && order.length)) this.trigger('sort', this, options);
        }

        // Return the added (or merged) model (or models).
        return singular ? models[0] : models;
    },

    get: function (query, indexName) {
        if (query == null) return;
        var index = this._indexes[indexName || this.mainIndex];
        return (index && (index[query] || index[query[this.mainIndex]])) || this._indexes.cid[query] || this._indexes.cid[query.cid];
    },

    // Get the model at the given index.
    at: function (index) {
        return this.models[index];
    },

    remove: function (models, options) {
        var singular = !isArray(models);
        var i, length, model, index;

        models = singular ? [models] : slice.call(models);
        options || (options = {});
        for (i = 0, length = models.length; i < length; i++) {
            model = models[i] = this.get(models[i]);
            if (!model) continue;
            this._deIndex(model);
            index = this.models.indexOf(model);
            this.models.splice(index, 1);
            if (!options.silent) {
                options.index = index;
                if (model.trigger) {
                    model.trigger('remove', model, this, options);
                } else {
                    this.trigger('remove', model, this, options);
                }
            }
            this._removeReference(model, options);
        }
        return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function (models, options) {
        options || (options = {});
        for (var i = 0, length = this.models.length; i < length; i++) {
            this._removeReference(this.models[i], options);
        }
        options.previousModels = this.models;
        this._reset();
        models = this.add(models, assign({silent: true}, options));
        if (!options.silent) this.trigger('reset', this, options);
        return models;
    },

    sort: function (options) {
        var self = this;
        if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
        options || (options = {});

        if (typeof this.comparator === 'string') {
            this.models.sort(function (left, right) {
                if (left.get) {
                    left = left.get(self.comparator);
                    right = right.get(self.comparator);
                } else {
                    left = left[self.comparator];
                    right = right[self.comparator];
                }
                if (left > right || left === void 0) return 1;
                if (left < right || right === void 0) return -1;
                return 0;
            });
        } else if (this.comparator.length === 1) {
            this.models.sort(function (left, right) {
                left = self.comparator(left);
                right = self.comparator(right);
                if (left > right || left === void 0) return 1;
                if (left < right || right === void 0) return -1;
                return 0;
            });
        } else {
            this.models.sort(bind(this.comparator,this));
        }

        if (!options.silent) this.trigger('sort', this, options);
        return this;
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function () {
        var list = slice.call(this.indexes || []);
        var i = 0;
        list.push(this.mainIndex);
        list.push('cid');
        var l = list.length;
        this.models = [];
        this._indexes = {};
        for (; i < l; i++) {
            this._indexes[list[i]] = {};
        }
    },

    _prepareModel: function (attrs, options) {
        // if we haven't defined a constructor, skip this
        if (!this.model) return attrs;

        if (this.isModel(attrs)) {
            if (!attrs.collection) attrs.collection = this;
            return attrs;
        } else {
            options = options ? assign({}, options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        }
    },

    _deIndex: function (model, attribute, value) {
        var indexVal;
        if (attribute !== undefined) {
            if (undefined === this._indexes[attribute]) throw new Error('Given attribute is not an index');
            delete this._indexes[attribute][value];
            return;
        }
        // Not a specific attribute
        for (var indexAttr in this._indexes) {
            indexVal = model.hasOwnProperty(indexAttr) ? model[indexAttr] : (model.get && model.get(indexAttr));
            delete this._indexes[indexAttr][indexVal];
        }
    },

    _index: function (model, attribute) {
        var indexVal;
        if (attribute !== undefined) {
            if (undefined === this._indexes[attribute]) throw new Error('Given attribute is not an index');
            indexVal = model[attribute] || (model.get && model.get(attribute));
            if (indexVal) this._indexes[attribute][indexVal] = model;
            return;
        }
        // Not a specific attribute
        for (var indexAttr in this._indexes) {
            indexVal = model.hasOwnProperty(indexAttr) ? model[indexAttr] : (model.get && model.get(indexAttr));
            if (indexVal != null) this._indexes[indexAttr][indexVal] = model;
        }
    },

    _isDerivedIndex: function(proto) {
        if (!proto || typeof proto._derived !== 'object') {
            return false;
        }
        return Object.keys(proto._derived).indexOf(this.mainIndex) >= 0;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function (model, options) {
        this._index(model);
        if (!model.collection) model.collection = this;
        if (model.on) model.on('all', this._onModelEvent, this);
    },

        // Internal method to sever a model's ties to a collection.
    _removeReference: function (model, options) {
        if (this === model.collection) delete model.collection;
        this._deIndex(model);
        if (model.off) model.off('all', this._onModelEvent, this);
    },

    _onModelEvent: function (event, model, collection, options) {
        var eventName = event.split(':')[0];
        var attribute = event.split(':')[1];

        if ((eventName === 'add' || eventName === 'remove') && collection !== this) return;
        if (eventName === 'destroy') this.remove(model, options);
        if (model && eventName === 'change' && attribute && this._indexes[attribute]) {
            this._deIndex(model, attribute, model.previousAttributes()[attribute]);
            this._index(model, attribute);
        }
        this.trigger.apply(this, arguments);
    }
});

Object.defineProperties(Collection.prototype, {
    length: {
        get: function () {
            return this.models.length;
        }
    },
    isCollection: {
        get: function () {
            return true;
        }
    }
});

var arrayMethods = [
    'indexOf',
    'lastIndexOf',
    'every',
    'some',
    'forEach',
    'map',
    'filter',
    'reduce',
    'reduceRight'
];

arrayMethods.forEach(function (method) {
    Collection.prototype[method] = function () {
        return this.models[method].apply(this.models, arguments);
    };
});

// alias each/forEach for maximum compatibility
Collection.prototype.each = Collection.prototype.forEach;

Collection.extend = classExtend;

module.exports = Collection;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandState = __webpack_require__(11);

var _ampersandState2 = _interopRequireDefault(_ampersandState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CostState = _ampersandState2.default.extend({
  extraProperties: 'allow'
});

exports.default = _ampersandState2.default.extend({
  props: {
    id: 'string',
    name: 'string',
    level: 'number',
    cost: 'state'
  },

  initialize: function initialize(attributes, options) {
    this.level = this.level || 0;
    this.deltaCallback = options.deltaCallback;
  },
  improve: function improve() {
    this.level += 1;
    return this.cost;
  },
  getResourcesDelta: function getResourcesDelta(elapsedTicks) {
    // returns an object of { resource: netAmount }
    // must have NO side affects
    return this.deltaCallback(elapsedTicks);
  },
  tick: function tick(elapsedTicks) {
    // handle tick for an upgrade
    return this.getResourcesDelta(elapsedTicks);
  }
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function sumPropertyValues(dest, source) {
  if (source == null) {
    return;
  }
  Object.entries(source).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        property = _ref2[0],
        value = _ref2[1];

    if (dest[property] == null) {
      dest[property] = value; // eslint-disable-line no-param-reassign
    } else {
      dest[property] += value; // eslint-disable-line no-param-reassign
    }
  });
}

function tickRegions(elapsedTicks, regions, resourcePool) {
  var resourcesDelta = {};
  Object.values(regions).forEach(function (region) {
    sumPropertyValues(resourcesDelta, region.tick(elapsedTicks));
  });

  Object.entries(resourcesDelta).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    var resource = resourcePool.get(key);
    if (resource == null) {
      return;
    }

    resource.amount += value;
  });
}

exports.sumPropertyValues = sumPropertyValues;
exports.tickRegions = tickRegions;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(130);

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(124);

var _main4 = _interopRequireDefault(_main3);

var _app = __webpack_require__(292);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = _main4.default;

var mainView = new _main2.default(main);

mainView.render();
document.querySelector('[data-hook=main-outlet]').appendChild(mainView.el);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

var _resourcesPanel = __webpack_require__(276);

var _resourcesPanel2 = _interopRequireDefault(_resourcesPanel);

var _happiness = __webpack_require__(278);

var _happiness2 = _interopRequireDefault(_happiness);

var _population = __webpack_require__(279);

var _population2 = _interopRequireDefault(_population);

var _map = __webpack_require__(280);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="game-container">\n    <div class="panel">\n      <div data-hook=resources-slot></div>\n      <div data-hook=population-slot></div>\n      <div data-hook=happiness-slot></div>\n    </div>\n    <div data-hook=map-slot></div>\n  </div>',
  initialize: function initialize(game) {
    this.game = game;
  },


  subviews: {
    resources: {
      selector: '[data-hook=resources-slot]',
      prepareView: function prepareView(el) {
        return new _resourcesPanel2.default({
          collection: this.game.resourcePool,
          el: el
        });
      }
    },
    happiness: {
      selector: '[data-hook=happiness-slot]',
      prepareView: function prepareView(el) {
        return new _happiness2.default({
          el: el,
          model: this.game.happiness
        });
      }
    },
    population: {
      selector: '[data-hook=population-slot]',
      prepareView: function prepareView(el) {
        return new _population2.default({
          el: el,
          model: this.game.population
        });
      }
    },
    map: {
      selector: '[data-hook=map-slot]',
      prepareView: function prepareView(el) {
        return new _map2.default({
          el: el,
          regions: this.game.regions
        });
      }
    }
  },

  render: function render() {
    this.renderWithTemplate(this);
  }
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    arrayMap = __webpack_require__(21),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(22);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isMasked = __webpack_require__(136),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(70);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(137);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(15),
    isIterateeCall = __webpack_require__(142);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(141),
    defineProperty = __webpack_require__(69),
    identity = __webpack_require__(16);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25),
    isArrayLike = __webpack_require__(4),
    isIndex = __webpack_require__(18),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isLength = __webpack_require__(42),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(76);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(21),
    baseClone = __webpack_require__(149),
    baseUnset = __webpack_require__(193),
    castPath = __webpack_require__(7),
    copyObject = __webpack_require__(14),
    customOmitClone = __webpack_require__(198),
    flatRest = __webpack_require__(89),
    getAllKeysIn = __webpack_require__(82);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(46),
    arrayEach = __webpack_require__(49),
    assignValue = __webpack_require__(23),
    baseAssign = __webpack_require__(172),
    baseAssignIn = __webpack_require__(173),
    cloneBuffer = __webpack_require__(176),
    copyArray = __webpack_require__(50),
    copySymbols = __webpack_require__(177),
    copySymbolsIn = __webpack_require__(179),
    getAllKeys = __webpack_require__(80),
    getAllKeysIn = __webpack_require__(82),
    getTag = __webpack_require__(54),
    initCloneArray = __webpack_require__(182),
    initCloneByTag = __webpack_require__(183),
    initCloneObject = __webpack_require__(192),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(27),
    isObject = __webpack_require__(2),
    keys = __webpack_require__(5);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28),
    Map = __webpack_require__(47),
    MapCache = __webpack_require__(48);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(161),
    ListCache = __webpack_require__(28),
    Map = __webpack_require__(47);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(162),
    hashDelete = __webpack_require__(163),
    hashGet = __webpack_require__(164),
    hashHas = __webpack_require__(165),
    hashSet = __webpack_require__(166);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    keys = __webpack_require__(5);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    keysIn = __webpack_require__(77);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(19),
    nativeKeysIn = __webpack_require__(175);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    getSymbols = __webpack_require__(51);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    getSymbolsIn = __webpack_require__(79);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(55),
    cloneDataView = __webpack_require__(184),
    cloneMap = __webpack_require__(185),
    cloneRegExp = __webpack_require__(187),
    cloneSet = __webpack_require__(188),
    cloneSymbol = __webpack_require__(190),
    cloneTypedArray = __webpack_require__(191);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(55);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(186),
    arrayReduce = __webpack_require__(86),
    mapToArray = __webpack_require__(87);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(189),
    arrayReduce = __webpack_require__(86),
    setToArray = __webpack_require__(32);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(55);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(33),
    getPrototype = __webpack_require__(53),
    isPrototype = __webpack_require__(19);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    last = __webpack_require__(57),
    parent = __webpack_require__(88),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(195);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(196);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(48);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(199);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    getPrototype = __webpack_require__(53),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var escapeHtmlChar = __webpack_require__(202),
    toString = __webpack_require__(40);

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(203);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

module.exports = escapeHtmlChar;


/***/ }),
/* 203 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(91),
    castFunction = __webpack_require__(92);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(206);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(93),
    isArrayLike = __webpack_require__(4),
    isString = __webpack_require__(59),
    toInteger = __webpack_require__(35),
    values = __webpack_require__(212);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(211);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(22);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(213),
    keys = __webpack_require__(5);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(21);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(215),
    baseUnary = __webpack_require__(45),
    nodeUtil = __webpack_require__(74);

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(60);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(46),
    equalArrays = __webpack_require__(95),
    equalByTag = __webpack_require__(221),
    equalObjects = __webpack_require__(222),
    getTag = __webpack_require__(54),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(27),
    isTypedArray = __webpack_require__(44);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 220 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    Uint8Array = __webpack_require__(85),
    eq = __webpack_require__(25),
    equalArrays = __webpack_require__(95),
    mapToArray = __webpack_require__(87),
    setToArray = __webpack_require__(32);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(80);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(224),
    hasPath = __webpack_require__(96);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(37),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17),
    createCtor = __webpack_require__(37),
    createHybrid = __webpack_require__(101),
    createRecurry = __webpack_require__(104),
    getHolder = __webpack_require__(38),
    replaceHolders = __webpack_require__(20),
    root = __webpack_require__(1);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(63),
    getData = __webpack_require__(105),
    getFuncName = __webpack_require__(229),
    lodash = __webpack_require__(231);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(230);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(63),
    LodashWrapper = __webpack_require__(107),
    baseLodash = __webpack_require__(64),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(3),
    wrapperClone = __webpack_require__(232);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(63),
    LodashWrapper = __webpack_require__(107),
    copyArray = __webpack_require__(50);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(49),
    arrayIncludes = __webpack_require__(65);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(50),
    isIndex = __webpack_require__(18);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17),
    createCtor = __webpack_require__(37),
    root = __webpack_require__(1);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(102),
    composeArgsRight = __webpack_require__(103),
    replaceHolders = __webpack_require__(20);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(58),
    baseRest = __webpack_require__(15),
    baseUniq = __webpack_require__(240),
    isArrayLikeObject = __webpack_require__(111);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(61),
    arrayIncludes = __webpack_require__(65),
    arrayIncludesWith = __webpack_require__(110),
    cacheHas = __webpack_require__(62),
    createSet = __webpack_require__(241),
    setToArray = __webpack_require__(32);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(83),
    noop = __webpack_require__(106),
    setToArray = __webpack_require__(32);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var before = __webpack_require__(243);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(75),
    getTag = __webpack_require__(54),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isArrayLike = __webpack_require__(4),
    isBuffer = __webpack_require__(27),
    isPrototype = __webpack_require__(19),
    isTypedArray = __webpack_require__(44);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(4);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var uniqueId = __webpack_require__(39);
var eventSplitter = /\s+/;

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy.
exports.triggerEvents = function triggerEvents(events, args) {
    var ev;
    var i = -1;
    var l = events.length;
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    switch (args.length) {
        case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
        case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
        case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
        case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
        default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
};

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
exports.eventsApi = function eventsApi(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
        for (var key in name) {
            obj[action].apply(obj, [key, name[key]].concat(rest));
        }
        return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
        var names = name.split(eventSplitter);
        for (var i = 0, l = names.length; i < l; i++) {
            obj[action].apply(obj, [names[i]].concat(rest));
        }
        return false;
    }

    return true;
};

// Inversion-of-control versions of `on` and `once`. Tell *this* object to
// listen to an event in another object ... keeping track of what it's
// listening to.
exports.createListenMethod = function createListenMethod(implementation) {
    return function listenMethod(obj, name, callback) {
        if (!obj) {
            throw new Error('Trying to listenTo event: \'' + name + '\' but the target object is undefined');
        }
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var id = obj._listenId || (obj._listenId = uniqueId('l'));
        listeningTo[id] = obj;
        if (!callback && typeof name === 'object') callback = this;
        if (typeof obj[implementation] !== 'function') {
            throw new Error('Trying to listenTo event: \'' + name + '\' on object: ' + obj.toString() + ' but it does not have an \'on\' method so is unbindable');
        }
        obj[implementation](name, callback, this);
        return this;
    };
};


/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = function arrayNext(array, currentItem) {
    var len = array.length;
    var newIndex = array.indexOf(currentItem) + 1;
    if (newIndex > (len - 1)) newIndex = 0;
    return array[newIndex];
};


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

/*$AMPERSAND_VERSION*/
var assign = __webpack_require__(13);
var invokeMap = __webpack_require__(115);
var pick = __webpack_require__(116);
var find = __webpack_require__(254);
var difference = __webpack_require__(264);
var bind = __webpack_require__(36);
var Events = __webpack_require__(66);
var ampExtend = __webpack_require__(122);

// options
var options = ['collection', 'el', 'viewOptions', 'view', 'emptyView', 'filter', 'reverse', 'parent'];


function CollectionView(spec) {
    if (!spec) {
        throw new ReferenceError('Collection view missing required parameters: collection, el');
    }
    if (!spec.collection) {
        throw new ReferenceError('Collection view requires a collection');
    }
    if (!spec.el && !this.insertSelf) {
        throw new ReferenceError('Collection view requires an el');
    }
    assign(this, pick(spec, options));
    this.views = [];
    this.listenTo(this.collection, 'add', this._addViewForModel);
    this.listenTo(this.collection, 'remove', this._removeViewForModel);
    this.listenTo(this.collection, 'sort', this._rerenderAll);
    this.listenTo(this.collection, 'refresh reset', this._reset);
}

assign(CollectionView.prototype, Events, {
    // for view contract compliance
    render: function () {
        this._renderAll();
        return this;
    },
    remove: function () {
        invokeMap(this.views, 'remove');
        this.stopListening();
    },
    _getViewByModel: function (model) {
        return find(this.views, function (view) {
            return model === view.model;
        });
    },
    _createViewForModel: function (model, renderOpts) {
        var defaultViewOptions = {model: model, collection: this.collection, parent: this};
        var view = new this.view(assign(defaultViewOptions, this.viewOptions));
        this.views.push(view);
        view.renderedByParentView = true;
        view.render(renderOpts);
        return view;
    },
    _getOrCreateByModel: function (model, renderOpts) {
        return this._getViewByModel(model) || this._createViewForModel(model, renderOpts);
    },
    _addViewForModel: function (model, collection, options) {
        var matches = this.filter ? this.filter(model) : true;
        if (!matches) {
            return;
        }
        if (this.renderedEmptyView) {
            this._removeView(this.renderedEmptyView);
            delete this.renderedEmptyView;
        }
        var view = this._getOrCreateByModel(model, {containerEl: this.el});
        if (options && options.rerender) {
            this._insertView(view);
        } else {
            this._insertViewAtIndex(view);
        }
    },
    _insertViewAtIndex: function (view) {
        if (!view.insertSelf) {
            var pos = this.collection.indexOf(view.model);
            pos = this.reverse ? pos - 1 : pos + 1;

            var modelToInsertBefore = this.collection.at(pos);

            var viewToInsertBefore = this._getViewByModel(modelToInsertBefore);

            // FIX IE bug (https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore)
            // "In Internet Explorer an undefined value as referenceElement will throw errors, while in rest of the modern browsers, this works fine."
            if (viewToInsertBefore) {
                this.el.insertBefore(view.el, viewToInsertBefore && viewToInsertBefore.el);
            } else {
                this.el.appendChild(view.el);
            }
        }
    },
    _insertView: function (view) {
        if (!view.insertSelf) {
            if (this.reverse && this.el.firstChild) {
                this.el.insertBefore(view.el, this.el.firstChild);
            } else {
                this.el.appendChild(view.el);
            }
        }
    },
    _removeViewForModel: function (model) {
        var view = this._getViewByModel(model);
        if (!view) {
            return;
        }
        var index = this.views.indexOf(view);
        if (index !== -1) {
            // remove it if we found it calling animateRemove
            // to give user option of gracefully destroying.
            view = this.views.splice(index, 1)[0];
            this._removeView(view);
            this._renderEmptyView();
        }
    },
    _removeView: function (view) {
        if (view.animateRemove) {
            view.animateRemove();
        } else {
            view.remove();
        }
    },
    _renderAll: function () {
        this.collection.each(bind(this._addViewForModel, this));
        this._renderEmptyView();
    },
    _rerenderAll: function (collection, options) {
        options = options || {};
        this.collection.each(bind(function (model) {
            this._addViewForModel(model, this, assign(options, {rerender: true}));
        }, this));
    },
    _renderEmptyView: function() {
        if (this.views.length === 0 && this.emptyView && !this.renderedEmptyView) {
            this.renderedEmptyView = new this.emptyView({parent: this});
            this.el.appendChild(this.renderedEmptyView.render().el);
        }
    },
    _reset: function () {
        var newViews = this.collection.map(bind(this._getOrCreateByModel, this));

        //Remove existing views from the ui
        var toRemove = difference(this.views, newViews);
        toRemove.forEach(this._removeView, this);

        //Rerender the full list with the new views
        this.views = newViews;
        this._rerenderAll();
        this._renderEmptyView();
    }
});

CollectionView.extend = ampExtend;

module.exports = CollectionView;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17),
    castPath = __webpack_require__(7),
    last = __webpack_require__(57),
    parent = __webpack_require__(88),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  var func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : apply(func, object, args);
}

module.exports = baseInvoke;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(251),
    hasIn = __webpack_require__(117);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(34),
    baseSet = __webpack_require__(252),
    castPath = __webpack_require__(7);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(23),
    castPath = __webpack_require__(7),
    isIndex = __webpack_require__(18),
    isObject = __webpack_require__(2),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(255),
    findIndex = __webpack_require__(263);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(118),
    isArrayLike = __webpack_require__(4),
    keys = __webpack_require__(5);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(257),
    getMatchData = __webpack_require__(258),
    matchesStrictComparable = __webpack_require__(120);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(46),
    baseIsEqual = __webpack_require__(60);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(119),
    keys = __webpack_require__(5);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(60),
    get = __webpack_require__(121),
    hasIn = __webpack_require__(117),
    isKey = __webpack_require__(56),
    isStrictComparable = __webpack_require__(119),
    matchesStrictComparable = __webpack_require__(120),
    toKey = __webpack_require__(8);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(261),
    basePropertyDeep = __webpack_require__(262),
    isKey = __webpack_require__(56),
    toKey = __webpack_require__(8);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 261 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(34);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(94),
    baseIteratee = __webpack_require__(118),
    toInteger = __webpack_require__(35);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(265),
    baseFlatten = __webpack_require__(58),
    baseRest = __webpack_require__(15),
    isArrayLikeObject = __webpack_require__(111);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(61),
    arrayIncludes = __webpack_require__(65),
    arrayIncludesWith = __webpack_require__(110),
    arrayMap = __webpack_require__(21),
    baseUnary = __webpack_require__(45),
    cacheHas = __webpack_require__(62);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 266 */
/***/ (function(module, exports) {


/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var events = __webpack_require__(268);
var delegate = __webpack_require__(269);
var forceCaptureEvents = ['focus', 'blur'];

/**
 * Expose `Events`.
 */

module.exports = Events;

/**
 * Initialize an `Events` with the given
 * `el` object which events will be bound to,
 * and the `obj` which will receive method calls.
 *
 * @param {Object} el
 * @param {Object} obj
 * @api public
 */

function Events(el, obj) {
  if (!(this instanceof Events)) return new Events(el, obj);
  if (!el) throw new Error('element required');
  if (!obj) throw new Error('object required');
  this.el = el;
  this.obj = obj;
  this._events = {};
}

/**
 * Subscription helper.
 */

Events.prototype.sub = function(event, method, cb){
  this._events[event] = this._events[event] || {};
  this._events[event][method] = cb;
};

/**
 * Bind to `event` with optional `method` name.
 * When `method` is undefined it becomes `event`
 * with the "on" prefix.
 *
 * Examples:
 *
 *  Direct event handling:
 *
 *    events.bind('click') // implies "onclick"
 *    events.bind('click', 'remove')
 *    events.bind('click', 'sort', 'asc')
 *
 *  Delegated event handling:
 *
 *    events.bind('click li > a')
 *    events.bind('click li > a', 'remove')
 *    events.bind('click a.sort-ascending', 'sort', 'asc')
 *    events.bind('click a.sort-descending', 'sort', 'desc')
 *
 *  Multiple events handling:
 *
 *    events.bind({
 *      'click .remove': 'remove',
 *      'click .add': 'add'
 *    });
 *
 * @param {String|object} - object is used for multiple binding,
 *                               string for single event binding
 * @param {String|function} [arg2] - method to call (optional)
 * @param {*} [arg3] - data for single event binding (optional)
 * @return {Function} callback
 * @api public
 */

Events.prototype.bind = function(arg1, arg2){
  var bindEvent = function(event, method) {
    var e = parse(event);
    var el = this.el;
    var obj = this.obj;
    var name = e.name;
    var method = method || 'on' + name;
    var args = [].slice.call(arguments, 2);

    // callback
    function cb(){
      var a = [].slice.call(arguments).concat(args);

      if (typeof method === 'function') {
          method.apply(obj, a);
          return;
      }

      if (!obj[method]) {
          throw new Error(method + ' method is not defined');
      } else {
          obj[method].apply(obj, a);
      }
    }

    // bind
    if (e.selector) {
      cb = delegate.bind(el, e.selector, name, cb);
    } else {
      events.bind(el, name, cb);
    }

    // subscription for unbinding
    this.sub(name, method, cb);

    return cb;
  };

  if (typeof arg1 == 'string') {
    bindEvent.apply(this, arguments);
  } else {
    for(var key in arg1) {
      if (arg1.hasOwnProperty(key)) {
        bindEvent.call(this, key, arg1[key]);
      }
    }
  }
};

/**
 * Unbind a single binding, all bindings for `event`,
 * or all bindings within the manager.
 *
 * Examples:
 *
 *  Unbind direct handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * Unbind delegate handlers:
 *
 *     events.unbind('click', 'remove')
 *     events.unbind('click')
 *     events.unbind()
 *
 * @param {String|Function} [event]
 * @param {String|Function} [method]
 * @api public
 */

Events.prototype.unbind = function(event, method){
  if (0 == arguments.length) return this.unbindAll();
  if (1 == arguments.length) return this.unbindAllOf(event);

  // no bindings for this event
  var bindings = this._events[event];
  var capture = (forceCaptureEvents.indexOf(event) !== -1);
  if (!bindings) return;

  // no bindings for this method
  var cb = bindings[method];
  if (!cb) return;

  events.unbind(this.el, event, cb, capture);
};

/**
 * Unbind all events.
 *
 * @api private
 */

Events.prototype.unbindAll = function(){
  for (var event in this._events) {
    this.unbindAllOf(event);
  }
};

/**
 * Unbind all events for `event`.
 *
 * @param {String} event
 * @api private
 */

Events.prototype.unbindAllOf = function(event){
  var bindings = this._events[event];
  if (!bindings) return;

  for (var method in bindings) {
    this.unbind(event, method);
  }
};

/**
 * Parse `event`.
 *
 * @param {String} event
 * @return {Object}
 * @api private
 */

function parse(event) {
  var parts = event.split(/ +/);
  return {
    name: parts.shift(),
    selector: parts.join(' ')
  }
}


/***/ }),
/* 268 */
/***/ (function(module, exports) {

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var closest = __webpack_require__(270)
  , event = __webpack_require__(272);

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

exports.bind = function(el, selector, type, fn, capture){
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  return event.bind(el, type, function(e){
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) fn.call(el, e);
  }, capture);
};

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  event.unbind(el, type, fn, capture);
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var matches = __webpack_require__(271)

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}


/***/ }),
/* 271 */
/***/ (function(module, exports) {


/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),
/* 272 */
/***/ (function(module, exports) {

var bind, unbind, prefix;

function detect () {
  bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
  unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
  prefix = bind !== 'addEventListener' ? 'on' : '';
}

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  if (!bind) detect();
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  if (!unbind) detect();
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

/*$AMPERSAND_VERSION*/
var Store = __webpack_require__(114);
var dom = __webpack_require__(274);
var matchesSelector = __webpack_require__(123);
var partial = __webpack_require__(275);
var slice = Array.prototype.slice;

function getMatches(el, selector, firstOnly) {
    if (selector === '') return [el];
    var matches = [];
    if (!selector) return matches;
    if (firstOnly) {
        if (matchesSelector(el, selector)) return [el];
        return el.querySelector(selector) ? [el.querySelector(selector)] : [];
    } else {
        if (matchesSelector(el, selector)) matches.push(el);
        return matches.concat(slice.call(el.querySelectorAll(selector)));
    }
}
function setAttributes(el, attrs) {
    for (var name in attrs) {
        dom.setAttribute(el, name, attrs[name]);
    }
}

function removeAttributes(el, attrs) {
    for (var name in attrs) {
        dom.removeAttribute(el, name);
    }
}

function makeArray(val) {
    return Array.isArray(val) ? val : [val];
}

function switchHandler(binding, el, value) {
    // the element selector to show
    var showValue = binding.cases[value];

    var firstMatchOnly = binding.firstMatchOnly;

    // hide all the other elements with a different value
    for (var item in binding.cases) {
        var curValue = binding.cases[item];

        if (value !== item && curValue !== showValue) {
            getMatches(el, curValue, firstMatchOnly).forEach(function (match) {
                dom.hide(match);
            });
        }
    }
    getMatches(el, showValue, firstMatchOnly).forEach(function (match) {
        dom.show(match);
    });
}

function getSelector(binding) {
    if (typeof binding.selector === 'string') {
        return binding.selector;
    } else if (binding.hook) {
        return '[data-hook~="' + binding.hook + '"]';
    } else {
        return '';
    }
}

function getBindingFunc(binding, context) {
    var type = binding.type || 'text';
    var isCustomBinding = typeof type === 'function';
    var selector = getSelector(binding);
    var firstMatchOnly = binding.firstMatchOnly;
    var yes = binding.yes;
    var no = binding.no;
    var hasYesNo = !!(yes || no);

    // storage variable for previous if relevant
    var previousValue;

    if (isCustomBinding) {
        return function (el, value) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                type.call(context, match, value, previousValue);
            });
            previousValue = value;
        };
    } else if (type === 'text') {
        return function (el, value) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                dom.text(match, value);
            });
        };
    } else if (type === 'class') {
        return function (el, value) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                dom.switchClass(match, previousValue, value);
            });
            previousValue = value;
        };
    } else if (type === 'attribute') {
        if (!binding.name) throw Error('attribute bindings must have a "name"');
        return function (el, value) {
            var names = makeArray(binding.name);
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                names.forEach(function (name) {
                    dom.setAttribute(match, name, value);
                });
            });
            previousValue = value;
        };
    } else if (type === 'value') {
        return function (el, value) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                if (!value && value !== 0) value = '';
                // only apply bindings if element is not currently focused
                if (document.activeElement !== match) match.value = value;
            });
            previousValue = value;
        };
    } else if (type === 'booleanClass') {
        // if there's a `no` case this is actually a switch
        if (hasYesNo) {
            yes = makeArray(yes || '');
            no = makeArray(no || '');
            return function (el, value) {
                var prevClass = value ? no : yes;
                var newClass = value ? yes : no;
                getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                    prevClass.forEach(function (pc) {
                        dom.removeClass(match, pc);
                    });
                    newClass.forEach(function (nc) {
                        dom.addClass(match, nc);
                    });
                });
            };
        } else {
            return function (el, value, keyName) {
                var name = makeArray(binding.name || keyName);
                var invert = (binding.invert || false);
                value = (invert ? (value ? false : true) : value);
                getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                    name.forEach(function (className) {
                        dom[value ? 'addClass' : 'removeClass'](match, className);
                    });
                });
            };
        }
    } else if (type === 'booleanAttribute') {
        // if there are `yes` and `no` selectors, this swaps between them
        if (hasYesNo) {
            yes = makeArray(yes || '');
            no = makeArray(no || '');
            return function (el, value) {
                var prevAttribute = value ? no : yes;
                var newAttribute = value ? yes : no;
                getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                    prevAttribute.forEach(function (pa) {
                        if (pa) {
                            dom.removeAttribute(match, pa);
                        }
                    });
                    newAttribute.forEach(function (na) {
                        if (na) {
                            dom.addAttribute(match, na);
                        }
                    });
                });
            };
        } else {
            return function (el, value, keyName) {
                var name = makeArray(binding.name || keyName);
                var invert = (binding.invert || false);
                value = (invert ? (value ? false : true) : value);
                getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                    name.forEach(function (attr) {
                        dom[value ? 'addAttribute' : 'removeAttribute'](match, attr);
                    });
                });
            };
        }
    } else if (type === 'toggle') {
        var mode = (binding.mode || 'display');
        var invert = (binding.invert || false);
        // this doesn't require a selector since we can pass yes/no selectors
        if (hasYesNo) {
            return function (el, value) {
                getMatches(el, yes, firstMatchOnly).forEach(function (match) {
                    dom[value ? 'show' : 'hide'](match, mode);
                });
                getMatches(el, no, firstMatchOnly).forEach(function (match) {
                    dom[value ? 'hide' : 'show'](match, mode);
                });
            };
        } else {
            return function (el, value) {
                value = (invert ? (value ? false : true) : value);
                getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                    dom[value ? 'show' : 'hide'](match, mode);
                });
            };
        }
    } else if (type === 'switch') {
        if (!binding.cases) throw Error('switch bindings must have "cases"');
        return partial(switchHandler, binding);
    } else if (type === 'innerHTML') {
        return function (el, value) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                dom.html(match, value);
            });
        };
    } else if (type === 'switchClass') {
        if (!binding.cases) throw Error('switchClass bindings must have "cases"');
        return function (el, value, keyName) {
            var name = makeArray(binding.name || keyName);
            for (var item in binding.cases) {
                getMatches(el, binding.cases[item], firstMatchOnly).forEach(function (match) {
                    name.forEach(function (className) {
                        dom[value === item ? 'addClass' : 'removeClass'](match, className);
                    });
                });
            }
        };
    } else if (type === 'switchAttribute') {
        if (!binding.cases) throw Error('switchAttribute bindings must have "cases"');
        return function (el, value, keyName) {
            getMatches(el, selector, firstMatchOnly).forEach(function (match) {
                if (previousValue) {
                    removeAttributes(match, previousValue);
                }

                if (value in binding.cases) {
                    var attrs = binding.cases[value];
                    if (typeof attrs === 'string') {
                        attrs = {};
                        attrs[binding.name || keyName] = binding.cases[value];
                    }
                    setAttributes(match, attrs);

                    previousValue = attrs;
                }
            });
        };
    } else {
        throw new Error('no such binding type: ' + type);
    }
}

// returns a key-tree-store of functions
// that can be applied to any element/model.

// all resulting functions should be called
// like func(el, value, lastKeyName)
module.exports = function (bindings, context) {
    var store = new Store();
    var key, current;

    for (key in bindings) {
        current = bindings[key];
        if (typeof current === 'string') {
            store.add(key, getBindingFunc({
                type: 'text',
                selector: current
            }));
        } else if (current.forEach) {
            current.forEach(function (binding) {
                store.add(key, getBindingFunc(binding, context));
            });
        } else {
            store.add(key, getBindingFunc(current, context));
        }
    }

    return store;
};


/***/ }),
/* 274 */
/***/ (function(module, exports) {

/*$AMPERSAND_VERSION*/
var dom = module.exports = {
    text: function (el, val) {
        el.textContent = getString(val);
    },
    // optimize if we have classList
    addClass: function (el, cls) {
        cls = getString(cls);
        if (!cls) return;
        if (Array.isArray(cls)) {
            cls.forEach(function(c) {
                dom.addClass(el, c);
            });
        } else if (el.classList) {
            el.classList.add(cls);
        } else {
            if (!hasClass(el, cls)) {
                if (el.classList) {
                    el.classList.add(cls);
                } else {
                    el.className += ' ' + cls;
                }
            }
        }
    },
    removeClass: function (el, cls) {
        if (Array.isArray(cls)) {
            cls.forEach(function(c) {
                dom.removeClass(el, c);
            });
        } else if (el.classList) {
            cls = getString(cls);
            if (cls) el.classList.remove(cls);
        } else {
            // may be faster to not edit unless we know we have it?
            el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },
    hasClass: hasClass,
    switchClass: function (el, prevCls, newCls) {
        if (prevCls) this.removeClass(el, prevCls);
        this.addClass(el, newCls);
    },
    // makes sure attribute (with no content) is added
    // if exists it will be cleared of content
    addAttribute: function (el, attr) {
        // setting to empty string does same
        el.setAttribute(attr, '');
        // Some browsers won't update UI for boolean attributes unless you
        // set it directly. So we do both
        if (hasBooleanProperty(el, attr)) el[attr] = true;
    },
    // completely removes attribute
    removeAttribute: function (el, attr) {
        el.removeAttribute(attr);
        if (hasBooleanProperty(el, attr)) el[attr] = false;
    },
    // sets attribute to string value given, clearing any current value
    setAttribute: function (el, attr, value) {
        el.setAttribute(attr, getString(value));
    },
    getAttribute: function (el, attr) {
        return el.getAttribute(attr);
    },
    hasAttribute: function (el, attr) {
        return el.hasAttribute(attr);
    },
    hide: function (el, mode) {
        if (!mode) mode = 'display';
        if (!isHidden(el)) {
            storeDisplayStyle(el, mode);
            hide(el, mode);
        }
    },
    // show element
    show: function (el, mode) {
        if (!mode) mode = 'display';
        show(el, mode);
    },
    toggle: function (el, mode) {
        if (!isHidden(el)) {
            dom.hide(el, mode);
        } else {
            dom.show(el, mode);
        }
    },
    html: function (el, content) {
        el.innerHTML = content;
    }
};

// helpers
function getString(val) {
    if (!val && val !== 0) {
        return '';
    } else {
        return val;
    }
}

function hasClass(el, cls) {
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return new RegExp('(^| )' + cls + '( |$)', 'gi').test(el.className);
    }
}

function hasBooleanProperty(el, prop) {
    var val = el[prop];
    return prop in el && (val === true || val === false);
}

function isHidden (el) {
    return dom.getAttribute(el, 'data-anddom-hidden') === 'true';
}

function storeDisplayStyle (el, mode) {
    dom.setAttribute(el, 'data-anddom-' + mode, el.style[mode]);
}

function show (el, mode) {
    el.style[mode] = dom.getAttribute(el, 'data-anddom-' + mode) || '';
    dom.removeAttribute(el, 'data-anddom-hidden');
}

function hide (el, mode) {
    dom.setAttribute(el, 'data-anddom-hidden', 'true');
    el.style[mode] = (mode === 'visibility' ? 'hidden' : 'none');
}


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(15),
    createWrap = __webpack_require__(98),
    getHolder = __webpack_require__(38),
    replaceHolders = __webpack_require__(20);

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

module.exports = partial;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

var _resource = __webpack_require__(277);

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="resources-panel">\n    <div data-hook="item-container"></div>\n  </div>',

  render: function render() {
    this.renderWithTemplate(this);

    this.renderCollection(this.collection, _resource2.default, this.el.querySelector('[data-hook=item-container]'));
  }
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="resource" data-hook="container">\n    <span class="resource__name" data-hook="name"></span><span class="resource__amount" data-hook="amount"></span>\n  </div>',

  derived: {
    displayAmount: {
      deps: ['model.amount'],
      fn: function fn() {
        return Math.round(this.model.amount);
      }
    }
  },

  bindings: {
    displayAmount: '[data-hook=amount]'
  },

  render: function render(_ref) {
    var containerEl = _ref.containerEl;

    this.renderWithTemplate(this);
    this.el.classList.add('resource--' + this.model.id);
    containerEl.appendChild(this.el);
  }
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="progress-resource" data-hook="container">\n    <span class="label" data-hook="label"></span>\n    <div class="progress">\n      <div class="progress__inner" data-hook="progress"></div>\n    </div>\n  </div>',

  derived: {
    progressPercent: {
      deps: ['model.total', 'model.value'],
      fn: function fn() {
        return this.model.value / this.model.total * 100;
      }
    }
  },

  bindings: {
    'model.name': '[data-hook=label]',
    progressPercent: {
      type: function type(el, value) {
        el.style.width = value + '%';
      },

      hook: 'progress'
    }
  },

  render: function render() {
    this.renderWithTemplate(this);
  }
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="basic-resource" data-hook="container">\n    <div class="basic-resource__value">\n      <span class="label label--light">Comrades</span>\n      <span class="label" data-hook="population"></span>\n    </div>\n\n    <div class="basic-resource__value">\n      <span class="label label--light">Unassigned</span>\n      <span class="label" data-hook="unassigned"></span>\n    </div>\n  </div>',

  bindings: {
    'model.total': '[data-hook=population]',
    'model.available': '[data-hook=unassigned]'
  },

  render: function render() {
    this.renderWithTemplate(this);
  }
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

var _ampersandViewSwitcher = __webpack_require__(281);

var _ampersandViewSwitcher2 = _interopRequireDefault(_ampersandViewSwitcher);

var _map = __webpack_require__(282);

var _map2 = _interopRequireDefault(_map);

var _regionDetails = __webpack_require__(283);

var _regionDetails2 = _interopRequireDefault(_regionDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: function template() {
    return '\n    <div>\n      <div class="modal-container"></div>\n      <div class="map">\n        ' + _map2.default + '\n      </div>\n    <div>';
  },


  props: {
    selectedCity: 'state'
  },

  initialize: function initialize(opts) {
    this.regions = opts.regions;
  },
  render: function render() {
    var _this = this;

    this.renderWithTemplate(this);

    Object.keys(this.regions).forEach(function (key) {
      var city = _this.regions[key];
      var clickRegion = _this.el.querySelector('#' + key);
      clickRegion.addEventListener('click', function () {
        var view = new _regionDetails2.default({
          model: city
        });

        _this.viewSwitcher.set(view);
      });
    });

    this.viewSwitcher = new _ampersandViewSwitcher2.default(this.el.querySelector('.modal-container'));
  }
});

/***/ }),
/* 281 */
/***/ (function(module, exports) {

/*$AMPERSAND_VERSION*/
function ViewSwitcher(el, options) {
    options || (options = {});
    this.el = el;
    this.config = {
        hide: null,
        show: null,
        empty: null,
        prepend: false,
        waitForRemove: false
    };
    for (var item in options) {
        if (this.config.hasOwnProperty(item)) {
            this.config[item] = options[item];
        }
    }
    if (options.view) {
        this._setCurrent(options.view);
        this._render(options.view);
    } else {
        // call this so the empty callback gets called
        this._onViewRemove();
    }
}

ViewSwitcher.prototype.set = function (view) {
    var self = this;
    var prev = this.previous = this.current;

    if (prev === view) {
        return;
    }

    if (this.config.waitForRemove) {
        this.next = view;
        this._hide(prev, function () {
            if (self.next === view) {
                delete self.next;
                self._show(view);
            }
        });
    } else {
        this._hide(prev);
        this._show(view);
    }
};

ViewSwitcher.prototype._setCurrent = function (view) {
    this.current = view;
    if (view) this._registerRemoveListener(view);
    var emptyCb = this.config.empty;
    if (emptyCb && !this.current) {
        emptyCb();
    }
    return view;
};

ViewSwitcher.prototype.clear = function (cb) {
    this._hide(this.current, cb);
};

// If the view switcher itself is removed, remove its child to avoid memory leaks
ViewSwitcher.prototype.remove = function () {
    if (this.current) this.current.remove();
};

ViewSwitcher.prototype._show = function (view) {
    var customShow = this.config.show;
    this._setCurrent(view);
    this._render(view);
    if (customShow) customShow(view);
};

ViewSwitcher.prototype._registerRemoveListener = function (view) {
    if (view) view.once('remove', this._onViewRemove, this);
};

ViewSwitcher.prototype._onViewRemove = function (view) {
    var emptyCb = this.config.empty;
    if (this.current === view) {
        this.current = null;
    }
    if (emptyCb && !this.current) {
        emptyCb();
    }
};

ViewSwitcher.prototype._render = function (view) {
    if (!view.rendered) view.render({containerEl: this.el});
    if (!view.insertSelf) {
        if (this.config.prepend) {
            this.el.insertBefore(view.el, this.el.firstChild);
        } else {
            this.el.appendChild(view.el);
        }
    }
};

ViewSwitcher.prototype._hide = function (view, cb) {
    var customHide = this.config.hide;
    if (!view) return cb && cb();
    if (customHide) {
        if (customHide.length === 2) {
            customHide(view, function () {
                view.remove();
                if (cb) cb();
            });
        } else {
            customHide(view);
            view.remove();
            if (cb) cb();
        }
    } else {
        view.remove();
        if (cb) cb();
    }
};


module.exports = ViewSwitcher;


/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   viewBox=\"0 0 1034.8252 1475.5113\"\n   id=\"svg6729\"\n   version=\"1.1\"\n   inkscape:version=\"0.91 r13725\"\n   sodipodi:docname=\"map.svg\">\n  <metadata\n     id=\"metadata6747\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs6745\" />\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"1917\"\n     inkscape:window-height=\"1061\"\n     id=\"namedview6743\"\n     showgrid=\"false\"\n     inkscape:zoom=\"0.90509668\"\n     inkscape:cx=\"446.61555\"\n     inkscape:cy=\"1117.3037\"\n     inkscape:window-x=\"0\"\n     inkscape:window-y=\"0\"\n     inkscape:window-maximized=\"0\"\n     inkscape:current-layer=\"layer1\" />\n  <g\n     inkscape:groupmode=\"layer\"\n     id=\"layer2\"\n     inkscape:label=\"map\">\n    <path\n       style=\"\"\n       d=\"M91.077 1473.124c-2.71-2.083-3.155-3.546-3.568-11.733-.45-8.892-.316-9.456 2.72-11.445 3-1.966 4.526-5.205 6.375-13.532.55-2.478 2.063-4.055 5.113-5.33 3.712-1.55 4.33-2.403 4.33-5.973 0-2.577.953-5.027 2.5-6.427 2.67-2.416 3.306-6.23 1.25-7.5-.687-.425-1.25-4.617-1.25-9.317 0-7.703.357-8.926 3.627-12.426 3.035-3.25 4.56-3.882 9.346-3.882 4.884 0 6.036.503 7.88 3.438 3.474 5.53 10.55 13.21 15.012 16.295 3.694 2.553 4.136 3.49 4.136 8.762 0 4.55.573 6.263 2.5 7.466 2.197 1.372 2.5 2.915 2.5 12.737 0 11.145-.01 11.184-4.062 14.25-2.235 1.69-6.557 3.736-9.605 4.548-3.047.81-9.05 3.133-13.34 5.16-4.676 2.21-9.468 3.577-11.96 3.414-5.845-.384-11.31 2.62-13.602 7.475-1.738 3.682-4.392 6.434-6.18 6.41-.344 0-2.018-1.08-3.72-2.388zm10.522-64.183c-.386-1.003-.527-4.566-.314-7.916.28-4.41.905-6.09 2.262-6.09 2.446 0 2.742 14.502.313 15.31-.858.288-1.876-.3-2.26-1.303zm112.253-13.627c-4.342-.792-7.004-2.01-7.85-3.59-1.782-3.328-6.936-5.68-14.6-6.657-4.32-.552-7.345-.317-8.97.698-1.91 1.192-3.172 1.2-5.726.037-5.273-2.402-10.26-1.906-11.045 1.1-1.82 6.96-13.364-1.863-13.364-10.216 0-3.596-3.02-16.432-4.384-18.64-1.264-2.047-4.655-1.4-7.71 1.468-2.647 2.488-3.27 2.576-7.76 1.094-4.197-1.385-5.457-1.326-8.957.42-5.127 2.558-9.84 2.588-13.41.086-2.334-1.634-2.78-3.12-2.78-9.264 0-6.66-.35-7.613-3.9-10.6-4.237-3.566-11.41-6.94-14.752-6.94-3.77 0-8.742 3.07-9.11 5.625-.323 2.23-1.69 2.602-12.638 3.442-9.68.743-15.735.413-28.622-1.563-8.99-1.378-17.107-3.136-18.037-3.908-1.028-.853-1.69-3.978-1.69-7.98 0-5.524-.4-6.68-2.5-7.23-1.984-.518-2.5-1.704-2.5-5.743 0-4.902-.11-5.04-2.967-3.737-7.88 3.59-10.334-4.17-9.844-31.152.277-15.294.545-16.978 3.352-21.11 3.798-5.59 9.03-9.124 13.523-9.134 3.04-.013 3.44-.48 3.456-4.07.035-7.674 10.723-32.41 14.99-34.693 1.37-.734 2.492-2.46 2.492-3.84 0-4.262 4.617-11.64 9.19-14.687 2.536-1.69 5.183-4.953 6.318-7.79 1.074-2.686 3.087-5.592 4.473-6.457 1.384-.866 2.518-2.093 2.518-2.726 0-3.044 8.002-13.066 12.91-16.167 3.03-1.916 6.12-4.824 6.867-6.464.878-1.928 2.813-3.258 5.478-3.764 4.595-.875 10.567-5.484 11.96-9.23.873-2.353 5.09-5.89 13.647-11.443 3.018-1.96 4.628-4.515 6.628-10.524 2.604-7.826 6.955-13.07 17.823-21.48 1.89-1.463 3.438-3.884 3.438-5.38 0-1.703 5.35-8.68 14.335-18.698l14.335-15.98 9.103-1.007c5.007-.554 11.7-1.16 14.873-1.347 8.623-.507 13.856-3.255 19.937-10.467 3.013-3.573 7.38-7.29 9.707-8.263 2.325-.972 7.496-4.598 11.49-8.058 7.54-6.532 19.55-12.68 34.017-17.413 8.054-2.635 13.454-7.142 13.454-11.227 0-2.413 11.565-12.306 17.798-15.225 3.274-1.534 5.952-3.297 5.952-3.918 0-.622 4.578-5.726 10.173-11.344 5.595-5.617 10.99-11.46 11.987-12.982.998-1.523 3.03-3.148 4.515-3.61 1.486-.465 5.232-2.92 8.326-5.46 3.094-2.54 8.126-5.6 11.184-6.796 3.057-1.198 10.163-5.773 15.79-10.168 8.178-6.385 11.413-9.947 16.098-17.724 6.92-11.49 9.812-15.61 16.856-24.022 4.145-4.95 6.423-9.74 10.873-22.863 3.095-9.128 5.958-19.69 6.362-23.473.403-3.78 2.675-11.656 5.05-17.5 5.742-14.14 6.697-17.116 7.624-23.75l.787-5.625 9.375-.625c11.38-.758 18.757-4.292 22.888-10.963 1.587-2.564 5.36-10.005 8.382-16.537 3.023-6.53 6.46-13.304 7.636-15.05 5.274-7.822 7.343-17.9 7.362-35.848.013-11.168.562-18.295 1.563-20.26.848-1.67 6.324-7.164 12.168-12.213 5.844-5.05 14.872-13.37 20.063-18.49 7.586-7.484 10.286-9.382 13.75-9.664l4.313-.35.112 12.068c.06 6.64.82 13.784 1.69 15.878 2.127 5.14 6.82 8.17 10.004 6.466 1.32-.707 4.678-1.287 7.457-1.287 8.138 0 9.444 3.17 9.683 23.517l.198 16.755 5.417 7.988c2.98 4.394 6.195 7.99 7.145 7.99.95 0 7.084-5.122 13.63-11.38 14.156-13.533 18.192-16.227 22.897-15.286 2.956.59 3.866.01 6.486-4.14 2.022-3.204 3.354-7.688 3.957-13.32.805-7.518 1.45-9.058 5.61-13.433 8.113-8.53 13.098-6.05 12.394 6.162-.235 4.092-.008 7.86.508 8.376.515.515.936 3.393.936 6.397 0 4.793.267 5.324 2.188 4.342 5.524-2.823 10.445-2.744 14.473.232 2.18 1.61 4.947 3.274 6.15 3.698 1.578.556 2.188 2.13 2.188 5.64 0 4.82.05 4.868 4.688 4.727 4.675-.142 4.688-.128 5.082 5.382.61 8.556-.48 10.803-7.266 14.98-4.858 2.99-6.254 4.557-6.254 7.028 0 1.75-.942 4.617-2.093 6.374-1.653 2.523-2.806 3.05-5.494 2.512-3.13-.626-3.443-.324-3.924 3.792-.42 3.594.133 5.116 2.813 7.755 2.163 2.13 3.846 5.706 4.792 10.185.93 4.4 2.355 7.463 3.932 8.448 2 1.25 2.474 2.924 2.474 8.736 0 6.46-.587 8.076-5.788 15.926-3.183 4.805-7.09 10.143-8.68 11.86-3.976 4.293-11.782 19.55-11.782 23.027 0 1.588-2.347 5.45-5.312 8.744-2.922 3.244-7.86 9.628-10.976 14.186-4.05 5.93-7.56 9.4-12.33 12.202-7.602 4.464-8.252 5.356-9.53 13.092-.51 3.094-3.325 10.407-6.256 16.25-2.93 5.844-6.606 13.72-8.166 17.5-3.552 8.61-8.07 14.83-11.797 16.247-1.578.6-3.084 1.734-3.346 2.52-.45 1.348-7.5 5.626-21.66 13.144-10.1 5.36-19.045 20.68-17.268 29.568.393 1.966 1.205 3.876 1.804 4.246.598.37 1.088 1.653 1.088 2.85s.703 3.69 1.563 5.54c1.217 2.62 2.446 3.368 5.555 3.376 2.337.01 4.668.916 5.625 2.197 1.138 1.525 3.442 2.212 7.607 2.268 9.137.124 10.194 1.855 10.705 17.54.41 12.587.282 13.37-2.932 18.01-3.123 4.506-9.56 7.722-11.525 5.758-.4-.398-1.422.23-2.274 1.395-1.425 1.95-2.165 1.795-9.33-1.96-7.663-4.018-7.998-4.074-22.323-3.7-11.464.297-14.94.807-16.42 2.405-1.03 1.115-6.093 3.294-11.25 4.842-5.155 1.547-11.624 4.35-14.374 6.225-2.75 1.877-10.77 6.36-17.82 9.966-15.19 7.765-29.268 17.62-39.874 27.915-6.602 6.406-7.816 8.29-8.538 13.246-.463 3.178-2.16 8.872-3.772 12.653-2.242 5.26-3.118 10.254-3.73 21.25-1.457 26.185-2.305 31.435-6.006 37.188-1.88 2.922-3.963 5.312-4.63 5.312-.668 0-2.65 2.672-4.408 5.938-1.757 3.265-4.58 7.85-6.274 10.19-3.73 5.15-5.147 10.13-6.61 23.247-1.155 10.347-3.445 16.274-10.847 28.074-3.96 6.31-4.13 6.99-2.284 9.03 1.255 1.387 2.228 5.434 2.62 10.893.526 7.364.215 9.342-2.043 12.995-2.727 4.412-3.536 4.76-19.433 8.376-12.428 2.828-17.547 7.453-22.143 20.007-2.045 5.588-12.063 16.27-21.753 23.196-10.438 7.46-11.61 9.028-12.06 16.148-.37 5.804-.655 6.276-4.468 7.363-2.542.725-5.058 2.752-6.685 5.384-3.116 5.042-8.188 7.91-13.986 7.91-2.58 0-5.086.93-6.39 2.37-1.178 1.303-3.656 2.675-5.505 3.05-8.282 1.674-11.07 2.636-14.08 4.854-2.743 2.023-3.713 2.148-6.563.85-2.563-1.168-4.088-1.185-6.528-.072-3.56 1.622-3.62 1.622-12.76-.045zm537.403-602.63c-.742-.893-1.69-4.127-2.107-7.187-1.356-9.935-1.71-10.647-6.67-13.436-6.015-3.38-7.083-3.404-11.09-.252-1.75 1.375-4.2 2.5-5.447 2.5-2.432 0-8.62-7.21-8.683-10.118-.027-1.244-.41-1.118-1.312.43-.9 1.547-2.85 2.188-6.643 2.188-7.673 0-9.934-2.94-10.542-13.704l-.482-8.52 7.095-9.425c3.902-5.185 8.46-10.322 10.132-11.417 2.91-1.907 11.776-17.654 11.805-20.966.008-.877 3.69-8.004 8.182-15.837 8.807-15.358 10.085-20.084 11.434-42.29.616-10.146.566-10.367-3.665-16.25-2.36-3.282-4.974-7.693-5.81-9.802-.836-2.11-4.928-6.835-9.095-10.503-6.66-5.86-8.654-6.886-16.505-8.477-4.91-.996-10.063-2.852-11.447-4.125-1.384-1.274-4.677-3.218-7.317-4.32-2.64-1.104-8.54-5.83-13.11-10.5-9.33-9.542-13.125-11.853-23.557-14.35-10.727-2.57-18.15-6.183-23.78-11.58-4.33-4.15-5.21-5.94-6.43-13.037-2.31-13.428-1.862-25.242 1.094-29 3.624-4.607 16.162-12.848 23.166-15.225 3.31-1.124 9.154-3.946 12.985-6.27 3.83-2.325 9.31-4.905 12.177-5.733 6.903-1.993 15.737-11.092 19.08-19.653 1.836-4.696 2.583-9.47 2.583-16.5 0-10.98 1.8-21.193 4.738-26.89 1.34-2.6 1.965-7.59 2.036-16.25.095-11.783.255-12.523 2.775-12.882 2.59-.37 2.653-.805 2.005-13.508-.623-12.202-.473-13.393 2.132-16.916 3.047-4.12 2.894-8.64-.512-15.167-.996-1.91-3.223-8.773-4.948-15.253-1.724-6.48-5.174-15.83-7.665-20.777-2.75-5.458-4.8-11.606-5.216-15.636-.635-6.152-.87-6.544-3.162-5.317-3.747 2.006-5.467-.65-7.79-12.026-1.12-5.49-3.072-12.32-4.338-15.18-1.265-2.86-2.682-6.94-3.15-9.067-.466-2.127-1.36-4.182-1.983-4.568-.623-.385-3.393-4.568-6.153-9.295-3.98-6.815-5.02-9.843-5.02-14.634v-6.04l-5.337.424c-7.21.573-8.536-1.07-21.525-26.657-2.443-4.812-6.387-11.28-8.765-14.375-2.377-3.094-8.002-10.687-12.5-16.875-4.496-6.187-10.976-14.847-14.4-19.244-3.42-4.397-6.227-8.897-6.234-10-.013-2.2-7.876-12.655-10.724-14.26-.98-.554-2.983-3.36-4.45-6.24-1.47-2.877-4.84-7.805-7.492-10.95-4.365-5.175-4.822-6.394-4.822-12.852 0-6.353.334-7.286 3.056-8.526 1.68-.766 3.393-2.268 3.803-3.34 1.032-2.688-5.82-16.165-11.605-22.83-2.632-3.03-5.74-6.915-6.907-8.634-1.167-1.72-6.36-7.438-11.54-12.71l-9.416-9.586.366-9.79.367-9.79 6.25-.12c3.438-.066 9.837-1.06 14.22-2.21 10.37-2.717 11.41-1.89 11.386 9.047-.01 4.555-.533 9.094-1.16 10.084-1.462 2.31 1.17 7.49 7.98 15.7 2.85 3.437 6.75 8.378 8.664 10.98l3.48 4.733 2.363-3.005c2.733-3.475 9.486-5.268 11.995-3.185 1.043.865 1.696 3.994 1.696 8.13 0 3.696.517 6.72 1.148 6.72.63 0 1.9.29 2.82.643.946.363 2.216-.59 2.918-2.187 1.004-2.287 2.2-2.813 6.24-2.74 2.75.048 6.687 1.006 8.75 2.127 2.062 1.12 7.238 3.812 11.503 5.978 4.265 2.167 8.637 5.288 9.716 6.935 1.303 1.99 3.148 2.995 5.49 2.995 4.99 0 7.662 3.513 7.682 10.1.01 3.038.34 6.724.732 8.19.685 2.55.883 2.49 4.67-1.387 2.176-2.227 4.6-5.113 5.39-6.413 2.435-4.015 5.576-.593 11.128 12.124 2.824 6.47 7.68 15.476 10.793 20.015 4.98 7.263 5.773 9.36 6.623 17.5.532 5.086 1.035 13.748 1.12 19.248l.153 10-3.943-.005-3.942-.005 2.44 3.13c8.153 10.46 10.394 13.767 13.13 19.38 1.743 3.57 4.762 7.33 7.044 8.767 2.196 1.384 4.198 3.634 4.45 5 .25 1.365 1.27 3.404 2.267 4.53 2.66 3.006 1.815 16.073-1.134 17.51l-4.375 2.133c-2.58 1.257-3.553 5.91-1.7 8.144.718.864 1.688 7.02 2.156 13.68l.85 12.11h3.61c1.986 0 4.992.907 6.68 2.014 4.67 3.06 6.842 1.49 6.842-4.945 0-5.836 2.12-8.864 5.34-7.628 1.05.402 2.28.13 2.732-.604.454-.734 1.83-1.335 3.058-1.335 4.09 0 6.1 4.018 7.02 14.037.704 7.654 1.482 10.254 3.743 12.516 1.57 1.57 4.083 6.895 5.583 11.832 3.08 10.14 4.626 11.968 9.637 11.394 5.49-.63 5.434-6.595-.154-16.588-5.484-9.806-6.2-19.3-1.805-23.978 3.53-3.755 2.444-7.807-3.944-14.738-4.617-5.008-4.958-5.89-4.958-12.8 0-8.082 1.356-10.424 6.036-10.424 5.605 0 18.766 14.313 18.965 20.625.042 1.375.854 3.525 1.804 4.778 1.662 2.193 1.96 2.195 7.967.062 8.4-2.983 10.228-1.52 10.228 8.19 0 3.902.61 7.706 1.355 8.45.746.747 1.665 4.938 2.042 9.314.377 4.376 1.18 8.586 1.786 9.355.606.77 1.627 6.676 2.27 13.126.642 6.45 1.778 13.696 2.524 16.102.746 2.406 1.707 11.01 2.134 19.122.65 12.35 1.14 14.94 2.997 15.935 1.79.96 2.297.645 2.62-1.622.608-4.287 5.286-3.78 5.794.628.305 2.663 1.056 3.438 3.333 3.438 3.128 0 24.16 7.73 29.395 10.802 1.72 1.01 5.094 2.703 7.5 3.766 2.406 1.062 5.22 2.634 6.25 3.493 1.03.858 8.49 3.96 16.576 6.89 8.086 2.932 15.014 5.838 15.397 6.457.384.62 2.88 2.24 5.55 3.602 3.79 1.933 5.566 2.203 8.12 1.23 1.8-.683 5.825-1.242 8.946-1.242 4.004 0 6.72-.83 9.216-2.812 1.947-1.547 4.934-3.788 6.637-4.98 2.923-2.044 11.25-12.367 16.2-20.08 2.872-4.476 9.25-8.367 13.724-8.373 2.437-.004 5.408-1.798 9.838-5.942l6.347-5.937h9.714c7.07 0 10.347.54 12.037 1.987 1.278 1.092 6.158 3.584 10.846 5.536 10.98 4.573 13.352 7.562 13.352 16.827 0 5.374-.575 7.658-2.328 9.244-1.28 1.16-3.89 7.012-5.798 13.007-1.91 5.994-4.236 12.672-5.172 14.838-.936 2.166-1.702 5.545-1.702 7.508s-.596 5.535-1.324 7.936c-.728 2.402-1.285 11.22-1.236 19.597.053 9.16-.424 15.547-1.195 16.023-.706.436-2.11 2.774-3.122 5.194-4.035 9.66-17.22 21.678-23.783 21.678-3.828 0-4.285.445-6.102 5.938-1.08 3.265-2.302 8.468-2.716 11.562-.715 5.336-.49 5.882 4.34 10.625 4.67 4.58 5.098 5.55 5.117 11.56.018 5.69-.533 7.178-4.174 11.25-2.307 2.58-4.858 5.956-5.67 7.503-3.46 6.602-7.635 1.274-7.635-9.746 0-5.637-.284-6.224-3.437-7.106-1.89-.528-11.324-.96-20.963-.96H930.37l-6.848 4.487c-3.767 2.47-8.694 5.554-10.95 6.856-5.608 3.236-14.193 14.95-15.966 21.782-2.533 9.76 1.37 15.62 9.833 14.774 3.954-.396 3.986-.354 4.388 5.85.522 8.07-1.122 13.46-8.775 28.75-4.516 9.026-6.596 14.92-7.48 21.202-1.475 10.456-5.48 17.816-13.166 24.184-7.295 6.046-9.11 9.797-9.11 18.832 0 6.21-.544 8.114-3.235 11.312-1.78 2.115-4.003 3.846-4.94 3.846-3.893 0-7.848 2.934-8.526 6.325-.39 1.947-4.008 7.99-8.04 13.43-4.41 5.947-7.994 12.327-8.99 16.004-2.13 7.866-4.573 12.833-8.237 16.76-1.615 1.727-3.823 5.665-4.908 8.75-1.085 3.083-3.638 7.682-5.674 10.22-2.035 2.538-3.7 5.46-3.7 6.494 0 1.035-2.17 3.46-4.824 5.387-2.653 1.928-9.236 7.083-14.63 11.455-5.39 4.372-10.674 8.268-11.737 8.658-1.064.39-4.465 2.94-7.56 5.668-5.406 4.767-19.31 12.1-22.943 12.1-.963 0-2.357-.73-3.098-1.624zm-43.958-509.7c0-1.414-.562-2.225-1.25-1.8-.687.425-1.25 1.583-1.25 2.574 0 .99.563 1.8 1.25 1.8.688 0 1.25-1.157 1.25-2.573zm-28.75-58.05c0-1.03-.913-1.875-2.028-1.875-1.66 0-1.746.34-.472 1.875.856 1.03 1.77 1.875 2.028 1.875.26 0 .472-.844.472-1.875zm-12.5-13.75c0-3.032-.644-4.252-2.5-4.737-2.215-.58-2.5-.04-2.5 4.737 0 4.776.285 5.316 2.5 4.737 1.856-.485 2.5-1.705 2.5-4.737zm105.625 4.438c-1.375-.565-5.245-3.454-8.6-6.418l-6.098-5.39.85-12.337c1.04-15.11 2.227-18.737 5.953-18.19 1.8.262 3.06 1.646 3.7 4.064.537 2.015 2.406 4.827 4.153 6.25 2.148 1.745 3.536 4.545 4.282 8.63.607 3.325 1.73 6.672 2.495 7.437 1.863 1.863 1.78 13.752-.11 15.64-1.708 1.71-3.074 1.775-6.624.314zm-33.583-13.627c-2.38-2.63-2.817-13.308-.602-14.677 2.397-1.482 4.81 3.362 4.81 9.657 0 6.768-1.263 8.274-4.208 5.02z\"\n       id=\"path6731\"\n       fill=\"#8ee7ef\" />\n    <path\n       d=\"m 91.138,1469.42 c -2.47,-1.9 -3.136,-3.732 -3.58,-9.85 -0.504,-6.976 -0.31,-7.67 2.66,-9.618 3.01,-1.972 4.537,-5.208 6.387,-13.54 0.55,-2.477 2.063,-4.054 5.113,-5.328 3.617,-1.51 4.33,-2.446 4.33,-5.675 0,-2.246 1.245,-5.345 2.97,-7.394 2.923,-3.475 3.253,-9.054 0.63,-10.675 -0.605,-0.373 -1.1,-3.68 -1.1,-7.35 0,-5.633 0.563,-7.27 3.627,-10.55 3.035,-3.25 4.56,-3.882 9.346,-3.882 4.884,0 6.036,0.503 7.88,3.438 3.474,5.53 10.55,13.21 15.012,16.295 3.588,2.48 4.136,3.565 4.136,8.188 0,2.932 -0.703,6.088 -1.562,7.014 -1.28,1.38 -1.14,1.534 0.783,0.853 4.28,-1.515 5.778,1.382 5.778,11.178 0,8.868 -0.128,9.255 -4.062,12.23 -2.235,1.692 -6.557,3.738 -9.605,4.55 -3.047,0.81 -9.05,3.133 -13.34,5.16 -4.676,2.21 -9.468,3.577 -11.96,3.414 -5.845,-0.384 -11.31,2.62 -13.602,7.475 -1.738,3.682 -4.392,6.434 -6.18,6.41 -0.344,0 -1.99,-1.06 -3.66,-2.343 z m 10.448,-64.264 c -1.322,-3.445 -0.02,-10.223 1.962,-10.223 1.384,0 1.875,1.447 1.875,5.52 0,5.504 -2.4,8.446 -3.837,4.703 z m 112.267,-13.593 c -4.342,-0.792 -7.004,-2.01 -7.85,-3.59 -1.782,-3.328 -6.936,-5.68 -14.6,-6.657 -4.32,-0.552 -7.345,-0.317 -8.97,0.698 -1.91,1.192 -3.172,1.2 -5.726,0.037 -5.273,-2.402 -10.26,-1.906 -11.045,1.1 -1.82,6.96 -13.364,-1.863 -13.364,-10.216 0,-3.596 -3.02,-16.432 -4.384,-18.64 -1.264,-2.047 -4.655,-1.4 -7.71,1.468 -2.647,2.488 -3.27,2.576 -7.76,1.094 -4.197,-1.385 -5.457,-1.326 -8.957,0.42 -5.127,2.558 -9.84,2.588 -13.41,0.086 -2.334,-1.634 -2.78,-3.12 -2.78,-9.264 0,-6.66 -0.35,-7.613 -3.9,-10.6 -4.237,-3.566 -11.41,-6.94 -14.752,-6.94 -3.77,0 -8.742,3.07 -9.11,5.625 -0.323,2.23 -1.69,2.602 -12.638,3.442 -9.68,0.743 -15.735,0.413 -28.622,-1.563 -8.99,-1.378 -17.107,-3.136 -18.037,-3.908 -1.028,-0.853 -1.69,-3.978 -1.69,-7.98 0,-5.524 -0.4,-6.68 -2.5,-7.23 -1.984,-0.518 -2.5,-1.704 -2.5,-5.743 0,-4.902 -0.11,-5.04 -2.967,-3.737 -4.8100002,2.19 -7.7980002,-0.284 -8.8080002,-7.297 -1.77999995,-12.363 -2.23799995,-20.357 -1.28599995,-22.51 0.53999995,-1.223 0.83999995,-4.854 0.66399995,-8.068 -0.24699995,-4.534 0.39,-6.886 2.835,-10.486 3.894,-5.73 9.0960002,-9.276 13.6260002,-9.286 3.04,-0.013 3.44,-0.48 3.456,-4.07 0.035,-7.674 10.723,-32.41 14.99,-34.693 1.37,-0.734 2.492,-2.46 2.492,-3.84 0,-4.262 4.617,-11.64 9.19,-14.687 2.536,-1.69 5.183,-4.953 6.318,-7.79 1.074,-2.686 3.087,-5.592 4.473,-6.457 1.384,-0.866 2.518,-2.093 2.518,-2.726 0,-3.044 8.002,-13.066 12.91,-16.167 3.03,-1.916 6.12,-4.824 6.867,-6.464 0.878,-1.928 2.813,-3.258 5.478,-3.764 4.595,-0.875 10.567,-5.484 11.96,-9.23 0.873,-2.353 5.09,-5.89 13.647,-11.443 3.018,-1.96 4.628,-4.515 6.628,-10.524 2.604,-7.826 6.955,-13.07 17.823,-21.48 1.89,-1.463 3.438,-3.884 3.438,-5.38 0,-1.703 5.35,-8.68 14.335,-18.698 l 14.335,-15.98 9.103,-1.007 c 5.007,-0.554 11.7,-1.16 14.873,-1.347 8.623,-0.507 13.856,-3.255 19.937,-10.467 3.013,-3.573 7.38,-7.29 9.707,-8.263 2.325,-0.972 7.496,-4.598 11.49,-8.058 7.54,-6.532 19.55,-12.68 34.017,-17.413 8.054,-2.635 13.454,-7.142 13.454,-11.227 0,-2.413 11.565,-12.306 17.798,-15.225 3.274,-1.534 5.952,-3.297 5.952,-3.918 0,-0.622 4.578,-5.726 10.173,-11.344 5.595,-5.617 10.99,-11.46 11.987,-12.982 0.998,-1.523 3.03,-3.148 4.515,-3.61 1.486,-0.465 5.232,-2.92 8.326,-5.46 3.094,-2.54 8.126,-5.6 11.184,-6.796 3.057,-1.198 10.163,-5.773 15.79,-10.168 8.178,-6.385 11.413,-9.947 16.098,-17.724 6.92,-11.49 9.812,-15.61 16.856,-24.022 4.145,-4.95 6.423,-9.74 10.873,-22.863 3.095,-9.128 5.958,-19.69 6.362,-23.473 0.403,-3.78 2.675,-11.656 5.05,-17.5 5.742,-14.14 6.697,-17.116 7.624,-23.75 l 0.787,-5.625 9.375,-0.625 c 11.38,-0.758 18.757,-4.292 22.888,-10.963 1.587,-2.564 5.36,-10.005 8.382,-16.537 3.023,-6.53 6.46,-13.304 7.636,-15.05 5.274,-7.822 7.343,-17.9 7.362,-35.848 0.013,-11.168 0.562,-18.295 1.563,-20.26 0.848,-1.67 6.324,-7.164 12.168,-12.213 5.844,-5.05 14.872,-13.37 20.063,-18.49 7.586,-7.484 10.286,-9.382 13.75,-9.664 l 4.313,-0.35 0,11.874 c 0,13.103 1.65,18.746 6.39,21.852 2.238,1.466 3.627,1.64 5.416,0.684 1.32,-0.707 4.678,-1.287 7.457,-1.287 8.17,0 9.475,3.192 9.536,23.302 l 0.05,16.534 5.565,8.207 c 3.06,4.514 6.342,8.207 7.292,8.207 0.95,0 7.084,-5.12 13.63,-11.38 14.156,-13.532 18.192,-16.226 22.897,-15.285 2.956,0.59 3.866,0.01 6.486,-4.14 2.022,-3.204 3.354,-7.688 3.957,-13.32 0.805,-7.518 1.45,-9.058 5.61,-13.433 7.015,-7.375 12.593,-6.27 12.583,2.495 -0.002,2.44 -1.113,6.256 -2.47,8.48 l -2.464,4.042 2.78,-0.292 c 2.483,-0.26 2.824,0.35 3.164,5.652 0.33,5.122 0.675,5.795 2.5,4.864 5.462,-2.786 10.394,-2.694 14.405,0.27 2.18,1.61 4.947,3.274 6.15,3.698 1.578,0.556 2.188,2.13 2.188,5.64 0,4.82 0.05,4.868 4.688,4.727 4.272,-0.13 4.723,0.175 5.097,3.446 0.73,6.386 -0.822,9.192 -7.28,13.166 -4.86,2.99 -6.255,4.558 -6.255,7.03 0,1.748 -0.942,4.616 -2.093,6.373 -1.68,2.565 -2.786,3.054 -5.625,2.486 -2.858,-0.57 -3.532,-0.265 -3.532,1.606 0,1.272 -0.336,3.99 -0.746,6.043 -0.606,3.03 -0.054,4.407 2.943,7.343 2.535,2.483 4.146,5.774 5.147,10.517 0.93,4.4 2.355,7.463 3.932,8.448 1.835,1.147 2.474,2.918 2.474,6.86 0,4.23 -1.18,7.1 -5.787,14.053 -3.183,4.805 -7.09,10.143 -8.68,11.86 -3.976,4.293 -11.782,19.55 -11.782,23.027 0,1.588 -2.347,5.45 -5.312,8.744 -2.922,3.244 -7.86,9.628 -10.976,14.186 -4.05,5.93 -7.56,9.4 -12.33,12.202 -7.602,4.464 -8.252,5.356 -9.53,13.092 -0.51,3.094 -3.325,10.407 -6.256,16.25 -2.93,5.844 -6.606,13.72 -8.166,17.5 -3.552,8.61 -8.07,14.83 -11.797,16.247 -1.578,0.6 -3.084,1.734 -3.346,2.52 -0.45,1.348 -7.5,5.626 -21.66,13.144 -6.932,3.68 -13.93,12.583 -16.593,21.115 -1.653,5.297 -1.03,15.114 1.04,16.394 0.648,0.4 1.178,1.708 1.178,2.905 0,1.197 0.703,3.69 1.563,5.54 1.217,2.62 2.447,3.368 5.555,3.376 2.337,0.01 4.668,0.916 5.625,2.197 1.138,1.525 3.442,2.212 7.607,2.268 8.864,0.12 10.185,2.05 10.715,15.65 0.412,10.564 0.228,11.574 -2.932,16.134 -3.133,4.52 -9.567,7.742 -11.535,5.774 -0.4,-0.398 -1.422,0.23 -2.274,1.395 -1.425,1.95 -2.165,1.795 -9.33,-1.96 -7.663,-4.018 -7.998,-4.074 -22.323,-3.7 -11.464,0.297 -14.94,0.807 -16.42,2.405 -1.03,1.115 -6.093,3.294 -11.25,4.842 -5.155,1.547 -11.624,4.35 -14.374,6.225 -2.75,1.877 -10.77,6.36 -17.82,9.966 -15.19,7.765 -29.268,17.62 -39.874,27.915 -6.61,6.413 -7.814,8.284 -8.53,13.246 -0.458,3.178 -2.244,8.872 -3.968,12.653 -2.59,5.682 -3.217,9.263 -3.61,20.625 -0.81,23.395 -2.144,31.88 -5.948,37.813 -1.874,2.922 -3.953,5.312 -4.62,5.312 -0.668,0 -2.65,2.672 -4.408,5.938 -1.757,3.265 -4.58,7.85 -6.274,10.19 -3.744,5.168 -5.147,10.127 -6.633,23.444 -1.163,10.412 -2.316,13.3 -11.872,29.71 l -4.804,8.252 2.676,2.17 c 4.162,3.374 4.987,14.967 1.47,20.657 -2.73,4.418 -3.536,4.766 -19.436,8.38 -12.428,2.828 -17.547,7.453 -22.143,20.007 -2.045,5.588 -12.063,16.27 -21.753,23.196 -10.438,7.46 -11.61,9.028 -12.06,16.148 -0.37,5.804 -0.655,6.276 -4.468,7.363 -2.542,0.725 -5.058,2.752 -6.684,5.384 -3.117,5.042 -8.19,7.91 -13.987,7.91 -2.58,0 -5.086,0.93 -6.39,2.37 -1.178,1.303 -3.656,2.675 -5.505,3.05 -8.282,1.674 -11.07,2.636 -14.08,4.854 -2.743,2.023 -3.713,2.148 -6.563,0.85 -2.563,-1.168 -4.088,-1.185 -6.528,-0.072 -3.56,1.622 -3.62,1.622 -12.76,-0.045 z m -152.42,-82.79 c -0.73,-9.42 -1.24,-11.107 -3.032,-10 -0.93,0.576 -1.205,3.786 -0.805,9.378 0.34,4.744 0.07,9.042 -0.61,9.722 -0.67,0.67 -0.794,1.906 -0.274,2.747 0.678,1.095 1.564,0.71 3.128,-1.365 1.707,-2.263 2.055,-4.546 1.595,-10.483 z m -24.148,-8.826 c 4.026,-4.285 0.854,-5.157 -4.342,-1.194 -2.404,1.833 -4.094,3.78 -3.756,4.327 0.987,1.598 5.176,-0.023 8.098,-3.133 z m 42.953,2.16 c 0.906,-1.465 -5.83,-10.733 -8.922,-12.275 -1.513,-0.754 -3.824,-2.342 -5.135,-3.53 -1.678,-1.518 -2.644,-1.735 -3.264,-0.733 -1.017,1.645 4.02,7.488 6.457,7.488 0.902,0 3.13,2.25 4.948,5 3.252,4.91 4.75,5.938 5.918,4.05 z m 10.705,-17.066 c 5.625,-5.802 3.852,-8.68 -1.908,-3.098 -4.103,3.977 -4.286,4.028 -6.025,1.67 -1.355,-1.835 -2.15,-2.078 -3.253,-0.99 -1.11,1.092 -0.83,2.065 1.166,4.06 3.587,3.588 5.21,3.322 10.02,-1.64 z m -82.3950002,-9.482 c 2.2850002,-1.477 0.31,-1.477 -3.125,0 -1.648,0.708 -1.86,1.098 -0.625,1.143 1.03,0.038 2.72,-0.475 3.75,-1.142 z M 100.655,1247.841 c 3.54,-3.326 3.627,-4.98 0.413,-7.89 -2.02,-1.827 -3.875,-2.116 -10.018,-1.56 -6.54,0.594 -7.708,0.37 -8.812,-1.693 -1.195,-2.235 -1.524,-2.133 -5.446,1.68 -4.684,4.553 -3.924,7.483 1.09,4.198 2.847,-1.865 3.295,-1.887 3.947,-0.186 0.404,1.055 0.42,2.744 0.03,3.753 -1.036,2.704 1.82,3.886 3.578,1.48 2.106,-2.88 6.424,-2.62 7.222,0.435 0.857,3.275 4.38,3.18 7.995,-0.218 z m 13.98,-27.06 c 1.94,-3.904 4.202,-11.287 5.024,-16.407 0.82,-5.12 2.107,-10.05 2.857,-10.953 0.75,-0.903 1.563,-3.367 1.81,-5.475 0.244,-2.107 1.416,-5.475 2.602,-7.483 1.987,-3.366 1.997,-3.81 0.132,-5.676 -2.317,-2.317 -5.008,-1.257 -4.625,1.82 0.38,3.058 -1.398,8.653 -3.235,10.178 -1.066,0.885 -2.65,0.928 -4.748,0.13 -4.183,-1.59 -5.23,-0.276 -2.335,2.926 1.288,1.426 2.685,4.42 3.104,6.656 0.968,5.16 -0.872,5.292 -9.926,0.708 -5.708,-2.89 -7.075,-3.15 -9.883,-1.87 -3.834,1.747 -2.98,4.3 1.095,3.278 4.06,-1.02 11.558,6.17 12.672,12.15 1.942,10.42 -3.765,12.922 -13.768,6.04 -3.054,-2.102 -5.79,-3.223 -6.21,-2.546 -1.118,1.81 10.717,9.985 14.51,10.02 2.28,0.022 3.504,0.84 3.98,2.658 0.972,3.72 2.863,2.042 6.94,-6.154 z m 84.048,-17.722 c 0.2,-6.443 -0.25,-11.696 -1.147,-13.347 -0.814,-1.496 -1.16,-3.548 -0.773,-4.56 1.173,-3.057 -1.526,-3.512 -5.93,-1 -2.29,1.304 -6.512,2.658 -9.388,3.01 l -5.228,0.638 -3.283,-6.936 c -1.906,-4.025 -3.122,-8.516 -2.898,-10.702 0.42,-4.082 -1.538,-5.68 -3.727,-3.04 -2.117,2.55 1.07,19.225 4.385,22.947 3.14,3.524 7.955,3.866 14.71,1.043 2.565,-1.072 4.79,-1.775 4.943,-1.563 3.89,5.373 4.45,7.315 4.45,15.456 0,4.89 0.384,9.273 0.854,9.743 1.844,1.843 2.712,-1.507 3.03,-11.688 z m 35.334,-65.252 c -0.397,-0.643 -1.44,-0.893 -2.318,-0.556 -1.84,0.706 -4.402,-1.468 -4.402,-3.734 0,-0.848 1.803,-4.442 4.007,-7.987 3.635,-5.848 4.01,-7.39 4.062,-16.646 0.044,-8.032 -0.323,-10.2 -1.73,-10.2 -2.205,0 -3.623,5.03 -4.01,14.233 -0.212,5.07 -1.114,8.144 -3.25,11.08 -4.113,5.65 -6.885,12.715 -5.942,15.145 0.723,1.863 0.93,1.853 2.384,-0.12 1.48,-2.01 1.796,-1.944 4.5,0.935 2.713,2.887 3.064,2.96 5.165,1.057 1.24,-1.122 1.93,-2.566 1.532,-3.208 z m 99.937,-1.82 c 1.266,-1.267 -1.685,-4.178 -4.235,-4.178 -3.542,0 -4.152,2.393 -0.94,3.68 3.64,1.46 4.16,1.51 5.174,0.498 z m -86.99,-11.13 c 0.193,-4.92 1.08,-8.442 2.663,-10.584 4.59,-6.21 9.163,-16.472 7.9,-17.735 -0.79,-0.79 -2.69,1.572 -5.41,6.714 -3.46,6.542 -4.85,8.043 -7.944,8.57 -2.062,0.35 -3.723,1.195 -3.69,1.875 0.14,2.93 2.043,16.383 2.53,17.905 0.296,0.916 1.24,1.433 2.098,1.148 0.968,-0.32 1.674,-3.327 1.853,-7.89 z m 78.354,-9.51 c 0.525,-6.168 0.352,-9.874 -0.486,-10.392 -0.716,-0.442 -1.603,-0.02 -1.972,0.942 -1.06,2.76 -2.79,20.173 -2.12,21.345 1.553,2.72 3.84,-3.22 4.578,-11.894 z m -183.065,-1.187 c -1.006,-2.813 -2.392,-4.915 -3.08,-4.67 -1.42,0.503 -1.1,4.66 0.73,9.47 0.95,2.497 1.58,2.912 2.71,1.784 1.128,-1.13 1.044,-2.663 -0.36,-6.585 z m 156.645,-19.368 c 0.42,-0.422 -0.365,-2.296 -1.747,-4.165 -1.38,-1.87 -2.714,-4.478 -2.96,-5.796 -0.248,-1.318 -0.494,-2.606 -0.546,-2.862 -0.318,-1.546 -3.846,3.075 -3.846,5.037 0,5.34 6.222,10.664 9.1,7.787 z m 23.22,-13.707 c 2.304,-1.15 3.6,-2.552 3.1,-3.357 -0.47,-0.762 -1.282,-6.898 -1.804,-13.637 -1.044,-13.482 -1.707,-15.635 -4.183,-13.58 -2.636,2.19 -3.967,32.548 -1.425,32.548 0.197,0 2.14,-0.888 4.314,-1.973 z m 28.378,-24.418 c 2.223,-4.298 3.82,-16.05 2.612,-19.203 -0.614,-1.6 -1.292,-1.736 -3.29,-0.666 -2.09,1.118 -2.52,2.61 -2.52,8.723 0,4.057 -0.527,8.76 -1.17,10.453 -1.144,3.01 -0.68,4.585 1.346,4.585 0.556,0 1.915,-1.75 3.022,-3.89 z m 87.226,-75.796 c 0.314,-0.515 -1.056,-2.88 -3.044,-5.256 -4.74,-5.664 -7.413,-3.663 -2.867,2.146 3.15,4.025 4.82,4.903 5.912,3.11 z m -6.78,-81.874 c 1.14,-3.02 0.694,-4.688 -1.258,-4.688 -1.41,0 -3.61,5.173 -2.79,6.563 1.063,1.807 2.994,0.913 4.048,-1.874 z m 139.802,-51.883 c 1.308,-5.384 0.375,-7.815 -1.91,-4.98 -1.762,2.19 -3.137,9.347 -2.112,11.003 1.24,2.008 2.548,0.05 4.022,-6.023 z m 53.117,-12.47 c 5.33,-3.716 9.688,-7.248 9.688,-7.847 0,-1.767 -2.257,-2.642 -3.138,-1.217 -0.446,0.72 -5.27,4.435 -10.718,8.253 -5.45,3.818 -9.584,7.465 -9.19,8.104 0.86,1.393 1.073,1.277 13.36,-7.293 z m -93.327,-26.07 c -2.36,-4.823 -3.856,-6.643 -4.735,-5.765 -0.878,0.88 -0.22,3.535 2.088,8.412 2.435,5.146 3.75,6.75 4.736,5.765 0.984,-0.985 0.403,-3.323 -2.09,-8.412 z m 114.265,-89.01 c 0,-2.826 -0.048,-2.836 -3.086,-0.626 -3.915,2.85 -3.922,3.496 -0.04,3.496 2.427,0 3.126,-0.642 3.126,-2.87 z m 106.458,69.37 c -0.742,-0.893 -1.69,-4.127 -2.107,-7.187 -1.356,-9.935 -1.71,-10.647 -6.67,-13.436 -6.015,-3.38 -7.083,-3.404 -11.09,-0.252 -1.75,1.375 -4.2,2.5 -5.447,2.5 -2.432,0 -8.62,-7.21 -8.683,-10.118 -0.027,-1.244 -0.41,-1.118 -1.312,0.43 -0.9,1.547 -2.85,2.188 -6.643,2.188 -7.11,0 -9.757,-2.965 -10.486,-11.745 -0.543,-6.543 -0.385,-6.934 6.546,-16.142 3.907,-5.19 8.47,-10.332 10.14,-11.427 2.91,-1.907 11.777,-17.654 11.806,-20.966 0.008,-0.877 3.69,-8.004 8.182,-15.837 9.003,-15.7 10.282,-20.64 11.44,-44.18 l 0.597,-12.174 -4.278,-5.95 c -2.353,-3.275 -4.963,-7.68 -5.8,-9.788 -0.835,-2.11 -4.927,-6.835 -9.094,-10.503 -6.66,-5.86 -8.654,-6.886 -16.505,-8.477 -4.91,-0.996 -10.063,-2.852 -11.447,-4.125 -1.384,-1.274 -4.677,-3.218 -7.317,-4.32 -2.64,-1.104 -8.54,-5.83 -13.11,-10.5 -9.33,-9.542 -13.125,-11.853 -23.557,-14.35 -10.727,-2.57 -18.15,-6.183 -23.78,-11.58 -4.33,-4.15 -5.21,-5.94 -6.43,-13.037 -2.217,-12.896 -1.843,-21.516 1.094,-25.25 3.624,-4.607 16.162,-12.848 23.166,-15.225 3.31,-1.124 9.154,-3.946 12.985,-6.27 3.83,-2.325 9.31,-4.905 12.177,-5.733 6.903,-1.993 15.737,-11.092 19.08,-19.653 1.836,-4.696 2.583,-9.47 2.583,-16.5 0,-11.134 1.825,-21.317 4.818,-26.89 1.462,-2.723 2.02,-7.176 2.035,-16.25 0.022,-12.027 0.13,-12.516 2.852,-12.903 2.797,-0.396 2.82,-0.555 2.018,-13.763 -0.798,-13.133 -0.755,-13.43 2.457,-17.248 3.263,-3.878 3.265,-3.9 1.373,-11.165 -1.042,-4.003 -2.378,-7.873 -2.967,-8.6 -0.59,-0.727 -2.516,-6.78 -4.283,-13.45 -1.766,-6.672 -5.25,-16.177 -7.74,-21.125 -2.75,-5.458 -4.8,-11.606 -5.216,-15.636 -0.635,-6.152 -0.87,-6.544 -3.162,-5.317 -3.747,2.006 -5.467,-0.65 -7.79,-12.026 -1.12,-5.49 -3.072,-12.32 -4.338,-15.18 -1.265,-2.86 -2.682,-6.94 -3.15,-9.067 -0.466,-2.127 -1.36,-4.182 -1.983,-4.568 -0.623,-0.385 -3.423,-4.62 -6.22,-9.41 -4.327,-7.408 -5.03,-9.592 -4.707,-14.615 0.533,-8.28 3.34,-8.477 11.153,-0.78 l 6.102,6.01 0,-4.016 c 0,-3.574 -0.39,-4.016 -3.532,-4.016 -5.157,0 -8.968,-4.62 -8.968,-10.872 0,-3.995 -0.524,-5.223 -2.44,-5.725 -2.182,-0.57 -2.483,0.118 -2.814,6.418 l -0.37,7.055 -5.066,0.372 c -6.88,0.506 -8.32,-1.302 -21.173,-26.622 -2.443,-4.812 -6.387,-11.28 -8.765,-14.375 -2.377,-3.094 -8.002,-10.687 -12.5,-16.875 -4.496,-6.187 -10.976,-14.847 -14.4,-19.244 -3.42,-4.397 -6.227,-8.897 -6.234,-10 -0.013,-2.2 -7.876,-12.655 -10.724,-14.26 -0.98,-0.554 -2.983,-3.36 -4.45,-6.24 -1.47,-2.877 -4.84,-7.805 -7.492,-10.95 -3.926,-4.655 -4.822,-6.695 -4.822,-10.977 0,-4.41 0.51,-5.49 3.155,-6.696 6.325,-2.882 5.25,-10.606 -3.22,-23.107 -7.28,-10.75 -12.79,-17.423 -23.212,-28.12 l -9.346,-9.594 0.374,-7.906 0.375,-7.907 6.25,-0.12 c 3.438,-0.067 9.837,-1.06 14.22,-2.21 6.028,-1.58 8.39,-1.742 9.688,-0.664 2.28,1.89 2.255,13.657 -0.037,16.79 -1.535,2.1 -1.434,3.03 0.804,7.426 1.407,2.765 4.894,7.84 7.748,11.277 2.854,3.438 6.755,8.38 8.67,10.982 l 3.478,4.732 2.365,-3.005 c 2.78,-3.535 9.487,-5.266 12.075,-3.118 1.197,0.993 1.67,3.508 1.447,7.697 -0.294,5.535 -0.006,6.343 2.6,7.308 1.612,0.596 2.99,0.93 3.062,0.744 1.585,-4.105 3.405,-5.33 7.795,-5.25 2.66,0.05 6.524,1.007 8.586,2.128 2.063,1.12 7.24,3.812 11.504,5.978 4.265,2.167 8.637,5.288 9.716,6.935 1.304,1.99 3.148,2.995 5.49,2.995 4.97,0 7.932,3.74 7.593,9.587 -0.152,2.634 0.128,6.27 0.623,8.084 l 0.898,3.295 3.963,-4.057 c 2.18,-2.232 4.608,-5.12 5.397,-6.42 2.435,-4.016 5.576,-0.594 11.128,12.123 2.825,6.47 7.68,15.476 10.793,20.015 4.987,7.274 5.77,9.348 6.61,17.5 0.524,5.086 1.027,12.904 1.12,17.373 l 0.165,8.125 -4.062,-0.012 c -5.603,-0.016 -5.253,2.333 1.588,10.647 3.107,3.776 7.37,10.24 9.473,14.366 2.265,4.442 5.434,8.526 7.775,10.016 2.173,1.384 4.155,3.634 4.406,5 0.25,1.365 1.277,3.41 2.28,4.542 2.544,2.873 1.756,12.34 -1.144,13.75 -1.203,0.587 -3.172,1.545 -4.375,2.13 -2.525,1.228 -3.693,9.492 -1.684,11.913 0.71,0.854 1.672,7.003 2.14,13.663 l 0.85,12.11 3.61,0 c 1.986,0 4.992,0.906 6.68,2.013 4.67,3.06 6.842,1.49 6.842,-4.945 0,-5.836 2.12,-8.864 5.34,-7.628 1.05,0.402 2.28,0.13 2.733,-0.604 0.454,-0.734 1.83,-1.335 3.058,-1.335 4.09,0 6.1,4.018 7.02,14.037 0.702,7.63 1.485,10.258 3.725,12.5 1.56,1.56 4.037,6.732 5.506,11.49 1.468,4.76 3.29,9.4 4.047,10.314 1.79,2.154 7.868,2.136 9.665,-0.03 2.113,-2.545 -0.06,-11.827 -4.65,-19.846 -4.728,-8.267 -5.285,-15.615 -1.444,-19.09 4.718,-4.27 2.63,-12.773 -4.888,-19.922 -3.227,-3.068 -3.862,-4.62 -3.862,-9.438 0,-6.472 1.58,-8.766 6.036,-8.766 5.605,0 18.766,14.313 18.965,20.625 0.042,1.375 0.855,3.525 1.804,4.778 1.662,2.193 1.96,2.195 7.967,0.062 8.452,-3.002 10.51,-1.41 10.085,7.795 -0.18,3.906 0.34,7.346 1.284,8.484 0.872,1.053 1.89,5.45 2.264,9.774 0.372,4.322 1.172,8.488 1.777,9.257 0.606,0.77 1.627,6.676 2.27,13.126 0.642,6.45 1.793,13.696 2.557,16.102 0.764,2.406 1.64,10.844 1.945,18.75 0.457,11.804 0.947,14.664 2.74,15.993 1.892,1.404 2.27,1.24 2.863,-1.25 1.01,-4.258 5.457,-3.833 5.964,0.57 0.305,2.663 1.056,3.438 3.333,3.438 3.128,0 24.16,7.73 29.395,10.802 1.72,1.01 5.094,2.703 7.5,3.766 2.406,1.062 5.22,2.634 6.25,3.493 1.03,0.858 8.49,3.96 16.576,6.89 8.086,2.932 15.015,5.838 15.398,6.457 0.382,0.62 2.88,2.24 5.548,3.602 3.79,1.933 5.566,2.203 8.12,1.23 1.8,-0.683 5.825,-1.242 8.947,-1.242 4.003,0 6.718,-0.83 9.215,-2.812 1.947,-1.547 4.934,-3.788 6.637,-4.98 2.923,-2.044 11.25,-12.367 16.2,-20.08 2.872,-4.476 9.25,-8.367 13.724,-8.373 2.437,-0.004 5.408,-1.798 9.838,-5.942 l 6.347,-5.937 9.714,0 c 7.07,0 10.347,0.54 12.037,1.987 1.278,1.092 6.158,3.584 10.846,5.536 4.688,1.952 9.61,4.93 10.937,6.62 3.217,4.09 3.265,12.825 0.087,15.7 -1.28,1.16 -3.89,7.013 -5.798,13.008 -1.908,5.994 -4.236,12.672 -5.172,14.838 -0.936,2.166 -1.702,5.545 -1.702,7.508 0,1.963 -0.62,5.535 -1.377,7.936 -0.756,2.402 -1.326,11.23 -1.265,19.616 0.065,8.965 -0.405,15.568 -1.142,16.023 -0.69,0.426 -2.08,2.755 -3.09,5.175 -4.03,9.645 -17.224,21.678 -23.768,21.678 -3.796,0 -4.283,0.47 -6.17,5.938 -1.125,3.265 -2.362,9.312 -2.748,13.437 -0.7,7.475 -0.686,7.517 4.408,12.5 6.8,6.653 7.08,12.212 0.96,19.06 -2.308,2.58 -4.86,5.956 -5.67,7.503 -3.46,6.602 -7.637,1.274 -7.637,-9.746 0,-5.637 -0.284,-6.224 -3.437,-7.106 -1.89,-0.528 -11.323,-0.96 -20.963,-0.96 l -17.534,0 -6.848,4.455 c -3.767,2.45 -8.746,5.616 -11.066,7.036 -2.32,1.42 -6.66,5.848 -9.648,9.84 -11.776,15.745 -9.23,32.283 4.667,30.33 2.554,-0.358 3.004,0.172 3.364,3.962 0.57,6.014 -1.468,12.25 -8.786,26.875 -4.517,9.025 -6.597,14.92 -7.482,21.2 -1.474,10.457 -5.48,17.817 -13.165,24.185 -7.294,6.046 -9.11,9.797 -9.11,18.832 0,6.21 -0.544,8.114 -3.235,11.312 -1.78,2.115 -4.003,3.846 -4.94,3.846 -3.893,0 -7.848,2.934 -8.526,6.325 -0.39,1.947 -4.008,7.99 -8.04,13.43 -4.41,5.947 -7.993,12.327 -8.99,16.004 -2.13,7.866 -4.572,12.833 -8.237,16.76 -1.614,1.727 -3.822,5.665 -4.908,8.75 -1.085,3.083 -3.638,7.682 -5.673,10.22 -2.036,2.538 -3.702,5.46 -3.702,6.494 0,1.035 -2.17,3.46 -4.824,5.387 -2.653,1.928 -9.236,7.083 -14.63,11.455 -5.39,4.372 -10.673,8.268 -11.737,8.658 -1.063,0.39 -4.465,2.94 -7.56,5.668 -5.405,4.767 -19.31,12.1 -22.943,12.1 -0.962,0 -2.356,-0.73 -3.098,-1.624 z m 5.653,-51.14 c 2.142,-2.363 1.415,-5.985 -1.202,-5.985 -2.83,0 -10.08,8.356 -9.21,10.62 0.71,1.853 1.12,1.832 4.624,-0.23 2.114,-1.246 4.718,-3.228 5.787,-4.406 z M 794.085,498.2 c 0.376,-0.61 -0.103,-1.762 -1.065,-2.56 -1.948,-1.618 -3.943,0.24 -2.597,2.418 0.957,1.548 2.75,1.617 3.663,0.142 z m 7.49,-12.486 c 0.373,-0.602 4.577,-3.41 9.343,-6.243 7.344,-4.362 8.96,-5.96 10.6,-10.467 1.066,-2.926 2.098,-6.726 2.295,-8.445 0.322,-2.814 -0.035,-3.087 -3.59,-2.748 -2.17,0.208 -6.1,-0.522 -8.733,-1.622 -6.95,-2.904 -13.673,-1.513 -16.186,3.347 -2.323,4.492 -1.544,7.273 2.037,7.273 1.9,0 2.454,0.603 2.008,2.188 -0.338,1.203 -1,4.156 -1.473,6.562 -0.47,2.406 -1.68,5.31 -2.684,6.45 -1.616,1.834 -1.564,2.227 0.45,3.4 2.812,1.633 5.042,1.75 5.934,0.306 z m 111.884,-19.647 c 1.534,-1.435 1.356,-1.835 -1.25,-2.81 -2.31,-0.865 -3.863,-0.554 -6.49,1.302 -1.898,1.34 -3.142,2.94 -2.763,3.553 0.92,1.486 8.256,0.057 10.503,-2.046 z m -11.956,-40.553 c -1.665,-1.665 -4.825,1.78 -3.54,3.86 0.624,1.01 1.457,0.847 2.866,-0.562 1.386,-1.387 1.59,-2.382 0.674,-3.298 z M 856.33,408.608 c 0.8,-0.8 -2.384,-7.656 -4.025,-8.67 -2.02,-1.248 -2.292,1.25 -0.58,5.32 1.62,3.852 3.058,4.898 4.606,3.35 z m -13.203,-15.005 c 0.412,-1.075 0.094,-3.394 -0.708,-5.154 -1.41,-3.092 -1.542,-3.125 -3.915,-0.978 -2.82,2.552 -3.095,4.448 -0.957,6.586 2.085,2.085 4.685,1.873 5.58,-0.455 z m -91.454,-71.676 c 0,-2.44 -3.628,-4.423 -6.25,-3.417 -2.11,0.81 -2.107,0.97 0.066,3.37 2.493,2.756 6.183,2.784 6.183,0.047 z M 709.59,284.463 c 1.343,-0.85 1.282,-1.205 -0.312,-1.817 -1.09,-0.418 -1.98,-1.922 -1.98,-3.343 0,-2.156 -0.395,-2.37 -2.39,-1.304 -2.045,1.094 -2.18,1.728 -0.937,4.408 1.532,3.3 2.88,3.792 5.62,2.055 z m 36.458,-18.866 c 0,-0.666 -0.844,-0.887 -1.875,-0.49 -1.03,0.395 -1.875,0.94 -1.875,1.21 0,0.27 0.844,0.49 1.875,0.49 1.03,0 1.875,-0.544 1.875,-1.21 z m 25.625,-53.726 c -1.375,-0.565 -5.23,-3.44 -8.567,-6.39 l -6.067,-5.362 0.89,-10.68 c 1.126,-13.534 2.265,-16.68 5.848,-16.154 1.8,0.263 3.06,1.647 3.7,4.065 0.537,2.015 2.406,4.827 4.153,6.25 2.148,1.745 3.536,4.545 4.282,8.63 0.607,3.325 1.73,6.672 2.495,7.437 1.853,1.853 1.78,10.004 -0.11,11.89 -1.708,1.71 -3.074,1.775 -6.624,0.314 z M 738.09,198.244 c -2.348,-2.594 -2.734,-9.61 -0.602,-10.927 2.1,-1.298 4.81,3.085 4.81,7.782 0,4.994 -1.512,6.124 -4.208,3.145 z\"\n       id=\"path6735\"\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#86c746\" />\n    <path\n       style=\"\"\n       d=\"M91.138 1469.42c-2.47-1.9-3.136-3.732-3.58-9.85-.504-6.976-.31-7.67 2.66-9.618 3.01-1.972 4.537-5.208 6.387-13.54.55-2.477 2.063-4.054 5.113-5.328 3.617-1.51 4.33-2.446 4.33-5.675 0-2.246 1.245-5.345 2.97-7.394 2.923-3.475 3.253-9.054.63-10.675-.605-.373-1.1-3.68-1.1-7.35 0-5.633.563-7.27 3.627-10.55 3.035-3.25 4.56-3.882 9.346-3.882 4.884 0 6.036.503 7.88 3.438 3.474 5.53 10.55 13.21 15.012 16.295 3.588 2.48 4.136 3.565 4.136 8.188 0 2.932-.703 6.088-1.562 7.014-1.28 1.38-1.14 1.534.783.853 4.28-1.515 5.778 1.382 5.778 11.178 0 8.868-.128 9.255-4.062 12.23-2.235 1.692-6.557 3.738-9.605 4.55-3.047.81-9.05 3.133-13.34 5.16-4.676 2.21-9.468 3.577-11.96 3.414-5.845-.384-11.31 2.62-13.602 7.475-1.738 3.682-4.392 6.434-6.18 6.41-.344 0-1.99-1.06-3.66-2.343zm5.977-12.09c.242-1.32 1.28-3.345 2.307-4.503 3.046-3.437 12.014-7.087 15.688-6.385 2.27.434 6.3-.777 12.46-3.746 5.006-2.413 11.072-4.788 13.478-5.277 5.99-1.218 8.75-3.98 8.75-8.757 0-3.543-.344-3.943-2.964-3.442-2.112.405-4.106-.548-6.932-3.31-3.278-3.205-4.395-3.65-6.43-2.562-3.396 1.818-4.72-1.832-2.24-6.173 1.648-2.884 2.51-3.2 7.814-2.856l5.96.385-7.697-7.26c-4.236-3.994-8.516-8.81-9.513-10.7-1.51-2.864-2.637-3.437-6.752-3.437-3.94 0-5.37.658-7.067 3.248-1.72 2.623-1.84 3.707-.633 5.64.822 1.318 1.834 5.64 2.248 9.605.683 6.53.445 7.578-2.52 11.102-1.914 2.275-3.275 5.425-3.275 7.58 0 3.938-2.62 6.995-7.187 8.387-1.937.59-2.812 1.828-2.812 3.98 0 3.814-1.835 7.54-5.822 11.823-2.574 2.764-2.826 3.74-1.715 6.664 1.433 3.764 4.16 3.76 4.855-.012zm4.47-52.174c-1.32-3.445-.02-10.223 1.963-10.223 1.384 0 1.875 1.447 1.875 5.52 0 5.504-2.4 8.446-3.837 4.703zm112.268-13.593c-4.342-.792-7.004-2.01-7.85-3.59-1.782-3.328-6.936-5.68-14.6-6.657-4.32-.552-7.345-.317-8.97.698-1.91 1.192-3.172 1.2-5.726.037-5.273-2.402-10.26-1.906-11.045 1.1-1.82 6.96-13.364-1.863-13.364-10.216 0-3.596-3.02-16.432-4.384-18.64-1.264-2.047-4.655-1.4-7.71 1.468-2.647 2.488-3.27 2.576-7.76 1.094-4.197-1.385-5.457-1.326-8.957.42-5.127 2.558-9.84 2.588-13.41.086-2.334-1.634-2.78-3.12-2.78-9.264 0-6.66-.35-7.613-3.9-10.6-4.237-3.566-11.41-6.94-14.752-6.94-3.77 0-8.742 3.07-9.11 5.625-.323 2.23-1.69 2.602-12.638 3.442-9.68.743-15.735.413-28.622-1.563-8.99-1.378-17.107-3.136-18.037-3.908-1.028-.853-1.69-3.978-1.69-7.98 0-5.524-.4-6.68-2.5-7.23-1.984-.518-2.5-1.704-2.5-5.743 0-4.902-.11-5.04-2.967-3.737-4.81 2.19-7.798-.284-8.808-7.297-1.78-12.363-2.238-20.357-1.286-22.51.54-1.223.84-4.854.664-8.068-.247-4.534.39-6.886 2.835-10.486 3.894-5.73 9.096-9.276 13.626-9.286 3.04-.013 3.44-.48 3.456-4.07.035-7.674 10.723-32.41 14.99-34.693 1.37-.734 2.492-2.46 2.492-3.84 0-4.262 4.617-11.64 9.19-14.687 2.536-1.69 5.183-4.953 6.318-7.79 1.074-2.686 3.087-5.592 4.473-6.457 1.384-.866 2.518-2.093 2.518-2.726 0-3.044 8.002-13.066 12.91-16.167 3.03-1.916 6.12-4.824 6.867-6.464.878-1.928 2.813-3.258 5.478-3.764 4.595-.875 10.567-5.484 11.96-9.23.873-2.353 5.09-5.89 13.647-11.443 3.018-1.96 4.628-4.515 6.628-10.524 2.604-7.826 6.955-13.07 17.823-21.48 1.89-1.463 3.438-3.884 3.438-5.38 0-1.703 5.35-8.68 14.335-18.698l14.335-15.98 9.103-1.007c5.007-.554 11.7-1.16 14.873-1.347 8.623-.507 13.856-3.255 19.937-10.467 3.013-3.573 7.38-7.29 9.707-8.263 2.325-.972 7.496-4.598 11.49-8.058 7.54-6.532 19.55-12.68 34.017-17.413 8.054-2.635 13.454-7.142 13.454-11.227 0-2.413 11.565-12.306 17.798-15.225 3.274-1.534 5.952-3.297 5.952-3.918 0-.622 4.578-5.726 10.173-11.344 5.595-5.617 10.99-11.46 11.987-12.982.998-1.523 3.03-3.148 4.515-3.61 1.486-.465 5.232-2.92 8.326-5.46 3.094-2.54 8.126-5.6 11.184-6.796 3.057-1.198 10.163-5.773 15.79-10.168 8.178-6.385 11.413-9.947 16.098-17.724 6.92-11.49 9.812-15.61 16.856-24.022 4.145-4.95 6.423-9.74 10.873-22.863 3.095-9.128 5.958-19.69 6.362-23.473.403-3.78 2.675-11.656 5.05-17.5 5.742-14.14 6.697-17.116 7.624-23.75l.787-5.625 9.375-.625c11.38-.758 18.757-4.292 22.888-10.963 1.587-2.564 5.36-10.005 8.382-16.537 3.023-6.53 6.46-13.304 7.636-15.05 5.274-7.822 7.343-17.9 7.362-35.848.013-11.168.562-18.295 1.563-20.26.848-1.67 6.324-7.164 12.168-12.213 5.844-5.05 14.872-13.37 20.063-18.49 7.586-7.484 10.286-9.382 13.75-9.664l4.313-.35v11.874c0 13.103 1.65 18.746 6.39 21.852 2.238 1.466 3.627 1.64 5.416.684 1.32-.707 4.678-1.287 7.457-1.287 8.17 0 9.475 3.192 9.536 23.302l.05 16.534 5.565 8.207c3.06 4.514 6.342 8.207 7.292 8.207.95 0 7.084-5.12 13.63-11.38 14.156-13.532 18.192-16.226 22.897-15.285 2.956.59 3.866.01 6.486-4.14 2.022-3.204 3.354-7.688 3.957-13.32.805-7.518 1.45-9.058 5.61-13.433 7.015-7.375 12.593-6.27 12.583 2.495-.002 2.44-1.113 6.256-2.47 8.48l-2.464 4.042 2.78-.292c2.483-.26 2.824.35 3.164 5.652.33 5.122.675 5.795 2.5 4.864 5.462-2.786 10.394-2.694 14.405.27 2.18 1.61 4.947 3.274 6.15 3.698 1.578.556 2.188 2.13 2.188 5.64 0 4.82.05 4.868 4.688 4.727 4.272-.13 4.723.175 5.097 3.446.73 6.386-.822 9.192-7.28 13.166-4.86 2.99-6.255 4.558-6.255 7.03 0 1.748-.942 4.616-2.093 6.373-1.68 2.565-2.786 3.054-5.625 2.486-2.858-.57-3.532-.265-3.532 1.606 0 1.272-.336 3.99-.746 6.043-.606 3.03-.054 4.407 2.943 7.343 2.535 2.483 4.146 5.774 5.147 10.517.93 4.4 2.355 7.463 3.932 8.448 1.835 1.147 2.474 2.918 2.474 6.86 0 4.23-1.18 7.1-5.787 14.053-3.183 4.805-7.09 10.143-8.68 11.86-3.976 4.293-11.782 19.55-11.782 23.027 0 1.588-2.347 5.45-5.312 8.744-2.922 3.244-7.86 9.628-10.976 14.186-4.05 5.93-7.56 9.4-12.33 12.202-7.602 4.464-8.252 5.356-9.53 13.092-.51 3.094-3.325 10.407-6.256 16.25-2.93 5.844-6.606 13.72-8.166 17.5-3.552 8.61-8.07 14.83-11.797 16.247-1.578.6-3.084 1.734-3.346 2.52-.45 1.348-7.5 5.626-21.66 13.144-6.932 3.68-13.93 12.583-16.593 21.115-1.653 5.297-1.03 15.114 1.04 16.394.648.4 1.178 1.708 1.178 2.905 0 1.197.703 3.69 1.563 5.54 1.217 2.62 2.447 3.368 5.555 3.376 2.337.01 4.668.916 5.625 2.197 1.138 1.525 3.442 2.212 7.607 2.268 8.864.12 10.185 2.05 10.715 15.65.412 10.564.228 11.574-2.932 16.134-3.133 4.52-9.567 7.742-11.535 5.774-.4-.398-1.422.23-2.274 1.395-1.425 1.95-2.165 1.795-9.33-1.96-7.663-4.018-7.998-4.074-22.323-3.7-11.464.297-14.94.807-16.42 2.405-1.03 1.115-6.093 3.294-11.25 4.842-5.155 1.547-11.624 4.35-14.374 6.225-2.75 1.877-10.77 6.36-17.82 9.966-15.19 7.765-29.268 17.62-39.874 27.915-6.61 6.413-7.814 8.284-8.53 13.246-.458 3.178-2.244 8.872-3.968 12.653-2.59 5.682-3.217 9.263-3.61 20.625-.81 23.395-2.144 31.88-5.948 37.813-1.874 2.922-3.953 5.312-4.62 5.312-.668 0-2.65 2.672-4.408 5.938-1.757 3.265-4.58 7.85-6.274 10.19-3.744 5.168-5.147 10.127-6.633 23.444-1.163 10.412-2.316 13.3-11.872 29.71l-4.804 8.252 2.676 2.17c4.162 3.374 4.987 14.967 1.47 20.657-2.73 4.418-3.536 4.766-19.436 8.38-12.428 2.828-17.547 7.453-22.143 20.007-2.045 5.588-12.063 16.27-21.753 23.196-10.438 7.46-11.61 9.028-12.06 16.148-.37 5.804-.655 6.276-4.468 7.363-2.542.725-5.058 2.752-6.684 5.384-3.117 5.042-8.19 7.91-13.987 7.91-2.58 0-5.086.93-6.39 2.37-1.178 1.303-3.656 2.675-5.505 3.05-8.282 1.674-11.07 2.636-14.08 4.854-2.743 2.023-3.713 2.148-6.563.85-2.563-1.168-4.088-1.185-6.528-.072-3.56 1.622-3.62 1.622-12.76-.045zm12.106-11.16c2.997-1.046 4.835-1.042 7.155.015 2.608 1.188 3.65 1.008 6.32-1.094 1.76-1.384 4.11-2.525 5.22-2.535 3.045-.03 10.376-2.83 13.86-5.295 1.7-1.203 5.285-2.187 7.968-2.187 4.264 0 5.59-.786 10.548-6.25 3.12-3.438 6.374-6.25 7.234-6.25 1.056 0 1.498-1.884 1.36-5.803-.174-5.03.236-6.07 3.083-7.813 6.114-3.742 20.58-16.074 26.24-22.368 3.096-3.444 6.323-8.578 7.17-11.41 2.89-9.644 14.433-18.895 25.806-20.682 9.45-1.484 14.085-3.42 15.47-6.457 1.758-3.86.494-3.76-3.737.294-1.99 1.905-4.03 2.875-4.906 2.333-1.025-.633.032-2.335 3.336-5.366l4.837-4.438-4-1.04c-2.2-.574-4.325-1.565-4.72-2.203-.703-1.138 9.364-21.35 12.477-25.05 4.374-5.2 7.303-13.716 8.372-24.342 1.19-11.848 3.482-18.412 9.486-27.178 2.017-2.945 4.064-6.62 4.548-8.168.485-1.55 1.95-3.387 3.258-4.087 7.123-3.812 10.937-20.18 10.172-43.662-.304-9.316.03-11.247 2.826-16.386 1.744-3.203 3.965-9.614 4.936-14.244 1.617-7.716 2.376-9.01 9.08-15.488 10.38-10.03 30.49-24.19 42.94-30.234 5.844-2.837 12.69-6.792 15.214-8.79 2.523-1.995 9.55-5.21 15.614-7.14 9.597-3.06 11.148-3.952 11.974-6.897 3.1-11.062 2.436-10.278 8.49-10.007 3.07.138 7.887.257 10.703.265 6.268.018 9.033 2.577 5.813 5.382-1.2 1.046-3.027 2.212-4.058 2.59-1.03.38 1.097.735 4.73.79 4.436.065 8.656 1.138 12.86 3.268 3.44 1.743 6.795 2.835 7.457 2.426.662-.41 1.203-2.867 1.203-5.462 0-2.594.37-5.088.823-5.54 1.656-1.656 4.178 2.077 4.178 6.184 0 2.92.58 4.222 1.875 4.222 2.625 0 6.657-4.32 7.623-8.17 1.123-4.476-.213-13.222-2.216-14.49-2.366-1.5-6.93-1.332-9.633.357-3.31 2.067-6.774.452-5.776-2.69.67-2.113.23-2.507-2.8-2.507-1.976 0-4.686.826-6.02 1.835-3.198 2.418-6.11 2.38-8.17-.103-1.44-1.734-1.244-2.37 1.383-4.495 2.308-1.87 2.96-3.444 2.652-6.42-.223-2.168-.98-4.64-1.68-5.493-1.99-2.424-2.72-17.09-1.155-23.3.777-3.085 3.73-9.245 6.562-13.687 4.227-6.63 6.41-8.708 12.19-11.605 3.873-1.94 7.233-3.982 7.468-4.536.235-.555 2.247-1.77 4.47-2.698 2.224-.93 7.44-4.27 11.59-7.428 5.75-4.373 8.208-7.28 10.333-12.22 1.534-3.564 5.488-12.16 8.787-19.103 3.3-6.942 6.388-14.872 6.863-17.622 1.275-7.373 4.874-12.33 11.382-15.677 3.915-2.014 7.1-5.01 9.863-9.274 2.243-3.465 6.966-9.566 10.494-13.56 3.76-4.253 6.416-8.45 6.416-10.136 0-4.122 6.615-16.07 15.05-27.18 4-5.267 8.135-11.246 9.19-13.286 1.765-3.414 1.738-3.87-.344-5.756-2.354-2.13-5.146-9.83-5.146-14.193 0-1.464-1.04-2.793-2.485-3.17-3.887-1.017-5.35-6.632-4.438-17.027.994-11.324 3.43-16.694 7.308-16.1 1.642.25 2.58 1.16 2.338 2.264-.328 1.51-.103 1.553 1.24.23 3.176-3.122-4.095-5.364-8.96-2.76-1.378.737-4.28.842-7.104.256-4.56-.948-4.773-1.214-4.773-5.936 0-4.222.424-5.004 2.903-5.356 1.597-.225 3.847-.044 5 .403 1.9.737 1.87.98-.33 2.6-2.312 1.7-2.263 1.785 1.034 1.785 3.74 0 10.768-5.963 10.768-9.135 0-1.005 1.406-2.75 3.125-3.875 3.31-2.17 4.142-4.49 1.61-4.49-.834 0-2.713-1.5-4.176-3.336-2.05-2.57-3.206-3.09-5.047-2.26-2.46 1.112-3.758 1.453-6.45 1.702-.867.08-1.562 1.798-1.562 3.862 0 2.81-.857 4.16-3.507 5.53-3.814 1.974-6.492 6.652-6.492 11.345 0 3.085-5.182 8.158-8.333 8.158-2.607 0-3.46-3.524-1.666-6.877.87-1.627 1.245-4.25.832-5.828-.538-2.057.16-3.82 2.47-6.23 3.313-3.46 3.112-7.545-.235-4.767-.94.78-2.297 1.055-3.014.612-2.163-1.337-1.48-4.347 1.705-7.533 2.25-2.25 2.635-3.322 1.52-4.247-1.07-.888-2.684.515-5.726 4.973-4.123 6.04-8.145 8.398-11.884 6.963-2.13-.817-9.787 5.096-23.063 17.81-5.643 5.404-10.324 8.875-11.97 8.875-2.898 0-6.75-3.69-9.13-8.75-.81-1.72-2.745-4.714-4.302-6.655-2.625-3.275-2.833-4.768-2.867-20.625-.02-9.402-.476-17.798-1.012-18.658-1.217-1.954-6.29-2.008-11.504-.123-3.607 1.304-4.4 1.105-8.45-2.127-7.69-6.136-10.79-17.44-7.777-28.375.84-3.055.618-3.43-2.012-3.384-1.777.032-4.203 1.62-6.082 3.982-4.332 5.446-7.16 8.215-15.032 14.716-3.747 3.093-9.912 8.544-13.702 12.112l-6.89 6.487-.68 21.013-.678 21.013-9.098 18.75c-5.004 10.312-9.632 19.593-10.284 20.625-.652 1.03-1.99 3.613-2.97 5.738-3.616 7.833-15.27 14.262-25.858 14.262-6.99 0-7.308.137-7.308 3.172 0 1.745-2.012 8.354-4.472 14.687-6.158 15.857-7.64 20.62-8.45 27.14-.382 3.095-3.03 12.817-5.886 21.606-5.193 15.994-6.17 17.757-19.61 35.42-3.6 4.73-7.487 10.57-8.637 12.975-4.323 9.046-23.257 25.453-35.75 30.98-2.996 1.325-7.387 4.1-9.758 6.166-2.372 2.066-6.14 4.693-8.374 5.838-2.234 1.144-4.062 2.585-4.062 3.202 0 1.815-27.37 28.814-29.21 28.814-3.537 0-13.22 8.857-15.623 14.288-2.876 6.502-5.564 8.455-17.135 12.45-15.063 5.202-24.677 10.19-32.407 16.815-4.125 3.537-9.302 7.29-11.504 8.345-2.203 1.053-6.1 4.472-8.662 7.597-5.63 6.87-12.894 10.825-20.46 11.14-3.094.127-10.045.682-15.447 1.233l-9.82 1.002-4.36 6.065c-2.396 3.336-4.74 6.066-5.212 6.066-.47 0-3.933 3.628-7.695 8.063-4.614 5.44-6.84 9.164-6.84 11.445 0 2.637-1.376 4.352-6.25 7.79-9.26 6.53-13.18 11.344-15.6 19.17l-2.173 7.018 4.847 5.67c6.164 7.212 3.956 9.303-2.473 2.34l-4.616-5-3.977 2.065c-4.957 2.574-18.468 17.176-18.49 19.985-.013 1.52-1.196 2.11-4.392 2.19-2.406.06-5.04.2-5.853.312-2.778.38-2.946 4.82-.484 12.734 1.355 4.35 2.16 8.4 1.79 9-1.297 2.097-4.022-1.73-5.59-7.855-1.662-6.478-2.285-6.975-6.147-4.908-2.913 1.56-9.965 11.606-9.965 14.198 0 1.04-1.163 2.706-2.585 3.702-3.506 2.456-7.74 10.483-6.07 11.514 2.35 1.454.408 3.596-3.308 3.645-3.238.043-3.71.54-4.067 4.283-.7 7.325.612 10.14 4.723 10.14 4.88 0 10.396 2.19 9.435 3.747-.426.69-2.65 1.253-4.942 1.253-5.266 0-6.716 3.016-2.712 5.64 3.622 2.373 6.36 8.028 4.694 9.694-.77.77-1.9-.142-3.14-2.542-2.143-4.144-8.86-10.292-11.247-10.292-.84 0-2.22-.69-3.06-1.533-1.212-1.21-1.006-1.933.976-3.437 2.065-1.567 2.367-2.783 1.702-6.85-.65-3.975-.996-4.467-1.765-2.5-.526 1.344-.996 4.006-1.044 5.913-.06 2.395-.96 3.806-2.9 4.557-1.547.597-3.784 2.758-4.972 4.8-2.076 3.573-2.063 3.8.342 5.978 2.957 2.676 1.25 5.714-1.793 3.19-1.49-1.237-2.064-1.096-3.01.74-2.757 5.34-5.375 15.545-4.61 17.96.755 2.373 1.028 2.438 2.952.697 2.992-2.71 11.27-5.994 12.77-5.068 2.025 1.253-.798 3.716-6.367 5.554-6.197 2.045-7.516 3.573-6.163 7.142.943 2.487 1.467 2.637 5.17 1.482 2.264-.707 5.125-1.83 6.356-2.497 1.233-.667 2.807-.86 3.5-.433 2.22 1.37-1.422 4.285-7.162 5.73-9.18 2.312-6.068 4.444 5.362 3.674 5.268-.355 6.038 1.402 2.195 5.012-2.627 2.468-4.773 3.055-12.62 3.452-7.264.367-10.432 1.142-13.686 3.35-2.33 1.58-6.536 3.262-9.348 3.738-4.953.836-5.088.987-4.31 4.794.443 2.162 1.14 6.32 1.55 9.243 1.09 7.773 2.15 7.425 12.016-3.948 4.39-5.06 8.44-5.502 5.836-.637-1.48 2.767-.642 4.898 1.93 4.898 3.773 0 3.05 2.658-1.205 4.436-2.65 1.107-5.008 3.194-5.716 5.055-1.65 4.342-1.616 4.408 1.888 3.53 2.484-.625 3.375-.16 4.524 2.363 1.155 2.535 1.04 3.697-.593 6.03-3.193 4.56-2.618 8.263 1.413 9.1 23.57 4.904 48.046 5.157 51.325.53 2.132-3.004 8.075-6.045 11.816-6.045 4.15 0 11.863 3.99 18.112 9.372 5.2 4.478 5.308 4.73 5 11.665-.304 6.852-.203 7.1 3.04 7.475 1.845.213 5.05-.49 7.125-1.562 4.53-2.342 8.084-2.478 11.36-.433 2.04 1.275 2.9 1.076 5.375-1.25 4.16-3.906 8.604-3.56 11.925.932 1.504 2.035 2.735 5.088 2.735 6.786 0 1.697.948 4.034 2.107 5.193 1.976 1.976 2.165 1.95 3.038-.407 1.502-4.063 3.512-4.43 4.858-.89 1.517 3.99.162 6.94-4.28 9.316-3.874 2.073-3.942 2.67-.74 6.476l2.483 2.95-.295-3.124c-.283-2.997-.04-3.11 5.955-2.772 3.438.195 7.81.972 9.72 1.728 2.79 1.105 3.896.987 5.655-.605 1.725-1.562 3.234-1.744 7.156-.862 2.733.615 6.506 1.44 8.384 1.832 1.878.393 5.352 2.416 7.72 4.496 3.632 3.187 6.784 4.39 15.866 6.045.413.076 2.566-.495 4.785-1.268zM54.06 1323.648c-2.3-3.018-2.99-4.867-2.13-5.727.732-.73 1.026-4.82.694-9.63-.55-7.95-.4-8.53 3.058-11.803l3.637-3.442 3.228 3.442c2.6 2.773 3.34 5.025 3.8 11.568.522 7.377.245 8.608-3.004 13.374-1.968 2.887-4.097 5.57-4.73 5.96-.634.392-2.682-1.292-4.552-3.743zm7.37-14.878c-.728-9.42-1.24-11.106-3.03-9.998-.93.575-1.207 3.785-.807 9.377.34 4.744.07 9.042-.61 9.722-.67.67-.794 1.906-.274 2.747.678 1.095 1.564.71 3.128-1.365 1.707-2.263 2.055-4.546 1.595-10.483zm-34.7-2.362c-2.9-3.707-2.95-4.04-.936-6.27 1.17-1.297 4.283-4.067 6.917-6.156l4.79-3.798 3.7 3.7 3.7 3.7-5.024 5.708c-6.605 7.503-9.227 8.125-13.147 3.116zm10.553-6.463c4.026-4.285.854-5.157-4.342-1.194-2.404 1.833-4.094 3.78-3.756 4.327.987 1.598 5.176-.023 8.098-3.133zm36.564 4.41c-1.885-2.725-4.082-4.975-4.883-5-1.48-.05-11.67-10.955-11.67-12.49 0-.463 1.59-2.364 3.534-4.226 3.53-3.38 3.535-3.382 5.82-.858 1.257 1.39 2.865 2.526 3.574 2.526.708 0 2.67 1.266 4.36 2.813l3.075 2.813-2.05-3.21c-1.984-3.105-1.93-3.324 1.672-6.775 3.502-3.355 3.86-3.443 6.02-1.488 2.162 1.957 2.507 1.86 5.885-1.667l3.59-3.745 3.51 3.364c1.93 1.85 3.51 3.776 3.51 4.28 0 .503-2.905 4.095-6.458 7.982-4.53 4.955-7.144 6.887-8.75 6.467-2.755-.72-2.89.256-.512 3.653 1.596 2.28 1.458 2.952-1.34 6.528-1.717 2.194-3.648 3.988-4.292 3.988-.645 0-2.713-2.23-4.597-4.952zm6.388-2.25c.906-1.465-5.83-10.733-8.922-12.275-1.513-.754-3.824-2.342-5.135-3.53-1.678-1.518-2.644-1.735-3.264-.733-1.017 1.645 4.02 7.488 6.457 7.488.902 0 3.13 2.25 4.948 5 3.252 4.91 4.75 5.938 5.918 4.05zm10.705-17.066c5.625-5.802 3.852-8.68-1.908-3.098-4.103 3.977-4.286 4.028-6.025 1.67-1.355-1.835-2.15-2.078-3.253-.99-1.11 1.092-.83 2.065 1.166 4.06 3.587 3.588 5.21 3.322 10.02-1.64zm.427-30.966c-2.705-2.705-2.762-2.708-5.396-.324-2.644 2.393-2.683 2.385-5.6-1.004-1.676-1.95-3.705-3.118-4.73-2.725-1.08.416-3.086-.958-5.033-3.447l-3.237-4.137 6.456-6.537c6.2-6.282 6.55-6.454 8.844-4.378 1.81 1.637 4.057 2.055 9.264 1.724 6.523-.414 7.125-.193 11.743 4.317 2.678 2.614 4.868 5.403 4.868 6.198 0 2.403-10.06 13.048-12.328 13.048-1.164 0-3.347-1.23-4.85-2.734zm9.285-6.234c3.54-3.326 3.627-4.98.413-7.89-2.02-1.827-3.875-2.116-10.018-1.56-6.54.594-7.708.37-8.812-1.693-1.195-2.235-1.524-2.133-5.446 1.68-4.684 4.553-3.924 7.483 1.09 4.198 2.847-1.865 3.295-1.887 3.947-.186.404 1.055.42 2.744.03 3.753-1.036 2.704 1.82 3.886 3.578 1.48 2.106-2.88 6.424-2.62 7.222.435.857 3.275 4.38 3.18 7.995-.218zm6.036-14.763c-1.253-1.385-3.075-2.52-4.048-2.52-2.686 0-12.253-6.976-15.825-11.54l-3.17-4.05 3.25-3.394 3.252-3.393 5.36 3.69c2.95 2.028 6.247 3.688 7.326 3.688 2.785 0 2.43-4.068-.703-8.05-1.988-2.528-3.393-3.205-5.533-2.668-2.21.555-3.61-.212-6.097-3.344l-3.228-4.063 4.368-4.062c5.072-4.717 7.257-4.98 12.873-1.557 5.457 3.327 5.922 3.155 2.91-1.076l-2.544-3.572 3.178-2.986c1.978-1.86 4.324-2.837 6.21-2.59 2.96.388 3.538-.5 3.138-4.828-.097-1.057 1.54-3.566 3.636-5.575l3.813-3.653 4.623 4.623 4.624 4.623-2.166 3.667c-1.19 2.016-2.367 5.39-2.612 7.498-.246 2.108-1.06 4.572-1.81 5.475-.75.903-2.026 5.832-2.838 10.953-1.573 9.923-7.844 23.837-12.873 28.56l-2.834 2.664-2.28-2.52zm7.944-12.297c1.942-3.904 4.203-11.287 5.025-16.407.82-5.12 2.107-10.05 2.857-10.953.75-.903 1.563-3.367 1.81-5.475.244-2.107 1.416-5.475 2.602-7.483 1.987-3.366 1.997-3.81.132-5.676-2.317-2.317-5.008-1.257-4.625 1.82.38 3.058-1.398 8.653-3.235 10.178-1.066.885-2.65.928-4.748.13-4.183-1.59-5.23-.276-2.335 2.926 1.288 1.426 2.685 4.42 3.104 6.656.968 5.16-.872 5.292-9.926.708-5.708-2.89-7.075-3.15-9.883-1.87-3.834 1.747-2.98 4.3 1.095 3.278 4.06-1.02 11.558 6.17 12.672 12.15 1.942 10.42-3.765 12.922-13.768 6.04-3.054-2.102-5.79-3.223-6.21-2.546-1.118 1.81 10.717 9.985 14.51 10.02 2.28.022 3.504.84 3.98 2.658.972 3.72 2.863 2.042 6.94-6.154zm78.512-2.943c-2.91-3.817-3.348-5.56-3.348-13.35v-8.962l-4.528 1.89c-5.742 2.4-10.433 2.406-13.84.02-4.598-3.22-8.447-10.906-10.018-20.002l-1.512-8.75 4.295-4.324 4.294-4.326 3.56 3.41c2.692 2.58 3.43 4.278 3.036 6.972-.288 1.96.388 5.324 1.502 7.477 1.634 3.16 2.8 3.915 6.055 3.91 2.216 0 5.93-1.163 8.254-2.58l4.223-2.574 3.62 3.47c2.036 1.948 3.322 4.25 2.937 5.254-.377.983.03 2.973.906 4.423 1.06 1.753 1.458 6.247 1.19 13.413-.356 9.618-.77 11.22-3.84 14.897l-3.438 4.12-3.35-4.39zm5.537-14.78c.2-6.442-.25-11.695-1.147-13.346-.814-1.496-1.16-3.548-.773-4.56 1.173-3.057-1.526-3.512-5.93-1-2.29 1.304-6.512 2.658-9.388 3.01l-5.228.638-3.283-6.936c-1.906-4.025-3.122-8.516-2.898-10.702.42-4.082-1.538-5.68-3.727-3.04-2.117 2.55 1.07 19.225 4.385 22.947 3.14 3.524 7.955 3.866 14.71 1.043 2.565-1.072 4.79-1.775 4.943-1.563 3.89 5.373 4.45 7.315 4.45 15.456 0 4.89.384 9.273.854 9.743 1.844 1.843 2.712-1.507 3.03-11.688zm28.996-56.383c-2.22-2.252-3.096-2.494-4.578-1.264-1.508 1.25-2.43.74-5.2-2.892-3.023-3.965-3.22-4.827-1.943-8.49.78-2.244 2.935-6.264 4.785-8.935 2.075-2.993 3.48-6.83 3.662-10.007.678-11.732 1.73-15.394 5.44-18.95l3.7-3.546 3.707 3.55c2.038 1.953 3.408 4.032 3.044 4.62-1.22 1.976.896 6.048 3.144 6.048 1.38 0 3.067-1.863 4.44-4.908 1.217-2.7 3.726-6.36 5.576-8.13l3.363-3.222 3.46 3.61 3.457 3.61-3.38 6.707c-1.86 3.69-4.473 8.258-5.81 10.15-1.675 2.378-2.427 5.525-2.427 10.156 0 5.627-.592 7.394-3.66 10.932l-3.662 4.22-3.75-4.327c-2.062-2.38-3.762-5.755-3.778-7.5l-.028-3.172-2.406 3.125-2.407 3.125 3.726 3.854 3.728 3.853-4.73 5.285-4.73 5.284-2.745-2.786zm6.337-8.868c-.397-.643-1.44-.893-2.318-.556-1.84.706-4.402-1.468-4.402-3.734 0-.848 1.803-4.442 4.007-7.987 3.635-5.848 4.01-7.39 4.062-16.646.044-8.032-.323-10.2-1.73-10.2-2.205 0-3.623 5.03-4.01 14.233-.212 5.07-1.114 8.144-3.25 11.08-4.113 5.65-6.885 12.715-5.942 15.145.723 1.863.93 1.853 2.384-.12 1.48-2.01 1.796-1.944 4.5.935 2.713 2.887 3.064 2.96 5.165 1.057 1.24-1.122 1.93-2.566 1.532-3.208zm12.946-12.95c.194-4.92 1.08-8.442 2.664-10.584 4.59-6.21 9.163-16.472 7.9-17.735-.79-.79-2.69 1.572-5.41 6.714-3.46 6.542-4.85 8.043-7.944 8.57-2.062.35-3.723 1.195-3.69 1.875.14 2.93 2.043 16.383 2.53 17.905.296.916 1.24 1.433 2.098 1.148.968-.32 1.674-3.327 1.853-7.89zm82.384 17.112c-1.28-.503-5.044-4.21-8.366-8.24-4.568-5.542-5.915-8.113-5.53-10.56.277-1.78.84-6.394 1.246-10.255.575-5.454 1.507-7.755 4.182-10.317l3.443-3.298 3.43 3.58c3.385 3.533 3.416 3.715 2.357 13.755-.766 7.263-.676 10.175.314 10.175.764 0 3.165 1.834 5.337 4.075l3.95 4.075-3.17 4.05c-3.365 4.3-3.57 4.383-7.19 2.96zm4.607-5.982c1.266-1.267-1.685-4.178-4.235-4.178-3.542 0-4.152 2.393-.94 3.68 3.64 1.46 4.16 1.51 5.174.498zm-8.636-20.64c.525-6.168.352-9.874-.486-10.392-.716-.442-1.603-.02-1.972.942-1.06 2.76-2.79 20.173-2.12 21.345 1.553 2.72 3.84-3.22 4.578-11.894zm-187.05 8.86c-1.773-2.35-3.83-6.504-4.57-9.232-1.245-4.58-1.094-5.223 1.984-8.436l3.332-3.478 3.053 2.812c3.062 2.82 6.48 9.417 6.48 12.506 0 .907-1.586 3.55-3.526 5.874l-3.525 4.225-3.226-4.272zm3.985-10.047c-1.006-2.813-2.392-4.915-3.08-4.67-1.42.503-1.1 4.66.73 9.47.95 2.497 1.58 2.912 2.71 1.784 1.128-1.13 1.044-2.663-.36-6.585zm146.963-18.29c-2.396-3.265-4.37-7.092-4.387-8.504-.018-1.412 1.83-4.373 4.108-6.58l4.14-4.014 2.98 3.17c1.636 1.744 3.112 4.096 3.278 5.228.167 1.132 1.41 3.557 2.765 5.39l2.464 3.33-3.1 3.96c-4.294 5.488-7.102 5.034-12.248-1.98zm9.682-1.078c.42-.422-.365-2.296-1.747-4.165-1.38-1.87-2.714-4.478-2.96-5.796-.248-1.318-.494-2.606-.546-2.862-.318-1.546-3.846 3.075-3.846 5.037 0 5.34 6.222 10.664 9.1 7.787zm15.244-9.788c-3.247-4.257-3.273-4.465-2.4-18.665.863-13.997.986-14.458 4.853-18.206l3.967-3.845 3.437 3.586c3.103 3.24 3.53 4.818 4.418 16.27.54 6.975 1.337 13.035 1.77 13.468 1.88 1.88-8.52 11.694-12.393 11.694-.203 0-1.847-1.937-3.653-4.304zm7.977-3.92c2.302-1.148 3.597-2.55 3.1-3.356-.472-.762-1.284-6.898-1.806-13.637-1.044-13.482-1.707-15.635-4.183-13.58-2.636 2.19-3.967 32.548-1.425 32.548.197 0 2.14-.888 4.314-1.973zm21.006-18.24c-2.464-3.15-2.87-4.58-1.965-6.957.626-1.645 1.138-6.272 1.138-10.28 0-6.812.297-7.55 4.523-11.26l4.524-3.973 3.602 3.45c2.964 2.84 3.592 4.462 3.547 9.155-.03 3.136-.808 7.814-1.728 10.393-1.82 5.098-7.677 13.435-9.44 13.435-.603 0-2.492-1.784-4.2-3.965zm7.37-6.177c2.223-4.298 3.82-16.05 2.612-19.203-.614-1.6-1.292-1.736-3.29-.666-2.09 1.118-2.52 2.61-2.52 8.723 0 4.057-.527 8.76-1.17 10.453-1.144 3.01-.68 4.585 1.346 4.585.556 0 1.915-1.75 3.022-3.89zm81.63-72.027c-1.746-1.9-4.37-5.2-5.828-7.332l-2.653-3.875 3.82-3.625 3.82-3.625 6.07 6.85 6.07 6.85-2.858 3.706c-3.838 4.976-4.73 5.087-8.44 1.05zm5.596-3.77c.314-.515-1.056-2.88-3.044-5.256-4.74-5.664-7.413-3.663-2.867 2.146 3.15 4.025 4.82 4.903 5.912 3.11zm-13.3-76.72c-3.588-4.583-3.222-7.072 1.74-11.825l3.636-3.485 3.656 3.503c2.283 2.187 3.387 4.27 2.94 5.546-1.058 3.02-6.553 10.168-7.82 10.168-.602 0-2.47-1.758-4.152-3.907zm6.52-5.154c1.14-3.02.694-4.688-1.258-4.688-1.41 0-3.61 5.173-2.79 6.563 1.063 1.807 2.994.913 4.048-1.874zm133.344-42.554c-4.28-5.61-3.626-10.766 2.136-16.82l3.865-4.063 3.32 3.18c3.098 2.968 3.234 3.55 2.048 8.73-.698 3.054-2.764 7.342-4.59 9.53l-3.32 3.977-3.46-4.535zm6.458-9.33c1.308-5.383.375-7.814-1.91-4.978-1.762 2.19-3.137 9.346-2.112 11.002 1.24 2.008 2.548.05 4.022-6.023zm37.268-1.854l-3.236-4.075 4.82-4.375c2.65-2.406 8.802-7.26 13.67-10.79l8.85-6.413 3.364 3.513 3.365 3.512-2.696 3.787c-2.168 3.043-16.466 14.07-23.44 18.075-.835.48-2.848-.906-4.698-3.234zm15.85-10.614c5.327-3.717 9.686-7.25 9.686-7.848 0-1.767-2.257-2.642-3.138-1.217-.446.72-5.27 4.435-10.718 8.253-5.45 3.818-9.584 7.465-9.19 8.104.86 1.393 1.073 1.277 13.36-7.293zm-95.688-14.398c-1.65-2.235-4.28-6.773-5.84-10.085l-2.84-6.022 3.51-3.664 3.51-3.664 3 2.812c1.652 1.546 4.442 5.745 6.2 9.33l3.197 6.52-3.37 4.418c-1.853 2.43-3.593 4.418-3.867 4.418s-1.848-1.828-3.5-4.062zm2.36-11.673c-2.362-4.823-3.857-6.643-4.736-5.765-.878.88-.22 3.535 2.088 8.412 2.435 5.146 3.75 6.75 4.736 5.765.984-.985.403-3.323-2.09-8.412zM8.547 1275.558c2.285-1.477.31-1.477-3.125 0-1.648.708-1.86 1.098-.625 1.143 1.03.038 2.72-.475 3.75-1.142zm18.125-11.35c0-8.42-8.07-11.53-15.744-6.065-3.846 2.738-4.724 4.915-1.982 4.915.907 0 2.872 1.406 4.366 3.125 2.104 2.42 3.92 3.125 8.038 3.124h5.32v-5.097zm495.287-224.405c-.416-.415-1.494-.46-2.396-.1-.997.4-.7.696.755.756 1.317.053 2.055-.242 1.64-.657zm122.838-320.24c0-2.826-.048-2.836-3.086-.626-3.915 2.85-3.922 3.496-.04 3.496 2.427 0 3.126-.642 3.126-2.87zm-7.257-26.803c1.853-2.892 3.235-5.392 3.07-5.556-1.224-1.225-6.252 1.83-7.737 4.7-4.405 8.52-.678 9.2 4.668.856zm113.716 96.174c-.742-.894-1.69-4.128-2.107-7.188-1.356-9.935-1.71-10.647-6.67-13.436-6.015-3.38-7.083-3.404-11.09-.252-1.75 1.375-4.2 2.5-5.447 2.5-2.432 0-8.62-7.21-8.683-10.118-.027-1.244-.41-1.118-1.312.43-.9 1.547-2.85 2.188-6.643 2.188-7.11 0-9.757-2.965-10.486-11.745-.543-6.543-.385-6.934 6.546-16.142 3.907-5.19 8.47-10.332 10.14-11.427 2.91-1.907 11.777-17.654 11.806-20.966.008-.877 3.69-8.004 8.182-15.837 9.003-15.7 10.282-20.64 11.44-44.18l.597-12.174-4.278-5.95c-2.353-3.275-4.963-7.68-5.8-9.788-.835-2.11-4.927-6.835-9.094-10.503-6.66-5.86-8.654-6.886-16.505-8.477-4.91-.996-10.063-2.852-11.447-4.125-1.384-1.274-4.677-3.218-7.317-4.32-2.64-1.104-8.54-5.83-13.11-10.5-9.33-9.542-13.125-11.853-23.557-14.35-10.727-2.57-18.15-6.183-23.78-11.58-4.33-4.15-5.21-5.94-6.43-13.037-2.217-12.896-1.843-21.516 1.094-25.25 3.624-4.607 16.162-12.848 23.166-15.225 3.31-1.124 9.154-3.946 12.985-6.27 3.83-2.325 9.31-4.905 12.177-5.733 6.903-1.993 15.737-11.092 19.08-19.653 1.836-4.696 2.583-9.47 2.583-16.5 0-11.134 1.825-21.317 4.818-26.89 1.462-2.723 2.02-7.176 2.035-16.25.022-12.027.13-12.516 2.852-12.903 2.797-.396 2.82-.555 2.018-13.763-.798-13.133-.755-13.43 2.457-17.248 3.263-3.878 3.265-3.9 1.373-11.165-1.042-4.003-2.378-7.873-2.967-8.6-.59-.727-2.516-6.78-4.283-13.45-1.766-6.672-5.25-16.177-7.74-21.125-2.75-5.458-4.8-11.606-5.216-15.636-.635-6.152-.87-6.544-3.162-5.317-3.747 2.006-5.467-.65-7.79-12.026-1.12-5.49-3.072-12.32-4.338-15.18-1.265-2.86-2.682-6.94-3.15-9.067-.466-2.127-1.36-4.182-1.983-4.568-.623-.385-3.423-4.62-6.22-9.41-4.327-7.408-5.03-9.592-4.707-14.615.533-8.28 3.34-8.477 11.153-.78l6.102 6.01v-4.016c0-3.574-.39-4.016-3.532-4.016-5.157 0-8.968-4.62-8.968-10.872 0-3.995-.524-5.223-2.44-5.725-2.182-.57-2.483.118-2.814 6.418l-.37 7.055-5.066.372c-6.88.506-8.32-1.302-21.173-26.622-2.443-4.812-6.387-11.28-8.765-14.375-2.377-3.094-8.002-10.687-12.5-16.875-4.496-6.187-10.976-14.847-14.4-19.244-3.42-4.397-6.227-8.897-6.234-10-.013-2.2-7.876-12.655-10.724-14.26-.98-.554-2.983-3.36-4.45-6.24-1.47-2.877-4.84-7.805-7.492-10.95-3.926-4.655-4.822-6.695-4.822-10.977 0-4.41.51-5.49 3.155-6.696 6.325-2.882 5.25-10.606-3.22-23.107-7.28-10.75-12.79-17.423-23.212-28.12l-9.346-9.594.374-7.906.375-7.907 6.25-.12c3.438-.067 9.837-1.06 14.22-2.21 6.028-1.58 8.39-1.742 9.688-.664 2.28 1.89 2.255 13.657-.037 16.79-1.535 2.1-1.434 3.03.804 7.426 1.407 2.765 4.894 7.84 7.748 11.277 2.854 3.438 6.755 8.38 8.67 10.982l3.478 4.732 2.365-3.005c2.78-3.535 9.487-5.266 12.075-3.118 1.197.993 1.67 3.508 1.447 7.697-.294 5.535-.006 6.343 2.6 7.308 1.612.596 2.99.93 3.062.744 1.585-4.105 3.405-5.33 7.795-5.25 2.66.05 6.524 1.007 8.586 2.128 2.063 1.12 7.24 3.812 11.504 5.978 4.265 2.167 8.637 5.288 9.716 6.935 1.304 1.99 3.148 2.995 5.49 2.995 4.97 0 7.932 3.74 7.593 9.587-.152 2.634.128 6.27.623 8.084l.898 3.295 3.963-4.057c2.18-2.232 4.608-5.12 5.397-6.42 2.435-4.016 5.576-.594 11.128 12.123 2.825 6.47 7.68 15.476 10.793 20.015 4.987 7.274 5.77 9.348 6.61 17.5.524 5.086 1.027 12.904 1.12 17.373l.165 8.125-4.062-.012c-5.603-.016-5.253 2.333 1.588 10.647 3.107 3.776 7.37 10.24 9.473 14.366 2.265 4.442 5.434 8.526 7.775 10.016 2.173 1.384 4.155 3.634 4.406 5 .25 1.365 1.277 3.41 2.28 4.542 2.544 2.873 1.756 12.34-1.144 13.75-1.203.587-3.172 1.545-4.375 2.13-2.525 1.228-3.693 9.492-1.684 11.913.71.854 1.672 7.003 2.14 13.663l.85 12.11h3.61c1.986 0 4.992.906 6.68 2.013 4.67 3.06 6.842 1.49 6.842-4.945 0-5.836 2.12-8.864 5.34-7.628 1.05.402 2.28.13 2.733-.604.454-.734 1.83-1.335 3.058-1.335 4.09 0 6.1 4.018 7.02 14.037.702 7.63 1.485 10.258 3.725 12.5 1.56 1.56 4.037 6.732 5.506 11.49 1.468 4.76 3.29 9.4 4.047 10.314 1.79 2.154 7.868 2.136 9.665-.03 2.113-2.545-.06-11.827-4.65-19.846-4.73-8.267-5.285-15.615-1.444-19.09 4.717-4.27 2.63-12.773-4.888-19.922-3.227-3.068-3.862-4.62-3.862-9.438 0-6.472 1.58-8.766 6.036-8.766 5.605 0 18.766 14.313 18.965 20.625.042 1.375.855 3.525 1.804 4.778 1.662 2.193 1.96 2.195 7.967.062 8.452-3.002 10.51-1.41 10.085 7.795-.18 3.906.34 7.346 1.283 8.484.874 1.053 1.893 5.45 2.266 9.774.372 4.322 1.172 8.488 1.777 9.257.606.77 1.627 6.676 2.27 13.126.642 6.45 1.793 13.696 2.557 16.102.764 2.406 1.64 10.844 1.945 18.75.457 11.804.947 14.664 2.74 15.993 1.892 1.404 2.27 1.24 2.863-1.25 1.01-4.258 5.457-3.833 5.964.57.305 2.663 1.056 3.438 3.333 3.438 3.128 0 24.16 7.73 29.395 10.802 1.72 1.01 5.094 2.703 7.5 3.766 2.406 1.062 5.22 2.634 6.25 3.493 1.03.858 8.49 3.96 16.576 6.89 8.086 2.932 15.015 5.838 15.398 6.457.382.62 2.88 2.24 5.548 3.602 3.79 1.933 5.566 2.203 8.12 1.23 1.8-.683 5.825-1.242 8.947-1.242 4.003 0 6.718-.83 9.215-2.812 1.947-1.547 4.934-3.788 6.637-4.98 2.923-2.044 11.25-12.367 16.2-20.08 2.872-4.476 9.25-8.367 13.724-8.373 2.437-.004 5.408-1.798 9.838-5.942l6.347-5.937h9.714c7.07 0 10.347.54 12.037 1.987 1.278 1.092 6.158 3.584 10.846 5.536 4.688 1.952 9.61 4.93 10.937 6.62 3.217 4.09 3.265 12.825.087 15.7-1.28 1.16-3.89 7.013-5.798 13.008-1.908 5.994-4.236 12.672-5.172 14.838-.936 2.166-1.702 5.545-1.702 7.508s-.62 5.535-1.377 7.936c-.756 2.402-1.326 11.23-1.265 19.616.065 8.965-.405 15.568-1.142 16.023-.69.426-2.08 2.755-3.09 5.175-4.03 9.645-17.224 21.678-23.768 21.678-3.796 0-4.283.47-6.17 5.938-1.125 3.265-2.362 9.312-2.748 13.437-.7 7.475-.686 7.517 4.408 12.5 6.8 6.653 7.08 12.212.96 19.06-2.308 2.58-4.86 5.956-5.67 7.503-3.46 6.602-7.637 1.274-7.637-9.746 0-5.637-.284-6.224-3.437-7.106-1.89-.528-11.323-.96-20.963-.96H930.37l-6.848 4.455c-3.767 2.45-8.746 5.616-11.066 7.036-2.32 1.42-6.66 5.848-9.648 9.84-11.776 15.745-9.23 32.283 4.667 30.33 2.554-.358 3.004.172 3.364 3.962.57 6.014-1.468 12.25-8.786 26.875-4.517 9.025-6.597 14.92-7.482 21.2-1.474 10.457-5.48 17.817-13.165 24.185-7.294 6.046-9.11 9.797-9.11 18.832 0 6.21-.544 8.114-3.235 11.312-1.78 2.115-4.003 3.846-4.94 3.846-3.893 0-7.848 2.934-8.526 6.325-.39 1.947-4.008 7.99-8.04 13.43-4.41 5.947-7.993 12.327-8.99 16.004-2.13 7.866-4.572 12.833-8.237 16.76-1.614 1.727-3.822 5.665-4.908 8.75-1.085 3.083-3.638 7.682-5.673 10.22-2.037 2.538-3.702 5.46-3.702 6.494 0 1.035-2.17 3.46-4.824 5.387-2.653 1.928-9.236 7.083-14.63 11.455-5.39 4.372-10.673 8.268-11.737 8.658-1.063.39-4.465 2.94-7.56 5.668-5.405 4.767-19.31 12.1-22.943 12.1-.962 0-2.356-.73-3.098-1.624zm10.417-12.463c5.058-1.794 11.95-6.222 15-9.635 1.375-1.538 5.03-4.082 8.125-5.653 3.094-1.57 7.774-4.884 10.402-7.365 2.627-2.48 5.3-4.51 5.937-4.51.64 0 1.16-.788 1.16-1.75 0-.965 2.11-2.848 4.69-4.185 2.577-1.337 4.88-3.502 5.12-4.81.24-1.308 1.806-3.837 3.483-5.62 1.677-1.782 4.194-6.254 5.593-9.937 1.4-3.683 4.123-8.494 6.05-10.69 1.93-2.197 4.482-6.725 5.672-10.063 1.19-3.338 2.737-7.624 3.438-9.525.7-1.9 4.31-7.525 8.023-12.5 3.712-4.974 7.09-10.45 7.505-12.17 1.065-4.4 5.113-8.48 9.333-9.408 4.964-1.09 7.544-5.134 6.574-10.304-1.176-6.27 2.494-14.35 9.342-20.566 10.187-9.248 11.335-11.492 13.924-27.222.672-4.087 3.944-12.41 8.068-20.522 3.815-7.506 6.936-14.397 6.936-15.313 0-.916-1.05-1.665-2.33-1.665-3.216 0-8.566-4.44-10.982-9.112-2.49-4.813-1.56-20.07 1.597-26.238 4.02-7.848 12.318-16.266 23.506-23.842l11.333-7.675 19.375.03c15.02.02 20.38.476 23.84 2.026l4.467 2-.484 7.968-.484 7.97 5.03-5.21 5.032-5.21-4.377-4.78c-2.406-2.627-4.712-6.118-5.123-7.758-1.196-4.764.532-23.236 2.648-28.3 1.065-2.548 1.665-5.073 1.334-5.61-1.1-1.778 2.412-3.422 8.743-4.093 5.706-.605 6.826-1.3 12.87-7.976 3.64-4.023 6.943-8.848 7.338-10.723.396-1.876 1.502-4.06 2.46-4.854 1.346-1.118 1.558-3.612.938-11.045-.567-6.803-.194-12.597 1.282-19.878 1.145-5.652 1.71-10.877 1.257-11.61-.454-.736.317-3.95 1.713-7.145 1.397-3.195 4.052-10.59 5.9-16.434 1.87-5.907 4.53-11.636 5.99-12.902 3.048-2.643 1.975-5.495-2.995-7.963-17.854-8.86-21.765-10.385-26.665-10.385-7.197 0-12.638 2.062-15.016 5.693-2.336 3.565-7.1 6.162-13.383 7.3-4.563.825-9.605 5.957-18.562 18.897-1.72 2.483-6.724 7.292-11.124 10.688-7.198 5.555-8.64 6.173-14.41 6.173-3.69 0-7.552.8-9.1 1.885-2.5 1.75-3.248 1.538-10.59-3.024-4.346-2.7-13.526-6.994-20.4-9.542-6.876-2.547-13.994-5.686-15.82-6.975-1.824-1.29-4.146-2.345-5.158-2.345-1.013 0-2.495-.787-3.294-1.75-.8-.962-4.664-2.986-8.59-4.498-3.927-1.512-10.41-4.1-14.41-5.75-4.146-1.713-9.793-3.002-13.146-3.002-4.232 0-7.184-.887-10.543-3.17-5.347-3.633-4.997-2.4-5.303-18.705-.13-6.875-.913-14.75-1.74-17.5-.828-2.75-1.99-10.27-2.585-16.71-.594-6.438-1.69-12.317-2.433-13.06-.745-.746-1.41-3.914-1.48-7.042-.213-9.79-1.304-11.937-6.062-11.937-3.2 0-4.49-.7-5.515-2.99-1.192-2.665-.807-3.453 3.516-7.19 2.67-2.307 4.553-4.497 4.184-4.866-.37-.37-3.555.466-7.08 1.856l-6.41 2.526-3.128-4.957c-1.72-2.725-3.128-5.603-3.128-6.395 0-4.56-10.803-17.36-14.653-17.36-3.852 0-3.58 2.044.754 5.69 4.767 4.013 7.177 9.55 8.16 18.748.74 6.95.557 7.796-2.27 10.452l-3.075 2.89 4.05 7.672c2.226 4.22 4.813 11.764 5.747 16.765l1.698 9.09-3.565 3.722c-7.487 7.815-16.788 3.517-20.113-9.296-2.344-9.028-7.128-15.732-11.228-15.732-1.8 0-3.782-1.272-5.086-3.263-1.9-2.9-2.72-3.183-7.355-2.547-3.542.485-5.976.14-7.58-1.073-1.297-.983-5.172-1.807-8.61-1.832-6.662-.047-14.954-3.924-14.07-6.577.27-.808 2.336-1.946 4.592-2.53 3.992-1.035 4.082-1.205 3.343-6.308-.418-2.885-.896-6.65-1.063-8.37-.166-1.72-.942-4.25-1.724-5.625-.94-1.655-1.13-5.613-.56-11.708.903-9.71 2.8-12.667 8.125-12.667 2.412 0 2.395-.1-.34-2.016-1.982-1.39-2.68-2.847-2.244-4.687.474-1.997-.35-3.303-3.265-5.172-2.145-1.375-5.338-5.322-7.096-8.77-4.153-8.145-7.143-12.66-12.202-18.42-2.35-2.676-4.12-6.058-4.12-7.87 0-2.94-.974-4.154-8.798-10.954-1.433-1.247-2.425-3.215-2.204-4.376.648-3.397 5.495-3.165 12.162.582 3.41 1.918 6.636 3.053 7.167 2.522.53-.53-.04-3.8-1.272-7.264-1.523-4.288-1.975-7.852-1.415-11.165.748-4.425.307-5.546-4.847-12.322-5.62-7.393-8.388-12.67-12.684-24.193-2.308-6.19-4.358-8.72-4.358-5.375 0 1.056-1.347 2.803-2.994 3.882-1.647 1.08-3.282 3.06-3.633 4.404-.37 1.417-1.71 2.442-3.19 2.442-1.92 0-3.544-2.074-6.532-8.334-3.602-7.55-3.785-8.476-1.94-9.826 3.01-2.2 2.502-3.09-1.767-3.09-2.51 0-4.938-1.17-7.135-3.437-4.832-4.988-24.493-15.312-29.16-15.312-1.708 0-2.397.877-2.397 3.05 0 4.237-1.473 4.747-7.055 2.447-9.07-3.738-12.96-9.913-8.882-14.103 1.264-1.298.964-1.525-1.562-1.187-2.887.386-3.094.852-2.72 6.125.49 6.895-1.783 9.69-6.03 7.418-2.134-1.142-2.5-2.15-1.856-5.088.588-2.676.288-3.862-1.113-4.4-1.057-.405-3.63-3.764-5.717-7.465-2.09-3.7-5.122-7.596-6.742-8.657-1.62-1.06-4.686-5.504-6.816-9.872-2.512-5.15-4.81-8.186-6.538-8.64-3.766-.983-2.82-6.013 1.52-8.087 2.95-1.41 5.802-5.92 4.542-7.18-.247-.246-4.63.673-9.737 2.044-5.108 1.37-10.582 2.166-12.165 1.77-5.57-1.4-2.96 3.056 10.8 18.423 7.52 8.402 15.204 17.526 17.074 20.276 4.782 7.04 10.498 19.974 10.498 23.763 0 4.403-3.073 11.36-5.658 12.806-1.903 1.064-1.398 2.307 4.495 11.065 3.65 5.426 8.715 12.173 11.254 14.993l4.617 5.126 1.708-3.74c1.866-4.09 4.524-4.283 3.58-.263-.324 1.375-.593 5.12-.6 8.323-.008 4.64.82 6.926 4.066 11.25 2.242 2.985 7.517 10.208 11.722 16.052 4.206 5.844 10.585 14.28 14.176 18.75 5.788 7.202 13.04 19.597 21.023 35.938 2.138 4.372 3.218 5.312 6.108 5.312 2.582 0 3.51-.61 3.51-2.312 0-2.623-5.87-11.133-12.11-17.56-3.016-3.104-3.814-4.698-2.835-5.662.975-.96 2.08-.363 3.883 2.097 1.995 2.722 3.526 3.438 7.345 3.438 3.224 0 5.37.752 6.46 2.264.898 1.245 2.477 2.734 3.508 3.308 1.525.85 1.583.73.313-.64-2.127-2.29-1.97-6.104.29-6.97 2.11-.81 11.898 6.43 11.898 8.8 0 .854-1.433 2.898-3.184 4.543-2.313 2.174-3.082 4.027-2.812 6.78.35 3.567.74 3.827 6.62 4.415l6.25.625.276 8.75c.15 4.813.432 10.366.625 12.342.235 2.406-.406 4.056-1.94 5-1.89 1.162-2.655.89-4.375-1.554-3.697-5.25-12.986-14.608-12.244-12.334.394 1.212 3.2 6.006 6.234 10.654 5.954 9.12 11.602 23.264 13.417 33.598 2.188 12.453 1.82 12.266 11.758 5.982 4.813-3.044 9.947-5.54 11.41-5.548 3.18-.017 5.77 2.738 4.844 5.15-.43 1.12 1.79 3.198 6.296 5.894 3.828 2.29 6.76 4.76 6.518 5.488-.242.73-3.37 2.075-6.95 2.99-3.58.917-7.913 2.588-9.63 3.713-3.6 2.358-6.263.99-8.25-4.237-.62-1.63-1.827-2.718-2.682-2.415-2.542.9-1.25 7.526 3.45 17.7 2.42 5.24 6.04 14.993 8.045 21.677 2.005 6.683 4.586 14.682 5.736 17.776 1.148 3.094 2.362 8.72 2.697 12.5.53 5.983.188 7.434-2.626 11.18-3.54 4.717-3.942 7.66-1.86 13.634 1.4 4.02 2.864 4.933 4.266 2.666.887-1.435 3.112-.46 3.112 1.362 0 .657-1.828 2.31-4.062 3.672l-4.063 2.477 4.727.004c5.97.006 7.286 2.74 3.338 6.943-2.2 2.343-4.158 3.06-8.34 3.06h-5.463l.994 4.69c1.58 7.45.926 14.225-1.99 20.628-3.588 7.872-5.14 16.578-5.154 28.916-.01 8.156-.62 11.447-3.112 16.8-4.298 9.234-14.858 19.27-23.117 21.972-3.584 1.172-8.635 3.533-11.224 5.247-2.59 1.712-7.735 4.26-11.434 5.657-8.385 3.17-19.26 10.277-21.904 14.312-1.76 2.682-1.812 4.26-.44 13.087 1.484 9.53 1.823 10.244 6.715 14.15 5.206 4.154 10.605 6.47 23.442 10.058 7.9 2.207 21.654 11.618 23.77 16.265.748 1.64 4.246 4.54 7.775 6.447 3.53 1.907 7.822 4.452 9.54 5.654 1.72 1.204 6.5 2.855 10.626 3.67 8.57 1.695 13.504 3.936 15.862 7.206.9 1.25 3.43 3.582 5.62 5.183 2.19 1.6 5.8 6.346 8.023 10.546 2.223 4.2 5.417 9.46 7.098 11.69 2.99 3.97 3.04 4.42 2.342 21.25-1.216 29.26-1.463 30.102-16.243 55.322-1.813 3.094-3.304 6.552-3.312 7.684-.034 4.702-8.156 18.263-14.86 24.816-3.87 3.78-8.6 9.18-10.51 12-2.916 4.3-3.273 5.658-2.216 8.438 1.033 2.718 2.05 3.312 5.665 3.312 3.752 0 4.406-.423 4.406-2.847 0-4.257 3.445-8.402 6.985-8.402 4.102 0 5 2.848 2.723 8.642-1.706 4.342-1.676 5 .347 7.68 2.32 3.078 3.98 2.816 10.31-1.625 1.89-1.326 3.354-.97 9.375 2.277 7.58 4.09 8.376 5.4 9.69 15.937.625 5.008 1.11 5.89 2.85 5.184 1.152-.468 3.783-1.45 5.845-2.183zm-17.42-30.07c-1.762-2.31-3.205-4.732-3.205-5.378 0-1.59 12.872-14.214 14.493-14.214 1.636 0 8.008 6.59 8.008 8.28 0 2.07-8.166 10.92-12.28 13.305l-3.808 2.21-3.206-4.203zm12.656-8.608c2.142-2.362 1.415-5.984-1.202-5.984-2.83 0-10.08 8.356-9.21 10.62.71 1.853 1.12 1.832 4.624-.23 2.114-1.246 4.718-3.228 5.787-4.406zm30.868-236.688l-3.398-4.455 3.693-3.693 3.692-3.693 3.97 4.097 3.97 4.098-3.168 4.05c-1.744 2.227-3.663 4.05-4.266 4.05-.602 0-2.624-2.004-4.492-4.454zm6.308-2.904c.376-.61-.103-1.762-1.065-2.56-1.948-1.618-3.943.24-2.597 2.418.957 1.548 2.75 1.617 3.663.142zm-1.386-9.667c-3.778-4.007-4.062-4.76-2.474-6.563 3.432-3.898 3.765-9.778.79-13.956-2.348-3.298-2.52-4.31-1.254-7.368 3.78-9.124 12.644-12.936 21.88-9.408 3.07 1.172 6.853 1.8 8.406 1.392 2-.522 3.794.19 6.135 2.433 3.03 2.9 3.21 3.614 2.14 8.395-1.966 8.796-6.816 15.598-14.56 20.427-3.9 2.43-8.614 5.488-10.477 6.796-4.644 3.26-5.685 3.05-10.586-2.147zm8.877-2.82c.372-.6 4.576-3.41 9.342-6.242 7.344-4.362 8.96-5.96 10.6-10.467 1.066-2.926 2.098-6.726 2.295-8.445.322-2.814-.035-3.087-3.59-2.748-2.17.208-6.1-.522-8.733-1.622-6.95-2.904-13.673-1.513-16.186 3.347-2.323 4.492-1.544 7.273 2.037 7.273 1.9 0 2.454.603 2.008 2.188-.338 1.203-1 4.156-1.473 6.562-.47 2.406-1.68 5.31-2.684 6.45-1.616 1.834-1.564 2.227.45 3.4 2.812 1.633 5.042 1.75 5.934.306zm98.873-14.26l-3.213-4.02 5.65-5.197c6.336-5.83 8.527-5.917 13.677-.542l3.267 3.41-4.078 4.486c-2.456 2.702-5.672 4.765-8.084 5.185-3.423.596-4.473.113-7.218-3.322zm13.01-5.386c1.534-1.435 1.356-1.835-1.25-2.81-2.31-.865-3.863-.554-6.49 1.302-1.898 1.34-3.142 2.94-2.763 3.553.92 1.486 8.256.057 10.503-2.046zm-18-33.475l-3.544-4.646 4.186-4.318 4.185-4.32 3.506 3.36c1.928 1.847 3.505 3.72 3.505 4.166 0 .444-1.866 2.967-4.148 5.606l-4.147 4.798-3.544-4.646zm6.044-7.078c-1.665-1.665-4.825 1.78-3.54 3.86.624 1.01 1.457.847 2.866-.562 1.386-1.387 1.59-2.382.674-3.298zm-50.932-14.024c-1.706-2.237-3.664-5.545-4.35-7.35-1.07-2.817-.763-3.747 2.17-6.557l3.417-3.274 3.68 4.06c6.575 7.253 6.97 8.762 3.474 13.23-1.704 2.177-3.59 3.958-4.193 3.958-.602 0-2.49-1.83-4.198-4.068zm5.76-2.882c.798-.8-2.386-7.656-4.027-8.67-2.02-1.248-2.292 1.25-.58 5.32 1.62 3.852 3.058 4.898 4.606 3.35zm-21.443-11.46c-2.113-2.563-3.842-5.26-3.842-5.996 0-.735 2.165-3.45 4.81-6.034l4.81-4.697 3.94 4.488c2.167 2.468 3.94 5.4 3.94 6.513 0 2.746-5.958 10.388-8.098 10.388-.946 0-3.448-2.097-5.56-4.66zm8.237-3.545c.412-1.075.094-3.394-.708-5.154-1.41-3.092-1.542-3.125-3.915-.978-2.82 2.552-3.095 4.448-.957 6.586 2.085 2.085 4.685 1.873 5.58-.455zm-100.115-68.28l-4.48-5.235 3.366-3.515c4.39-4.58 6.52-4.433 11.596.804l4.186 4.32-3.38 4.43c-1.858 2.437-4.15 4.43-5.093 4.43-.943 0-3.73-2.355-6.195-5.234zm8.66-3.396c0-2.44-3.627-4.423-6.25-3.417-2.11.81-2.106.97.067 3.37 2.493 2.756 6.183 2.784 6.183.047zm-42.082-37.464c1.343-.85 1.282-1.205-.312-1.817-1.09-.418-1.98-1.922-1.98-3.343 0-2.156-.395-2.37-2.39-1.304-2.045 1.094-2.18 1.728-.937 4.408 1.532 3.3 2.88 3.792 5.62 2.055zm36.458-18.866c0-.666-.844-.887-1.875-.49-1.03.395-1.875.94-1.875 1.21s.844.49 1.875.49c1.03 0 1.875-.544 1.875-1.21zm-2.49-15.028c-1.153-.717-2.32-.7-3.062.04-.66.66-2.193 1.198-3.41 1.198-1.412 0-1.96.65-1.517 1.804 1.075 2.805 4.6 3.02 7.353.45 2.147-2.006 2.237-2.5.636-3.493zm28.115-38.7c-1.375-.565-5.23-3.44-8.567-6.39l-6.067-5.362.89-10.68c1.126-13.534 2.265-16.68 5.848-16.154 1.8.263 3.06 1.647 3.7 4.065.537 2.015 2.406 4.827 4.153 6.25 2.148 1.745 3.536 4.545 4.282 8.63.607 3.325 1.73 6.672 2.495 7.437 1.853 1.853 1.78 10.004-.11 11.89-1.708 1.71-3.074 1.775-6.624.314zm1.954-13.5c-.656-1.203-1.52-4.242-1.92-6.753-.47-2.954-1.817-5.28-3.818-6.59-1.7-1.115-3.092-2.857-3.092-3.873 0-1.015-.562-1.846-1.25-1.846-.687 0-1.334 2.53-1.437 5.625-.103 3.094-.243 6.234-.312 6.977-.142 1.533 9.044 8.39 11.448 8.546 1.124.073 1.233-.523.38-2.085zm-35.537-.127c-2.348-2.594-2.734-9.61-.602-10.927 2.1-1.298 4.81 3.085 4.81 7.782 0 4.994-1.512 6.124-4.208 3.145z\"\n       fill=\"#8e9e1e\"\n       id=\"path6737\" />\n    <path\n       d=\"m 91.385,1462.093 c -1.533,-1.188 -3.14,-3.936 -3.57,-6.106 -0.657,-3.31 -0.27,-4.284 2.412,-6.04 3.002,-1.968 4.53,-5.206 6.378,-13.534 0.55,-2.478 2.063,-4.055 5.113,-5.33 3.617,-1.51 4.33,-2.445 4.33,-5.674 0,-2.345 1.286,-5.394 3.268,-7.75 2.87,-3.41 3.178,-4.637 2.533,-10.084 -0.405,-3.41 -1.313,-6.78 -2.02,-7.485 -2.312,-2.312 -1.347,-6.698 2.345,-10.65 3.037,-3.25 4.558,-3.882 9.36,-3.882 5.25,0 5.988,0.395 8.777,4.688 3.597,5.537 10.03,12.37 15.176,16.123 3.106,2.264 3.462,3.05 2.264,5 -1.1,1.79 -2.795,2.27 -7.5,2.123 -5.107,-0.16 -5.692,0.04 -3.66,1.25 1.33,0.792 3.71,2.775 5.286,4.406 1.995,2.063 3.708,2.744 5.64,2.238 4.095,-1.07 6.03,1.3 6.03,7.385 0,4.637 -0.58,5.846 -4.062,8.48 -2.235,1.692 -6.557,3.738 -9.605,4.55 -3.047,0.81 -9.05,3.133 -13.34,5.16 -4.676,2.21 -9.468,3.577 -11.96,3.414 -5.845,-0.384 -11.31,2.62 -13.602,7.475 -1.738,3.682 -4.392,6.434 -6.18,6.41 -0.344,0 -1.88,-0.98 -3.413,-2.17 z m 5.73,-4.764 c 0.242,-1.32 1.28,-3.345 2.307,-4.503 3.046,-3.437 12.014,-7.087 15.688,-6.385 2.27,0.434 6.3,-0.777 12.46,-3.746 5.006,-2.413 11.072,-4.788 13.478,-5.277 5.99,-1.218 8.75,-3.98 8.75,-8.757 0,-3.543 -0.344,-3.943 -2.964,-3.442 -2.112,0.405 -4.106,-0.548 -6.932,-3.31 -3.278,-3.205 -4.395,-3.65 -6.43,-2.562 -3.396,1.818 -4.72,-1.832 -2.24,-6.173 1.648,-2.884 2.51,-3.2 7.814,-2.856 l 5.96,0.385 -7.697,-7.26 c -4.236,-3.994 -8.516,-8.81 -9.513,-10.7 -1.51,-2.864 -2.637,-3.437 -6.752,-3.437 -3.94,0 -5.37,0.658 -7.067,3.248 -1.72,2.623 -1.84,3.707 -0.633,5.64 0.822,1.318 1.834,5.64 2.248,9.605 0.683,6.53 0.445,7.578 -2.52,11.102 -1.914,2.275 -3.275,5.425 -3.275,7.58 0,3.938 -2.62,6.995 -7.187,8.387 -1.937,0.59 -2.812,1.828 -2.812,3.98 0,3.814 -1.835,7.54 -5.822,11.823 -2.574,2.764 -2.826,3.74 -1.715,6.664 1.433,3.764 4.16,3.76 4.855,-0.012 z m 4.49,-59.38 c -1.287,-2.085 1.61,-4.475 3.334,-2.75 1.442,1.442 0.54,4.108 -1.392,4.108 -0.606,0 -1.48,-0.61 -1.942,-1.36 z m 112.248,-13.887 c -4.342,-0.792 -7.004,-2.01 -7.85,-3.59 -1.782,-3.328 -6.936,-5.68 -14.6,-6.657 -4.32,-0.552 -7.345,-0.317 -8.97,0.698 -1.91,1.192 -3.172,1.2 -5.726,0.037 -1.802,-0.82 -5.156,-1.492 -7.454,-1.492 -3.21,0 -4.137,0.506 -4.004,2.187 0.236,2.975 -5.01,3.6 -7.94,0.948 -1.256,-1.136 -2.993,-3.78 -3.86,-5.873 -1.432,-3.455 -1.32,-4 1.224,-5.918 l 2.8,-2.113 -3.145,-1.434 c -2.247,-1.023 -3.392,-2.79 -4.004,-6.178 -1.722,-9.536 -4.754,-11.458 -10.12,-6.416 -2.65,2.488 -3.27,2.576 -7.763,1.094 -4.196,-1.385 -5.456,-1.326 -8.956,0.42 -5.19,2.59 -9.846,2.582 -13.562,-0.02 -2.643,-1.85 -2.854,-2.695 -2.157,-8.624 0.746,-6.353 0.625,-6.702 -3.645,-10.45 -4.605,-4.044 -11.874,-7.624 -15.478,-7.624 -3.77,0 -8.742,3.07 -9.11,5.625 -0.323,2.23 -1.69,2.602 -12.638,3.442 -9.68,0.743 -15.735,0.413 -28.622,-1.563 -8.99,-1.378 -17.107,-3.136 -18.037,-3.908 -2.222,-1.844 -2.092,-8.584 0.225,-11.648 2.677,-3.54 2.302,-4.213 -2.227,-4.008 -3.955,0.18 -4.06,0.053 -3.898,-4.753 0.12,-3.616 1.02,-5.672 3.358,-7.684 1.756,-1.51 2.864,-3.074 2.46,-3.476 -0.4,-0.402 -2.898,1.227 -5.547,3.62 -2.65,2.395 -5.417,4.354 -6.148,4.354 -2.957,0 -6.164,-2.748 -6.164,-5.282 0,-1.48 -0.666,-5.92 -1.48,-9.862 -1.84,-8.907 -0.99,-10.156 8.34,-12.244 3.79,-0.848 6.86,-1.923 6.82,-2.39 -0.037,-0.466 -1.678,-2.117 -3.645,-3.67 -2.934,-2.313 -4.165,-2.596 -6.85,-1.575 -4.782,1.818 -5.34,-1.165 -1.345,-7.2 4.07,-6.152 10.113,-9.575 15.506,-8.783 3.294,0.483 3.865,0.235 3.19,-1.39 -0.45,-1.09 -1.084,-2.892 -1.407,-4.007 -0.654,-2.258 2.274,-11.67 5.524,-17.757 1.166,-2.18 2.146,-4.247 2.18,-4.59 0.256,-2.565 4.982,-10.214 6.97,-11.278 1.346,-0.72 2.448,-2.438 2.448,-3.816 0,-4.262 4.617,-11.64 9.19,-14.688 2.536,-1.688 5.183,-4.952 6.318,-7.79 1.074,-2.686 3.087,-5.59 4.473,-6.457 1.384,-0.866 2.518,-2.092 2.518,-2.726 0,-3.044 8.002,-13.065 12.91,-16.167 3.03,-1.915 6.12,-4.824 6.867,-6.463 0.878,-1.928 2.813,-3.258 5.478,-3.765 4.595,-0.874 10.567,-5.484 11.96,-9.23 0.873,-2.353 5.09,-5.89 13.647,-11.442 3.03,-1.967 4.63,-4.518 6.66,-10.623 2.302,-6.916 3.835,-9.083 10.997,-15.547 4.577,-4.13 9.043,-7.51 9.925,-7.51 1.08,0 1.35,-1.006 0.832,-3.074 -0.657,-2.618 1.374,-5.466 13.686,-19.192 l 14.458,-16.118 9.103,-1.006 c 5.007,-0.553 11.7,-1.16 14.873,-1.346 8.623,-0.51 13.856,-3.256 19.937,-10.468 3.013,-3.573 7.38,-7.292 9.707,-8.264 2.325,-0.97 7.496,-4.597 11.49,-8.057 7.54,-6.533 19.55,-12.68 34.017,-17.413 8.054,-2.635 13.454,-7.14 13.454,-11.227 0,-2.413 11.565,-12.306 17.798,-15.225 3.274,-1.533 5.952,-3.296 5.952,-3.918 0,-0.62 4.578,-5.726 10.173,-11.343 5.595,-5.618 10.99,-11.46 11.987,-12.983 0.998,-1.523 3.03,-3.148 4.515,-3.61 1.486,-0.464 5.232,-2.92 8.326,-5.46 3.094,-2.54 8.126,-5.598 11.183,-6.796 3.06,-1.197 10.165,-5.773 15.793,-10.168 8.177,-6.385 11.412,-9.946 16.097,-17.724 6.92,-11.488 9.812,-15.61 16.856,-24.022 4.145,-4.95 6.423,-9.74 10.873,-22.862 3.095,-9.13 5.958,-19.693 6.362,-23.474 0.403,-3.782 2.675,-11.657 5.05,-17.5 5.742,-14.142 6.697,-17.116 7.624,-23.75 l 0.787,-5.625 9.375,-0.625 c 11.38,-0.76 18.757,-4.293 22.888,-10.964 1.587,-2.564 5.36,-10.005 8.382,-16.536 3.023,-6.532 6.46,-13.304 7.636,-15.05 5.274,-7.823 7.343,-17.9 7.362,-35.848 0.013,-11.167 0.562,-18.294 1.563,-20.26 0.848,-1.668 6.324,-7.164 12.168,-12.213 5.844,-5.05 14.872,-13.37 20.063,-18.49 7.586,-7.484 10.286,-9.38 13.75,-9.663 l 4.313,-0.35 -0.34,6.25 c -0.185,3.436 -0.44,8.29 -0.568,10.788 -0.482,9.486 7.38,20.228 12.714,17.373 1.32,-0.708 4.678,-1.287 7.457,-1.287 8.223,0 9.546,3.258 9.214,22.693 l -0.27,15.912 5.84,8.823 c 3.215,4.852 6.64,8.823 7.616,8.823 0.974,0 7.128,-5.12 13.675,-11.38 14.156,-13.533 18.192,-16.227 22.897,-15.286 2.956,0.59 3.866,0.01 6.486,-4.14 2.022,-3.204 3.354,-7.687 3.957,-13.32 0.805,-7.518 1.45,-9.058 5.61,-13.433 4.887,-5.138 8.727,-6.214 11.264,-3.157 1.8,2.17 -0.476,7.157 -6.292,13.78 -2.248,2.562 -3.652,5.405 -3.414,6.916 0.393,2.49 0.54,2.468 4.998,-0.716 4.81,-3.437 7.282,-3.2 7.282,0.696 0,2.576 -6.695,8.788 -9.47,8.788 -2.28,0 -2.24,0.46 0.408,4.657 1.28,2.027 3.355,3.51 5,3.567 2.272,0.08 2.812,-0.575 2.812,-3.41 0,-3.982 3.264,-6.575 9.786,-7.776 3.205,-0.59 5.072,-0.092 8.125,2.163 2.18,1.61 4.947,3.275 6.15,3.698 3.757,1.324 2.425,5.674 -4.157,13.584 -4.802,5.77 -5.943,7.88 -4.688,8.676 2.68,1.7 3.305,1.323 5.508,-3.32 2.538,-5.347 7.345,-9.34 11.245,-9.34 6.614,0 4.994,4.827 -3.34,9.955 -4.746,2.92 -6.13,4.49 -6.13,6.952 0,1.75 -0.942,4.618 -2.093,6.374 -1.646,2.513 -2.81,3.05 -5.463,2.52 -3.192,-0.64 -3.413,-0.37 -4.158,5.06 -1.483,10.823 -1.012,13.79 2.782,17.512 2.408,2.362 4.042,5.745 5.026,10.404 0.93,4.4 2.355,7.463 3.932,8.448 1.36,0.85 2.474,2.25 2.474,3.11 0,1.863 -10.347,17.713 -14.47,22.164 -3.974,4.292 -11.78,19.55 -11.78,23.026 0,1.587 -2.347,5.45 -5.312,8.743 -2.922,3.244 -7.86,9.628 -10.976,14.186 -4.05,5.93 -7.56,9.4 -12.33,12.203 -7.602,4.463 -8.252,5.356 -9.53,13.092 -0.51,3.093 -3.325,10.406 -6.256,16.25 -2.93,5.843 -6.606,13.718 -8.166,17.5 -3.552,8.608 -8.07,14.83 -11.797,16.246 -1.578,0.6 -3.084,1.735 -3.346,2.52 -0.447,1.343 -7.2,5.446 -21.66,13.16 -7.336,3.915 -14.363,13.17 -16.83,22.166 -1.802,6.568 -1.132,20.322 1.1,22.552 0.744,0.746 1.354,2.256 1.354,3.356 0,1.1 0.703,3.515 1.563,5.366 1.217,2.62 2.446,3.366 5.555,3.374 2.337,0.01 4.668,0.916 5.625,2.197 1.138,1.525 3.442,2.212 7.607,2.268 7.996,0.11 9.972,2.293 10.658,11.783 0.484,6.682 0.152,8.134 -2.85,12.464 -3.156,4.556 -9.584,7.787 -11.56,5.81 -0.4,-0.398 -1.422,0.23 -2.274,1.395 -1.425,1.95 -2.165,1.795 -9.33,-1.96 -7.663,-4.018 -7.998,-4.073 -22.323,-3.7 -11.464,0.297 -14.94,0.807 -16.42,2.405 -1.03,1.115 -6.093,3.294 -11.25,4.842 -5.155,1.548 -11.624,4.35 -14.374,6.226 -2.75,1.876 -10.77,6.36 -17.82,9.965 -15.202,7.772 -29.27,17.623 -39.9,27.942 -6.75,6.55 -7.825,8.245 -8.542,13.46 -0.45,3.282 -2.463,9.442 -4.47,13.69 -3.228,6.822 -3.62,8.904 -3.364,17.908 0.488,17.22 -1.448,31.946 -5.01,38.112 -1.724,2.982 -3.92,5.724 -4.884,6.093 -0.962,0.37 -3.152,3.273 -4.865,6.453 -1.713,3.18 -4.5,7.696 -6.195,10.034 -3.737,5.16 -5.147,10.13 -6.62,23.34 -1.064,9.525 -3.703,17.56 -7.156,21.784 -2.17,2.655 -13.048,22.58 -13.048,23.902 0,0.604 1.337,1.098 2.972,1.098 5.935,0 8.484,7.974 4.573,14.303 -2.598,4.203 -3.543,4.604 -19.32,8.192 -12.425,2.825 -17.528,7.435 -22.15,20.006 -2.03,5.524 -10.775,15.036 -20.337,22.12 -15.29,11.326 -18.102,15.015 -14.322,18.796 2.194,2.194 0.396,5.012 -3.785,5.93 -2.458,0.54 -4.724,2.347 -6.456,5.148 -3.17,5.13 -8.214,8.006 -14.045,8.006 -2.58,0 -5.086,0.93 -6.39,2.37 -1.178,1.302 -3.656,2.674 -5.505,3.048 -8.282,1.675 -11.07,2.637 -14.08,4.855 -2.743,2.023 -3.713,2.15 -6.563,0.85 -2.563,-1.168 -4.088,-1.185 -6.528,-0.072 -3.56,1.622 -3.62,1.622 -12.76,-0.045 z m 12.106,-3.66 c 2.997,-1.046 4.835,-1.042 7.155,0.015 2.608,1.188 3.65,1.008 6.32,-1.094 1.76,-1.384 4.11,-2.525 5.22,-2.535 3.045,-0.03 10.376,-2.83 13.86,-5.295 1.7,-1.203 5.285,-2.187 7.968,-2.187 4.264,0 5.59,-0.786 10.548,-6.25 3.12,-3.438 6.374,-6.25 7.234,-6.25 1.056,0 1.498,-1.884 1.36,-5.803 -0.174,-5.03 0.236,-6.07 3.083,-7.813 6.114,-3.742 20.58,-16.074 26.24,-22.368 3.096,-3.444 6.323,-8.578 7.17,-11.41 2.89,-9.644 14.433,-18.895 25.806,-20.682 9.45,-1.484 14.085,-3.42 15.47,-6.457 1.758,-3.86 0.494,-3.76 -3.737,0.294 -1.99,1.905 -4.03,2.875 -4.906,2.333 -1.025,-0.633 0.032,-2.335 3.336,-5.366 l 4.837,-4.438 -4,-1.04 c -2.2,-0.574 -4.325,-1.565 -4.72,-2.203 -0.703,-1.138 9.364,-21.35 12.477,-25.05 4.374,-5.2 7.303,-13.716 8.372,-24.342 1.19,-11.848 3.482,-18.412 9.486,-27.178 2.017,-2.945 4.064,-6.62 4.548,-8.168 0.485,-1.55 1.95,-3.387 3.258,-4.087 7.123,-3.812 10.937,-20.18 10.172,-43.662 -0.304,-9.316 0.03,-11.247 2.826,-16.386 1.744,-3.203 3.965,-9.614 4.936,-14.244 1.617,-7.716 2.376,-9.01 9.08,-15.488 10.38,-10.03 30.49,-24.19 42.94,-30.234 5.844,-2.837 12.69,-6.792 15.214,-8.79 2.523,-1.995 9.55,-5.21 15.614,-7.14 9.597,-3.06 11.148,-3.952 11.974,-6.897 3.1,-11.062 2.436,-10.278 8.49,-10.007 3.07,0.138 7.887,0.257 10.703,0.265 6.268,0.018 9.033,2.577 5.813,5.382 -1.2,1.046 -3.027,2.212 -4.058,2.59 -1.03,0.38 1.097,0.735 4.73,0.79 4.436,0.065 8.656,1.138 12.86,3.268 3.44,1.743 6.795,2.835 7.457,2.426 0.662,-0.41 1.203,-2.867 1.203,-5.462 0,-2.594 0.37,-5.088 0.823,-5.54 1.656,-1.656 4.178,2.077 4.178,6.184 0,2.92 0.58,4.222 1.875,4.222 2.625,0 6.657,-4.32 7.623,-8.17 1.123,-4.476 -0.213,-13.222 -2.216,-14.49 -2.366,-1.5 -6.93,-1.332 -9.633,0.357 -3.31,2.067 -6.774,0.452 -5.776,-2.69 0.67,-2.113 0.23,-2.507 -2.8,-2.507 -1.976,0 -4.686,0.826 -6.02,1.835 -3.198,2.418 -6.11,2.38 -8.17,-0.103 -1.44,-1.734 -1.244,-2.37 1.383,-4.495 2.308,-1.87 2.96,-3.444 2.652,-6.42 -0.223,-2.168 -0.98,-4.64 -1.68,-5.493 -1.99,-2.424 -2.72,-17.09 -1.155,-23.3 0.777,-3.085 3.73,-9.245 6.562,-13.687 4.227,-6.63 6.41,-8.708 12.19,-11.605 3.873,-1.94 7.233,-3.982 7.468,-4.536 0.235,-0.555 2.247,-1.77 4.47,-2.698 2.224,-0.93 7.44,-4.27 11.59,-7.428 5.75,-4.373 8.208,-7.28 10.333,-12.22 1.534,-3.564 5.488,-12.16 8.787,-19.103 3.3,-6.942 6.388,-14.872 6.863,-17.622 1.275,-7.373 4.874,-12.33 11.382,-15.677 3.915,-2.014 7.1,-5.01 9.863,-9.274 2.243,-3.465 6.966,-9.566 10.494,-13.56 3.76,-4.253 6.416,-8.45 6.416,-10.136 0,-4.122 6.615,-16.07 15.05,-27.18 4,-5.267 8.135,-11.246 9.19,-13.286 1.765,-3.414 1.738,-3.87 -0.344,-5.756 -2.354,-2.13 -5.146,-9.83 -5.146,-14.193 0,-1.464 -1.04,-2.793 -2.485,-3.17 -3.887,-1.017 -5.35,-6.632 -4.438,-17.027 0.994,-11.324 3.43,-16.694 7.308,-16.1 1.642,0.25 2.58,1.16 2.338,2.264 -0.328,1.51 -0.103,1.553 1.24,0.23 3.176,-3.122 -4.095,-5.364 -8.96,-2.76 -1.378,0.737 -4.28,0.842 -7.104,0.256 -4.56,-0.948 -4.773,-1.214 -4.773,-5.936 0,-4.222 0.424,-5.004 2.903,-5.356 1.597,-0.225 3.847,-0.044 5,0.403 1.9,0.737 1.87,0.98 -0.33,2.6 -2.312,1.7 -2.263,1.785 1.034,1.785 3.74,0 10.768,-5.963 10.768,-9.135 0,-1.005 1.406,-2.75 3.125,-3.875 3.31,-2.17 4.142,-4.49 1.61,-4.49 -0.834,0 -2.713,-1.5 -4.176,-3.336 -2.05,-2.57 -3.206,-3.09 -5.047,-2.26 -2.46,1.112 -3.758,1.453 -6.45,1.702 -0.867,0.08 -1.562,1.798 -1.562,3.862 0,2.81 -0.857,4.16 -3.507,5.53 -3.814,1.974 -6.492,6.652 -6.492,11.345 0,3.085 -5.182,8.158 -8.333,8.158 -2.607,0 -3.46,-3.524 -1.666,-6.877 0.87,-1.627 1.245,-4.25 0.832,-5.828 -0.538,-2.057 0.16,-3.82 2.47,-6.23 3.313,-3.46 3.112,-7.545 -0.235,-4.767 -0.94,0.78 -2.297,1.055 -3.014,0.612 -2.163,-1.337 -1.48,-4.347 1.705,-7.533 2.25,-2.25 2.635,-3.322 1.52,-4.247 -1.07,-0.888 -2.684,0.515 -5.726,4.973 -4.123,6.04 -8.145,8.398 -11.884,6.963 -2.13,-0.817 -9.787,5.096 -23.063,17.81 -5.643,5.404 -10.324,8.875 -11.97,8.875 -2.898,0 -6.75,-3.69 -9.13,-8.75 -0.81,-1.72 -2.745,-4.714 -4.302,-6.655 -2.625,-3.275 -2.833,-4.768 -2.867,-20.625 -0.02,-9.402 -0.476,-17.798 -1.012,-18.658 -1.217,-1.954 -6.29,-2.008 -11.504,-0.123 -3.607,1.304 -4.4,1.105 -8.45,-2.127 -7.69,-6.136 -10.79,-17.44 -7.777,-28.375 0.84,-3.055 0.618,-3.43 -2.012,-3.384 -1.777,0.032 -4.203,1.62 -6.082,3.982 -4.332,5.446 -7.16,8.215 -15.032,14.716 -3.747,3.093 -9.912,8.544 -13.702,12.112 l -6.89,6.487 -0.68,21.013 -0.678,21.013 -9.098,18.75 c -5.004,10.312 -9.632,19.593 -10.284,20.625 -0.652,1.03 -1.99,3.613 -2.97,5.738 -3.616,7.833 -15.27,14.262 -25.858,14.262 -6.99,0 -7.308,0.137 -7.308,3.172 0,1.745 -2.012,8.354 -4.472,14.687 -6.158,15.857 -7.64,20.62 -8.45,27.14 -0.382,3.095 -3.03,12.817 -5.886,21.606 -5.193,15.994 -6.17,17.757 -19.61,35.42 -3.6,4.73 -7.487,10.57 -8.637,12.975 -4.323,9.046 -23.257,25.453 -35.75,30.98 -2.996,1.325 -7.387,4.1 -9.758,6.166 -2.372,2.066 -6.14,4.693 -8.374,5.838 -2.234,1.144 -4.062,2.585 -4.062,3.202 0,1.815 -27.37,28.814 -29.21,28.814 -3.537,0 -13.22,8.857 -15.623,14.288 -2.876,6.502 -5.564,8.455 -17.135,12.45 -15.063,5.202 -24.677,10.19 -32.407,16.815 -4.125,3.537 -9.302,7.29 -11.504,8.345 -2.203,1.053 -6.1,4.472 -8.662,7.597 -5.63,6.87 -12.894,10.825 -20.46,11.14 -3.094,0.127 -10.045,0.682 -15.447,1.233 l -9.82,1.002 -4.36,6.065 c -2.396,3.336 -4.74,6.066 -5.212,6.066 -0.47,0 -3.933,3.628 -7.695,8.063 -4.614,5.44 -6.84,9.164 -6.84,11.445 0,2.637 -1.376,4.352 -6.25,7.79 -9.26,6.53 -13.18,11.344 -15.6,19.17 l -2.173,7.018 4.847,5.67 c 6.164,7.212 3.956,9.303 -2.473,2.34 l -4.616,-5 -3.977,2.065 c -4.957,2.574 -18.468,17.176 -18.49,19.985 -0.013,1.52 -1.196,2.11 -4.392,2.19 -2.406,0.06 -5.04,0.2 -5.853,0.312 -2.778,0.38 -2.946,4.82 -0.484,12.734 1.355,4.35 2.16,8.4 1.79,9 -1.297,2.097 -4.022,-1.73 -5.59,-7.855 -1.662,-6.478 -2.285,-6.975 -6.147,-4.908 -2.913,1.56 -9.965,11.606 -9.965,14.198 0,1.04 -1.163,2.706 -2.585,3.702 -3.506,2.456 -7.74,10.483 -6.07,11.514 2.35,1.454 0.408,3.596 -3.308,3.645 -3.238,0.043 -3.71,0.54 -4.067,4.283 -0.7,7.325 0.612,10.14 4.723,10.14 4.88,0 10.396,2.19 9.435,3.747 -0.426,0.69 -2.65,1.253 -4.942,1.253 -5.266,0 -6.716,3.016 -2.712,5.64 3.622,2.373 6.36,8.028 4.694,9.694 -0.77,0.77 -1.9,-0.142 -3.14,-2.542 -2.143,-4.144 -8.86,-10.292 -11.247,-10.292 -0.84,0 -2.22,-0.69 -3.06,-1.533 -1.212,-1.21 -1.006,-1.933 0.976,-3.437 2.065,-1.567 2.367,-2.783 1.702,-6.85 -0.65,-3.975 -0.996,-4.467 -1.765,-2.5 -0.526,1.344 -0.996,4.006 -1.044,5.913 -0.06,2.395 -0.96,3.806 -2.9,4.557 -1.547,0.597 -3.784,2.758 -4.972,4.8 -2.076,3.573 -2.063,3.8 0.342,5.978 2.957,2.676 1.25,5.714 -1.793,3.19 -1.49,-1.237 -2.064,-1.096 -3.01,0.74 -2.757,5.34 -5.375,15.545 -4.61,17.96 0.755,2.373 1.028,2.438 2.952,0.697 2.992,-2.71 11.27,-5.994 12.77,-5.068 2.025,1.253 -0.798,3.716 -6.367,5.554 -6.197,2.045 -7.516,3.573 -6.163,7.142 0.943,2.487 1.467,2.637 5.17,1.482 2.264,-0.707 5.125,-1.83 6.356,-2.497 1.233,-0.667 2.807,-0.86 3.5,-0.433 2.22,1.37 -1.422,4.285 -7.162,5.73 -9.18,2.312 -6.068,4.444 5.362,3.674 5.268,-0.355 6.038,1.402 2.195,5.012 -2.627,2.468 -4.773,3.055 -12.62,3.452 -7.264,0.367 -10.432,1.142 -13.686,3.35 -2.33,1.58 -6.536,3.262 -9.348,3.738 -4.953,0.836 -5.088,0.987 -4.31,4.794 0.443,2.162 1.14,6.32 1.55,9.243 1.09,7.773 2.15,7.425 12.016,-3.948 4.39,-5.06 8.44,-5.502 5.836,-0.637 -1.48,2.767 -0.642,4.898 1.93,4.898 3.773,0 3.05,2.658 -1.205,4.436 -2.65,1.107 -5.008,3.194 -5.716,5.055 -1.65,4.342 -1.616,4.408 1.888,3.53 2.484,-0.625 3.375,-0.16 4.524,2.363 1.155,2.535 1.04,3.697 -0.593,6.03 -3.193,4.56 -2.618,8.263 1.413,9.1 23.57,4.904 48.046,5.157 51.325,0.53 2.132,-3.004 8.075,-6.045 11.816,-6.045 4.15,0 11.863,3.99 18.112,9.372 5.2,4.478 5.308,4.73 5,11.665 -0.304,6.852 -0.203,7.1 3.04,7.475 1.845,0.213 5.05,-0.49 7.125,-1.562 4.53,-2.342 8.084,-2.478 11.36,-0.433 2.04,1.275 2.9,1.076 5.375,-1.25 4.16,-3.906 8.604,-3.56 11.925,0.932 1.504,2.035 2.735,5.088 2.735,6.786 0,1.697 0.948,4.034 2.107,5.193 1.976,1.976 2.165,1.95 3.038,-0.407 1.502,-4.063 3.512,-4.43 4.858,-0.89 1.517,3.99 0.162,6.94 -4.28,9.316 -3.874,2.073 -3.942,2.67 -0.74,6.476 l 2.483,2.95 -0.295,-3.124 c -0.283,-2.997 -0.04,-3.11 5.955,-2.772 3.438,0.195 7.81,0.972 9.72,1.728 2.79,1.105 3.896,0.987 5.655,-0.605 1.725,-1.562 3.234,-1.744 7.156,-0.862 2.733,0.615 6.506,1.44 8.384,1.832 1.878,0.393 5.352,2.416 7.72,4.496 3.632,3.187 6.784,4.39 15.866,6.045 0.413,0.076 2.566,-0.495 4.785,-1.268 z M 55.502,1321.895 c -1.656,-1.83 -1.995,-3.048 -1.098,-3.945 0.766,-0.765 1.055,-4.722 0.705,-9.657 -0.51,-7.163 -0.245,-8.675 1.844,-10.558 2.326,-2.096 2.526,-2.096 4.358,0 1.13,1.292 2.18,5.64 2.552,10.55 0.58,7.67 0.363,8.677 -2.667,12.306 l -3.3,3.953 -2.394,-2.647 z m 5.93,-13.124 c -0.73,-9.42 -1.24,-11.106 -3.032,-9.998 -0.93,0.575 -1.205,3.785 -0.805,9.377 0.34,4.744 0.07,9.042 -0.61,9.722 -0.67,0.67 -0.794,1.906 -0.274,2.747 0.678,1.095 1.564,0.71 3.128,-1.365 1.707,-2.263 2.055,-4.546 1.595,-10.483 z m -33.507,-4.46 c -1.88,-2.08 -1.637,-2.534 3.704,-6.91 5.572,-4.566 5.782,-4.628 8.224,-2.42 2.492,2.257 2.485,2.29 -1.415,6.313 -4.867,5.02 -7.91,5.894 -10.514,3.017 z m 9.36,-4.365 c 4.025,-4.285 0.853,-5.157 -4.343,-1.194 -2.404,1.833 -4.094,3.78 -3.757,4.327 0.988,1.598 5.177,-0.023 8.1,-3.133 z m 36.563,0.66 c -1.885,-2.725 -4.02,-4.975 -4.744,-5 -0.725,-0.027 -3.214,-2.005 -5.53,-4.396 -4.13,-4.26 -4.17,-4.398 -1.91,-6.894 l 2.305,-2.547 2.682,2.52 c 1.475,1.384 3.24,2.518 3.92,2.518 1.497,0 8,6.87 10.814,11.425 1.902,3.078 1.89,3.434 -0.185,5.312 -3.097,2.803 -3.487,2.647 -7.35,-2.94 z m 6.388,1.5 c 0.906,-1.465 -5.83,-10.733 -8.922,-12.275 -1.513,-0.754 -3.824,-2.342 -5.135,-3.53 -1.678,-1.518 -2.644,-1.735 -3.264,-0.733 -1.017,1.645 4.02,7.488 6.457,7.488 0.902,0 3.13,2.25 4.948,5 3.25,4.91 4.75,5.938 5.918,4.05 z m -0.723,-14.14 -3.84,-3.84 2.68,-2.683 c 2.533,-2.53 2.803,-2.562 4.824,-0.54 2.02,2.02 2.357,1.928 6.032,-1.634 l 3.893,-3.773 2.322,2.566 c 2.287,2.526 2.238,2.65 -3.164,8.155 -3.017,3.075 -6.255,5.59 -7.196,5.59 -0.94,0 -3.44,-1.728 -5.552,-3.84 z m 11.428,-2.926 c 5.625,-5.802 3.852,-8.68 -1.908,-3.098 -4.103,3.977 -4.286,4.028 -6.025,1.67 -1.355,-1.835 -2.15,-2.078 -3.253,-0.99 -1.11,1.092 -0.83,2.065 1.166,4.06 3.587,3.588 5.21,3.322 10.02,-1.64 z m 0.427,-34.716 c -2.663,-2.663 -2.8,-2.674 -5.278,-0.43 -2.425,2.193 -2.657,2.2 -4.96,0.115 -1.344,-1.217 -2.09,-3.03 -1.685,-4.09 0.618,-1.61 0.3,-1.672 -2.063,-0.408 -2.31,1.236 -3.21,1.12 -5.196,-0.68 -2.347,-2.123 -2.28,-2.296 2.885,-7.538 5.04,-5.115 5.396,-5.266 7.64,-3.238 1.766,1.598 4.055,2.02 9.208,1.692 6.107,-0.388 7.258,-0.054 10.494,3.046 2,1.915 3.634,4.11 3.634,4.878 0,2.025 -7.916,9.386 -10.094,9.386 -1.018,0 -3.08,-1.23 -4.584,-2.733 z m 9.285,-2.484 c 3.54,-3.326 3.627,-4.98 0.413,-7.89 -2.02,-1.827 -3.875,-2.116 -10.018,-1.56 -6.54,0.594 -7.708,0.37 -8.812,-1.693 -1.195,-2.235 -1.524,-2.133 -5.446,1.68 -4.684,4.553 -3.924,7.483 1.09,4.198 2.847,-1.865 3.295,-1.887 3.947,-0.186 0.404,1.055 0.42,2.744 0.03,3.753 -1.036,2.704 1.82,3.886 3.578,1.48 2.106,-2.88 6.424,-2.62 7.222,0.435 0.857,3.275 4.38,3.18 7.995,-0.218 z m 6.027,-18.522 c -1.25,-1.38 -3.082,-2.51 -4.072,-2.51 -2.057,0 -8.082,-3.928 -13.115,-8.55 -3.185,-2.927 -3.285,-3.307 -1.41,-5.38 1.925,-2.126 2.268,-2.058 7.404,1.475 2.96,2.038 6.906,3.705 8.766,3.705 3.293,0 3.36,-0.15 2.605,-5.67 -0.91,-6.652 -6.015,-12.2 -10.324,-11.22 -1.597,0.363 -3.472,-0.323 -4.753,-1.738 -2.004,-2.215 -1.94,-2.476 1.243,-4.98 4.29,-3.373 5.615,-3.32 12.767,0.5 5.86,3.13 5.88,3.133 6.296,0.503 0.227,-1.452 -0.766,-3.896 -2.208,-5.43 -2.497,-2.658 -2.517,-2.885 -0.416,-4.73 1.48,-1.298 3.03,-1.602 4.707,-0.923 1.375,0.557 2.86,1.052 3.302,1.1 1.02,0.112 2.797,-6.155 2.482,-8.745 -0.13,-1.077 0.926,-3.01 2.35,-4.3 2.54,-2.3 2.644,-2.282 5.938,1.012 3.297,3.297 3.317,3.414 1.19,7.014 -1.19,2.015 -2.364,5.388 -2.61,7.495 -0.245,2.108 -1.06,4.572 -1.808,5.475 -0.75,0.903 -2.036,5.832 -2.858,10.953 -1.557,9.692 -6.58,21.473 -10.772,25.258 -2.33,2.103 -2.533,2.09 -4.706,-0.312 z m 7.952,-8.538 c 1.942,-3.904 4.203,-11.287 5.025,-16.407 0.82,-5.12 2.107,-10.05 2.857,-10.953 0.75,-0.903 1.563,-3.367 1.81,-5.475 0.244,-2.107 1.416,-5.475 2.602,-7.483 1.987,-3.366 1.997,-3.81 0.132,-5.676 -2.317,-2.317 -5.008,-1.257 -4.625,1.82 0.38,3.058 -1.398,8.653 -3.235,10.178 -1.066,0.885 -2.65,0.928 -4.748,0.13 -4.183,-1.59 -5.23,-0.276 -2.335,2.926 1.288,1.426 2.685,4.42 3.104,6.656 0.968,5.16 -0.872,5.292 -9.926,0.708 -5.708,-2.89 -7.075,-3.15 -9.883,-1.87 -3.834,1.747 -2.98,4.3 1.095,3.278 4.06,-1.02 11.558,6.17 12.672,12.15 1.942,10.42 -3.765,12.922 -13.768,6.04 -3.054,-2.102 -5.79,-3.223 -6.21,-2.546 -1.118,1.81 10.717,9.985 14.51,10.02 2.28,0.022 3.504,0.84 3.98,2.658 0.972,3.72 2.863,2.042 6.94,-6.154 z m 79.773,-4.964 c -1.54,-1.7 -2.11,-4.605 -2.11,-10.75 0,-4.633 -0.58,-9.51 -1.292,-10.84 -1.21,-2.26 -1.58,-2.296 -5.778,-0.542 -7.246,3.028 -11.49,2.425 -15.906,-2.26 -3.166,-3.358 -4.176,-5.877 -5.384,-13.437 -1.453,-9.093 -1.42,-9.373 1.515,-12.353 2.836,-2.88 3.133,-2.932 5.334,-0.94 1.524,1.38 2.16,3.302 1.84,5.55 -0.27,1.89 0.658,6.024 2.064,9.183 l 2.555,5.743 5.545,-0.84 c 3.05,-0.464 7.046,-1.827 8.883,-3.03 3.183,-2.085 3.454,-2.084 5.778,0.02 1.34,1.212 2.14,2.985 1.774,3.937 -0.366,0.953 0,2.957 0.814,4.454 2.338,4.305 1.357,23.436 -1.344,26.205 -2.09,2.14 -2.262,2.137 -4.285,-0.1 z m 4.276,-12.758 c 0.2,-6.443 -0.25,-11.696 -1.147,-13.347 -0.814,-1.496 -1.16,-3.548 -0.773,-4.56 1.173,-3.057 -1.526,-3.512 -5.93,-1 -2.29,1.304 -6.512,2.658 -9.388,3.01 l -5.228,0.638 -3.283,-6.936 c -1.906,-4.025 -3.122,-8.516 -2.898,-10.702 0.42,-4.082 -1.538,-5.68 -3.727,-3.04 -2.118,2.55 1.07,19.225 4.385,22.947 3.14,3.524 7.955,3.866 14.71,1.043 2.565,-1.072 4.79,-1.775 4.943,-1.563 3.89,5.373 4.45,7.315 4.45,15.456 0,4.89 0.384,9.273 0.854,9.743 1.844,1.843 2.712,-1.507 3.03,-11.688 z m 28.945,-60.226 c -2.115,-2.114 -3.07,-2.38 -4.447,-1.238 -1.372,1.14 -2.23,0.926 -3.96,-0.983 -1.87,-2.067 -1.988,-3.064 -0.773,-6.55 0.79,-2.26 2.948,-6.296 4.798,-8.967 2.075,-2.993 3.48,-6.83 3.662,-10.007 0.606,-10.484 1.814,-15.547 4.235,-17.738 2.332,-2.11 2.613,-2.12 4.597,-0.135 1.16,1.163 2.173,3.094 2.246,4.292 0.074,1.198 0.23,4.12 0.348,6.49 0.167,3.355 0.547,3.98 1.714,2.813 0.825,-0.825 2.698,-1.5 4.16,-1.5 1.97,0 3.423,-1.623 5.59,-6.25 1.61,-3.436 3.864,-7.097 5.01,-8.134 1.868,-1.69 2.308,-1.638 4.245,0.502 2.058,2.274 2,2.703 -1.195,9.01 -1.846,3.644 -4.455,8.11 -5.798,9.926 -1.733,2.345 -2.44,5.318 -2.44,10.26 0,5.287 -0.58,7.485 -2.41,9.142 -2.296,2.077 -2.532,2.073 -4.912,-0.08 -1.536,-1.39 -2.557,-3.997 -2.648,-6.757 -0.182,-5.527 -1.985,-13.237 -2.204,-9.426 -0.08,1.413 -1.835,5.23 -3.898,8.482 -3.966,6.253 -4.836,9.914 -2.11,8.868 0.904,-0.347 2.587,0.414 3.742,1.69 1.982,2.19 1.905,2.504 -1.38,5.652 l -3.48,3.333 -2.692,-2.693 z m 6.39,-5.026 c -0.398,-0.643 -1.44,-0.893 -2.32,-0.556 -1.838,0.706 -4.4,-1.468 -4.4,-3.734 0,-0.848 1.803,-4.442 4.007,-7.987 3.635,-5.848 4.01,-7.39 4.062,-16.646 0.044,-8.032 -0.323,-10.2 -1.73,-10.2 -2.205,0 -3.623,5.03 -4.01,14.233 -0.212,5.07 -1.114,8.144 -3.25,11.08 -4.113,5.65 -6.885,12.715 -5.942,15.145 0.723,1.863 0.93,1.853 2.384,-0.12 1.48,-2.01 1.796,-1.944 4.5,0.935 2.713,2.887 3.064,2.96 5.165,1.057 1.24,-1.122 1.93,-2.566 1.532,-3.208 z m 12.945,-12.95 c 0.194,-4.92 1.08,-8.442 2.664,-10.584 4.59,-6.21 9.163,-16.472 7.9,-17.735 -0.79,-0.79 -2.69,1.572 -5.41,6.714 -3.46,6.542 -4.85,8.043 -7.944,8.57 -2.062,0.35 -3.723,1.195 -3.69,1.875 0.14,2.93 2.043,16.383 2.53,17.905 0.296,0.916 1.24,1.433 2.098,1.148 0.968,-0.32 1.674,-3.327 1.853,-7.89 z m 82.835,13.565 c -1.03,-0.378 -2.864,-1.55 -4.073,-2.603 -2.05,-1.788 -2.06,-2.067 -0.118,-4.212 2.797,-3.09 5.697,-2.892 8.993,0.617 2.652,2.823 2.666,2.978 0.432,5 -2.478,2.242 -2.43,2.23 -5.234,1.2 z m 4.156,-2.434 c 1.266,-1.267 -1.685,-4.178 -4.235,-4.178 -3.542,0 -4.152,2.393 -0.94,3.68 3.64,1.46 4.16,1.51 5.174,0.498 z m -14.38,-7.568 c -1.63,-1.87 -1.77,-3.86 -0.845,-12.156 0.683,-6.143 1.888,-10.788 3.164,-12.198 1.935,-2.138 2.2,-2.15 4.39,-0.168 3.403,3.08 2,19.712 -2.017,23.897 -2.62,2.73 -2.834,2.76 -4.694,0.625 z m 5.744,-13.072 c 0.525,-6.168 0.352,-9.874 -0.486,-10.392 -0.716,-0.442 -1.603,-0.02 -1.972,0.942 -1.06,2.76 -2.79,20.173 -2.12,21.345 1.553,2.72 3.84,-3.22 4.578,-11.894 z m -185.787,6.82 c -1.09,-1.23 -2.587,-4.454 -3.326,-7.17 -1.117,-4.107 -0.998,-5.316 0.704,-7.197 1.915,-2.117 2.194,-2.128 4.354,-0.174 1.27,1.15 2.963,4.275 3.763,6.947 1.293,4.316 1.18,5.135 -1.027,7.34 -2.378,2.378 -2.567,2.39 -4.467,0.252 z m 2.723,-8.007 c -1.006,-2.813 -2.392,-4.915 -3.08,-4.67 -1.42,0.503 -1.1,4.66 0.73,9.47 0.95,2.497 1.58,2.912 2.71,1.784 1.128,-1.13 1.044,-2.663 -0.36,-6.585 z m 148.234,-20.282 c -3.964,-5.197 -4.03,-8.344 -0.252,-11.894 2.69,-2.527 3.08,-2.587 4.633,-0.716 0.933,1.123 1.825,2.924 1.983,4 0.16,1.08 1.42,3.492 2.805,5.364 2.407,3.255 2.42,3.49 0.294,5.415 -3.36,3.04 -5.943,2.446 -9.463,-2.17 z m 8.41,0.914 c 0.422,-0.422 -0.364,-2.296 -1.746,-4.165 -1.38,-1.87 -2.714,-4.478 -2.96,-5.796 -0.248,-1.318 -0.494,-2.606 -0.546,-2.862 -0.318,-1.546 -3.846,3.075 -3.846,5.037 0,5.34 6.222,10.664 9.1,7.787 z m 16.623,-11.627 c -1.91,-2.11 -2.06,-4.104 -1.278,-16.813 0.775,-12.584 1.238,-14.75 3.636,-17 2.7,-2.538 2.785,-2.54 4.906,-0.198 1.56,1.726 2.423,5.812 3.12,14.787 0.527,6.822 1.325,12.995 1.772,13.72 0.836,1.35 -1.392,3.593 -6.298,6.336 -3.528,1.97 -3.292,2.005 -5.858,-0.83 z m 6.6,-2.08 c 2.302,-1.15 3.597,-2.552 3.1,-3.357 -0.472,-0.762 -1.284,-6.898 -1.806,-13.637 -1.044,-13.482 -1.707,-15.635 -4.183,-13.58 -2.636,2.19 -3.967,32.548 -1.425,32.548 0.197,0 2.14,-0.888 4.314,-1.973 z m 22.396,-20.214 c -1.283,-1.462 -1.584,-3.015 -0.906,-4.687 0.557,-1.375 1.052,-5.975 1.1,-10.222 0.078,-6.813 0.478,-8.027 3.406,-10.33 3.11,-2.448 3.462,-2.48 5.625,-0.522 4.218,3.816 2.145,19.414 -3.392,25.533 -2.69,2.973 -3.4,3 -5.832,0.23 z m 5.98,-4.203 c 2.223,-4.298 3.82,-16.05 2.612,-19.203 -0.614,-1.6 -1.292,-1.736 -3.29,-0.666 -2.09,1.118 -2.52,2.61 -2.52,8.723 0,4.057 -0.527,8.76 -1.17,10.453 -1.144,3.01 -0.68,4.585 1.346,4.585 0.556,0 1.915,-1.75 3.022,-3.89 z m 80,-77.612 -4.495,-5.256 2.594,-2.558 2.595,-2.56 4.833,5.626 c 4.462,5.192 4.682,5.794 2.86,7.813 -2.76,3.06 -3.318,2.857 -8.387,-3.065 z m 7.226,1.816 c 0.314,-0.515 -1.056,-2.88 -3.044,-5.256 -4.74,-5.664 -7.413,-3.663 -2.867,2.146 3.15,4.025 4.82,4.903 5.912,3.11 z m -11.967,-78.75 c -2.157,-2.444 -1.3,-6.183 2.052,-8.965 1.733,-1.44 2.396,-1.368 4.43,0.473 1.39,1.26 2.087,3.032 1.662,4.235 -0.885,2.503 -4.157,6.445 -5.352,6.445 -0.474,0 -1.73,-0.984 -2.793,-2.187 z m 5.187,-3.124 c 1.14,-3.02 0.694,-4.688 -1.258,-4.688 -1.41,0 -3.61,5.173 -2.79,6.563 1.063,1.807 2.994,0.913 4.048,-1.874 z m 134.597,-44.56 c -2.74,-3.025 -1.754,-9.357 2.11,-13.564 2.346,-2.555 2.774,-2.635 4.716,-0.877 1.798,1.627 1.936,2.763 0.87,7.185 -0.695,2.89 -2.21,6.257 -3.367,7.485 -2.018,2.14 -2.196,2.13 -4.33,-0.23 z m 5.204,-7.323 c 1.308,-5.384 0.375,-7.815 -1.91,-4.98 -1.762,2.19 -3.137,9.347 -2.112,11.003 1.24,2.008 2.548,0.05 4.022,-6.023 z m 38.512,-3.964 c -2.388,-2.64 -3.356,-1.645 14.517,-14.91 8.107,-6.018 8.41,-6.13 10.485,-3.84 2.764,3.056 1.78,4.253 -10.594,12.882 -12.614,8.798 -11.987,8.543 -14.408,5.867 z m 14.605,-8.506 c 5.33,-3.717 9.688,-7.25 9.688,-7.848 0,-1.767 -2.257,-2.642 -3.138,-1.217 -0.446,0.72 -5.27,4.435 -10.718,8.253 -5.45,3.818 -9.584,7.465 -9.19,8.104 0.86,1.393 1.073,1.277 13.36,-7.293 z m -94.26,-16.23 c -1.055,-1.227 -3.192,-4.93 -4.75,-8.228 -2.714,-5.745 -2.74,-6.098 -0.627,-8.433 2.854,-3.154 4.617,-1.745 8.99,7.184 3.287,6.716 3.288,6.724 0.796,9.216 -2.387,2.386 -2.577,2.397 -4.41,0.262 z m 0.933,-9.84 c -2.36,-4.824 -3.856,-6.644 -4.735,-5.766 -0.878,0.88 -0.22,3.535 2.088,8.412 2.435,5.146 3.75,6.75 4.736,5.765 0.984,-0.985 0.403,-3.323 -2.09,-8.412 z m -503.86,455.634 c 0,-8.42 -8.07,-11.53 -15.744,-6.065 -3.846,2.738 -4.724,4.915 -1.982,4.915 0.907,0 2.872,1.406 4.366,3.125 2.104,2.42 3.92,3.125 8.038,3.124 l 5.32,0 0,-5.097 z m 8.46,4.28 c -0.845,-0.342 -2.532,-0.363 -3.75,-0.046 -1.215,0.317 -0.522,0.597 1.54,0.623 2.063,0.025 3.058,-0.234 2.21,-0.576 z m 486.827,-228.685 c -0.416,-0.415 -1.494,-0.46 -2.396,-0.1 -0.997,0.4 -0.7,0.696 0.755,0.756 1.317,0.053 2.055,-0.242 1.64,-0.657 z m -5.6,-2.657 c 3.13,-0.9 2.7,-2.662 -0.866,-3.557 -3.845,-0.966 -5.696,0.147 -5.696,3.426 0,1.947 0.523,2.344 2.188,1.66 1.203,-0.496 3.17,-1.185 4.375,-1.53 z M 634.8,736.066 c 0,-1.703 0.984,-4.623 2.188,-6.49 l 2.187,-3.393 -2.95,1.912 c -2.23,1.444 -3.014,3.186 -3.204,7.117 -0.14,2.862 0.204,4.922 0.762,4.576 0.56,-0.345 1.016,-2.02 1.016,-3.723 z m 2.743,-43.306 c 1.853,-2.892 3.235,-5.392 3.07,-5.556 -1.224,-1.225 -6.252,1.83 -7.737,4.7 -4.405,8.52 -0.678,9.2 4.668,0.856 z m 113.716,88.674 c -0.742,-0.894 -1.69,-4.128 -2.107,-7.188 -1.356,-9.935 -1.71,-10.647 -6.67,-13.436 -6.015,-3.38 -7.083,-3.404 -11.09,-0.252 -4.54,3.57 -7.247,3.113 -11.043,-1.864 -3.29,-4.314 -3.305,-4.423 -1.278,-9.49 1.485,-3.714 1.62,-4.984 0.484,-4.606 -0.862,0.287 -1.913,2.217 -2.337,4.288 -1.196,5.847 -2.175,6.672 -7.924,6.672 -5.897,0 -8.75,-2.17 -10.132,-7.707 -0.688,-2.763 0.375,-4.932 6.24,-12.724 3.888,-5.166 8.436,-10.288 10.107,-11.383 2.91,-1.907 11.776,-17.654 11.805,-20.966 0.008,-0.877 3.69,-8.004 8.182,-15.837 9.344,-16.294 10.51,-21.176 11.445,-47.954 l 0.557,-15.947 -4.262,-5.93 c -2.344,-3.26 -4.946,-7.653 -5.782,-9.762 -0.836,-2.11 -4.928,-6.835 -9.095,-10.503 -6.66,-5.86 -8.654,-6.886 -16.505,-8.477 -4.91,-0.996 -10.063,-2.852 -11.447,-4.125 -1.384,-1.274 -4.677,-3.218 -7.317,-4.32 -2.64,-1.104 -8.54,-5.83 -13.11,-10.5 -9.33,-9.542 -13.125,-11.853 -23.557,-14.35 -10.727,-2.57 -18.15,-6.183 -23.78,-11.58 -4.33,-4.15 -5.21,-5.94 -6.43,-13.037 -1.96,-11.392 -1.793,-14.08 1.094,-17.75 3.624,-4.607 16.162,-12.848 23.166,-15.225 3.31,-1.124 9.154,-3.946 12.985,-6.27 3.83,-2.325 9.31,-4.905 12.177,-5.733 6.903,-1.993 15.737,-11.092 19.08,-19.653 1.85,-4.73 2.592,-9.525 2.614,-16.875 0.034,-11.768 1.3,-18.283 5.707,-29.368 2.89,-7.266 3.013,-8.404 1.664,-15.263 -1.987,-10.1 -1.344,-11.262 6.235,-11.262 6.63,0 9.898,-2.062 4.323,-2.727 -4.41,-0.525 -6.853,-4.34 -4.105,-6.408 1.796,-1.35 1.767,-1.84 -0.306,-5.24 -3.298,-5.41 -2.965,-12.14 0.826,-16.646 1.76,-2.09 3.125,-5.296 3.125,-7.333 0,-4.27 -3.376,-17.8 -4.915,-19.698 -0.59,-0.727 -2.516,-6.78 -4.283,-13.45 -1.766,-6.672 -5.213,-16.103 -7.66,-20.96 -2.445,-4.858 -4.79,-11.338 -5.21,-14.402 -0.723,-5.277 -0.573,-5.644 2.84,-6.95 4.136,-1.584 6.734,-0.477 8.603,3.665 1.295,2.87 1.48,2.866 9.712,-0.177 4.378,-1.618 4.555,-1.872 2.5,-3.59 -1.217,-1.017 -3.795,-2.524 -5.73,-3.35 -2.71,-1.157 -3.338,-2.074 -2.73,-3.992 0.436,-1.37 0.38,-2.49 -0.12,-2.49 -0.502,0 -5.363,2.61 -10.804,5.8 -11.916,6.985 -12.364,6.76 -15.308,-7.657 -1.12,-5.49 -3.035,-12.24 -4.254,-15 -1.22,-2.76 -2.624,-6.64 -3.12,-8.625 -0.497,-1.985 -2.2,-5.36 -3.786,-7.5 -5.36,-7.24 -9.915,-16.59 -9.106,-18.7 0.437,-1.136 1.817,-2.067 3.067,-2.067 2.247,0 12.342,9.532 15.225,14.375 1.287,2.162 1.355,1.994 0.504,-1.25 -0.54,-2.062 -0.998,-6.703 -1.016,-10.312 -0.033,-6.487 -0.077,-6.562 -3.878,-6.562 -4.705,0 -9.28,-4.46 -9.28,-9.047 0,-1.793 1.393,-4.916 3.096,-6.94 2.94,-3.495 2.985,-3.777 0.892,-5.672 -2.054,-1.858 -2.2,-1.765 -2.158,1.36 0.063,4.698 -3.704,5.118 -8.103,0.903 -5.285,-5.062 -7.085,-3.275 -2.505,2.488 3.014,3.792 3.815,5.915 3.526,9.346 -0.355,4.222 -0.62,4.457 -5.438,4.81 -6.88,0.507 -8.32,-1.3 -21.173,-26.62 -2.443,-4.813 -6.387,-11.282 -8.765,-14.376 -2.377,-3.094 -7.994,-10.687 -12.482,-16.875 -4.487,-6.187 -10.717,-14.478 -13.843,-18.423 -3.127,-3.945 -5.912,-8.354 -6.19,-9.797 -0.59,-3.066 -9.056,-14.522 -11.394,-15.42 -0.88,-0.337 -2.83,-3.025 -4.334,-5.974 -1.504,-2.95 -4.904,-7.935 -7.556,-11.08 -5.658,-6.71 -5.912,-8.24 -1.685,-10.165 4.88,-2.224 6.433,-9.152 3.816,-17.034 -3.427,-10.32 -14.403,-25.457 -30.252,-41.723 -8.322,-8.542 -9.325,-10.078 -8.972,-13.75 0.39,-4.056 0.515,-4.136 6.647,-4.254 3.438,-0.067 9.837,-1.06 14.22,-2.21 6.028,-1.58 8.39,-1.742 9.688,-0.664 3.688,3.06 0.658,11.354 -4.978,13.63 -2,0.806 -2.15,1.1 -0.583,1.16 1.292,0.048 3.313,2.74 5.274,7.022 1.75,3.82 5.612,9.867 8.585,13.438 2.972,3.57 6.954,8.6 8.848,11.178 l 3.444,4.686 2.75,-3.03 c 3.612,-3.98 9.887,-5.29 12.167,-2.542 1.327,1.6 1.368,2.48 0.19,4.118 -2.923,4.064 -3.052,5.443 -0.718,7.682 3.94,3.78 7.23,4.144 8.633,0.955 0.992,-2.26 2.204,-2.787 6.23,-2.715 2.75,0.05 6.686,1.007 8.748,2.128 2.063,1.12 7.24,3.812 11.504,5.978 4.265,2.167 8.637,5.288 9.716,6.935 1.303,1.99 3.148,2.995 5.49,2.995 1.94,0 4.546,1.125 5.79,2.5 2.092,2.312 2.11,2.67 0.233,4.742 -1.88,2.078 -1.824,2.652 0.754,7.813 l 2.784,5.57 3.51,-3.75 c 1.933,-2.062 4.286,-4.875 5.23,-6.25 2.78,-4.044 5.615,-1.035 11.3,11.988 2.825,6.47 7.808,15.66 11.073,20.422 5.05,7.367 5.822,9.27 5.168,12.752 -0.457,2.438 0.05,6.594 1.256,10.28 4.025,12.3 0.426,15.484 -10.675,9.442 -3.448,-1.877 -6.602,-3.08 -7.01,-2.672 -0.406,0.407 1.53,1.897 4.303,3.312 4.432,2.26 5.142,3.236 5.864,8.052 0.583,3.89 2.43,7.433 6.354,12.203 3.042,3.698 7.252,10.098 9.355,14.223 2.27,4.455 5.434,8.526 7.788,10.026 2.267,1.443 3.965,3.584 3.965,5 0,1.36 1.125,3.422 2.5,4.582 1.997,1.685 2.223,2.565 1.122,4.375 -0.757,1.246 -2.545,2.44 -3.97,2.654 -1.428,0.214 -3.143,1.058 -3.813,1.876 -1.946,2.376 -2.315,16.456 -0.49,18.655 0.874,1.053 1.582,3.527 1.575,5.5 -0.008,1.97 0.314,6.217 0.713,9.436 0.625,5.033 0.36,6.08 -1.893,7.488 -4.148,2.59 -3.11,3.53 3.944,3.574 3.698,0.022 7.594,0.82 8.924,1.827 1.587,1.202 4.046,1.56 7.5,1.092 4.408,-0.597 5.57,-0.234 8.17,2.548 1.666,1.783 4.055,3.243 5.31,3.243 4.513,0 10.65,7.66 13.44,16.778 1.455,4.76 3.266,9.4 4.023,10.313 2.015,2.427 7.853,2.024 10.33,-0.714 1.972,-2.18 2,-3.08 0.35,-11.058 -0.99,-4.777 -3.695,-12.11 -6.014,-16.297 l -4.217,-7.61 3.41,-3.56 c 3.124,-3.26 3.344,-4.128 2.636,-10.392 -0.922,-8.15 -2.644,-11.842 -7.812,-16.756 -5.687,-5.407 -4.61,-10.704 2.174,-10.704 5.605,0 18.766,14.313 18.965,20.625 0.042,1.375 0.854,3.525 1.804,4.778 1.662,2.193 1.96,2.195 7.967,0.062 5.22,-1.853 6.568,-1.946 8.235,-0.562 3.14,2.606 2.367,5.403 -2.694,9.74 l -4.687,4.014 3.87,0.047 c 5.68,0.07 8.113,3.557 8.906,12.768 0.374,4.348 1.176,8.534 1.78,9.303 0.606,0.77 1.627,6.676 2.27,13.126 0.642,6.45 1.81,13.696 2.597,16.102 0.786,2.406 1.52,10.844 1.628,18.75 l 0.198,14.375 4.375,2.186 c 2.406,1.2 6.438,2.185 8.96,2.186 4.418,0 24.614,7.03 31.04,10.804 1.72,1.01 5.094,2.703 7.5,3.766 2.406,1.062 5.22,2.634 6.25,3.493 1.03,0.858 8.49,3.96 16.576,6.89 8.086,2.932 15.014,5.838 15.397,6.457 0.384,0.62 2.88,2.24 5.55,3.602 3.79,1.933 5.566,2.203 8.12,1.23 1.8,-0.683 5.825,-1.242 8.946,-1.242 4.004,0 6.72,-0.83 9.216,-2.813 1.947,-1.546 4.934,-3.787 6.637,-4.978 2.923,-2.045 11.25,-12.368 16.2,-20.08 2.872,-4.477 9.25,-8.368 13.724,-8.374 2.424,-0.004 5.383,-1.775 9.683,-5.797 5.89,-5.508 6.604,-5.817 14.634,-6.312 6.048,-0.373 9.33,0.012 11.568,1.354 1.72,1.03 5.26,2.818 7.87,3.97 10.996,4.86 15.337,7.597 17.087,10.775 1.713,3.11 1.65,3.59 -0.824,6.25 -1.473,1.584 -4.213,7.66 -6.09,13.505 -1.874,5.844 -4.28,12.594 -5.347,15 -1.065,2.406 -2.004,6.344 -2.085,8.75 -0.08,2.406 -0.853,8.312 -1.717,13.125 -0.973,5.428 -1.253,12.372 -0.738,18.29 0.563,6.474 0.385,9.818 -0.556,10.4 -0.762,0.47 -2.213,2.837 -3.225,5.257 -4.03,9.645 -17.22,21.678 -23.766,21.678 -3.787,0 -4.292,0.48 -6.228,5.938 -1.16,3.265 -2.397,11 -2.752,17.187 l -0.644,11.25 5.113,5 c 2.812,2.75 5.122,5.42 5.134,5.934 0.01,0.514 -1.867,3.045 -4.174,5.625 -2.307,2.58 -4.858,5.957 -5.67,7.504 -3.534,6.744 -8.138,0.536 -7.417,-10.003 0.403,-5.885 0.366,-5.95 -3.968,-6.875 -2.406,-0.514 -11.98,-0.935 -21.277,-0.935 l -16.9,0 -6.85,4.488 c -3.765,2.47 -8.692,5.554 -10.948,6.856 -2.256,1.302 -6.44,5.47 -9.3,9.262 -13.028,17.285 -10.407,42.182 4.045,38.403 5.584,-1.46 4.302,4.227 -5.293,23.493 -4.498,9.03 -6.566,14.93 -7.452,21.25 -1.488,10.618 -4.143,15.4 -13.54,24.382 -7.873,7.528 -10.454,13.487 -9.21,21.268 0.587,3.673 0.105,5.224 -2.64,8.485 -1.845,2.195 -4.123,3.99 -5.06,3.99 -3.893,0 -7.848,2.934 -8.526,6.325 -0.39,1.947 -4.008,7.99 -8.04,13.43 -4.41,5.947 -7.994,12.327 -8.99,16.004 -2.13,7.866 -4.573,12.833 -8.237,16.76 -1.615,1.727 -3.823,5.665 -4.908,8.75 -1.085,3.083 -3.638,7.682 -5.674,10.22 -2.035,2.538 -3.7,5.46 -3.7,6.494 0,1.035 -2.17,3.46 -4.824,5.387 -2.653,1.928 -9.236,7.083 -14.63,11.455 -5.39,4.372 -10.674,8.268 -11.737,8.658 -1.064,0.39 -4.465,2.94 -7.56,5.668 -5.406,4.767 -19.31,12.1 -22.943,12.1 -0.963,0 -2.357,-0.73 -3.098,-1.624 z m 10.417,-4.963 c 5.058,-1.794 11.95,-6.222 15,-9.635 1.375,-1.538 5.03,-4.082 8.125,-5.653 3.094,-1.57 7.774,-4.884 10.402,-7.365 2.627,-2.48 5.3,-4.51 5.937,-4.51 0.64,0 1.16,-0.788 1.16,-1.75 0,-0.965 2.11,-2.848 4.69,-4.185 2.577,-1.337 4.88,-3.502 5.12,-4.81 0.24,-1.308 1.806,-3.837 3.483,-5.62 1.677,-1.782 4.194,-6.254 5.593,-9.937 1.4,-3.683 4.123,-8.494 6.05,-10.69 1.93,-2.197 4.482,-6.725 5.672,-10.063 1.19,-3.338 2.737,-7.624 3.438,-9.525 0.7,-1.9 4.31,-7.525 8.023,-12.5 3.712,-4.974 7.09,-10.45 7.505,-12.17 1.065,-4.4 5.113,-8.48 9.333,-9.408 4.964,-1.09 7.544,-5.134 6.574,-10.304 -1.176,-6.27 2.494,-14.35 9.342,-20.566 10.187,-9.248 11.335,-11.492 13.924,-27.222 0.672,-4.087 3.944,-12.41 8.068,-20.522 3.815,-7.506 6.936,-14.397 6.936,-15.313 0,-0.916 -1.05,-1.665 -2.33,-1.665 -3.216,0 -8.566,-4.44 -10.982,-9.112 -2.49,-4.813 -1.56,-20.07 1.597,-26.238 4.02,-7.848 12.318,-16.266 23.506,-23.842 l 11.333,-7.675 19.375,0.03 c 15.02,0.02 20.38,0.476 23.84,2.026 l 4.467,2 -0.484,7.968 -0.484,7.97 5.03,-5.21 5.032,-5.21 -4.377,-4.78 c -2.406,-2.627 -4.712,-6.118 -5.123,-7.758 -1.196,-4.764 0.532,-23.236 2.648,-28.3 1.065,-2.548 1.665,-5.073 1.334,-5.61 -1.1,-1.778 2.412,-3.422 8.743,-4.093 5.706,-0.605 6.826,-1.3 12.87,-7.976 3.64,-4.023 6.943,-8.848 7.338,-10.723 0.396,-1.876 1.502,-4.06 2.46,-4.854 1.346,-1.118 1.558,-3.612 0.938,-11.045 -0.567,-6.803 -0.194,-12.597 1.282,-19.878 1.145,-5.652 1.71,-10.877 1.257,-11.61 -0.454,-0.736 0.317,-3.95 1.713,-7.145 1.397,-3.195 4.052,-10.59 5.9,-16.434 1.87,-5.907 4.53,-11.636 5.99,-12.902 3.048,-2.643 1.975,-5.495 -2.995,-7.963 -17.854,-8.86 -21.765,-10.385 -26.665,-10.385 -7.197,0 -12.638,2.062 -15.016,5.693 -2.336,3.565 -7.1,6.162 -13.383,7.3 -4.563,0.825 -9.605,5.957 -18.562,18.897 -1.72,2.483 -6.724,7.292 -11.124,10.688 -7.198,5.555 -8.64,6.173 -14.41,6.173 -3.69,0 -7.552,0.8 -9.1,1.885 -2.5,1.75 -3.248,1.538 -10.59,-3.024 -4.346,-2.7 -13.526,-6.994 -20.4,-9.542 -6.876,-2.547 -13.994,-5.686 -15.82,-6.975 -1.824,-1.29 -4.146,-2.345 -5.158,-2.345 -1.013,0 -2.495,-0.787 -3.294,-1.75 -0.8,-0.962 -4.664,-2.986 -8.59,-4.498 -3.927,-1.512 -10.41,-4.1 -14.41,-5.75 -4.146,-1.713 -9.793,-3.002 -13.146,-3.002 -4.232,0 -7.184,-0.887 -10.543,-3.17 -5.347,-3.633 -4.997,-2.4 -5.303,-18.705 -0.13,-6.875 -0.913,-14.75 -1.74,-17.5 -0.828,-2.75 -1.99,-10.27 -2.585,-16.71 -0.594,-6.438 -1.69,-12.317 -2.433,-13.06 -0.745,-0.746 -1.41,-3.914 -1.48,-7.042 -0.213,-9.79 -1.304,-11.937 -6.062,-11.937 -3.2,0 -4.49,-0.7 -5.515,-2.99 -1.192,-2.665 -0.807,-3.453 3.516,-7.19 2.67,-2.307 4.553,-4.497 4.184,-4.866 -0.37,-0.37 -3.555,0.466 -7.08,1.856 l -6.41,2.526 -3.128,-4.957 c -1.72,-2.725 -3.128,-5.603 -3.128,-6.395 0,-4.56 -10.803,-17.36 -14.653,-17.36 -3.852,0 -3.58,2.044 0.754,5.69 4.767,4.013 7.177,9.55 8.16,18.748 0.74,6.95 0.557,7.796 -2.27,10.452 l -3.075,2.89 4.05,7.672 c 2.226,4.22 4.813,11.764 5.747,16.765 l 1.698,9.09 -3.565,3.722 c -7.487,7.815 -16.788,3.517 -20.113,-9.296 -2.344,-9.028 -7.128,-15.732 -11.228,-15.732 -1.8,0 -3.782,-1.272 -5.086,-3.263 -1.9,-2.9 -2.72,-3.183 -7.355,-2.547 -3.542,0.485 -5.976,0.14 -7.58,-1.073 -1.297,-0.983 -5.172,-1.807 -8.61,-1.832 -6.662,-0.047 -14.954,-3.924 -14.07,-6.577 0.27,-0.808 2.336,-1.946 4.592,-2.53 3.992,-1.035 4.082,-1.205 3.343,-6.308 -0.418,-2.885 -0.896,-6.65 -1.063,-8.37 -0.166,-1.72 -0.942,-4.25 -1.724,-5.625 -0.94,-1.655 -1.13,-5.613 -0.56,-11.708 0.903,-9.71 2.8,-12.667 8.125,-12.667 2.412,0 2.395,-0.1 -0.34,-2.016 -1.982,-1.39 -2.68,-2.847 -2.244,-4.687 0.474,-1.997 -0.35,-3.303 -3.265,-5.172 -2.145,-1.375 -5.338,-5.322 -7.096,-8.77 -4.153,-8.145 -7.143,-12.66 -12.202,-18.42 -2.35,-2.676 -4.12,-6.058 -4.12,-7.87 0,-2.94 -0.974,-4.154 -8.798,-10.954 -1.433,-1.247 -2.425,-3.215 -2.204,-4.376 0.648,-3.397 5.495,-3.165 12.162,0.582 3.41,1.918 6.636,3.053 7.167,2.522 0.53,-0.53 -0.04,-3.8 -1.272,-7.264 -1.523,-4.288 -1.975,-7.852 -1.415,-11.165 0.748,-4.425 0.307,-5.546 -4.847,-12.322 -5.62,-7.393 -8.388,-12.67 -12.684,-24.193 -2.308,-6.19 -4.358,-8.72 -4.358,-5.375 0,1.056 -1.347,2.803 -2.994,3.882 -1.647,1.08 -3.282,3.06 -3.633,4.404 -0.37,1.417 -1.71,2.442 -3.19,2.442 -1.92,0 -3.544,-2.074 -6.532,-8.334 -3.602,-7.55 -3.785,-8.476 -1.94,-9.826 3.01,-2.2 2.502,-3.09 -1.767,-3.09 -2.51,0 -4.938,-1.17 -7.135,-3.437 -4.832,-4.988 -24.493,-15.312 -29.16,-15.312 -1.708,0 -2.397,0.877 -2.397,3.05 0,4.237 -1.473,4.747 -7.055,2.447 -9.486,-3.91 -12.806,-9.566 -8.443,-14.387 1.88,-2.078 1.787,-2.154 -1.563,-1.252 -3.335,0.898 -3.538,1.32 -3.158,6.57 0.49,6.797 -1.806,9.584 -6.032,7.322 -2.134,-1.142 -2.5,-2.15 -1.856,-5.088 0.588,-2.676 0.288,-3.862 -1.113,-4.4 -1.057,-0.405 -3.63,-3.764 -5.717,-7.465 -2.09,-3.7 -5.122,-7.596 -6.742,-8.657 -1.62,-1.06 -4.686,-5.504 -6.816,-9.872 -2.512,-5.15 -4.81,-8.186 -6.538,-8.64 -3.766,-0.983 -2.82,-6.013 1.52,-8.087 2.95,-1.41 5.802,-5.92 4.542,-7.18 -0.247,-0.246 -4.63,0.673 -9.737,2.044 -5.108,1.37 -10.582,2.166 -12.165,1.77 -5.57,-1.4 -2.96,3.056 10.8,18.423 7.52,8.402 15.204,17.526 17.074,20.276 4.782,7.04 10.498,19.974 10.498,23.763 0,4.403 -3.073,11.36 -5.658,12.806 -1.903,1.064 -1.398,2.307 4.495,11.065 3.65,5.426 8.715,12.173 11.254,14.993 l 4.617,5.126 1.708,-3.74 c 1.866,-4.09 4.524,-4.283 3.58,-0.263 -0.324,1.375 -0.593,5.12 -0.6,8.323 -0.008,4.64 0.82,6.926 4.066,11.25 2.242,2.985 7.517,10.208 11.722,16.052 4.206,5.844 10.585,14.28 14.176,18.75 5.788,7.202 13.04,19.597 21.023,35.938 2.138,4.372 3.218,5.312 6.108,5.312 2.582,0 3.51,-0.61 3.51,-2.312 0,-2.623 -5.87,-11.133 -12.11,-17.56 -3.016,-3.104 -3.814,-4.698 -2.835,-5.662 0.975,-0.96 2.08,-0.363 3.883,2.097 1.995,2.722 3.526,3.438 7.345,3.438 3.224,0 5.37,0.752 6.46,2.264 0.898,1.245 2.477,2.734 3.508,3.308 1.525,0.85 1.583,0.73 0.313,-0.64 -2.127,-2.29 -1.97,-6.104 0.29,-6.97 2.11,-0.81 11.898,6.43 11.898,8.8 0,0.854 -1.433,2.898 -3.184,4.543 -2.313,2.174 -3.082,4.027 -2.812,6.78 0.35,3.567 0.74,3.827 6.62,4.415 l 6.25,0.625 0.276,8.75 c 0.15,4.813 0.432,10.366 0.625,12.342 0.235,2.406 -0.406,4.056 -1.94,5 -1.89,1.162 -2.655,0.89 -4.375,-1.554 -3.697,-5.25 -12.986,-14.608 -12.244,-12.334 0.394,1.212 3.2,6.006 6.234,10.654 5.954,9.12 11.602,23.264 13.417,33.598 2.188,12.453 1.82,12.266 11.758,5.982 4.813,-3.044 9.947,-5.54 11.41,-5.548 3.18,-0.017 5.77,2.738 4.844,5.15 -0.43,1.12 1.79,3.198 6.296,5.894 3.828,2.29 6.76,4.76 6.518,5.488 -0.242,0.73 -3.37,2.075 -6.95,2.99 -3.58,0.917 -7.913,2.588 -9.63,3.713 -3.6,2.358 -6.263,0.99 -8.25,-4.237 -0.62,-1.63 -1.827,-2.718 -2.682,-2.415 -2.542,0.9 -1.25,7.526 3.45,17.7 2.42,5.24 6.04,14.993 8.045,21.677 2.005,6.683 4.586,14.682 5.736,17.776 1.148,3.094 2.362,8.72 2.697,12.5 0.53,5.983 0.188,7.434 -2.626,11.18 -3.54,4.717 -3.942,7.66 -1.86,13.634 1.4,4.02 2.864,4.933 4.266,2.666 0.887,-1.435 3.112,-0.46 3.112,1.362 0,0.657 -1.828,2.31 -4.062,3.672 l -4.063,2.477 4.727,0.004 c 5.97,0.006 7.286,2.74 3.338,6.943 -2.2,2.343 -4.158,3.06 -8.34,3.06 l -5.463,0 0.994,4.69 c 1.58,7.45 0.926,14.225 -1.99,20.628 -3.588,7.872 -5.14,16.578 -5.154,28.916 -0.01,8.156 -0.62,11.447 -3.112,16.8 -4.298,9.234 -14.858,19.27 -23.117,21.972 -3.584,1.172 -8.635,3.533 -11.224,5.247 -2.59,1.712 -7.735,4.26 -11.434,5.657 -8.385,3.17 -19.26,10.277 -21.904,14.312 -1.76,2.682 -1.812,4.26 -0.44,13.087 1.484,9.53 1.823,10.244 6.715,14.15 5.206,4.154 10.605,6.47 23.442,10.058 7.9,2.207 21.654,11.618 23.77,16.265 0.748,1.64 4.246,4.54 7.775,6.447 3.53,1.907 7.822,4.452 9.54,5.654 1.72,1.204 6.5,2.855 10.626,3.67 8.57,1.695 13.504,3.936 15.862,7.206 0.9,1.25 3.43,3.582 5.62,5.183 2.19,1.6 5.8,6.346 8.023,10.546 2.223,4.2 5.417,9.46 7.098,11.69 2.99,3.97 3.04,4.42 2.342,21.25 -1.216,29.26 -1.463,30.102 -16.243,55.322 -1.813,3.094 -3.304,6.552 -3.312,7.684 -0.034,4.702 -8.156,18.263 -14.86,24.816 -3.87,3.78 -8.6,9.18 -10.51,12 -2.916,4.3 -3.273,5.658 -2.216,8.438 1.033,2.718 2.05,3.312 5.665,3.312 3.752,0 4.406,-0.423 4.406,-2.847 0,-4.257 3.445,-8.402 6.985,-8.402 4.102,0 5,2.848 2.723,8.642 -1.706,4.342 -1.676,5 0.347,7.68 2.32,3.078 3.98,2.816 10.31,-1.625 1.89,-1.326 3.354,-0.97 9.375,2.277 7.58,4.09 8.376,5.4 9.69,15.937 0.625,5.008 1.11,5.89 2.85,5.184 1.152,-0.468 3.783,-1.45 5.845,-2.183 z m -16.082,-31.976 c -2.944,-3.255 -2.66,-4.06 3.612,-10.214 4.557,-4.473 6.055,-5.294 7.728,-4.24 4.505,2.842 4.86,5.232 1.327,8.92 -1.84,1.92 -4.984,4.46 -6.985,5.642 -3.458,2.043 -3.74,2.037 -5.68,-0.108 z m 11.32,-6.702 c 2.142,-2.362 1.415,-5.984 -1.202,-5.984 -2.83,0 -10.08,8.356 -9.21,10.62 0.71,1.853 1.12,1.832 4.624,-0.23 2.114,-1.246 4.718,-3.228 5.787,-4.406 z m 32.263,-238.484 c -2.184,-2.413 -2.183,-2.588 0.018,-5.02 l 2.28,-2.52 2.913,2.737 c 2.726,2.56 2.78,2.88 0.845,5.02 -2.61,2.883 -3.27,2.86 -6.054,-0.217 z m 4.913,-1.108 c 0.376,-0.61 -0.103,-1.762 -1.065,-2.56 -1.948,-1.618 -3.943,0.24 -2.597,2.418 0.957,1.548 2.75,1.617 3.663,0.142 z m 0.19,-11.534 c -2.994,-2.355 -3.16,-2.864 -1.524,-4.687 1.01,-1.126 2.232,-4.188 2.718,-6.804 0.733,-3.952 0.404,-5.267 -1.942,-7.764 -2.517,-2.68 -2.657,-3.41 -1.288,-6.715 3.25,-7.845 10.384,-10.403 19.402,-6.96 3.07,1.173 6.843,1.802 8.385,1.4 4.76,-1.246 7.184,2.125 5.84,8.113 -1.895,8.426 -4.597,12.203 -12.066,16.86 -3.92,2.444 -8.65,5.513 -10.514,6.82 -4.258,2.99 -4.897,2.97 -9.01,-0.264 z m 7.3,-0.952 c 0.373,-0.602 4.577,-3.41 9.343,-6.243 7.344,-4.362 8.96,-5.96 10.6,-10.467 1.066,-2.926 2.098,-6.726 2.295,-8.445 0.322,-2.814 -0.035,-3.087 -3.59,-2.748 -2.17,0.208 -6.1,-0.522 -8.733,-1.622 -6.95,-2.904 -13.673,-1.513 -16.186,3.347 -2.323,4.492 -1.544,7.273 2.037,7.273 1.9,0 2.454,0.603 2.008,2.188 -0.338,1.203 -1,4.156 -1.473,6.562 -0.47,2.406 -1.68,5.31 -2.684,6.45 -1.616,1.834 -1.564,2.227 0.45,3.4 2.812,1.633 5.042,1.75 5.934,0.306 z m 100.173,-16.322 c -1.964,-2.17 -1.826,-2.505 2.468,-6.045 4.825,-3.977 7.776,-4.078 11.122,-0.38 1.786,1.972 1.712,2.38 -0.856,4.707 -4.133,3.747 -10.162,4.56 -12.735,1.718 z m 11.71,-3.325 c 1.534,-1.435 1.356,-1.835 -1.25,-2.81 -2.31,-0.865 -3.863,-0.554 -6.49,1.302 -1.898,1.34 -3.142,2.94 -2.763,3.553 0.92,1.486 8.256,0.057 10.503,-2.046 z m -16.756,-35.475 c -2.265,-2.502 -2.25,-2.63 0.635,-5.703 l 2.952,-3.144 2.534,2.534 2.534,2.534 -3.17,3.17 -3.17,3.17 -2.316,-2.562 z m 4.8,-5.078 c -1.665,-1.665 -4.825,1.78 -3.54,3.86 0.624,1.01 1.457,0.847 2.866,-0.562 1.386,-1.387 1.59,-2.382 0.674,-3.298 z m -49.55,-15.896 c -1.09,-1.204 -2.55,-3.68 -3.24,-5.5 -1.012,-2.66 -0.825,-3.708 0.946,-5.31 2.035,-1.84 2.392,-1.778 4.61,0.814 4.882,5.71 5.593,7.99 3.172,10.18 -2.77,2.51 -3.06,2.5 -5.488,-0.184 z m 4.377,-1.01 c 0.8,-0.8 -2.384,-7.656 -4.025,-8.67 -2.02,-1.248 -2.292,1.25 -0.58,5.32 1.62,3.852 3.058,4.898 4.606,3.35 z M 836.27,395.166 c -3.528,-3.756 -3.435,-4.703 0.875,-8.832 l 3.595,-3.443 2.656,3.378 c 3.26,4.143 3.37,7.01 0.372,9.72 -3.038,2.75 -4.265,2.616 -7.496,-0.823 z m 6.86,-1.562 c 0.413,-1.075 0.095,-3.394 -0.707,-5.154 -1.41,-3.092 -1.542,-3.125 -3.915,-0.978 -2.82,2.552 -3.095,4.448 -0.957,6.586 2.085,2.085 4.685,1.873 5.58,-0.455 z m -98.745,-70.328 c -3.273,-3.417 -3.308,-3.6 -1.072,-5.625 3.194,-2.89 5.556,-2.622 8.978,1.02 2.838,3.02 2.857,3.185 0.65,5.625 -3.036,3.353 -4.537,3.174 -8.555,-1.02 z m 7.293,-1.348 c 0,-2.44 -3.628,-4.423 -6.25,-3.417 -2.11,0.81 -2.107,0.97 0.066,3.37 2.493,2.756 6.183,2.784 6.183,0.047 z m 69.933,18.1 c -2.32,-1.707 -2.327,-1.832 -0.16,-2.67 2.77,-1.074 5.692,1.36 3.847,3.206 -0.84,0.84 -2.06,0.662 -3.687,-0.536 z m -74.933,-78.22 c -0.5,-0.806 -0.345,-2.03 0.343,-2.717 0.833,-0.833 1.552,-0.76 2.157,0.218 0.5,0.807 0.345,2.03 -0.343,2.718 -0.833,0.833 -1.552,0.76 -2.157,-0.218 z m -11.78,-4.485 c -2.114,-1.78 -3.845,-4.242 -3.845,-5.472 0,-2.908 2.914,-5.284 5.34,-4.353 1.05,0.402 2.28,0.13 2.732,-0.604 1.94,-3.14 9.428,0.517 9.428,4.605 0,1.603 -7.202,9.06 -8.75,9.06 -0.582,0 -2.79,-1.456 -4.904,-3.236 z m 8.666,-6.753 c -1.155,-0.717 -2.323,-0.7 -3.064,0.04 -0.66,0.66 -2.193,1.198 -3.41,1.198 -1.412,0 -1.96,0.65 -1.517,1.804 1.075,2.805 4.6,3.02 7.353,0.45 2.147,-2.006 2.237,-2.5 0.636,-3.493 z m 28.113,-46.2 c -1.375,-0.565 -5.13,-3.353 -8.345,-6.194 l -5.844,-5.167 0.712,-7.164 c 1.014,-10.19 2.282,-13.045 5.582,-12.562 1.8,0.263 3.06,1.647 3.7,4.065 0.537,2.015 2.406,4.827 4.153,6.25 2.13,1.73 3.536,4.54 4.26,8.508 0.594,3.258 1.786,6.774 2.647,7.812 1.25,1.507 1.253,2.267 0.01,3.763 -1.72,2.076 -3.153,2.22 -6.874,0.688 z m 1.954,-6 c -0.656,-1.203 -1.52,-4.242 -1.92,-6.753 -0.47,-2.954 -1.817,-5.28 -3.818,-6.59 -1.7,-1.115 -3.092,-2.857 -3.092,-3.873 0,-1.015 -0.562,-1.846 -1.25,-1.846 -0.687,0 -1.334,2.53 -1.437,5.625 -0.103,3.094 -0.243,6.234 -0.312,6.977 -0.142,1.533 9.044,8.39 11.448,8.546 1.124,0.073 1.233,-0.523 0.38,-2.085 z m -35.54,-7.63 c -1.92,-2.12 -1.63,-3.932 0.625,-3.932 1.558,0 3.723,4.768 2.507,5.52 -0.6,0.37 -2.008,-0.346 -3.133,-1.588 z\"\n       id=\"path6741\"\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#568e07\" />\n  </g>\n  <g\n     inkscape:groupmode=\"layer\"\n     id=\"layer1\"\n     inkscape:label=\"regions\">\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"northland\"\n       cx=\"665.625\"\n       cy=\"136.44885\"\n       r=\"35.398708\"\n       inkscape:label=\"#path7451\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"243.4801\"\n       cx=\"707.8125\"\n       id=\"auckland\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7455\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"waikato\"\n       cx=\"769.53125\"\n       cy=\"357.5426\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7457\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"341.13635\"\n       cx=\"860.15625\"\n       id=\"bayOfPlenty\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7459\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"gisbourne\"\n       cx=\"989.0625\"\n       cy=\"471.6051\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7461\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"553.63635\"\n       cx=\"895.3125\"\n       id=\"hawkesBay\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7463\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"taranaki\"\n       cx=\"673.4375\"\n       cy=\"485.6676\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7465\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"636.44885\"\n       cx=\"783.59375\"\n       id=\"manawatu_wanganui\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7467\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"wellington\"\n       cx=\"733.59375\"\n       cy=\"755.9801\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7469\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"797.38635\"\n       cx=\"648.4375\"\n       id=\"marlborough\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7471\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"tasman_nelson\"\n       cx=\"567.96875\"\n       cy=\"730.19885\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7473\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"900.51135\"\n       cx=\"399.21875\"\n       id=\"westCoast\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7475\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"canterbury\"\n       cx=\"535.15625\"\n       cy=\"983.32385\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7477\" />\n    <circle\n       r=\"35.398708\"\n       cy=\"1284.8864\"\n       cx=\"346.875\"\n       id=\"otago\"\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       inkscape:label=\"#circle7479\" />\n    <circle\n       style=\"fill:#cd1a22;fill-opacity:1;stroke:#ffffff;stroke-width:6;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n       id=\"southland\"\n       cx=\"153.125\"\n       cy=\"1355.9801\"\n       r=\"35.398708\"\n       inkscape:label=\"#circle7481\" />\n  </g>\n</svg>\n"

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandView = __webpack_require__(9);

var _ampersandView2 = _interopRequireDefault(_ampersandView);

var _main = __webpack_require__(124);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandView2.default.extend({
  template: '<div class="modal">\n    <h2 data-hook="region-name"></h2>\n    <button data-hook="buy">Assign Workers</button>\n  </div>',

  events: {
    'click [data-hook=buy]': 'buyCity'
  },

  bindings: {
    'model.name': '[data-hook=region-name]'
  },

  render: function render() {
    this.renderWithTemplate(this);
  },
  buyCity: function buyCity() {
    // TODO: maybe move this to a higher-up object, so we're not reaching into the game state
    if (this.model.isActive && _main2.default.population.available >= this.model.cost) {
      return;
    }

    var cost = this.model.unlock();
    _main2.default.population.spent += cost;
  }
});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* Tock by Mr Chimp - github.com/mrchimp/tock
* Based on code by James Edwards:
*    sitepoint.com/creating-accurate-timers-in-javascript/
*/

// Implements Date.now() for ie lt 9
Date.now = Date.now || function() { return +new Date(); };

// Polyfills Function.prototype.bind for IE lt 9 and Safari lt 5.1
if ( typeof Function.prototype.bind != 'function' ) {
    Function.prototype.bind = function (ctx) {
        var args = Array.prototype.slice.call(arguments, 1),
            fn = this;
        return function () {
            args.push.apply(args, arguments);
            return fn.apply(ctx, args);
        };
    };
}

(function (root, factory) {
  if ( true ) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory();
  } else {
    root.Tock = factory();
  }
}(this, function () {

  /**
   * Called every tick for countdown clocks.
   * i.e. once every this.interval ms
   */
  function _tick () {
    this.time += this.interval;

    if ( this.countdown && (this.duration_ms - this.time < 0) ) {
      this.final_time = 0;
      this.go = false;
      this.callback(this);
      clearTimeout(this.timeout);
      this.complete(this);
      return;
    } else {
      this.callback(this);
    }

    var diff = (Date.now() - this.start_time) - this.time,
        next_interval_in = diff > 0 ? this.interval - diff : this.interval;

    if ( next_interval_in <= 0 ) {
      this.missed_ticks = Math.floor(Math.abs(next_interval_in) / this.interval);
      this.time += this.missed_ticks * this.interval;

      if ( this.go ) {
        _tick.call(this);
      }
    } else if ( this.go ) {
      this.timeout = setTimeout(_tick.bind(this), next_interval_in);
    }
  }

  /**
   * Called by Tock internally - use start() instead
   */
  function _startCountdown (duration) {
    this.duration_ms = duration;
    this.start_time = Date.now();
    this.time = 0;
    this.go = true;
    _tick.call(this);
  }

  /**
   * Called by Tock internally - use start() instead
   */
  function _startTimer (start_offset) {
    this.start_time = start_offset || Date.now();
    this.time = 0;
    this.go = true;
    _tick.call(this);
  }

  var MILLISECONDS_RE           = /^\s*(\+|-)?\d+\s*$/,
      MM_SS_RE                  = /^(\d{1,2}):(\d{2})$/,
      MM_SS_ms_OR_HH_MM_SS_RE   = /^(\d{1,2}):(\d{2})(?::|\.)(\d{2,3})$/,
      MS_PER_HOUR               = 3600000,
      MS_PER_MIN                = 60000,
      MS_PER_SEC                = 1000,
      /* The RegExp below will match a date in format `yyyy-mm-dd HH:MM:SS` and optionally with `.ms` at the end.
       * It will also match ISO date string, i.e. if the whitespace separator in the middle is replaced with a `T`
       * and the date string is also suffixed with a `Z` denoting UTC timezone.
       */
      yyyy_mm_dd_HH_MM_SS_ms_RE = /^(\d{4})-([0-1]\d)-([0-3]\d)(?:\s|T)(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3})Z?)?$/;

  var Tock = function (options) {
    options = options || {};

    if ( ! (this instanceof Tock) ) return new Tock(options);

    Tock.instances = (Tock.instances || 0) + 1;

    this.go           = false;
    this.timeout      = null;
    this.missed_ticks = null;
    this.interval     = options.interval || 10;
    this.countdown    = options.countdown || false;
    this.start_time   = 0;
    this.pause_time   = 0;
    this.final_time   = 0;
    this.duration_ms  = 0;
    this.time         = 0;
    this.callback     = options.callback || function () {};
    this.complete     = options.complete || function () {};
  };

  /**
   * Reset the clock
   */
  Tock.prototype.reset = function () {
    if ( this.countdown ) {
      return false;
    }

    this.stop();
    this.start_time = 0;
    this.time = 0;
  };

  /**
   * Start the clock.
   * @param {Various} time Accepts a single "time" argument
   *   which can be in various forms:
   *   - MM:SS
   *   - MM:SS:ms or MM:SS.ms
   *   - HH:MM:SS
   *   - yyyy-mm-dd HH:MM:SS.ms
   *   - milliseconds
   */
  Tock.prototype.start = function (time) {
    if (this.go) return false;

    time = time ? this.timeToMS(time) : 0;

    this.start_time = time;
    this.pause_time = 0;

    if ( this.countdown ) {
      _startCountdown.call(this, time);
    } else {
      _startTimer.call(this, Date.now() - time);
    }
  };

  /**
   * Stop the clock and clear the timeout
   */
  Tock.prototype.stop = function () {
    this.pause_time = this.lap();
    this.go = false;

    clearTimeout(this.timeout);

    if ( this.countdown ) {
      this.final_time = this.duration_ms - this.time;
    } else {
      this.final_time = (Date.now() - this.start_time);
    }
  };

  /**
   * Stop/start the clock.
   */
  Tock.prototype.pause = function () {
    if ( this.go ) {
      this.pause_time = this.lap();
      this.stop();
    } else {
      if ( this.pause_time ) {
        if ( this.countdown ) {
          _startCountdown.call(this, this.pause_time);
        } else {
          _startTimer.call(this, Date.now() - this.pause_time);
        }

        this.pause_time = 0;
      }
    }
  };

  /**
   * Get the current clock time in ms.
   * Use with Tock.msToTime() to make it look nice.
   * @return {Integer} Number of milliseconds ellapsed/remaining
   */
  Tock.prototype.lap = function () {
    if ( this.go ) {
      var now;

      if ( this.countdown ) {
        now = this.duration_ms - (Date.now() - this.start_time);
      } else {
        now = (Date.now() - this.start_time);
      }

      return now;
    }

    return this.pause_time || this.final_time;
  };

  /**
   * Format milliseconds as a MM:SS.ms string.
   * @param  {Integer} ms Number of milliseconds
   * @return {String}     String representation of ms in format MM:SS:ms
   */
  Tock.prototype.msToTime = function (ms) {
    var milliseconds = this.zeroPad(ms % MS_PER_SEC, 3),
        seconds = this.zeroPad(Math.floor((ms / MS_PER_SEC) % 60), 2),
        minutes = this.zeroPad(Math.floor((ms / (MS_PER_MIN)) % 60), 2);

    return minutes + ':' + seconds + '.' + milliseconds;
  };

  /**
   * Pad the left side of a string with zeros up to a given length. I
   * considered using an NPM package for this but it's probably best not to.
   * @param  {Various} input  Number to pad. Will be converted to string.
   * @param  {Integer} length Desired string length
   * @return {String}         Padding number
   */
  Tock.prototype.zeroPad = function (input, length) {
    input = input.toString();

    while ( input.length < length ) {
      input = '0' + input;
    }

    return input;
  };

  /**
   * Format milliseconds as HH:MM:SS or HH:MM:SS:mmm
   * @param  {Integer} ms      Number of milliseconds
   * @param  {Boolean} show_ms If true, include milliseconds in output
   * @return {String}          Formatted timecode string
   */
  Tock.prototype.msToTimecode = function (ms, show_ms) {
    var seconds  = this.zeroPad(Math.floor((ms / MS_PER_SEC) % 60), 2),
        minutes  = this.zeroPad(Math.floor((ms / MS_PER_MIN) % 60), 2),
        hours    = this.zeroPad(Math.floor((ms / MS_PER_HOUR)), 2),
        millisec = (show_ms ? ':' + this.zeroPad(Math.floor(ms % MS_PER_SEC), 3) : '');

    return hours + ':' + minutes + ':' + seconds + millisec;
  };

  /**
   * Convert a time string to milliseconds
   *
   * Possible inputs:
   * MM:SS
   * MM:SS:ms or MM:SS.ms
   * HH:MM:SS
   * yyyy-mm-dd HH:MM:SS.ms
   *
   * A milliseconds input will return it back for safety
   * If the input cannot be recognized then 0 is returned
   */
  Tock.prototype.timeToMS = function (time) {
    // If input is milliseconds integer then return it back
    if ( MILLISECONDS_RE.test(String(time)) ) {
      return time;
    }

    var ms,
        time_split,
        match,
        date,
        now = new Date();

    if ( MM_SS_RE.test(time) ) { // If MM:SS
      time_split = time.split(':');
      ms = parseInt(time_split[0], 10) * MS_PER_MIN;
      ms += parseInt(time_split[1], 10) * MS_PER_SEC;
    } else {
      match = time.match(MM_SS_ms_OR_HH_MM_SS_RE);

      if ( match ) {
        if ( match[3].length == 3 || parseInt(match[3], 10) > 59 ) { // If MM:SS:ms or MM:SS.ms (e.g. 10:10:458 or 10:10.458)
          ms = parseInt(match[1], 10) * MS_PER_MIN;
          ms += parseInt(match[2], 10) * MS_PER_SEC;
          ms += parseInt(match[3], 10);
        } else { // Then it's HH:MM:SS
          ms = parseInt(match[1], 10) * MS_PER_HOUR;
          ms += parseInt(match[2], 10) * MS_PER_MIN;
          ms += parseInt(match[3], 10) * MS_PER_SEC;
        }
      } else if ( yyyy_mm_dd_HH_MM_SS_ms_RE.test(time) ) { // If yyyy-mm-dd HH:MM:SS or yyyy-mm-dd HH:MM:SS.ms or yyyy-mm-ddTHH:MM:SS.msZ
        date = new Date();
        now = new Date();

        match = time.match(yyyy_mm_dd_HH_MM_SS_ms_RE);

        date.setYear(match[1]);
        date.setMonth(match[2]);
        date.setDate(match[3]);
        date.setHours(match[4]);
        date.setMinutes(match[5]);
        date.setSeconds(match[6]);

        if (typeof match[7] !== 'undefined') {
          date.setMilliseconds(match[7]);
        }

        ms = Math.max(0, date.getTime() - now.getTime());
      } else {
        // Let's try it as a date string
        now = new Date();
        ms = Date.parse(time);

        if ( !isNaN(ms) ) { // Looks ok
          ms = Math.max(0, ms - now.getTime());
        } else { // Could not recognize input, so start from 0
          ms = 0;
        }
      }
    }

    return ms;
  };

  return Tock;
}));


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandState = __webpack_require__(11);

var _ampersandState2 = _interopRequireDefault(_ampersandState);

var _ampersandCollection = __webpack_require__(125);

var _ampersandCollection2 = _interopRequireDefault(_ampersandCollection);

var _upgrade = __webpack_require__(126);

var _upgrade2 = _interopRequireDefault(_upgrade);

var _utils = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpgradeCollection = _ampersandCollection2.default.extend({
  mainIndex: 'id',
  model: _upgrade2.default
});

exports.default = _ampersandState2.default.extend({
  props: {
    name: 'string',
    cost: 'number',
    isActive: 'boolean'
  },

  collections: {
    upgrades: UpgradeCollection
  },

  initialize: function initialize() {
    this.cost = this.cost || 0;
    this.isActive = this.isActive || false;
  },
  unlock: function unlock() {
    this.isActive = true;
    return this.cost;
  },
  tick: function tick(elapsedTicks) {
    // handle tick for a region
    // returns an object of { resource: netAmount }
    var resourcesDelta = {};
    this.upgrades.forEach(function (upgrade) {
      (0, _utils.sumPropertyValues)(resourcesDelta, upgrade.tick(elapsedTicks));
    });
    return resourcesDelta;
  }
});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandState = __webpack_require__(11);

var _ampersandState2 = _interopRequireDefault(_ampersandState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandState2.default.extend({
  props: {
    total: 'number',
    spent: 'number'
  },

  derived: {
    available: {
      deps: ['total', 'spent'],
      fn: function fn() {
        return this.total - this.spent;
      }
    }
  },

  initialize: function initialize() {
    this.total = this.total || 0;
    this.spent = this.spent || 0;
  }
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandState = __webpack_require__(11);

var _ampersandState2 = _interopRequireDefault(_ampersandState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandState2.default.extend({
  props: {
    name: 'string',
    total: 'number',
    value: 'number'
  },

  initialize: function initialize() {
    this.total = this.total || 0;
    this.value = this.value || 0;
  }
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcePool = exports.ResourceCollection = undefined;

var _ampersandCollection = __webpack_require__(125);

var _ampersandCollection2 = _interopRequireDefault(_ampersandCollection);

var _resource = __webpack_require__(289);

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceCollection = _ampersandCollection2.default.extend({
  model: _resource2.default,
  mainIndex: 'id'
});

var ResourcePool = ResourceCollection.extend({
  initialize: function initialize(attributes) {
    var _this = this;

    this.add([{
      id: 'energy',
      name: 'Energy'
    }, {
      id: 'agriculture',
      name: 'Agriculture'
    }, {
      id: 'mining',
      name: 'Mining'
    }, {
      id: 'forestry',
      name: 'Forestry'
    }, {
      id: 'technology',
      name: 'Technology'
    }]);
    if (attributes != null) {
      attributes.forEach(function (attribute) {
        var instAttribute = _this.get(attribute.id);
        if (instAttribute == null) {
          return;
        }
        if (attribute.isActive != null) {
          instAttribute.isActive = attribute.isActive;
        }
        if (attribute.amount != null) {
          instAttribute.amount = attribute.amount;
        }
      });
    }
  }
});

exports.ResourceCollection = ResourceCollection;
exports.ResourcePool = ResourcePool;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ampersandState = __webpack_require__(11);

var _ampersandState2 = _interopRequireDefault(_ampersandState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ampersandState2.default.extend({
  props: {
    id: 'string',
    amount: 'number',
    name: 'string',
    isActive: 'boolean'
  },

  initialize: function initialize() {
    this.amount = this.amount || 0;
    this.isActive = this.isActive || false;
  }
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var key = 'NewSeizeLand';

function saveState(state) {
  window.localStorage[key] = JSON.stringify(state);
}

function loadState(callback) {
  var state = void 0;
  if (window.localStorage[key] != null) {
    state = JSON.parse(window.localStorage[key]);
  }

  return callback(state);
}

function resetState() {
  window.localStorage[key] = null;
}

exports.saveState = saveState;
exports.loadState = loadState;
exports.resetState = resetState;

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>New Seizeland</title>\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,600,800,900\" rel=\"stylesheet\">\n  </head>\n\n  <body>\n    <div data-hook='main-outlet'></div>\n  </body>\n</html>\n";

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(295)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(128)(undefined);
// imports
exports.i(__webpack_require__(294), "");

// module
exports.push([module.i, ".game-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n\n.progress {\n  background: #505050;\n  border: 3px solid #d5d5d5;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  height: 20px;\n  width: 100px;\n  flex-grow: 1; }\n  .progress__inner {\n    height: 100%;\n    background: #ffda4a; }\n\n.progress-resource {\n  display: flex;\n  align-items: center; }\n  .progress-resource > *:not(:last-child) {\n    margin-right: 20px; }\n\n.label, .resource {\n  text-transform: uppercase;\n  color: white;\n  text-shadow: 0 3px 0 black, 0 -1px 0 black, 1px 0 0 black, -1px 0 0 black;\n  font-family: Montserrat, sans-serif;\n  font-weight: 800;\n  font-size: 1.2rem; }\n  .label--light {\n    color: #e6e6e6; }\n\n.panel {\n  width: 100%;\n  padding: 0 20px 10px 20px;\n  background: #505050;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0; }\n  .panel > * {\n    margin: 10px 0; }\n\n.basic-resource {\n  display: flex;\n  justify-content: space-between; }\n  .basic-resource__value {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n\n.resources-panel {\n  background: #594512;\n  border: 3px solid #a58438;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5);\n  padding: 10px 10px; }\n  .resources-panel > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center; }\n\n.resource {\n  font-size: 0.8rem;\n  width: 110px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n  .resource__name {\n    width: 26px;\n    height: 21px;\n    margin-right: 10px; }\n\n.map {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  overflow: auto; }\n  .map svg {\n    width: 100%; }\n\nbody {\n  font-size: 16px; }\n\n* {\n  box-sizing: border-box; }\n", ""]);

// exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(128)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(296);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 296 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map