/**
 * 关于网站首页动画相关效果展示相关js部分代码
 * @type {n|jQuery|HTMLElement}
 */
var jq = $;
//页面初始化时执行的逻辑
$(function(){
    jq('header').css("background","rgba(16,90,228,0)");

});


//窗口滚动时触发的对应事件
jq(document).scroll(function () {
    var top_length = jq(document).scrollTop();  //距离浏览器顶部的距离 为0表示置顶
    // console.log(top_length);
    //首页导航栏样式变化
    if (top_length < 5) {
        jq('header').css("background","rgba(16,90,228,0)");
    } else {
        jq('header').css("background","rgba(16,90,228,0.9)");
    }
});

//移动到相关营销应用部分的动画效果
jq(".marketing-list").find("li").on({
    mouseover: function () {
        var self = this;
        jq(self).find()
    }
});



