
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
  $(".partone").css("height",windowHeight)
  console.log(windowHeight,111)


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

  var urlhost = window.parent.document.referrer;
 alert(urlhost)
})

