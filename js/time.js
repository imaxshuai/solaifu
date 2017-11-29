$(function(){
    Datetime();
//设置日期时间控件
    Time();
    function Datetime() {
        $('.datetimepicker-date').datetimepicker({
            language: 'zh-CN',//显示中文
            format: 'yyyy-mm-dd',//显示格式
            minView: "month",//设置只显示到月份
            initialDate: new Date(),
            autoclose: true,//选中自动关闭
            todayBtn: true,//显示今日按钮
        });
        //默认获取当前日期
        var today = new Date();
        var nowdate = (today.getFullYear()) + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        //对日期格式进行处理
        var date = new Date(nowdate);
        var mon = date.getMonth() + 1;
        var day = date.getDate();
        var mydate = date.getFullYear() + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
        $(".nowdate").val(mydate);
    }
    function Time() {
        $('.datetimepicker-time').datetimepicker({
            //时间
            format:"h 时 i 分",
            language:  'zh-CN',
            weekStart: 0,
            autoclose: 1,
            todayHighlight: 0,
            startView: 1,
            minView: 0,
            maxView: 1,
            forceParse: 0,
            minuteStep : 1
        });
        $(".datetimepicker-time .nowtime").val("0 时 0 分");
    }
});