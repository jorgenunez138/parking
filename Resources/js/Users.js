class Users {
    constructor() {

    }
    loginUser(email, password) {
        if (email == "") {
            $('#email').focus();
            M.toast({ html: 'Ingrese el email', classes: 'rounded' });
        } else {
            if (password == "") {
                $('#password').focus();
                M.toast({ html: 'Ingrese la contraseña', classes: 'rounded' });
            } else {
                if (validarEmail(email)) {
                    if (7 <= password.length) {
                        $.post(
                            "Index/userLogin",
                            { email, password },
                            (response) => {
                                try {
                                    var item = JSON.parse(response);
                                    if (0 < item.id) {
                                        localStorage.setItem('user', response);
                                        window.location.href = URL + "Principal/principal";
                                    } else {
                                        $("#indexMessage").text("Email o Contraseña incorrectos.");
                                    }
                                } catch (error) {
                                    $("#indexMessage").text(response);
                                }
                            }
                        );
                    } else {
                        $('#password').focus();
                        M.toast({ html: 'La contraseña no es valida', classes: 'rounded' });
                    }
                } else {
                    $('#email').focus();
                    M.toast({ html: 'El email no es valido', classes: 'rounded' });
                }
            }
        }
    }

    userData(URLactual) {
        if (PATHNAME == URLactual) {
            localStorage.removeItem("user");
            $("#menuNavBar1").css('display', 'none');
            $("#menuNavBar2").css('display', 'none');
        } else {
            if (null != localStorage.getItem('user')) {
                let user = JSON.parse(localStorage.getItem("user"));
                if (0 < user.id) {
                    $("#menuNavBar1").css('display', 'block');
                    $("#menuNavBar2").css('display', 'block');
                    $("#name1").text(user.name);
                    $("#email1").text(user.email);
                    $("#name2").text(user.name);
                    $("#email2").text(user.email);
                }
            }
        }
    }

    sessionClose() {
        localStorage.removeItem("user");
        $("#menuNavBar1").css('display', 'none');
        $("#menuNavBar2").css('display', 'none');
    }

    getRoles() {
        let count = 1;
        $.post(
            URL + "Users/getRoles",
            {},
            (response) => {
                try {
                    let item = JSON.parse(response);
                    $("#roles").empty();
                    $("#roles").append('<option value="">Seleccione un rol</option>');
                    if (0 < item.results.length) {
                        for (let i = 0; i < item.results.length; i++) {
                            $("#roles").append('<option value="' + item.results[i].id_rol + '">' + item.results[i].rol + '</option>');
                            count++;
                            $('select').formSelect();
                        }
                    }
                } catch (error) {

                }
            }
        );
    }

    file(evt) {
        let files = evt.target.files;
        let f = files[0];
        if (f.type.match('image.*')) {
            let reader = new FileReader();
            reader.onload = ((theFile) => {
                return (e) => {
                    document.getElementById("fotos").innerHTML = ['<img class="responsive-img" src="',
                        e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                }
            })(f);
            reader.readAsDataURL(f);
        }
    }

    resetUser() {
        document.getElementById("fotos").innerHTML = ['<img class="responsive-img" src="', PATHNAME +
            "Resources/imgs/imgs/default.png", '" title="', , '"/>'].join('');
        this.getRoles();
        //$('#modal1').close();
    }

    registerUser(nombre, apellido, nid, telefono, email, password, roles) {

        if (validarEmail(email)) {
            if (7 <= password.length) {
                let data = new FormData();
                $.each($('input[type=file]')[0].files, (i, file) => {
                    data.append('file', file);
                });
                data.append('name', nombre);
                data.append('lastname', apellido);
                data.append('nid', nid);
                data.append('phone', telefono);
                data.append('email', email);
                data.append('password', password);
                data.append('rol', roles);
                $.ajax({
                    url: URL + "Users/registerUser",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: (response) => {
                        if(response == 0){
                            resetUser();
                        }else{
                            $("#registerMessage").text(response);
                        }
                    }
                });
            } else {
                $("#password").focus();
                $("#password").text("Introduzca al menos 8 caracteres");
            }
        } else {
            $("#email").focus();
            $("#email").text("Introduzca un email valido");
        }
    }
}