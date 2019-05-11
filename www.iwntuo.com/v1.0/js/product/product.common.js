//客户案例跳转查看案例等模块部分监听事件
$('.portfolio').on({
    mouseover : function () {
        var self = $(this).find(".item-img-block");
        self.css({"display":"block", "background": "rgba(122,119,111,0.5)"});
        self.stop(true).animate({"top": "60px"}, 299);
    },
    mouseleave : function () {
        var self = $(this).find(".item-img-block");
        self.stop(true).animate({"top": "-60px"}, 299);
        self.css({"display":"none", "background": "rgba(122,119,111,0)"});
    }
});
