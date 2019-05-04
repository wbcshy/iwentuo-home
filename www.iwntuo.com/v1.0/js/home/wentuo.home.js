var jq = $;

//窗口滚动时触发的对应事件
jq(window).scroll(function () {
    var self = this;
    var top_length = jq(document).scrollTop();  //距离浏览器顶部的距离 为0表示置顶
    //首页导航栏样式变化
    jq('header').css("background","rgba(16,90,228,0.9)");
    if (top_length == 0) {
        jq('header').css("background","rgba(16,90,228,0)");
    }

    var document_height = jq(self).scrollTop();  //滚动条划过距离相距顶点
    var search_banner_height = jq("header").height();

    //创新思维部分高度相关数据
    var siwei_bottom_height = parseInt(jq("#siwei").offset().top);
    var siwei_div_height = jq("#siwei").height();

    //丰富实践部分高度相关数据
    var shijian_bottom_height = parseInt(jq("#shijian").offset().top);
    var shijian_div_height = jq("#shijian").height();

    //完善品质部分高度相关数据
    var pinzhi_bottom_height = parseInt(jq("#pinzhi").offset().top);
    var pinzhi_div_height = jq("#pinzhi").height();

    //首页海报部分图片相关函数的调用
    animateImgCustom(document_height, siwei_bottom_height, siwei_div_height, search_banner_height, "siwei-img", "conduct-animate");
    animateImgCustom(document_height, shijian_bottom_height, shijian_div_height, search_banner_height, "shijian-img", "conduct-animate");
    animateImgCustom(document_height, pinzhi_bottom_height, pinzhi_div_height, search_banner_height, "pinzhi-img", "conduct-animate");
});

//首页网站建设模块部分监听事件
jq('.portfolio').on({
    mouseover : function () {
        var self = jq(this).find(".item-block");
        /* jq(self).stop().animate({width: '290px'}, 500);   //网站建设模块图片动画*/
        self.css({"display":"block", "background": "rgba(122,119,111,0.5)"});
        self.stop(true).animate({"top": "60px"}, 299);
    },
    mouseleave : function () {
        var self = jq(this).find(".item-block");
        self.stop(true).animate({"top": "-60px"}, 299);
        self.css({"display":"none", "background": "rgba(122,119,111,0)"});
    }
});

/**
 *  将div内的图片做自定义动画实现
 * @param documentHeight 滚轮运动时划过的距离
 * @param bottomBorderHeight div脚border具体浏览器起始点的距离
 * @param divHeight div自身的高度
 * @param searchBannerHeight 首页导航栏的高度
 * @param 包括图片的div的Id名称
 * @param sytleClassName 定义动画样式的class名称
 */
var animateImgCustom = function (documentHeight, bottomBorderHeight, divHeight, searchBannerHeight, imgDivIdName, sytleClassName) {
    if (documentHeight > (bottomBorderHeight - 2* divHeight) && documentHeight < bottomBorderHeight + divHeight - searchBannerHeight) {
        jq("#" + imgDivIdName).addClass(sytleClassName);
    } else {
        jq("#" + imgDivIdName).removeClass(sytleClassName);
    }
};


//页面初始化的函数
$(function(){
    jq('header').css("background","rgba(16,90,228,0)");

});