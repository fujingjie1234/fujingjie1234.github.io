function leftIn(queue) {
    var box = document.getElementById("box").value;
        var span = document.createElement("span")
        span.innerHTML = box;
        var spanList = queue.childNodes;
        queue.insertBefore(span,spanList[0]);
}
function rightIn(queue) {
    var box = document.getElementById("box").value;
    var span = document.createElement("span")
    span.innerHTML = box;
    queue.appendChild(span);

}

function leftOut(queue) {
    var childs = queue.childNodes;
    queue.removeChild(childs[0]);
}

function rightOut(queue) {
    var childs = queue.childNodes;
    queue.removeChild(childs[childs.length-1]);
}
function init() {
    var queue = document.getElementById("queue");
    document.getElementById("left-in").onclick = function() {leftIn(queue);};
    document.getElementById("right-in").onclick = function() {rightIn(queue);};
    document.getElementById("left-out").onclick = function() {leftOut(queue);};
    document.getElementById("right-out").onclick = function() {rightOut(queue);};
    document.getElementById("queue").onclick = function( e ) {
        e = e || window.event;
        var t = e.target || e.srcElement;  
        var tagName = t.tagName;　
         if( tagName == 'SPAN' ) {
            queue.removeChild(t);
         }
    }
}

init();