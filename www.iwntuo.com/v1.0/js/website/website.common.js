var jq = $;

//移动到相关营销应用部分的动画效果
jq(".marketing-list").find("li").on({
    mouseover: function () {
        jq(this).find('.pic-line').addClass('animated slideInLeft');
    },
    mouseleave : function() {
        jq(this).find('.pic-line').removeClass('slideInLeft');
    }
});

//网站后期代维护图标选中时样式变化
jq(".website-fix-img").find("img").mouseover(function () {
    var self = this;
    var imageStr = jq(self).prop("src");
    var imageArr = imageStr.split("/");
    var imageName = imageArr[imageArr.length - 1];
    var hoverImageName = imageName.split(".")[0] + "-hover.png";
    var hoverImageUrl = "";
    imageArr.forEach(function (value,index) {
        if (index < imageArr.length - 1) {
            hoverImageUrl += (value + "/");
        }
    });
    hoverImageUrl += hoverImageName;
    // console.log(hoverImageUrl);
    jq(self).prop("src", hoverImageUrl);
});

//网站后期代维护图标未选中时样式变化
jq(".website-fix-img").find("img").mouseleave(function () {
    var self = this;
    var imageStrNoHover = jq(self).prop("src");
    var imageNoHoverArr = imageStrNoHover.split("/");
    var imageNoHoverNameArr = imageNoHoverArr[imageNoHoverArr.length - 1].split("-hover");
    var imageNoHoverName = imageNoHoverNameArr[0] + ".png";
    // console.log(imageNoHoverName);
    var hoverImageUrl = "";
    imageNoHoverArr.forEach(function (value,index) {
        if (index < imageNoHoverArr.length - 1) {
            hoverImageUrl += (value + "/");
        }
    });
    hoverImageUrl += imageNoHoverName;
    jq(self).prop("src", hoverImageUrl);
});