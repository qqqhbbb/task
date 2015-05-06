// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === "[object Function]";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var tar, i, key;
    if (src instanceof Array) {
        tar = [];
        for (i = 0; i < src.length; i++) {
            tar[i] = cloneObject(src[i]);
        }
        return tar;
    } else if (src instanceof Object) {
        tar = {};
        for (key in src) {
            tar[key] = cloneObject(src[key]);
        }
        return tar;
    } else {
        return src;
    }
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var res = [],
        obj = {},
        i;
    for (i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            res.push(arr[i]);
            obj[arr[i]] = 1;
        }
    }
    return res;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var i;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != " " && str.charAt(i) != "    ") {
            break;
        }
    }
    str = str.substring(i, str.length);
    for (i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) != " " && str.charAt(i) != " ") {
            break;
        }
    }
    str = str.substring(0, i + 1);
    return str;
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    var i;
    for (i in arr) {
        arr[i] = fn(arr[i], i);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0,
        key;
    for (key in obj) {
        count++;
    }
    return count;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var reg = /^1[3|4|5|8][0-9]\d{8}$/;
    return reg.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var defaultClassName;
    if (!element.className) {
        element.className = newClassName;
    } else {
        defaultClassName = element.className;
        defaultClassName += " ";
        defaultClassName += newClassName;
        element.className = defaultClassName;
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var defaultClassName = element.getAttribute("class");
    defaultClassName = defaultClassName.replace(oldClassName, "");
    element.setAttribute("class", defaultClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode == siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var position = element.getBoundingClientRect();
    var obj = {
        x: position.left,
        y: position.top
    };
    return obj;
}

// 通过class的Name获取元素
function getByClass(clsName, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
        eles,
        elements = oParent.getElementsByTagName("*"),
        i;
    for (i = 0; i < elements.length; i++) {
        if (elements[i].className == clsName) {
            eles = [];
            eles.push(elements[i]);
        }
    }
    return eles;
}

// 通过attribute的Name获取元素
function getByAttributeName(ateName, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
        eles,
        elements = oParent.getElementsByTagName("*"),
        i,
        j;
    for (i = 0; i < elements.length; i++) {
        if (elements[i].attributes.length > 0) {
            for (j = 0; j < elements[i].attributes.length; j++) {
                if (elements[i].attributes[j].name == ateName) {
                    eles = [];
                    eles.push(elements[i]);
                }
            }
        }
    }
    return eles;
}

// 通过attribute的Name和Value获取元素
function getByAttributeNameAndValue(ateName, ateValue, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
        eles,
        elements = oParent.getElementsByTagName("*"),
        i,
        j;
    for (i = 0; i < elements.length; i++) {
        if (elements[i].attributes.length > 0) {
            for (j = 0; j < elements[i].attributes.length; j++) {
                if (elements[i].attributes[j].name == ateName) {
                    if (elements[i].getAttribute(ateName) == ateValue) {
                        eles = [];
                        eles.push(elements[i]);
                    }
                }
            }
        }
    }
    return eles;
}

// 实现一个简单的Query
function $(selector) {
    if (selector.search(" ") == -1) {
        switch (selector.charAt(0)) {
            case "#": // id查询
                return document.getElementById(selector.substring(1));
                break;
            case ".": // class查询
                return getByClass(selector.substring(1))[0];
                break;
            case "[": // attribute查询
                if (selector.search("=") == -1) {
                    return getByAttributeName(selector.replace(/^\[|\]$/g, ""))[0];
                } else {
                    var ateStr = selector.split("="),
                        ateName = ateStr[0].replace(/^\[|\]$/g, ""),
                        ateValue = ateStr[1].replace(/^\[|\]$/g, "");
                    return getByAttributeNameAndValue(ateName, ateValue)[0];
                }
                break;
            default: // tagName查询
                return document.getElementsByTagName(selector)[0];
        }
    } else { // 组合查询
        var psStr = selector.split(" "),
            pStr = psStr[0].replace(psStr[0].charAt(0), ""),
            sStr = psStr[1].replace(psStr[1].charAt(0), "");
        return getByClass(sStr, pStr)[0];
    }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener); // attachEvent方法兼容IE
    } else {
        element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener); // attachEvent方法兼容IE
    } else {
        element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keyup", function(e) {
        var e = e || event;
        if (e.keyCode == 13) {
            listener();
        }
    });
}

// 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;
$.delegate = delegateEvent;

// 事件代理
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element, eventName, function(e) {
        var e = e || event,
            target = e.target || e.srcElement; // srcElement方法兼容IE
        if (target.nodeName.toLowerCase() == tag) {
            listener();
        }
    });
}

// 函数封装
$.on = function(selector, event, listener) {
    addEvent($(selector), event, listener);
}

$.click = function(selector, listener) {
    addClickEvent($(selector), listener);
}

$.un = function(selector, event, listener) {
    removeEvent($(selector), event, listener);
}

$.delegate = function(selector, tag, eventName, listener) {
    delegateEvent($(selector), tag, eventName, listener);
}

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    if (navigator.userAgent.match(/msie ([\d.]+)/i)) {
        return navigator.userAgent.match(/msie ([\d.]+)/i)[1];
    } else {
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var d = new Date(),
        e = "expires=" + d.toGMTString();
    d.setTime(d.getTime() + expiredays * 24 * 60 * 60 * 1000);
    document.cookie = cookieName + "=" + cookieValue + ";" + e;
}

// 获取cookie值
function getCookie(cookieName) {
    var name = cookieName + "=",
        str = document.cookie.split(";"),
        i,
        s;
    for (i = 0; i < str.length; i++) {
        s = str[i];
        while (s.charAt(0) == " ") {
            s = s.substring(1);
        }
        if (s.indexOf(name) != -1) {
            return s.substring(name.length, s.length);
        }
    }
    return "";
}

// 学习Ajax并尝试自己封装一个Ajax方法
function ajax(url, options) {
    var xmlhttp = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP"), // ActiveXObject对象兼容IE6
        type = options.type ? options.type : "get",
        data = options.data ? options.data : "",
        onsuccess = options.onsuccess,
        onfail = options.onfail ? options.onfail : function(err) {
            console.log(err);
        },
        key;
    if (data != "") {
        url = url + "?";
        for (key in data) {
            url = url + key + "=" + data[key] + "&";
        }
    }
    xmlhttp.open(type, url, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            onsuccess(xmlhttp.responseText, xmlhttp);
        } else {
            onfail(xmlhttp.responseText, xmlhttp);
        }
    }
    xmlhttp.send();
}