/** */
var users = new Users();
var loginUser = ()=>{
    var email = $("#email").val();
    var password = $("#password").val();
    users.loginUser(email, password);
}

var sessionClose = () => {
    users.sessionClose();
}

var principal = new Principal();

$().ready(()=>{
    let URLactual = window.location.pathname;
    users.userData(URLactual);
    principal.linkPrincipal(URLactual);
    $('#login').validate();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formselect();
});