class Principal
{
    constructor()
    {

    }

    linkPrincipal(link)
    {
        switch(link){
            case PATHNAME+"Principal/principal":
                $("#enlace1").addClass('active');
                break;
            case PATHNAME+"Users/users":
                $("#enlace2").addClass('active');
                break;
        }
    }
}