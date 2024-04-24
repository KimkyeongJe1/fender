$('#bannerInner > div').slick({
  // autoplay: true,
  // autoplaySpeed: 4000,
  speed: 1000,
  arrows: false,
  centerMode: true,
  centerPadding: '185px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
