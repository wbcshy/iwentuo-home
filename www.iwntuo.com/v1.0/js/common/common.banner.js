/**
 * 关于网站首页动画相关效果展示相关js部分代码
 * @type {n|jQuery|HTMLElement}
 */
var jq = $;

//页面初始化时执行的逻辑
jq(function(){

    jq('header').css("background","rgba(79,86,101,0)");
});


//窗口滚动时触发的对应事件
jq(document).scroll(function () {
    var top_length = jq(document).scrollTop();  //距离浏览器顶部的距离 为0表示置顶
    //首页导航栏样式变化
    if (top_length < 5) {
        jq('header').css("background","rgba(79,86,101,0)");
    } else {
        jq('header').css("background","rgba(79,86,101,0.9)");
    }
});








