$(() => {

    $('.header .bar').on('click' , function ()  {
                $('.nav').css({
            left : '0px'
        })

    })






    $('.nav span').on('click' , function()  {
        $('.nav').css({
            left : '-100%'
        })
    })

    
    let word  = document.querySelector('.card p');

    let script = word.getAttribute('data-sec');

    let i = 0;

let img = ['/imgs/01.jpg', '/imgs/02.jpg', '/imgs/03.jpg', '/imgs/04.jpg', '/imgs/05.jpg', '/imgs/06.jpg', ];

try {


    setInterval(() =>  {
let random  = Math.floor(Math.random() * img.length);

document.querySelector('.card').style.backgroundImage = `url(${img[random]})`

    }, 4000)

    let effect = setInterval(() => {
        word.textContent += script[i];
        i++;

        if (i > script.length - 1) {
            clearInterval(effect)
        }
    },100)

}finally {

}









    // console.log(word.getAttribute())






})

