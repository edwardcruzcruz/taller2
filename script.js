$(document).ready(function(){
  

  $("button").click(function(e){

    var texto = $('input#buscador').val();
    
    $.ajax({
      type: "GET",
      url: "https://twitrss.me/twitter_search_to_rss/",
      dataType: "xml",
      success: function(xml){
        alert("mensaje: "+texto);
      },
      error: function() {
        alert("Error al procesar el xml");
      }
  });

    return false;
    
  })
});