function showRSS(str) {
  if (str.length==0) {
    document.getElementById("noticias").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("noticias").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","https://twitrss.me/twitter_user_to_rss/?user="+str,true);
  xmlhttp.send();
}
$(document).ready(function(){
  

  $("button").click(function(e){

    var texto = $('input#buscador').val();
    
    if(texto.length != 0) {
      $('#noticias ').append(" <h1>"+texto+"</h1>");
      showRSS(texto);
    } else {
      $('#noticias .card-body').each(function(){
        $(this).show();
      });
    }

    return false;
    
  })
});