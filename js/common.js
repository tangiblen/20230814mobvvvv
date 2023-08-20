// header
$("#header").append(
    "<div class='mheadnav_info'>"+
        "<div class='mheadnav'><img src='./img/mlogo.png' alt='' srcset='' class='mlogo tabimg1'></div>"+
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


var yzmkey
    $(function() {
      yzmkey = Math.random()
      $('#yzm').attr('src', 'https://api.it120.cc/shuzijihe/verification/pic/get?key=' + yzmkey)
    })
    function yzmchange() {
      yzmkey = Math.random()
      $('#yzm').attr('src', 'https://api.it120.cc/shuzijihe/verification/pic/get?key=' + yzmkey)
    }
    function submit() {
      const form_name = $('#form_name').val()
      if (!form_name) {
        alert('请填写姓名');
        return
      }
      const form_mobile = $('#form_mobile').val()
      if (!form_mobile) {
        alert('请填写手机号');
        return
      }
      const form_mail = $('#form_mail').val()
      if (!form_mail) {
        alert('请填写邮箱');
        return
      }
      const form_com = $('#form_com').val()
      if (!form_com) {
        alert('请填写公司');
        return
      }
      const form_content = $('#form_content').val()
      if (!form_content) {
        alert('请填写留言');
        return
      }
      const form_code = $('#form_code').val()
      if (!form_code) {
        alert('请填写验证码');
        return
      }
      $.ajax({
        url:"https://api.it120.cc/shuzijihe/verification/pic/check",
        type:"POST",
        data:{"code": form_code,"rnd":Math.random(),"key": yzmkey},
        success:function(a){
          if(a.code == 0){
            const extJsonStr = {
              "姓名": form_name,
              "邮箱": form_mail,
              "公司": form_com
            }
            const d = {
              content: form_content,
              mobile: form_mobile,
              extJsonStr: JSON.stringify(extJsonStr)
            }
            addComment(d)
          }else{
            alert('验证码错误');
            yzmchange()
            $('#form_code').val('')
          }
        }
      });
    }
    function addComment(data) {
      $.ajax({
        url:"https://api.it120.cc/shuzijihe/comment/add",
        type:"POST",
        data,
        success:function(a){
          if(a.code == 0){
            alert('留言提交成功');
            $('#form_name').val('')
            $('#form_mobile').val('')
            $('#form_mail').val('')
            $('#form_com').val('')
            $('#form_content').val('')
            $('#form_code').val('')
          }else{
            alert(res.msg);
            yzmchange()
            $('#form_code').val('')
          }
        }
      });
    }
