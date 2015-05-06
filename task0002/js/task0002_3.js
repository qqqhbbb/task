window.onload = function() {
    var container = document.getElementById("container"),
        list = document.getElementById("list"),
        buttons = document.getElementById("buttons").getElementsByTagName("span"),
        next = document.getElementById("next"),
        index = 1, // 默认为第一个按钮
        animated = false, // 动画是否在执行当中，默认否
        timer;

    // 自动播放
    function play() {
        var interval = 3000;

        timer = setInterval(function() {
            next.onclick();
        }, interval);
    }

    // 清除定时器
    function stop() {
        clearInterval(timer);
    }

    // 按钮亮起及熄灭
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index - 1].className = "on";
    }

    // 图片切换
    function animate(offset) {
        animated = true;
        var newLeft = parseInt(list.style.left) + offset,
            time = 300, // 位移总时间
            interval = 10, // 位移间隔时间
            speed = offset / (time / interval); // 每次位移量

        function go() {
            // 递归实现动画
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                animated = false;
                // 图片归位 无限滚动
                list.style.left = newLeft + "px";
                if (newLeft > -1280) {
                    list.style.left = -3840 + "px";
                }
                if (newLeft < -3840) {
                    list.style.left = -1280 + "px";
                }
            }
        }
        go();
    }

    next.onclick = function() {
        // 按钮归位
        if (index == 3) {
            index = 1;
        } else {
            index += 1;
        }
        showButton();
        if (!animated) {
            animate(-1280);
        }
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            if (this.className == "on") {
                return; // 依旧点击当前按钮，返回不执行以下语句
            }
            // 获取相应按钮
            var myIndex = parseInt(this.getAttribute("index")),
                offset = -1280 * (myIndex - index); // 计算图片之间的偏移量

            index = myIndex; // 修改默认按钮
            showButton();
            if (animated == false) {
                animate(offset);
            }
        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play(); // 默认自动播放
}