webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(15)['default'];


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "  <!-- <div class = 'clearfix'> -->\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"collapse-1\">\n      <ul class = 'nav nav-pills nav-stacked'>\n        <li class = 'arrow up'><div class=\"arrow-up\"></div></li>\n        <li class = 'navlink active' id= 'home' role=\"presentation\" ><a href=\"#\">Home</a></li>\n        <li class = 'navlink' id= 'about' role=\"presentation\" ><a href=\"#\">About Me</a></li>\n        <li class = 'navlink' id= 'projects' role=\"presentation\" ><a href=\"#\">Websites</a></li>\n        <li class = 'navlink' id= 'visualizations' role=\"presentation\" ><a href=\"#\">Visualizations</a></li>\n\n        <!-- <li class = 'navlink' id= 'experiance' role=\"presentation\" ><a href=\"#\">Experience</a></li> -->\n        <!-- <li class = 'navlink' id= 'timeline' role=\"presentation\"><a href=\"#\">Timeline</a></li> -->\n        <li class = 'arrow down'><div class=\"arrow-down\"></div></li>\n      </ul>\n    </div>\n\n\n      </nav>\n    <div class = 'col col-md-12 col-sm-12 content'>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class = 'row main'>\n\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.view : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class='intro'>\n\n        <div class='intro-text-wrap'>\n          <!-- <img src='public/profile.jpg' class='img profile-pic img-responsive img-thumbnail'> -->\n          <h3>Julian Barthold</h3>\n          <h4> Web Developer <span class='glyphicon glyphicon-asterisk'></span> Data Collector</h4>\n          <legend class='intro-legend'></legend>\n          <img class = 'logos img img-responsive'src = 'public/logos.png'>\n          <a href=\"public/Julian_Barthold_CV.pdf\" download>\n          <button class='btn btn-success'>Download Resume</button>\n          </a>\n        </div>\n\n        </div>\n\n        <div class='slider-wrap well'>\n          <div class='slider' id='projects'>\n          <div class= 'slide projects'>\n            <div class='slide-overlay'></div>\n            <img class='img img-responsive' src='public/grocery.png'>\n          </div>\n          <div class= 'slide visualizations'>\n            <div class='slide-overlay'></div>\n              <img class='img img-responsive' src='public/d3.png'>\n          </div>\n          <div class= 'slide projects'>\n            <div class='slide-overlay'></div>\n              <img class='img img-responsive'src='public/open-clinic-clean.png'>\n          </div>\n          <div class= 'slide projects'>\n            <div class='slide-overlay'></div>\n              <img class='img img-responsive' src='public/jeb-clean.png'>\n          </div>\n          <div class= 'slide projects'>\n            <div class='slide-overlay'></div>\n            <img class='img img-responsive' src='public/doh.png'>\n          </div>\n        </div>\n        </div>\n  <!-- </div> -->\n</div>\n\n<!-- https://i.imgur.com/Oa2BbhG.png -->\n";
},"useData":true});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(0);

var _exception = __webpack_require__(3);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(16);

var _decorators = __webpack_require__(24);

var _logger = __webpack_require__(26);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.10';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQzs7QUFDekIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjEwJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiJdfQ==


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f0aa0d814d27edbb5f874757658dcc7.eot");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "43e70a2241532744e9a8f41004317a70.eot");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(11);

// styles
__webpack_require__(43);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

var setAPIOrigin = __webpack_require__(12);
var config = __webpack_require__(14);
var mainTemplate = __webpack_require__(6);
var events = __webpack_require__(31);

$(function () {
  setAPIOrigin(location, config);

  var showMain = function showMain() {
    return new Promise(function (resolve, reject) {
      if ($('.fade-in').html(mainTemplate())) {
        resolve('loaded');
      } else {
        reject(console.log('error'));
      }
    });
  };

  var loadSlider = function loadSlider() {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  };

  showMain().then(function () {
    $('.fade-in').fadeIn();
  }).then(events.loadClickEvents).then(loadSlider).catch(function () {
    console.log('error loading');
  });
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
mainTemplate();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseNestedQuery = __webpack_require__(13);

/*
  possibilites to handle and example URLs:

  client local, api local
    http://localhost:7165/
  client local, api remote
    http://localhost:7165/?environment=production
  client remote, api local
    https://ga-wdi-boston.github.io/browser-template/?environment=development
    This will require allowing "unsafe scripts" in Chrome
  client remote, api remote
    https://ga-wdi-boston.github.io/browser-template/
*/

var setAPIOrigin = function setAPIOrigin(location, config) {
  // strip the leading `'?'`
  var search = parseNestedQuery(location.search.slice(1));

  if (search.environment === 'development' || location.hostname === 'localhost' && search.environment !== 'production') {
    if (!(config.apiOrigin = config.apiOrigins.development)) {
      var port = +'GA'.split('').reduce(function (p, c) {
        return p + c.charCodeAt().toString(16);
      }, '');
      config.apiOrigin = 'http://localhost:' + port;
    }
  } else {
    config.apiOrigin = config.apiOrigins.production;
  }
};

module.exports = setAPIOrigin;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(5);

var parseNestedQuery = function parseNestedQuery(queryString) {
  return queryString.split('&').reduce(function (memo, element) {
    if (element) {
      var keyValuePair = element.split('=');
      memo = addNestedValue(memo, decodeURIComponent(keyValuePair[0]), decodeURIComponent(keyValuePair[1]));
    }

    return memo;
  }, {});
};

module.exports = parseNestedQuery;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
  apiOrigins: {
    production: 'https://ga-wdi-boston.herokuapp.com'
  }
};

module.exports = config;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(7);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(27);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(3);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(28);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(29);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(17);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(18);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(19);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(20);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(21);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(22);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(23);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(0);

var _exception = __webpack_require__(3);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(3);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(25);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(3);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(7);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsZUFBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QixRQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBQ2pCLGdCQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNoQyxRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixPQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sWUFBQTtRQUNOLFdBQVcsR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDL0QsUUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzFCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDM0YsTUFBTTtBQUNMLGNBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3BCO0tBQ0Y7O0FBRUQsYUFBUyxJQUFJLENBQUMsT0FBTyxnQkFBZTtBQUNsQyxhQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckg7QUFDRCxRQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0RyxXQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDL0I7QUFDRCxLQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixlQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxFLFVBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUMzQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3RFO0FBQ0QsVUFBSSxZQUFZLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDekQsaUJBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1RTtLQUNGLE1BQU07QUFDTCxlQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsZUFBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGVBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUMzQztHQUNGLENBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSwyQkFBYyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0QsUUFBSSxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLFlBQU0sMkJBQWMseUJBQXlCLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxXQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUNqRixDQUFDO0FBQ0YsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUM1RixXQUFTLElBQUksQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNqQyxRQUFJLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDM0IsUUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQ2hHLG1CQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O0FBRUQsV0FBTyxFQUFFLENBQUMsU0FBUyxFQUNmLE9BQU8sRUFDUCxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxhQUFhLENBQUMsQ0FBQztHQUNwQjs7QUFFRCxNQUFJLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFekUsTUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsTUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN4RCxNQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osUUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO0FBQ3JDLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07QUFDTCxhQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7R0FDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7QUFFekMsV0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDdkIsV0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7QUFDRCxTQUFPLE9BQU8sQ0FBQztDQUNoQjs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7QUFFdkQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsU0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztHQUN2RTs7QUFFRCxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTs7QUFDckMsYUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpDLFVBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsa0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFnQjtZQUFkLE9BQU8seURBQUcsRUFBRTs7OztBQUkvRixlQUFPLENBQUMsSUFBSSxHQUFHLGtCQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxlQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBQ3BELGVBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUM3QixDQUFDO0FBQ0YsVUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwRTs7R0FDRjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxFQUFFO0FBQ3pDLFdBQU8sR0FBRyxZQUFZLENBQUM7R0FDeEI7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3pCLFVBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsQ0FBQztHQUM1RSxNQUFNLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtBQUN0QyxXQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDbEM7Q0FDRjs7QUFFTSxTQUFTLElBQUksR0FBRztBQUFFLFNBQU8sRUFBRSxDQUFDO0NBQUU7O0FBRXJDLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsTUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzlCLFFBQUksR0FBRyxJQUFJLEdBQUcsa0JBQVksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0dBQ3JCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

// HandleBars Templates
var home = __webpack_require__(6);
// Slider Render

var about = __webpack_require__(32);
var projects = __webpack_require__(33);
var experiance = __webpack_require__(34);
var visualizations = __webpack_require__(35);
// const timeline = require('./../templates/timeline.handlebars')

// Dependecies
var pageEvents = __webpack_require__(36);

// Consolidate Handlebars Views
var views = {
  home: home({ view: true }),
  about: about(),
  projects: projects(),
  experiance: experiance(),
  visualizations: visualizations()
  // timeline: timeline()


  // Loads Navbar Link Events on Main Page Load
};var loadClickEvents = function loadClickEvents() {
  $('.navlink').on('click', linksHandler);
  $('.arrow').on('click', scrollLinks);
  // `$('.container-fluid').keyup(keyActions)`
  SlideEvents();
};

var SlideEvents = function SlideEvents() {
  $('.slide').on('click', function () {
    var ActiveLink = '#projects';
    if ($(this).hasClass('projects')) {
      $(this).attr('id', 'projects');
    } else {
      $(this).attr('id', 'visualizations');
      ActiveLink = '#visualizations';
    }
    pickView(this).then(showView).then(function () {
      return activateLink(ActiveLink);
    }).then(pageEvents.loadTabEvents).catch(console.error);
  });
};

// Renders Slider if homeview is rendered
var loadSLider = function loadSLider(view) {
  if (view === 'home') {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
  SlideEvents();
  return view;
};

// Navbar Link Events Show Views depending on target
var linksHandler = function linksHandler() {
  pickView(this)
  // FadeOut Resolved.
  .then(activateLink).then(showView).then(loadSLider).then(pageEvents.loadTabEvents).catch(console.log);
};

// pickView Returns TargetView on resolving fadeOut content and Background
var pickView = function pickView(target) {
  return new Promise(function (resolve, reject) {
    if ($('.content').hide()) {
      $('.content').html('');
      resolve(target);
    } else {
      reject(console.log('error'));
    }
  });
};

// Changes content html to view and FadesIn, returns view
var showView = function showView(target) {
  var view = $(target).attr('id');
  $('.content').html(views[view]);
  $('.content').fadeIn();
  return view;
};

// Link Events- removes active class from all li's adds active to target
var activateLink = function activateLink(target) {
  $('.navlink').removeClass('active');
  $(target).addClass('active');
  return target;
};

// Up Down Key Actions
// const keyActions = function () {
//   const upDown = {
//     ArrowDown: $('.down'),
//     ArrowUp: $('.up')
//   }
//   scrollLinks.call(upDown[event.key])
// }

// Find The correct link based on Arrow Action
var scrollLinks = function scrollLinks() {
  var i = $('.active').index();
  var arrow = $(this).children().first().attr('class');
  var links = $('.nav').children('.navlink');
  arrow === 'arrow-down' ? i++ : i--;
  if (i > links.length) {
    i = 1;
  } else if (i === 0) {
    i = links.length;
  }
  linksHandler.call(links[i - 1]);
};

module.exports = {
  loadClickEvents: loadClickEvents
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<div class='nav-page well'>\n  <!-- <legend><h1> About Me </h1></legend> -->\n    <div class='profile-pic-div'>\n      <img src='public/profile.jpg' class='img profile-pic img-responsive img-thumbnail'>\n      <h3> A Bit About Me...</h3>\n      <legend></legend>\n    </div>\n\n\n    <div class='about-me clearfix'>\n    <img class='img img-responsive about-img-left' src='public/lathe.jpg'>\n    <p>I love to build. In my father’s barn I learned to hack things together from leftover\n      wood scraps. Chess pieces, bowls, boxes; whatever could be made from the odds and ends.\n      I've also always had a healthy sense of adventure. Growing up minutes from sunken\n      French and Indian war era shipwrecks, it wasn't long before I began exploring them\n      with an aluminum tank strapped to my back. As a college student I was quick to get\n      involved with the BU Outing Club, leading multi day hikes in the White Mountains of New Hampshire.\n      My attitude toward taking calculated risks, learning from failure, and addressing volatile situations\n      in real time is largely a result of my experiences underwater and on the mountain.\n    </p>\n    <!-- <img class='img img-responsive about-img' src='public/diving.jpg'> -->\n\n    <p>After graduating I set out to find an career which fulfilled my sense of adventure\n      and inclination for piecing things together. My first job as an technical auditor with\n      Oracle was a fantastic adventure, but I needed to build...so I started building.\n    </p>\n\n    <img class='img img-responsive about-img-right' src='public/diving.jpg'>\n\n    <p>My first program, if you can call it that, was a series of recorded excel\n      macros strung together. A user pasted some specific data into a defined excel\n      range, ran the macro string and watched their spreadsheet convulse for about a\n      century until finally producing a schedule and graph of 'Retro-Term Licenses.'\n      I was thrilled, and started digging into VBA, shell scripting, and the inner working\n      of MSOffice. When that wasn't enough I enrolled in General Assembly’s Data Science Part-Time\n      course where I learned python, the basics of machine learning and displaying the resulting data.\n      By the time I left Oracle to attend General Assembly's Web Development Immersive Program(WDI), I had\n      written a program which automated hours out of my role as an Auditor.\n    </p>\n\n    <p> I enrolled in WDI determined to align my passion for building and adventure with my personal career goals,\n      which my experiences at Oracle had helped clear up. My compass is now firmly set in the direction of\n      data exploration, discovery, visualization and the programming involved to build the infrastructure around\n      those processes. I want to learn and explore for a living, and that's what I've found in programming.\n    </p>\n\n    <img src='public/signature.png' class='img img-responsive sig'>\n    </div>\n    <!-- <legend class='clear'><h1> Timeline </h1></legend>\n    <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=12cZNh7BnHlb22rC8WBR6dV43kT0Ra0vQQGcN-rWQJuc&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>\n  </div> -->\n";
},"useData":true});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- <div class='col col-md-10'> -->\n  <div class= 'proj-container nav-page'>\n      <div class='row proj-row'>\n        <div class='col col-xs-12'>\n          <!-- Tab Navs -->\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"page-tab active\">\n              <a aria-controls=\"Intro\" role=\"tab\" data-toggle=\"tab\" href=\"#Intro\">Intro</a>\n            </li>\n\n            <li role=\"presentation\" class=\"page-tab\" >\n              <a aria-controls=\"Grocery-Basket\" role=\"tab\" data-toggle=\"tab\" href=\"#Grocery-Basket\">Grocery Basket</a>\n            </li>\n\n            <li role=\"presentation\" class=\"page-tab\">\n              <a aria-controls=\"OpenClinic\" role=\"tab\" data-toggle=\"tab\" href=\"#OpenClinic\">Open Clinic</a>\n            </li>\n\n            <li role=\"presentation\" class=\"page-tab\" >\n              <a aria-controls=\"Tic-Tac\" role=\"tab\" data-toggle=\"tab\" href=\"#Tic-Tac\">Tic Tac Doh!</a>\n            </li>\n            <li role=\"presentation\" class=\"page-tab\" >\n              <a aria-controls=\"JEB\" role=\"tab\" data-toggle=\"tab\" href=\"#JEB\">JEB File Hosting</a>\n            </li>\n          </ul>\n\n  <!-- Tab panes -->\n      <div class=\"tab-content\">\n        <!-- Intro -->\n            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"Intro\">\n\n              <div class= 'well well-lg'>\n              <legend> <h3>Projects Overview </h3> </legend>\n              <p> The following projects were developed over the course of a 3 month full time Web Development Immersive program with General Assembly. The Web Development Immersive Program primarily focuses on programming fundamentals, front and back end web development, version control via github, and team collaboration.</p>\n\n              <p>For each of the projects I combined my previous python, web scraping, and data handling experience (where applicable) to produce interactive sites with pre-populated database content.</p>\n\n              <p>Transforming large datasets into interactive and consumable content was so exciting to me that in addition to the 4 'required' projects I dug into D3.js to create interactive Data Visualizations, a sample of which may be found under the 'Visualizations' tab.</p>\n\n             <div class= \"row projects-overview\">\n                <div class='col-md-3 col-sm-6'>\n                  <h4>Grocery Basket</h4>\n                  <a aria-controls=\"Grocery-Basket\" data-toggle=\"tab\" href=\"#Grocery-Basket\" class=\"thumbnail\">\n                    <img src=\"public/grocery.png\" alt=\"Grocery-Basket.png\">\n                  </a>\n                </div>\n                <div class='col-md-3 col-sm-6'>\n                  <h4>Open Clinic</h4>\n                  <a  aria-controls=\"OpenClinic\" role=\"tab\" data-toggle=\"tab\" href=\"#OpenClinic\"class=\"thumbnail\">\n                    <img src=\"public/open-clinic-clean.png\" alt=\"open-clinic-clean.png\">\n                  </a>\n                </div>\n                <div class='col-md-3 col-sm-6'>\n                  <h4>Tic Tac Doh!</h4>\n                  <a aria-controls=\"Tic-Tac\" role=\"tab\" data-toggle=\"tab\" href=\"#Tic-Tac\"class=\"thumbnail\">\n                    <img src=\"public/doh.png\" alt=\"doh.png\">\n                  </a>\n                </div>\n                <div class='col-md-3 col-sm-6'>\n                  <h4>Jeb File Hosting</h4>\n                  <a aria-controls=\"JEB\" role=\"tab\" data-toggle=\"tab\" href=\"#JEB\" class=\"thumbnail\">\n                    <img src=\"public/jeb-clean.png\" alt=\"jeb-clean.png\">\n                  </a>\n                </div>\n              </div>\n             </div>\n\n            </div>\n        <!-- Open Clinic -->\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"OpenClinic\">\n              <div class= 'row well'>\n                <div class= 'col-md-5 col-sm-12'>\n                  <img class= 'img img-responsive' src='public/openClinic.png'>\n                </div>\n                <div class= 'panel-intro panel-section col-md-7 col-sm-12'>\n                  <h1> Open Clinic </h1>\n                  <p>Search thousands of Clinical Trial records by phase. </br> Powered by\n                    the Open Clinic API.\n                  </p>\n                  <a target=\"_blank\" href='https://jolavb.github.io/open-clinic-client/#/studies'><button class='search btn btn-success'> Search Studies </button></a>\n                </div>\n                <div class= 'col-xs-12 panel-section'>\n                  <legend> <h3> Background</h3></legend>\n                  <p> Open Clinic is my General Assembly capstone project. I wanted a challenge and access to lots of data. While I was working with the Health Sciences Division at Oracle, a consistent problem was accessing bulk clinical trial data from clinicaltrials.gov and conducting analysis on that data. Apparently this was also a problem for the larger community and so an organization called the Clinical Trials Transformation Initiative (CTTI) recently began restructuring clinicaltrials.gov data into a postgres relational database under their 'State of Clinical Trials' initiative. Static copies of the database(updated monthly) are provided by CTTI and the Open Clinic database is an extension of one of those copies.</p>\n\n                  <p> CTTI and the recently updated clinicaltrials.gov website have drastically improved access to clinical trial data, but data analysis tools are still lacking. My eventual goal in developing Open Clinic is to incorporate analysis tools, powered by D3 and Python, to provide researchers access to tools and visualizations of clinical trial data..It's a big project and baby steps will be key.\n                </p>\n                <div class= 'panel-image entity-rels img-right'>\n                  <h4> Entity Relationships </h4>\n                  <a target=\"_blank\"href=\"https://imgur.com/pAfJgNR\"><img class='img img-responsive' src=\"https://i.imgur.com/pAfJgNR.png\" title=\"source: imgur.com\" /></a>\n                </div>\n\n\n                  <h4 class='dev'> Client Development </h4>\n                  <p>This Ember client application queries the open-clinic-api to view, search and add comments to any public clinical trial submitted to clinicalTrials.gov as of January 1st, 2017 served by the api. Users may sign in to search clinical trials by phase, view trial information as well as comment on a specific trial.</p>\n                  <p>Following the pattern I established to tackle the many tables and relationships included in the back-end API, I added models to the ember framework one at a time. Once a model had been added, I followed the Data Down, Actions Up approach to fetch and pass model data down to the correct components. Once I was satisfied with the rendering and actions required for one model, I moved onto related models, and finally to the search params to filter studies by phase.</p>\n\n                    <a target=\"_blank\" href='https://github.com/jolavb/open-clinic-client'>\n                      <img src='public/github.ico' class='img img-responsive github'>\n                      <span>View Client Repository</span>\n                    </a>\n\n                    <h4 class='dev'> API Development</h4>\n\n                    <p>This Rails API serves public clinical trial data to the Open-Clinic-API from a postgres database containing a complete record of clinical trials submitted to clinicalTrials.gov as of January 1st, 2017. The underlying database was originally cloned from\n                       <a href='https://www.ctti-clinicaltrials.org/'>clinicaltrials.org</a> and extended to include user authentication and user-owned resources.\n                     </p>\n\n                    <p>I intentionally bit off more than I could chew by cloning a large existing database from\n                      <a href='https://www.ctti-clinicaltrials.org/'>clinicaltrials.org</a> with over 40 tables and relationships. I have taken small steps and added relationships, models, routes and Controllers for 1 table at a time. I began with the primary table, which all others are related; the studies table. One each route was performing as anticipated, with the correct information serialized, I progressed to the next table.</p>\n\n                      <a target=\"_blank\" href= 'https://github.com/jolavb/open-clinic-api'>\n                        <img src='public/github.ico' class='img img-responsive github'>\n                        <span>View API Repository</span>\n                      </a>\n\n                </div>\n\n              </div>\n            </div>\n            <!-- Grocery Basket -->\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"Grocery-Basket\">\n                  <div class= 'row well'>\n                    <div class= 'col-md-5 col-sm-12'>\n                      <img class= 'img img-responsive' src='public/Grocery-Basket.png'>\n                    </div>\n\n                    <div class= 'panel-intro panel-section col-md-7 col-sm-12'>\n                      <h1> Grocery Basket </h1>\n                      <p>Browse discount grocery items from your favorite Boston </br> Area\n                        Grocery Store. Powered by the Grocery-Basket API.</p>\n                      <a target=\"_blank\" href='https://jolavb.github.io/Grocery-Basket/'><button class='search btn btn-success'> Browse Discounts </button></a>\n                    </div>\n\n                    <div class= 'panel-section col-xs-12'>\n                      <legend> <h3> Background </h3></legend>\n                      <p>I have developed this Single Page Application out of my own frustration at reliably assessing and aggregating on sale grocery items into recipes. The goal of Grocery-Basket is to allow the collection and aggregation of on-sale grocery items from the greater boston area into cheap and delicious recipes. Food item and store html data are collected weekly and stored in a postgres db running on heroku.</p>\n                        <p>This first version of Grocery-Basket allows a user to select a grocery store to display and add on-sale items to their cart. Cart items may be updated or deleted and a user may use the cart as a reference while shopping at their local grocery store.</p>\n                        <img src='public/cornucopia.png' class='img img-responsive img-right'>\n\n                        <h4 class='dev'> Client Development </h4>\n                        <p> The Grocery-Basket client communicates with the Grocery-Basket API to retrieve and display on-sale grocery items from select boston area grocery stores. Pages are organized into handlebars templates which are rendered based on user actions.\n                        </p>\n                        <p> Organization was key in developing the Grocery-Basket front end. Ajax call success and failures often trigger the rendering of various handlebars templates depending on the application state. I made use of handlebars custom helpers and created several custom helpers to manipulate the rendering of particular templates.\n                        </p>\n                        <a target=\"_blank\" href='https://github.com/jolavb/Grocery-Basket'>\n                          <img src='public/github.ico' class='img img-responsive github'>\n                          <span>View Client Repository</span>\n                        </a>\n\n                        <h4 class='dev'> API Development</h4>\n                        <p>This Rails API is built on top of a Postgres database containing weekly\n                          web scraped grocery sale-item information. Stores and Items tables\n                          are related in a one to many relationship, and Users are related to\n                          Items through the cart-items table.\n                        </p>\n                        <p>The main challenge in developing this rails API was collecting\n                          the sale-item information. I decided to develop the scraper in Python\n                          since I was most familiar with the BeautifulSoup python package and could\n                          leverage my experience with pandas dataframes to help relate and clean information once collected. Once the\n                          scraper is finished loading data to csv's the data is imported to the database\n                          via a ruby seed script. In order to be friendly to the servers hosting scraped information,\n                          I set random delays (from .5 to 5 seconds) between requests.\n                        </p>\n                          <a target=\"_blank\" href= 'https://github.com/jolavb/Grocery-Basket-API'>\n                            <img src='public/github.ico' class='img img-responsive github'>\n                            <span>View API Repository</span>\n                          </a>\n                      </div>\n                  </div>\n                </div>\n        <!-- Tic-Tac-Doh -->\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"Tic-Tac\">\n              <div class= 'row well well-lg'>\n                <div class= 'col-md-5 col-sm-12'>\n                  <img class= 'img img-responsive' src='public/tic-tac-doe.png'>\n                </div>\n                <div class= 'panel-intro panel-section col-md-7 col-sm-12'>\n                  <h1> Tic-Tac-Doh! </h1>\n                  <p>Play this simpsons themed tic tac toe game and keep track of </br>\n                    your wins and loses. Don't get burned!\n                   </p>\n                  <a target=\"_blank\" href='https://jolavb.github.io/tic-tac-doe/'><button class='nuclear btn btn-success'>Sign up to Play!  </button></a>\n                </div>\n                <div class= 'col-xs-12 panel-section'>\n                  <legend> <h3> Background </h3></legend>\n                  <p>Tic-Tac-Doe was the first project I submitted in the General Assembly\n                  Web Immersive Course. The goal was to build a front end application\n                  which successfully communicated with a 3rd party API to keep track of\n                  tic-tac-toe gameplay. After meeting  requirements for the project, I decided\n                  to add in a Simpsons theme and gameplay statistics. </p>\n                  <img src='public/homer.png' class='img img-responsive img-right'>\n                  <h4 class='dev'> Client Development</h4>\n                  <p> The Tic-Tac-Doe client was developed in javascript, jQuery and Sass. I seperated coding concerns wherever possible by dividing up javascript/jquery code. For example, Ajax.js is solely responsible for Ajax calls to the tic-tac-toe api endpoints and ui.js is solely responsible for updating the DOM in response to various events.\n                  </p>\n                  <p>Rather than attempting to build out the html, css and game logic first\n                    (as I was tempted to do), I began by making calls to the provided API\n                    in order to familiarize myself with it's methods and responses.\n                    This proved extremely beneficial and helped me write game logic that\n                    interacted fluidly with the api later in the process. Once I had successfully\n                    called and reviewed the apis methods and responses, I began forming the game logic\n                    around it. Upon encountering errors, I reviewed error codes and logged suspect\n                    variables to make sure they were what I expected them to be.</p>\n                    <a target=\"_blank\" href= 'https://github.com/jolavb/tic-tac-doe'>\n                      <img src='public/github.ico' class='img img-responsive github'>\n                      <span>View API Repository</span>\n                    </a>\n                </div>\n              </div>\n\n            </div>\n        <!-- Jeb -->\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"JEB\">\n              <div class= 'row well well-lg'>\n                <div class= 'col-md-5 col-sm-12'>\n                  <img class= 'img img-responsive' src='public/jeb.png'>\n                </div>\n                <div class='panel-intro panel-section col-md-7 col-sm-12'>\n                  <h1> JEB File Hosting </h1>\n                  <p>Upload, Edit, and View Community Uploads with JEB File Hosting.</br>\n                    Powered by Amazon S3 and the JEB API.\n                  </p>\n                  <a target=\"_blank\" href='https://gitjeb.github.io/front/'><button class='upload btn btn-success'>Sign up to Upload! </button></a>\n                </div>\n                <div class= 'col-xs-12 panel-section'>\n                  <legend> <h3> Background </h3></legend>\n                  <p> JEB File Hosting was a collaborative effort between me and fellow General Assembly students Eliza Gerke and Brenden Moy(Team JEB). As a team, we work closely with each other to brainstorm and develop features. We broke down the day's work by doing SCRUM every morning and ending the day with a retro meeting. We began with the back-end api, using scripts to test each CRUD. Once that was finished we worked on the front-end actions and client to api communication. Lastly we added styling the site and reviewed functionality to ensure we met Minimum Viable Product requirements as outlined by General Assembly.</p>\n                  <p>Version control was critical in developing this project. In order to work collaboratively we each maintained up to date dev and master branches. Team members checked out new branches from dev and pushed their branch once finished with their feature. When pull requests to dev were made, team members would stop what they were doing to review the code, make edits, and accept changes.</p>\n\n\n                  <h4 class='dev'> Client Development </h4>\n                  <p> The JEB client incorporates sass, jquery, handlebars and bootstrap to communicate with the JEB API. Code concerns are separated granularly, with directories for Authorization actions & events and Upload actions & events. These actions and events then render handlebars templates. In order to identify file types and update UI based on the file types, we incorporated a custom handlebars helper. The helper checks the file mime-type and displays default images if the file-type is anything other than an image file.\n                </p>\n\n                    <a target=\"_blank\" href='https://github.com/GitJeb/front'>\n                      <img src='public/github.ico' class='img img-responsive github'>\n                      <span>View Client Repository</span>\n                    </a>\n\n\n                    <h4 class='dev'> API Development</h4>\n                    <img src='public/mongodb.png' class='img img-responsive img-right'>\n                    <p>The JEB API was developed using node.js and is built on top of a Mongo nosql database. As we were all new to Mongodb and non-relational databases in general there was a steep learning curve. In order to allow file uploads we incorporated Amazon's S3 service. When a file is uploaded via JEB the API creates a unique filename (to avoid overwriting existing S3 files), sends an upload request to Amazon S3, and stores the url, unique file name, and user file name as a new document in the Mongodb.\n                    </p>\n\n                      <a target=\"_blank\" href= 'https://github.com/GitJeb/back'>\n                        <img src='public/github.ico' class='img img-responsive github'>\n                        <span>View API Repository</span>\n                      </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- </div> -->\n";
},"useData":true});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class= 'container'>\n  <legend><h1> Experience </h1></legend>\n</div>\n";
},"useData":true});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class='D3-Vis nav-page'>\n    <ul class=\"nav nav-pills data-navpils\">\n      <li role=\"presentation\" class='wine-data'><a href=\"#\">Wine Prices</a></li>\n      <li role=\"presentation\" class='iris-data'><a href=\"#\">Iris Data Set</a></li>\n      <li role=\"presentation\" class='crime-data'><a href=\"#\">Crime Map</a></li>\n    </ul>\n    <div class='loaded-data'>\n      <div class='vis-default-overlay'>\n        <div class='overlay-content'>\n          <div class='d3-intro'>\n          <h3> Data Driven Documents </h3>\n          <p>D3.js offered the perfect solution to my desire to combine python data manipulation\n          with the javascript skills taught in the Web Development Immersive Program. I love data visualization!</p>\n          </div>\n        </div>\n        <div class='d3-thumbs'>\n          <div class='d3-thumb wine-data'>\n            <p> Wine Prices</p>\n            <img class='img img-responsive' src=\"public/wine-thumb.png\" alt=\"wine-thumb.png\">\n          </div>\n          <div class='d3-thumb iris-data'>\n            <p> Iris Flower Plot</p>\n            <img class='img img-responsive' src=\"public/iris-thumb.png\" alt=\"iris-thumb.png\">\n          </div>\n          <div class='d3-thumb crime-data'>\n            <p> Crime Locations, Portland OR</p>\n            <img class='img img-responsive' src=\"public/crime-thumb.png\" alt=\"crime-thumb.png\">\n          </div>\n        </div>\n      <div>\n\n    </div>\n  </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var d3Events = __webpack_require__(37);

var loadTabEvents = function loadTabEvents(view) {
  $('.crime-data').on('click', d3Events.Crime);
  $('.iris-data').on('click', d3Events.Iris);
  $('.wine-data').on('click', d3Events.loadWineData);
  $('.d3-thumb').on('click', function () {
    console.log('thumb');
    $('.data-navpils').toggle();
  });
  $('.thumbnail').click(function (e) {
    var selected = $(this).attr('aria-controls');
    $('.page-tab').removeClass('active');
    $('li > a[aria-controls=' + selected + ']').parent().addClass('active');
  });
};

module.exports = {
  loadTabEvents: loadTabEvents
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// HandleBars templates
var WineHbs = __webpack_require__(38);
var CrimeHbs = __webpack_require__(39);
var IrisHbs = __webpack_require__(40);

var D3 = __webpack_require__(41);
var getFormFields = __webpack_require__(42);

// Variables
var loaded = false;

// Chart Actions
var loadResize = function loadResize() {
  $(window).on('resize', responsive).trigger('resize');
};

var responsive = function responsive() {
  console.log('hello');
  var chart = $('.chart');
  var aspect = chart.width() / chart.height();
  var container = chart.parent();
  var targetWidth = container.width();
  chart.attr('width', targetWidth);
  chart.attr('height', Math.round(targetWidth / aspect));
};

var removeActive = function removeActive() {
  $(window).unbind('resize');
  $('.data-navpils li').removeClass('active');
};

var loadWineData = function loadWineData() {
  loaded = false;
  // clear content
  D3.select('.crime-info svg').remove();

  $('.loaded-data').html(WineHbs());
  removeActive();
  $('.wine-data').addClass('active');

  // Dimensions
  var outerWidth = 1200;
  var outerHeight = 500;
  var margin = 200;
  var width = outerWidth - margin;
  var height = outerHeight - margin;

  // const svg = D3.select('.wine')
  var svg = D3.select('.wine-info').append('svg').attr('class', 'chart').attr('viewBox', '0 0 1200 500').attr('perserveAspectRatio', 'xMinYMid').attr('width', outerWidth).attr('height', outerHeight);

  var g = svg.append('g').attr('transform', 'translate(' + 100 + ',' + 100 + ')');

  D3.csv('public/wine.csv', render);

  function render(data) {
    var xAxis = D3.scaleBand().range([0, width]).padding(0.4) // set pixel range
    .domain(data.map(function (d) {
      return d.country;
    }));
    var yAxis = D3.scaleLinear().range([height, 0]).domain([0, D3.max(data, function (d) {
      return d.price;
    })]);

    g.append('g').attr('class', 'x-axis').attr('transform', 'translate(0,' + height + ')').call(D3.axisBottom(xAxis)).selectAll('text').attr('dx', '-.8em').attr('dy', '-.8em').style('text-anchor', 'end').attr('transform', function (d) {
      return 'rotate(-90)';
    });

    g.append('g').call(D3.axisLeft(yAxis).tickFormat(function (d) {
      return '$' + d;
    }).ticks(10)).append('text').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('value');

    g.selectAll('.bar').data(data).enter().append('rect').attr('class', 'bar').attr('fill', 'blue').on('mouseover', function (d) {
      g.append('text').attr('class', 'price-show').attr('x', xAxis(d.country)).attr('y', yAxis(d.price)).text('$' + parseFloat(d.price).toFixed(2)).attr('transform', 'rotate(90 ' + xAxis(d.country) + ' ' + yAxis(d.price) + ')');
    }).on('mouseout', function (d) {
      D3.select('.price-show').remove();
    }).attr('x', function (d) {
      return xAxis(d.country);
    }).attr('width', xAxis.bandwidth()).attr('y', function (d) {
      return yAxis(0);
    }).attr('height', 0).transition().ease(D3.easeElastic).duration(1500).attr('y', function (d) {
      return yAxis(d.price);
    }).attr('height', function (d) {
      return height - yAxis(d.price);
    });

    // Event Listener for Change Order
    D3.select('.wine-order').on('change', orderBy);

    function orderBy() {
      var bars = svg.selectAll('.bar');
      switch (event.target.value) {
        case 'Ascending':
          xAxis.domain(data.sort(function (a, b) {
            return a.price - b.price;
          }).map(function (d) {
            return d.country;
          }));
          bars.sort(function (a, b) {
            return xAxis(a.country) - xAxis(b.country);
          });
          bars.transition().attr('x', function (d) {
            return xAxis(d.country);
          }).attr('fill', function (d) {
            return 'rgb(0,' + parseInt(d.price) * 2 + ',0)';
          });
          D3.select('.x-axis').transition().call(D3.axisBottom(xAxis));

          break;
        case 'Descending':
          xAxis.domain(data.sort(function (a, b) {
            return b.price - a.price;
          }).map(function (d) {
            return d.country;
          }));
          bars.sort(function (a, b) {
            return xAxis(a.country) - xAxis(b.country);
          });
          bars.transition().attr('x', function (d) {
            return xAxis(d.country);
          }).attr('fill', function (d) {
            return 'rgb(0,' + parseInt(d.price) * 2 + ',0)';
          }).select('x-axis').call(D3.axisBottom(xAxis));
          D3.select('.x-axis').transition().call(D3.axisBottom(xAxis));

          break;
        default:
          console.log('hello');
      }
    }
  }
  loadResize();
};

var Iris = function Iris() {
  removeActive();

  $('.iris-data').addClass('active');

  if (!loaded) {
    $('.loaded-data').html(IrisHbs({ 'loaded': loaded }));
  } else {
    $('svg').remove();
  }

  var formData = $('form').serializeArray();

  // clear div
  // D3.select('.loaded-data3 svg').remove()
  // Load Data and Call Render
  D3.csv('public/Iris.csv', type, render);

  var outerWidth = 1200;
  var outerHeight = 500;
  var innerWidth = outerWidth - 30 - 30;
  var innerHeight = outerHeight - 30 - 30;

  var xCol = formData[0].value;
  var yCol = formData[1].value;
  var rCol = formData[2].value;
  var colorCol = 'Species';
  var rMin = 5;
  var rMax = 20;

  // svg
  var svg = D3.select('.iris-info').append('svg').attr('class', 'chart').attr('viewBox', '0 0 1200 500').attr('perserveAspectRatio', 'xMinYMid').attr('width', outerWidth).attr('height', outerHeight);

  // group
  var g = svg.append('g').attr('transform', 'translate( 30, 30)');

  // converts strings to numbers
  function type(d) {
    d.SepalLengthCm = +d.SepalLengthCm;
    d.SepalWidthCm = +d.SepalWidthCm;
    d.PetalLengthCm = +d.PetalLengthCm;
    d.PetalWidthCm = +d.PetalWidthCm;
    return d;
  }

  function render(data) {
    // Scales
    var xScale = D3.scaleLinear().range([0, innerWidth]) // pixel space
    .domain(D3.extent(data, function (d) {
      return d[xCol];
    })); // set data domains for x
    var yScale = D3.scaleLinear().range([innerHeight, 0]) // pixel space, range y is inverted to show mins at bottom
    .domain(D3.extent(data, function (d) {
      return d[yCol];
    })); // set data domains for y
    var rScale = D3.scaleLinear().range([rMin, rMax]).domain(D3.extent(data, function (d) {
      return d[rCol];
    })); // set data domains for y
    var colorScale = D3.scaleOrdinal(D3.schemeCategory10);

    svg.append('g').attr('class', 'color-axis').call(D3.axisBottom(xScale)).attr('transform', 'translate(0,' + (outerHeight - 10) + ')').selectAll('text').style('text-anchor', 'end');

    svg.append('g').attr('class', 'color-axis').call(D3.axisLeft(yScale)).attr('transform', 'translate(' + (outerWidth - 10) + ', 0)').selectAll('text').style('text-anchor', 'end');

    var circles = g.selectAll('circle').data(data);

    circles.enter().append('circle').merge(circles) // update case
    .on('mouseover', function (d) {
      displayInfo(d);
    }).attr('id', function (d) {
      return d.Id;
    }).attr('cx', function (d) {
      return xScale(d[xCol]);
    }) // return scaled x coord
    .attr('cy', function (d) {
      return yScale(d[yCol]);
    }) // return scaled y coord
    .attr('fill', function (d) {
      return colorScale(d[colorCol]);
    }).transition().duration(100).delay(function (d, i) {
      return i * 50;
    }).on('start', function repeat() {
      D3.active(this).transition().attr('r', 0) // return scaled radius
      .transition().attr('r', function (d) {
        return rScale(d[rCol]);
      }); // return scaled radius
    });
    circles.exit().remove();
    loadResize();
  }

  function displayInfo(info) {
    $('.iris-table').html('');
    $('.iris-table').hide();

    var itembox = D3.select('.iris-table');
    var itemInfo = itembox.selectAll('tr').data(Object.keys(info));
    itemInfo.enter().append('tr').append('td').text(function (key) {
      if (key !== 'Id') {
        return key + ': ' + info[key];
      }
    });
    $('.iris-table').fadeIn(200);
  }
  // Add Change Event After Template Load
  loaded = true;
  $('select').on('change', Iris);
};

var Crime = function Crime() {
  // Clear Content
  loaded = false;
  $('.loaded-data').html(CrimeHbs());
  // Active Link
  removeActive();
  $('.crime-data').addClass('active');

  D3.csv('public/crime1.csv', type, render);

  // general dimenions
  var outerWidth = 1000;
  var outerHeight = 1000;
  var innerWidth = outerWidth - 30 - 30;
  var innerHeight = outerHeight - 30 - 30;

  //   const xCol = formData[0].value
  var xCol = 'lng';
  var yCol = 'lat';
  var colorCol = 'offense';
  var radius = 1;

  // scales
  var xScale = D3.scaleLinear().range([0, innerWidth]); // pixel space
  var yScale = D3.scaleLinear().range([innerHeight, 0]); // pixel space, range y is inverted to show mins at bottom
  var colorScale = D3.scaleOrdinal(D3.schemeCategory20);

  // svg
  var svg = D3.select('.crime-info').append('svg').attr('width', outerWidth).attr('height', outerHeight);

  function render(data) {
    xScale.domain(D3.extent(data, function (d) {
      return d[xCol];
    })); // set data domains for x
    yScale.domain(D3.extent(data, function (d) {
      return d[yCol];
    })); // set data domains for y
    var circles = svg.selectAll('circle').data(data);
    circles.enter().append('circle')
    // .merge(circles) // update case
    .transition().duration(10).delay(function (d, i) {
      return i * .5;
    }).on('start', function repeat() {
      D3.active(this).transition().attr('cx', 0) // return scaled radius
      .transition().attr('class', function (d) {
        return d[colorCol].replace(/(\/| )/g, '_');
      }).attr('cx', function (d) {
        return xScale(d[xCol]);
      }) // return scaled x coord
      .attr('r', radius) // return scaled radius
      .attr('fill', function (d) {
        return colorScale(d[colorCol]);
      }).attr('cy', function (d) {
        return yScale(d[yCol]);
      }); // return scaled y coord
    });
    circles.exit().remove();
    unique(data);
  }

  function unique(data, colors) {
    var types = D3.select('.crime-info').append('div').attr('class', 'types');

    types.selectAll('p').data(D3.map(data, function (d) {
      return d.offense;
    }).keys()).enter().append('p').text(function (d) {
      return d;
    }).attr('style', function (d) {
      return 'color:' + colorScale(d);
    }).on('mouseover', function (d) {
      D3.selectAll('circle').attr('visibility', 'hidden');
      var selection = $('.' + d.replace(/(\/| )/g, '_'));
      selection.attr('visibility', 'visible');
    }).on('mouseout', function () {
      D3.selectAll('circle').attr('visibility', 'visible');
    });
  }

  function type(d) {
    d.lat = +d.lat;
    d.lng = +d.lng;
    return d;
  }
  loadResize();
};

module.exports = {
  Iris: Iris,
  Crime: Crime,
  loadWineData: loadWineData
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class='vis-tab-intro'>\n  <legend> <h3>Average International Wine Prices</h3></legend>\n<p> My first ever d3 chart! I wanted a simple data set and found wine price data on kaggle.com. I used\n  python/pandas to average the prices by country and exported the data to a csv. It started as a demo for class with no user interaction, but it was too much fun\n  to just stop there.\n</p>\n\n</div>\n\n\n<div class='well data-wrapper'>\n  <select class=\"wine-order form-control\">\n    <option value=\"Ascending\">Ascending</option>\n    <option value=\"Descending\">Descending</option>\n  </select>\n  <div class='wine-info'></div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='vis-tab-intro'>\n<legend> <h3>Portland, OR 2017 Crime Coordinates </h3></legend>\n  <p> I've been fascinated by fancy geospatial visualizations since before I knew what\n    html was. With a few d3 projects under my belt, I decided I wanted one of my own. I found data on\n    57k crimes committed in Portland Oregan which included crime latitude and longtitude. To get the data down to a reasonable\n    size (for hosting on github-pages) I used python/pandas to extract 10k rows including just coordinate and crime type information. The first time\n    I rendered the data I was excited to see a complete outline of Portland including streets and waterways!\n  <p>\n</div>\n\n<div class= 'data-wrapper well'>\n  <div class='crime-info'></div>\n</div>\n";
},"useData":true});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "<form class='form-inline'>\n  <div class=\"form-group\">\n    <label> X-Axis: </label>\n    <select class='form-control' name='x'>\n      <option value= 'SepalLengthCm'>Sepal Length</option>\n      <option value='SepalWidthCm'>Sepal Width</option>\n      <option value='PetalLengthCm'>Petal Length</option>\n      <option value='PetalLengthCm'>Petal Width</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label> Y-Axis: </label>\n    <select class='form-control' name='y'>\n      <option value= 'PetalLengthCm'>Sepal Length</option>\n      <option value='SepalWidthCm'>Sepal Width</option>\n      <option value='SepalLengthCm'>Petal Length</option>\n      <option value='PetalLengthCm'>Petal Width</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label> Point Radius: </label>\n    <select class='form-control' name='radius'>\n      <option value='SepalWidthCm'>Sepal Length</option>\n      <option value='SepalLengthCm'>Sepal Width</option>\n      <option value='PetalLengthCm'>Petal Length</option>\n      <option value='PetalLengthCm'>Petal Width</option>\n    </select>\n  </div>\n</form>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='vis-tab-intro'>\n  <legend> <h3>Iris Species Plot</h3></legend>\n  <p> After gaining some momentum with D3 by charting wine prices, I wanted up the ante\n    by supporting multiple user interactions and visualizing multiple dimesions. I settled\n    on a classic machine learning data set and got to work. Iris flower species are color-coded\n    and various attributes may be assigned to the x,y axes and point radius.\n</div>\n\n<div class='well data-wrapper'>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.loaded : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class='iris-info'>\n    <table class='iris-table'></table>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://d3js.org Version 4.12.0. Copyright 2017 Mike Bostock.
(function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = t.d3 || {});
})(undefined, function (t) {
  "use strict";
  function n(t, n) {
    return [t, n];
  }function e(t, n, e) {
    var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);return i >= 0 ? (o >= Ra ? 10 : o >= La ? 5 : o >= qa ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Ra ? 10 : o >= La ? 5 : o >= qa ? 2 : 1);
  }function r(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;return o >= Ra ? i *= 10 : o >= La ? i *= 5 : o >= qa && (i *= 2), n < t ? -i : i;
  }function i(t) {
    return t.length;
  }function o() {
    return !this.__axis;
  }function u(t, n) {
    function e(e) {
      var p = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
          d = null == u ? n.tickFormat ? n.tickFormat.apply(n, r) : Ha : u,
          v = Math.max(a, 0) + s,
          g = n.range(),
          _ = +g[0] + .5,
          y = +g[g.length - 1] + .5,
          m = (n.bandwidth ? function (t) {
        var n = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (n = Math.round(n)), function (e) {
          return +t(e) + n;
        };
      } : function (t) {
        return function (n) {
          return +t(n);
        };
      })(n.copy()),
          x = e.selection ? e.selection() : e,
          b = x.selectAll(".domain").data([null]),
          w = x.selectAll(".tick").data(p, n).order(),
          M = w.exit(),
          T = w.enter().append("g").attr("class", "tick"),
          N = w.select("line"),
          k = w.select("text");b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), w = w.merge(T), N = N.merge(T.append("line").attr("stroke", "#000").attr(l + "2", f * a)), k = k.merge(T.append("text").attr("fill", "#000").attr(l, f * v).attr("dy", t === ja ? "0em" : t === Va ? "0.71em" : "0.32em")), e !== x && (b = b.transition(e), w = w.transition(e), N = N.transition(e), k = k.transition(e), M = M.transition(e).attr("opacity", Wa).attr("transform", function (t) {
        return isFinite(t = m(t)) ? h(t) : this.getAttribute("transform");
      }), T.attr("opacity", Wa).attr("transform", function (t) {
        var n = this.parentNode.__axis;return h(n && isFinite(n = n(t)) ? n : m(t));
      })), M.remove(), b.attr("d", t === $a || t == Xa ? "M" + f * c + "," + _ + "H0.5V" + y + "H" + f * c : "M" + _ + "," + f * c + "V0.5H" + y + "V" + f * c), w.attr("opacity", 1).attr("transform", function (t) {
        return h(m(t));
      }), N.attr(l + "2", f * a), k.attr(l, f * v).text(d), x.filter(o).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Xa ? "start" : t === $a ? "end" : "middle"), x.each(function () {
        this.__axis = m;
      });
    }var r = [],
        i = null,
        u = null,
        a = 6,
        c = 6,
        s = 3,
        f = t === ja || t === $a ? -1 : 1,
        l = t === $a || t === Xa ? "x" : "y",
        h = t === ja || t === Va ? function (t) {
      return "translate(" + (t + .5) + ",0)";
    } : function (t) {
      return "translate(0," + (t + .5) + ")";
    };return e.scale = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.ticks = function () {
      return r = Ba.call(arguments), e;
    }, e.tickArguments = function (t) {
      return arguments.length ? (r = null == t ? [] : Ba.call(t), e) : r.slice();
    }, e.tickValues = function (t) {
      return arguments.length ? (i = null == t ? null : Ba.call(t), e) : i && i.slice();
    }, e.tickFormat = function (t) {
      return arguments.length ? (u = t, e) : u;
    }, e.tickSize = function (t) {
      return arguments.length ? (a = c = +t, e) : a;
    }, e.tickSizeInner = function (t) {
      return arguments.length ? (a = +t, e) : a;
    }, e.tickSizeOuter = function (t) {
      return arguments.length ? (c = +t, e) : c;
    }, e.tickPadding = function (t) {
      return arguments.length ? (s = +t, e) : s;
    }, e;
  }function a() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new c(r);
  }function c(t) {
    this._ = t;
  }function s(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = Za, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function f() {
    return new l();
  }function l() {
    this._ = "@" + (++tc).toString(36);
  }function h(n, e, r) {
    return function (i) {
      var o = t.event;t.event = i;try {
        n.call(this, this.__data__, e, r);
      } finally {
        t.event = o;
      }
    };
  }function p(t, n, e) {
    var r = oc.hasOwnProperty(t.type) ? function (t, n, e) {
      return t = h(t, n, e), function (n) {
        var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
      };
    } : h;return function (i, o, u) {
      var a,
          c = this.__on,
          s = r(n, o, u);if (c) for (var f = 0, l = c.length; f < l; ++f) {
        if ((a = c[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void (a.value = n);
      }this.addEventListener(t.type, s, e), a = { type: t.type, name: t.name, value: n, listener: s, capture: e }, c ? c.push(a) : this.__on = [a];
    };
  }function d(n, e, r, i) {
    var o = t.event;n.sourceEvent = t.event, t.event = n;try {
      return e.apply(r, i);
    } finally {
      t.event = o;
    }
  }function v(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function g(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function _(t, n) {
    return t.style.getPropertyValue(n) || pc(t).getComputedStyle(t, null).getPropertyValue(n);
  }function y(t) {
    return t.trim().split(/^|\s+/);
  }function m(t) {
    return t.classList || new x(t);
  }function x(t) {
    this._node = t, this._names = y(t.getAttribute("class") || "");
  }function b(t, n) {
    for (var e = m(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function w(t, n) {
    for (var e = m(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function M() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function T() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function N() {
    var t = this.parentNode;t && t.removeChild(this);
  }function k(t, n, e) {
    var r = pc(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function S(t, n) {
    this._groups = t, this._parents = n;
  }function E() {
    return new S([[document.documentElement]], dc);
  }function A() {
    t.event.stopImmediatePropagation();
  }function C(t, n) {
    var e = t.document.documentElement,
        r = vc(t).on("dragstart.drag", null);n && (r.on("click.drag", _c, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }function z(t, n, e, r, i, o, u, a, c, s) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s;
  }function P() {
    return !t.event.button;
  }function R() {
    return this.parentNode;
  }function L(n) {
    return null == n ? { x: t.event.x, y: t.event.y } : n;
  }function q() {
    return "ontouchstart" in this;
  }function D(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function U() {}function O(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = Tc.exec(t)) ? (n = parseInt(n[1], 16), new H(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Nc.exec(t)) ? F(parseInt(n[1], 16)) : (n = kc.exec(t)) ? new H(n[1], n[2], n[3], 1) : (n = Sc.exec(t)) ? new H(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ec.exec(t)) ? I(n[1], n[2], n[3], n[4]) : (n = Ac.exec(t)) ? I(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Cc.exec(t)) ? j(n[1], n[2] / 100, n[3] / 100, 1) : (n = zc.exec(t)) ? j(n[1], n[2] / 100, n[3] / 100, n[4]) : Pc.hasOwnProperty(t) ? F(Pc[t]) : "transparent" === t ? new H(NaN, NaN, NaN, 0) : null;
  }function F(t) {
    return new H(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function I(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new H(t, n, e, r);
  }function Y(t) {
    return t instanceof U || (t = O(t)), t ? (t = t.rgb(), new H(t.r, t.g, t.b, t.opacity)) : new H();
  }function B(t, n, e, r) {
    return 1 === arguments.length ? Y(t) : new H(t, n, e, null == r ? 1 : r);
  }function H(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function j(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
  }function X(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);if (t instanceof U || (t = O(t)), !t) return new V();if (t instanceof V) return t;var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          u = NaN,
          a = o - i,
          c = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new V(u, a, c, t.opacity);
    }(t) : new V(t, n, e, null == r ? 1 : r);
  }function V(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function $(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function W(t) {
    if (t instanceof G) return new G(t.l, t.a, t.b, t.opacity);if (t instanceof et) {
      var n = t.h * Rc;return new G(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof H || (t = Y(t));var e = tt(t.r),
        r = tt(t.g),
        i = tt(t.b),
        o = Q((.4124564 * e + .3575761 * r + .1804375 * i) / qc),
        u = Q((.2126729 * e + .7151522 * r + .072175 * i) / Dc);return new G(116 * u - 16, 500 * (o - u), 200 * (u - Q((.0193339 * e + .119192 * r + .9503041 * i) / Uc)), t.opacity);
  }function Z(t, n, e, r) {
    return 1 === arguments.length ? W(t) : new G(t, n, e, null == r ? 1 : r);
  }function G(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function Q(t) {
    return t > Yc ? Math.pow(t, 1 / 3) : t / Ic + Oc;
  }function J(t) {
    return t > Fc ? t * t * t : Ic * (t - Oc);
  }function K(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function tt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function nt(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof et) return new et(t.h, t.c, t.l, t.opacity);t instanceof G || (t = W(t));var n = Math.atan2(t.b, t.a) * Lc;return new et(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }(t) : new et(t, n, e, null == r ? 1 : r);
  }function et(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function rt(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof it) return new it(t.h, t.s, t.l, t.opacity);t instanceof H || (t = Y(t));var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (Zc * r + $c * n - Wc * e) / (Zc + $c - Wc),
          o = r - i,
          u = (Vc * (e - i) - jc * o) / Xc,
          a = Math.sqrt(u * u + o * o) / (Vc * i * (1 - i)),
          c = a ? Math.atan2(u, o) * Lc - 120 : NaN;return new it(c < 0 ? c + 360 : c, a, i, t.opacity);
    }(t) : new it(t, n, e, null == r ? 1 : r);
  }function it(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function ot(t, n, e, r, i) {
    var o = t * t,
        u = o * t;return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6;
  }function ut(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function at(t, n) {
    var e = n - t;return e ? ut(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : is(isNaN(t) ? n : t);
  }function ct(t) {
    return 1 == (t = +t) ? st : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }(n, e, t) : is(isNaN(n) ? e : n);
    };
  }function st(t, n) {
    var e = n - t;return e ? ut(t, e) : is(isNaN(t) ? n : t);
  }function ft(t) {
    return function (n) {
      var e,
          r,
          i = n.length,
          o = new Array(i),
          u = new Array(i),
          a = new Array(i);for (e = 0; e < i; ++e) {
        r = B(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
      }return o = t(o), u = t(u), a = t(a), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = u(t), r.b = a(t), r + "";
      };
    };
  }function lt(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }return function (o, u) {
      var a = [],
          c = [];return o = t(o), u = t(u), function (t, r, i, o, u, a) {
        if (t !== i || r !== o) {
          var c = u.push("translate(", null, n, null, e);a.push({ i: c - 4, x: fs(t, i) }, { i: c - 2, x: fs(r, o) });
        } else (i || o) && u.push("translate(" + i + n + o + e);
      }(o.translateX, o.translateY, u.translateX, u.translateY, a, c), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: fs(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
      }(o.rotate, u.rotate, a, c), function (t, n, e, o) {
        t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: fs(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
      }(o.skewX, u.skewX, a, c), function (t, n, e, r, o, u) {
        if (t !== e || n !== r) {
          var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: fs(t, e) }, { i: a - 2, x: fs(n, r) });
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
      }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null, function (t) {
        for (var n, e = -1, r = c.length; ++e < r;) {
          a[(n = c[e]).i] = n.x(t);
        }return a.join("");
      };
    };
  }function ht(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }function pt(t) {
    return function (n, e) {
      var r = t((n = X(n)).h, (e = X(e)).h),
          i = st(n.s, e.s),
          o = st(n.l, e.l),
          u = st(n.opacity, e.opacity);return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + "";
      };
    };
  }function dt(t) {
    return function (n, e) {
      var r = t((n = nt(n)).h, (e = nt(e)).h),
          i = st(n.c, e.c),
          o = st(n.l, e.l),
          u = st(n.opacity, e.opacity);return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + "";
      };
    };
  }function vt(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = rt(n)).h, (r = rt(r)).h),
            o = st(n.s, r.s),
            u = st(n.l, r.l),
            a = st(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function gt() {
    return qs || (Os(_t), qs = Us.now() + Ds);
  }function _t() {
    qs = 0;
  }function yt() {
    this._call = this._time = this._next = null;
  }function mt(t, n, e) {
    var r = new yt();return r.restart(t, n, e), r;
  }function xt() {
    gt(), ++Cs;for (var t, n = ts; n;) {
      (t = qs - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--Cs;
  }function bt() {
    qs = (Ls = Us.now()) + Ds, Cs = zs = 0;try {
      xt();
    } finally {
      Cs = 0, function () {
        var t,
            n,
            e = ts,
            r = 1 / 0;for (; e;) {
          e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ts = n);
        }ns = t, Mt(r);
      }(), qs = 0;
    }
  }function wt() {
    var t = Us.now(),
        n = t - Ls;n > Rs && (Ds -= n, Ls = t);
  }function Mt(t) {
    if (!Cs) {
      zs && (zs = clearTimeout(zs));t - qs > 24 ? (t < 1 / 0 && (zs = setTimeout(bt, t - Us.now() - Ds)), Ps && (Ps = clearInterval(Ps))) : (Ps || (Ls = Us.now(), Ps = setInterval(wt, Rs)), Cs = 1, Os(bt));
    }
  }function Tt(t, n) {
    var e = kt(t, n);if (e.state > Bs) throw new Error("too late; already scheduled");return e;
  }function Nt(t, n) {
    var e = kt(t, n);if (e.state > js) throw new Error("too late; already started");return e;
  }function kt(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("transition not found");return e;
  }function St(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = Nt(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return kt(t, r).value[n];
    };
  }function Et(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function At(t) {
    return E().transition(t);
  }function Ct() {
    return ++Ks;
  }function zt(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }function Pt(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function Rt(t) {
    return (1 - Math.cos(of * t)) / 2;
  }function Lt(t) {
    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
  }function qt(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }function Dt(t) {
    return (t = +t) < af ? gf * t * t : t < sf ? gf * (t -= cf) * t + ff : t < hf ? gf * (t -= lf) * t + pf : gf * (t -= df) * t + vf;
  }function Ut(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return Tf.time = gt(), Tf;
    }return e;
  }function Ot() {
    t.event.stopImmediatePropagation();
  }function Ft(t) {
    return { type: t };
  }function It() {
    return !t.event.button;
  }function Yt() {
    var t = this.ownerSVGElement || this;return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
  }function Bt(t) {
    for (; !t.__brush;) {
      if (!(t = t.parentNode)) return;
    }return t.__brush;
  }function Ht(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }function jt(n) {
    function e(t) {
      var e = t.property("__brush", c).selectAll(".overlay").data([Ft("overlay")]);e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Df.overlay).merge(e).each(function () {
        var t = Bt(this).extent;vc(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
      }), t.selectAll(".selection").data([Ft("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Df.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");var i = t.selectAll(".handle").data(n.handles, function (t) {
        return t.type;
      });i.exit().remove(), i.enter().append("rect").attr("class", function (t) {
        return "handle handle--" + t.type;
      }).attr("cursor", function (t) {
        return Df[t.type];
      }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u);
    }function r() {
      var t = vc(this),
          n = Bt(this).selection;n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
        return "e" === t.type[t.type.length - 1] ? n[1][0] - p / 2 : n[0][0] - p / 2;
      }).attr("y", function (t) {
        return "s" === t.type[0] ? n[1][1] - p / 2 : n[0][1] - p / 2;
      }).attr("width", function (t) {
        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + p : p;
      }).attr("height", function (t) {
        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + p : p;
      })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }function i(t, n) {
      return t.__brush.emitter || new o(t, n);
    }function o(t, n) {
      this.that = t, this.args = n, this.state = t.__brush, this.active = 0;
    }function u() {
      function e() {
        var t = cc(w);!q || x || b || (Math.abs(t[0] - U[0]) > Math.abs(t[1] - U[1]) ? b = !0 : x = !0), U = t, m = !0, Ef(), o();
      }function o() {
        var t;switch (_ = U[0] - D[0], y = U[1] - D[1], T) {case Cf:case Af:
            N && (_ = Math.max(z - a, Math.min(R - p, _)), c = a + _, d = p + _), k && (y = Math.max(P - f, Math.min(L - v, y)), h = f + y, g = v + y);break;case zf:
            N < 0 ? (_ = Math.max(z - a, Math.min(R - a, _)), c = a + _, d = p) : N > 0 && (_ = Math.max(z - p, Math.min(R - p, _)), c = a, d = p + _), k < 0 ? (y = Math.max(P - f, Math.min(L - f, y)), h = f + y, g = v) : k > 0 && (y = Math.max(P - v, Math.min(L - v, y)), h = f, g = v + y);break;case Pf:
            N && (c = Math.max(z, Math.min(R, a - _ * N)), d = Math.max(z, Math.min(R, p + _ * N))), k && (h = Math.max(P, Math.min(L, f - y * k)), g = Math.max(P, Math.min(L, v + y * k)));}d < c && (N *= -1, t = a, a = p, p = t, t = c, c = d, d = t, M in Uf && I.attr("cursor", Df[M = Uf[M]])), g < h && (k *= -1, t = f, f = v, v = t, t = h, h = g, g = t, M in Of && I.attr("cursor", Df[M = Of[M]])), S.selection && (A = S.selection), x && (c = A[0][0], d = A[1][0]), b && (h = A[0][1], g = A[1][1]), A[0][0] === c && A[0][1] === h && A[1][0] === d && A[1][1] === g || (S.selection = [[c, h], [d, g]], r.call(w), O.brush());
      }function u() {
        if (Ot(), t.event.touches) {
          if (t.event.touches.length) return;s && clearTimeout(s), s = setTimeout(function () {
            s = null;
          }, 500), F.on("touchmove.brush touchend.brush touchcancel.brush", null);
        } else C(t.event.view, m), Y.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);F.attr("pointer-events", "all"), I.attr("cursor", Df.overlay), S.selection && (A = S.selection), Ht(A) && (S.selection = null, r.call(w)), O.end();
      }if (t.event.touches) {
        if (t.event.changedTouches.length < t.event.touches.length) return Ef();
      } else if (s) return;if (l.apply(this, arguments)) {
        var a,
            c,
            f,
            h,
            p,
            d,
            v,
            g,
            _,
            y,
            m,
            x,
            b,
            w = this,
            M = t.event.target.__data__.type,
            T = "selection" === (t.event.metaKey ? M = "overlay" : M) ? Af : t.event.altKey ? Pf : zf,
            N = n === Lf ? null : Ff[M],
            k = n === Rf ? null : If[M],
            S = Bt(w),
            E = S.extent,
            A = S.selection,
            z = E[0][0],
            P = E[0][1],
            R = E[1][0],
            L = E[1][1],
            q = N && k && t.event.shiftKey,
            D = cc(w),
            U = D,
            O = i(w, arguments).beforestart();"overlay" === M ? S.selection = A = [[a = n === Lf ? z : D[0], f = n === Rf ? P : D[1]], [p = n === Lf ? R : a, v = n === Rf ? L : f]] : (a = A[0][0], f = A[0][1], p = A[1][0], v = A[1][1]), c = a, h = f, d = p, g = v;var F = vc(w).attr("pointer-events", "none"),
            I = F.selectAll(".overlay").attr("cursor", Df[M]);if (t.event.touches) F.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0);else {
          var Y = vc(t.event.view).on("keydown.brush", function () {
            switch (t.event.keyCode) {case 16:
                q = N && k;break;case 18:
                T === zf && (N && (p = d - _ * N, a = c + _ * N), k && (v = g - y * k, f = h + y * k), T = Pf, o());break;case 32:
                T !== zf && T !== Pf || (N < 0 ? p = d - _ : N > 0 && (a = c - _), k < 0 ? v = g - y : k > 0 && (f = h - y), T = Cf, I.attr("cursor", Df.selection), o());break;default:
                return;}Ef();
          }, !0).on("keyup.brush", function () {
            switch (t.event.keyCode) {case 16:
                q && (x = b = q = !1, o());break;case 18:
                T === Pf && (N < 0 ? p = d : N > 0 && (a = c), k < 0 ? v = g : k > 0 && (f = h), T = zf, o());break;case 32:
                T === Cf && (t.event.altKey ? (N && (p = d - _ * N, a = c + _ * N), k && (v = g - y * k, f = h + y * k), T = Pf) : (N < 0 ? p = d : N > 0 && (a = c), k < 0 ? v = g : k > 0 && (f = h), T = zf), I.attr("cursor", Df[M]), o());break;default:
                return;}Ef();
          }, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);yc(t.event.view);
        }Ot(), Gs(w), r.call(w), O.start();
      }
    }function c() {
      var t = this.__brush || { selection: null };return t.extent = f.apply(this, arguments), t.dim = n, t;
    }var s,
        f = Yt,
        l = It,
        h = a(e, "start", "brush", "end"),
        p = 6;return e.move = function (t, e) {
      t.selection ? t.on("start.brush", function () {
        i(this, arguments).beforestart().start();
      }).on("interrupt.brush end.brush", function () {
        i(this, arguments).end();
      }).tween("brush", function () {
        function t(t) {
          u.selection = 1 === t && Ht(s) ? null : f(t), r.call(o), a.brush();
        }var o = this,
            u = o.__brush,
            a = i(o, arguments),
            c = u.selection,
            s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent),
            f = vs(c, s);return c && s ? t : t(1);
      }) : t.each(function () {
        var t = arguments,
            o = this.__brush,
            u = n.input("function" == typeof e ? e.apply(this, t) : e, o.extent),
            a = i(this, t).beforestart();Gs(this), o.selection = null == u || Ht(u) ? null : u, r.call(this), a.start().brush().end();
      });
    }, o.prototype = { beforestart: function beforestart() {
        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
      }, start: function start() {
        return this.starting && (this.starting = !1, this.emit("start")), this;
      }, brush: function brush() {
        return this.emit("brush"), this;
      }, end: function end() {
        return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
      }, emit: function emit(t) {
        d(new Sf(e, t, n.output(this.state.selection)), h.apply, h, [t, this.that, this.args]);
      } }, e.extent = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : kf([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : f;
    }, e.filter = function (t) {
      return arguments.length ? (l = "function" == typeof t ? t : kf(!!t), e) : l;
    }, e.handleSize = function (t) {
      return arguments.length ? (p = +t, e) : p;
    }, e.on = function () {
      var t = h.on.apply(h, arguments);return t === h ? e : t;
    }, e;
  }function Xt() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }function Vt() {
    return new Xt();
  }function $t(t) {
    return t.source;
  }function Wt(t) {
    return t.target;
  }function Zt(t) {
    return t.radius;
  }function Gt(t) {
    return t.startAngle;
  }function Qt(t) {
    return t.endAngle;
  }function Jt() {}function Kt(t, n) {
    var e = new Jt();if (t instanceof Jt) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var u in t) {
      e.set(u, t[u]);
    }return e;
  }function tn() {
    return {};
  }function nn(t, n, e) {
    t[n] = e;
  }function en() {
    return Kt();
  }function rn(t, n, e) {
    t.set(n, e);
  }function on() {}function un(t, n) {
    var e = new on();if (t instanceof on) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }function an(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function cn(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;var i,
        o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        p = t._root,
        d = { data: r },
        v = t._x0,
        g = t._y0,
        _ = t._x1,
        y = t._y1;if (!p) return t._root = d, t;for (; p.length;) {
      if ((s = n >= (o = (v + _) / 2)) ? v = o : _ = o, (f = e >= (u = (g + y) / 2)) ? g = u : y = u, i = p, !(p = p[l = f << 1 | s])) return i[l] = d, t;
    }if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c) return d.next = p, i ? i[l] = d : t._root = d, t;do {
      i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + _) / 2)) ? v = o : _ = o, (f = e >= (u = (g + y) / 2)) ? g = u : y = u;
    } while ((l = f << 1 | s) == (h = (c >= u) << 1 | a >= o));return i[h] = p, i[l] = d, t;
  }function sn(t, n, e) {
    var r = new fn(null == n ? function (t) {
      return t[0];
    } : n, null == e ? function (t) {
      return t[1];
    } : e, NaN, NaN, NaN, NaN);return null == t ? r : r.addAll(t);
  }function fn(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }function ln(t) {
    for (var n = { data: t.data }, e = n; t = t.next;) {
      e = e.next = { data: t.data };
    }return n;
  }function hn(t) {
    return t.x + t.vx;
  }function pn(t) {
    return t.y + t.vy;
  }function dn(t) {
    return t.index;
  }function vn(t, n) {
    var e = t.get(n);if (!e) throw new Error("missing: " + n);return e;
  }function gn(t) {
    return t.x;
  }function _n(t) {
    return t.y;
  }function yn(t) {
    return new mn(t);
  }function mn(t) {
    if (!(n = kl.exec(t))) throw new Error("invalid format: " + t);var n,
        e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        o = n[4] || "",
        u = !!n[5],
        a = n[6] && +n[6],
        c = !!n[7],
        s = n[8] && +n[8].slice(1),
        f = n[9] || "";"n" === f ? (c = !0, f = "g") : Nl[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f;
  }function xn(n) {
    return Sl = Cl(n), t.format = Sl.format, t.formatPrefix = Sl.formatPrefix, Sl;
  }function bn() {
    this.reset();
  }function wn(t, n, e) {
    var r = t.s = n + e,
        i = r - n,
        o = r - i;t.t = n - o + (e - i);
  }function Mn(t) {
    return t > 1 ? 0 : t < -1 ? dh : Math.acos(t);
  }function Tn(t) {
    return t > 1 ? vh : t < -1 ? -vh : Math.asin(t);
  }function Nn(t) {
    return (t = Eh(t / 2)) * t;
  }function kn() {}function Sn(t, n) {
    t && Rh.hasOwnProperty(t.type) && Rh[t.type](t, n);
  }function En(t, n, e) {
    var r,
        i = -1,
        o = t.length - e;for (n.lineStart(); ++i < o;) {
      r = t[i], n.point(r[0], r[1], r[2]);
    }n.lineEnd();
  }function An(t, n) {
    var e = -1,
        r = t.length;for (n.polygonStart(); ++e < r;) {
      En(t[e], n, 1);
    }n.polygonEnd();
  }function Cn() {
    Uh.point = Pn;
  }function zn() {
    Rn(ql, Dl);
  }function Pn(t, n) {
    Uh.point = Rn, ql = t, Dl = n, Ul = t *= mh, Ol = Mh(n = (n *= mh) / 2 + gh), Fl = Eh(n);
  }function Rn(t, n) {
    n = (n *= mh) / 2 + gh;var e = (t *= mh) - Ul,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = Mh(n),
        u = Eh(n),
        a = Fl * u,
        c = Ol * o + a * Mh(i),
        s = a * r * Eh(i);qh.add(wh(s, c)), Ul = t, Ol = o, Fl = u;
  }function Ln(t) {
    return [wh(t[1], t[0]), Tn(t[2])];
  }function qn(t) {
    var n = t[0],
        e = t[1],
        r = Mh(e);return [r * Mh(n), r * Eh(n), Eh(e)];
  }function Dn(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }function Un(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  }function On(t, n) {
    t[0] += n[0], t[1] += n[1], t[2] += n[2];
  }function Fn(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n];
  }function In(t) {
    var n = Ch(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);t[0] /= n, t[1] /= n, t[2] /= n;
  }function Yn(t, n) {
    Wl.push(Zl = [Il = t, Bl = t]), n < Yl && (Yl = n), n > Hl && (Hl = n);
  }function Bn(t, n) {
    var e = qn([t * mh, n * mh]);if ($l) {
      var r = Un($l, e),
          i = Un([r[1], -r[0], 0], r);In(i), i = Ln(i);var o,
          u = t - jl,
          a = u > 0 ? 1 : -1,
          c = i[0] * yh * a,
          s = xh(u) > 180;s ^ (a * jl < c && c < a * t) ? (o = i[1] * yh) > Hl && (Hl = o) : (c = (c + 360) % 360 - 180, s ^ (a * jl < c && c < a * t) ? (o = -i[1] * yh) < Yl && (Yl = o) : (n < Yl && (Yl = n), n > Hl && (Hl = n))), s ? t < jl ? Wn(Il, t) > Wn(Il, Bl) && (Bl = t) : Wn(t, Bl) > Wn(Il, Bl) && (Il = t) : Bl >= Il ? (t < Il && (Il = t), t > Bl && (Bl = t)) : t > jl ? Wn(Il, t) > Wn(Il, Bl) && (Bl = t) : Wn(t, Bl) > Wn(Il, Bl) && (Il = t);
    } else Wl.push(Zl = [Il = t, Bl = t]);n < Yl && (Yl = n), n > Hl && (Hl = n), $l = e, jl = t;
  }function Hn() {
    Fh.point = Bn;
  }function jn() {
    Zl[0] = Il, Zl[1] = Bl, Fh.point = Yn, $l = null;
  }function Xn(t, n) {
    if ($l) {
      var e = t - jl;Oh.add(xh(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else Xl = t, Vl = n;Uh.point(t, n), Bn(t, n);
  }function Vn() {
    Uh.lineStart();
  }function $n() {
    Xn(Xl, Vl), Uh.lineEnd(), xh(Oh) > ph && (Il = -(Bl = 180)), Zl[0] = Il, Zl[1] = Bl, $l = null;
  }function Wn(t, n) {
    return (n -= t) < 0 ? n + 360 : n;
  }function Zn(t, n) {
    return t[0] - n[0];
  }function Gn(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }function Qn(t, n) {
    t *= mh;var e = Mh(n *= mh);Jn(e * Mh(t), e * Eh(t), Eh(n));
  }function Jn(t, n, e) {
    Jl += (t - Jl) / ++Gl, Kl += (n - Kl) / Gl, th += (e - th) / Gl;
  }function Kn() {
    Ih.point = te;
  }function te(t, n) {
    t *= mh;var e = Mh(n *= mh);sh = e * Mh(t), fh = e * Eh(t), lh = Eh(n), Ih.point = ne, Jn(sh, fh, lh);
  }function ne(t, n) {
    t *= mh;var e = Mh(n *= mh),
        r = e * Mh(t),
        i = e * Eh(t),
        o = Eh(n),
        u = wh(Ch((u = fh * o - lh * i) * u + (u = lh * r - sh * o) * u + (u = sh * i - fh * r) * u), sh * r + fh * i + lh * o);Ql += u, nh += u * (sh + (sh = r)), eh += u * (fh + (fh = i)), rh += u * (lh + (lh = o)), Jn(sh, fh, lh);
  }function ee() {
    Ih.point = Qn;
  }function re() {
    Ih.point = oe;
  }function ie() {
    ue(ah, ch), Ih.point = Qn;
  }function oe(t, n) {
    ah = t, ch = n, t *= mh, n *= mh, Ih.point = ue;var e = Mh(n);sh = e * Mh(t), fh = e * Eh(t), lh = Eh(n), Jn(sh, fh, lh);
  }function ue(t, n) {
    t *= mh;var e = Mh(n *= mh),
        r = e * Mh(t),
        i = e * Eh(t),
        o = Eh(n),
        u = fh * o - lh * i,
        a = lh * r - sh * o,
        c = sh * i - fh * r,
        s = Ch(u * u + a * a + c * c),
        f = Tn(s),
        l = s && -f / s;ih += l * u, oh += l * a, uh += l * c, Ql += f, nh += f * (sh + (sh = r)), eh += f * (fh + (fh = i)), rh += f * (lh + (lh = o)), Jn(sh, fh, lh);
  }function ae(t, n) {
    return [t > dh ? t - _h : t < -dh ? t + _h : t, n];
  }function ce(t, n, e) {
    return (t %= _h) ? n || e ? Bh(fe(t), le(n, e)) : fe(t) : n || e ? le(n, e) : ae;
  }function se(t) {
    return function (n, e) {
      return n += t, [n > dh ? n - _h : n < -dh ? n + _h : n, e];
    };
  }function fe(t) {
    var n = se(t);return n.invert = se(-t), n;
  }function le(t, n) {
    function e(t, n) {
      var e = Mh(n),
          a = Mh(t) * e,
          c = Eh(t) * e,
          s = Eh(n),
          f = s * r + a * i;return [wh(c * o - f * u, a * r - s * i), Tn(f * o + c * u)];
    }var r = Mh(t),
        i = Eh(t),
        o = Mh(n),
        u = Eh(n);return e.invert = function (t, n) {
      var e = Mh(n),
          a = Mh(t) * e,
          c = Eh(t) * e,
          s = Eh(n),
          f = s * o - c * u;return [wh(c * o + s * u, a * r + f * i), Tn(f * r - a * i)];
    }, e;
  }function he(t, n, e, r, i, o) {
    if (e) {
      var u = Mh(n),
          a = Eh(n),
          c = r * e;null == i ? (i = n + r * _h, o = n - c / 2) : (i = pe(u, i), o = pe(u, o), (r > 0 ? i < o : i > o) && (i += r * _h));for (var s, f = i; r > 0 ? f > o : f < o; f -= c) {
        s = Ln([u, -a * Mh(f), -a * Eh(f)]), t.point(s[0], s[1]);
      }
    }
  }function pe(t, n) {
    (n = qn(n))[0] -= t, In(n);var e = Mn(-n[1]);return ((-n[2] < 0 ? -e : e) + _h - ph) % _h;
  }function de(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }function ve(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) {
        i.n = e = t[r], e.p = i, i = e;
      }i.n = e = t[0], e.p = i;
    }
  }function ge(t) {
    return t.length > 1;
  }function _e(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - vh - ph : vh - t[1]) - ((n = n.x)[0] < 0 ? n[1] - vh - ph : vh - n[1]);
  }function ye(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r;
    }function o(i, o, a, s) {
      var f = 0,
          l = 0;if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0) do {
        s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n);
      } while ((f = (f + a + 4) % 4) !== l);else s.point(o[0], o[1]);
    }function u(r, i) {
      return xh(r[0] - t) < ph ? i > 0 ? 0 : 3 : xh(r[0] - e) < ph ? i > 0 ? 2 : 1 : xh(r[1] - n) < ph ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }function a(t, n) {
      return c(t.x, n.x);
    }function c(t, n) {
      var e = u(t, 1),
          r = u(n, 1);return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
    }return function (u) {
      function c(t, n) {
        i(t, n) && b.point(t, n);
      }function s(o, u) {
        var a = i(o, u);if (l && h.push([o, u]), m) p = o, d = u, v = a, m = !1, a && (b.lineStart(), b.point(o, u));else if (a && y) b.point(o, u);else {
          var c = [g = Math.max(lp, Math.min(fp, g)), _ = Math.max(lp, Math.min(fp, _))],
              s = [o = Math.max(lp, Math.min(fp, o)), u = Math.max(lp, Math.min(fp, u))];sp(c, s, t, n, e, r) ? (y || (b.lineStart(), b.point(c[0], c[1])), b.point(s[0], s[1]), a || b.lineEnd(), x = !1) : a && (b.lineStart(), b.point(o, u), x = !1);
        }g = o, _ = u, y = a;
      }var f,
          l,
          h,
          p,
          d,
          v,
          g,
          _,
          y,
          m,
          x,
          b = u,
          w = np(),
          M = { point: c, lineStart: function lineStart() {
          M.point = s, l && l.push(h = []), m = !0, y = !1, g = _ = NaN;
        }, lineEnd: function lineEnd() {
          f && (s(p, d), v && y && w.rejoin(), f.push(w.result())), M.point = c, y && b.lineEnd();
        }, polygonStart: function polygonStart() {
          b = w, f = [], l = [], x = !0;
        }, polygonEnd: function polygonEnd() {
          var n = function () {
            for (var n = 0, e = 0, i = l.length; e < i; ++e) {
              for (var o, u, a = l[e], c = 1, s = a.length, f = a[0], h = f[0], p = f[1]; c < s; ++c) {
                o = h, u = p, h = (f = a[c])[0], p = f[1], u <= r ? p > r && (h - o) * (r - u) > (p - u) * (t - o) && ++n : p <= r && (h - o) * (r - u) < (p - u) * (t - o) && --n;
              }
            }return n;
          }(),
              e = x && n,
              i = (f = Fa(f)).length;(e || i) && (u.polygonStart(), e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), i && rp(f, a, n, o, u), u.polygonEnd()), b = u, f = l = h = null;
        } };return M;
    };
  }function me() {
    pp.point = pp.lineEnd = kn;
  }function xe(t, n) {
    Hh = t *= mh, jh = Eh(n *= mh), Xh = Mh(n), pp.point = be;
  }function be(t, n) {
    t *= mh;var e = Eh(n *= mh),
        r = Mh(n),
        i = xh(t - Hh),
        o = Mh(i),
        u = r * Eh(i),
        a = Xh * e - jh * r * o,
        c = jh * e + Xh * r * o;hp.add(wh(Ch(u * u + a * a), c)), Hh = t, jh = e, Xh = r;
  }function we(t, n) {
    return !(!t || !mp.hasOwnProperty(t.type)) && mp[t.type](t, n);
  }function Me(t, n) {
    return 0 === _p(t, n);
  }function Te(t, n) {
    var e = _p(t[0], t[1]);return _p(t[0], n) + _p(n, t[1]) <= e + ph;
  }function Ne(t, n) {
    return !!op(t.map(ke), Se(n));
  }function ke(t) {
    return (t = t.map(Se)).pop(), t;
  }function Se(t) {
    return [t[0] * mh, t[1] * mh];
  }function Ee(t, n, e) {
    var r = Pa(t, n - ph, e).concat(n);return function (t) {
      return r.map(function (n) {
        return [t, n];
      });
    };
  }function Ae(t, n, e) {
    var r = Pa(t, n - ph, e).concat(n);return function (t) {
      return r.map(function (n) {
        return [n, t];
      });
    };
  }function Ce() {
    function t() {
      return { type: "MultiLineString", coordinates: n() };
    }function n() {
      return Pa(Th(o / g) * g, i, g).map(h).concat(Pa(Th(s / _) * _, c, _).map(p)).concat(Pa(Th(r / d) * d, e, d).filter(function (t) {
        return xh(t % g) > ph;
      }).map(f)).concat(Pa(Th(a / v) * v, u, v).filter(function (t) {
        return xh(t % _) > ph;
      }).map(l));
    }var e,
        r,
        i,
        o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        p,
        d = 10,
        v = d,
        g = 90,
        _ = 360,
        y = 2.5;return t.lines = function () {
      return n().map(function (t) {
        return { type: "LineString", coordinates: t };
      });
    }, t.outline = function () {
      return { type: "Polygon", coordinates: [h(o).concat(p(c).slice(1), h(i).reverse().slice(1), p(s).reverse().slice(1))] };
    }, t.extent = function (n) {
      return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor();
    }, t.extentMajor = function (n) {
      return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(y)) : [[o, s], [i, c]];
    }, t.extentMinor = function (n) {
      return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(y)) : [[r, a], [e, u]];
    }, t.step = function (n) {
      return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor();
    }, t.stepMajor = function (n) {
      return arguments.length ? (g = +n[0], _ = +n[1], t) : [g, _];
    }, t.stepMinor = function (n) {
      return arguments.length ? (d = +n[0], v = +n[1], t) : [d, v];
    }, t.precision = function (n) {
      return arguments.length ? (y = +n, f = Ee(a, u, 90), l = Ae(r, e, y), h = Ee(s, c, 90), p = Ae(o, i, y), t) : y;
    }, t.extentMajor([[-180, -90 + ph], [180, 90 - ph]]).extentMinor([[-180, -80 - ph], [180, 80 + ph]]);
  }function ze() {
    Mp.point = Pe;
  }function Pe(t, n) {
    Mp.point = Re, Vh = Wh = t, $h = Zh = n;
  }function Re(t, n) {
    wp.add(Zh * t - Wh * n), Wh = t, Zh = n;
  }function Le() {
    Re(Vh, $h);
  }function qe(t, n) {
    Ap += t, Cp += n, ++zp;
  }function De() {
    Op.point = Ue;
  }function Ue(t, n) {
    Op.point = Oe, qe(Jh = t, Kh = n);
  }function Oe(t, n) {
    var e = t - Jh,
        r = n - Kh,
        i = Ch(e * e + r * r);Pp += i * (Jh + t) / 2, Rp += i * (Kh + n) / 2, Lp += i, qe(Jh = t, Kh = n);
  }function Fe() {
    Op.point = qe;
  }function Ie() {
    Op.point = Be;
  }function Ye() {
    He(Gh, Qh);
  }function Be(t, n) {
    Op.point = He, qe(Gh = Jh = t, Qh = Kh = n);
  }function He(t, n) {
    var e = t - Jh,
        r = n - Kh,
        i = Ch(e * e + r * r);Pp += i * (Jh + t) / 2, Rp += i * (Kh + n) / 2, Lp += i, qp += (i = Kh * t - Jh * n) * (Jh + t), Dp += i * (Kh + n), Up += 3 * i, qe(Jh = t, Kh = n);
  }function je(t) {
    this._context = t;
  }function Xe(t, n) {
    Xp.point = Ve, Ip = Bp = t, Yp = Hp = n;
  }function Ve(t, n) {
    Bp -= t, Hp -= n, jp.add(Ch(Bp * Bp + Hp * Hp)), Bp = t, Hp = n;
  }function $e() {
    this._string = [];
  }function We(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
  }function Ze(t) {
    return function (n) {
      var e = new Ge();for (var r in t) {
        e[r] = t[r];
      }return e.stream = n, e;
    };
  }function Ge() {}function Qe(t, n, e) {
    var r = t.clipExtent && t.clipExtent();return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Lh(e, t.stream(Ep)), n(Ep.result()), null != r && t.clipExtent(r), t;
  }function Je(t, n, e) {
    return Qe(t, function (e) {
      var r = n[1][0] - n[0][0],
          i = n[1][1] - n[0][1],
          o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
          u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
          a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;t.scale(150 * o).translate([u, a]);
    }, e);
  }function Ke(t, n, e) {
    return Je(t, [[0, 0], n], e);
  }function tr(t, n, e) {
    return Qe(t, function (e) {
      var r = +n,
          i = r / (e[1][0] - e[0][0]),
          o = (r - i * (e[1][0] + e[0][0])) / 2,
          u = -i * e[0][1];t.scale(150 * i).translate([o, u]);
    }, e);
  }function nr(t, n, e) {
    return Qe(t, function (e) {
      var r = +n,
          i = r / (e[1][1] - e[0][1]),
          o = -i * e[0][0],
          u = (r - i * (e[1][1] + e[0][1])) / 2;t.scale(150 * i).translate([o, u]);
    }, e);
  }function er(t) {
    return rr(function () {
      return t;
    })();
  }function rr(t) {
    function n(t) {
      return t = s(t[0] * mh, t[1] * mh), [t[0] * v + u, a - t[1] * v];
    }function e(t, n) {
      return t = o(t, n), [t[0] * v + u, a - t[1] * v];
    }function r() {
      s = Bh(c = ce(x, b, w), o);var t = o(y, m);return u = g - t[0] * v, a = _ + t[1] * v, i();
    }function i() {
      return p = d = null, n;
    }var o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        p,
        d,
        v = 150,
        g = 480,
        _ = 250,
        y = 0,
        m = 0,
        x = 0,
        b = 0,
        w = 0,
        M = null,
        T = ap,
        N = null,
        k = xp,
        S = .5,
        E = Wp(e, S);return n.stream = function (t) {
      return p && d === t ? p : p = Zp(function (t) {
        return Ze({ point: function point(n, e) {
            var r = t(n, e);return this.stream.point(r[0], r[1]);
          } });
      }(c)(T(E(k(d = t)))));
    }, n.preclip = function (t) {
      return arguments.length ? (T = t, M = void 0, i()) : T;
    }, n.postclip = function (t) {
      return arguments.length ? (k = t, N = f = l = h = null, i()) : k;
    }, n.clipAngle = function (t) {
      return arguments.length ? (T = +t ? cp(M = t * mh) : (M = null, ap), i()) : M * yh;
    }, n.clipExtent = function (t) {
      return arguments.length ? (k = null == t ? (N = f = l = h = null, xp) : ye(N = +t[0][0], f = +t[0][1], l = +t[1][0], h = +t[1][1]), i()) : null == N ? null : [[N, f], [l, h]];
    }, n.scale = function (t) {
      return arguments.length ? (v = +t, r()) : v;
    }, n.translate = function (t) {
      return arguments.length ? (g = +t[0], _ = +t[1], r()) : [g, _];
    }, n.center = function (t) {
      return arguments.length ? (y = t[0] % 360 * mh, m = t[1] % 360 * mh, r()) : [y * yh, m * yh];
    }, n.rotate = function (t) {
      return arguments.length ? (x = t[0] % 360 * mh, b = t[1] % 360 * mh, w = t.length > 2 ? t[2] % 360 * mh : 0, r()) : [x * yh, b * yh, w * yh];
    }, n.precision = function (t) {
      return arguments.length ? (E = Wp(e, S = t * t), i()) : Ch(S);
    }, n.fitExtent = function (t, e) {
      return Je(n, t, e);
    }, n.fitSize = function (t, e) {
      return Ke(n, t, e);
    }, n.fitWidth = function (t, e) {
      return tr(n, t, e);
    }, n.fitHeight = function (t, e) {
      return nr(n, t, e);
    }, function () {
      return o = t.apply(this, arguments), n.invert = o.invert && function (t) {
        return (t = s.invert((t[0] - u) / v, (a - t[1]) / v)) && [t[0] * yh, t[1] * yh];
      }, r();
    };
  }function ir(t) {
    var n = 0,
        e = dh / 3,
        r = rr(t),
        i = r(n, e);return i.parallels = function (t) {
      return arguments.length ? r(n = t[0] * mh, e = t[1] * mh) : [n * yh, e * yh];
    }, i;
  }function or(t, n) {
    function e(t, n) {
      var e = Ch(o - 2 * i * Eh(n)) / i;return [e * Eh(t *= i), u - e * Mh(t)];
    }var r = Eh(t),
        i = (r + Eh(n)) / 2;if (xh(i) < ph) return function (t) {
      function n(t, n) {
        return [t * e, Eh(n) / e];
      }var e = Mh(t);return n.invert = function (t, n) {
        return [t / e, Tn(n * e)];
      }, n;
    }(t);var o = 1 + r * (2 * i - r),
        u = Ch(o) / i;return e.invert = function (t, n) {
      var e = u - n;return [wh(t, xh(e)) / i * Ah(e), Tn((o - (t * t + e * e) * i * i) / (2 * i))];
    }, e;
  }function ur(t) {
    return function (n, e) {
      var r = Mh(n),
          i = Mh(e),
          o = t(r * i);return [o * i * Eh(n), o * Eh(e)];
    };
  }function ar(t) {
    return function (n, e) {
      var r = Ch(n * n + e * e),
          i = t(r),
          o = Eh(i),
          u = Mh(i);return [wh(n * o, r * u), Tn(r && e * o / r)];
    };
  }function cr(t, n) {
    return [t, kh(zh((vh + n) / 2))];
  }function sr(t) {
    function n() {
      var n = dh * a(),
          u = o(tp(o.rotate()).invert([0, 0]));return s(null == f ? [[u[0] - n, u[1] - n], [u[0] + n, u[1] + n]] : t === cr ? [[Math.max(u[0] - n, f), e], [Math.min(u[0] + n, r), i]] : [[f, Math.max(u[1] - n, e)], [r, Math.min(u[1] + n, i)]]);
    }var e,
        r,
        i,
        o = er(t),
        u = o.center,
        a = o.scale,
        c = o.translate,
        s = o.clipExtent,
        f = null;return o.scale = function (t) {
      return arguments.length ? (a(t), n()) : a();
    }, o.translate = function (t) {
      return arguments.length ? (c(t), n()) : c();
    }, o.center = function (t) {
      return arguments.length ? (u(t), n()) : u();
    }, o.clipExtent = function (t) {
      return arguments.length ? (null == t ? f = e = r = i = null : (f = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == f ? null : [[f, e], [r, i]];
    }, n();
  }function fr(t) {
    return zh((vh + t) / 2);
  }function lr(t, n) {
    function e(t, n) {
      o > 0 ? n < -vh + ph && (n = -vh + ph) : n > vh - ph && (n = vh - ph);var e = o / Sh(fr(n), i);return [e * Eh(i * t), o - e * Mh(i * t)];
    }var r = Mh(t),
        i = t === n ? Eh(t) : kh(r / Mh(n)) / kh(fr(n) / fr(t)),
        o = r * Sh(fr(t), i) / i;return i ? (e.invert = function (t, n) {
      var e = o - n,
          r = Ah(i) * Ch(t * t + e * e);return [wh(t, xh(e)) / i * Ah(e), 2 * bh(Sh(o / r, 1 / i)) - vh];
    }, e) : cr;
  }function hr(t, n) {
    return [t, n];
  }function pr(t, n) {
    function e(t, n) {
      var e = o - n,
          r = i * t;return [e * Eh(r), o - e * Mh(r)];
    }var r = Mh(t),
        i = t === n ? Eh(t) : (r - Mh(n)) / (n - t),
        o = r / i + t;return xh(i) < ph ? hr : (e.invert = function (t, n) {
      var e = o - n;return [wh(t, xh(e)) / i * Ah(e), o - Ah(i) * Ch(t * t + e * e)];
    }, e);
  }function dr(t, n) {
    var e = Mh(n),
        r = Mh(t) * e;return [e * Eh(t) / r, Eh(n) / r];
  }function vr(t, n, e, r) {
    return 1 === t && 1 === n && 0 === e && 0 === r ? xp : Ze({ point: function point(i, o) {
        this.stream.point(i * t + e, o * n + r);
      } });
  }function gr(t, n) {
    var e = n * n,
        r = e * e;return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))];
  }function _r(t, n) {
    return [Mh(n) * Eh(t), Eh(n)];
  }function yr(t, n) {
    var e = Mh(n),
        r = 1 + Mh(t) * e;return [e * Eh(t) / r, Eh(n) / r];
  }function mr(t, n) {
    return [kh(zh((vh + n) / 2)), -t];
  }function xr(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }function br(t, n) {
    return t + n.x;
  }function wr(t, n) {
    return Math.max(t, n.y);
  }function Mr(t) {
    var n = 0,
        e = t.children,
        r = e && e.length;if (r) for (; --r >= 0;) {
      n += e[r].value;
    } else n = 1;t.value = n;
  }function Tr(t, n) {
    var e,
        r,
        i,
        o,
        u,
        a = new Er(t),
        c = +t.value && (a.value = t.value),
        s = [a];for (null == n && (n = Nr); e = s.pop();) {
      if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length)) for (e.children = new Array(u), o = u - 1; o >= 0; --o) {
        s.push(r = e.children[o] = new Er(i[o])), r.parent = e, r.depth = e.depth + 1;
      }
    }return a.eachBefore(Sr);
  }function Nr(t) {
    return t.children;
  }function kr(t) {
    t.data = t.data.data;
  }function Sr(t) {
    var n = 0;do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }function Er(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
  }function Ar(t, n) {
    var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;return e < 0 || e * e < r * r + i * i;
  }function Cr(t, n) {
    var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;return e > 0 && e * e > r * r + i * i;
  }function zr(t, n) {
    for (var e = 0; e < n.length; ++e) {
      if (!Cr(t, n[e])) return !1;
    }return !0;
  }function Pr(t, n) {
    var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        u = n.y,
        a = n.r,
        c = o - e,
        s = u - r,
        f = a - i,
        l = Math.sqrt(c * c + s * s);return { x: (e + o + c / l * f) / 2, y: (r + u + s / l * f) / 2, r: (l + i + a) / 2 };
  }function Rr(t, n, e) {
    var r = t.x,
        i = t.y,
        o = t.r,
        u = n.x,
        a = n.y,
        c = n.r,
        s = e.x,
        f = e.y,
        l = e.r,
        h = r - u,
        p = r - s,
        d = i - a,
        v = i - f,
        g = c - o,
        _ = l - o,
        y = r * r + i * i - o * o,
        m = y - u * u - a * a + c * c,
        x = y - s * s - f * f + l * l,
        b = p * d - h * v,
        w = (d * x - v * m) / (2 * b) - r,
        M = (v * g - d * _) / b,
        T = (p * m - h * x) / (2 * b) - i,
        N = (h * _ - p * g) / b,
        k = M * M + N * N - 1,
        S = 2 * (o + w * M + T * N),
        E = w * w + T * T - o * o,
        A = -(k ? (S + Math.sqrt(S * S - 4 * k * E)) / (2 * k) : E / S);return { x: r + w + M * A, y: i + T + N * A, r: A };
  }function Lr(t, n, e) {
    var r = t.x,
        i = t.y,
        o = n.r + e.r,
        u = t.r + e.r,
        a = n.x - r,
        c = n.y - i,
        s = a * a + c * c;if (s) {
      var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
          l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);e.x = r + f * a + l * c, e.y = i + f * c - l * a;
    } else e.x = r + u, e.y = i;
  }function qr(t, n) {
    var e = n.x - t.x,
        r = n.y - t.y,
        i = t.r + n.r;return i * i - 1e-6 > e * e + r * r;
  }function Dr(t) {
    var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;return i * i + o * o;
  }function Ur(t) {
    this._ = t, this.next = null, this.previous = null;
  }function Or(t) {
    if (!(i = t.length)) return 0;var n, e, r, i, o, u, a, c, s, f, l;if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;Lr(e, n, r = t[2]), n = new Ur(n), e = new Ur(e), r = new Ur(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;t: for (a = 3; a < i; ++a) {
      Lr(n._, e._, r = t[a]), r = new Ur(r), c = e.next, s = n.previous, f = e._.r, l = n._.r;do {
        if (f <= l) {
          if (qr(c._, r._)) {
            e = c, n.next = e, e.previous = n, --a;continue t;
          }f += c._.r, c = c.next;
        } else {
          if (qr(s._, r._)) {
            (n = s).next = e, e.previous = n, --a;continue t;
          }l += s._.r, s = s.previous;
        }
      } while (c !== s.next);for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = Dr(n); (r = r.next) !== e;) {
        (u = Dr(r)) < o && (n = r, o = u);
      }e = n.next;
    }for (n = [e._], r = e; (r = r.next) !== e;) {
      n.push(r._);
    }for (r = nd(n), a = 0; a < i; ++a) {
      n = t[a], n.x -= r.x, n.y -= r.y;
    }return r.r;
  }function Fr(t) {
    if ("function" != typeof t) throw new Error();return t;
  }function Ir() {
    return 0;
  }function Yr(t) {
    return Math.sqrt(t.value);
  }function Br(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0));
    };
  }function Hr(t, n) {
    return function (e) {
      if (r = e.children) {
        var r,
            i,
            o,
            u = r.length,
            a = t(e) * n || 0;if (a) for (i = 0; i < u; ++i) {
          r[i].r += a;
        }if (o = Or(r), a) for (i = 0; i < u; ++i) {
          r[i].r -= a;
        }e.r = o + a;
      }
    };
  }function jr(t) {
    return function (n) {
      var e = n.parent;n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y);
    };
  }function Xr(t) {
    return t.id;
  }function Vr(t) {
    return t.parentId;
  }function $r(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }function Wr(t) {
    var n = t.children;return n ? n[0] : t.t;
  }function Zr(t) {
    var n = t.children;return n ? n[n.length - 1] : t.t;
  }function Gr(t, n, e) {
    var r = e / (n.i - t.i);n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e;
  }function Qr(t, n, e) {
    return t.a.parent === n.parent ? t.a : e;
  }function Jr(t, n) {
    this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
  }function Kr(t, n, e, r, i, o) {
    for (var u, a, c, s, f, l, h, p, d, v, g, _ = [], y = n.children, m = 0, x = 0, b = y.length, w = n.value; m < b;) {
      c = i - e, s = o - r;do {
        f = y[x++].value;
      } while (!f && x < b);for (l = h = f, g = f * f * (v = Math.max(s / c, c / s) / (w * t)), d = Math.max(h / g, g / l); x < b; ++x) {
        if (f += a = y[x].value, a < l && (l = a), a > h && (h = a), g = f * f * v, (p = Math.max(h / g, g / l)) > d) {
          f -= a;break;
        }d = p;
      }_.push(u = { value: f, dice: c < s, children: y.slice(m, x) }), u.dice ? id(u, e, r, i, w ? r += s * f / w : o) : cd(u, e, r, w ? e += c * f / w : i, o), w -= f, m = x;
    }return _;
  }function ti(t, n) {
    return t[0] - n[0] || t[1] - n[1];
  }function ni(t) {
    for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
      for (; r > 1 && hd(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) {
        --r;
      }e[r++] = i;
    }return e.slice(0, r);
  }function ei(t) {
    this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0;
  }function ri(t) {
    if (!t._start) try {
      (function (t) {
        for (; t._start = t._waiting && t._active < t._size;) {
          var n = t._ended + t._active,
              e = t._tasks[n],
              r = e.length - 1,
              i = e[r];e[r] = function (t, n) {
            return function (e, r) {
              t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? ii(t, e) : (t._data[n] = r, t._waiting ? ri(t) : oi(t))));
            };
          }(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || dd);
        }
      })(t);
    } catch (n) {
      if (t._tasks[t._ended + t._active - 1]) ii(t, n);else if (!t._data) throw n;
    }
  }function ii(t, n) {
    var e,
        r = t._tasks.length;for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;) {
      if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
        e.abort();
      } catch (n) {}
    }t._active = NaN, oi(t);
  }function oi(t) {
    if (!t._active && t._call) {
      var n = t._data;t._data = void 0, t._call(t._error, n);
    }
  }function ui(t) {
    if (null == t) t = 1 / 0;else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");return new ei(t);
  }function ai(t) {
    function n(n) {
      var o = n + "",
          u = e.get(o);if (!u) {
        if (i !== Ld) return i;e.set(o, u = r.push(n));
      }return t[(u - 1) % t.length];
    }var e = Kt(),
        r = [],
        i = Ld;return t = null == t ? [] : Rd.call(t), n.domain = function (t) {
      if (!arguments.length) return r.slice();r = [], e = Kt();for (var i, o, u = -1, a = t.length; ++u < a;) {
        e.has(o = (i = t[u]) + "") || e.set(o, r.push(i));
      }return n;
    }, n.range = function (e) {
      return arguments.length ? (t = Rd.call(e), n) : t.slice();
    }, n.unknown = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.copy = function () {
      return ai().domain(r).range(t).unknown(i);
    }, n;
  }function ci() {
    function t() {
      var t = i().length,
          r = u[1] < u[0],
          l = u[r - 0],
          h = u[1 - r];n = (h - l) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), l += (h - l - n * (t - c)) * f, e = n * (1 - c), a && (l = Math.round(l), e = Math.round(e));var p = Pa(t).map(function (t) {
        return l + n * t;
      });return o(r ? p.reverse() : p);
    }var n,
        e,
        r = ai().unknown(void 0),
        i = r.domain,
        o = r.range,
        u = [0, 1],
        a = !1,
        c = 0,
        s = 0,
        f = .5;return delete r.unknown, r.domain = function (n) {
      return arguments.length ? (i(n), t()) : i();
    }, r.range = function (n) {
      return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice();
    }, r.rangeRound = function (n) {
      return u = [+n[0], +n[1]], a = !0, t();
    }, r.bandwidth = function () {
      return e;
    }, r.step = function () {
      return n;
    }, r.round = function (n) {
      return arguments.length ? (a = !!n, t()) : a;
    }, r.padding = function (n) {
      return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c;
    }, r.paddingInner = function (n) {
      return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c;
    }, r.paddingOuter = function (n) {
      return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s;
    }, r.align = function (n) {
      return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f;
    }, r.copy = function () {
      return ci().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f);
    }, t();
  }function si(t) {
    var n = t.copy;return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
      return si(n());
    }, t;
  }function fi(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : qd(n);
  }function li(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function hi(t, n) {
    function e() {
      return i = Math.min(a.length, c.length) > 2 ? function (t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
            o = new Array(i),
            u = new Array(i),
            a = -1;for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) {
          o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
        }return function (n) {
          var e = ba(t, n, 1, i) - 1;return u[e](o[e](n));
        };
      } : function (t, n, e, r) {
        var i = t[0],
            o = t[1],
            u = n[0],
            a = n[1];return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)), function (t) {
          return u(i(t));
        };
      }, o = u = null, r;
    }function r(n) {
      return (o || (o = i(a, c, f ? function (t) {
        return function (n, e) {
          var r = t(n = +n, e = +e);return function (t) {
            return t <= n ? 0 : t >= e ? 1 : r(t);
          };
        };
      }(t) : t, s)))(+n);
    }var i,
        o,
        u,
        a = Ud,
        c = Ud,
        s = vs,
        f = !1;return r.invert = function (t) {
      return (u || (u = i(c, a, fi, f ? function (t) {
        return function (n, e) {
          var r = t(n = +n, e = +e);return function (t) {
            return t <= 0 ? n : t >= 1 ? e : r(t);
          };
        };
      }(n) : n)))(+t);
    }, r.domain = function (t) {
      return arguments.length ? (a = Pd.call(t, Dd), e()) : a.slice();
    }, r.range = function (t) {
      return arguments.length ? (c = Rd.call(t), e()) : c.slice();
    }, r.rangeRound = function (t) {
      return c = Rd.call(t), s = gs, e();
    }, r.clamp = function (t) {
      return arguments.length ? (f = !!t, e()) : f;
    }, r.interpolate = function (t) {
      return arguments.length ? (s = t, e()) : s;
    }, e();
  }function pi(t) {
    var n = t.domain;return t.ticks = function (t) {
      var e = n();return Da(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      return Od(n(), t, e);
    }, t.nice = function (r) {
      null == r && (r = 10);var i,
          o = n(),
          u = 0,
          a = o.length - 1,
          c = o[u],
          s = o[a];return s < c && (i = c, c = s, s = i, i = u, u = a, a = i), (i = e(c, s, r)) > 0 ? i = e(c = Math.floor(c / i) * i, s = Math.ceil(s / i) * i, r) : i < 0 && (i = e(c = Math.ceil(c * i) / i, s = Math.floor(s * i) / i, r)), i > 0 ? (o[u] = Math.floor(c / i) * i, o[a] = Math.ceil(s / i) * i, n(o)) : i < 0 && (o[u] = Math.ceil(c * i) / i, o[a] = Math.floor(s * i) / i, n(o)), t;
    }, t;
  }function di() {
    var t = hi(fi, fs);return t.copy = function () {
      return li(t, di());
    }, pi(t);
  }function vi() {
    function t(t) {
      return +t;
    }var n = [0, 1];return t.invert = t, t.domain = t.range = function (e) {
      return arguments.length ? (n = Pd.call(e, Dd), t) : n.slice();
    }, t.copy = function () {
      return vi().domain(n);
    }, pi(t);
  }function gi(t, n) {
    return (n = Math.log(n / t)) ? function (e) {
      return Math.log(e / t) / n;
    } : qd(n);
  }function _i(t, n) {
    return t < 0 ? function (e) {
      return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
    } : function (e) {
      return Math.pow(n, e) * Math.pow(t, 1 - e);
    };
  }function yi(t) {
    return 10 === t ? function (t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    } : t === Math.E ? Math.exp : function (n) {
      return Math.pow(t, n);
    };
  }function mi(t) {
    return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
      return Math.log(n) / t;
    });
  }function xi(t) {
    return function (n) {
      return -t(-n);
    };
  }function bi() {
    function n() {
      return o = mi(i), u = yi(i), r()[0] < 0 && (o = xi(o), u = xi(u)), e;
    }var e = hi(gi, _i).domain([1, 10]),
        r = e.domain,
        i = 10,
        o = mi(10),
        u = yi(10);return e.base = function (t) {
      return arguments.length ? (i = +t, n()) : i;
    }, e.domain = function (t) {
      return arguments.length ? (r(t), n()) : r();
    }, e.ticks = function (t) {
      var n,
          e = r(),
          a = e[0],
          c = e[e.length - 1];(n = c < a) && (h = a, a = c, c = h);var s,
          f,
          l,
          h = o(a),
          p = o(c),
          d = null == t ? 10 : +t,
          v = [];if (!(i % 1) && p - h < d) {
        if (h = Math.round(h) - 1, p = Math.round(p) + 1, a > 0) {
          for (; h < p; ++h) {
            for (f = 1, s = u(h); f < i; ++f) {
              if (!((l = s * f) < a)) {
                if (l > c) break;v.push(l);
              }
            }
          }
        } else for (; h < p; ++h) {
          for (f = i - 1, s = u(h); f >= 1; --f) {
            if (!((l = s * f) < a)) {
              if (l > c) break;v.push(l);
            }
          }
        }
      } else v = Da(h, p, Math.min(p - h, d)).map(u);return n ? v.reverse() : v;
    }, e.tickFormat = function (n, r) {
      if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0) return r;null == n && (n = 10);var a = Math.max(1, i * n / e.ticks().length);return function (t) {
        var n = t / u(Math.round(o(t)));return n * i < i - .5 && (n *= i), n <= a ? r(t) : "";
      };
    }, e.nice = function () {
      return r(Fd(r(), { floor: function floor(t) {
          return u(Math.floor(o(t)));
        }, ceil: function ceil(t) {
          return u(Math.ceil(o(t)));
        } }));
    }, e.copy = function () {
      return li(e, bi().base(i));
    }, e;
  }function wi(t, n) {
    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
  }function Mi() {
    var t = 1,
        n = hi(function (n, e) {
      return (e = wi(e, t) - (n = wi(n, t))) ? function (r) {
        return (wi(r, t) - n) / e;
      } : qd(e);
    }, function (n, e) {
      return e = wi(e, t) - (n = wi(n, t)), function (r) {
        return wi(n + e * r, 1 / t);
      };
    }),
        e = n.domain;return n.exponent = function (n) {
      return arguments.length ? (t = +n, e(e())) : t;
    }, n.copy = function () {
      return li(n, Mi().exponent(t));
    }, pi(n);
  }function Ti() {
    function t() {
      var t = 0,
          o = Math.max(1, r.length);for (i = new Array(o - 1); ++t < o;) {
        i[t - 1] = Oa(e, t / o);
      }return n;
    }function n(t) {
      if (!isNaN(t = +t)) return r[ba(i, t)];
    }var e = [],
        r = [],
        i = [];return n.invertExtent = function (t) {
      var n = r.indexOf(t);return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]];
    }, n.domain = function (n) {
      if (!arguments.length) return e.slice();e = [];for (var r, i = 0, o = n.length; i < o; ++i) {
        null == (r = n[i]) || isNaN(r = +r) || e.push(r);
      }return e.sort(ya), t();
    }, n.range = function (n) {
      return arguments.length ? (r = Rd.call(n), t()) : r.slice();
    }, n.quantiles = function () {
      return i.slice();
    }, n.copy = function () {
      return Ti().domain(e).range(r);
    }, n;
  }function Ni() {
    function t(t) {
      if (t <= t) return u[ba(o, t, 0, i)];
    }function n() {
      var n = -1;for (o = new Array(i); ++n < i;) {
        o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
      }return t;
    }var e = 0,
        r = 1,
        i = 1,
        o = [.5],
        u = [0, 1];return t.domain = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r];
    }, t.range = function (t) {
      return arguments.length ? (i = (u = Rd.call(t)).length - 1, n()) : u.slice();
    }, t.invertExtent = function (t) {
      var n = u.indexOf(t);return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]];
    }, t.copy = function () {
      return Ni().domain([e, r]).range(u);
    }, pi(t);
  }function ki() {
    function t(t) {
      if (t <= t) return e[ba(n, t, 0, r)];
    }var n = [.5],
        e = [0, 1],
        r = 1;return t.domain = function (i) {
      return arguments.length ? (n = Rd.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice();
    }, t.range = function (i) {
      return arguments.length ? (e = Rd.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice();
    }, t.invertExtent = function (t) {
      var r = e.indexOf(t);return [n[r - 1], n[r]];
    }, t.copy = function () {
      return ki().domain(n).range(e);
    }, t;
  }function Si(t, n, e, r) {
    function i(n) {
      return t(n = new Date(+n)), n;
    }return i.floor = i, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, o) {
      var u,
          a = [];if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;do {
        a.push(u = new Date(+e)), n(e, o), t(e);
      } while (u < e && e < r);return a;
    }, i.filter = function (e) {
      return Si(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) {
          for (; n(t, -1), !e(t);) {}
        } else for (; --r >= 0;) {
          for (; n(t, 1), !e(t);) {}
        }
      });
    }, e && (i.count = function (n, r) {
      return Id.setTime(+n), Yd.setTime(+r), t(Id), t(Yd), Math.floor(e(Id, Yd));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0;
      } : function (n) {
        return i.count(0, n) % t == 0;
      }) : i : null;
    }), i;
  }function Ei(t) {
    return Si(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jd) / Xd;
    });
  }function Ai(t) {
    return Si(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Xd;
    });
  }function Ci(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function zi(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function Pi(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function Ri(t) {
    function n(t, n) {
      return function (e) {
        var r,
            i,
            o,
            u = [],
            a = -1,
            c = 0,
            s = t.length;for (e instanceof Date || (e = new Date(+e)); ++a < s;) {
          37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = Hv[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
        }return u.push(t.slice(c, a)), u.join("");
      };
    }function e(t, n) {
      return function (e) {
        var i,
            o,
            u = Pi(1900);if (r(u, t, e += "", 0) != e.length) return null;if ("Q" in u) return new Date(u.Q);if ("p" in u && (u.H = u.H % 12 + 12 * u.p), "V" in u) {
          if (u.V < 1 || u.V > 53) return null;"w" in u || (u.w = 1), "Z" in u ? (i = (o = (i = zi(Pi(u.y))).getUTCDay()) > 4 || 0 === o ? Nv.ceil(i) : Nv(i), i = wv.offset(i, 7 * (u.V - 1)), u.y = i.getUTCFullYear(), u.m = i.getUTCMonth(), u.d = i.getUTCDate() + (u.w + 6) % 7) : (i = (o = (i = n(Pi(u.y))).getDay()) > 4 || 0 === o ? nv.ceil(i) : nv(i), i = Jd.offset(i, 7 * (u.V - 1)), u.y = i.getFullYear(), u.m = i.getMonth(), u.d = i.getDate() + (u.w + 6) % 7);
        } else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), o = "Z" in u ? zi(Pi(u.y)).getUTCDay() : n(Pi(u.y)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (o + 5) % 7 : u.w + 7 * u.U - (o + 6) % 7);return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, zi(u)) : n(u);
      };
    }function r(t, n, e, r) {
      for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
        if (r >= c) return -1;if (37 === (i = n.charCodeAt(u++))) {
          if (i = n.charAt(u++), !(o = T[i in Hv ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }var i = t.dateTime,
        o = t.date,
        u = t.time,
        a = t.periods,
        c = t.days,
        s = t.shortDays,
        f = t.months,
        l = t.shortMonths,
        h = Di(a),
        _p2 = Ui(a),
        d = Di(c),
        v = Ui(c),
        g = Di(s),
        _ = Ui(s),
        y = Di(f),
        m = Ui(f),
        x = Di(l),
        _b = Ui(l),
        w = { a: function a(t) {
        return s[t.getDay()];
      }, A: function A(t) {
        return c[t.getDay()];
      }, b: function b(t) {
        return l[t.getMonth()];
      }, B: function B(t) {
        return f[t.getMonth()];
      }, c: null, d: ro, e: ro, f: co, H: io, I: oo, j: uo, L: ao, m: so, M: fo, p: function p(t) {
        return a[+(t.getHours() >= 12)];
      }, Q: Fo, s: Io, S: lo, u: ho, U: po, V: vo, w: go, W: _o, x: null, X: null, y: yo, Y: mo, Z: xo, "%": Oo },
        M = { a: function a(t) {
        return s[t.getUTCDay()];
      }, A: function A(t) {
        return c[t.getUTCDay()];
      }, b: function b(t) {
        return l[t.getUTCMonth()];
      }, B: function B(t) {
        return f[t.getUTCMonth()];
      }, c: null, d: bo, e: bo, f: ko, H: wo, I: Mo, j: To, L: No, m: So, M: Eo, p: function p(t) {
        return a[+(t.getUTCHours() >= 12)];
      }, Q: Fo, s: Io, S: Ao, u: Co, U: zo, V: Po, w: Ro, W: Lo, x: null, X: null, y: qo, Y: Do, Z: Uo, "%": Oo },
        T = { a: function a(t, n, e) {
        var r = g.exec(n.slice(e));return r ? (t.w = _[r[0].toLowerCase()], e + r[0].length) : -1;
      }, A: function A(t, n, e) {
        var r = d.exec(n.slice(e));return r ? (t.w = v[r[0].toLowerCase()], e + r[0].length) : -1;
      }, b: function b(t, n, e) {
        var r = x.exec(n.slice(e));return r ? (t.m = _b[r[0].toLowerCase()], e + r[0].length) : -1;
      }, B: function B(t, n, e) {
        var r = y.exec(n.slice(e));return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1;
      }, c: function c(t, n, e) {
        return r(t, i, n, e);
      }, d: $i, e: $i, f: Ki, H: Zi, I: Zi, j: Wi, L: Ji, m: Vi, M: Gi, p: function p(t, n, e) {
        var r = h.exec(n.slice(e));return r ? (t.p = _p2[r[0].toLowerCase()], e + r[0].length) : -1;
      }, Q: no, s: eo, S: Qi, u: Fi, U: Ii, V: Yi, w: Oi, W: Bi, x: function x(t, n, e) {
        return r(t, o, n, e);
      }, X: function X(t, n, e) {
        return r(t, u, n, e);
      }, y: ji, Y: Hi, Z: Xi, "%": to };return w.x = n(o, w), w.X = n(u, w), w.c = n(i, w), M.x = n(o, M), M.X = n(u, M), M.c = n(i, M), { format: function format(t) {
        var e = n(t += "", w);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var n = e(t += "", Ci);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var e = n(t += "", M);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var n = e(t, zi);return n.toString = function () {
          return t;
        }, n;
      } };
  }function Li(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }function qi(t) {
    return t.replace(Vv, "\\$&");
  }function Di(t) {
    return new RegExp("^(?:" + t.map(qi).join("|") + ")", "i");
  }function Ui(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function Oi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 1));return r ? (t.w = +r[0], e + r[0].length) : -1;
  }function Fi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 1));return r ? (t.u = +r[0], e + r[0].length) : -1;
  }function Ii(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.U = +r[0], e + r[0].length) : -1;
  }function Yi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.V = +r[0], e + r[0].length) : -1;
  }function Bi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.W = +r[0], e + r[0].length) : -1;
  }function Hi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 4));return r ? (t.y = +r[0], e + r[0].length) : -1;
  }function ji(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }function Xi(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }function Vi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }function $i(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.d = +r[0], e + r[0].length) : -1;
  }function Wi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 3));return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }function Zi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.H = +r[0], e + r[0].length) : -1;
  }function Gi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.M = +r[0], e + r[0].length) : -1;
  }function Qi(t, n, e) {
    var r = jv.exec(n.slice(e, e + 2));return r ? (t.S = +r[0], e + r[0].length) : -1;
  }function Ji(t, n, e) {
    var r = jv.exec(n.slice(e, e + 3));return r ? (t.L = +r[0], e + r[0].length) : -1;
  }function Ki(t, n, e) {
    var r = jv.exec(n.slice(e, e + 6));return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
  }function to(t, n, e) {
    var r = Xv.exec(n.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function no(t, n, e) {
    var r = jv.exec(n.slice(e));return r ? (t.Q = +r[0], e + r[0].length) : -1;
  }function eo(t, n, e) {
    var r = jv.exec(n.slice(e));return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1;
  }function ro(t, n) {
    return Li(t.getDate(), n, 2);
  }function io(t, n) {
    return Li(t.getHours(), n, 2);
  }function oo(t, n) {
    return Li(t.getHours() % 12 || 12, n, 2);
  }function uo(t, n) {
    return Li(1 + Jd.count(gv(t), t), n, 3);
  }function ao(t, n) {
    return Li(t.getMilliseconds(), n, 3);
  }function co(t, n) {
    return ao(t, n) + "000";
  }function so(t, n) {
    return Li(t.getMonth() + 1, n, 2);
  }function fo(t, n) {
    return Li(t.getMinutes(), n, 2);
  }function lo(t, n) {
    return Li(t.getSeconds(), n, 2);
  }function ho(t) {
    var n = t.getDay();return 0 === n ? 7 : n;
  }function po(t, n) {
    return Li(tv.count(gv(t), t), n, 2);
  }function vo(t, n) {
    var e = t.getDay();return t = e >= 4 || 0 === e ? iv(t) : iv.ceil(t), Li(iv.count(gv(t), t) + (4 === gv(t).getDay()), n, 2);
  }function go(t) {
    return t.getDay();
  }function _o(t, n) {
    return Li(nv.count(gv(t), t), n, 2);
  }function yo(t, n) {
    return Li(t.getFullYear() % 100, n, 2);
  }function mo(t, n) {
    return Li(t.getFullYear() % 1e4, n, 4);
  }function xo(t) {
    var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + Li(n / 60 | 0, "0", 2) + Li(n % 60, "0", 2);
  }function bo(t, n) {
    return Li(t.getUTCDate(), n, 2);
  }function wo(t, n) {
    return Li(t.getUTCHours(), n, 2);
  }function Mo(t, n) {
    return Li(t.getUTCHours() % 12 || 12, n, 2);
  }function To(t, n) {
    return Li(1 + wv.count(Iv(t), t), n, 3);
  }function No(t, n) {
    return Li(t.getUTCMilliseconds(), n, 3);
  }function ko(t, n) {
    return No(t, n) + "000";
  }function So(t, n) {
    return Li(t.getUTCMonth() + 1, n, 2);
  }function Eo(t, n) {
    return Li(t.getUTCMinutes(), n, 2);
  }function Ao(t, n) {
    return Li(t.getUTCSeconds(), n, 2);
  }function Co(t) {
    var n = t.getUTCDay();return 0 === n ? 7 : n;
  }function zo(t, n) {
    return Li(Tv.count(Iv(t), t), n, 2);
  }function Po(t, n) {
    var e = t.getUTCDay();return t = e >= 4 || 0 === e ? Ev(t) : Ev.ceil(t), Li(Ev.count(Iv(t), t) + (4 === Iv(t).getUTCDay()), n, 2);
  }function Ro(t) {
    return t.getUTCDay();
  }function Lo(t, n) {
    return Li(Nv.count(Iv(t), t), n, 2);
  }function qo(t, n) {
    return Li(t.getUTCFullYear() % 100, n, 2);
  }function Do(t, n) {
    return Li(t.getUTCFullYear() % 1e4, n, 4);
  }function Uo() {
    return "+0000";
  }function Oo() {
    return "%";
  }function Fo(t) {
    return +t;
  }function Io(t) {
    return Math.floor(+t / 1e3);
  }function Yo(n) {
    return Yv = Ri(n), t.timeFormat = Yv.format, t.timeParse = Yv.parse, t.utcFormat = Yv.utcFormat, t.utcParse = Yv.utcParse, Yv;
  }function Bo(t) {
    return new Date(t);
  }function Ho(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }function jo(t, n, e, i, o, u, a, c, s) {
    function f(n, e, i, o) {
      if (null == n && (n = 10), "number" == typeof n) {
        var u = Math.abs(i - e) / n,
            a = ma(function (t) {
          return t[2];
        }).right(w, u);a === w.length ? (o = r(e / ng, i / ng, n), n = t) : a ? (o = (a = w[u / w[a - 1][2] < w[a][2] / u ? a - 1 : a])[1], n = a[0]) : (o = Math.max(r(e, i, n), 1), n = c);
      }return null == o ? n : n.every(o);
    }var l = hi(fi, fs),
        h = l.invert,
        p = l.domain,
        d = s(".%L"),
        v = s(":%S"),
        g = s("%I:%M"),
        _ = s("%I %p"),
        y = s("%a %d"),
        m = s("%b %d"),
        x = s("%B"),
        b = s("%Y"),
        w = [[a, 1, Zv], [a, 5, 5 * Zv], [a, 15, 15 * Zv], [a, 30, 30 * Zv], [u, 1, Gv], [u, 5, 5 * Gv], [u, 15, 15 * Gv], [u, 30, 30 * Gv], [o, 1, Qv], [o, 3, 3 * Qv], [o, 6, 6 * Qv], [o, 12, 12 * Qv], [i, 1, Jv], [i, 2, 2 * Jv], [e, 1, Kv], [n, 1, tg], [n, 3, 3 * tg], [t, 1, ng]];return l.invert = function (t) {
      return new Date(h(t));
    }, l.domain = function (t) {
      return arguments.length ? p(Pd.call(t, Ho)) : p().map(Bo);
    }, l.ticks = function (t, n) {
      var e,
          r = p(),
          i = r[0],
          o = r[r.length - 1],
          u = o < i;return u && (e = i, i = o, o = e), e = f(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e;
    }, l.tickFormat = function (r, c) {
      return null == c ? function (r) {
        return (a(r) < r ? d : u(r) < r ? v : o(r) < r ? g : i(r) < r ? _ : n(r) < r ? e(r) < r ? y : m : t(r) < r ? x : b)(r);
      } : s(c);
    }, l.nice = function (t, n) {
      var e = p();return (t = f(t, e[0], e[e.length - 1], n)) ? p(Fd(e, t)) : l;
    }, l.copy = function () {
      return li(l, jo(t, n, e, i, o, u, a, c, s));
    }, l;
  }function Xo(t) {
    var n = t.length;return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }function Vo(t) {
    function n(n) {
      var o = (n - e) / (r - e);return t(i ? Math.max(0, Math.min(1, o)) : o);
    }var e = 0,
        r = 1,
        i = !1;return n.domain = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r];
    }, n.clamp = function (t) {
      return arguments.length ? (i = !!t, n) : i;
    }, n.interpolator = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.copy = function () {
      return Vo(t).domain([e, r]).clamp(i);
    }, pi(n);
  }function $o(t) {
    return t >= 1 ? Ng : t <= -1 ? -Ng : Math.asin(t);
  }function Wo(t) {
    return t.innerRadius;
  }function Zo(t) {
    return t.outerRadius;
  }function Go(t) {
    return t.startAngle;
  }function Qo(t) {
    return t.endAngle;
  }function Jo(t) {
    return t && t.padAngle;
  }function Ko(t, n, e, r, i, o, u) {
    var a = t - e,
        c = n - r,
        s = (u ? o : -o) / wg(a * a + c * c),
        f = s * c,
        l = -s * a,
        h = t + f,
        p = n + l,
        d = e + f,
        v = r + l,
        g = (h + d) / 2,
        _ = (p + v) / 2,
        y = d - h,
        m = v - p,
        x = y * y + m * m,
        b = i - o,
        w = h * v - d * p,
        M = (m < 0 ? -1 : 1) * wg(mg(0, b * b * x - w * w)),
        T = (w * m - y * M) / x,
        N = (-w * y - m * M) / x,
        k = (w * m + y * M) / x,
        S = (-w * y + m * M) / x,
        E = T - g,
        A = N - _,
        C = k - g,
        z = S - _;return E * E + A * A > C * C + z * z && (T = k, N = S), { cx: T, cy: N, x01: -f, y01: -l, x11: T * (i / b - 1), y11: N * (i / b - 1) };
  }function tu(t) {
    this._context = t;
  }function nu(t) {
    return t[0];
  }function eu(t) {
    return t[1];
  }function ru(t) {
    this._curve = t;
  }function iu(t) {
    function n(n) {
      return new ru(t(n));
    }return n._curve = t, n;
  }function ou(t) {
    var n = t.curve;return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
      return arguments.length ? n(iu(t)) : n()._curve;
    }, t;
  }function uu(t) {
    return t.source;
  }function au(t) {
    return t.target;
  }function cu(t) {
    function n() {
      var n,
          a = Dg.call(arguments),
          c = e.apply(this, a),
          s = r.apply(this, a);if (u || (u = n = Vt()), t(u, +i.apply(this, (a[0] = c, a)), +o.apply(this, a), +i.apply(this, (a[0] = s, a)), +o.apply(this, a)), n) return u = null, n + "" || null;
    }var e = uu,
        r = au,
        i = nu,
        o = eu,
        u = null;return n.source = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.target = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.x = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : vg(+t), n) : i;
    }, n.y = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : vg(+t), n) : o;
    }, n.context = function (t) {
      return arguments.length ? (u = null == t ? null : t, n) : u;
    }, n;
  }function su(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i);
  }function fu(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i);
  }function lu(t, n, e, r, i) {
    var o = qg(n, e),
        u = qg(n, e = (e + i) / 2),
        a = qg(r, e),
        c = qg(r, i);t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1]);
  }function hu(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
  }function pu(t) {
    this._context = t;
  }function du(t) {
    this._context = t;
  }function vu(t) {
    this._context = t;
  }function gu(t, n) {
    this._basis = new pu(t), this._beta = n;
  }function _u(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }function yu(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function mu(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function xu(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function bu(t, n, e) {
    var r = t._x1,
        i = t._y1,
        o = t._x2,
        u = t._y2;if (t._l01_a > Mg) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          c = 3 * t._l01_a * (t._l01_a + t._l12_a);r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }if (t._l23_a > Mg) {
      var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          f = 3 * t._l23_a * (t._l23_a + t._l12_a);o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f;
    }t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2);
  }function wu(t, n) {
    this._context = t, this._alpha = n;
  }function Mu(t, n) {
    this._context = t, this._alpha = n;
  }function Tu(t, n) {
    this._context = t, this._alpha = n;
  }function Nu(t) {
    this._context = t;
  }function ku(t) {
    return t < 0 ? -1 : 1;
  }function Su(t, n, e) {
    var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || i < 0 && -0),
        u = (e - t._y1) / (i || r < 0 && -0),
        a = (o * i + u * r) / (r + i);return (ku(o) + ku(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0;
  }function Eu(t, n) {
    var e = t._x1 - t._x0;return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }function Au(t, n, e) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        u = t._y1,
        a = (o - r) / 3;t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
  }function Cu(t) {
    this._context = t;
  }function zu(t) {
    this._context = new Pu(t);
  }function Pu(t) {
    this._context = t;
  }function Ru(t) {
    this._context = t;
  }function Lu(t) {
    var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        u = new Array(r);for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) {
      i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
    }for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) {
      e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
    }for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) {
      i[n] = (u[n] - i[n + 1]) / o[n];
    }for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) {
      o[n] = 2 * t[n + 1] - i[n + 1];
    }return [i, o];
  }function qu(t, n) {
    this._context = t, this._t = n;
  }function Du(t, n) {
    return t[n];
  }function Uu(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i;) {
      (n = +t[r][1]) && (e += n);
    }return e;
  }function Ou(t) {
    return t[0];
  }function Fu(t) {
    return t[1];
  }function Iu() {
    this._ = null;
  }function Yu(t) {
    t.U = t.C = t.L = t.R = t.P = t.N = null;
  }function Bu(t, n) {
    var e = n,
        r = n.R,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }function Hu(t, n) {
    var e = n,
        r = n.L,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }function ju(t) {
    for (; t.L;) {
      t = t.L;
    }return t;
  }function Xu(t, n, e, r) {
    var i = [null, null],
        o = __.push(i) - 1;return i.left = t, i.right = n, e && $u(i, t, n, e), r && $u(i, n, t, r), v_[t.index].halfedges.push(o), v_[n.index].halfedges.push(o), i;
  }function Vu(t, n, e) {
    var r = [n, e];return r.left = t, r;
  }function $u(t, n, e, r) {
    t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e);
  }function Wu(t, n, e, r, i) {
    var o,
        u = t[0],
        a = t[1],
        c = u[0],
        s = u[1],
        f = 0,
        l = 1,
        h = a[0] - c,
        p = a[1] - s;if (o = n - c, h || !(o > 0)) {
      if (o /= h, h < 0) {
        if (o < f) return;o < l && (l = o);
      } else if (h > 0) {
        if (o > l) return;o > f && (f = o);
      }if (o = r - c, h || !(o < 0)) {
        if (o /= h, h < 0) {
          if (o > l) return;o > f && (f = o);
        } else if (h > 0) {
          if (o < f) return;o < l && (l = o);
        }if (o = e - s, p || !(o > 0)) {
          if (o /= p, p < 0) {
            if (o < f) return;o < l && (l = o);
          } else if (p > 0) {
            if (o > l) return;o > f && (f = o);
          }if (o = i - s, p || !(o < 0)) {
            if (o /= p, p < 0) {
              if (o > l) return;o > f && (f = o);
            } else if (p > 0) {
              if (o < f) return;o < l && (l = o);
            }return !(f > 0 || l < 1) || (f > 0 && (t[0] = [c + f * h, s + f * p]), l < 1 && (t[1] = [c + l * h, s + l * p]), !0);
          }
        }
      }
    }
  }function Zu(t, n, e, r, i) {
    var o = t[1];if (o) return !0;var u,
        a,
        c = t[0],
        s = t.left,
        f = t.right,
        l = s[0],
        h = s[1],
        p = f[0],
        d = f[1],
        v = (l + p) / 2,
        g = (h + d) / 2;if (d === h) {
      if (v < n || v >= r) return;if (l > p) {
        if (c) {
          if (c[1] >= i) return;
        } else c = [v, e];o = [v, i];
      } else {
        if (c) {
          if (c[1] < e) return;
        } else c = [v, i];o = [v, e];
      }
    } else if (u = (l - p) / (d - h), a = g - u * v, u < -1 || u > 1) {
      if (l > p) {
        if (c) {
          if (c[1] >= i) return;
        } else c = [(e - a) / u, e];o = [(i - a) / u, i];
      } else {
        if (c) {
          if (c[1] < e) return;
        } else c = [(i - a) / u, i];o = [(e - a) / u, e];
      }
    } else if (h < d) {
      if (c) {
        if (c[0] >= r) return;
      } else c = [n, u * n + a];o = [r, u * r + a];
    } else {
      if (c) {
        if (c[0] < n) return;
      } else c = [r, u * r + a];o = [n, u * n + a];
    }return t[0] = c, t[1] = o, !0;
  }function Gu(t, n) {
    var e = t.site,
        r = n.left,
        i = n.right;return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]));
  }function Qu(t, n) {
    return n[+(n.left !== t.site)];
  }function Ju(t, n) {
    return n[+(n.left === t.site)];
  }function Ku(t) {
    var n = t.P,
        e = t.N;if (n && e) {
      var r = n.site,
          i = t.site,
          o = e.site;if (r !== o) {
        var u = i[0],
            a = i[1],
            c = r[0] - u,
            s = r[1] - a,
            f = o[0] - u,
            l = o[1] - a,
            h = 2 * (c * l - s * f);if (!(h >= -b_)) {
          var p = c * c + s * s,
              d = f * f + l * l,
              v = (l * p - s * d) / h,
              g = (c * d - f * p) / h,
              _ = y_.pop() || new function () {
            Yu(this), this.x = this.y = this.arc = this.site = this.cy = null;
          }();_.arc = t, _.site = i, _.x = v + u, _.y = (_.cy = g + a) + Math.sqrt(v * v + g * g), t.circle = _;for (var y = null, m = g_._; m;) {
            if (_.y < m.y || _.y === m.y && _.x <= m.x) {
              if (!m.L) {
                y = m.P;break;
              }m = m.L;
            } else {
              if (!m.R) {
                y = m;break;
              }m = m.R;
            }
          }g_.insert(y, _), y || (p_ = _);
        }
      }
    }
  }function ta(t) {
    var n = t.circle;n && (n.P || (p_ = n.N), g_.remove(n), y_.push(n), Yu(n), t.circle = null);
  }function na(t) {
    var n = m_.pop() || new function () {
      Yu(this), this.edge = this.site = this.circle = null;
    }();return n.site = t, n;
  }function ea(t) {
    ta(t), d_.remove(t), m_.push(t), Yu(t);
  }function ra(t) {
    var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        o = t.P,
        u = t.N,
        a = [t];ea(t);for (var c = o; c.circle && Math.abs(e - c.circle.x) < x_ && Math.abs(r - c.circle.cy) < x_;) {
      o = c.P, a.unshift(c), ea(c), c = o;
    }a.unshift(c), ta(c);for (var s = u; s.circle && Math.abs(e - s.circle.x) < x_ && Math.abs(r - s.circle.cy) < x_;) {
      u = s.N, a.push(s), ea(s), s = u;
    }a.push(s), ta(s);var f,
        l = a.length;for (f = 1; f < l; ++f) {
      s = a[f], c = a[f - 1], $u(s.edge, c.site, s.site, i);
    }c = a[0], (s = a[l - 1]).edge = Xu(c.site, s.site, null, i), Ku(c), Ku(s);
  }function ia(t) {
    for (var n, e, r, i, o = t[0], u = t[1], a = d_._; a;) {
      if ((r = oa(a, u) - o) > x_) a = a.L;else {
        if (!((i = o - function (t, n) {
          var e = t.N;if (e) return oa(e, n);var r = t.site;return r[1] === n ? r[0] : 1 / 0;
        }(a, u)) > x_)) {
          r > -x_ ? (n = a.P, e = a) : i > -x_ ? (n = a, e = a.N) : n = e = a;break;
        }if (!a.R) {
          n = a;break;
        }a = a.R;
      }
    }(function (t) {
      v_[t.index] = { site: t, halfedges: [] };
    })(t);var c = na(t);if (d_.insert(n, c), n || e) {
      if (n === e) return ta(n), e = na(n.site), d_.insert(c, e), c.edge = e.edge = Xu(n.site, c.site), Ku(n), void Ku(e);if (e) {
        ta(n), ta(e);var s = n.site,
            f = s[0],
            l = s[1],
            h = t[0] - f,
            p = t[1] - l,
            d = e.site,
            v = d[0] - f,
            g = d[1] - l,
            _ = 2 * (h * g - p * v),
            y = h * h + p * p,
            m = v * v + g * g,
            x = [(g * y - p * m) / _ + f, (h * m - v * y) / _ + l];$u(e.edge, s, d, x), c.edge = Xu(s, t, null, x), e.edge = Xu(t, d, null, x), Ku(n), Ku(e);
      } else c.edge = Xu(n.site, c.site);
    }
  }function oa(t, n) {
    var e = t.site,
        r = e[0],
        i = e[1],
        o = i - n;if (!o) return r;var u = t.P;if (!u) return -1 / 0;var a = (e = u.site)[0],
        c = e[1],
        s = c - n;if (!s) return a;var f = a - r,
        l = 1 / o - 1 / s,
        h = f / s;return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2;
  }function ua(t, n, e) {
    return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
  }function aa(t, n) {
    return n[1] - t[1] || n[0] - t[0];
  }function ca(t, n) {
    var e,
        r,
        i,
        o = t.sort(aa).pop();for (__ = [], v_ = new Array(t.length), d_ = new Iu(), g_ = new Iu();;) {
      if (i = p_, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (ia(o), e = o[0], r = o[1]), o = t.pop();else {
        if (!i) break;ra(i.arc);
      }
    }if (function () {
      for (var t, n, e, r, i = 0, o = v_.length; i < o; ++i) {
        if ((t = v_[i]) && (r = (n = t.halfedges).length)) {
          var u = new Array(r),
              a = new Array(r);for (e = 0; e < r; ++e) {
            u[e] = e, a[e] = Gu(t, __[n[e]]);
          }for (u.sort(function (t, n) {
            return a[n] - a[t];
          }), e = 0; e < r; ++e) {
            a[e] = n[u[e]];
          }for (e = 0; e < r; ++e) {
            n[e] = a[e];
          }
        }
      }
    }(), n) {
      var u = +n[0][0],
          a = +n[0][1],
          c = +n[1][0],
          s = +n[1][1];(function (t, n, e, r) {
        for (var i, o = __.length; o--;) {
          Zu(i = __[o], t, n, e, r) && Wu(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > x_ || Math.abs(i[0][1] - i[1][1]) > x_) || delete __[o];
        }
      })(u, a, c, s), function (t, n, e, r) {
        var i,
            o,
            u,
            a,
            c,
            s,
            f,
            l,
            h,
            p,
            d,
            v,
            g = v_.length,
            _ = !0;for (i = 0; i < g; ++i) {
          if (o = v_[i]) {
            for (u = o.site, a = (c = o.halfedges).length; a--;) {
              __[c[a]] || c.splice(a, 1);
            }for (a = 0, s = c.length; a < s;) {
              d = (p = Ju(o, __[c[a]]))[0], v = p[1], l = (f = Qu(o, __[c[++a % s]]))[0], h = f[1], (Math.abs(d - l) > x_ || Math.abs(v - h) > x_) && (c.splice(a, 0, __.push(Vu(u, p, Math.abs(d - t) < x_ && r - v > x_ ? [t, Math.abs(l - t) < x_ ? h : r] : Math.abs(v - r) < x_ && e - d > x_ ? [Math.abs(h - r) < x_ ? l : e, r] : Math.abs(d - e) < x_ && v - n > x_ ? [e, Math.abs(l - e) < x_ ? h : n] : Math.abs(v - n) < x_ && d - t > x_ ? [Math.abs(h - n) < x_ ? l : t, n] : null)) - 1), ++s);
            }s && (_ = !1);
          }
        }if (_) {
          var y,
              m,
              x,
              b = 1 / 0;for (i = 0, _ = null; i < g; ++i) {
            (o = v_[i]) && (x = (y = (u = o.site)[0] - t) * y + (m = u[1] - n) * m) < b && (b = x, _ = o);
          }if (_) {
            var w = [t, n],
                M = [t, r],
                T = [e, r],
                N = [e, n];_.halfedges.push(__.push(Vu(u = _.site, w, M)) - 1, __.push(Vu(u, M, T)) - 1, __.push(Vu(u, T, N)) - 1, __.push(Vu(u, N, w)) - 1);
          }
        }for (i = 0; i < g; ++i) {
          (o = v_[i]) && (o.halfedges.length || delete v_[i]);
        }
      }(u, a, c, s);
    }this.edges = __, this.cells = v_, d_ = g_ = __ = v_ = null;
  }function sa(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }function fa(t) {
    return t.__zoom || M_;
  }function la() {
    t.event.stopImmediatePropagation();
  }function ha() {
    return !t.event.button;
  }function pa() {
    var t,
        n,
        e = this;return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]];
  }function da() {
    return this.__zoom || M_;
  }function va() {
    return -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500;
  }function ga() {
    return "ontouchstart" in this;
  }function _a(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        u = t.invertY(n[1][1]) - e[1][1];return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u));
  }var ya = function ya(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  },
      ma = function ma(t) {
    return 1 === t.length && (t = function (t) {
      return function (n, e) {
        return ya(t(n), e);
      };
    }(t)), { left: function left(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) < 0 ? r = o + 1 : i = o;
        }return r;
      }, right: function right(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) > 0 ? i = o : r = o + 1;
        }return r;
      } };
  },
      xa = ma(ya),
      ba = xa.right,
      wa = xa.left,
      Ma = function Ma(t) {
    return null === t ? NaN : +t;
  },
      Ta = function Ta(t, n) {
    var e,
        r,
        i = t.length,
        o = 0,
        u = -1,
        a = 0,
        c = 0;if (null == n) for (; ++u < i;) {
      isNaN(e = Ma(t[u])) || (c += (r = e - a) * (e - (a += r / ++o)));
    } else for (; ++u < i;) {
      isNaN(e = Ma(n(t[u], u, t))) || (c += (r = e - a) * (e - (a += r / ++o)));
    }if (o > 1) return c / (o - 1);
  },
      Na = function Na(t, n) {
    var e = Ta(t, n);return e ? Math.sqrt(e) : e;
  },
      ka = function ka(t, n) {
    var e,
        r,
        i,
        o = t.length,
        u = -1;if (null == n) {
      for (; ++u < o;) {
        if (null != (e = t[u]) && e >= e) for (r = i = e; ++u < o;) {
          null != (e = t[u]) && (r > e && (r = e), i < e && (i = e));
        }
      }
    } else for (; ++u < o;) {
      if (null != (e = n(t[u], u, t)) && e >= e) for (r = i = e; ++u < o;) {
        null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
      }
    }return [r, i];
  },
      Sa = Array.prototype,
      Ea = Sa.slice,
      Aa = Sa.map,
      Ca = function Ca(t) {
    return function () {
      return t;
    };
  },
      za = function za(t) {
    return t;
  },
      Pa = function Pa(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) {
      o[r] = t + r * e;
    }return o;
  },
      Ra = Math.sqrt(50),
      La = Math.sqrt(10),
      qa = Math.sqrt(2),
      Da = function Da(t, n, r) {
    var i,
        o,
        u,
        a,
        c = -1;if (n = +n, t = +t, r = +r, t === n && r > 0) return [t];if ((i = n < t) && (o = t, t = n, n = o), 0 === (a = e(t, n, r)) || !isFinite(a)) return [];if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), u = new Array(o = Math.ceil(n - t + 1)); ++c < o;) {
      u[c] = (t + c) * a;
    } else for (t = Math.floor(t * a), n = Math.ceil(n * a), u = new Array(o = Math.ceil(t - n + 1)); ++c < o;) {
      u[c] = (t - c) / a;
    }return i && u.reverse(), u;
  },
      Ua = function Ua(t) {
    return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
  },
      Oa = function Oa(t, n, e) {
    if (null == e && (e = Ma), r = t.length) {
      if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);if (n >= 1) return +e(t[r - 1], r - 1, t);var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          u = +e(t[o], o, t);return u + (+e(t[o + 1], o + 1, t) - u) * (i - o);
    }
  },
      Fa = function Fa(t) {
    for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) {
      u += t[o].length;
    }for (e = new Array(u); --i >= 0;) {
      for (n = (r = t[i]).length; --n >= 0;) {
        e[--u] = r[n];
      }
    }return e;
  },
      Ia = function Ia(t, n) {
    var e,
        r,
        i = t.length,
        o = -1;if (null == n) {
      for (; ++o < i;) {
        if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = t[o]) && r > e && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) {
        null != (e = n(t[o], o, t)) && r > e && (r = e);
      }
    }return r;
  },
      Ya = function Ya(t) {
    if (!(o = t.length)) return [];for (var n = -1, e = Ia(t, i), r = new Array(e); ++n < e;) {
      for (var o, u = -1, a = r[n] = new Array(o); ++u < o;) {
        a[u] = t[u][n];
      }
    }return r;
  },
      Ba = Array.prototype.slice,
      Ha = function Ha(t) {
    return t;
  },
      ja = 1,
      Xa = 2,
      Va = 3,
      $a = 4,
      Wa = 1e-6,
      Za = { value: function value() {} };c.prototype = a.prototype = { constructor: c, on: function on(t, n) {
      var e,
          r = this._,
          i = function (t, n) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var e = "",
              r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
        });
      }(t + "", r),
          o = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < u;) {
            if (e = (t = i[o]).type) r[e] = s(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = s(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < u;) {
          if ((e = (t = i[o]).type) && (e = function (t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r) {
              if ((e = t[r]).name === n) return e.value;
            }
          }(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new c(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var Ga = "http://www.w3.org/1999/xhtml",
      Qa = { svg: "http://www.w3.org/2000/svg", xhtml: Ga, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      Ja = function Ja(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Qa.hasOwnProperty(n) ? { space: Qa[n], local: t } : t;
  },
      Ka = function Ka(t) {
    var n = Ja(t);return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (t) {
      return function () {
        var n = this.ownerDocument,
            e = this.namespaceURI;return e === Ga && n.documentElement.namespaceURI === Ga ? n.createElement(t) : n.createElementNS(e, t);
      };
    })(n);
  },
      tc = 0;l.prototype = f.prototype = { constructor: l, get: function get(t) {
      for (var n = this._; !(n in t);) {
        if (!(t = t.parentNode)) return;
      }return t[n];
    }, set: function set(t, n) {
      return t[this._] = n;
    }, remove: function remove(t) {
      return this._ in t && delete t[this._];
    }, toString: function toString() {
      return this._;
    } };var nc = function nc(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var ec = document.documentElement;if (!ec.matches) {
      var rc = ec.webkitMatchesSelector || ec.msMatchesSelector || ec.mozMatchesSelector || ec.oMatchesSelector;nc = function nc(t) {
        return function () {
          return rc.call(this, t);
        };
      };
    }
  }var ic = nc,
      oc = {};if (t.event = null, "undefined" != typeof document) {
    "onmouseenter" in document.documentElement || (oc = { mouseenter: "mouseover", mouseleave: "mouseout" });
  }var uc = function uc() {
    for (var n, e = t.event; n = e.sourceEvent;) {
      e = n;
    }return e;
  },
      ac = function ac(t, n) {
    var e = t.ownerSVGElement || t;if (e.createSVGPoint) {
      var r = e.createSVGPoint();return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }var i = t.getBoundingClientRect();return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
  },
      cc = function cc(t) {
    var n = uc();return n.changedTouches && (n = n.changedTouches[0]), ac(t, n);
  },
      sc = function sc(t) {
    return null == t ? function () {} : function () {
      return this.querySelector(t);
    };
  },
      fc = function fc(t) {
    return null == t ? function () {
      return [];
    } : function () {
      return this.querySelectorAll(t);
    };
  },
      lc = function lc(t) {
    return new Array(t.length);
  };v.prototype = { constructor: v, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var hc = "$",
      pc = function pc(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };x.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var dc = [null];S.prototype = E.prototype = { constructor: S, select: function select(t) {
      "function" != typeof t && (t = sc(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; f < c; ++f) {
          (o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
        }
      }return new S(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = fc(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var u, a = n[o], c = a.length, s = 0; s < c; ++s) {
          (u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
        }
      }return new S(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = ic(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s) {
          (o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
        }
      }return new S(r, this._parents);
    }, data: function data(t, n) {
      if (!t) return p = new Array(this.size()), s = -1, this.each(function (t) {
        p[++s] = t;
      }), p;var e = n ? function (t, n, e, r, i, o, u) {
        var a,
            c,
            s,
            f = {},
            l = n.length,
            h = o.length,
            p = new Array(l);for (a = 0; a < l; ++a) {
          (c = n[a]) && (p[a] = s = hc + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
        }for (a = 0; a < h; ++a) {
          (c = f[s = hc + u.call(t, o[a], a, o)]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new v(t, o[a]);
        }for (a = 0; a < l; ++a) {
          (c = n[a]) && f[p[a]] === c && (i[a] = c);
        }
      } : function (t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, s = o.length; a < s; ++a) {
          (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new v(t, o[a]);
        }for (; a < c; ++a) {
          (u = n[a]) && (i[a] = u);
        }
      },
          r = this._parents,
          i = this._groups;"function" != typeof t && (t = function (t) {
        return function () {
          return t;
        };
      }(t));for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
        var f = r[s],
            l = i[s],
            h = l.length,
            p = t.call(f, f && f.__data__, s, r),
            d = p.length,
            g = a[s] = new Array(d),
            _ = u[s] = new Array(d);e(f, l, g, _, c[s] = new Array(h), p, n);for (var y, m, x = 0, b = 0; x < d; ++x) {
          if (y = g[x]) {
            for (x >= b && (b = x + 1); !(m = _[b]) && ++b < d;) {}y._next = m || null;
          }
        }
      }return u = new S(u, r), u._enter = a, u._exit = c, u;
    }, enter: function enter() {
      return new S(this._enter || this._groups.map(lc), this._parents);
    }, exit: function exit() {
      return new S(this._exit || this._groups.map(lc), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
        for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p) {
          (c = s[p] || f[p]) && (h[p] = c);
        }
      }for (; a < r; ++a) {
        u[a] = n[a];
      }return new S(u, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
          (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        }
      }return this;
    }, sort: function sort(t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }t || (t = g);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f) {
          (u = a[f]) && (s[f] = u);
        }s.sort(n);
      }return new S(i, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];if (u) return u;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) {
          (i = o[u]) && t.call(i, i.__data__, u, o);
        }
      }return this;
    }, attr: function attr(t, n) {
      var e = Ja(t);if (arguments.length < 2) {
        var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }return this.each((null == n ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof n ? e.local ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
        };
      } : function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    }, style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof n ? function (t, n, e) {
        return function () {
          var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
        };
      } : function (t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      })(t, n, null == e ? "" : e)) : _(this.node(), t);
    }, property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof n ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
        };
      } : function (t, n) {
        return function () {
          this[t] = n;
        };
      })(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = y(t + "");if (arguments.length < 2) {
        for (var r = m(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? b : w)(this, t);
        };
      } : n ? function (t) {
        return function () {
          b(this, t);
        };
      } : function (t) {
        return function () {
          w(this, t);
        };
      })(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? function () {
        this.textContent = "";
      } : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? function () {
        this.innerHTML = "";
      } : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(M);
    }, lower: function lower() {
      return this.each(T);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : Ka(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : Ka(t),
          r = null == n ? function () {
        return null;
      } : "function" == typeof n ? n : sc(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(N);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var r,
          i,
          o = (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "",
            e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
      }),
          u = o.length;{
        if (!(arguments.length < 2)) {
          for (a = n ? p : function (t) {
            return function () {
              var n = this.__on;if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
                  e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                }++i ? n.length = i : delete this.__on;
              }
            };
          }, null == e && (e = !1), r = 0; r < u; ++r) {
            this.each(a(o[r], n, e));
          }return this;
        }var a = this.node().__on;if (a) for (var c, s = 0, f = a.length; s < f; ++s) {
          for (r = 0, c = a[s]; r < u; ++r) {
            if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
          }
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return k(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return k(this, t, n);
        };
      })(t, n));
    } };var vc = function vc(t) {
    return "string" == typeof t ? new S([[document.querySelector(t)]], [document.documentElement]) : new S([[t]], dc);
  },
      gc = function gc(t, n, e) {
    arguments.length < 3 && (e = n, n = uc().changedTouches);for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
      if ((r = n[i]).identifier === e) return ac(t, r);
    }return null;
  },
      _c = function _c() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  },
      yc = function yc(t) {
    var n = t.document.documentElement,
        e = vc(t).on("dragstart.drag", _c, !0);"onselectstart" in n ? e.on("selectstart.drag", _c, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  },
      mc = function mc(t) {
    return function () {
      return t;
    };
  };z.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
  };var xc = function xc(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      bc = "\\s*([+-]?\\d+)\\s*",
      wc = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Mc = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Tc = /^#([0-9a-f]{3})$/,
      Nc = /^#([0-9a-f]{6})$/,
      kc = new RegExp("^rgb\\(" + [bc, bc, bc] + "\\)$"),
      Sc = new RegExp("^rgb\\(" + [Mc, Mc, Mc] + "\\)$"),
      Ec = new RegExp("^rgba\\(" + [bc, bc, bc, wc] + "\\)$"),
      Ac = new RegExp("^rgba\\(" + [Mc, Mc, Mc, wc] + "\\)$"),
      Cc = new RegExp("^hsl\\(" + [wc, Mc, Mc] + "\\)$"),
      zc = new RegExp("^hsla\\(" + [wc, Mc, Mc, wc] + "\\)$"),
      Pc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };xc(U, O, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), xc(H, B, D(U, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new H(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new H(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), xc(V, X, D(U, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new V(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new V(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new H($(t >= 240 ? t - 240 : t + 120, i, r), $(t, i, r), $(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Rc = Math.PI / 180,
      Lc = 180 / Math.PI,
      qc = .95047,
      Dc = 1,
      Uc = 1.08883,
      Oc = 4 / 29,
      Fc = 6 / 29,
      Ic = 3 * Fc * Fc,
      Yc = Fc * Fc * Fc;xc(G, Z, D(U, { brighter: function brighter(t) {
      return new G(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new G(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Dc * J(t), n = qc * J(n), e = Uc * J(e), new H(K(3.2404542 * n - 1.5371385 * t - .4985314 * e), K(-.969266 * n + 1.8760108 * t + .041556 * e), K(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), xc(et, nt, D(U, { brighter: function brighter(t) {
      return new et(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new et(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return W(this).rgb();
    } }));var Bc = -.14861,
      Hc = 1.78277,
      jc = -.29227,
      Xc = -.90649,
      Vc = 1.97294,
      $c = Vc * Xc,
      Wc = Vc * Hc,
      Zc = Hc * jc - Xc * Bc;xc(it, rt, D(U, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new it(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new it(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Rc,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new H(255 * (n + e * (Bc * r + Hc * i)), 255 * (n + e * (jc * r + Xc * i)), 255 * (n + e * (Vc * r)), this.opacity);
    } }));var Gc,
      Qc,
      Jc,
      Kc,
      ts,
      ns,
      es = function es(t) {
    var n = t.length - 1;return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          u = r > 0 ? t[r - 1] : 2 * i - o,
          a = r < n - 1 ? t[r + 2] : 2 * o - i;return ot((e - r / n) * n, u, i, o, a);
    };
  },
      rs = function rs(t) {
    var n = t.length;return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          u = t[(r + 1) % n],
          a = t[(r + 2) % n];return ot((e - r / n) * n, i, o, u, a);
    };
  },
      is = function is(t) {
    return function () {
      return t;
    };
  },
      os = function t(n) {
    function e(t, n) {
      var e = r((t = B(t)).r, (n = B(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = st(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
      };
    }var r = ct(n);return e.gamma = t, e;
  }(1),
      us = ft(es),
      as = ft(rs),
      cs = function cs(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(i),
        u = new Array(r);for (e = 0; e < i; ++e) {
      o[e] = vs(t[e], n[e]);
    }for (; e < r; ++e) {
      u[e] = n[e];
    }return function (t) {
      for (e = 0; e < i; ++e) {
        u[e] = o[e](t);
      }return u;
    };
  },
      ss = function ss(t, n) {
    var e = new Date();return t = +t, n -= t, function (r) {
      return e.setTime(t + n * r), e;
    };
  },
      fs = function fs(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      ls = function ls(t, n) {
    var e,
        r = {},
        i = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {});for (e in n) {
      e in t ? r[e] = vs(t[e], n[e]) : i[e] = n[e];
    }return function (t) {
      for (e in r) {
        i[e] = r[e](t);
      }return i;
    };
  },
      hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      ps = new RegExp(hs.source, "g"),
      ds = function ds(t, n) {
    var e,
        r,
        i,
        o = hs.lastIndex = ps.lastIndex = 0,
        u = -1,
        a = [],
        c = [];for (t += "", n += ""; (e = hs.exec(t)) && (r = ps.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({ i: u, x: fs(e, r) })), o = ps.lastIndex;
    }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function (t) {
      return function (n) {
        return t(n) + "";
      };
    }(c[0].x) : function (t) {
      return function () {
        return t;
      };
    }(n) : (n = c.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = c[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      vs = function vs(t, n) {
    var e,
        r = typeof n === "undefined" ? "undefined" : _typeof(n);return null == n || "boolean" === r ? is(n) : ("number" === r ? fs : "string" === r ? (e = O(n)) ? (n = e, os) : ds : n instanceof O ? os : n instanceof Date ? ss : Array.isArray(n) ? cs : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? ls : fs)(t, n);
  },
      gs = function gs(t, n) {
    return t = +t, n -= t, function (e) {
      return Math.round(t + n * e);
    };
  },
      _s = 180 / Math.PI,
      ys = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      ms = function ms(t, n, e, r, i, o) {
    var u, a, c;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * _s, skewX: Math.atan(c) * _s, scaleX: u, scaleY: a };
  },
      xs = lt(function (t) {
    return "none" === t ? ys : (Gc || (Gc = document.createElement("DIV"), Qc = document.documentElement, Jc = document.defaultView), Gc.style.transform = t, t = Jc.getComputedStyle(Qc.appendChild(Gc), null).getPropertyValue("transform"), Qc.removeChild(Gc), t = t.slice(7, -1).split(","), ms(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"),
      bs = lt(function (t) {
    return null == t ? ys : (Kc || (Kc = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kc.setAttribute("transform", t), (t = Kc.transform.baseVal.consolidate()) ? (t = t.matrix, ms(t.a, t.b, t.c, t.d, t.e, t.f)) : ys);
  }, ", ", ")", ")"),
      ws = Math.SQRT2,
      Ms = function Ms(t, n) {
    var e,
        r,
        i = t[0],
        o = t[1],
        u = t[2],
        a = n[0],
        c = n[1],
        s = n[2],
        f = a - i,
        l = c - o,
        h = f * f + l * l;if (h < 1e-12) r = Math.log(s / u) / ws, e = function e(t) {
      return [i + t * f, o + t * l, u * Math.exp(ws * t * r)];
    };else {
      var p = Math.sqrt(h),
          d = (s * s - u * u + 4 * h) / (2 * u * 2 * p),
          v = (s * s - u * u - 4 * h) / (2 * s * 2 * p),
          g = Math.log(Math.sqrt(d * d + 1) - d),
          _ = Math.log(Math.sqrt(v * v + 1) - v);r = (_ - g) / ws, e = function e(t) {
        var n = t * r,
            e = ht(g),
            a = u / (2 * p) * (e * function (t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1);
        }(ws * n + g) - function (t) {
          return ((t = Math.exp(t)) - 1 / t) / 2;
        }(g));return [i + a * f, o + a * l, u * e / ht(ws * n + g)];
      };
    }return e.duration = 1e3 * r, e;
  },
      Ts = pt(at),
      Ns = pt(st),
      ks = dt(at),
      Ss = dt(st),
      Es = vt(at),
      As = vt(st),
      Cs = 0,
      zs = 0,
      Ps = 0,
      Rs = 1e3,
      Ls = 0,
      qs = 0,
      Ds = 0,
      Us = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Os = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };yt.prototype = mt.prototype = { constructor: yt, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? gt() : +e) + (null == n ? 0 : +n), this._next || ns === this || (ns ? ns._next = this : ts = this, ns = this), this._call = t, this._time = e, Mt();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Mt());
    } };var Fs = function Fs(t, n, e) {
    var r = new yt();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      Is = a("start", "end", "interrupt"),
      Ys = [],
      Bs = 0,
      Hs = 1,
      js = 2,
      Xs = 3,
      Vs = 4,
      $s = 5,
      Ws = 6,
      Zs = function Zs(t, n, e, r, i, o) {
    var u = t.__transition;if (u) {
      if (e in u) return;
    } else t.__transition = {};(function (t, n, e) {
      function r(c) {
        var s, f, l, h;if (e.state !== Hs) return o();for (s in a) {
          if ((h = a[s]).name === e.name) {
            if (h.state === Xs) return Fs(r);h.state === Vs ? (h.state = Ws, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete a[s]) : +s < n && (h.state = Ws, h.timer.stop(), delete a[s]);
          }
        }if (Fs(function () {
          e.state === Xs && (e.state = Vs, e.timer.restart(i, e.delay, e.time), i(c));
        }), e.state = js, e.on.call("start", t, t.__data__, e.index, e.group), e.state === js) {
          for (e.state = Xs, u = new Array(l = e.tween.length), s = 0, f = -1; s < l; ++s) {
            (h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (u[++f] = h);
          }u.length = f + 1;
        }
      }function i(n) {
        for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = $s, 1), i = -1, a = u.length; ++i < a;) {
          u[i].call(null, r);
        }e.state === $s && (e.on.call("end", t, t.__data__, e.index, e.group), o());
      }function o() {
        e.state = Ws, e.timer.stop(), delete a[n];for (var r in a) {
          return;
        }delete t.__transition;
      }var u,
          a = t.__transition;a[n] = e, e.timer = mt(function (t) {
        e.state = Hs, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay);
      }, 0, e.time);
    })(t, e, { name: n, index: r, group: i, on: Is, tween: Ys, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Bs });
  },
      Gs = function Gs(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        u = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > js && e.state < $s, e.state = Ws, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      }u && delete t.__transition;
    }
  },
      Qs = function Qs(t, n) {
    var e;return ("number" == typeof n ? fs : n instanceof O ? os : (e = O(n)) ? (n = e, os) : ds)(t, n);
  },
      Js = E.prototype.constructor,
      Ks = 0,
      tf = E.prototype;Et.prototype = At.prototype = { constructor: Et, select: function select(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = sc(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
        for (var a, c, s = r[u], f = s.length, l = o[u] = new Array(f), h = 0; h < f; ++h) {
          (a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, Zs(l[h], n, e, h, l, kt(a, e)));
        }
      }return new Et(o, this._parents, n, e);
    }, selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = fc(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
        for (var c, s = r[a], f = s.length, l = 0; l < f; ++l) {
          if (c = s[l]) {
            for (var h, p = t.call(c, c.__data__, l, s), d = kt(c, e), v = 0, g = p.length; v < g; ++v) {
              (h = p[v]) && Zs(h, n, e, v, p, d);
            }o.push(p), u.push(c);
          }
        }
      }return new Et(o, u, n, e);
    }, filter: function filter(t) {
      "function" != typeof t && (t = ic(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s) {
          (o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
        }
      }return new Et(r, this._parents, this._name, this._id);
    }, merge: function merge(t) {
      if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
        for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p) {
          (c = s[p] || f[p]) && (h[p] = c);
        }
      }for (; a < r; ++a) {
        u[a] = n[a];
      }return new Et(u, this._parents, this._name, this._id);
    }, selection: function selection() {
      return new Js(this._groups, this._parents);
    }, transition: function transition() {
      for (var t = this._name, n = this._id, e = Ct(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
        for (var u, a = r[o], c = a.length, s = 0; s < c; ++s) {
          if (u = a[s]) {
            var f = kt(u, n);Zs(u, t, e, s, a, { time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease });
          }
        }
      }return new Et(r, this._parents, t, e);
    }, call: tf.call, nodes: tf.nodes, node: tf.node, size: tf.size, empty: tf.empty, each: tf.each, on: function on(t, n) {
      var e = this._id;return arguments.length < 2 ? kt(this.node(), e).on.on(t) : this.each(function (t, n, e) {
        var r,
            i,
            o = function (t) {
          return (t + "").trim().split(/^|\s+/).every(function (t) {
            var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
          });
        }(n) ? Tt : Nt;return function () {
          var u = o(this, t),
              a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
        };
      }(e, t, n));
    }, attr: function attr(t, n) {
      var e = Ja(t),
          r = "transform" === e ? bs : Qs;return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
        var r, i, o;return function () {
          var u,
              a = e(this);if (null != a) return (u = this.getAttributeNS(t.space, t.local)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);this.removeAttributeNS(t.space, t.local);
        };
      } : function (t, n, e) {
        var r, i, o;return function () {
          var u,
              a = e(this);if (null != a) return (u = this.getAttribute(t)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);this.removeAttribute(t);
        };
      })(e, r, St(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      })(e) : (e.local ? function (t, n, e) {
        var r, i;return function () {
          var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      } : function (t, n, e) {
        var r, i;return function () {
          var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      })(e, r, n + ""));
    }, attrTween: function attrTween(t, n) {
      var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = Ja(t);return this.tween(e, (r.local ? function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttributeNS(t.space, t.local, r(n));
          };
        }return e._value = n, e;
      } : function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttribute(t, r(n));
          };
        }return e._value = n, e;
      })(r, n));
    }, style: function style(t, n, e) {
      var r = "transform" == (t += "") ? xs : Qs;return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;return function () {
          var o = _(this, t),
              u = (this.style.removeProperty(t), _(this, t));return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
        };
      }(t, r)).on("end.style." + t, function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
        var r, i, o;return function () {
          var u = _(this, t),
              a = e(this);return null == a && (this.style.removeProperty(t), a = _(this, t)), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
        };
      }(t, r, St(this, "style." + t, n)) : function (t, n, e) {
        var r, i;return function () {
          var o = _(this, t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }(t, r, n + ""), e);
    }, styleTween: function styleTween(t, n, e) {
      var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, function (t, n, e) {
        function r() {
          var r = this,
              i = n.apply(r, arguments);return i && function (n) {
            r.style.setProperty(t, i(n), e);
          };
        }return r._value = n, r;
      }(t, n, null == e ? "" : e));
    }, text: function text(t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);this.textContent = null == n ? "" : n;
        };
      }(St(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t;
        };
      }(null == t ? "" : t + ""));
    }, remove: function remove() {
      return this.on("end.remove", function (t) {
        return function () {
          var n = this.parentNode;for (var e in this.__transition) {
            if (+e !== t) return;
          }n && n.removeChild(this);
        };
      }(this._id));
    }, tween: function tween(t, n) {
      var e = this._id;if (t += "", arguments.length < 2) {
        for (var r, i = kt(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
          if ((r = i[o]).name === t) return r.value;
        }return null;
      }return this.each((null == n ? function (t, n) {
        var e, r;return function () {
          var i = Nt(this, t),
              o = i.tween;if (o !== e) for (var u = 0, a = (r = e = o).length; u < a; ++u) {
            if (r[u].name === n) {
              (r = r.slice()).splice(u, 1);break;
            }
          }i.tween = r;
        };
      } : function (t, n, e) {
        var r, i;if ("function" != typeof e) throw new Error();return function () {
          var o = Nt(this, t),
              u = o.tween;if (u !== r) {
            i = (r = u).slice();for (var a = { name: n, value: e }, c = 0, s = i.length; c < s; ++c) {
              if (i[c].name === n) {
                i[c] = a;break;
              }
            }c === s && i.push(a);
          }o.tween = i;
        };
      })(e, t, n));
    }, delay: function delay(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Tt(this, t).delay = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Tt(this, t).delay = n;
        };
      })(n, t)) : kt(this.node(), n).delay;
    }, duration: function duration(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Nt(this, t).duration = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Nt(this, t).duration = n;
        };
      })(n, t)) : kt(this.node(), n).duration;
    }, ease: function ease(t) {
      var n = this._id;return arguments.length ? this.each(function (t, n) {
        if ("function" != typeof n) throw new Error();return function () {
          Nt(this, t).ease = n;
        };
      }(n, t)) : kt(this.node(), n).ease;
    } };var nf = function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(3),
      ef = function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(3),
      rf = function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(3),
      of = Math.PI,
      uf = of / 2,
      af = 4 / 11,
      cf = 6 / 11,
      sf = 8 / 11,
      ff = .75,
      lf = 9 / 11,
      hf = 10 / 11,
      pf = .9375,
      df = 21 / 22,
      vf = 63 / 64,
      gf = 1 / af / af,
      _f = function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      yf = function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      mf = function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      xf = 2 * Math.PI,
      bf = function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= xf);return r.amplitude = function (n) {
      return t(n, e * xf);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      wf = function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= xf);return r.amplitude = function (n) {
      return t(n, e * xf);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      Mf = function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= xf);return r.amplitude = function (n) {
      return t(n, e * xf);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      Tf = { time: null, delay: 0, duration: 250, ease: Pt };E.prototype.interrupt = function (t) {
    return this.each(function () {
      Gs(this, t);
    });
  }, E.prototype.transition = function (t) {
    var n, e;t instanceof Et ? (n = t._id, t = t._name) : (n = Ct(), (e = Tf).time = gt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var u, a = r[o], c = a.length, s = 0; s < c; ++s) {
        (u = a[s]) && Zs(u, t, n, s, a, e || Ut(u, n));
      }
    }return new Et(r, this._parents, t, n);
  };var Nf = [null],
      kf = function kf(t) {
    return function () {
      return t;
    };
  },
      Sf = function Sf(t, n, e) {
    this.target = t, this.type = n, this.selection = e;
  },
      Ef = function Ef() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  },
      Af = { name: "drag" },
      Cf = { name: "space" },
      zf = { name: "handle" },
      Pf = { name: "center" },
      Rf = { name: "x", handles: ["e", "w"].map(Ft), input: function input(t, n) {
      return t && [[t[0], n[0][1]], [t[1], n[1][1]]];
    }, output: function output(t) {
      return t && [t[0][0], t[1][0]];
    } },
      Lf = { name: "y", handles: ["n", "s"].map(Ft), input: function input(t, n) {
      return t && [[n[0][0], t[0]], [n[1][0], t[1]]];
    }, output: function output(t) {
      return t && [t[0][1], t[1][1]];
    } },
      qf = { name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Ft), input: function input(t) {
      return t;
    }, output: function output(t) {
      return t;
    } },
      Df = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
      Uf = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
      Of = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
      Ff = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
      If = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 },
      Yf = Math.cos,
      Bf = Math.sin,
      Hf = Math.PI,
      jf = Hf / 2,
      Xf = 2 * Hf,
      Vf = Math.max,
      $f = Array.prototype.slice,
      Wf = function Wf(t) {
    return function () {
      return t;
    };
  },
      Zf = Math.PI,
      Gf = 2 * Zf,
      Qf = Gf - 1e-6;Xt.prototype = Vt.prototype = { constructor: Xt, moveTo: function moveTo(t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    }, closePath: function closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }, lineTo: function lineTo(t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    }, quadraticCurveTo: function quadraticCurveTo(t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
    }, arcTo: function arcTo(t, n, e, r, i) {
      t = +t, n = +n, e = +e, r = +r, i = +i;var o = this._x1,
          u = this._y1,
          a = e - t,
          c = r - n,
          s = o - t,
          f = u - n,
          l = s * s + f * f;if (i < 0) throw new Error("negative radius: " + i);if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (l > 1e-6) {
        if (Math.abs(f * a - c * s) > 1e-6 && i) {
          var h = e - o,
              p = r - u,
              d = a * a + c * c,
              v = h * h + p * p,
              g = Math.sqrt(d),
              _ = Math.sqrt(l),
              y = i * Math.tan((Zf - Math.acos((d + l - v) / (2 * g * _))) / 2),
              m = y / _,
              x = y / g;Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * s) + "," + (n + m * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * h > s * p) + "," + (this._x1 = t + x * a) + "," + (this._y1 = n + x * c);
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      } else ;
    }, arc: function arc(t, n, e, r, i, o) {
      t = +t, n = +n;var u = (e = +e) * Math.cos(r),
          a = e * Math.sin(r),
          c = t + u,
          s = n + a,
          f = 1 ^ o,
          l = o ? r - i : i - r;if (e < 0) throw new Error("negative radius: " + e);null === this._x1 ? this._ += "M" + c + "," + s : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - s) > 1e-6) && (this._ += "L" + c + "," + s), e && (l < 0 && (l = l % Gf + Gf), l > Qf ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = s) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Zf) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
    }, rect: function rect(t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
    }, toString: function toString() {
      return this._;
    } };Jt.prototype = Kt.prototype = { constructor: Jt, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, n) {
      return this["$" + t] = n, this;
    }, remove: function remove(t) {
      var n = "$" + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        "$" === n[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        "$" === n[0] && t(this[n], n.slice(1), this);
      }
    } };var Jf = Kt.prototype;on.prototype = un.prototype = { constructor: on, has: Jf.has, add: function add(t) {
      return t += "", this["$" + t] = t, this;
    }, remove: Jf.remove, clear: Jf.clear, values: Jf.keys, size: Jf.size, empty: Jf.empty, each: Jf.each };var Kf = {},
      tl = {},
      nl = 34,
      el = 10,
      rl = 13,
      il = function il(t) {
    function n(t, n) {
      function e() {
        if (s) return tl;if (f) return f = !1, Kf;var n,
            e,
            r = a;if (t.charCodeAt(r) === nl) {
          for (; a++ < u && t.charCodeAt(a) !== nl || t.charCodeAt(++a) === nl;) {}return (n = a) >= u ? s = !0 : (e = t.charCodeAt(a++)) === el ? f = !0 : e === rl && (f = !0, t.charCodeAt(a) === el && ++a), t.slice(r + 1, n - 1).replace(/""/g, '"');
        }for (; a < u;) {
          if ((e = t.charCodeAt(n = a++)) === el) f = !0;else if (e === rl) f = !0, t.charCodeAt(a) === el && ++a;else if (e !== o) continue;return t.slice(r, n);
        }return s = !0, t.slice(r, u);
      }var r,
          i = [],
          u = t.length,
          a = 0,
          c = 0,
          s = u <= 0,
          f = !1;for (t.charCodeAt(u - 1) === el && --u, t.charCodeAt(u - 1) === rl && --u; (r = e()) !== tl;) {
        for (var l = []; r !== Kf && r !== tl;) {
          l.push(r), r = e();
        }n && null == (l = n(l, c++)) || i.push(l);
      }return i;
    }function e(n) {
      return n.map(r).join(t);
    }function r(t) {
      return null == t ? "" : i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }var i = new RegExp('["' + t + "\n\r]"),
        o = t.charCodeAt(0);return { parse: function parse(t, e) {
        var r,
            i,
            o = n(t, function (t, n) {
          if (r) return r(t, n - 1);i = t, r = e ? function (t, n) {
            var e = an(t);return function (r, i) {
              return n(e(r), i, t);
            };
          }(t, e) : an(t);
        });return o.columns = i || [], o;
      }, parseRows: n, format: function format(n, e) {
        return null == e && (e = function (t) {
          var n = Object.create(null),
              e = [];return t.forEach(function (t) {
            for (var r in t) {
              r in n || e.push(n[r] = r);
            }
          }), e;
        }(n)), [e.map(r).join(t)].concat(n.map(function (n) {
          return e.map(function (t) {
            return r(n[t]);
          }).join(t);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(e).join("\n");
      } };
  },
      ol = il(","),
      ul = ol.parse,
      al = ol.parseRows,
      cl = ol.format,
      sl = ol.formatRows,
      fl = il("\t"),
      ll = fl.parse,
      hl = fl.parseRows,
      pl = fl.format,
      dl = fl.formatRows,
      vl = function vl(t) {
    return function () {
      return t;
    };
  },
      gl = function gl() {
    return 1e-6 * (Math.random() - .5);
  },
      _l = function _l(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  },
      yl = sn.prototype = fn.prototype;yl.copy = function () {
    var t,
        n,
        e = new fn(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;if (!r) return e;if (!r.length) return e._root = ln(r), e;for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = ln(n));
      }
    }return e;
  }, yl.add = function (t) {
    var n = +this._x.call(null, t),
        e = +this._y.call(null, t);return cn(this.cover(n, e), n, e, t);
  }, yl.addAll = function (t) {
    var n,
        e,
        r,
        i,
        o = t.length,
        u = new Array(o),
        a = new Array(o),
        c = 1 / 0,
        s = 1 / 0,
        f = -1 / 0,
        l = -1 / 0;for (e = 0; e < o; ++e) {
      isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > f && (f = r), i < s && (s = i), i > l && (l = i));
    }for (f < c && (c = this._x0, f = this._x1), l < s && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; e < o; ++e) {
      cn(this, u[e], a[e], t[e]);
    }return this;
  }, yl.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      if (!(e > t || t > i || r > n || n > o)) return this;var u,
          a,
          c = i - e,
          s = this._root;switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {case 0:
          do {
            u = new Array(4), u[a] = s, s = u;
          } while ((c *= 2, i = e + c, o = r + c, t > i || n > o));break;case 1:
          do {
            u = new Array(4), u[a] = s, s = u;
          } while ((c *= 2, e = i - c, o = r + c, e > t || n > o));break;case 2:
          do {
            u = new Array(4), u[a] = s, s = u;
          } while ((c *= 2, i = e + c, r = o - c, t > i || r > n));break;case 3:
          do {
            u = new Array(4), u[a] = s, s = u;
          } while ((c *= 2, e = i - c, r = o - c, e > t || r > n));}this._root && this._root.length && (this._root = s);
    }return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, yl.data = function () {
    var t = [];return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data);
      } while (n = n.next);
    }), t;
  }, yl.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, yl.find = function (t, n, e) {
    var r,
        i,
        o,
        u,
        a,
        c,
        s,
        f = this._x0,
        l = this._y0,
        h = this._x1,
        p = this._y1,
        d = [],
        v = this._root;for (v && d.push(new _l(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();) {
      if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l)) if (v.length) {
        var g = (i + u) / 2,
            _ = (o + a) / 2;d.push(new _l(v[3], g, _, u, a), new _l(v[2], i, _, g, a), new _l(v[1], g, o, u, _), new _l(v[0], i, o, g, _)), (s = (n >= _) << 1 | t >= g) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c);
      } else {
        var y = t - +this._x.call(null, v.data),
            m = n - +this._y.call(null, v.data),
            x = y * y + m * m;if (x < e) {
          var b = Math.sqrt(e = x);f = t - b, l = n - b, h = t + b, p = n + b, r = v.data;
        }
      }
    }return r;
  }, yl.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;var n,
        e,
        r,
        i,
        o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        p = this._root,
        d = this._x0,
        v = this._y0,
        g = this._x1,
        _ = this._y1;if (!p) return this;if (p.length) for (;;) {
      if ((s = o >= (a = (d + g) / 2)) ? d = a : g = a, (f = u >= (c = (v + _) / 2)) ? v = c : _ = c, n = p, !(p = p[l = f << 1 | s])) return this;if (!p.length) break;(n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l);
    }for (; p.data !== t;) {
      if (r = p, !(p = p.next)) return this;
    }return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this);
  }, yl.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) {
      this.remove(t[n]);
    }return this;
  }, yl.root = function () {
    return this._root;
  }, yl.size = function () {
    var t = 0;return this.visit(function (n) {
      if (!n.length) do {
        ++t;
      } while (n = n.next);
    }), t;
  }, yl.visit = function (t) {
    var n,
        e,
        r,
        i,
        o,
        u,
        a = [],
        c = this._root;for (c && a.push(new _l(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();) {
      if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
        var s = (r + o) / 2,
            f = (i + u) / 2;(e = c[3]) && a.push(new _l(e, s, f, o, u)), (e = c[2]) && a.push(new _l(e, r, f, s, u)), (e = c[1]) && a.push(new _l(e, s, i, o, f)), (e = c[0]) && a.push(new _l(e, r, i, s, f));
      }
    }return this;
  }, yl.visitAfter = function (t) {
    var n,
        e = [],
        r = [];for (this._root && e.push(new _l(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;if (i.length) {
        var o,
            u = n.x0,
            a = n.y0,
            c = n.x1,
            s = n.y1,
            f = (u + c) / 2,
            l = (a + s) / 2;(o = i[0]) && e.push(new _l(o, u, a, f, l)), (o = i[1]) && e.push(new _l(o, f, a, c, l)), (o = i[2]) && e.push(new _l(o, u, l, f, s)), (o = i[3]) && e.push(new _l(o, f, l, c, s));
      }r.push(n);
    }for (; n = r.pop();) {
      t(n.node, n.x0, n.y0, n.x1, n.y1);
    }return this;
  }, yl.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, yl.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };var ml,
      xl = 10,
      bl = Math.PI * (3 - Math.sqrt(5)),
      wl = function wl(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
        r = t.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  },
      Ml = function Ml(t) {
    return (t = wl(Math.abs(t))) ? t[1] : NaN;
  },
      Tl = function Tl(t, n) {
    var e = wl(t, n);if (!e) return t + "";var r = e[0],
        i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  },
      Nl = { "": function _(t, n) {
      t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, o = -1; i < r; ++i) {
        switch (t[i]) {case ".":
            o = e = i;break;case "0":
            0 === o && (o = i), e = i;break;case "e":
            break t;default:
            o > 0 && (o = 0);}
      }return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
    }, "%": function _(t, n) {
      return (100 * t).toFixed(n);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, n) {
      return t.toExponential(n);
    }, f: function f(t, n) {
      return t.toFixed(n);
    }, g: function g(t, n) {
      return t.toPrecision(n);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, n) {
      return Tl(100 * t, n);
    }, r: Tl, s: function s(t, n) {
      var e = wl(t, n);if (!e) return t + "";var r = e[0],
          i = e[1],
          o = i - (ml = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          u = r.length;return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + wl(t, Math.max(0, n + o - 1))[0];
    }, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      kl = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;yn.prototype = mn.prototype, mn.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var Sl,
      El = function El(t) {
    return t;
  },
      Al = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
      Cl = function Cl(t) {
    function n(t) {
      function n(t) {
        var n,
            r,
            u,
            f = g,
            x = _;if ("c" === v) x = y(t) + x, t = "";else {
          var b = (t = +t) < 0;if (t = y(Math.abs(t), d), b && 0 == +t && (b = !1), f = (b ? "(" === s ? s : "-" : "-" === s || "(" === s ? "" : s) + f, x = x + ("s" === v ? Al[8 + ml / 3] : "") + (b && "(" === s ? ")" : ""), m) for (n = -1, r = t.length; ++n < r;) {
            if (48 > (u = t.charCodeAt(n)) || u > 57) {
              x = (46 === u ? i + t.slice(n + 1) : t.slice(n)) + x, t = t.slice(0, n);break;
            }
          }
        }p && !l && (t = e(t, 1 / 0));var w = f.length + t.length + x.length,
            M = w < h ? new Array(h - w + 1).join(a) : "";switch (p && l && (t = e(M + t, M.length ? h - x.length : 1 / 0), M = ""), c) {case "<":
            t = f + t + x + M;break;case "=":
            t = f + M + t + x;break;case "^":
            t = M.slice(0, w = M.length >> 1) + f + t + x + M.slice(w);break;default:
            t = M + f + t + x;}return o(t);
      }var a = (t = yn(t)).fill,
          c = t.align,
          s = t.sign,
          f = t.symbol,
          l = t.zero,
          h = t.width,
          p = t.comma,
          d = t.precision,
          v = t.type,
          g = "$" === f ? r[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
          _ = "$" === f ? r[1] : /[%p]/.test(v) ? u : "",
          y = Nl[v],
          m = !v || /[defgprs%]/.test(v);return d = null == d ? v ? 6 : 12 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function () {
        return t + "";
      }, n;
    }var e = t.grouping && t.thousands ? function (t, n) {
      return function (e, r) {
        for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) {
          a = t[u = (u + 1) % t.length];
        }return o.reverse().join(n);
      };
    }(t.grouping, t.thousands) : El,
        r = t.currency,
        i = t.decimal,
        o = t.numerals ? function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n];
        });
      };
    }(t.numerals) : El,
        u = t.percent || "%";return { format: n, formatPrefix: function formatPrefix(t, e) {
        var r = n((t = yn(t), t.type = "f", t)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(Ml(e) / 3))),
            o = Math.pow(10, -i),
            u = Al[8 + i / 3];return function (t) {
          return r(o * t) + u;
        };
      } };
  };xn({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var zl = function zl(t) {
    return Math.max(0, -Ml(Math.abs(t)));
  },
      Pl = function Pl(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ml(n) / 3))) - Ml(Math.abs(t)));
  },
      Rl = function Rl(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ml(n) - Ml(t)) + 1;
  },
      Ll = function Ll() {
    return new bn();
  };bn.prototype = { constructor: bn, reset: function reset() {
      this.s = this.t = 0;
    }, add: function add(t) {
      wn(hh, t, this.t), wn(this, hh.s, this.s), this.s ? this.t += hh.t : this.s = hh.t;
    }, valueOf: function valueOf() {
      return this.s;
    } };var ql,
      Dl,
      Ul,
      Ol,
      Fl,
      Il,
      Yl,
      Bl,
      Hl,
      jl,
      Xl,
      Vl,
      $l,
      Wl,
      Zl,
      Gl,
      Ql,
      Jl,
      Kl,
      th,
      nh,
      eh,
      rh,
      ih,
      oh,
      uh,
      ah,
      ch,
      sh,
      fh,
      lh,
      hh = new bn(),
      ph = 1e-6,
      dh = Math.PI,
      vh = dh / 2,
      gh = dh / 4,
      _h = 2 * dh,
      yh = 180 / dh,
      mh = dh / 180,
      xh = Math.abs,
      bh = Math.atan,
      wh = Math.atan2,
      Mh = Math.cos,
      Th = Math.ceil,
      Nh = Math.exp,
      kh = Math.log,
      Sh = Math.pow,
      Eh = Math.sin,
      Ah = Math.sign || function (t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  },
      Ch = Math.sqrt,
      zh = Math.tan,
      Ph = { Feature: function Feature(t, n) {
      Sn(t.geometry, n);
    }, FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        Sn(e[r].geometry, n);
      }
    } },
      Rh = { Sphere: function Sphere(t, n) {
      n.sphere();
    }, Point: function Point(t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2]);
    }, MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        t = e[r], n.point(t[0], t[1], t[2]);
      }
    }, LineString: function LineString(t, n) {
      En(t.coordinates, n, 0);
    }, MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        En(e[r], n, 0);
      }
    }, Polygon: function Polygon(t, n) {
      An(t.coordinates, n);
    }, MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        An(e[r], n);
      }
    }, GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        Sn(e[r], n);
      }
    } },
      Lh = function Lh(t, n) {
    t && Ph.hasOwnProperty(t.type) ? Ph[t.type](t, n) : Sn(t, n);
  },
      qh = Ll(),
      Dh = Ll(),
      Uh = { point: kn, lineStart: kn, lineEnd: kn, polygonStart: function polygonStart() {
      qh.reset(), Uh.lineStart = Cn, Uh.lineEnd = zn;
    }, polygonEnd: function polygonEnd() {
      var t = +qh;Dh.add(t < 0 ? _h + t : t), this.lineStart = this.lineEnd = this.point = kn;
    }, sphere: function sphere() {
      Dh.add(_h);
    } },
      Oh = Ll(),
      Fh = { point: Yn, lineStart: Hn, lineEnd: jn, polygonStart: function polygonStart() {
      Fh.point = Xn, Fh.lineStart = Vn, Fh.lineEnd = $n, Oh.reset(), Uh.polygonStart();
    }, polygonEnd: function polygonEnd() {
      Uh.polygonEnd(), Fh.point = Yn, Fh.lineStart = Hn, Fh.lineEnd = jn, qh < 0 ? (Il = -(Bl = 180), Yl = -(Hl = 90)) : Oh > ph ? Hl = 90 : Oh < -ph && (Yl = -90), Zl[0] = Il, Zl[1] = Bl;
    } },
      Ih = { sphere: kn, point: Qn, lineStart: Kn, lineEnd: ee, polygonStart: function polygonStart() {
      Ih.lineStart = re, Ih.lineEnd = ie;
    }, polygonEnd: function polygonEnd() {
      Ih.lineStart = Kn, Ih.lineEnd = ee;
    } },
      Yh = function Yh(t) {
    return function () {
      return t;
    };
  },
      Bh = function Bh(t, n) {
    function e(e, r) {
      return e = t(e, r), n(e[0], e[1]);
    }return t.invert && n.invert && (e.invert = function (e, r) {
      return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
    }), e;
  };ae.invert = ae;var Hh,
      jh,
      Xh,
      Vh,
      $h,
      Wh,
      Zh,
      Gh,
      Qh,
      Jh,
      Kh,
      tp = function tp(t) {
    function n(n) {
      return n = t(n[0] * mh, n[1] * mh), n[0] *= yh, n[1] *= yh, n;
    }return t = ce(t[0] * mh, t[1] * mh, t.length > 2 ? t[2] * mh : 0), n.invert = function (n) {
      return n = t.invert(n[0] * mh, n[1] * mh), n[0] *= yh, n[1] *= yh, n;
    }, n;
  },
      np = function np() {
    var t,
        n = [];return { point: function point(n, e) {
        t.push([n, e]);
      }, lineStart: function lineStart() {
        n.push(t = []);
      }, lineEnd: kn, rejoin: function rejoin() {
        n.length > 1 && n.push(n.pop().concat(n.shift()));
      }, result: function result() {
        var e = n;return n = [], t = null, e;
      } };
  },
      ep = function ep(t, n) {
    return xh(t[0] - n[0]) < ph && xh(t[1] - n[1]) < ph;
  },
      rp = function rp(t, n, e, r, i) {
    var o,
        u,
        a = [],
        c = [];if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n,
            e,
            r = t[0],
            u = t[n];if (ep(r, u)) {
          for (i.lineStart(), o = 0; o < n; ++o) {
            i.point((r = t[o])[0], r[1]);
          }i.lineEnd();
        } else a.push(e = new de(r, t, null, !0)), c.push(e.o = new de(r, null, e, !1)), a.push(e = new de(u, t, null, !1)), c.push(e.o = new de(u, null, e, !0));
      }
    }), a.length) {
      for (c.sort(n), ve(a), ve(c), o = 0, u = c.length; o < u; ++o) {
        c[o].e = e = !e;
      }for (var s, f, l = a[0];;) {
        for (var h = l, p = !0; h.v;) {
          if ((h = h.n) === l) return;
        }s = h.z, i.lineStart();do {
          if (h.v = h.o.v = !0, h.e) {
            if (p) for (o = 0, u = s.length; o < u; ++o) {
              i.point((f = s[o])[0], f[1]);
            } else r(h.x, h.n.x, 1, i);h = h.n;
          } else {
            if (p) for (s = h.p.z, o = s.length - 1; o >= 0; --o) {
              i.point((f = s[o])[0], f[1]);
            } else r(h.x, h.p.x, -1, i);h = h.p;
          }s = (h = h.o).z, p = !p;
        } while (!h.v);i.lineEnd();
      }
    }
  },
      ip = Ll(),
      op = function op(t, n) {
    var e = n[0],
        r = n[1],
        i = [Eh(e), -Mh(e), 0],
        o = 0,
        u = 0;ip.reset();for (var a = 0, c = t.length; a < c; ++a) {
      if (f = (s = t[a]).length) for (var s, f, l = s[f - 1], h = l[0], p = l[1] / 2 + gh, d = Eh(p), v = Mh(p), g = 0; g < f; ++g, h = y, d = x, v = b, l = _) {
        var _ = s[g],
            y = _[0],
            m = _[1] / 2 + gh,
            x = Eh(m),
            b = Mh(m),
            w = y - h,
            M = w >= 0 ? 1 : -1,
            T = M * w,
            N = T > dh,
            k = d * x;if (ip.add(wh(k * M * Eh(T), v * b + k * Mh(T))), o += N ? w + M * _h : w, N ^ h >= e ^ y >= e) {
          var S = Un(qn(l), qn(_));In(S);var E = Un(i, S);In(E);var A = (N ^ w >= 0 ? -1 : 1) * Tn(E[2]);(r > A || r === A && (S[0] || S[1])) && (u += N ^ w >= 0 ? 1 : -1);
        }
      }
    }return (o < -ph || o < ph && ip < -ph) ^ 1 & u;
  },
      up = function up(t, n, e, r) {
    return function (i) {
      function o(n, e) {
        t(n, e) && i.point(n, e);
      }function u(t, n) {
        v.point(t, n);
      }function a() {
        m.point = u, v.lineStart();
      }function c() {
        m.point = o, v.lineEnd();
      }function s(t, n) {
        d.push([t, n]), _.point(t, n);
      }function f() {
        _.lineStart(), d = [];
      }function l() {
        s(d[0][0], d[0][1]), _.lineEnd();var t,
            n,
            e,
            r,
            o = _.clean(),
            u = g.result(),
            a = u.length;if (d.pop(), h.push(d), d = null, a) if (1 & o) {
          if (e = u[0], (n = e.length - 1) > 0) {
            for (y || (i.polygonStart(), y = !0), i.lineStart(), t = 0; t < n; ++t) {
              i.point((r = e[t])[0], r[1]);
            }i.lineEnd();
          }
        } else a > 1 && 2 & o && u.push(u.pop().concat(u.shift())), p.push(u.filter(ge));
      }var h,
          p,
          d,
          v = n(i),
          g = np(),
          _ = n(g),
          y = !1,
          m = { point: o, lineStart: a, lineEnd: c, polygonStart: function polygonStart() {
          m.point = s, m.lineStart = f, m.lineEnd = l, p = [], h = [];
        }, polygonEnd: function polygonEnd() {
          m.point = o, m.lineStart = a, m.lineEnd = c, p = Fa(p);var t = op(h, r);p.length ? (y || (i.polygonStart(), y = !0), rp(p, _e, t, e, i)) : t && (y || (i.polygonStart(), y = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), y && (i.polygonEnd(), y = !1), p = h = null;
        }, sphere: function sphere() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        } };return m;
    };
  },
      ap = up(function () {
    return !0;
  }, function (t) {
    var n,
        e = NaN,
        r = NaN,
        i = NaN;return { lineStart: function lineStart() {
        t.lineStart(), n = 1;
      }, point: function point(o, u) {
        var a = o > 0 ? dh : -dh,
            c = xh(o - e);xh(c - dh) < ph ? (t.point(e, r = (r + u) / 2 > 0 ? vh : -vh), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= dh && (xh(e - i) < ph && (e -= i * ph), xh(o - a) < ph && (o -= a * ph), r = function (t, n, e, r) {
          var i,
              o,
              u = Eh(t - e);return xh(u) > ph ? bh((Eh(n) * (o = Mh(r)) * Eh(e) - Eh(r) * (i = Mh(n)) * Eh(t)) / (i * o * u)) : (n + r) / 2;
        }(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a;
      }, lineEnd: function lineEnd() {
        t.lineEnd(), e = r = NaN;
      }, clean: function clean() {
        return 2 - n;
      } };
  }, function (t, n, e, r) {
    var i;if (null == t) i = e * vh, r.point(-dh, i), r.point(0, i), r.point(dh, i), r.point(dh, 0), r.point(dh, -i), r.point(0, -i), r.point(-dh, -i), r.point(-dh, 0), r.point(-dh, i);else if (xh(t[0] - n[0]) > ph) {
      var o = t[0] < n[0] ? dh : -dh;i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }, [-dh, -vh]),
      cp = function cp(t) {
    function n(t, n) {
      return Mh(t) * Mh(n) > i;
    }function e(t, n, e) {
      var r = [1, 0, 0],
          o = Un(qn(t), qn(n)),
          u = Dn(o, o),
          a = o[0],
          c = u - a * a;if (!c) return !e && t;var s = i * u / c,
          f = -i * a / c,
          l = Un(r, o),
          h = Fn(r, s);On(h, Fn(o, f));var p = l,
          d = Dn(h, p),
          v = Dn(p, p),
          g = d * d - v * (Dn(h, h) - 1);if (!(g < 0)) {
        var _ = Ch(g),
            y = Fn(p, (-d - _) / v);if (On(y, h), y = Ln(y), !e) return y;var m,
            x = t[0],
            b = n[0],
            w = t[1],
            M = n[1];b < x && (m = x, x = b, b = m);var T = b - x,
            N = xh(T - dh) < ph;if (!N && M < w && (m = w, w = M, M = m), N || T < ph ? N ? w + M > 0 ^ y[1] < (xh(y[0] - x) < ph ? w : M) : w <= y[1] && y[1] <= M : T > dh ^ (x <= y[0] && y[0] <= b)) {
          var k = Fn(p, (-d + _) / v);return On(k, h), [y, Ln(k)];
        }
      }
    }function r(n, e) {
      var r = u ? t : dh - t,
          i = 0;return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i;
    }var i = Mh(t),
        o = 6 * mh,
        u = i > 0,
        a = xh(i) > ph;return up(n, function (t) {
      var i, o, c, s, f;return { lineStart: function lineStart() {
          s = c = !1, f = 1;
        }, point: function point(l, h) {
          var p,
              d = [l, h],
              v = n(l, h),
              g = u ? v ? 0 : r(l, h) : v ? r(l + (l < 0 ? dh : -dh), h) : 0;if (!i && (s = c = v) && t.lineStart(), v !== c && (!(p = e(i, d)) || ep(i, p) || ep(d, p)) && (d[0] += ph, d[1] += ph, v = n(d[0], d[1])), v !== c) f = 0, v ? (t.lineStart(), p = e(d, i), t.point(p[0], p[1])) : (p = e(i, d), t.point(p[0], p[1]), t.lineEnd()), i = p;else if (a && i && u ^ v) {
            var _;g & o || !(_ = e(d, i, !0)) || (f = 0, u ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])));
          }!v || i && ep(i, d) || t.point(d[0], d[1]), i = d, c = v, o = g;
        }, lineEnd: function lineEnd() {
          c && t.lineEnd(), i = null;
        }, clean: function clean() {
          return f | (s && c) << 1;
        } };
    }, function (n, e, r, i) {
      he(i, t, o, r, n, e);
    }, u ? [0, -t] : [-dh, t - dh]);
  },
      sp = function sp(t, n, e, r, i, o) {
    var u,
        a = t[0],
        c = t[1],
        s = 0,
        f = 1,
        l = n[0] - a,
        h = n[1] - c;if (u = e - a, l || !(u > 0)) {
      if (u /= l, l < 0) {
        if (u < s) return;u < f && (f = u);
      } else if (l > 0) {
        if (u > f) return;u > s && (s = u);
      }if (u = i - a, l || !(u < 0)) {
        if (u /= l, l < 0) {
          if (u > f) return;u > s && (s = u);
        } else if (l > 0) {
          if (u < s) return;u < f && (f = u);
        }if (u = r - c, h || !(u > 0)) {
          if (u /= h, h < 0) {
            if (u < s) return;u < f && (f = u);
          } else if (h > 0) {
            if (u > f) return;u > s && (s = u);
          }if (u = o - c, h || !(u < 0)) {
            if (u /= h, h < 0) {
              if (u > f) return;u > s && (s = u);
            } else if (h > 0) {
              if (u < s) return;u < f && (f = u);
            }return s > 0 && (t[0] = a + s * l, t[1] = c + s * h), f < 1 && (n[0] = a + f * l, n[1] = c + f * h), !0;
          }
        }
      }
    }
  },
      fp = 1e9,
      lp = -fp,
      hp = Ll(),
      pp = { sphere: kn, point: kn, lineStart: function lineStart() {
      pp.point = xe, pp.lineEnd = me;
    }, lineEnd: kn, polygonStart: kn, polygonEnd: kn },
      dp = function dp(t) {
    return hp.reset(), Lh(t, pp), +hp;
  },
      vp = [null, null],
      gp = { type: "LineString", coordinates: vp },
      _p = function _p(t, n) {
    return vp[0] = t, vp[1] = n, dp(gp);
  },
      yp = { Feature: function Feature(t, n) {
      return we(t.geometry, n);
    }, FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        if (we(e[r].geometry, n)) return !0;
      }return !1;
    } },
      mp = { Sphere: function Sphere() {
      return !0;
    }, Point: function Point(t, n) {
      return Me(t.coordinates, n);
    }, MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (Me(e[r], n)) return !0;
      }return !1;
    }, LineString: function LineString(t, n) {
      return Te(t.coordinates, n);
    }, MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (Te(e[r], n)) return !0;
      }return !1;
    }, Polygon: function Polygon(t, n) {
      return Ne(t.coordinates, n);
    }, MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (Ne(e[r], n)) return !0;
      }return !1;
    }, GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        if (we(e[r], n)) return !0;
      }return !1;
    } },
      xp = function xp(t) {
    return t;
  },
      bp = Ll(),
      wp = Ll(),
      Mp = { point: kn, lineStart: kn, lineEnd: kn, polygonStart: function polygonStart() {
      Mp.lineStart = ze, Mp.lineEnd = Le;
    }, polygonEnd: function polygonEnd() {
      Mp.lineStart = Mp.lineEnd = Mp.point = kn, bp.add(xh(wp)), wp.reset();
    }, result: function result() {
      var t = bp / 2;return bp.reset(), t;
    } },
      Tp = 1 / 0,
      Np = Tp,
      kp = -Tp,
      Sp = kp,
      Ep = { point: function point(t, n) {
      t < Tp && (Tp = t), t > kp && (kp = t), n < Np && (Np = n), n > Sp && (Sp = n);
    }, lineStart: kn, lineEnd: kn, polygonStart: kn, polygonEnd: kn, result: function result() {
      var t = [[Tp, Np], [kp, Sp]];return kp = Sp = -(Np = Tp = 1 / 0), t;
    } },
      Ap = 0,
      Cp = 0,
      zp = 0,
      Pp = 0,
      Rp = 0,
      Lp = 0,
      qp = 0,
      Dp = 0,
      Up = 0,
      Op = { point: qe, lineStart: De, lineEnd: Fe, polygonStart: function polygonStart() {
      Op.lineStart = Ie, Op.lineEnd = Ye;
    }, polygonEnd: function polygonEnd() {
      Op.point = qe, Op.lineStart = De, Op.lineEnd = Fe;
    }, result: function result() {
      var t = Up ? [qp / Up, Dp / Up] : Lp ? [Pp / Lp, Rp / Lp] : zp ? [Ap / zp, Cp / zp] : [NaN, NaN];return Ap = Cp = zp = Pp = Rp = Lp = qp = Dp = Up = 0, t;
    } };je.prototype = { _radius: 4.5, pointRadius: function pointRadius(t) {
      return this._radius = t, this;
    }, polygonStart: function polygonStart() {
      this._line = 0;
    }, polygonEnd: function polygonEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      0 === this._line && this._context.closePath(), this._point = NaN;
    }, point: function point(t, n) {
      switch (this._point) {case 0:
          this._context.moveTo(t, n), this._point = 1;break;case 1:
          this._context.lineTo(t, n);break;default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, _h);}
    }, result: kn };var Fp,
      Ip,
      Yp,
      Bp,
      Hp,
      jp = Ll(),
      Xp = { point: kn, lineStart: function lineStart() {
      Xp.point = Xe;
    }, lineEnd: function lineEnd() {
      Fp && Ve(Ip, Yp), Xp.point = kn;
    }, polygonStart: function polygonStart() {
      Fp = !0;
    }, polygonEnd: function polygonEnd() {
      Fp = null;
    }, result: function result() {
      var t = +jp;return jp.reset(), t;
    } };$e.prototype = { _radius: 4.5, _circle: We(4.5), pointRadius: function pointRadius(t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
    }, polygonStart: function polygonStart() {
      this._line = 0;
    }, polygonEnd: function polygonEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      0 === this._line && this._string.push("Z"), this._point = NaN;
    }, point: function point(t, n) {
      switch (this._point) {case 0:
          this._string.push("M", t, ",", n), this._point = 1;break;case 1:
          this._string.push("L", t, ",", n);break;default:
          null == this._circle && (this._circle = We(this._radius)), this._string.push("M", t, ",", n, this._circle);}
    }, result: function result() {
      if (this._string.length) {
        var t = this._string.join("");return this._string = [], t;
      }return null;
    } };Ge.prototype = { constructor: Ge, point: function point(t, n) {
      this.stream.point(t, n);
    }, sphere: function sphere() {
      this.stream.sphere();
    }, lineStart: function lineStart() {
      this.stream.lineStart();
    }, lineEnd: function lineEnd() {
      this.stream.lineEnd();
    }, polygonStart: function polygonStart() {
      this.stream.polygonStart();
    }, polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    } };var Vp = 16,
      $p = Mh(30 * mh),
      Wp = function Wp(t, n) {
    return +n ? function (t, n) {
      function e(r, i, o, u, a, c, s, f, l, h, p, d, v, g) {
        var _ = s - r,
            y = f - i,
            m = _ * _ + y * y;if (m > 4 * n && v--) {
          var x = u + h,
              b = a + p,
              w = c + d,
              M = Ch(x * x + b * b + w * w),
              T = Tn(w /= M),
              N = xh(xh(w) - 1) < ph || xh(o - l) < ph ? (o + l) / 2 : wh(b, x),
              k = t(N, T),
              S = k[0],
              E = k[1],
              A = S - r,
              C = E - i,
              z = y * A - _ * C;(z * z / m > n || xh((_ * A + y * C) / m - .5) > .3 || u * h + a * p + c * d < $p) && (e(r, i, o, u, a, c, S, E, N, x /= M, b /= M, w, v, g), g.point(S, E), e(S, E, N, x, b, w, s, f, l, h, p, d, v, g));
        }
      }return function (n) {
        function r(e, r) {
          e = t(e, r), n.point(e[0], e[1]);
        }function i() {
          _ = NaN, w.point = o, n.lineStart();
        }function o(r, i) {
          var o = qn([r, i]),
              u = t(r, i);e(_, y, g, m, x, b, _ = u[0], y = u[1], g = r, m = o[0], x = o[1], b = o[2], Vp, n), n.point(_, y);
        }function u() {
          w.point = r, n.lineEnd();
        }function a() {
          i(), w.point = c, w.lineEnd = s;
        }function c(t, n) {
          o(f = t, n), l = _, h = y, p = m, d = x, v = b, w.point = o;
        }function s() {
          e(_, y, g, m, x, b, l, h, f, p, d, v, Vp, n), w.lineEnd = u, u();
        }var f,
            l,
            h,
            p,
            d,
            v,
            g,
            _,
            y,
            m,
            x,
            b,
            w = { point: r, lineStart: i, lineEnd: u, polygonStart: function polygonStart() {
            n.polygonStart(), w.lineStart = a;
          }, polygonEnd: function polygonEnd() {
            n.polygonEnd(), w.lineStart = i;
          } };return w;
      };
    }(t, n) : function (t) {
      return Ze({ point: function point(n, e) {
          n = t(n, e), this.stream.point(n[0], n[1]);
        } });
    }(t);
  },
      Zp = Ze({ point: function point(t, n) {
      this.stream.point(t * mh, n * mh);
    } }),
      Gp = function Gp() {
    return ir(or).scale(155.424).center([0, 33.6442]);
  },
      Qp = function Qp() {
    return Gp().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
  },
      Jp = ur(function (t) {
    return Ch(2 / (1 + t));
  });Jp.invert = ar(function (t) {
    return 2 * Tn(t / 2);
  });var Kp = ur(function (t) {
    return (t = Mn(t)) && t / Eh(t);
  });Kp.invert = ar(function (t) {
    return t;
  });cr.invert = function (t, n) {
    return [t, 2 * bh(Nh(n)) - vh];
  };hr.invert = hr;dr.invert = ar(bh);gr.invert = function (t, n) {
    var e,
        r = n,
        i = 25;do {
      var o = r * r,
          u = o * o;r -= e = (r * (1.007226 + o * (.015085 + u * (.028874 * o - .044475 - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (.259866 * o - .311325 - .005916 * 11 * u)));
    } while (xh(e) > ph && --i > 0);return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r];
  };_r.invert = ar(Tn);yr.invert = ar(function (t) {
    return 2 * bh(t);
  });mr.invert = function (t, n) {
    return [-n, 2 * bh(Nh(t)) - vh];
  };Er.prototype = Tr.prototype = { constructor: Er, count: function count() {
      return this.eachAfter(Mr);
    }, each: function each(t) {
      var n,
          e,
          r,
          i,
          o = this,
          u = [o];do {
        for (n = u.reverse(), u = []; o = n.pop();) {
          if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) {
            u.push(e[r]);
          }
        }
      } while (u.length);return this;
    }, eachAfter: function eachAfter(t) {
      for (var n, e, r, i = this, o = [i], u = []; i = o.pop();) {
        if (u.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) {
          o.push(n[e]);
        }
      }for (; i = u.pop();) {
        t(i);
      }return this;
    }, eachBefore: function eachBefore(t) {
      for (var n, e, r = this, i = [r]; r = i.pop();) {
        if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) {
          i.push(n[e]);
        }
      }return this;
    }, sum: function sum(t) {
      return this.eachAfter(function (n) {
        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) {
          e += r[i].value;
        }n.value = e;
      });
    }, sort: function sort(t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    }, path: function path(t) {
      for (var n = this, e = function (t, n) {
        if (t === n) return t;var e = t.ancestors(),
            r = n.ancestors(),
            i = null;for (t = e.pop(), n = r.pop(); t === n;) {
          i = t, t = e.pop(), n = r.pop();
        }return i;
      }(n, t), r = [n]; n !== e;) {
        n = n.parent, r.push(n);
      }for (var i = r.length; t !== e;) {
        r.splice(i, 0, t), t = t.parent;
      }return r;
    }, ancestors: function ancestors() {
      for (var t = this, n = [t]; t = t.parent;) {
        n.push(t);
      }return n;
    }, descendants: function descendants() {
      var t = [];return this.each(function (n) {
        t.push(n);
      }), t;
    }, leaves: function leaves() {
      var t = [];return this.eachBefore(function (n) {
        n.children || t.push(n);
      }), t;
    }, links: function links() {
      var t = this,
          n = [];return t.each(function (e) {
        e !== t && n.push({ source: e.parent, target: e });
      }), n;
    }, copy: function copy() {
      return Tr(this).eachBefore(kr);
    } };var td = Array.prototype.slice,
      nd = function nd(t) {
    for (var n, e, r = 0, i = (t = function (t) {
      for (var n, e, r = t.length; r;) {
        e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
      }return t;
    }(td.call(t))).length, o = []; r < i;) {
      n = t[r], e && Cr(e, n) ? ++r : (e = function (t) {
        switch (t.length) {case 1:
            return function (t) {
              return { x: t.x, y: t.y, r: t.r };
            }(t[0]);case 2:
            return Pr(t[0], t[1]);case 3:
            return Rr(t[0], t[1], t[2]);}
      }(o = function (t, n) {
        var e, r;if (zr(n, t)) return [n];for (e = 0; e < t.length; ++e) {
          if (Ar(n, t[e]) && zr(Pr(t[e], n), t)) return [t[e], n];
        }for (e = 0; e < t.length - 1; ++e) {
          for (r = e + 1; r < t.length; ++r) {
            if (Ar(Pr(t[e], t[r]), n) && Ar(Pr(t[e], n), t[r]) && Ar(Pr(t[r], n), t[e]) && zr(Rr(t[e], t[r], n), t)) return [t[e], t[r], n];
          }
        }throw new Error();
      }(o, n)), r = 0);
    }return e;
  },
      ed = function ed(t) {
    return function () {
      return t;
    };
  },
      rd = function rd(t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
  },
      id = function id(t, n, e, r, i) {
    for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;) {
      (o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s;
    }
  },
      od = "$",
      ud = { depth: -1 },
      ad = {};Jr.prototype = Object.create(Er.prototype);var cd = function cd(t, n, e, r, i) {
    for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;) {
      (o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s;
    }
  },
      sd = (1 + Math.sqrt(5)) / 2,
      fd = function t(n) {
    function e(t, e, r, i, o) {
      Kr(n, t, e, r, i, o);
    }return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(sd),
      ld = function t(n) {
    function e(t, e, r, i, o) {
      if ((u = t._squarify) && u.ratio === n) for (var u, a, c, s, f, l = -1, h = u.length, p = t.value; ++l < h;) {
        for (c = (a = u[l]).children, s = a.value = 0, f = c.length; s < f; ++s) {
          a.value += c[s].value;
        }a.dice ? id(a, e, r, i, r += (o - r) * a.value / p) : cd(a, e, r, e += (i - e) * a.value / p, o), p -= a.value;
      } else t._squarify = u = Kr(n, t, e, r, i, o), u.ratio = n;
    }return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(sd),
      hd = function hd(t, n, e) {
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
  },
      pd = [].slice,
      dd = {};ei.prototype = ui.prototype = { constructor: ei, defer: function defer(t) {
      if ("function" != typeof t) throw new Error("invalid callback");if (this._call) throw new Error("defer after await");if (null != this._error) return this;var n = pd.call(arguments, 1);return n.push(t), ++this._waiting, this._tasks.push(n), ri(this), this;
    }, abort: function abort() {
      return null == this._error && ii(this, new Error("abort")), this;
    }, await: function _await(t) {
      if ("function" != typeof t) throw new Error("invalid callback");if (this._call) throw new Error("multiple await");return this._call = function (n, e) {
        t.apply(null, [n].concat(e));
      }, oi(this), this;
    }, awaitAll: function awaitAll(t) {
      if ("function" != typeof t) throw new Error("invalid callback");if (this._call) throw new Error("multiple await");return this._call = t, oi(this), this;
    } };var vd = function vd() {
    return Math.random();
  },
      gd = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
        return n() * e + t;
      };
    }return e.source = t, e;
  }(vd),
      _d = function t(n) {
    function e(t, e) {
      var r, i;return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var o;if (null != r) o = r, r = null;else do {
          r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o;
        } while (!i || i > 1);return t + e * o * Math.sqrt(-2 * Math.log(i) / i);
      };
    }return e.source = t, e;
  }(vd),
      yd = function t(n) {
    function e() {
      var t = _d.source(n).apply(this, arguments);return function () {
        return Math.exp(t());
      };
    }return e.source = t, e;
  }(vd),
      md = function t(n) {
    function e(t) {
      return function () {
        for (var e = 0, r = 0; r < t; ++r) {
          e += n();
        }return e;
      };
    }return e.source = t, e;
  }(vd),
      xd = function t(n) {
    function e(t) {
      var e = md.source(n)(t);return function () {
        return e() / t;
      };
    }return e.source = t, e;
  }(vd),
      bd = function t(n) {
    function e(t) {
      return function () {
        return -Math.log(1 - n()) / t;
      };
    }return e.source = t, e;
  }(vd),
      wd = function wd(t, n) {
    function e(t) {
      var n,
          e = f.status;if (!e && function (t) {
        var n = t.responseType;return n && "text" !== n ? t.response : t.responseText;
      }(f) || e >= 200 && e < 300 || 304 === e) {
        if (o) try {
          n = o.call(r, f);
        } catch (t) {
          return void c.call("error", r, t);
        } else n = f;c.call("load", r, n);
      } else c.call("error", r, t);
    }var r,
        i,
        o,
        u,
        c = a("beforesend", "progress", "load", "error"),
        s = Kt(),
        f = new XMLHttpRequest(),
        l = null,
        h = null,
        p = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(t) || (f = new XDomainRequest()), "onload" in f ? f.onload = f.onerror = f.ontimeout = e : f.onreadystatechange = function (t) {
      f.readyState > 3 && e(t);
    }, f.onprogress = function (t) {
      c.call("progress", r, t);
    }, r = { header: function header(t, n) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""), r);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (i = null == t ? null : t + "", r) : i;
      }, responseType: function responseType(t) {
        return arguments.length ? (u = t, r) : u;
      }, timeout: function timeout(t) {
        return arguments.length ? (p = +t, r) : p;
      }, user: function user(t) {
        return arguments.length < 1 ? l : (l = null == t ? null : t + "", r);
      }, password: function password(t) {
        return arguments.length < 1 ? h : (h = null == t ? null : t + "", r);
      }, response: function response(t) {
        return o = t, r;
      }, get: function get(t, n) {
        return r.send("GET", t, n);
      }, post: function post(t, n) {
        return r.send("POST", t, n);
      }, send: function send(n, e, o) {
        return f.open(n, t, !0, l, h), null == i || s.has("accept") || s.set("accept", i + ",*/*"), f.setRequestHeader && s.each(function (t, n) {
          f.setRequestHeader(n, t);
        }), null != i && f.overrideMimeType && f.overrideMimeType(i), null != u && (f.responseType = u), p > 0 && (f.timeout = p), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = function (t) {
          return function (n, e) {
            t(null == n ? e : null);
          };
        }(o)), null != o && r.on("error", o).on("load", function (t) {
          o(null, t);
        }), c.call("beforesend", r, f), f.send(null == e ? null : e), r;
      }, abort: function abort() {
        return f.abort(), r;
      }, on: function on() {
        var t = c.on.apply(c, arguments);return t === c ? r : t;
      } }, null != n) {
      if ("function" != typeof n) throw new Error("invalid callback: " + n);return r.get(n);
    }return r;
  },
      Md = function Md(t, n) {
    return function (e, r) {
      var i = wd(e).mimeType(t).response(n);if (null != r) {
        if ("function" != typeof r) throw new Error("invalid callback: " + r);return i.get(r);
      }return i;
    };
  },
      Td = Md("text/html", function (t) {
    return document.createRange().createContextualFragment(t.responseText);
  }),
      Nd = Md("application/json", function (t) {
    return JSON.parse(t.responseText);
  }),
      kd = Md("text/plain", function (t) {
    return t.responseText;
  }),
      Sd = Md("application/xml", function (t) {
    var n = t.responseXML;if (!n) throw new Error("parse error");return n;
  }),
      Ed = function Ed(t, n) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var o = wd(e).mimeType(t);return o.row = function (t) {
        return arguments.length ? o.response(function (t, n) {
          return function (e) {
            return t(e.responseText, n);
          };
        }(n, r = t)) : r;
      }, o.row(r), i ? o.get(i) : o;
    };
  },
      Ad = Ed("text/csv", ul),
      Cd = Ed("text/tab-separated-values", ll),
      zd = Array.prototype,
      Pd = zd.map,
      Rd = zd.slice,
      Ld = { name: "implicit" },
      qd = function qd(t) {
    return function () {
      return t;
    };
  },
      Dd = function Dd(t) {
    return +t;
  },
      Ud = [0, 1],
      Od = function Od(n, e, i) {
    var o,
        u = n[0],
        a = n[n.length - 1],
        c = r(u, a, null == e ? 10 : e);switch ((i = yn(null == i ? ",f" : i)).type) {case "s":
        var s = Math.max(Math.abs(u), Math.abs(a));return null != i.precision || isNaN(o = Pl(c, s)) || (i.precision = o), t.formatPrefix(i, s);case "":case "e":case "g":case "p":case "r":
        null != i.precision || isNaN(o = Rl(c, Math.max(Math.abs(u), Math.abs(a)))) || (i.precision = o - ("e" === i.type));break;case "f":case "%":
        null != i.precision || isNaN(o = zl(c)) || (i.precision = o - 2 * ("%" === i.type));}return t.format(i);
  },
      Fd = function Fd(t, n) {
    var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        u = t[i];return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t;
  },
      Id = new Date(),
      Yd = new Date(),
      Bd = Si(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });Bd.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Si(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : Bd : null;
  };var Hd = Bd.range,
      jd = 6e4,
      Xd = 6048e5,
      Vd = Si(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, n) {
    t.setTime(+t + 1e3 * n);
  }, function (t, n) {
    return (n - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }),
      $d = Vd.range,
      Wd = Si(function (t) {
    t.setTime(Math.floor(t / jd) * jd);
  }, function (t, n) {
    t.setTime(+t + n * jd);
  }, function (t, n) {
    return (n - t) / jd;
  }, function (t) {
    return t.getMinutes();
  }),
      Zd = Wd.range,
      Gd = Si(function (t) {
    var n = t.getTimezoneOffset() * jd % 36e5;n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getHours();
  }),
      Qd = Gd.range,
      Jd = Si(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jd) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  }),
      Kd = Jd.range,
      tv = Ei(0),
      nv = Ei(1),
      ev = Ei(2),
      rv = Ei(3),
      iv = Ei(4),
      ov = Ei(5),
      uv = Ei(6),
      av = tv.range,
      cv = nv.range,
      sv = ev.range,
      fv = rv.range,
      lv = iv.range,
      hv = ov.range,
      pv = uv.range,
      dv = Si(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }),
      vv = dv.range,
      gv = Si(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  });gv.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Si(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };var _v = gv.range,
      yv = Si(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * jd);
  }, function (t, n) {
    return (n - t) / jd;
  }, function (t) {
    return t.getUTCMinutes();
  }),
      mv = yv.range,
      xv = Si(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getUTCHours();
  }),
      bv = xv.range,
      wv = Si(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      Mv = wv.range,
      Tv = Ai(0),
      Nv = Ai(1),
      kv = Ai(2),
      Sv = Ai(3),
      Ev = Ai(4),
      Av = Ai(5),
      Cv = Ai(6),
      zv = Tv.range,
      Pv = Nv.range,
      Rv = kv.range,
      Lv = Sv.range,
      qv = Ev.range,
      Dv = Av.range,
      Uv = Cv.range,
      Ov = Si(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }),
      Fv = Ov.range,
      Iv = Si(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  });Iv.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Si(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };var Yv,
      Bv = Iv.range,
      Hv = { "-": "", _: " ", 0: "0" },
      jv = /^\s*\d+/,
      Xv = /^%/,
      Vv = /[\\^$*+?|[\]().{}]/g;Yo({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });var $v = Date.prototype.toISOString ? function (t) {
    return t.toISOString();
  } : t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),
      Wv = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
    var n = new Date(t);return isNaN(n) ? null : n;
  } : t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),
      Zv = 1e3,
      Gv = 60 * Zv,
      Qv = 60 * Gv,
      Jv = 24 * Qv,
      Kv = 7 * Jv,
      tg = 30 * Jv,
      ng = 365 * Jv,
      eg = function eg(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  },
      rg = eg("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      ig = eg("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
      og = eg("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
      ug = eg("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
      ag = As(rt(300, .5, 0), rt(-240, .5, 1)),
      cg = As(rt(-100, .75, .35), rt(80, 1.5, .8)),
      sg = As(rt(260, .75, .35), rt(80, 1.5, .8)),
      fg = rt(),
      lg = Xo(eg("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
      hg = Xo(eg("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      pg = Xo(eg("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      dg = Xo(eg("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
      vg = function vg(t) {
    return function () {
      return t;
    };
  },
      gg = Math.abs,
      _g = Math.atan2,
      yg = Math.cos,
      mg = Math.max,
      xg = Math.min,
      bg = Math.sin,
      wg = Math.sqrt,
      Mg = 1e-12,
      Tg = Math.PI,
      Ng = Tg / 2,
      kg = 2 * Tg;tu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;default:
          this._context.lineTo(t, n);}
    } };var Sg = function Sg(t) {
    return new tu(t);
  },
      Eg = function Eg() {
    function t(t) {
      var a,
          c,
          s,
          f = t.length,
          l = !1;for (null == i && (u = o(s = Vt())), a = 0; a <= f; ++a) {
        !(a < f && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
      }if (s) return u = null, s + "" || null;
    }var n = nu,
        e = eu,
        r = vg(!0),
        i = null,
        o = Sg,
        u = null;return t.x = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : vg(+e), t) : n;
    }, t.y = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : vg(+n), t) : e;
    }, t.defined = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : vg(!!n), t) : r;
    }, t.curve = function (n) {
      return arguments.length ? (o = n, null != i && (u = o(i)), t) : o;
    }, t.context = function (n) {
      return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i;
    }, t;
  },
      Ag = function Ag() {
    function t(t) {
      var n,
          f,
          l,
          h,
          p,
          d = t.length,
          v = !1,
          g = new Array(d),
          _ = new Array(d);for (null == a && (s = c(p = Vt())), n = 0; n <= d; ++n) {
        if (!(n < d && u(h = t[n], n, t)) === v) if (v = !v) f = n, s.areaStart(), s.lineStart();else {
          for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l) {
            s.point(g[l], _[l]);
          }s.lineEnd(), s.areaEnd();
        }v && (g[n] = +e(h, n, t), _[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : g[n], o ? +o(h, n, t) : _[n]));
      }if (p) return s = null, p + "" || null;
    }function n() {
      return Eg().defined(u).curve(c).context(a);
    }var e = nu,
        r = null,
        i = vg(0),
        o = eu,
        u = vg(!0),
        a = null,
        c = Sg,
        s = null;return t.x = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : vg(+n), r = null, t) : e;
    }, t.x0 = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : vg(+n), t) : e;
    }, t.x1 = function (n) {
      return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : vg(+n), t) : r;
    }, t.y = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : vg(+n), o = null, t) : i;
    }, t.y0 = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : vg(+n), t) : i;
    }, t.y1 = function (n) {
      return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : vg(+n), t) : o;
    }, t.lineX0 = t.lineY0 = function () {
      return n().x(e).y(i);
    }, t.lineY1 = function () {
      return n().x(e).y(o);
    }, t.lineX1 = function () {
      return n().x(r).y(i);
    }, t.defined = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : vg(!!n), t) : u;
    }, t.curve = function (n) {
      return arguments.length ? (c = n, null != a && (s = c(a)), t) : c;
    }, t.context = function (n) {
      return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a;
    }, t;
  },
      Cg = function Cg(t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  },
      zg = function zg(t) {
    return t;
  },
      Pg = iu(Sg);ru.prototype = { areaStart: function areaStart() {
      this._curve.areaStart();
    }, areaEnd: function areaEnd() {
      this._curve.areaEnd();
    }, lineStart: function lineStart() {
      this._curve.lineStart();
    }, lineEnd: function lineEnd() {
      this._curve.lineEnd();
    }, point: function point(t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    } };var Rg = function Rg() {
    return ou(Eg().curve(Pg));
  },
      Lg = function Lg() {
    var t = Ag().curve(Pg),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        o = t.lineY1;return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
      return ou(e());
    }, delete t.lineX0, t.lineEndAngle = function () {
      return ou(r());
    }, delete t.lineX1, t.lineInnerRadius = function () {
      return ou(i());
    }, delete t.lineY0, t.lineOuterRadius = function () {
      return ou(o());
    }, delete t.lineY1, t.curve = function (t) {
      return arguments.length ? n(iu(t)) : n()._curve;
    }, t;
  },
      qg = function qg(t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)];
  },
      Dg = Array.prototype.slice,
      Ug = { draw: function draw(t, n) {
      var e = Math.sqrt(n / Tg);t.moveTo(e, 0), t.arc(0, 0, e, 0, kg);
    } },
      Og = { draw: function draw(t, n) {
      var e = Math.sqrt(n / 5) / 2;t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath();
    } },
      Fg = Math.sqrt(1 / 3),
      Ig = 2 * Fg,
      Yg = { draw: function draw(t, n) {
      var e = Math.sqrt(n / Ig),
          r = e * Fg;t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
    } },
      Bg = Math.sin(Tg / 10) / Math.sin(7 * Tg / 10),
      Hg = Math.sin(kg / 10) * Bg,
      jg = -Math.cos(kg / 10) * Bg,
      Xg = { draw: function draw(t, n) {
      var e = Math.sqrt(.8908130915292852 * n),
          r = Hg * e,
          i = jg * e;t.moveTo(0, -e), t.lineTo(r, i);for (var o = 1; o < 5; ++o) {
        var u = kg * o / 5,
            a = Math.cos(u),
            c = Math.sin(u);t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i);
      }t.closePath();
    } },
      Vg = { draw: function draw(t, n) {
      var e = Math.sqrt(n),
          r = -e / 2;t.rect(r, r, e, e);
    } },
      $g = Math.sqrt(3),
      Wg = { draw: function draw(t, n) {
      var e = -Math.sqrt(n / (3 * $g));t.moveTo(0, 2 * e), t.lineTo(-$g * e, -e), t.lineTo($g * e, -e), t.closePath();
    } },
      Zg = -.5,
      Gg = Math.sqrt(3) / 2,
      Qg = 1 / Math.sqrt(12),
      Jg = 3 * (Qg / 2 + 1),
      Kg = { draw: function draw(t, n) {
      var e = Math.sqrt(n / Jg),
          r = e / 2,
          i = e * Qg,
          o = r,
          u = e * Qg + e,
          a = -o,
          c = u;t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(Zg * r - Gg * i, Gg * r + Zg * i), t.lineTo(Zg * o - Gg * u, Gg * o + Zg * u), t.lineTo(Zg * a - Gg * c, Gg * a + Zg * c), t.lineTo(Zg * r + Gg * i, Zg * i - Gg * r), t.lineTo(Zg * o + Gg * u, Zg * u - Gg * o), t.lineTo(Zg * a + Gg * c, Zg * c - Gg * a), t.closePath();
    } },
      t_ = [Ug, Og, Yg, Vg, Xg, Wg, Kg],
      n_ = function n_() {};pu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 3:
          hu(this, this._x1, this._y1);case 2:
          this._context.lineTo(this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);default:
          hu(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } };du.prototype = { areaStart: n_, areaEnd: n_, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();break;case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();break;case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);}
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._x2 = t, this._y2 = n;break;case 1:
          this._point = 2, this._x3 = t, this._y3 = n;break;case 2:
          this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);break;default:
          hu(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } };vu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3;var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);break;case 3:
          this._point = 4;default:
          hu(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } };gu.prototype = { lineStart: function lineStart() {
      this._x = [], this._y = [], this._basis.lineStart();
    }, lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length - 1;if (e > 0) for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) {
        r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
      }this._x = this._y = null, this._basis.lineEnd();
    }, point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    } };var e_ = function t(n) {
    function e(t) {
      return 1 === n ? new pu(t) : new gu(t, n);
    }return e.beta = function (n) {
      return t(+n);
    }, e;
  }(.85);yu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          _u(this, this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2, this._x1 = t, this._y1 = n;break;case 2:
          this._point = 3;default:
          _u(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var r_ = function t(n) {
    function e(t) {
      return new yu(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);mu.prototype = { areaStart: n_, areaEnd: n_, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          _u(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var i_ = function t(n) {
    function e(t) {
      return new mu(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);xu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          _u(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var o_ = function t(n) {
    function e(t) {
      return new xu(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);wu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          this.point(this._x2, this._y2);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3;default:
          bu(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var u_ = function t(n) {
    function e(t) {
      return n ? new wu(t, n) : new yu(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);Mu.prototype = { areaStart: n_, areaEnd: n_, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          bu(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var a_ = function t(n) {
    function e(t) {
      return n ? new Mu(t, n) : new mu(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);Tu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          bu(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var c_ = function t(n) {
    function e(t) {
      return n ? new Tu(t, n) : new xu(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);Nu.prototype = { areaStart: n_, areaEnd: n_, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      this._point && this._context.closePath();
    }, point: function point(t, n) {
      t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n));
    } };Cu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x1, this._y1);break;case 3:
          Au(this, this._t0, Eu(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      var e = NaN;if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
        switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, Au(this, Eu(this, e = Su(this, t, n)), e);break;default:
            Au(this, this._t0, e = Su(this, t, n));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    } }, (zu.prototype = Object.create(Cu.prototype)).point = function (t, n) {
    Cu.prototype.point.call(this, n, t);
  }, Pu.prototype = { moveTo: function moveTo(t, n) {
      this._context.moveTo(n, t);
    }, closePath: function closePath() {
      this._context.closePath();
    }, lineTo: function lineTo(t, n) {
      this._context.lineTo(n, t);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i);
    } }, Ru.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x = [], this._y = [];
    }, lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length;if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);else for (var r = Lu(t), i = Lu(n), o = 0, u = 1; u < e; ++o, ++u) {
        this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
      }(this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    }, point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    } };qu.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x = this._y = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;default:
          if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);else {
            var e = this._x * (1 - this._t) + t * this._t;this._context.lineTo(e, this._y), this._context.lineTo(e, n);
          }}this._x = t, this._y = n;
    } };var s_ = function s_(t, n) {
    if ((i = t.length) > 1) for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o) {
      for (r = u, u = t[n[o]], e = 0; e < a; ++e) {
        u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      }
    }
  },
      f_ = function f_(t) {
    for (var n = t.length, e = new Array(n); --n >= 0;) {
      e[n] = n;
    }return e;
  },
      l_ = function l_(t) {
    var n = t.map(Uu);return f_(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  },
      h_ = function h_(t) {
    return function () {
      return t;
    };
  };Iu.prototype = { constructor: Iu, insert: function insert(t, n) {
      var e, r, i;if (t) {
        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
          for (t = t.R; t.L;) {
            t = t.L;
          }t.L = n;
        } else t.R = n;e = t;
      } else this._ ? (t = ju(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) {
        e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Bu(this, e), e = (t = e).U), e.C = !1, r.C = !0, Hu(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Hu(this, e), e = (t = e).U), e.C = !1, r.C = !0, Bu(this, r)), e = t.U;
      }this._.C = !1;
    }, remove: function remove(t) {
      t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;var n,
          e,
          r,
          i = t.U,
          o = t.L,
          u = t.R;if (e = o ? u ? ju(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1;else {
        do {
          if (t === this._) break;if (t === i.L) {
            if ((n = i.R).C && (n.C = !1, i.C = !0, Bu(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
              n.R && n.R.C || (n.L.C = !1, n.C = !0, Hu(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Bu(this, i), t = this._;break;
            }
          } else if ((n = i.L).C && (n.C = !1, i.C = !0, Hu(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
            n.L && n.L.C || (n.R.C = !1, n.C = !0, Bu(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Hu(this, i), t = this._;break;
          }n.C = !0, t = i, i = i.U;
        } while (!t.C);t && (t.C = !1);
      }
    } };var p_,
      d_,
      v_,
      g_,
      __,
      y_ = [],
      m_ = [],
      x_ = 1e-6,
      b_ = 1e-12;ca.prototype = { constructor: ca, polygons: function polygons() {
      var t = this.edges;return this.cells.map(function (n) {
        var e = n.halfedges.map(function (e) {
          return Qu(n, t[e]);
        });return e.data = n.site.data, e;
      });
    }, triangles: function triangles() {
      var t = [],
          n = this.edges;return this.cells.forEach(function (e, r) {
        if (o = (i = e.halfedges).length) for (var i, o, u, a = e.site, c = -1, s = n[i[o - 1]], f = s.left === a ? s.right : s.left; ++c < o;) {
          u = f, f = (s = n[i[c]]).left === a ? s.right : s.left, u && f && r < u.index && r < f.index && ua(a, u, f) < 0 && t.push([a.data, u.data, f.data]);
        }
      }), t;
    }, links: function links() {
      return this.edges.filter(function (t) {
        return t.right;
      }).map(function (t) {
        return { source: t.left.data, target: t.right.data };
      });
    }, find: function find(t, n, e) {
      for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);) {
        if (++u >= a) return null;
      }var c = t - i.site[0],
          s = n - i.site[1],
          f = c * c + s * s;do {
        i = o.cells[r = u], u = null, i.halfedges.forEach(function (e) {
          var r = o.edges[e],
              a = r.left;if (a !== i.site && a || (a = r.right)) {
            var c = t - a[0],
                s = n - a[1],
                l = c * c + s * s;l < f && (f = l, u = a.index);
          }
        });
      } while (null !== u);return o._found = r, null == e || f <= e * e ? i.site : null;
    } };var w_ = function w_(t) {
    return function () {
      return t;
    };
  };sa.prototype = { constructor: sa, scale: function scale(t) {
      return 1 === t ? this : new sa(this.k * t, this.x, this.y);
    }, translate: function translate(t, n) {
      return 0 === t & 0 === n ? this : new sa(this.k, this.x + this.k * t, this.y + this.k * n);
    }, apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    }, applyX: function applyX(t) {
      return t * this.k + this.x;
    }, applyY: function applyY(t) {
      return t * this.k + this.y;
    }, invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    }, invertX: function invertX(t) {
      return (t - this.x) / this.k;
    }, invertY: function invertY(t) {
      return (t - this.y) / this.k;
    }, rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    }, rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    }, toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    } };var M_ = new sa(1, 0, 0);fa.prototype = sa.prototype;var T_ = function T_() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  };t.version = "4.12.0", t.bisect = ba, t.bisectRight = ba, t.bisectLeft = wa, t.ascending = ya, t.bisector = ma, t.cross = function (t, e, r) {
    var i,
        o,
        u,
        a,
        c = t.length,
        s = e.length,
        f = new Array(c * s);for (null == r && (r = n), i = u = 0; i < c; ++i) {
      for (a = t[i], o = 0; o < s; ++o, ++u) {
        f[u] = r(a, e[o]);
      }
    }return f;
  }, t.descending = function (t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }, t.deviation = Na, t.extent = ka, t.histogram = function () {
    function t(t) {
      var o,
          u,
          a = t.length,
          c = new Array(a);for (o = 0; o < a; ++o) {
        c[o] = n(t[o], o, t);
      }var s = e(c),
          f = s[0],
          l = s[1],
          h = i(c, f, l);Array.isArray(h) || (h = r(f, l, h), h = Pa(Math.ceil(f / h) * h, Math.floor(l / h) * h, h));for (var p = h.length; h[0] <= f;) {
        h.shift(), --p;
      }for (; h[p - 1] > l;) {
        h.pop(), --p;
      }var d,
          v = new Array(p + 1);for (o = 0; o <= p; ++o) {
        (d = v[o] = []).x0 = o > 0 ? h[o - 1] : f, d.x1 = o < p ? h[o] : l;
      }for (o = 0; o < a; ++o) {
        f <= (u = c[o]) && u <= l && v[ba(h, u, 0, p)].push(t[o]);
      }return v;
    }var n = za,
        e = ka,
        i = Ua;return t.value = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : Ca(e), t) : n;
    }, t.domain = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : Ca([n[0], n[1]]), t) : e;
    }, t.thresholds = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Ca(Array.isArray(n) ? Ea.call(n) : n), t) : i;
    }, t;
  }, t.thresholdFreedmanDiaconis = function (t, n, e) {
    return t = Aa.call(t, Ma).sort(ya), Math.ceil((e - n) / (2 * (Oa(t, .75) - Oa(t, .25)) * Math.pow(t.length, -1 / 3)));
  }, t.thresholdScott = function (t, n, e) {
    return Math.ceil((e - n) / (3.5 * Na(t) * Math.pow(t.length, -1 / 3)));
  }, t.thresholdSturges = Ua, t.max = function (t, n) {
    var e,
        r,
        i = t.length,
        o = -1;if (null == n) {
      for (; ++o < i;) {
        if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = t[o]) && e > r && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) {
        null != (e = n(t[o], o, t)) && e > r && (r = e);
      }
    }return r;
  }, t.mean = function (t, n) {
    var e,
        r = t.length,
        i = r,
        o = -1,
        u = 0;if (null == n) for (; ++o < r;) {
      isNaN(e = Ma(t[o])) ? --i : u += e;
    } else for (; ++o < r;) {
      isNaN(e = Ma(n(t[o], o, t))) ? --i : u += e;
    }if (i) return u / i;
  }, t.median = function (t, n) {
    var e,
        r = t.length,
        i = -1,
        o = [];if (null == n) for (; ++i < r;) {
      isNaN(e = Ma(t[i])) || o.push(e);
    } else for (; ++i < r;) {
      isNaN(e = Ma(n(t[i], i, t))) || o.push(e);
    }return Oa(o.sort(ya), .5);
  }, t.merge = Fa, t.min = Ia, t.pairs = function (t, e) {
    null == e && (e = n);for (var r = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i); r < i;) {
      u[r] = e(o, o = t[++r]);
    }return u;
  }, t.permute = function (t, n) {
    for (var e = n.length, r = new Array(e); e--;) {
      r[e] = t[n[e]];
    }return r;
  }, t.quantile = Oa, t.range = Pa, t.scan = function (t, n) {
    if (e = t.length) {
      var e,
          r,
          i = 0,
          o = 0,
          u = t[o];for (null == n && (n = ya); ++i < e;) {
        (n(r = t[i], u) < 0 || 0 !== n(u, u)) && (u = r, o = i);
      }return 0 === n(u, u) ? o : void 0;
    }
  }, t.shuffle = function (t, n, e) {
    for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) {
      i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
    }return t;
  }, t.sum = function (t, n) {
    var e,
        r = t.length,
        i = -1,
        o = 0;if (null == n) for (; ++i < r;) {
      (e = +t[i]) && (o += e);
    } else for (; ++i < r;) {
      (e = +n(t[i], i, t)) && (o += e);
    }return o;
  }, t.ticks = Da, t.tickIncrement = e, t.tickStep = r, t.transpose = Ya, t.variance = Ta, t.zip = function () {
    return Ya(arguments);
  }, t.axisTop = function (t) {
    return u(ja, t);
  }, t.axisRight = function (t) {
    return u(Xa, t);
  }, t.axisBottom = function (t) {
    return u(Va, t);
  }, t.axisLeft = function (t) {
    return u($a, t);
  }, t.brush = function () {
    return jt(qf);
  }, t.brushX = function () {
    return jt(Rf);
  }, t.brushY = function () {
    return jt(Lf);
  }, t.brushSelection = function (t) {
    var n = t.__brush;return n ? n.dim.output(n.selection) : null;
  }, t.chord = function () {
    function t(t) {
      var o,
          u,
          a,
          c,
          s,
          f,
          l = t.length,
          h = [],
          p = Pa(l),
          d = [],
          v = [],
          g = v.groups = new Array(l),
          _ = new Array(l * l);for (o = 0, s = -1; ++s < l;) {
        for (u = 0, f = -1; ++f < l;) {
          u += t[s][f];
        }h.push(u), d.push(Pa(l)), o += u;
      }for (e && p.sort(function (t, n) {
        return e(h[t], h[n]);
      }), r && d.forEach(function (n, e) {
        n.sort(function (n, i) {
          return r(t[e][n], t[e][i]);
        });
      }), c = (o = Vf(0, Xf - n * l) / o) ? n : Xf / l, u = 0, s = -1; ++s < l;) {
        for (a = u, f = -1; ++f < l;) {
          var y = p[s],
              m = d[y][f],
              x = t[y][m],
              b = u,
              w = u += x * o;_[m * l + y] = { index: y, subindex: m, startAngle: b, endAngle: w, value: x };
        }g[y] = { index: y, startAngle: a, endAngle: u, value: h[y] }, u += c;
      }for (s = -1; ++s < l;) {
        for (f = s - 1; ++f < l;) {
          var M = _[f * l + s],
              T = _[s * l + f];(M.value || T.value) && v.push(M.value < T.value ? { source: T, target: M } : { source: M, target: T });
        }
      }return i ? v.sort(i) : v;
    }var n = 0,
        e = null,
        r = null,
        i = null;return t.padAngle = function (e) {
      return arguments.length ? (n = Vf(0, e), t) : n;
    }, t.sortGroups = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.sortSubgroups = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.sortChords = function (n) {
      return arguments.length ? (null == n ? i = null : (i = function (t) {
        return function (n, e) {
          return t(n.source.value + n.target.value, e.source.value + e.target.value);
        };
      }(n))._ = n, t) : i && i._;
    }, t;
  }, t.ribbon = function () {
    function t() {
      var t,
          a = $f.call(arguments),
          c = n.apply(this, a),
          s = e.apply(this, a),
          f = +r.apply(this, (a[0] = c, a)),
          l = i.apply(this, a) - jf,
          h = o.apply(this, a) - jf,
          p = f * Yf(l),
          d = f * Bf(l),
          v = +r.apply(this, (a[0] = s, a)),
          g = i.apply(this, a) - jf,
          _ = o.apply(this, a) - jf;if (u || (u = t = Vt()), u.moveTo(p, d), u.arc(0, 0, f, l, h), l === g && h === _ || (u.quadraticCurveTo(0, 0, v * Yf(g), v * Bf(g)), u.arc(0, 0, v, g, _)), u.quadraticCurveTo(0, 0, p, d), u.closePath(), t) return u = null, t + "" || null;
    }var n = $t,
        e = Wt,
        r = Zt,
        i = Gt,
        o = Qt,
        u = null;return t.radius = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : Wf(+n), t) : r;
    }, t.startAngle = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Wf(+n), t) : i;
    }, t.endAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : Wf(+n), t) : o;
    }, t.source = function (e) {
      return arguments.length ? (n = e, t) : n;
    }, t.target = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.context = function (n) {
      return arguments.length ? (u = null == n ? null : n, t) : u;
    }, t;
  }, t.nest = function () {
    function t(n, i, u, a) {
      if (i >= o.length) return null != e && n.sort(e), null != r ? r(n) : n;for (var c, s, f, l = -1, h = n.length, p = o[i++], d = Kt(), v = u(); ++l < h;) {
        (f = d.get(c = p(s = n[l]) + "")) ? f.push(s) : d.set(c, [s]);
      }return d.each(function (n, e) {
        a(v, e, t(n, i, u, a));
      }), v;
    }function n(t, e) {
      if (++e > o.length) return t;var i,
          a = u[e - 1];return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function (t, r) {
        i.push({ key: r, values: n(t, e) });
      })), null != a ? i.sort(function (t, n) {
        return a(t.key, n.key);
      }) : i;
    }var e,
        r,
        i,
        o = [],
        u = [];return i = { object: function object(n) {
        return t(n, 0, tn, nn);
      }, map: function map(n) {
        return t(n, 0, en, rn);
      }, entries: function entries(e) {
        return n(t(e, 0, en, rn), 0);
      }, key: function key(t) {
        return o.push(t), i;
      }, sortKeys: function sortKeys(t) {
        return u[o.length - 1] = t, i;
      }, sortValues: function sortValues(t) {
        return e = t, i;
      }, rollup: function rollup(t) {
        return r = t, i;
      } };
  }, t.set = un, t.map = Kt, t.keys = function (t) {
    var n = [];for (var e in t) {
      n.push(e);
    }return n;
  }, t.values = function (t) {
    var n = [];for (var e in t) {
      n.push(t[e]);
    }return n;
  }, t.entries = function (t) {
    var n = [];for (var e in t) {
      n.push({ key: e, value: t[e] });
    }return n;
  }, t.color = O, t.rgb = B, t.hsl = X, t.lab = Z, t.hcl = nt, t.cubehelix = rt, t.dispatch = a, t.drag = function () {
    function n(t) {
      t.on("mousedown.drag", e).filter(y).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", c).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function e() {
      if (!p && v.apply(this, arguments)) {
        var n = s("mouse", g.apply(this, arguments), cc, this, arguments);n && (vc(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), yc(t.event.view), A(), h = !1, f = t.event.clientX, l = t.event.clientY, n("start"));
      }
    }function r() {
      if (_c(), !h) {
        var n = t.event.clientX - f,
            e = t.event.clientY - l;h = n * n + e * e > w;
      }m.mouse("drag");
    }function i() {
      vc(t.event.view).on("mousemove.drag mouseup.drag", null), C(t.event.view, h), _c(), m.mouse("end");
    }function o() {
      if (v.apply(this, arguments)) {
        var n,
            e,
            r = t.event.changedTouches,
            i = g.apply(this, arguments),
            o = r.length;for (n = 0; n < o; ++n) {
          (e = s(r[n].identifier, i, gc, this, arguments)) && (A(), e("start"));
        }
      }
    }function u() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (n = 0; n < i; ++n) {
        (e = m[r[n].identifier]) && (_c(), e("drag"));
      }
    }function c() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (p && clearTimeout(p), p = setTimeout(function () {
        p = null;
      }, 500), n = 0; n < i; ++n) {
        (e = m[r[n].identifier]) && (A(), e("end"));
      }
    }function s(e, r, i, o, u) {
      var a,
          c,
          s,
          f = i(r, e),
          l = x.copy();if (d(new z(n, "beforestart", a, e, b, f[0], f[1], 0, 0, l), function () {
        return null != (t.event.subject = a = _.apply(o, u)) && (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0);
      })) return function t(h) {
        var p,
            v = f;switch (h) {case "start":
            m[e] = t, p = b++;break;case "end":
            delete m[e], --b;case "drag":
            f = i(r, e), p = b;}d(new z(n, h, a, e, p, f[0] + c, f[1] + s, f[0] - v[0], f[1] - v[1], l), l.apply, l, [h, o, u]);
      };
    }var f,
        l,
        h,
        p,
        v = P,
        g = R,
        _ = L,
        y = q,
        m = {},
        x = a("start", "drag", "end"),
        b = 0,
        w = 0;return n.filter = function (t) {
      return arguments.length ? (v = "function" == typeof t ? t : mc(!!t), n) : v;
    }, n.container = function (t) {
      return arguments.length ? (g = "function" == typeof t ? t : mc(t), n) : g;
    }, n.subject = function (t) {
      return arguments.length ? (_ = "function" == typeof t ? t : mc(t), n) : _;
    }, n.touchable = function (t) {
      return arguments.length ? (y = "function" == typeof t ? t : mc(!!t), n) : y;
    }, n.on = function () {
      var t = x.on.apply(x, arguments);return t === x ? n : t;
    }, n.clickDistance = function (t) {
      return arguments.length ? (w = (t = +t) * t, n) : Math.sqrt(w);
    }, n;
  }, t.dragDisable = yc, t.dragEnable = C, t.dsvFormat = il, t.csvParse = ul, t.csvParseRows = al, t.csvFormat = cl, t.csvFormatRows = sl, t.tsvParse = ll, t.tsvParseRows = hl, t.tsvFormat = pl, t.tsvFormatRows = dl, t.easeLinear = function (t) {
    return +t;
  }, t.easeQuad = zt, t.easeQuadIn = function (t) {
    return t * t;
  }, t.easeQuadOut = function (t) {
    return t * (2 - t);
  }, t.easeQuadInOut = zt, t.easeCubic = Pt, t.easeCubicIn = function (t) {
    return t * t * t;
  }, t.easeCubicOut = function (t) {
    return --t * t * t + 1;
  }, t.easeCubicInOut = Pt, t.easePoly = rf, t.easePolyIn = nf, t.easePolyOut = ef, t.easePolyInOut = rf, t.easeSin = Rt, t.easeSinIn = function (t) {
    return 1 - Math.cos(t * uf);
  }, t.easeSinOut = function (t) {
    return Math.sin(t * uf);
  }, t.easeSinInOut = Rt, t.easeExp = Lt, t.easeExpIn = function (t) {
    return Math.pow(2, 10 * t - 10);
  }, t.easeExpOut = function (t) {
    return 1 - Math.pow(2, -10 * t);
  }, t.easeExpInOut = Lt, t.easeCircle = qt, t.easeCircleIn = function (t) {
    return 1 - Math.sqrt(1 - t * t);
  }, t.easeCircleOut = function (t) {
    return Math.sqrt(1 - --t * t);
  }, t.easeCircleInOut = qt, t.easeBounce = Dt, t.easeBounceIn = function (t) {
    return 1 - Dt(1 - t);
  }, t.easeBounceOut = Dt, t.easeBounceInOut = function (t) {
    return ((t *= 2) <= 1 ? 1 - Dt(1 - t) : Dt(t - 1) + 1) / 2;
  }, t.easeBack = mf, t.easeBackIn = _f, t.easeBackOut = yf, t.easeBackInOut = mf, t.easeElastic = wf, t.easeElasticIn = bf, t.easeElasticOut = wf, t.easeElasticInOut = Mf, t.forceCenter = function (t, n) {
    function e() {
      var e,
          i,
          o = r.length,
          u = 0,
          a = 0;for (e = 0; e < o; ++e) {
        u += (i = r[e]).x, a += i.y;
      }for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e) {
        (i = r[e]).x -= u, i.y -= a;
      }
    }var r;return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
      r = t;
    }, e.x = function (n) {
      return arguments.length ? (t = +n, e) : t;
    }, e.y = function (t) {
      return arguments.length ? (n = +t, e) : n;
    }, e;
  }, t.forceCollide = function (t) {
    function n() {
      for (var t, n, r, c, s, f, l, h = i.length, p = 0; p < a; ++p) {
        for (n = sn(i, hn, pn).visitAfter(e), t = 0; t < h; ++t) {
          r = i[t], f = o[r.index], l = f * f, c = r.x + r.vx, s = r.y + r.vy, n.visit(function (t, n, e, i, o) {
            var a = t.data,
                h = t.r,
                p = f + h;if (!a) return n > c + p || i < c - p || e > s + p || o < s - p;if (a.index > r.index) {
              var d = c - a.x - a.vx,
                  v = s - a.y - a.vy,
                  g = d * d + v * v;g < p * p && (0 === d && (d = gl(), g += d * d), 0 === v && (v = gl(), g += v * v), g = (p - (g = Math.sqrt(g))) / g * u, r.vx += (d *= g) * (p = (h *= h) / (l + h)), r.vy += (v *= g) * p, a.vx -= d * (p = 1 - p), a.vy -= v * p);
            }
          });
        }
      }
    }function e(t) {
      if (t.data) return t.r = o[t.data.index];for (var n = t.r = 0; n < 4; ++n) {
        t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
    }function r() {
      if (i) {
        var n,
            e,
            r = i.length;for (o = new Array(r), n = 0; n < r; ++n) {
          e = i[n], o[e.index] = +t(e, n, i);
        }
      }
    }var i,
        o,
        u = 1,
        a = 1;return "function" != typeof t && (t = vl(null == t ? 1 : +t)), n.initialize = function (t) {
      i = t, r();
    }, n.iterations = function (t) {
      return arguments.length ? (a = +t, n) : a;
    }, n.strength = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.radius = function (e) {
      return arguments.length ? (t = "function" == typeof e ? e : vl(+e), r(), n) : t;
    }, n;
  }, t.forceLink = function (t) {
    function n(n) {
      for (var e = 0, r = t.length; e < p; ++e) {
        for (var i, a, c, f, l, h, d, v = 0; v < r; ++v) {
          a = (i = t[v]).source, f = (c = i.target).x + c.vx - a.x - a.vx || gl(), l = c.y + c.vy - a.y - a.vy || gl(), f *= h = ((h = Math.sqrt(f * f + l * l)) - u[v]) / h * n * o[v], l *= h, c.vx -= f * (d = s[v]), c.vy -= l * d, a.vx += f * (d = 1 - d), a.vy += l * d;
        }
      }
    }function e() {
      if (a) {
        var n,
            e,
            l = a.length,
            h = t.length,
            p = Kt(a, f);for (n = 0, c = new Array(l); n < h; ++n) {
          (e = t[n]).index = n, "object" != _typeof(e.source) && (e.source = vn(p, e.source)), "object" != _typeof(e.target) && (e.target = vn(p, e.target)), c[e.source.index] = (c[e.source.index] || 0) + 1, c[e.target.index] = (c[e.target.index] || 0) + 1;
        }for (n = 0, s = new Array(h); n < h; ++n) {
          e = t[n], s[n] = c[e.source.index] / (c[e.source.index] + c[e.target.index]);
        }o = new Array(h), r(), u = new Array(h), i();
      }
    }function r() {
      if (a) for (var n = 0, e = t.length; n < e; ++n) {
        o[n] = +l(t[n], n, t);
      }
    }function i() {
      if (a) for (var n = 0, e = t.length; n < e; ++n) {
        u[n] = +h(t[n], n, t);
      }
    }var o,
        u,
        a,
        c,
        s,
        f = dn,
        l = function l(t) {
      return 1 / Math.min(c[t.source.index], c[t.target.index]);
    },
        h = vl(30),
        p = 1;return null == t && (t = []), n.initialize = function (t) {
      a = t, e();
    }, n.links = function (r) {
      return arguments.length ? (t = r, e(), n) : t;
    }, n.id = function (t) {
      return arguments.length ? (f = t, n) : f;
    }, n.iterations = function (t) {
      return arguments.length ? (p = +t, n) : p;
    }, n.strength = function (t) {
      return arguments.length ? (l = "function" == typeof t ? t : vl(+t), r(), n) : l;
    }, n.distance = function (t) {
      return arguments.length ? (h = "function" == typeof t ? t : vl(+t), i(), n) : h;
    }, n;
  }, t.forceManyBody = function () {
    function t(t) {
      var n,
          a = i.length,
          c = sn(i, gn, _n).visitAfter(e);for (u = t, n = 0; n < a; ++n) {
        o = i[n], c.visit(r);
      }
    }function n() {
      if (i) {
        var t,
            n,
            e = i.length;for (a = new Array(e), t = 0; t < e; ++t) {
          n = i[t], a[n.index] = +c(n, t, i);
        }
      }
    }function e(t) {
      var n,
          e,
          r,
          i,
          o,
          u = 0,
          c = 0;if (t.length) {
        for (r = i = o = 0; o < 4; ++o) {
          (n = t[o]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, i += e * n.y);
        }t.x = r / c, t.y = i / c;
      } else {
        (n = t).x = n.data.x, n.y = n.data.y;do {
          u += a[n.data.index];
        } while (n = n.next);
      }t.value = u;
    }function r(t, n, e, r) {
      if (!t.value) return !0;var i = t.x - o.x,
          c = t.y - o.y,
          h = r - n,
          p = i * i + c * c;if (h * h / l < p) return p < f && (0 === i && (i = gl(), p += i * i), 0 === c && (c = gl(), p += c * c), p < s && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;if (!(t.length || p >= f)) {
        (t.data !== o || t.next) && (0 === i && (i = gl(), p += i * i), 0 === c && (c = gl(), p += c * c), p < s && (p = Math.sqrt(s * p)));do {
          t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h);
        } while (t = t.next);
      }
    }var i,
        o,
        u,
        a,
        c = vl(-30),
        s = 1,
        f = 1 / 0,
        l = .81;return t.initialize = function (t) {
      i = t, n();
    }, t.strength = function (e) {
      return arguments.length ? (c = "function" == typeof e ? e : vl(+e), n(), t) : c;
    }, t.distanceMin = function (n) {
      return arguments.length ? (s = n * n, t) : Math.sqrt(s);
    }, t.distanceMax = function (n) {
      return arguments.length ? (f = n * n, t) : Math.sqrt(f);
    }, t.theta = function (n) {
      return arguments.length ? (l = n * n, t) : Math.sqrt(l);
    }, t;
  }, t.forceRadial = function (t, n, e) {
    function r(t) {
      for (var r = 0, i = o.length; r < i; ++r) {
        var c = o[r],
            s = c.x - n || 1e-6,
            f = c.y - e || 1e-6,
            l = Math.sqrt(s * s + f * f),
            h = (a[r] - l) * u[r] * t / l;c.vx += s * h, c.vy += f * h;
      }
    }function i() {
      if (o) {
        var n,
            e = o.length;for (u = new Array(e), a = new Array(e), n = 0; n < e; ++n) {
          a[n] = +t(o[n], n, o), u[n] = isNaN(a[n]) ? 0 : +c(o[n], n, o);
        }
      }
    }var o,
        u,
        a,
        c = vl(.1);return "function" != typeof t && (t = vl(+t)), null == n && (n = 0), null == e && (e = 0), r.initialize = function (t) {
      o = t, i();
    }, r.strength = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : vl(+t), i(), r) : c;
    }, r.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : vl(+n), i(), r) : t;
    }, r.x = function (t) {
      return arguments.length ? (n = +t, r) : n;
    }, r.y = function (t) {
      return arguments.length ? (e = +t, r) : e;
    }, r;
  }, t.forceSimulation = function (t) {
    function n() {
      e(), d.call("tick", o), u < c && (p.stop(), d.call("end", o));
    }function e() {
      var n,
          e,
          r = t.length;for (u += (f - u) * s, h.each(function (t) {
        t(u);
      }), n = 0; n < r; ++n) {
        null == (e = t[n]).fx ? e.x += e.vx *= l : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= l : (e.y = e.fy, e.vy = 0);
      }
    }function r() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
          var i = xl * Math.sqrt(e),
              o = e * bl;n.x = i * Math.cos(o), n.y = i * Math.sin(o);
        }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }function i(n) {
      return n.initialize && n.initialize(t), n;
    }var o,
        u = 1,
        c = .001,
        s = 1 - Math.pow(c, 1 / 300),
        f = 0,
        l = .6,
        h = Kt(),
        p = mt(n),
        d = a("tick", "end");return null == t && (t = []), r(), o = { tick: e, restart: function restart() {
        return p.restart(n), o;
      }, stop: function stop() {
        return p.stop(), o;
      }, nodes: function nodes(n) {
        return arguments.length ? (t = n, r(), h.each(i), o) : t;
      }, alpha: function alpha(t) {
        return arguments.length ? (u = +t, o) : u;
      }, alphaMin: function alphaMin(t) {
        return arguments.length ? (c = +t, o) : c;
      }, alphaDecay: function alphaDecay(t) {
        return arguments.length ? (s = +t, o) : +s;
      }, alphaTarget: function alphaTarget(t) {
        return arguments.length ? (f = +t, o) : f;
      }, velocityDecay: function velocityDecay(t) {
        return arguments.length ? (l = 1 - t, o) : 1 - l;
      }, force: function force(t, n) {
        return arguments.length > 1 ? (null == n ? h.remove(t) : h.set(t, i(n)), o) : h.get(t);
      }, find: function find(n, e, r) {
        var i,
            o,
            u,
            a,
            c,
            s = 0,
            f = t.length;for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s) {
          (u = (i = n - (a = t[s]).x) * i + (o = e - a.y) * o) < r && (c = a, r = u);
        }return c;
      }, on: function on(t, n) {
        return arguments.length > 1 ? (d.on(t, n), o) : d.on(t);
      } };
  }, t.forceX = function (t) {
    function n(t) {
      for (var n, e = 0, u = r.length; e < u; ++e) {
        (n = r[e]).vx += (o[e] - n.x) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        u = vl(.1);return "function" != typeof t && (t = vl(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : vl(+t), e(), n) : u;
    }, n.x = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : vl(+r), e(), n) : t;
    }, n;
  }, t.forceY = function (t) {
    function n(t) {
      for (var n, e = 0, u = r.length; e < u; ++e) {
        (n = r[e]).vy += (o[e] - n.y) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        u = vl(.1);return "function" != typeof t && (t = vl(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : vl(+t), e(), n) : u;
    }, n.y = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : vl(+r), e(), n) : t;
    }, n;
  }, t.formatDefaultLocale = xn, t.formatLocale = Cl, t.formatSpecifier = yn, t.precisionFixed = zl, t.precisionPrefix = Pl, t.precisionRound = Rl, t.geoArea = function (t) {
    return Dh.reset(), Lh(t, Uh), 2 * Dh;
  }, t.geoBounds = function (t) {
    var n, e, r, i, o, u, a;if (Hl = Bl = -(Il = Yl = 1 / 0), Wl = [], Lh(t, Fh), e = Wl.length) {
      for (Wl.sort(Zn), n = 1, o = [r = Wl[0]]; n < e; ++n) {
        Gn(r, (i = Wl[n])[0]) || Gn(r, i[1]) ? (Wn(r[0], i[1]) > Wn(r[0], r[1]) && (r[1] = i[1]), Wn(i[0], r[1]) > Wn(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
      }for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) {
        i = o[n], (a = Wn(r[1], i[0])) > u && (u = a, Il = i[0], Bl = r[1]);
      }
    }return Wl = Zl = null, Il === 1 / 0 || Yl === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Il, Yl], [Bl, Hl]];
  }, t.geoCentroid = function (t) {
    Gl = Ql = Jl = Kl = th = nh = eh = rh = ih = oh = uh = 0, Lh(t, Ih);var n = ih,
        e = oh,
        r = uh,
        i = n * n + e * e + r * r;return i < 1e-12 && (n = nh, e = eh, r = rh, Ql < ph && (n = Jl, e = Kl, r = th), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [wh(e, n) * yh, Tn(r / Ch(i)) * yh];
  }, t.geoCircle = function () {
    function t() {
      var t = r.apply(this, arguments),
          a = i.apply(this, arguments) * mh,
          c = o.apply(this, arguments) * mh;return n = [], e = ce(-t[0] * mh, -t[1] * mh, 0).invert, he(u, a, c, 1), t = { type: "Polygon", coordinates: [n] }, n = e = null, t;
    }var n,
        e,
        r = Yh([0, 0]),
        i = Yh(90),
        o = Yh(6),
        u = { point: function point(t, r) {
        n.push(t = e(t, r)), t[0] *= yh, t[1] *= yh;
      } };return t.center = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : Yh([+n[0], +n[1]]), t) : r;
    }, t.radius = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Yh(+n), t) : i;
    }, t.precision = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : Yh(+n), t) : o;
    }, t;
  }, t.geoClipAntimeridian = ap, t.geoClipCircle = cp, t.geoClipExtent = function () {
    var t,
        n,
        e,
        r = 0,
        i = 0,
        o = 960,
        u = 500;return e = { stream: function stream(e) {
        return t && n === e ? t : t = ye(r, i, o, u)(n = e);
      }, extent: function extent(a) {
        return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [[r, i], [o, u]];
      } };
  }, t.geoClipRectangle = ye, t.geoContains = function (t, n) {
    return (t && yp.hasOwnProperty(t.type) ? yp[t.type] : we)(t, n);
  }, t.geoDistance = _p, t.geoGraticule = Ce, t.geoGraticule10 = function () {
    return Ce()();
  }, t.geoInterpolate = function (t, n) {
    var e = t[0] * mh,
        r = t[1] * mh,
        i = n[0] * mh,
        o = n[1] * mh,
        u = Mh(r),
        a = Eh(r),
        c = Mh(o),
        s = Eh(o),
        f = u * Mh(e),
        l = u * Eh(e),
        h = c * Mh(i),
        p = c * Eh(i),
        d = 2 * Tn(Ch(Nn(o - r) + u * c * Nn(i - e))),
        v = Eh(d),
        g = d ? function (t) {
      var n = Eh(t *= d) / v,
          e = Eh(d - t) / v,
          r = e * f + n * h,
          i = e * l + n * p,
          o = e * a + n * s;return [wh(i, r) * yh, wh(o, Ch(r * r + i * i)) * yh];
    } : function () {
      return [e * yh, r * yh];
    };return g.distance = d, g;
  }, t.geoLength = dp, t.geoPath = function (t, n) {
    function e(t) {
      return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), Lh(t, r(i))), i.result();
    }var r,
        i,
        o = 4.5;return e.area = function (t) {
      return Lh(t, r(Mp)), Mp.result();
    }, e.measure = function (t) {
      return Lh(t, r(Xp)), Xp.result();
    }, e.bounds = function (t) {
      return Lh(t, r(Ep)), Ep.result();
    }, e.centroid = function (t) {
      return Lh(t, r(Op)), Op.result();
    }, e.projection = function (n) {
      return arguments.length ? (r = null == n ? (t = null, xp) : (t = n).stream, e) : t;
    }, e.context = function (t) {
      return arguments.length ? (i = null == t ? (n = null, new $e()) : new je(n = t), "function" != typeof o && i.pointRadius(o), e) : n;
    }, e.pointRadius = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o;
    }, e.projection(t).context(n);
  }, t.geoAlbers = Qp, t.geoAlbersUsa = function () {
    function t(t) {
      var n = t[0],
          e = t[1];return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a);
    }function n() {
      return e = r = null, t;
    }var e,
        r,
        i,
        o,
        u,
        a,
        c = Qp(),
        s = Gp().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        f = Gp().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        l = { point: function point(t, n) {
        a = [t, n];
      } };return t.invert = function (t) {
      var n = c.scale(),
          e = c.translate(),
          r = (t[0] - e[0]) / n,
          i = (t[1] - e[1]) / n;return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t);
    }, t.stream = function (t) {
      return e && r === t ? e : e = function (t) {
        var n = t.length;return { point: function point(e, r) {
            for (var i = -1; ++i < n;) {
              t[i].point(e, r);
            }
          }, sphere: function sphere() {
            for (var e = -1; ++e < n;) {
              t[e].sphere();
            }
          }, lineStart: function lineStart() {
            for (var e = -1; ++e < n;) {
              t[e].lineStart();
            }
          }, lineEnd: function lineEnd() {
            for (var e = -1; ++e < n;) {
              t[e].lineEnd();
            }
          }, polygonStart: function polygonStart() {
            for (var e = -1; ++e < n;) {
              t[e].polygonStart();
            }
          }, polygonEnd: function polygonEnd() {
            for (var e = -1; ++e < n;) {
              t[e].polygonEnd();
            }
          } };
      }([c.stream(r = t), s.stream(t), f.stream(t)]);
    }, t.precision = function (t) {
      return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision();
    }, t.scale = function (n) {
      return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale();
    }, t.translate = function (t) {
      if (!arguments.length) return c.translate();var e = c.scale(),
          r = +t[0],
          a = +t[1];return i = c.translate(t).clipExtent([[r - .455 * e, a - .238 * e], [r + .455 * e, a + .238 * e]]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([[r - .425 * e + ph, a + .12 * e + ph], [r - .214 * e - ph, a + .234 * e - ph]]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([[r - .214 * e + ph, a + .166 * e + ph], [r - .115 * e - ph, a + .234 * e - ph]]).stream(l), n();
    }, t.fitExtent = function (n, e) {
      return Je(t, n, e);
    }, t.fitSize = function (n, e) {
      return Ke(t, n, e);
    }, t.fitWidth = function (n, e) {
      return tr(t, n, e);
    }, t.fitHeight = function (n, e) {
      return nr(t, n, e);
    }, t.scale(1070);
  }, t.geoAzimuthalEqualArea = function () {
    return er(Jp).scale(124.75).clipAngle(179.999);
  }, t.geoAzimuthalEqualAreaRaw = Jp, t.geoAzimuthalEquidistant = function () {
    return er(Kp).scale(79.4188).clipAngle(179.999);
  }, t.geoAzimuthalEquidistantRaw = Kp, t.geoConicConformal = function () {
    return ir(lr).scale(109.5).parallels([30, 30]);
  }, t.geoConicConformalRaw = lr, t.geoConicEqualArea = Gp, t.geoConicEqualAreaRaw = or, t.geoConicEquidistant = function () {
    return ir(pr).scale(131.154).center([0, 13.9389]);
  }, t.geoConicEquidistantRaw = pr, t.geoEquirectangular = function () {
    return er(hr).scale(152.63);
  }, t.geoEquirectangularRaw = hr, t.geoGnomonic = function () {
    return er(dr).scale(144.049).clipAngle(60);
  }, t.geoGnomonicRaw = dr, t.geoIdentity = function () {
    function t() {
      return i = o = null, u;
    }var n,
        e,
        r,
        i,
        o,
        u,
        a = 1,
        c = 0,
        s = 0,
        f = 1,
        l = 1,
        h = xp,
        p = null,
        d = xp;return u = { stream: function stream(t) {
        return i && o === t ? i : i = h(d(o = t));
      }, postclip: function postclip(i) {
        return arguments.length ? (d = i, p = n = e = r = null, t()) : d;
      }, clipExtent: function clipExtent(i) {
        return arguments.length ? (d = null == i ? (p = n = e = r = null, xp) : ye(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == p ? null : [[p, n], [e, r]];
      }, scale: function scale(n) {
        return arguments.length ? (h = vr((a = +n) * f, a * l, c, s), t()) : a;
      }, translate: function translate(n) {
        return arguments.length ? (h = vr(a * f, a * l, c = +n[0], s = +n[1]), t()) : [c, s];
      }, reflectX: function reflectX(n) {
        return arguments.length ? (h = vr(a * (f = n ? -1 : 1), a * l, c, s), t()) : f < 0;
      }, reflectY: function reflectY(n) {
        return arguments.length ? (h = vr(a * f, a * (l = n ? -1 : 1), c, s), t()) : l < 0;
      }, fitExtent: function fitExtent(t, n) {
        return Je(u, t, n);
      }, fitSize: function fitSize(t, n) {
        return Ke(u, t, n);
      }, fitWidth: function fitWidth(t, n) {
        return tr(u, t, n);
      }, fitHeight: function fitHeight(t, n) {
        return nr(u, t, n);
      } };
  }, t.geoProjection = er, t.geoProjectionMutator = rr, t.geoMercator = function () {
    return sr(cr).scale(961 / _h);
  }, t.geoMercatorRaw = cr, t.geoNaturalEarth1 = function () {
    return er(gr).scale(175.295);
  }, t.geoNaturalEarth1Raw = gr, t.geoOrthographic = function () {
    return er(_r).scale(249.5).clipAngle(90 + ph);
  }, t.geoOrthographicRaw = _r, t.geoStereographic = function () {
    return er(yr).scale(250).clipAngle(142);
  }, t.geoStereographicRaw = yr, t.geoTransverseMercator = function () {
    var t = sr(mr),
        n = t.center,
        e = t.rotate;return t.center = function (t) {
      return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]]);
    }, t.rotate = function (t) {
      return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90]);
    }, e([0, 0, 90]).scale(159.155);
  }, t.geoTransverseMercatorRaw = mr, t.geoRotation = tp, t.geoStream = Lh, t.geoTransform = function (t) {
    return { stream: Ze(t) };
  }, t.cluster = function () {
    function t(t) {
      var o,
          u = 0;t.eachAfter(function (t) {
        var e = t.children;e ? (t.x = function (t) {
          return t.reduce(br, 0) / t.length;
        }(e), t.y = function (t) {
          return 1 + t.reduce(wr, 0);
        }(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t);
      });var a = function (t) {
        for (var n; n = t.children;) {
          t = n[0];
        }return t;
      }(t),
          c = function (t) {
        for (var n; n = t.children;) {
          t = n[n.length - 1];
        }return t;
      }(t),
          s = a.x - n(a, c) / 2,
          f = c.x + n(c, a) / 2;return t.eachAfter(i ? function (n) {
        n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r;
      } : function (n) {
        n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r;
      });
    }var n = xr,
        e = 1,
        r = 1,
        i = !1;return t.separation = function (e) {
      return arguments.length ? (n = e, t) : n;
    }, t.size = function (n) {
      return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r];
    }, t.nodeSize = function (n) {
      return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null;
    }, t;
  }, t.hierarchy = Tr, t.pack = function () {
    function t(t) {
      return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Br(n)).eachAfter(Hr(i, .5)).eachBefore(jr(1)) : t.eachBefore(Br(Yr)).eachAfter(Hr(Ir, 1)).eachAfter(Hr(i, t.r / Math.min(e, r))).eachBefore(jr(Math.min(e, r) / (2 * t.r))), t;
    }var n = null,
        e = 1,
        r = 1,
        i = Ir;return t.radius = function (e) {
      return arguments.length ? (n = null == e ? null : Fr(e), t) : n;
    }, t.size = function (n) {
      return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r];
    }, t.padding = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ed(+n), t) : i;
    }, t;
  }, t.packSiblings = function (t) {
    return Or(t), t;
  }, t.packEnclose = nd, t.partition = function () {
    function t(t) {
      var o = t.height + 1;return t.x0 = t.y0 = r, t.x1 = n, t.y1 = e / o, t.eachBefore(function (t, n) {
        return function (e) {
          e.children && id(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);var i = e.x0,
              o = e.y0,
              u = e.x1 - r,
              a = e.y1 - r;u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = i, e.y0 = o, e.x1 = u, e.y1 = a;
        };
      }(e, o)), i && t.eachBefore(rd), t;
    }var n = 1,
        e = 1,
        r = 0,
        i = !1;return t.round = function (n) {
      return arguments.length ? (i = !!n, t) : i;
    }, t.size = function (r) {
      return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e];
    }, t.padding = function (n) {
      return arguments.length ? (r = +n, t) : r;
    }, t;
  }, t.stratify = function () {
    function t(t) {
      var r,
          i,
          o,
          u,
          a,
          c,
          s,
          f = t.length,
          l = new Array(f),
          h = {};for (i = 0; i < f; ++i) {
        r = t[i], a = l[i] = new Er(r), null != (c = n(r, i, t)) && (c += "") && (h[s = od + (a.id = c)] = s in h ? ad : a);
      }for (i = 0; i < f; ++i) {
        if (a = l[i], null != (c = e(t[i], i, t)) && (c += "")) {
          if (!(u = h[od + c])) throw new Error("missing: " + c);if (u === ad) throw new Error("ambiguous: " + c);u.children ? u.children.push(a) : u.children = [a], a.parent = u;
        } else {
          if (o) throw new Error("multiple roots");o = a;
        }
      }if (!o) throw new Error("no root");if (o.parent = ud, o.eachBefore(function (t) {
        t.depth = t.parent.depth + 1, --f;
      }).eachBefore(Sr), o.parent = null, f > 0) throw new Error("cycle");return o;
    }var n = Xr,
        e = Vr;return t.id = function (e) {
      return arguments.length ? (n = Fr(e), t) : n;
    }, t.parentId = function (n) {
      return arguments.length ? (e = Fr(n), t) : e;
    }, t;
  }, t.tree = function () {
    function t(t) {
      var c = function (t) {
        for (var n, e, r, i, o, u = new Jr(t, 0), a = [u]; n = a.pop();) {
          if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) {
            a.push(e = n.children[i] = new Jr(r[i], i)), e.parent = n;
          }
        }return (u.parent = new Jr(null, 0)).children = [u], u;
      }(t);if (c.eachAfter(n), c.parent.m = -c.z, c.eachBefore(e), a) t.eachBefore(r);else {
        var s = t,
            f = t,
            l = t;t.eachBefore(function (t) {
          t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t);
        });var h = s === f ? 1 : i(s, f) / 2,
            p = h - s.x,
            d = o / (f.x + h + p),
            v = u / (l.depth || 1);t.eachBefore(function (t) {
          t.x = (t.x + p) * d, t.y = t.depth * v;
        });
      }return t;
    }function n(t) {
      var n = t.children,
          e = t.parent.children,
          r = t.i ? e[t.i - 1] : null;if (n) {
        (function (t) {
          for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) {
            (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c);
          }
        })(t);var o = (n[0].z + n[n.length - 1].z) / 2;r ? (t.z = r.z + i(t._, r._), t.m = t.z - o) : t.z = o;
      } else r && (t.z = r.z + i(t._, r._));t.parent.A = function (t, n, e) {
        if (n) {
          for (var r, o = t, u = t, a = n, c = o.parent.children[0], s = o.m, f = u.m, l = a.m, h = c.m; a = Zr(a), o = Wr(o), a && o;) {
            c = Wr(c), (u = Zr(u)).a = t, (r = a.z + l - o.z - s + i(a._, o._)) > 0 && (Gr(Qr(a, t, e), t, r), s += r, f += r), l += a.m, s += o.m, h += c.m, f += u.m;
          }a && !Zr(u) && (u.t = a, u.m += l - f), o && !Wr(c) && (c.t = o, c.m += s - h, e = t);
        }return e;
      }(t, r, t.parent.A || e[0]);
    }function e(t) {
      t._.x = t.z + t.parent.m, t.m += t.parent.m;
    }function r(t) {
      t.x *= o, t.y = t.depth * u;
    }var i = $r,
        o = 1,
        u = 1,
        a = null;return t.separation = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.size = function (n) {
      return arguments.length ? (a = !1, o = +n[0], u = +n[1], t) : a ? null : [o, u];
    }, t.nodeSize = function (n) {
      return arguments.length ? (a = !0, o = +n[0], u = +n[1], t) : a ? [o, u] : null;
    }, t;
  }, t.treemap = function () {
    function t(t) {
      return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(rd), t;
    }function n(t) {
      var n = u[t.depth],
          r = t.x0 + n,
          i = t.y0 + n,
          o = t.x1 - n,
          h = t.y1 - n;o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h));
    }var e = fd,
        r = !1,
        i = 1,
        o = 1,
        u = [0],
        a = Ir,
        c = Ir,
        s = Ir,
        f = Ir,
        l = Ir;return t.round = function (n) {
      return arguments.length ? (r = !!n, t) : r;
    }, t.size = function (n) {
      return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o];
    }, t.tile = function (n) {
      return arguments.length ? (e = Fr(n), t) : e;
    }, t.padding = function (n) {
      return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner();
    }, t.paddingInner = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : ed(+n), t) : a;
    }, t.paddingOuter = function (n) {
      return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop();
    }, t.paddingTop = function (n) {
      return arguments.length ? (c = "function" == typeof n ? n : ed(+n), t) : c;
    }, t.paddingRight = function (n) {
      return arguments.length ? (s = "function" == typeof n ? n : ed(+n), t) : s;
    }, t.paddingBottom = function (n) {
      return arguments.length ? (f = "function" == typeof n ? n : ed(+n), t) : f;
    }, t.paddingLeft = function (n) {
      return arguments.length ? (l = "function" == typeof n ? n : ed(+n), t) : l;
    }, t;
  }, t.treemapBinary = function (t, n, e, r, i) {
    function o(t, n, e, r, i, u, a) {
      if (t >= n - 1) {
        var s = c[t];return s.x0 = r, s.y0 = i, s.x1 = u, void (s.y1 = a);
      }for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
        var v = p + d >>> 1;f[v] < h ? p = v + 1 : d = v;
      }h - f[p - 1] < f[p] - h && t + 1 < p && --p;var g = f[p] - l,
          _ = e - g;if (u - r > a - i) {
        var y = (r * _ + u * g) / e;o(t, p, g, r, i, y, a), o(p, n, _, y, i, u, a);
      } else {
        var m = (i * _ + a * g) / e;o(t, p, g, r, i, u, m), o(p, n, _, r, m, u, a);
      }
    }var u,
        a,
        c = t.children,
        s = c.length,
        f = new Array(s + 1);for (f[0] = a = u = 0; u < s; ++u) {
      f[u + 1] = a += c[u].value;
    }o(0, s, t.value, n, e, r, i);
  }, t.treemapDice = id, t.treemapSlice = cd, t.treemapSliceDice = function (t, n, e, r, i) {
    (1 & t.depth ? cd : id)(t, n, e, r, i);
  }, t.treemapSquarify = fd, t.treemapResquarify = ld, t.interpolate = vs, t.interpolateArray = cs, t.interpolateBasis = es, t.interpolateBasisClosed = rs, t.interpolateDate = ss, t.interpolateNumber = fs, t.interpolateObject = ls, t.interpolateRound = gs, t.interpolateString = ds, t.interpolateTransformCss = xs, t.interpolateTransformSvg = bs, t.interpolateZoom = Ms, t.interpolateRgb = os, t.interpolateRgbBasis = us, t.interpolateRgbBasisClosed = as, t.interpolateHsl = Ts, t.interpolateHslLong = Ns, t.interpolateLab = function (t, n) {
    var e = st((t = Z(t)).l, (n = Z(n)).l),
        r = st(t.a, n.a),
        i = st(t.b, n.b),
        o = st(t.opacity, n.opacity);return function (n) {
      return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "";
    };
  }, t.interpolateHcl = ks, t.interpolateHclLong = Ss, t.interpolateCubehelix = Es, t.interpolateCubehelixLong = As, t.quantize = function (t, n) {
    for (var e = new Array(n), r = 0; r < n; ++r) {
      e[r] = t(r / (n - 1));
    }return e;
  }, t.path = Vt, t.polygonArea = function (t) {
    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) {
      n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
    }return o / 2;
  }, t.polygonCentroid = function (t) {
    for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) {
      n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
    }return c *= 3, [o / c, u / c];
  }, t.polygonHull = function (t) {
    if ((e = t.length) < 3) return null;var n,
        e,
        r = new Array(e),
        i = new Array(e);for (n = 0; n < e; ++n) {
      r[n] = [+t[n][0], +t[n][1], n];
    }for (r.sort(ti), n = 0; n < e; ++n) {
      i[n] = [r[n][0], -r[n][1]];
    }var o = ni(r),
        u = ni(i),
        a = u[0] === o[0],
        c = u[u.length - 1] === o[o.length - 1],
        s = [];for (n = o.length - 1; n >= 0; --n) {
      s.push(t[r[o[n]][2]]);
    }for (n = +a; n < u.length - c; ++n) {
      s.push(t[r[u[n]][2]]);
    }return s;
  }, t.polygonContains = function (t, n) {
    for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; l < i; ++l) {
      e = (o = t[l])[0], (r = o[1]) > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r;
    }return f;
  }, t.polygonLength = function (t) {
    for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) {
      n = u, e = a, n -= u = (o = t[r])[0], e -= a = o[1], c += Math.sqrt(n * n + e * e);
    }return c;
  }, t.quadtree = sn, t.queue = ui, t.randomUniform = gd, t.randomNormal = _d, t.randomLogNormal = yd, t.randomBates = xd, t.randomIrwinHall = md, t.randomExponential = bd, t.request = wd, t.html = Td, t.json = Nd, t.text = kd, t.xml = Sd, t.csv = Ad, t.tsv = Cd, t.scaleBand = ci, t.scalePoint = function () {
    return si(ci().paddingInner(1));
  }, t.scaleIdentity = vi, t.scaleLinear = di, t.scaleLog = bi, t.scaleOrdinal = ai, t.scaleImplicit = Ld, t.scalePow = Mi, t.scaleSqrt = function () {
    return Mi().exponent(.5);
  }, t.scaleQuantile = Ti, t.scaleQuantize = Ni, t.scaleThreshold = ki, t.scaleTime = function () {
    return jo(gv, dv, tv, Jd, Gd, Wd, Vd, Bd, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
  }, t.scaleUtc = function () {
    return jo(Iv, Ov, Tv, wv, xv, yv, Vd, Bd, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
  }, t.schemeCategory10 = rg, t.schemeCategory20b = ig, t.schemeCategory20c = og, t.schemeCategory20 = ug, t.interpolateCubehelixDefault = ag, t.interpolateRainbow = function (t) {
    (t < 0 || t > 1) && (t -= Math.floor(t));var n = Math.abs(t - .5);return fg.h = 360 * t - 100, fg.s = 1.5 - 1.5 * n, fg.l = .8 - .9 * n, fg + "";
  }, t.interpolateWarm = cg, t.interpolateCool = sg, t.interpolateViridis = lg, t.interpolateMagma = hg, t.interpolateInferno = pg, t.interpolatePlasma = dg, t.scaleSequential = Vo, t.creator = Ka, t.local = f, t.matcher = ic, t.mouse = cc, t.namespace = Ja, t.namespaces = Qa, t.clientPoint = ac, t.select = vc, t.selectAll = function (t) {
    return "string" == typeof t ? new S([document.querySelectorAll(t)], [document.documentElement]) : new S([null == t ? [] : t], dc);
  }, t.selection = E, t.selector = sc, t.selectorAll = fc, t.style = _, t.touch = gc, t.touches = function (t, n) {
    null == n && (n = uc().touches);for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) {
      i[e] = ac(t, n[e]);
    }return i;
  }, t.window = pc, t.customEvent = d, t.arc = function () {
    function t() {
      var t,
          s,
          f = +n.apply(this, arguments),
          l = +e.apply(this, arguments),
          h = o.apply(this, arguments) - Ng,
          p = u.apply(this, arguments) - Ng,
          d = gg(p - h),
          v = p > h;if (c || (c = t = Vt()), l < f && (s = l, l = f, f = s), l > Mg) {
        if (d > kg - Mg) c.moveTo(l * yg(h), l * bg(h)), c.arc(0, 0, l, h, p, !v), f > Mg && (c.moveTo(f * yg(p), f * bg(p)), c.arc(0, 0, f, p, h, v));else {
          var g,
              _,
              y = h,
              m = p,
              x = h,
              b = p,
              w = d,
              M = d,
              T = a.apply(this, arguments) / 2,
              N = T > Mg && (i ? +i.apply(this, arguments) : wg(f * f + l * l)),
              k = xg(gg(l - f) / 2, +r.apply(this, arguments)),
              S = k,
              E = k;if (N > Mg) {
            var A = $o(N / f * bg(T)),
                C = $o(N / l * bg(T));(w -= 2 * A) > Mg ? (A *= v ? 1 : -1, x += A, b -= A) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > Mg ? (C *= v ? 1 : -1, y += C, m -= C) : (M = 0, y = m = (h + p) / 2);
          }var z = l * yg(y),
              P = l * bg(y),
              R = f * yg(b),
              L = f * bg(b);if (k > Mg) {
            var q = l * yg(m),
                D = l * bg(m),
                U = f * yg(x),
                O = f * bg(x);if (d < Tg) {
              var F = w > Mg ? function (t, n, e, r, i, o, u, a) {
                var c = U - z,
                    s = O - P,
                    f = u - q,
                    l = a - D,
                    h = (f * (P - D) - l * (z - q)) / (l * c - f * s);return [z + h * c, P + h * s];
              }(0, 0, 0, 0, 0, 0, R, L) : [R, L],
                  I = z - F[0],
                  Y = P - F[1],
                  B = q - F[0],
                  H = D - F[1],
                  j = 1 / bg(function (t) {
                return t > 1 ? 0 : t < -1 ? Tg : Math.acos(t);
              }((I * B + Y * H) / (wg(I * I + Y * Y) * wg(B * B + H * H))) / 2),
                  X = wg(F[0] * F[0] + F[1] * F[1]);S = xg(k, (f - X) / (j - 1)), E = xg(k, (l - X) / (j + 1));
            }
          }M > Mg ? E > Mg ? (g = Ko(U, O, z, P, l, E, v), _ = Ko(q, D, R, L, l, E, v), c.moveTo(g.cx + g.x01, g.cy + g.y01), E < k ? c.arc(g.cx, g.cy, E, _g(g.y01, g.x01), _g(_.y01, _.x01), !v) : (c.arc(g.cx, g.cy, E, _g(g.y01, g.x01), _g(g.y11, g.x11), !v), c.arc(0, 0, l, _g(g.cy + g.y11, g.cx + g.x11), _g(_.cy + _.y11, _.cx + _.x11), !v), c.arc(_.cx, _.cy, E, _g(_.y11, _.x11), _g(_.y01, _.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, y, m, !v)) : c.moveTo(z, P), f > Mg && w > Mg ? S > Mg ? (g = Ko(R, L, q, D, f, -S, v), _ = Ko(z, P, U, O, f, -S, v), c.lineTo(g.cx + g.x01, g.cy + g.y01), S < k ? c.arc(g.cx, g.cy, S, _g(g.y01, g.x01), _g(_.y01, _.x01), !v) : (c.arc(g.cx, g.cy, S, _g(g.y01, g.x01), _g(g.y11, g.x11), !v), c.arc(0, 0, f, _g(g.cy + g.y11, g.cx + g.x11), _g(_.cy + _.y11, _.cx + _.x11), v), c.arc(_.cx, _.cy, S, _g(_.y11, _.x11), _g(_.y01, _.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(R, L);
        }
      } else c.moveTo(0, 0);if (c.closePath(), t) return c = null, t + "" || null;
    }var n = Wo,
        e = Zo,
        r = vg(0),
        i = null,
        o = Go,
        u = Qo,
        a = Jo,
        c = null;return t.centroid = function () {
      var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
          r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Tg / 2;return [yg(r) * t, bg(r) * t];
    }, t.innerRadius = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : vg(+e), t) : n;
    }, t.outerRadius = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : vg(+n), t) : e;
    }, t.cornerRadius = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : vg(+n), t) : r;
    }, t.padRadius = function (n) {
      return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : vg(+n), t) : i;
    }, t.startAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : vg(+n), t) : o;
    }, t.endAngle = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : vg(+n), t) : u;
    }, t.padAngle = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : vg(+n), t) : a;
    }, t.context = function (n) {
      return arguments.length ? (c = null == n ? null : n, t) : c;
    }, t;
  }, t.area = Ag, t.line = Eg, t.pie = function () {
    function t(t) {
      var a,
          c,
          s,
          f,
          l,
          h = t.length,
          p = 0,
          d = new Array(h),
          v = new Array(h),
          g = +i.apply(this, arguments),
          _ = Math.min(kg, Math.max(-kg, o.apply(this, arguments) - g)),
          y = Math.min(Math.abs(_) / h, u.apply(this, arguments)),
          m = y * (_ < 0 ? -1 : 1);for (a = 0; a < h; ++a) {
        (l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
      }for (null != e ? d.sort(function (t, n) {
        return e(v[t], v[n]);
      }) : null != r && d.sort(function (n, e) {
        return r(t[n], t[e]);
      }), a = 0, s = p ? (_ - h * m) / p : 0; a < h; ++a, g = f) {
        c = d[a], f = g + ((l = v[c]) > 0 ? l * s : 0) + m, v[c] = { data: t[c], index: a, value: l, startAngle: g, endAngle: f, padAngle: y };
      }return v;
    }var n = zg,
        e = Cg,
        r = null,
        i = vg(0),
        o = vg(kg),
        u = vg(0);return t.value = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : vg(+e), t) : n;
    }, t.sortValues = function (n) {
      return arguments.length ? (e = n, r = null, t) : e;
    }, t.sort = function (n) {
      return arguments.length ? (r = n, e = null, t) : r;
    }, t.startAngle = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : vg(+n), t) : i;
    }, t.endAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : vg(+n), t) : o;
    }, t.padAngle = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : vg(+n), t) : u;
    }, t;
  }, t.areaRadial = Lg, t.radialArea = Lg, t.lineRadial = Rg, t.radialLine = Rg, t.pointRadial = qg, t.linkHorizontal = function () {
    return cu(su);
  }, t.linkVertical = function () {
    return cu(fu);
  }, t.linkRadial = function () {
    var t = cu(lu);return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
  }, t.symbol = function () {
    function t() {
      var t;if (r || (r = t = Vt()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null;
    }var n = vg(Ug),
        e = vg(64),
        r = null;return t.type = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : vg(e), t) : n;
    }, t.size = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : vg(+n), t) : e;
    }, t.context = function (n) {
      return arguments.length ? (r = null == n ? null : n, t) : r;
    }, t;
  }, t.symbols = t_, t.symbolCircle = Ug, t.symbolCross = Og, t.symbolDiamond = Yg, t.symbolSquare = Vg, t.symbolStar = Xg, t.symbolTriangle = Wg, t.symbolWye = Kg, t.curveBasisClosed = function (t) {
    return new du(t);
  }, t.curveBasisOpen = function (t) {
    return new vu(t);
  }, t.curveBasis = function (t) {
    return new pu(t);
  }, t.curveBundle = e_, t.curveCardinalClosed = i_, t.curveCardinalOpen = o_, t.curveCardinal = r_, t.curveCatmullRomClosed = a_, t.curveCatmullRomOpen = c_, t.curveCatmullRom = u_, t.curveLinearClosed = function (t) {
    return new Nu(t);
  }, t.curveLinear = Sg, t.curveMonotoneX = function (t) {
    return new Cu(t);
  }, t.curveMonotoneY = function (t) {
    return new zu(t);
  }, t.curveNatural = function (t) {
    return new Ru(t);
  }, t.curveStep = function (t) {
    return new qu(t, .5);
  }, t.curveStepAfter = function (t) {
    return new qu(t, 1);
  }, t.curveStepBefore = function (t) {
    return new qu(t, 0);
  }, t.stack = function () {
    function t(t) {
      var o,
          u,
          a = n.apply(this, arguments),
          c = t.length,
          s = a.length,
          f = new Array(s);for (o = 0; o < s; ++o) {
        for (var l, h = a[o], p = f[o] = new Array(c), d = 0; d < c; ++d) {
          p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
        }p.key = h;
      }for (o = 0, u = e(f); o < s; ++o) {
        f[u[o]].index = o;
      }return r(f, u), f;
    }var n = vg([]),
        e = f_,
        r = s_,
        i = Du;return t.keys = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : vg(Dg.call(e)), t) : n;
    }, t.value = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : vg(+n), t) : i;
    }, t.order = function (n) {
      return arguments.length ? (e = null == n ? f_ : "function" == typeof n ? n : vg(Dg.call(n)), t) : e;
    }, t.offset = function (n) {
      return arguments.length ? (r = null == n ? s_ : n, t) : r;
    }, t;
  }, t.stackOffsetExpand = function (t, n) {
    if ((r = t.length) > 0) {
      for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
        for (i = e = 0; e < r; ++e) {
          i += t[e][o][1] || 0;
        }if (i) for (e = 0; e < r; ++e) {
          t[e][o][1] /= i;
        }
      }s_(t, n);
    }
  }, t.stackOffsetDiverging = function (t, n) {
    if ((a = t.length) > 1) for (var e, r, i, o, u, a, c = 0, s = t[n[0]].length; c < s; ++c) {
      for (o = u = 0, e = 0; e < a; ++e) {
        (i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = o;
      }
    }
  }, t.stackOffsetNone = s_, t.stackOffsetSilhouette = function (t, n) {
    if ((e = t.length) > 0) {
      for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
        for (var u = 0, a = 0; u < e; ++u) {
          a += t[u][r][1] || 0;
        }i[r][1] += i[r][0] = -a / 2;
      }s_(t, n);
    }
  }, t.stackOffsetWiggle = function (t, n) {
    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
      for (var e, r, i, o = 0, u = 1; u < r; ++u) {
        for (var a = 0, c = 0, s = 0; a < i; ++a) {
          for (var f = t[n[a]], l = f[u][1] || 0, h = (l - (f[u - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
            var d = t[n[p]];h += (d[u][1] || 0) - (d[u - 1][1] || 0);
          }c += l, s += h * l;
        }e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c);
      }e[u - 1][1] += e[u - 1][0] = o, s_(t, n);
    }
  }, t.stackOrderAscending = l_, t.stackOrderDescending = function (t) {
    return l_(t).reverse();
  }, t.stackOrderInsideOut = function (t) {
    var n,
        e,
        r = t.length,
        i = t.map(Uu),
        o = f_(t).sort(function (t, n) {
      return i[n] - i[t];
    }),
        u = 0,
        a = 0,
        c = [],
        s = [];for (n = 0; n < r; ++n) {
      e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
    }return s.reverse().concat(c);
  }, t.stackOrderNone = f_, t.stackOrderReverse = function (t) {
    return f_(t).reverse();
  }, t.timeInterval = Si, t.timeMillisecond = Bd, t.timeMilliseconds = Hd, t.utcMillisecond = Bd, t.utcMilliseconds = Hd, t.timeSecond = Vd, t.timeSeconds = $d, t.utcSecond = Vd, t.utcSeconds = $d, t.timeMinute = Wd, t.timeMinutes = Zd, t.timeHour = Gd, t.timeHours = Qd, t.timeDay = Jd, t.timeDays = Kd, t.timeWeek = tv, t.timeWeeks = av, t.timeSunday = tv, t.timeSundays = av, t.timeMonday = nv, t.timeMondays = cv, t.timeTuesday = ev, t.timeTuesdays = sv, t.timeWednesday = rv, t.timeWednesdays = fv, t.timeThursday = iv, t.timeThursdays = lv, t.timeFriday = ov, t.timeFridays = hv, t.timeSaturday = uv, t.timeSaturdays = pv, t.timeMonth = dv, t.timeMonths = vv, t.timeYear = gv, t.timeYears = _v, t.utcMinute = yv, t.utcMinutes = mv, t.utcHour = xv, t.utcHours = bv, t.utcDay = wv, t.utcDays = Mv, t.utcWeek = Tv, t.utcWeeks = zv, t.utcSunday = Tv, t.utcSundays = zv, t.utcMonday = Nv, t.utcMondays = Pv, t.utcTuesday = kv, t.utcTuesdays = Rv, t.utcWednesday = Sv, t.utcWednesdays = Lv, t.utcThursday = Ev, t.utcThursdays = qv, t.utcFriday = Av, t.utcFridays = Dv, t.utcSaturday = Cv, t.utcSaturdays = Uv, t.utcMonth = Ov, t.utcMonths = Fv, t.utcYear = Iv, t.utcYears = Bv, t.timeFormatDefaultLocale = Yo, t.timeFormatLocale = Ri, t.isoFormat = $v, t.isoParse = Wv, t.now = gt, t.timer = mt, t.timerFlush = xt, t.timeout = Fs, t.interval = function (t, n, e) {
    var r = new yt(),
        i = n;return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? gt() : +e, r.restart(function o(u) {
      u += i, r.restart(o, i += n, e), t(u);
    }, n, e), r);
  }, t.transition = At, t.active = function (t, n) {
    var e,
        r,
        i = t.__transition;if (i) {
      n = null == n ? null : n + "";for (r in i) {
        if ((e = i[r]).state > Hs && e.name === n) return new Et([[t]], Nf, n, +r);
      }
    }return null;
  }, t.interrupt = Gs, t.voronoi = function () {
    function t(t) {
      return new ca(t.map(function (r, i) {
        var o = [Math.round(n(r, i, t) / x_) * x_, Math.round(e(r, i, t) / x_) * x_];return o.index = i, o.data = r, o;
      }), r);
    }var n = Ou,
        e = Fu,
        r = null;return t.polygons = function (n) {
      return t(n).polygons();
    }, t.links = function (n) {
      return t(n).links();
    }, t.triangles = function (n) {
      return t(n).triangles();
    }, t.x = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : h_(+e), t) : n;
    }, t.y = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : h_(+n), t) : e;
    }, t.extent = function (n) {
      return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]];
    }, t.size = function (n) {
      return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]];
    }, t;
  }, t.zoom = function () {
    function n(t) {
      t.property("__zoom", da).on("wheel.zoom", s).on("mousedown.zoom", f).on("dblclick.zoom", l).filter(w).on("touchstart.zoom", h).on("touchmove.zoom", p).on("touchend.zoom touchcancel.zoom", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function e(t, n) {
      return (n = Math.max(M[0], Math.min(M[1], n))) === t.k ? t : new sa(n, t.x, t.y);
    }function r(t, n, e) {
      var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;return r === t.x && i === t.y ? t : new sa(t.k, r, i);
    }function i(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }function o(t, n, e) {
      t.on("start.zoom", function () {
        u(this, arguments).start();
      }).on("interrupt.zoom end.zoom", function () {
        u(this, arguments).end();
      }).tween("zoom", function () {
        var t = arguments,
            r = u(this, t),
            o = m.apply(this, t),
            a = e || i(o),
            c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
            s = this.__zoom,
            f = "function" == typeof n ? n.apply(this, t) : n,
            l = k(s.invert(a).concat(c / s.k), f.invert(a).concat(c / f.k));return function (t) {
          if (1 === t) t = f;else {
            var n = l(t),
                e = c / n[2];t = new sa(e, a[0] - n[0] * e, a[1] - n[1] * e);
          }r.zoom(null, t);
        };
      });
    }function u(t, n) {
      for (var e, r = 0, i = S.length; r < i; ++r) {
        if ((e = S[r]).that === t) return e;
      }return new c(t, n);
    }function c(t, n) {
      this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = m.apply(t, n);
    }function s() {
      if (y.apply(this, arguments)) {
        var t = u(this, arguments),
            n = this.__zoom,
            i = Math.max(M[0], Math.min(M[1], n.k * Math.pow(2, b.apply(this, arguments)))),
            o = cc(this);if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)), clearTimeout(t.wheel);else {
          if (n.k === i) return;t.mouse = [o, n.invert(o)], Gs(this), t.start();
        }T_(), t.wheel = setTimeout(function () {
          t.wheel = null, t.end();
        }, z), t.zoom("mouse", x(r(e(n, i), t.mouse[0], t.mouse[1]), t.extent, T));
      }
    }function f() {
      if (!_ && y.apply(this, arguments)) {
        var n = u(this, arguments),
            e = vc(t.event.view).on("mousemove.zoom", function () {
          if (T_(), !n.moved) {
            var e = t.event.clientX - o,
                i = t.event.clientY - a;n.moved = e * e + i * i > P;
          }n.zoom("mouse", x(r(n.that.__zoom, n.mouse[0] = cc(n.that), n.mouse[1]), n.extent, T));
        }, !0).on("mouseup.zoom", function () {
          e.on("mousemove.zoom mouseup.zoom", null), C(t.event.view, n.moved), T_(), n.end();
        }, !0),
            i = cc(this),
            o = t.event.clientX,
            a = t.event.clientY;yc(t.event.view), la(), n.mouse = [i, this.__zoom.invert(i)], Gs(this), n.start();
      }
    }function l() {
      if (y.apply(this, arguments)) {
        var i = this.__zoom,
            u = cc(this),
            a = i.invert(u),
            c = i.k * (t.event.shiftKey ? .5 : 2),
            s = x(r(e(i, c), u, a), m.apply(this, arguments), T);T_(), N > 0 ? vc(this).transition().duration(N).call(o, s, u) : vc(this).call(n.transform, s);
      }
    }function h() {
      if (y.apply(this, arguments)) {
        var n,
            e,
            r,
            i,
            o = u(this, arguments),
            a = t.event.changedTouches,
            c = a.length;for (la(), e = 0; e < c; ++e) {
          r = a[e], i = [i = gc(this, a, r.identifier), this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
        }if (g && (g = clearTimeout(g), !o.touch1)) return o.end(), void ((i = vc(this).on("dblclick.zoom")) && i.apply(this, arguments));n && (g = setTimeout(function () {
          g = null;
        }, A), Gs(this), o.start());
      }
    }function p() {
      var n,
          i,
          o,
          a,
          c = u(this, arguments),
          s = t.event.changedTouches,
          f = s.length;for (T_(), g && (g = clearTimeout(g)), n = 0; n < f; ++n) {
        i = s[n], o = gc(this, s, i.identifier), c.touch0 && c.touch0[2] === i.identifier ? c.touch0[0] = o : c.touch1 && c.touch1[2] === i.identifier && (c.touch1[0] = o);
      }if (i = c.that.__zoom, c.touch1) {
        var l = c.touch0[0],
            h = c.touch0[1],
            p = c.touch1[0],
            d = c.touch1[1],
            v = (v = p[0] - l[0]) * v + (v = p[1] - l[1]) * v,
            _ = (_ = d[0] - h[0]) * _ + (_ = d[1] - h[1]) * _;i = e(i, Math.sqrt(v / _)), o = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2], a = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2];
      } else {
        if (!c.touch0) return;o = c.touch0[0], a = c.touch0[1];
      }c.zoom("touch", x(r(i, o, a), c.extent, T));
    }function v() {
      var n,
          e,
          r = u(this, arguments),
          i = t.event.changedTouches,
          o = i.length;for (la(), _ && clearTimeout(_), _ = setTimeout(function () {
        _ = null;
      }, A), n = 0; n < o; ++n) {
        e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
      }r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end();
    }var g,
        _,
        y = ha,
        m = pa,
        x = _a,
        b = va,
        w = ga,
        M = [0, 1 / 0],
        T = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        N = 250,
        k = Ms,
        S = [],
        E = a("start", "zoom", "end"),
        A = 500,
        z = 150,
        P = 0;return n.transform = function (t, n) {
      var e = t.selection ? t.selection() : t;e.property("__zoom", da), t !== e ? o(t, n) : e.interrupt().each(function () {
        u(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
      });
    }, n.scaleBy = function (t, e) {
      n.scaleTo(t, function () {
        return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
      });
    }, n.scaleTo = function (t, o) {
      n.transform(t, function () {
        var t = m.apply(this, arguments),
            n = this.__zoom,
            u = i(t),
            a = n.invert(u),
            c = "function" == typeof o ? o.apply(this, arguments) : o;return x(r(e(n, c), u, a), t, T);
      });
    }, n.translateBy = function (t, e, r) {
      n.transform(t, function () {
        return x(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), m.apply(this, arguments), T);
      });
    }, n.translateTo = function (t, e, r) {
      n.transform(t, function () {
        var t = m.apply(this, arguments),
            n = this.__zoom,
            o = i(t);return x(M_.translate(o[0], o[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof r ? -r.apply(this, arguments) : -r), t, T);
      });
    }, c.prototype = { start: function start() {
        return 1 == ++this.active && (this.index = S.push(this) - 1, this.emit("start")), this;
      }, zoom: function zoom(t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
      }, end: function end() {
        return 0 == --this.active && (S.splice(this.index, 1), this.index = -1, this.emit("end")), this;
      }, emit: function emit(t) {
        d(new function (t, n, e) {
          this.target = t, this.type = n, this.transform = e;
        }(n, t, this.that.__zoom), E.apply, E, [t, this.that, this.args]);
      } }, n.wheelDelta = function (t) {
      return arguments.length ? (b = "function" == typeof t ? t : w_(+t), n) : b;
    }, n.filter = function (t) {
      return arguments.length ? (y = "function" == typeof t ? t : w_(!!t), n) : y;
    }, n.touchable = function (t) {
      return arguments.length ? (w = "function" == typeof t ? t : w_(!!t), n) : w;
    }, n.extent = function (t) {
      return arguments.length ? (m = "function" == typeof t ? t : w_([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : m;
    }, n.scaleExtent = function (t) {
      return arguments.length ? (M[0] = +t[0], M[1] = +t[1], n) : [M[0], M[1]];
    }, n.translateExtent = function (t) {
      return arguments.length ? (T[0][0] = +t[0][0], T[1][0] = +t[1][0], T[0][1] = +t[0][1], T[1][1] = +t[1][1], n) : [[T[0][0], T[0][1]], [T[1][0], T[1][1]]];
    }, n.constrain = function (t) {
      return arguments.length ? (x = t, n) : x;
    }, n.duration = function (t) {
      return arguments.length ? (N = +t, n) : N;
    }, n.interpolate = function (t) {
      return arguments.length ? (k = t, n) : k;
    }, n.on = function () {
      var t = E.on.apply(E, arguments);return t === E ? n : t;
    }, n.clickDistance = function (t) {
      return arguments.length ? (P = (t = +t) * t, n) : Math.sqrt(P);
    }, n;
  }, t.zoomTransform = fa, t.zoomIdentity = M_, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(5);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(54)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"ElegantIcons\";\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"https://cdn.rawgit.com/mdentinho/elegant-icons-sass/e48e7df0/fonts/ElegantIcons.woff2\") format(\"woff2\"), url(\"https://cdn.rawgit.com/mdentinho/elegant-icons-sass/e48e7df0/fonts/ElegantIcons.woff\") format(\"woff\"); }\n\n.dev::before, .search::after, .upload::after, .nuclear::after, .next-slider::after, .previous-slider::after, .linked-in::before, .email::before {\n  font-family: \"ElegantIcons\";\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  line-height: 1;\n  speak: none;\n  text-transform: none; }\n\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(8) + ");\n  src: url(" + __webpack_require__(8) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(46) + ") format(\"woff2\"), url(" + __webpack_require__(47) + ") format(\"woff\"), url(" + __webpack_require__(48) + ") format(\"truetype\"), url(" + __webpack_require__(49) + "#glyphicons_halflingsregular) format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n\n.glyphicon-plus:before {\n  content: \"+\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.about-me {\n  padding: 10px 10% 0 10%; }\n\n.slider-wrap {\n  width: 100%;\n  left: 0;\n  bottom: 0; }\n\n.slick-slide {\n  padding: 10px; }\n\n.slide {\n  position: relative;\n  text-align: center; }\n\n.slide-overlay {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(251, 251, 251, 0.4); }\n  .slide-overlay > h4 {\n    padding: 20px;\n    color: rgba(51, 122, 183, 0.4); }\n\n.slide-overlay:hover {\n  background: rgba(251, 251, 251, 0.1); }\n\n.slider {\n  width: 95%;\n  margin: 0 auto; }\n\n.intro-footer {\n  text-align: center;\n  width: 100%; }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.profile-pic-div {\n  text-align: center;\n  width: 25%;\n  margin: 0 auto; }\n\n.clear {\n  clear: both; }\n\n.sig {\n  margin-right: 50px;\n  max-width: 300px;\n  float: right;\n  clear: both; }\n\n.about-img-right {\n  float: right;\n  max-width: 200px;\n  border: 1px solid #347ab7;\n  margin-left: 15px; }\n\n.about-img-left {\n  float: left;\n  max-width: 200px;\n  border: 1px solid #347ab7;\n  margin-right: 15px; }\n\n.main {\n  margin: 0; }\n\n.sidebar,\n.content {\n  padding: 0; }\n\n.sidebar {\n  z-index: 99;\n  background: rgba(255, 255, 255, 0.4); }\n\nlegend {\n  border-bottom: 1px solid #337ab7; }\n\np {\n  text-indent: 10px; }\n\na {\n  text-decoration: none; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-family: 'Libre Baskerville', serif; }\n\nhtml, body {\n  height: 100%;\n  width: 100%; }\n\n.fade-in {\n  display: none;\n  height: 100%; }\n\n.container-fluid {\n  padding: 0; }\n\n.main {\n  height: 100%;\n  position: relative; }\n\n.background-intro {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n.intro-legend {\n  margin: 0; }\n\n.intro-text-wrap {\n  width: 40%;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  padding-top: 5%;\n  font-family: 'Libre Baskerville', serif;\n  color: #fff; }\n  .intro-text-wrap > img {\n    display: block;\n    margin: 0 auto; }\n\n.col {\n  height: 100%; }\n\n.navbar {\n  z-index: 99;\n  width: 140px;\n  top: 8%;\n  position: absolute;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  .navbar .nav {\n    position: relative;\n    text-align: center; }\n  .navbar > .nav-pills > li {\n    float: none; }\n\n.arrow {\n  margin: 10px; }\n  .arrow > .arrow-up {\n    position: relative;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-bottom: 10px solid rgba(0, 0, 0, 0.8); }\n  .arrow > .arrow-down {\n    position: relative;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 10px solid rgba(0, 0, 0, 0.8); }\n\n.intro {\n  height: 55%;\n  position: relative;\n  background: url(\"https://i.imgur.com/yvsInyz.jpg\");\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.profile-pic {\n  max-width: 150px;\n  border-radius: 40px; }\n\n.dev::before {\n  content: '\\E035'; }\n\n.search::after {\n  content: 'U'; }\n\n.upload::after {\n  content: '\\E070'; }\n\n.nuclear::after {\n  content: '\\E00A'; }\n\n.next-slider::after {\n  content: '\\E00A'; }\n\n.previous-slider::after {\n  content: '\\E00A'; }\n\n.github {\n  width: 30px;\n  display: inline;\n  padding-bottom: 10px; }\n\n.linked-in {\n  font-size: 30px; }\n  .linked-in::before {\n    content: '\\E09D'; }\n\n.email {\n  font-size: 30px; }\n  .email::before {\n    content: '\\E010'; }\n\n.icons > a {\n  text-decoration: none;\n  padding-left: 20px; }\n\n.well {\n  margin: 0; }\n\n.panel-section {\n  padding-top: 20px; }\n  .panel-section > h4 {\n    padding-top: 20px; }\n\n.entity-rels {\n  max-width: 250px; }\n\n.img-right {\n  float: right; }\n\n.vis-tab-intro {\n  width: 80%;\n  margin: 0 auto; }\n\n.data-navpils {\n  display: none; }\n\n.d3-thumbs {\n  padding-top: 40px;\n  display: inline-block; }\n  .d3-thumbs > .d3-thumb {\n    display: inline-block;\n    width: 20%; }\n    .d3-thumbs > .d3-thumb > p {\n      color: white; }\n    .d3-thumbs > .d3-thumb > img {\n      display: inline-block;\n      padding: 5px; }\n\n.d3-thumb:hover {\n  background: rgba(251, 251, 251, 0.9); }\n  .d3-thumb:hover > p {\n    color: black; }\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #337ab7;\n  shape-rendering: crispEdges; }\n\n.axis text {\n  font: 10px sans-serif; }\n\n.types {\n  position: absolute;\n  top: 20px;\n  left: 10px;\n  background: RGBA(255, 255, 255, 0.11);\n  padding: 10px; }\n  .types > p:hover {\n    background: black; }\n\n.data-wrapper {\n  position: relative;\n  background: black; }\n\n.iris-info {\n  text-align: center;\n  position: relative; }\n  .iris-info > svg {\n    overflow: visible; }\n\n.iris-table {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  color: #337ab7;\n  font-family: 'Libre Baskerville', serif; }\n\n.color-axis > path {\n  stroke: #fff; }\n\n.tick > line {\n  stroke: #fff; }\n\n.tick > text {\n  fill: #fff; }\n\n.form-inline {\n  color: white;\n  text-align: center;\n  padding-top: 5px; }\n\ncircle {\n  fill-opacity: 0.8; }\n\n.vis-default-overlay {\n  background: url(\"https://i.imgur.com/9mreDyw.png\");\n  height: 600px;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  padding: 40px;\n  background-size: cover; }\n  .vis-default-overlay::after {\n    content: '';\n    width: 100%;\n    height: auto;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0; }\n\n.overlay-content {\n  width: 50%;\n  margin: 0 auto;\n  color: #fff; }\n  .overlay-content > h3 {\n    color: #fff;\n    font-family: 'Libre Baskerville', serif; }\n\n.vis-default-overlay::after {\n  background: rgba(0, 0, 0, 0.75); }\n\n.bar:hover {\n  fill: red; }\n\n.loaded-data {\n  position: relative;\n  text-align: center; }\n\n.wine-info {\n  text-align: center;\n  position: relative; }\n\n.crime-info {\n  text-align: center; }\n\n.wine-order {\n  width: 200px;\n  margin: 0 auto; }\n\ntable {\n  margin: 0 auto;\n  text-align: center;\n  color: white; }\n\n.bordered {\n  width: fit-content;\n  border: 1px solid blue;\n  margin: 0 auto; }\n\n.nav-page {\n  margin-top: 20px;\n  margin-left: 145px;\n  margin-right: 5px; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n  border: 1px solid #888888; }\n\n.projects-overview > .col-sm-6 {\n  text-align: center; }\n\n.panel-image {\n  text-align: center; }\n\n.proj-container {\n  height: inherit; }\n  .proj-container > .row {\n    height: inherit; }\n\n.overlay-wrap {\n  margin-right: 20px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7); }\n\n.panel {\n  float: left;\n  height: 325px;\n  width: 325px;\n  margin: 10px; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid blue;\n  border-bottom: 16px solid blue;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@media only screen and (max-width: 768px) {\n  .navbar {\n    border: none;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    background: none;\n    position: relative;\n    top: 0; }\n  .nav-page {\n    margin-left: 5px; }\n  .navbar-collapse {\n    width: 100%;\n    background: rgba(251, 251, 251, 0.9); }\n  .about-me {\n    padding: 10px 0; }\n  .profile-pic-div {\n    width: 100%; }\n  .about-img-left,\n  .about-img-right {\n    max-width: 150px; }\n  .sig {\n    margin: 0; }\n  .d3-thumb {\n    width: 30% !important; } }\n\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n  .slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n  .slick-track:after {\n    clear: both; }\n  .slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n  [dir=\"rtl\"] .slick-slide {\n    float: right; }\n  .slick-slide img {\n    display: block; }\n  .slick-slide.slick-loading img {\n    display: none; }\n  .slick-slide.dragging img {\n    pointer-events: none; }\n  .slick-initialized .slick-slide {\n    display: block; }\n  .slick-loading .slick-slide {\n    visibility: hidden; }\n  .slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(" + __webpack_require__(50) + ") center center no-repeat; }\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(" + __webpack_require__(9) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(51) + ") format(\"woff\"), url(" + __webpack_require__(52) + ") format(\"truetype\"), url(" + __webpack_require__(53) + "#slick) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none; }\n  .slick-prev:hover, .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    outline: none;\n    background: transparent;\n    color: transparent; }\n    .slick-prev:hover:before, .slick-prev:focus:before,\n    .slick-next:hover:before,\n    .slick-next:focus:before {\n      opacity: 1; }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25; }\n  .slick-prev:before,\n  .slick-next:before {\n    font-family: \"slick\";\n    font-size: 20px;\n    line-height: 1;\n    color: white;\n    opacity: 0.75;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.slick-prev {\n  left: -25px; }\n  [dir=\"rtl\"] .slick-prev {\n    left: auto;\n    right: -25px; }\n  .slick-prev:before {\n    content: \"\\2190\"; }\n    [dir=\"rtl\"] .slick-prev:before {\n      content: \"\\2192\"; }\n\n.slick-next {\n  right: -25px; }\n  [dir=\"rtl\"] .slick-next {\n    left: -25px;\n    right: auto; }\n  .slick-next:before {\n    content: \"\\2192\"; }\n    [dir=\"rtl\"] .slick-next:before {\n      content: \"\\2190\"; }\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px; }\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n  .slick-dots li {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    margin: 0 5px;\n    padding: 0;\n    cursor: pointer; }\n    .slick-dots li button {\n      border: 0;\n      background: transparent;\n      display: block;\n      height: 20px;\n      width: 20px;\n      outline: none;\n      line-height: 0px;\n      font-size: 0px;\n      color: transparent;\n      padding: 5px;\n      cursor: pointer; }\n      .slick-dots li button:hover, .slick-dots li button:focus {\n        outline: none; }\n        .slick-dots li button:hover:before, .slick-dots li button:focus:before {\n          opacity: 1; }\n      .slick-dots li button:before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: \"\\2022\";\n        width: 20px;\n        height: 20px;\n        font-family: \"slick\";\n        font-size: 6px;\n        line-height: 20px;\n        text-align: center;\n        color: black;\n        opacity: 0.25;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n    .slick-dots li.slick-active button:before {\n      color: black;\n      opacity: 0.75; }\n", ""]);

// exports


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a31955ded3da1b49d1760a81b732d067.ttf");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "89889688147bd7575d6327160d64e760.svg");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2426a706e9cacaf8ab2cc3cfe6cc2da0.gif");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRk9UVE8AAAVkAAsAAAAAB1wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAi4AAAKbH/pWDkZGVE0AAAM4AAAAGgAAABxt0civR0RFRgAAA1QAAAAcAAAAIAAyAARPUy8yAAADcAAAAFIAAABgUBj/rmNtYXAAAAPEAAAAUAAAAWIiC0SwaGVhZAAABBQAAAAuAAAANgABMftoaGVhAAAERAAAABwAAAAkA+UCA2htdHgAAARgAAAADgAAAA4ESgBKbWF4cAAABHAAAAAGAAAABgAFUABuYW1lAAAEeAAAANwAAAFuBSeBwnBvc3QAAAVUAAAAEAAAACAAAwABeJw9ks9vEkEUx2cpWyeUoFYgNkHi2Wt7N3rVm3cTs3UVLC4LxIWEQvi1P3i7O1tYLJDAmlgKGEhQrsajf0j7J3jYTXrQWUrMJG+++b55n5e8NwwKBhHDMLv5kxT3ATEBxKBn3qOAl9zxHgb1MAPhHQgHkyF08Gr/L8B/Eb6zWnmCJ7AJVLubQOheArXvJ1A4EXi6j4I+Zg9F0QFKvsnlBCmXeve+sFEnb/nCptdtQ4QYhVFRAT1HrF8UQK/RL/SbmUbclsvGVFXRZKDHUE38cc4qpkbAAsuwiImvro+ufcfaOIQ6szlrmjRJDaKZKnbjN3GWKIbiIzRFUfCffuxxKOL+3LDlDVvx2TdxN84qZEsnhNBa6pgm2dAsnzbLsETdsmRFxUeHV4e+I2/ptN8TyqV8T3Dt29t7EYOuajVIw2y1Wy3M86w0zg/Fz2IvawmQAUHOVrPVfLkoScVynsqsTG0MGUs4z55nh3mnOJa+li+rl9WpPIcFfDubDeaDC+fLBdYN3QADzLauGfj4B6sZmq6CCpqmtSvF0qlUl2qf5AJIUCSlTqlb7lUG+LRfGzZGzZEyBgccMu6MuqPecNDvD4Y9Kjtj4gD+DsvKVMTcMdtqtZtmkzQstQvYje7Syep0PDSAhSOeHYXYWThEF//A/0YvYV1fSQtpKU5STtrhbQ444OtpKSWJIg3pOg8cBs7maTY1EZf07aq+hjWs7IWzdCYTGhb2CtZ47x+Uhx28AAB4nGNgYGBkAIJz765vANHnCyvqYTQAWnkHswAAeJxjYGRgYOADYgkGEGBiYARCFjAG8RgABHYAN3icY2BmYmCcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwcjKAQQMDAyOQUmCAgoA01xQGB4ZExUmMD/4/YNBjvP3/NgNEDQPjbbBKBQZGADfLDgsAAHicY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQzMCQqKClOUJz0/z9YHRLv/+L7D+8V3cuHmgAHjGwM6ELUByxUMIOZCmbgAAA5LQ8XeJxjYGRgYABiO68w73h+m68M3EwMIHC+sKIeTqsyqDLeZrwN5HIwgKUB/aYJUgAAeJxjYGRgYLzNwMCgx8QAAkA2IwMqYAIAMGIB7QIAAAACAAAlACUAJQAlAAAAAFAAAAUAAHicbY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV4nGNgZkAGjAxoAAAAjgAF"

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "620483ff0cfd8f224a8c302b9bef1ed6.ttf");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f97e3bbf73254b0112091d0192f17aec.svg");

/***/ }),
/* 54 */
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

var	fixUrls = __webpack_require__(55);

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
/* 55 */
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
],[10]);