
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.recoverBox').fadeOut('fast');
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register an Account');
    }); 
    $('.error').removeClass('alert alert-danger').html('');

}

function showRecoverForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.recoverBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Leave your e-mail');
    }); 
    $('.error').removeClass('alert alert-danger').html('');

}

function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.recoverBox').fadeOut('fast');
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
    $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function validatelogin(){
    var email = login.email.value;
    var pass = login.password.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (pass == '' && email == '') {
        $('#loginModal .modal-dialog').addClass('shake');
        $('.error').addClass('alert alert-danger').html("Enter Credential");
        setTimeout( function(){ 
            $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
        return false;   
    }
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || email == '') {
        $('#loginModal .modal-dialog').addClass('shake');
        $('.error').addClass('alert alert-warning').html("Invalid email");
        setTimeout( function(){ 
            $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
        return false;   
    }
    else if (pass == '') {
        $('#loginModal .modal-dialog').addClass('shake');
        $('.error').addClass('alert alert-danger').html("Invalid password");
        setTimeout( function(){ 
            $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
        return false;   
    }
    else{
        // catch the success msg in backend an through it to the front
        $('.error').addClass('alert alert-success').html("password reset e-mail send");
        return true;
    }
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
    $('input[type="password"]').val('');
    setTimeout( function(){ 
        $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

function validaterecover(){

    var email = recover.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || email == '') {
        $('#loginModal .modal-dialog').addClass('shake');
        $('.error').addClass('alert alert-danger').html("Invalid email");
        setTimeout( function(){ 
            $('#loginModal .modal-dialog').removeClass('shake'); 
        }, 1000 ); 
        return false;   
    }
    else{
        // catch the success msg in backend an through it to the front
        $('.error').addClass('alert alert-success').html("password reset e-mail send");
        return true;
    }

    }

