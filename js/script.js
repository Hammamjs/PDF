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



let imgApi = [
    {img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
]



    setInterval(() =>  {
let random  = Math.floor(Math.random() * imgApi.length);

document.querySelector('.card').style.backgroundImage = `url(${imgApi[random].img})`;

    }, 4000)

    let effect = setInterval(() => {
        word.textContent += script[i];
        i++;

        if (i > script.length - 1) {
            clearInterval(effect)
        }
    },100)










    // console.log(word.getAttribute())






})

