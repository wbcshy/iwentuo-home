var jq = $;

//资讯列表分页相关
layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage,layer = layui.layer;

    laypage.render({
        elem: 'information-page',  //页面对应的div id
        count: 100,   //总条数
        limit:5,    //每页显示的条数
        layout: ['count', 'prev', 'page', 'next', 'skip'],   //页面显示的样式
        jump: function(obj, first){
            //obj包含了当前分页的所有参数，比如：
            console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
            console.log(obj.limit); //得到每页显示的条数

            //首次不执行
            if(!first){
                //do something
            }
        }
    });
});