  // 制作验证码
  var nums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'];
  var verifyCode = null
  drawCode();
  // 绘制验证码
  function drawCode() {
  var canvas = document.getElementById("verifyCanvas");  //获取HTML端画布
  var context = canvas.getContext("2d");                 //获取画布2D上下文
  context.fillStyle = "rgba(255, 255, 255,0)";                  //画布填充色
  context.fillRect(0, 0, canvas.width, canvas.height);   //清空画布
  context.fillStyle = "white";                           //设置字体颜色
  context.font = "5.418667vw w1";                           //设置字体
  var rand = new Array();
  var x = new Array();
  var y = new Array();
  verifyCode = '' 
  for (var i = 0; i < 4; i++) {
      rand[i] = nums[Math.floor(Math.random() * nums.length)]
      x[i] = i * 16 + 10;
      y[i] = Math.random() * 20 + 20;
      let num = rand[i]
      context.fillText(num, x[i], y[i]);
      verifyCode = verifyCode + num
  }
  //alert(rand);
  //画3条随机线
  for (var i = 0; i < 1; i++) {
      drawline(canvas, context);
  }

  // 画30个随机点
  for (var i = 0; i < 30; i++) {
      // drawDot(canvas, context);
  }
  convertCanvasToImage(canvas)
  }

  // 随机线
  function drawline(canvas, context) {
  context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
  context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
  context.lineWidth = 1;                                                  //随机线宽
  context.strokeStyle = 'rgba(250,250,250)';                               //随机线描边属性
  context.stroke();                                                         //描边，即起点描到终点
  }

  // 绘制图片
  function convertCanvasToImage(canvas) {
  document.getElementById("verifyCanvas").style.display = "none";
  var image = document.getElementById("code_img");
  image.src = canvas.toDataURL("image/png");
  return image;
  }

  // 点击图片刷新
  let refreshVerifyCode = function () {
      $('#verifyCanvas').remove();
      $('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
      drawCode();
      }
  document.getElementById('code_img').onclick = refreshVerifyCode


  // 留言发送
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
    const form_code = $('#verify').val()
    if (!form_code) {
      alert('请填写验证码');
      return
    }

    if (form_code.toLowerCase() != verifyCode.toLowerCase()) {
      alert('验证码不正确');
      return
    }

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
          $('#verify').val('')
          // refresh()
          refreshVerifyCode()
        }else{
          alert(res.msg);
          yzmchange()
          $('#form_code').val('')
        }
      }
    });
  }