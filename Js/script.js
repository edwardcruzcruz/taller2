function myFunction(xml,str) {
  var i;
  var xmlDoc = xml.responseXML;
  var htmlList = "";
  htmlList="<div class='row'><div class='col-12'><h1 > &lt Texto buscado &gt </h1></div></div>";
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) {
    htmlList += "<div class='container'  style='border-botton:5px solid;'><div class='row'><div class='col-1'><img src='Icon/Twitter.png' alt='Icono Twitter' height='42' width='42'></div>"; 
    htmlList += "<div class='col-11'><div class='container'><div class='row'> <div class='col-12'><p>"+'<b>@'+ str +'</b>, dijo:'+ "</p></div></div>";
    htmlList += "<div class='row'> <div class='col-12'><p>"+'"'+ x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +'"'+ "</p></div></div>";
    htmlList += "<div class='row'> <div class='col-12'><p>"+ x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue+"</p></div></div>";
    htmlList += "<div class='row'> <div class='col-12'><p>"+ x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue+"</p></div></div></div></div></div></div>";
    //htmlList += "<div class='row'> <div class='col-12'><p>----------------------------------------------------------------------------------------------------------------------------------</p></div></div>";
  }
  document.getElementById("noticias").innerHTML =htmlList ;
}
function showRSS(str) {
  var html = "";

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
      myFunction(this,str);
      //document.getElementById("noticias").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","https://twitrss.me/twitter_user_to_rss/?user="+str,true);
  xmlhttp.send();
}
$(document).ready(function(){
  

  $("button").click(function(e){

    var texto = $('input#buscador').val();
    
    if(texto.length != 0) {
      showRSS(texto);
    } else {
      $('#noticias .card-body').each(function(){
        $(this).show();
      });
    }

    return false;
    
  })
});