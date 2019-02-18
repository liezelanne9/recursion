// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  // if obj is undefined
  if (obj === undefined) {
    return undefined;
  }

  // if obj is Array
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    };
    return '[' + result.join(',') + ']';
  }

  // if obj is object
  if (obj && typeof obj === 'object') {

    // pass all obj properties that are string, number, boolean, or object type
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || typeof obj[key] === 'object') {
        result.push(`"${key}":` + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  // if obj is null, NaN, or Infinity
  if (obj === null || obj.toString() === 'NaN' || obj.toString() === 'Infinity') {
      return 'null';
  }
  
  // if obj is a string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // if obj is a number or boolean
  return `${obj}`;
};