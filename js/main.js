$(function () {

    $(".publish .content li").hover(function () {
        $(this).css({"z-index": "1000"});
        $(this).find("h5").addClass("active");
        $(this).find(".list").css({"display": "block"});
    }, function () {
        $(this).css({"z-index": "1"});
        $(this).find("h5").removeClass("active");
        $(this).find(".list").css({"display": "none"});
    })

    //详情页查看更多图片
    $(".see-more").click(function () {
        $(this).css({display: "none"});
        $(".block3 .more-img").css({display: "block"});
    })

    //用户中心下拉菜单开关
    $(".user .content .dropdown>a").click(function () {
        if ($(this).parent(".dropdown").height() > 45) {
            console.log("大");
            $(this).next("div").hide(50);
            $(this).children("a").removeClass("normal");
        } else {
            console.log("小");
            $(this).next("div").show(50);
            $(this).children("a").addClass("normal");
        }
    })

    //用户中心切换信息分类
    var UIL = 0;
    showUserInfoList(UIL);
    $(".user .right .header ul li").click(function () {
        UIL = $(this).index();
        showUserInfoList(UIL);
    })

    function showUserInfoList(UIL) {
        $(".user .right .header ul li").eq(UIL).addClass("active").siblings().removeClass("active");
        $(".user .right .info ul li").eq(UIL).show().siblings().hide();
    }

    //收藏图标转换
    $("#like-btn").click(function () {
        if ($(this).find(".icon-like-true").length > 0) {
            $(this).find(".icon-like").removeClass("icon-like-true");
        }
    });

    //设置选中显示状态的背景，计算金钱，总共花费和充值
    var allMoney = 0;
    var topMoney = 0;
    var refreshMoney = 0;
    $('#operate .top .choose').click(function () {
        if ($(this).hasClass('active')) {
            $('#operate .top .choose').removeClass('active');
            topMoney = 0;
            $('#operate .top .superWarning').html(topMoney);
        } else {
            $(this).addClass('active').siblings('.choose').removeClass('active');
            topMoney = $('#operate .money').eq($(this).index()).html();
            $('#operate .top .superWarning').html(topMoney);
        }
        allMoneyFunc();
    });
    $('#operate .refresh .choose').click(function () {
        if ($(this).hasClass('active')) {
            $('#operate .refresh .choose').removeClass('active');
            refreshMoney = 0;
            $('#operate .refresh .superWarning').html(refreshMoney)
        } else {
            $(this).addClass('active').siblings('.choose').removeClass('active');
            refreshMoney = $('#operate .money').eq($(this).index()).html();
            $('#operate .refresh .superWarning').html(refreshMoney);
        }

        allMoneyFunc();
    });

    function allMoneyFunc() {
        allMoney = parseFloat(topMoney) + parseFloat(refreshMoney);
        allMoney = allMoney.toFixed(2);
        $('#operate .all-money .superWarning').html(allMoney);
        $('#operate .input-all-money').val(allMoney);
    }


    //404倒计时，返回首页
    var countDown = $("#error .time").html();
    setInterval(function () {
        countDown--;
        $("#error .time").html(countDown);
        if (countDown < 1) {
            window.location.href = "index.html";
        }
    }, 1000);

    //充值付款选中算钱
    var payCount = 0;
    var payWay = 0;
    $(".choose-box .checkbox label").click(function () {
        for (payCount = 0; payCount < ($(".choose-box .checkbox label").length); payCount++) {
            if ($(".choose-box .checkbox label").eq(payCount).find("input").is(":checked")) {
                $(".choose-box .checkbox label").eq(payCount).addClass("active");
            } else {
                $(".choose-box .checkbox label").eq(payCount).removeClass("active");
            }
        }
    });

    $(".choose-box .radio label").click(function () {
        for (payCount = 0; payCount < ($(".choose-box .radio label").length); payCount++) {
            if ($(".choose-box .radio label").eq(payCount).find("input").is(":checked")) {
                $(".choose-box .radio label").eq(payCount).addClass("active");
            } else {
                $(".choose-box .radio label").eq(payCount).removeClass("active");
            }
        }
    });

    //购买简历钱数
    $(".buy-resume  label").click(function () {
        for (payCount = 0; payCount < $(".buy-resume  label").length; payCount++) {
            if ($(".buy-resume  label").eq(payCount).find("input").is(":checked")) {
                $(".buy-resume  label").eq(payCount).addClass("active");
            } else {
                $(".buy-resume  label").eq(payCount).removeClass("active");
            }
        }
    });


    //选中全部简历
    var chooseCount = 0;
    $(".choose-all").click(function () {
        $(".table-resume-list input").prop("checked", true);
    })
    $(".dis-choose-all").click(function () {
        $(".table-resume-list input").prop("checked", false)
    })

    //选择登录方式
    $(".sign ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".sign form").eq($(this).index()).show().siblings("form").hide();
    });

    //VIP信息介绍与开通页面
    $(".vip .header-top li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".vip .price-img").eq($(this).index()).show().siblings().hide();
        $(".vip .carousel-img").eq($(this).index()).show().siblings(".carousel-img").hide();
    });

    //筛选高亮显示
    $(".parse .position span").click(function () {
        $(this).addClass('active').siblings("span").removeClass('active');
    })

    //用户名修改显隐
    $(".show-username-input").click(function () {
        $(".username-input").show();
    })

    //选择分类，判断下拉推广费用
    $(".price .params").change(function () {
        var paramsValue01 = $(".price .params01 option:selected").val();
        var paramsValue02 = $(".price .params02 option:selected").val();
        var paramsValue03 = $(".price .params03 option:selected").val();
        if ((paramsValue01 != "") && (paramsValue02 != "") && (paramsValue03 != "")) {
            $(".price table").show();
            $(".price button").show();
        }
    })

    //添加、删除预约刷新时间节点
    $(".refresh-time").on("click", ".delete", function () {
        $(this).parent(".delete-box").remove();
    });
    $(".add").click(function () {
        $(".refresh-time").append('<div class="delete-box"> <div class="input-group date datetimepicker-time date-input"  data-date="" data-date-format="hh:ii" data-link-field="dtp_input3" data-link-format="hh:ii"> <input type="text" class="nowtime" /><span class="input-group-addon" style="padding-top: 35px;"> <span class="glyphicon glyphicon-calendar"></span> </span> <span class="delete">删除</span> </div>')
    });


    //广告轮播动态滚动
    var adCount = 0;
    $('#LIST_AD_FOOTER .ad-list li').eq(0).fadeIn(1000).siblings().hide();
    $('#LIST_AD_FOOTER .ad-list li').click(function () {
        alert($('#LIST_AD_FOOTER .ad-list li').index())
    });


    setInterval(function () {
        adCount++;
        if ($('#LIST_AD_FOOTER .ad-list li').length - 1 < adCount) {
            adCount = 0;
        }
        $('#LIST_AD_FOOTER .ad-list li').eq(adCount).show(1000).siblings().hide();
    }, 4000)

    //设置下拉选项选择值
    $('.down-study').change(function () {
        var selectNum = $(this).children('option:selected').index();
        $('.down-study-valid').html('<option selected value="及以上">及以上</option><option value="高中/中专">高中/中专</option><option value="大专">大专</option><option value="本科">本科</option><option value="硕士">硕士</option><option value="MBA">MBA</option><option value="博士">博士</option>');
        for (var i = 1; i < selectNum; i++) {
            $('.down-study-valid option').eq(1).remove();
        }
    });

    $('.down-experience').change(function () {
        var selectNum = $(this).children('option:selected').index();
        $('.down-experience-valid').html('<option selected value="及以上">及以上</option>\n' +
            '                <option value="1年">1年</option>\n' +
            '                <option value="2年">2年</option>\n' +
            '                <option value="3年">3年</option>\n' +
            '                <option value="4年">4年</option>\n' +
            '                <option value="5年">5年</option>');
        for (var i = 1; i < selectNum; i++) {
            $('.down-experience-valid option').eq(1).remove();
        }
    })

    //设置AlertChoose js动态效果

    /*默认展示效果*/
    var clickInputCount;
    $('.alertChoose input').focus(function () {
        clickInputCount = $(this).index()-1;
        console.log(clickInputCount);
        $('.alertChooseBox').fadeIn(300);
    });
    $('.alertChooseBox .close').click(function () {
        $('.alertChooseBox').fadeOut(300);
    })
    $('.alertChooseBox .body .left h5').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var h5Count = $(this).index();
        $('.alertChooseBox .body .right .content').eq(h5Count).addClass('active').siblings().removeClass('active');
    });
    $('.alertChooseBox .body .content span').click(function () {
        $('.alertChoose input').eq(clickInputCount).val($(this).html());
        $('.alertChooseBox').fadeOut(300);
    });

    //添加求职意向input框
    var showInputCount=1;
    $('.add-alert').click(function(){
        $('.alertChoose input').eq(showInputCount).show();
        showInputCount++;
        if(showInputCount==3){
            $('.add-alert').hide();
        }
    });

    /*城市选择展示效果*/
    $('.alertChoose-city input').focus(function () {
        $('.alertChooseBox-city').fadeIn(300);
    });
    $('.alertChooseBox-city .close').click(function () {
        $('.alertChooseBox-city').fadeOut(300);
    });
    $('.alertChooseBox-city .body li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.alertChooseBox-city .body .content span').click(function () {
        $('.alertChoose-city input').val($(this).html());
        $('.alertChooseBox-city').fadeOut(300);
    });


    //获取短信验证码
    var messageTimeCount = 60;
    var messageTimer;
    $('.message').click(function(){
        console.log('开始倒计时！');
        if($(this).html() == '获取短信验证码'){
            $('.message').html(messageTimeCount+' s后可重新获取');
            $('.message').css({'opacity': 0.3});
            messageTimer = setInterval(function(){
                messageTimeCount--;
                if(messageTimeCount>0){
                    $('.message').html(messageTimeCount+' s 后可重新获取');
                }else{
                    clearInterval(messageTimer);
                    $('.message').html('获取短信验证码');
                    $('.message').css({'opacity': 1});
                    messageTimeCount = 60;
                }
            },1000)

        }
    });

    //商务列表获取联系方式
    $('.showTel').click(function(){
        $(this).parent().find('.alert-box').fadeIn();
    });
    $('.alert-box').hover(function(){
        $(this).show();
    },function(){
        $(this).fadeOut(300);
    });

    //发布页面下拉选项对应'过期'选项
    $('.befroe').change(function(){
        if($(this).find('option:selected').text()=='过期'||$(this).find('option:selected').text()=='未上'){
            $(this).siblings(".next-select").hide();
        }else{
            $(this).siblings(".next-select").show();
        }
    })

    //整数和小数验证
    $('.valid-int, .valid-float-1, .valid-float-2').parent().find('.superWarning').hide();

    $('.valid-int').bind('input propertychange blur' ,function(){
        var This = $(this);
        var pattern = /^[0-9]+$/;
        var value = $(this).val();
        if(!pattern.test(value)){
            This.parent().find('.superWarning').show();
        }else{
            This.parent().find('.superWarning').hide();
        }
    });

    $('.valid-float-1').bind('input propertychange blur' ,function(){
        var This = $(this);
        var pattern = /^\d*\.{0,1}\d{0,1}$/;
        var value = $(this).val();
        if(!pattern.test(value)){
            This.parent().find('.superWarning').show();
        }else{
            This.parent().find('.superWarning').hide();
        }
    });

    $('.valid-float-2').bind('input propertychange blur' ,function(){
        var This = $(this);
        var pattern = /^\d*\.{0,1}\d{0,2}$/;
        var value = $(this).val();
        if(!pattern.test(value)){
            This.parent().find('.superWarning').show();
        }else{
            This.parent().find('.superWarning').hide();
        }
    });

});

