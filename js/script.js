// effect ketika di klik
$('.page-scroll').on('click', function(e){

  // ambil isi href
  var href = $(this).attr('href');
  // ammbil element
  var elemenHref = $(href);

  //pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenHref.offset().top - 50
  }, 1000, 'swing');

  e.preventDefault();
});
