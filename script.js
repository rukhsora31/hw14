const qu1 = prompt('введите ваше имя')
const qu2 = prompt('введите цвет фона страницы')
const qu3 = prompt('введите цвет фона карточки')
const qu4 = prompt('цвет текста')
const qu5 = prompt('вставьте картинку')
const title = document.querySelector('h1')
const body = document.querySelector('body')
const box = document.querySelector('.box')
const img = document.querySelector('img')

title.innerText = qu1

body.style.backgroundColor = qu2
box.style.backgroundColor = qu3
box.style.color = qu4
img.src = qu5

