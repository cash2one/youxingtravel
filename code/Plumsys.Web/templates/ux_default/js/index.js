//页面加载函数
$(function () {
    //首页滚动
    $(".rslides").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        hidenav: false,
        speed: 500,
        namespace: "homewrap",
        prevText: "",
        nextText: "",
        timeout: 8e3
    });
    $("img.lazy_img").lazyload({
        event: "scroll",
        effect: "fadeIn",
        skip_invisible: !1,
        failure_limit: 12
    })
})