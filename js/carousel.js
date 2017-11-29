$(function(){
    //详情页的轮播
    var count = $(".pro-detail .carousel .small li").length;
    var index = 0;
    console.log(count);
    $(" .pro-detail .carousel .big").append($(" .pro-detail .carousel .small li").eq(0).clone());

    $(" .pro-detail .carousel .tab01").click(function () {
        index--;
        console.log('当前的index='+ index);
        if(count<=4){
            if(index>=0){
                imgAdd(index)
            }else{
                index++;
            }
        }else {
            if (index < 0) {
                index++;
                console.log('动不了了哦！')
            } else if (index < 2) {
                imgAdd(index);
            } else if (index < count - 1) {
                imgMove(index);
            } else if (index < count) {
                imgAdd(index);
            }
        }

    });
    $(" .pro-detail .carousel .tab02").click(function () {
        index++;
        console.log('当前的index='+ index);
        if(count<=4){
            if(index<count){
                imgAdd(index)
            }else{
                index--;
            }
        }else{
            if(index<3){
                imgAdd(index);
            }else if(index<count-1){
                imgMove(index);
            }else if(index<count){
                imgAdd(index);
            }else{
                index--;
                console.log('动不了了哦！');
            }
        }
    });

    $(" .pro-detail .carousel .small li").click(function(){
        index=$(this).index();
        if(index<3){
            imgAdd(index);
        }else if(index<count-1){
            imgMove(index);
        }else if(index<count){
            imgAdd(index);
        }
    });

    function imgAdd(index){
        $(" .pro-detail .carousel .big li").remove();
        $(" .pro-detail .carousel .small li").removeClass('activeImg').eq(index).addClass('activeImg');
        $(" .pro-detail .carousel .big").append($(" .pro-detail .carousel .small li").eq(index).clone());
    }
    function imgMove(index){
        $(" .pro-detail .carousel .small").animate({
            left: -(index-2)*(70+6)+15+'px'
        },300);
        imgAdd(index);
    }




    //一级标签页下面的轮播
    var j = 0;
    var jMax = $(".right .carousel .show-img li").length;
    for(var i=0; i<jMax; i++){
        $(".right .carousel .dot ul div").append("<li></li>");
    }
    showImg(j);

    //设置定时轮播
    var carouselTime = setInterval(function(){
        j++;
        if(j>=5){
            j=0;
        }
        showImg(j);
    },3000);
    //设置悬浮停止滚动事件
    $(".right .carousel").hover(function(){
        clearInterval(carouselTime);
    },function(){
        carouselTime = setInterval(function(){
            j++;
            if(j>=5){
                j=0;
            }
            showImg(j);
        },5000);
    });

    //设置点击跳转事件
    $(".right .carousel .dot li").click(function(){
        j=$(this).index();
        showImg(j);
    })

    function showImg(j){
        $(".right .carousel .show-img li").eq(j).fadeIn().siblings().hide();
        $(".right .carousel .dot li").eq(j).addClass("active").siblings().removeClass("active");
    }

});


