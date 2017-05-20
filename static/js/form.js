
    // Get the form.
    var form = $('#ajax-contact'); 
    var form2 =document.getElementById("ajax-contact");
    // Get the messages div.
    var formMessages = $('#formMessages');
    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        var formDat = new FormData(form2);

        $.ajax({

            type: 'POST',
            url: $(form).attr('action'),
            data: formDat,
            processData: false,
            contentType: false,
            beforeSend: function(){
              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');
              document.getElementById("formMessages").style.color = "red !important";
              $(formMessages).text("Proszę czekać trwa wysyłanie...");
              // Set the 'wait' message text.

            },
            success: function(data) {
              // Set the 'success' message text.
                document.getElementById("formMessages").style.color = "#eee !important";
                $(formMessages).text("Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy.");
            },
        }).done(function(response) {


        // Clear the form.
        $('#name').val('');
        $('#telefon').val('');
        $('#town').val('');
        $('#mail').val('');
        $('#form-text-area').val('');
    });
    e.preventDefault();
});
