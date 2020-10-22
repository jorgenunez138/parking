class Users
{
    constructor(){

    }
    loginUser(email, password){
        if(email == ""){
            $('#email').focus();
            M.toast({ html: 'Ingrese el email', classes: 'rounded'});
        }else{
            if(password == ""){
                $('#password').focus();
                M.toast({ html: 'Ingrese la contraseña', classes: 'rounded'});
            }else{
                if(validarEmail(email)){
                    if(7 <= password.length){
                        $.post(
                            "Index/userLogin",
                            {email, password},
                            (response)=>{
                                try{
                                    var item = JSON.parse(response);
                                    if(0 < item.id){
                                        localStorage.setItem('user', response);
                                        window.location.href = URL + "Principal/principal";
                                    }else{
                                        $("#indexMessage").text("Email o Contraseña incorrectos.");
                                    }
                                }catch(error){
                                    $("#indexMessage").text(response);
                                }
                            }
                        );
                    }else{
                        $('#password').focus();
                        M.toast({ html: 'La contraseña no es valida', classes: 'rounded'});
                    }
                }else{
                    $('#email').focus();
                    M.toast({ html: 'El email no es valido', classes: 'rounded'});
                }
            }
        }
    }

    userData(URLactual)
    {
        alert(URLactual);
        if(PATHNAME == URLactual){
            localStorage.removeItem("user");
            $("#menuNavBar1").css('display','none');
            $("#menuNavBar2").css('display','none');
        }else{
            if(null != localStorage.getItem('user')){
                let user = JSON.parse(localStorage.getItem("user"));
                if(0 < user.id){
                    $("#menuNavBar1").css('display','block');
                    $("#menuNavBar2").css('display','block');
                    $("#name1").text(user.name);
                    $("#email1").text(user.email);
                    $("#name2").text(user.name);
                    $("#email2").text(user.email);
                }
            }
        }
    }

    sessionClose()
    {
        localStorage.removeItem("user");
        $("#menuNavBar1").css('display','none');
        $("#menuNavBar2").css('display','none');
    }
}