// 作者：罗贤宇
// 日期：2023-12-9
const login = document.querySelector('.login')
const login1 = document.querySelector('.login1')
const backGround = document.querySelector('.background')

login.onclick = function () {
    if (!backGround.classList.contains('open') && login.getAttribute("id") === "noneLogin") {

        backGround.classList.toggle("open")
    }
}
login1.onclick = function () {
    if (!backGround.classList.contains('open') && login.getAttribute("id") === "noneLogin") {
        backGround.classList.toggle("open")
    }
}


const back = document.querySelector('.back')
back.onclick = function(){
    if (backGround.classList.contains('open'))
        backGround.classList.toggle("open")
}

$('#myCheckbox').change(function () {

    if(this.checked){
        $('.in h1').text("用户注册");
        $('.Forget').hide();
    }else{
        $('.in h1').text("用户登录");
        $('.Forget').show();
    }

});


document.getElementById("tijiaobiaodan").addEventListener("submit", function(event) {

    event.preventDefault();
    if ($('#myCheckbox').prop('checked')) {
        $.post({
            url: "http://localhost:8080/user/register",
            data: {"account": $("#name").val(), "password": $("#pwd").val()},
            success: function (isTrue) {
                if (isTrue) {
                    var hintElement = document.getElementById("myHint");
                    hintElement.style.color = "green";
                    hintElement.textContent = "注册成功!";
                    $('#myCheckbox').prop('checked', false);
                    hintElement.style.display = "block";

                } else {

                    var hintElement = document.getElementById("myHint");
                    hintElement.style.color = "red";
                    hintElement.textContent = "已存在该账号,请重试!";
                    hintElement.style.display = "block";
                }

            }
        }).fail(function (xhr, status, error) {
            // 错误回调函数
            console.log(error);
        });


    } else {
        $.post({
            url: "http://localhost:8080/user/login",
            data: {"account": $("#name").val(), "password": $("#pwd").val()},
            success: function (isTrue) {
                if (isTrue) {
                    $('.navbar .login').attr("id", "isLogin");
                    backGround.classList.toggle("open")
                    login.classList.toggle("open")
                    // $('.login1').classList.toggle("open")
                    $('.login.open').html('<img src="../image/头像.png" alt="用户头像">');
                    $('.login1').html('<img src="../image/头像.png" alt="用户头像">');
                } else {

                    var hintElement = document.getElementById("myHint");
                    hintElement.style.color = "red";
                    hintElement.textContent = "账号或密码错误,请重试!";
                    hintElement.style.display = "block";
                }

            }
        }).fail(function (xhr, status, error) {
            // 错误回调函数
            console.log(error);
        });
    }

});


const next = document.querySelector('.btn-1');
next.onclick = function(){
    console.log('aaa');
    if ($('.navbar .login').attr("id") === "noneLogin")
        backGround.classList.toggle("open")
    else
        window.location.href = "../HTML/2.主体.html";
}
