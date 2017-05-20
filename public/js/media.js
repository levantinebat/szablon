var aplikacja = "?choose=aplikacja";
var show_cv = document.getElementById('form-cv');
var show_letter = document.getElementById('motivation-letter');
var show_aplikacja = document.getElementById('select_aplikacja');
var show_zapytanie = document.getElementById('select_zapytanie');

// contact form
function contact_loc_check(){
  if(location.search == "?choose=aplikacja"){
    $('#select_aplikacja').click();
    $('#select_aplikacja').attr('selected',true);
    $('#select_aplikacja').addClass('activated');

  };
}

// dodaj class "row"

// media functions
var screen = $(window)
function media_992(){
  if (screen.width() < 992) {
    $('#f-features div div').addClass('notransition');
    $("#offer-features-js").addClass('row');
    $("#contact-us-features-js").addClass('row');
    $("#apply-features-js").addClass('row');
    $("#hero-vid-container").removeClass('left');
    $(".sidebar-menu").addClass('none');

    if (location.pathname == "/kontakt/") {
      document.getElementById('form-choose-option').style.display = "none";
      show_aplikacja.style.display = "none";
      show_zapytanie.style.display = "none";
      show_aplikacja.remove();
      $('#select_zapytanie').click();
      $('#select_zapytanie').attr('selected',true);
      $('#select_zapytanie').addClass('activated');
      $('.form-group').last().addClass('last');
    };
  }
  else{
    $('#f-features div div').removeClass('notransition');
    $("#offer-features-js").removeClass('row');
    $("#contact-us-features-js").removeClass('row');
    $("#apply-features-js").removeClass('row');
    $(".sidebar-menu").removeClass('none');

  };
};

function media_768(){
  if (screen.width() < 768) {
    $('#exp-description-first').insertBefore('#exp-img-first');
    $('#exp-description-second').insertBefore('#exp-img-second');
    $('#office-img').removeClass('right');
  };
};

function media_575(){
  if (screen.width() < 575) {
    $(".mob-nav").removeClass('col-xs-3 offset-xs-7');
    $(".mob-nav").addClass('col-xs-3 offset-xs-8');
  };
};

// all media functions
function global_call(){
  media_992();
  media_768();
  media_575(); 
  contact_loc_check();
};
// animate.css funtions
function animate (){
  // index
  if (screen.width() > 992){
    //your code to be executed after 1 second
    $('.copy-text').addClass('animated zoomIn ');
    $('#copy-last').removeClass('zoomIn ');
    $('#copy-last').addClass('slideInRight');
    $('#hero-btn').addClass('animated bounceInUp');

    // kim jestesmy
    $('#history-sketch').addClass('animated fadeInLeft');
    $('#history-text').addClass('animated fadeInRight');
    // oferta
    $('#experience .container .full-w').addClass('animated fadeInRight');
    // kontakt
    $('#form-kolumna').addClass('animated fadeIn');

    $('.js--wp-features').waypoint(function (direction) {
      $('#features').addClass('animated fadeInUp');
      $('#offer-features-mask').addClass('animated fadeInLeftBig');
    },{
          offset: '70%'
      });
    $('.js--wp-profile').waypoint(function (direction) {
      $('#profile-text, #office-img').addClass('animated fadeIn');
    },{
          offset: '70%'
      });
  };
}

function animate_del(){
  $('.copy-text').removeClass('animated zoomIn ');
  $('#copy-last').removeClass('zoomIn ');
  $('#copy-last').removeClass('slideInRight');
  $('#hero-btn').removeClass('animated bounceInUp');

  // kim jestesmy
  $('#history-sketch').removeClass('animated fadeInLeft');
  $('#history-text').removeClass('animated fadeInRight');
  // oferta
  $('#experience .container .full-w').removeClass('animated fadeInRight');
  // kontakt
  $('#form-kolumna').removeClass('animated fadeIn');

  $('#features').removeClass('animated fadeInUp');
  $('#offer-features-mask').removeClass('animated fadeInLeftBig');
  $('#profile-text, #office-img').removeClass('animated fadeIn');

};

$(document).ready(function(){
  global_call();
  animate();
});

$(window).resize(global_call());
var w = 0;

$( window ).load( function(){

   w = $( window ).width();

});

$( window ).resize( function(){

  if( w != $( window ).width() ){

    global_call();

    w = $( window ).width();

    delete w;

  };

});
