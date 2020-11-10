/** */
var users = new Users();
var principal = new Principal();

var loginUser = ()=>{
    var email = $("#email").val();
    var password = $("#password").val();
    users.loginUser(email, password);
}

var sessionClose = () => {
    users.sessionClose();
}

var resetUser = () =>{
    users.resetUser();
}

var file = (evt) => {
    users.file(evt);
}

$(function(){
    $("#btnSaveUser").click(function(){
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let nid = $("#nid").val();
        let telefono = $("#telefono").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let roles = $("#roles").val();
        if(nombre != "" && apellido != "" && nid != "" && telefono != "" && email != "" && password != "" && roles != ""){
            users.registerUser(nombre,apellido,nid,telefono,email,password,roles);
            return false;
        }
        
    });
});

$().ready(()=>{
    let URLactual = window.location.pathname;
    users.userData(URLactual);
    principal.linkPrincipal(URLactual);
    $('#validate').validate();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formSelect();
    switch (URLactual) {
        case PATHNAME+"Principal/principal":
            
            break;
        case PATHNAME+"Users/users":
            document.getElementById('files').addEventListener('change', file, false);
            break;
        default:
            break;
    }
});