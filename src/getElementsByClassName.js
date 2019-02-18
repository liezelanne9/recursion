// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    var result = [];
    var iterateElements = function(elementBody) {
      if (elementBody.classList && elementBody.classList.contains(className)) {
        result.push(elementBody);
      }
      for (var i = 0; i < elementBody.childNodes.length; i++) {
        iterateElements(elementBody.childNodes[i]);
      }
    };
    iterateElements(document.body);
    return result;
  };
