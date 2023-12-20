// 作者：罗贤宇
// 日期：2023-12-3
const obj = $('.obj img');

setInterval(() => {
    const offset = obj.offset();
    const x = offset.left;
    const y = offset.top;
    $('#x').attr('placeholder', parseInt(x) - 1317);
    $('#y').attr('placeholder', parseInt(y) - 97);
}, 1000); // 每秒钟获取一次坐标

const xInput = $('#x');
const yInput = $('#y');

function updateImagePosition() {
    const x1 = xInput.val();
    const y1 = yInput.val();
    console.log(obj.css('left'))
    obj.css('left', `${x1}px`);
    obj.css('top', `${y1}px`);
}

function updateInputs() {
    const x2 = parseInt(obj.css('left'));
    const y2 = parseInt(obj.css('top'));
    xInput.val(x2);
    yInput.val(y2);
}

xInput.on('input', updateImagePosition);
yInput.on('input', updateImagePosition);
obj.on('load', updateInputs);

