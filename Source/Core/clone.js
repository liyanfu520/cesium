import defaultValue from "./defaultValue.js";

/**
 * Clones an object, returning a new object containing the same properties.
 *
 * @function
 *
 * @param {Object} object The object to clone.
 * @param {Boolean} [deep=false] If true, all properties will be deep cloned recursively.
 * @returns {Object} The cloned object.
 */
function clone(object, deep) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  deep = defaultValue(deep, false);

  if (Array.isArray(object)) {
    var array = object.slice();
    var length = array.length;
    for (var i = 0; i < length; ++i) {
      array[i] = clone(array[i], deep);
    }
    return array;
  }

  var result = new object.constructor();
  for (var propertyName in object) {
    if (object.hasOwnProperty(propertyName)) {
      var value = object[propertyName];
      if (deep) {
        value = clone(value, deep);
      }
      result[propertyName] = value;
    }
  }

  return result;
}
export default clone;
