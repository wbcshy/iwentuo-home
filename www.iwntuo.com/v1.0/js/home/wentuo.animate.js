/**
 * 关于网站首页动画相关效果展示相关js部分代码
 * @type {n|jQuery|HTMLElement}
 */
var jq = $;
/**
 * 窗口滚动时触发的对应事件
 */
jq(window).scroll(function () {
    var self = this;
    var top_length = self.scrollTop;  //距离浏览器顶部的距离

    //首页导航栏样式变化
    $('header').css("background","rgba(16,90,228,0.9)");


});

