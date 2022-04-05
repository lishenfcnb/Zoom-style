// 获取所有.item元素
let items = document.querySelectorAll('.item');

// 设置选中态样式
function setActive() {
    // 
    items.forEach((item) => {
            item.classList.remove('active');
        })
        // 
    this.classList.add('active');
}
// 
items.forEach((item) => {
    item.addEventListener('click', setActive);
})