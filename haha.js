/**
 * Created by Lenovo on 2017/5/17.
 */

function showPic(whichPic) {
    if (!document.getElementById("placeholder")) {
        return true;
    }
    var source = whichPic.getAttribute("href");
    var place = document.getElementById("placeholder");
    //if (place.nodeName != "IMG") {
    //    return false;
    //}
    place.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichPic.getAttribute("title")) {
        var text = whichPic.getAttribute("title");
    } else {
        var text = "";
    }
    var d = document.getElementById("description");
    if (d.firstChild.nodeType == 3) {
        d.firstChild.nodeValue = text;
    }


    return false;
}
function prepare() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("gallery")) return false;
    var t=document.getElementById("gallery");
    var link=t.getElementsByTagName("a");

    for(var i=0;i<link.length;i++) {
        link[i].onclick=function() {
            //        showPic(this);
            //return false;
                    return showPic(this);
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepare);
