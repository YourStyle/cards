let header = document.getElementById('header')
let title = document.getElementById('title')
let excerpt = document.getElementById('excerpt')
let profile_img = document.getElementById('profile_img')
let name = document.getElementById('name')
let date = document.getElementById('date')

let animated_bgs = document.querySelectorAll('.animated-bg')
let animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1609958355807-ba08344ad66f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" >'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, voluptas!'
    profile_img.innerHTML = '<img src="https://sun1-88.userapi.com/impg/c855728/v855728807/1c56d6/d7pFX87bLJg.jpg?size=50x0&quality=96&crop=781,199,1232,1232&sign=58da48b371bd5cdb8b7ae44cc5e8d9e3&ava=1" alt="">'
    name.innerHTML = 'Anton Chukseev'
    date.innerHTML = 'Oct 17, 2020'

    animated_bgs.forEach( bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach( bg => bg.classList.remove('animated-bg-text'))
}