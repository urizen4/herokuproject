$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    //
    $(".activerOffre").click(function(){
        var id = $(this).attr("id");
        $.post('ajax/activerOffre.php', {id:id}, function(){
            document.location.href="index.php?page=aactiver";
        });
    });
    //


    $(".add_marque").click(function(){
        var id = $(this).attr("id");

        var marque = document.getElementById("libelleMarque").value;
        var marqueAncienne = document.getElementById("libelleMarqueAncien").value;
        $.post('ajax/add_marque.php', {id:id,marque:marque,marqueAncienne:marqueAncienne}, function(a){
            document.location.href="index.php?page=offre-"+id;
        });
    });

    //
    $(".delete_offre_admin").click(function(){
        var id = $(this).attr("id");
        $.post('ajax/delete_offre.php', {id:id}, function(){
            document.location.href="index.php?page=aactiver";
        });
    });
});