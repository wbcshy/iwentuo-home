$(function(){
    var window = $(window);
    var jq = $;
    var itemTimer;   //定时器时间控制

    /***
     * 文拓官网轮播图模块
     */
    var wentuoSwiper = new Swiper ('.swiper-container', {
        //设置断点宽度
        breakpoints: {
            1024: {
                width: 500,
            },
            768: {
                width: undefined,//取消width，恢复自适应
            },
            //窗口缩放时设置width
            on: {
                resize: function(){
                    this.params.width = window.innerWidth;
                    this.update();
                },
            }
            },
        speed: 2500,  //轮播图片播放速度
        autoplay: {   //动画自动播放的相关设置
            delay:6000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        loop : true,   //是否重复循环动画
        effect : 'coverflow',  //动画效果
        pagination: {  //分页
            el: '.swiper-pagination',
        },
        navigation: {  //上一页和下一页
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       /* mousewheel: true,*/   //鼠标触发轮播
    });

    //首页网站建设模块部分
    jq('.portfolio').on({
        mouseover : function () {
            var self = jq(this).find(".item-block");
           /* jq(self).stop().animate({width: '290px'}, 500);   //网站建设模块图片动画*/
            self.css({"display":"block", "background": "rgba(122,119,111,0.5)"});
            self.stop(true).animate({"top": "60px"}, 300);
        },
        mouseleave : function () {
            var self = jq(this).find(".item-block");
            self.stop(true).animate({"top": "-60px"}, 300);
            self.css({"display":"none", "background": "rgba(122,119,111,0)"});
        }
    });




});