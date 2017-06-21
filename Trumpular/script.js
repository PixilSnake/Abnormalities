var removeImages = function() {
  var element = document.getElementById("images");
  while(element.firstChild); {
    element.removeChild(element.firstChild);
  };
}
