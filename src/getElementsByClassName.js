// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Input:  className, element
//Output: all elements with the specified className
//Constraints:  should use recursion
//Edge:  None 


var getElementsByClassName = function(className, element) {
  //output the elements with the given className
  var output = [];
  
  //if no element is entered the body is the element to be searched
  element = element || document.body;
  
  //if elements classList exists
  if (element.classList) {
    //and if it contains the className
    if (element.classList.contains(className)) {
      //push that element to the output array
      output.push(element);
    }
  }

  //if the element has children, iterate through the children
  
  for (var i = 0; i < element.children.length; i++) {
    //recursively call getElementsByClassName on the children[i]
    var childNode = getElementsByClassName(className, element.children[i]);
    //concat the output of the recursive call to the existing elements in output
    output = output.concat(childNode);
  }
  //return the final array of elements
  return output;
  };
