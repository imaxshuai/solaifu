const query = require('../unit/query');

exports.getUser = async (ctx)=>{
    ctx.body = '你好啊！ Koa2.';
    query("select * from users", function(err, vals, fields){
        if(err){
            console.log(err);
        }else{
            console.log(vals);
        }
    })
};

exports.registerUser = async (ctx)=>{
    let userinfo = JSON.parse(ctx.request.body);
    let queryString = `insert into users(username,tel,password) values ('${userinfo.tel}','${userinfo.tel}','${userinfo.password}')`;
    query(queryString, function(err, vals){
        if(err){
            ctx.body = {
                success: false,
                info: '该手机号已注册！'
            };
            throw err;
        }
    })

    ctx.body = {
        success: true,
        info: '注册成功！',
        userinfo: userinfo
    };

};