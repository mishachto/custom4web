//animated 
// let targetBoxUser = $('#box-user-animation-0');
// let countAn = 0;
// let countAnComment = 0;
// $(window).scroll(function () {
//     if ($(targetBoxUser).length == 0) {
//         return;
//     }
//     let targetPos = targetBoxUser.offset().top + 300;
//     let winHeight = $(window).height();
//     let scrollToElem = targetPos - winHeight;
//     let winScrollTop = $(this).scrollTop();
//     if (winScrollTop > scrollToElem) {
//         countAn += 1
//         $(targetBoxUser).addClass("box-user-animation");
//         targetBoxUser = $(`#box-user-animation-${countAn}`);
//         countAnComment += 1
//     }
// });
// $('.click-menu-element').click(function(){
//     $('html, body').animate({scrollTop:$('#elementId').position().top}, 2000);
// });






var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.slider-main').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

$('.slider-inst').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 568,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
        }
    }
    ]
});
