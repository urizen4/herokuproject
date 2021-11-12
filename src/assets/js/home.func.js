function afficheVIP(){
    $.ajax({
        type: "GET",
        url: "ajax/vip.php",
        type:"json",
        success: function(server_response){
            var offres = JSON.parse(server_response);

            if(offres.length>0){
                var count = offres.length;
                var index = Math.floor(Math.random() * count);

                var img = offres[index].image.split(",")[0];
                img = "img/offres/"+img;
                $("#titreVip").html(offres[index].titre).show();
                $("#dateVip").html(offres[index].dateActive).show();
                $("#nomVip").html(offres[index].prenom+" "+offres[index].nom).show();
                $("#contenuVip").html(offres[index].contenu).show();
                document.getElementById("imageVip").src = img;
                setTimeout(afficheVIP,5000); /* rappel après 2 secondes = 2000 millisecondes */
            }

        }
    });
}

$(document).ready(function(){
    $('.carousel').carousel();
    afficheVIP();

});



