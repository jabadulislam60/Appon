
// banner part start

$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });


// banner part end

// screenshort part start
  $('.screenshort').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    centerMode: true,
    centerPadding: '0px',
  });
  

// screenshort part end


// feed part start

$('.one_big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.multi_small'
});
$('.multi_small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.one_big',
  dots: true,
  autoplay: true,
  speed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
});

// feed part end

// video part start
new VenoBox({
  selector: ".for-video-links"
});

// video part end