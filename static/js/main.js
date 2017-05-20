// var sel = document.getElementById('select-option');
// sel.addEventListener('click', function(el){
//     var options = this.children;
//     for(var i=0; i < this.childElementCount; i++){
//         options[i].style.color = 'black';
//     }
//     var selected = this.children[this.selectedIndex];
//         selected.style.color = 'red';
//         selected.style.background = 'white';
//     }, false);

// Contact-form JS
var aplikacja = "?choose=aplikacja";
var show_cv = document.getElementById('form-cv');
var show_letter = document.getElementById('motivation-letter');
var show_aplikacja = document.getElementById('select_aplikacja');
var show_zapytanie = document.getElementById('select_zapytanie');

function aplikacja_click(){
  if(window.location.pathname == "/"){
    window.location = "kontakt" + aplikacja;
    // window.history.replaceState(null, null, "/kontakt" + aplikacja);
  }
  else{
    window.history.replaceState( {} , "", aplikacja );

    show_cv.style.display = "inline-block";
    show_letter.style.display = "inline-block";
    // document.getElementById('select_aplikacja').selected = true;
    $('#select_zapytanie').removeClass('activated');
    $('#select_aplikacja').addClass('activated');


  };
};

function addCV(selectObject) {
    window.history.replaceState( {} , "tytuł", "?choose=zapytanie" );
    show_cv.style.display = "none";
    show_letter.style.display = "none";
    $('#select_aplikacja').removeClass('activated');
    $('#select_zapytanie').addClass('activated');

}

$(document).ready(function(){
  // if(location.search == "?choose=aplikacja"){
  //   $('#select_aplikacja').click();
  //   $('#select_aplikacja').attr('selected',true);
  //   $('#select_aplikacja').addClass('activated');
  //
  // }
});
// koniec contact-form

// // dodaj class "row"
//
// $(document).on('ready', function () {
//     var screen = $(window)
//     if (screen.width() < 992) {
//         $('#f-features div div').addClass('notransition');
//         $("#offer-features-js").addClass('row');
//         $("#contact-us-features-js").addClass('row');
//         $("#apply-features-js").addClass('row');
//         $("#hero-vid-container").removeClass('left');
//         $(".sidebar-menu").addClass('none');
//
//         if (location.pathname == "/kontakt/") {
//           document.getElementById('form-choose-option').style.display = "none";
//           show_aplikacja.style.display = "none";
//           show_zapytanie.style.display = "none";
//           show_aplikacja.remove();
//           $('#select_zapytanie').click();
//           $('#select_zapytanie').attr('selected',true);
//           $('#select_zapytanie').addClass('activated');
//           $('.form-group').last().addClass('last');
//
//
//         }
//
//     };
// });
//
// $(document).on('ready resize', function () {
//     var screen = $(window)
//     if (screen.width() < 768) {
//       $('#exp-description-first').insertBefore('#exp-img-first');
//       $('#exp-description-second').insertBefore('#exp-img-second');
//       $('#office-img').removeClass('right');
//     };
// });
// $(document).on('ready resize', function () {
//     var screen = $(window)
//     if (screen.width() < 575) {
//       $(".mob-nav").removeClass('col-xs-3 offset-xs-7');
//       $(".mob-nav").addClass('col-xs-3 offset-xs-8');
//
//     };
// });
//

// menu click

  $(".mob-anchor").on('click', function(){
    var screen = $(window)
    if (screen.width() < 575 && screen.width() > 993) {
      $(".mob-anchor").toggleClass("clicked");
      $(".nav-li").toggleClass('mobile-nav col-xs-3 offset-xs-7');
      $(".sidebar-menu").toggleClass('none');
    } else{
      $(".mob-anchor").toggleClass("clicked");
      $(".nav-li").toggleClass('mobile-nav col-xs-3 offset-xs-4');
      $(".sidebar-menu").toggleClass('none');
    }
  });


$('#hero-btn').click(function () {
  $('html,body').animate({scrollTop: $('#features').offset().top}, 'slow');
  return false
});
$('#fleet-btn').click(function () {
  $('html,body').animate({scrollTop: $('#fleet').offset().top}, 'slow');
  return false
});
