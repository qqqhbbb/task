window.onload = function() {
    $.delegate("#lul", "li", "mousedown", drag);
    $.delegate("#rul", "li", "mousedown", drag);

    function drag(event) {
        var event = event || window.event,
            target = event.target || event.srcElement,
            liX = event.clientX - target.offsetLeft,
            liY = event.clientY - target.offsetTop;

        target.style.position = "absolute";
        target.style.border = "1px solid #000";

        addClass(target, "selected");

        document.onmousemove = function(event) {
            var event = event || window.event,
                left = event.clientX - liX,
                top = event.clientY - liY,
                winW = document.documentElement.clientWidth || document.body.clientWidth,
                winH = document.documentElement.clientHeight || document.body.clientHeight,
                maxW = winW - target.offsetWidth,
                maxH = winH - target.offsetHeight;

            if (left < 0) {
                left = 0;
            } else if (left > maxW) {
                left = maxW;
            }
            if (top < 0) {
                top = 0;
            } else if (top > maxH) {
                top = maxH;
            }

            target.style.left = left + "px";
            target.style.top = top + "px";
            document.title = left + " " + top;
        }

        document.onmouseup = function(event) {
            var event = event || window.event,
                left = event.clientX - liX,
                newLi = document.createElement("li");

            if (left > 350 && left < 500) {
                target.style.display = "none";
                newLi.style.width = "150px";
                newLi.style.height = "50px";
                newLi.style.backgroundColor = "red";
                newLi.style.borderBottom = "1px solid #000";
                $("#lul").appendChild(newLi);
            } else if (left > 700 && left < 850) {
                target.style.display = "none";
                newLi.style.width = "150px";
                newLi.style.height = "50px";
                newLi.style.backgroundColor = "red";
                newLi.style.borderBottom = "1px solid #000";
                $("#rul").appendChild(newLi);
            }

            document.onmousemove = null;
            document.onmouseup = null;
            removeClass(target, "selected");
        }
    }
}