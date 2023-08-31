
// header
$("#header").append(
  "<div class='mheadnav_info'>"+
      "<div class='mheadnav'> <a href='./index.html'> <img src='./img/mlogo.png' alt='' srcset='' class='mlogo tabimg1'> </a> </div>"+
      "<div class='mheadtab'> <a href='./tab.html'> <img src='./img/tab.png' alt='' srcset='' class='mlogo tabimg2'> </a> </div>"
      +"</div>"
      );

// footer
$("#footer").append(
      "<div class='footertrans'>"+
                  "<span class='dotblue ju' style='display: inline-block; padding-top: 10px;'>联系我们</span><br />"+
              "<div class='footercontent'>"+
                  "<div class='footercontent-left'>"+
                      "<span class='dotblue ju'>电话</span>"+
                      "<span class='dotblue ju'>邮箱</span>"+
                      "<span class='dotblue ju'>网址</span>"+
                      "<span class='dotblue ju'>地址</span>"+
                  "</div>"+
                  "<div class='footercontent-right'>"+
                      "021-64030698<br />"+
                      "marketing@datageo.cn<br />"+
                      "http://www.datageo.cn<br />"+
                      "上海市徐汇区云锦路700号西岸智塔西塔32层3208室"+
                  "</div>"+
              "</div>"+
          "</div>"+
          "<div style='font-family: w1;font-size: 2.6666vw;color: #ffffff;text-align: center;'>上海数阖信息技术有限公司© 2018-2023  版权所有 沪ICP备2023002396号-1</div>"
);


// 获取屏幕的高度
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
var navHeight = $('.mheadnav').height() 
$(".partone").css("height",windowHeight - navHeight)


// 首页图片加载
var num = 0;
var arr = "clogo" + num;
for(i=0;i<40;i++){
  num++;
  arr = "clogo" + num;
  $(".swiper-wrapper").append(`<div class="ptspansdiv swiper-slide"><img src="./img/${arr}.png" alt="" class="ptplogoimg"></div>`)
}

// 服务内容底部跳转链接
$(document).ready(function () {
  $(".citybanner").click(function () {
    window.location.href="./service_city.html"
  });

  $(".buiniessbanner").click(function () {
    window.location.href="./service_business.html"
  });

  $(".travelbanner").click(function () {
    window.location.href="./service_cultural.html"
  });

  $(".brandbanner").click(function () {
    window.location.href="./service_brand.html"
  });

  $(".aibanner").click(function () {
    window.location.href="./service_big.html"
  });

// tab页高亮
  var urlhost = window.parent.document.referrer;
    sessionStorage.setItem("last_url",urlhost) //存储名字为last_url值为urlhost的变量
    // console.log(sessionStorage, 1111)
    var currentURL = sessionStorage.getItem("last_url")
    // console.log(currentURL)
    if (currentURL.indexOf('index.html') != -1){
      console.log(3132432)
      $(".tabli a").eq(0).addClass("bluecolor")
    }
    if (currentURL.indexOf('service') != -1){
      console.log(3132432)
      $(".tabli a").eq(1).addClass("bluecolor")
      if (currentURL.indexOf('service_city.html') != -1) {
        $(".ptpli a").eq(0).addClass("bluecolor")
      }
      if (currentURL.indexOf('service_business.html') != -1) {
        $(".ptpli a").eq(1).addClass("bluecolor")
      }
      if (currentURL.indexOf('service_cultural.html') != -1) {
        $(".ptpli a").eq(2).addClass("bluecolor")
      }
      if (currentURL.indexOf('service_brand.html') != -1) {
        $(".ptpli a").eq(3).addClass("bluecolor")
      }
      if (currentURL.indexOf('service_big.html') != -1) {
        $(".ptpli a").eq(4).addClass("bluecolor")
      }
    }
    if (currentURL.indexOf('customer.html') != -1){
      console.log(3132432)
      $(".tabli a").eq(2).addClass("bluecolor")
    }
    if (currentURL.indexOf('contact.html') != -1){
      console.log(3132432)
      $(".tabli a").eq(3).addClass("bluecolor")
    }
})

