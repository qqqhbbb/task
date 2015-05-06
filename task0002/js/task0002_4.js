window.onload = function() {
    var data = ["qqq", "hhh", "bbb"],
        input = $("#input"),
        ul = $("#ul");

    addEvent(input, "keyup", dataShow);
    addEvent(document, "click", dataHide);

    function dataShow() {
        ul.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = data[i];
            ul.appendChild(li);
            addEvent(li, "click", dataHide);
            addEvent(li, "mouseover", addSelected);
            addEvent(li, "mouseout", removeSelected);
            addEnterEvent(input, enterSelected);
        }
        if (input.value != "") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    }

    function dataHide() {
        ul.style.display = "none";
    }

    function addSelected(e) {
        var e = e || window.event,
            target = e.target || e.srcElement;
        addClass(target, "selected");
        input.value = target.innerHTML;
    }

    function removeSelected(e) {
        var e = e || window.event,
            target = e.target || e.srcElement;
        removeClass(target, "selected");
    }

    function enterSelected() {
        var lis = ul.childNodes;
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].getAttribute("class") == "selected") {
                input.value = lis[i].innerHTML;
            }
        }
    }
}