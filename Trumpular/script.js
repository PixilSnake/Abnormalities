window.onload = function() {
  showImages();
}
var page = 0;
var images = [
        "img/OVER 9000.jpg",
        "img/Life.png",
        "img/pat.jpg",
        "img/Pinhead.jpg",
        "img/Troompa Loompa.jpg",
        "img/wndrwll.jpg",
        "img/Hatred.png",
        "img/O lord Gaben.jpg",
        "img/Our God.jpg",
        "img/Ireland.jpg",
        "img/GOTTAGOFAST.png",
        "img/download.jpg",
        "img/MGS Logic.jpg",
];
var update = function() {
  removeImages();
  showImages();
}
var pageBack = function() {
if(page > 0) {
  page -= 1;
  }
  update();
}

var pageForward = function() {
  if(page < (images.length / 8)) {
    page += 1;
  }
  update();
}

var showImages = function() {
  var element = document.getElementById("images");
  var start = page * 8;
  var end = start + 8;
  if(end >= images.length) {
    end = images.lenth - 1;
  }
for(var i = start; i < end; i++) {
  var path = images[i];
  var img = document.createElement("img");
  img.src = path;
  img.className="thumbnail";
  element.appendChild(img);
}
}



var removeImages = function() {
  var element = document.getElementById("images");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  };
}
