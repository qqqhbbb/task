window.onload = function() {

    //第一阶段
    $.click("#one-button", function() {
        var val = $("#one-input").value,
            span = $("#one-span"),
            arr = val.split(","),
            res = uniqArray(arr),
            i;

        if (val.search(",") == -1) {
            if (val == "") {
                span.innerHTML = "请输入爱好";
            } else {
                span.innerHTML = "请用半角逗号分隔";
            }
        } else {
            for (i = 0; i < res.length; i++) {
                if (res[i].search(" ") != -1) {
                    res.splice(i, 1);
                    i--;
                }
            }
            span.innerHTML = res;
        }
    })

    //第二阶段
    $.click("#two-button", function() {
        var val = $("#two-textarea").value,
            span = $("#two-span"),
            reg = /[,\uff0c\s\u3001;\n\t]+/g,
            rep = val.replace(reg, " "),
            arr = rep.split(" "),
            res = uniqArray(arr),
            i;

        if (val.search(reg) == -1) {
            if (val == "") {
                span.innerHTML = "请输入爱好";
            } else {
                span.innerHTML = "请用有效符号分隔";
            }
        } else {
            for (i = 0; i < res.length; i++) {
                if (res[i].search(" ") != -1) {
                    res.splice(i, 1);
                    i--;
                }
            }
            span.innerHTML = res;
        }
    })

    //第三阶段
    $.click("#three-button", function() {
        var val = $("#three-textarea").value,
            span = $("#three-span"),
            div = $("#three-div"),
            reg = /[,\uff0c\s\u3001;\n\t]+/g,
            rep = val.replace(reg, " "),
            arr = rep.split(" "),
            res = uniqArray(arr),
            key,
            i;

        if (val.search(reg) == -1) {
            if (val == "") {
                span.style.color = "red";
                span.innerHTML = "请输入爱好";
            } else {
                span.style.color = "red";
                span.innerHTML = "请用有效符号分隔";
            }
        } else if (arr.length > 10) {
            span.style.color = "red";
            span.innerHTML = "爱好数量不能超过10个";
        } else {
            span.innerHTML = "第三阶段";
            div.innerHTML = "";
            for (i = 0; i < res.length; i++) {
                if (res[i].search(" ") != -1) {
                    res.splice(i, 1);
                    i--;
                }
            }
            for (key in res) {
                var lable = document.createElement("lable"),
                    input = document.createElement("input"),
                    check = document.createTextNode(res[key]);

                lable.setAttribute("for", res[key]);
                lable.appendChild(check);
                input.setAttribute("type", "checkbox");
                input.setAttribute("id", res[key]);
                div.appendChild(lable);
                div.appendChild(input);
            }
        }
    })
}