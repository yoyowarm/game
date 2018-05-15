const body = document.querySelector('body')
const resoult = document.querySelector('.new img')
const img = window.document.querySelectorAll('img')
const text = document.querySelector('.text')
document.get

// img.addEventListener('click', newRobit)
img.forEach(function(el) {
    el.addEventListener('click', newRobit)
        // console.log(el.dataset.count)
})

function newRobit(el) {
    let count = parseInt(this.dataset.count)
    let robotReturn = parseInt(Math.round(Math.random() * 3));
    console.log(count)
    console.log(robotReturn)
    if (robotReturn === 0) {
        return robotReturn === 1
    }
    resoult.src = ``
    resoult.src = `img/robt-${robotReturn}.png`;
    if (count === robotReturn) {
        text.innerHTML = "平手"
        text.classList = "text a"
        console.log('平手')
    }
    if (robotReturn > count) {
        console.log('玩家輸了')
        text.innerHTML = "玩家輸了"
        text.classList = "text b"
    }
    if (robotReturn < count) {
        console.log('玩家贏了')
        text.innerHTML = "玩家贏了"
        text.classList = "text c"

    }
    if (robotReturn === 3 && count === 1) {
        console.log('玩家贏了')
        text.innerHTML = "玩家贏了"
        text.classList = "text c"
    }
    if (robotReturn === 1 && count === 3) {
        console.log('玩家輸了')
        text.innerHTML = "玩家輸了"
        text.classList = "text b"
    }

}