
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
    
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            // Create a request variable and assign a new XMLHttpRequest object to it.
            var request = new XMLHttpRequest()
            
            // Open a new connection, using the GET request on the URL endpoint
            var linkk ='http://localhost:4000/ppekitSubscriber/subscribe/'
            var phone_no =($(input[0]).val().trim())
            var email= ($(input[1]).val().trim())
            
            var infoo = phone_no 
            infoo = infoo.concat(":")
            infoo = infoo.concat(email)
            linkk =linkk.concat(infoo)
            
            request.open('GET', linkk, true)
            
            // Send request
            request.send()
        }
                return check;
    });

        
    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);