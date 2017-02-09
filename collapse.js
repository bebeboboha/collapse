$(document).ready(function() {
    $('.close').hide()
    $('.panel').click(function() {
        if ($(this).children('.collapse').hasClass('open')) {
            $(this).children('.collapse').slideUp()
            $(this).children('.collapse').addClass('close')
            $('.open').removeClass('open')

        } else {
            $(this).children('.collapse').slideToggle()
            $(this).children('.collapse').toggleClass('close')
            $('.open').slideUp()
            $('.open').removeClass('open')
            $(this).children('.collapse').addClass('open')
        }

    })
})