function cl(x) {
  console.log(x);
}

function listenAt(id, type, fn) {
  var id = document.getElementById(id)
  id.addEventListener(type, fn);
}

function htmlElShort(type) {
  switch(type) {
    case undefined : type = 'div'; break;
      case 'btn' : type = 'button'; break;
      case 'in' : type = 'input'; break;
        default : type = type; break;
    }
  return type;
}

var doc = {
  ce : function(type) {
      type = htmlElShort(type);
      return document.createElement(type);
  },
  atn : function(el, text) {
    var text = document.createTextNode(text);
    el.appendChild(text);
  },
  amc : function(el, arr) {
    for (var child of arr) {
      el.appendChild(child);
    }
  },
  class : function(name) {
    return document.getElementsByClassName(name);
  },
  id : function(id) {
    return document.getElementById(id);
  }
};
