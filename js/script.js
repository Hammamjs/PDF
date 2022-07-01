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
})

