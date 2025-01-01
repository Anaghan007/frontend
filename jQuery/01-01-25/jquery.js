/* JQuery Effects */

/* Fade Effect */

/*

fadeIn
fadeOut
fadeToggle
fadeTo

*/

/* fadeIn */

$(function () {
    $('#fadeIn').click(function () {
        $('.box-1').fadeIn(2000)
        $('.box-2').fadeIn(3000)
        $('.box-3').fadeIn(4000)
        $('.box-4').fadeIn(5000)
        $('.box-5').fadeIn(6000)
        $('.box-6').fadeIn(7000)
//         $('.box-1').fadeOut(2000)
//         $('.box-2').fadeOut(3000)
//         $('.box-3').fadeOut(4000)
//         $('.box-4').fadeOut(5000)
//         $('.box-5').fadeOut(6000)
//         $('.box-6').fadeOut(7000)
    })
})

$(function () {
    $('#fadeOut').click(function () {
        $('.box-1').fadeOut(2000)
        $('.box-2').fadeOut(3000)
        $('.box-3').fadeOut(4000)
        $('.box-4').fadeOut(5000)
        $('.box-5').fadeOut(6000)
        $('.box-6').fadeOut(7000)
    })
})

// $(function () {
//     $('#fadeToggle').click(function () {
//         $('.box-1').fadeToggle(2000)
//         $('.box-2').fadeToggle(3000)
//         $('.box-3').fadeToggle(4000)
//         $('.box-4').fadeToggle(5000)
//         $('.box-5').fadeToggle(6000)
//         $('.box-6').fadeToggle(7000)
//     })
// })

// $(function () {
//     $('#fadeTo').click(function () {
//         $('.box-1').fadeTo(2000, 0.1)
//         $('.box-2').fadeTo(3000, 0.2)
//         $('.box-3').fadeTo(4000, 0.3)
//         $('.box-4').fadeTo(5000, 0.4)
//         $('.box-5').fadeTo(6000, 0.5)
//         $('.box-6').fadeTo(7000, 0.6)
//     })
// })

/* Slide Effect */

// $(function(){
//     $('.panel').click(function(){
//         $('.menu').slideDown(500)
//     })
// })

// $(function(){
//     $('.panel').click(function(){
//         $('.menu').slideUp(500)
//     })
// })

$(function(){
    $('.panel').click(function(){
        $('.menu').slideToggle(500)
    })
})

/* jQuery Css */

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').css('background-color' , 'red')
//         $('#demo').css('height' , '500px')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').css({
//             backgroundColor : 'red',
//             height : '400px'
//         })

//     })
// })

/* jQuery Animate */

$(function () {
    $('#animate').hover(function () {
        $(this).animate({
          translate : '500px'
        })
        $(this).css({
            backgroundColor: 'green',
        })
    })
})