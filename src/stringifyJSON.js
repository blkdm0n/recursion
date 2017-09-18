// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Inputs:  an object
//Outputs:  a JSON stringified object
//Constraints:  must use recursive calls to function we will write
//Edge Cases:  none



var stringifyJSON = function(obj) {
  //output for our stringified obj;
  var output = [];

  //if typeof the obj is a function or undefined
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    //return null
    return 'null';
  }
  //if obj is a number, boolean, or null change the object to a string
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  }
  //if obj is a string, add double quotes to it
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //if the obj is an array
  if (Array.isArray(obj)) {
    //iterate through the elements an call stringifyJSON on each element
    for (var i = 0; i < obj.length; i++) {
      //push the results to our output array
      output.push(stringifyJSON(obj[i]));
    }
  return '[' + output + ']';
  }
  
  //if object is an object and NOT an array...iterate with for in loop
  for (var key in obj) {
    //if the object is an object and obj[key] exists and is NOT a function
      if (typeof obj === 'object' && obj[key] !== undefined && typeof obj[key] !== 'function') {
      //call stringifyJSON on both the key and value in the object
      output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
  //return output as a stringified object
  return '{' + output + '}';  
};
