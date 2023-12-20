// 作者：罗贤宇
// 日期：2023-12-11
$('#moveMenu').click(function() {
    let temp = $('.move');
    if (temp.is(':visible'))
        temp.hide();
    else
        temp.show();
});

$('#placeButton').click(function() {
    let temp = $('.container');
        temp.append('<div id="placeMove" class="box"><p>移动到 x: <input type="text" maxlength="3"> y: <input type="text" maxlength="3"></p></div>');
});
$('#moveButton').click(function() {
    let temp = $('.container');
    temp.append('<div id="smoothMove" class="box"><p >在<input type="text" maxlength="3">秒内移动到 x: <input type="text" maxlength="3"> y: <input type="text" maxlength="3"></p></div>');
});
