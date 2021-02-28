$(document).ready(function(){
    $('.games-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 374,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});

$(document).ready(function(){
    $('.video_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 374,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
});

$(function(){
    $('#header_link-1').mouseover(function(){
        $('#header_link-1__block').addClass("header_link-hover")
    });
    $('#header_link-1').mouseout(function(){
        $('#header_link-1__block').removeClass("header_link-hover")
    });
    $('#header_link-2').mouseover(function(){
        $('#header_link-2__block').addClass("header_link-hover")
    });
    $('#header_link-2').mouseout(function(){
        $('#header_link-2__block').removeClass("header_link-hover")
    });
    $('#header_link-3').mouseover(function(){
        $('#header_link-3__block').addClass("header_link-hover")
    });
    $('#header_link-3').mouseout(function(){
        $('#header_link-3__block').removeClass("header_link-hover")
    });
    $('#header_link-4').mouseover(function(){
        $('#header_link-4__block').addClass("header_link-hover")
    });
    $('#header_link-4').mouseout(function(){
        $('#header_link-4__block').removeClass("header_link-hover")
    });
    $('#header_link-5').mouseover(function(){
        $('#header_link-5__block').addClass("header_link-hover")
    });
    $('#header_link-5').mouseout(function(){
        $('#header_link-5__block').removeClass("header_link-hover")
    });
});


$(function(){
    $('.select_1-text').click(function(){
        $('.select_1-block__item').toggleClass('select_block__item-active');
        $('.select_1-text::after').css('display','none')
        $('.select_2-block__item').removeClass('select_block__item-active');
    })
    $('.select_1-block__item-text').on('mouseover', function(){
        $(".select_1-text").text($(this).text());
    })
    $('.select_1-block__item-text').on('click', function(){
        $(".select_1-text").text($(this).text());
        $('.select_1-block__item').removeClass('select_block__item-active');
    })
});

$(function(){
    $('.select_2-text').click(function(){
        $('.select_1-block__item').removeClass('select_block__item-active');
        $('.select_2-block__item').toggleClass('select_block__item-active');
    })
    $('.select_2-block__item-text').on('mouseover', function(){
        $(".select_2-text").text($(this).text());
    })
    $('.select_2-block__item-text').on('click', function(){
        $(".select_2-text").text($(this).text());
        $('.select_2-block__item').removeClass('select_block__item-active');
    })
});