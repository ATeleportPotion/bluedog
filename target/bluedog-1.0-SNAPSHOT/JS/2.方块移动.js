// 作者：罗贤宇
// 日期：2023-12-12
let isDragging = false;
let dragItem = null;
let offset = { x: 0, y: 0 };

document.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('box') && e.target.closest('.container')) {
        isDragging = true;
        dragItem = e.target;
        offset.x = e.clientX - dragItem.getBoundingClientRect().left + 301;
        offset.y = e.clientY - dragItem.getBoundingClientRect().top + 98;
    }
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        dragItem.style.left = e.clientX - offset.x + 'px';
        dragItem.style.top = e.clientY - offset.y + 'px';
    }
});

document.addEventListener('mouseup', function (e) {
    if (isDragging) {
        const boxes = document.querySelectorAll('.container .box');
        boxes.forEach(function (otherBox) {
            if (otherBox !== dragItem) {
                let rect1 = dragItem.getBoundingClientRect();
                let rect2 = otherBox.getBoundingClientRect();
                if (Math.abs(rect1.bottom - rect2.top) < 40) {
                    dragItem.style.top = rect2.top - rect1.height -98 + 'px';
                } else if (Math.abs(rect1.top - rect2.bottom) < 40) {
                    dragItem.style.top =  rect2.bottom - 98 + 'px';
                }
            }
        });
    }
    isDragging = false;
    dragItem = null;
});




let delVisible = false;

$(window).on('keydown', function(e) {
    if (e.key === 'd') {
        if (!delVisible) {
            $('.del').show();
            $('.box').on('click', function() {
                $(this).remove();
            });
            delVisible = true;
        } else {
            $('.del').hide();
            $('.box').off('click');
            delVisible = false;
        }
    }
});


