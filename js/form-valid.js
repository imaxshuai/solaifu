$(function(){

    /*登演验证*/

    var usernameIsOk = 0;
    var passwordIsOk = 0;

    $(".login .form-group-submit button").attr("disabled",true);

    $('.login .username input').bind('input propertychange blur' ,function(){
        // var pattern = /^[a-zA-Z0-9\u4E00-\u9FA5]{3,16}$/;
        var pattern = /^[a-zA-Z0-9]{3,16}$/;
        var value = $('.sign .login .username input').val();

        if(value == ""){
            $(".login .username p").html("请输入用户名");
            usernameIsOk = 0;
        }else if(!pattern.test(value)){
            $(".login .username p").html("请输入正确的用户名");
            usernameIsOk = 0;
        }
        else{
            $(".login .username p").html("");
            usernameIsOk = 1;
        }
        canLogin();

        console.log(usernameIsOk)

    });

    $('.login .password input').bind('input propertychange blur' ,function(){
        var pattern = /^[a-zA-Z0-9,.?~!@#$%^&*]{6,16}$/;
        var value = $('.sign .login .password input').val();

        if(value == ""){
            $(".login .password p").html("请输入密码");
            passwordIsOk = 0;
        }else if(!pattern.test(value)){
            $(".login .password p").html("请输入正确的密码格式");
            passwordIsOk = 0;
        }
        else{
            $(".login .password p").html("");
            passwordIsOk = 1;
        }
        canLogin();


        console.log(passwordIsOk)
    });

    function canLogin(){

        console.log((passwordIsOk===1)&&(usernameIsOk===1));

        if((passwordIsOk===1)&&(usernameIsOk===1)){
            $(".login .form-group-submit button").attr("disabled",false);
        }else{
            $(".login .form-group-submit button").attr("disabled",true);
        }
    }


    /*注册验证*/
    var telIsOk = 0;
    var passwordIsOk = 0;

    $(".register .form-group-submit button").attr("disabled",true);

    //用户名验证
    $('.register .username input').bind('input propertychange blur' ,function(){
        // var pattern = /^[a-zA-Z0-9\u4E00-\u9FA5]{3,16}$/;
        var pattern = /^[a-zA-Z0-9]{3,16}$/;
        var value = $('.register .username input').val();

        if(value == ""){
            $(".register .username p").html("请输入用户名");
            usernameIsOk = 0;
        }else if(!pattern.test(value)){
            $(".register .username p").html("请输入正确的用户名");
            usernameIsOk = 0;
        }
        else{
            $(".register .username p").html("");
            usernameIsOk = 1;
        }
        canLogin();
    });

    //手机验证
    $('.register .tel input').bind('input propertychange blur' ,function(){
        var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/;
        var value = $('.register .tel input').val();

        if(value == ""){
            $(".register .tel p").html("请输入手机号");
            telIsOk = 0;
        }else if(!pattern.test(value)){
            $(".register .tel p").html("请输入正确的手机号");
            telIsOk = 0;
        }
        else{
            $(".register .tel p").html("");
            telIsOk = 1;
        }
        console.log(telIsOk)
        canRegister();
    });
    //密码验证
    $('.register .password input').bind('input propertychange blur' ,function(){
        var pattern = /^[a-zA-Z0-9,.?~!@#$%^&*]{6,16}$/;
        var value = $('.register .password input').val();

        if(value == ""){
            $(".register .password p").html("请输入密码");
        }else if(!pattern.test(value)){
            $(".register .password p").html("请输入正确的密码格式");
        }
        else{
            $(".register .password p").html("");
        }
    });
    $('.register .re-password input').bind('input propertychange blur' ,function(){
        var value = $('.register .re-password input').val();

        if(value == ""){
            $(".register .re-password p").html("请再次输入密码");
            passwordIsOk = 0;
        }else if($('.register .password input').val() !== value){
            $(".register .re-password p").html("两次输入的密码不同");
            passwordIsOk = 0;
        }
        else{
            $(".register .re-password p").html("");
            passwordIsOk = 1;
        }

        canRegister();
    });


    function canRegister(){
        if((telIsOk===1)&&(passwordIsOk===1)&&(usernameIsOk===1)){
            $(".sign .form-group-submit button").attr("disabled",false);
        }else{
            $(".sign .form-group-submit button").attr("disabled",true);
        }
    }

});

