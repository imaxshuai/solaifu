const query = require('../unit/query');

exports.getUser = async (ctx)=>{
    ctx.body = '你好啊！ Koa2.' + 'header0'+Math.floor(Math.random()*4+1)+'.png';
};

exports.loginUser = async (ctx)=>{

    let response = {
        success: false,
        info: '',
        userinfo: null,
    };
    response.userinfo = JSON.parse(ctx.request.body);
    console.log(response.userinfo);

    let getUserQuery = `select * from slf_user where tel='${response.userinfo.tel}' and password='${response.userinfo.password}'`;

    function save(){
        return new Promise((reslove, reject)=>{
            query(getUserQuery, function(err, vals){
                if(err){
                    reject(err);
                }else{
                    if(vals.length>0){
                        response.success = true;
                        response.info = '登录成功！';
                        response.userinfo = vals[0];
                        reslove(response);
                    }else{
                        response.info = '用户名或密码不正确！';
                        reslove(response);
                    }
                }
            });
        })
    }

    await save();

    console.log(response);
    ctx.body = response;

};

exports.registerUser = async (ctx)=>{

    let response = {
        success: false,
        info: '',
        userinfo: null,
    };
    response.userinfo = JSON.parse(ctx.request.body);
    response.userinfo.username = '福民_'+response.userinfo.tel.substr(5);
    response.userinfo.regTime = new Date();
    response.userinfo.avatar = 'header0'+Math.floor(Math.random()*4+1)+'.png';
    console.log(response.userinfo.avatar);

    let getUserQuery = `select * from slf_user where tel='${response.userinfo.tel}'`
    let addUserQuery = `insert into slf_user(username,tel,password,regtime,avatar) values ('${response.userinfo.username}','${response.userinfo.tel}','${response.userinfo.password}','${response.userinfo.regTime}','${response.userinfo.avatar}')`;

    function save(){
        return new Promise((reslove, reject)=>{
            query(getUserQuery, function(err, vals){
                if(err){
                    reject(err);
                }else{
                    if(vals.length>0){
                        response.info = '当前手机号已注册';
                        reslove(response);
                    }else{
                        query(addUserQuery, function(err){
                            if(err){
                                reject(err);
                            }else{
                                response.success = true;
                                response.info = '注册成功';
                                reslove(response);
                            }
                        });
                    }
                }
            });
        })
    }

    await save();

    console.log(response);
    ctx.body = response;

};