// 作者：罗贤宇
// 日期：2023-12-12
document.getElementById('begin').addEventListener('click', function() {
    const elements = document.getElementsByClassName('box');
    const queue = [];

    for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        if (rect.left > 301 && rect.right < 1315 && rect.top > 98) {
            queue.push(elements[i].id);
        }
    }

    // 对队列中的元素按照位置进行排序
    queue.sort(function(a, b) {
        const rectA = document.getElementById(a).getBoundingClientRect();
        const rectB = document.getElementById(b).getBoundingClientRect();
        if (rectA.top === rectB.top) {
            return rectA.left - rectB.left;
        }
        return rectA.top - rectB.top;
    });

    console.log(queue); // 输出排序后的id队列
    queue.forEach((element) => {
       if (element==="placeMove"){
           readMovePosition();

       }else if (element==="smoothMove"){
           readSmoothMovePosition()
       }
        setTimeout(function() {
            console.log("Step 3");
        }, 500);
    });
});
function readMovePosition() {
    const moveBox = document.querySelector('#placeMove.box');
    if (!moveBox) {
        console.log('未找到移动组件');
        return;
    }

    const xInput = moveBox.querySelector('input[type="text"]:nth-of-type(1)');
    const yInput = moveBox.querySelector('input[type="text"]:nth-of-type(2)');
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);

    console.log(`x: ${x}, y: ${y}`);

    const obj = $('.obj img');
    obj.css('left', `${x}px`);
    obj.css('top', `${y}px`);
}

function readSmoothMovePosition() {
    const smoothMoveBox = document.querySelector('#smoothMove.box');
    if (!smoothMoveBox) {
        console.log('未找到平滑移动组件');
        return;
    }

    const timeInput = smoothMoveBox.querySelector('input[type="text"]:nth-of-type(1)');
    const xInput = smoothMoveBox.querySelector('input[type="text"]:nth-of-type(2)');
    const yInput = smoothMoveBox.querySelector('input[type="text"]:nth-of-type(3)');

    const time = parseFloat(timeInput.value);
    const endX = parseInt(xInput.value);
    const endY = parseInt(yInput.value);


    const icon = document.querySelector('.obj img');
    const rect = icon.getBoundingClientRect();
    const startY= parseInt(rect.left);

    const startX= parseInt(rect.top);

    icon.style.animationPlayState = 'running';
    console.log(`${time}, x: ${endX}, y: ${endY},${startY},${startX}`);

    icon.style.setProperty("--endX", `${endX}px`);
    icon.style.setProperty("--endY", `${endY}px`);
    icon.style.setProperty("--animationDuration", `${time}s`);
    icon.style.setProperty("----startY", `${startY}px`);
    icon.style.setProperty("----startX", `${startX}px`);

    const targetDiv = document.querySelector('.obj img');

    targetDiv.addEventListener('animationend', () => {
        obj.css('left', `${endX}px`);
        obj.css('top', `${endY}px`);
    });
}

