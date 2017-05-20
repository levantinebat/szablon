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
    $('#select_zapytanie').removeClass('active');
    $('#select_aplikacja').addClass('active');


  };
};

function addCV(selectObject) {
    window.history.replaceState( {} , "tytuł", "?choose=zapytanie" );
    show_cv.style.display = "none";
    show_letter.style.display = "none";
    $('#select_aplikacja').removeClass('active');
    $('#select_zapytanie').addClass('active');

}
$(document).ready(function(){
  if(location.search == "?choose=aplikacja"){
    $('#select_aplikacja').click();
    $('#select_aplikacja').attr('selected',true);
    $('#select_aplikacja').addClass('active');

  }
});
// koniec contact-form

// dodaj class "row"

$(document).on('ready', function () {
    var screen = $(window)
    if (screen.width() < 992) {
        $("#offer-features-js").addClass('row');
        $("#contact-us-features-js").addClass('row');
        $("#apply-features-js").addClass('row');
        $("#hero-vid-container").removeClass('left');
    };
});
$(document).on('ready resize', function () {
    var screen = $(window)
    if (screen.width() < 768) {
      $('#exp-description-first').insertBefore('#exp-img-first');
      $('#exp-description-second').insertBefore('#exp-img-second');
      $('#office-img').removeClass('right');
    };
});



$('#hero-btn').click(function () {
  $('html,body').animate({scrollTop: $('#features').offset().top}, 'slow');
  return false
});
$('#fleet-btn').click(function () {
  $('html,body').animate({scrollTop: $('#fleet').offset().top}, 'slow');
  return false
});
