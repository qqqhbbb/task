window.onload = function() {

    var timer;

    $.click("#button", function() {

        var val = $("#input").value,
            span = $("#span"),
            reg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
            endTime,
            arr;

        if (reg.test(val)) {
            clearInterval(timer);
            arr = val.split("-");
            endTime = new Date(arr[0], arr[1] - 1, arr[2]);
            timer = setInterval(showTime, 1000);
        } else {
            clearInterval(timer);
            span.innerHTML = "格式应为YYYY-MM-DD";
        }

        function showTime() {

            var nowTime = new Date(),
                leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

            if (leftTime <= 0) {
                clearInterval(timer);
                span.innerHTML = "时差为0，计时结束";
            } else {
                var d = parseInt(leftTime / 86400),
                    h = parseInt(leftTime % 86400 / 3600),
                    m = parseInt(leftTime % 86400 % 3600 / 60),
                    s = parseInt(leftTime % 86400 % 3600 % 60);

                span.innerHTML =
                    "距离" + endTime.getFullYear() +
                    "年" + (endTime.getMonth() + 1) +
                    "月" + endTime.getDate() +
                    "日还有" + d +
                    "天" + h +
                    "小时" + m +
                    "分" + s +
                    "秒";
            }
        }
    })
}