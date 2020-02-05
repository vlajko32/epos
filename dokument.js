function obrada() {
        var ime = document.getElementById("ime");
        var prezime = document.getElementById("prezime");
        var godiste = document.getElementById("godiste");
        var telefon = document.getElementById("telefon");
        var email = document.getElementById("email");
        var klub = document.getElementById("klub");
        var PG = document.getElementById('PG').checked;
        var SG = document.getElementById('SG').checked;
        var SF = document.getElementById('SF').checked;
        var PF = document.getElementById('PF').checked;
        var C = document.getElementById('C').checked;

        if(ime.value.trim()==""){
               alert("Polje ime mora biti popunjeno!!!");
               return false;
           }
        else if(prezime.value.trim()==""){
                alert("Polje prezime mora biti popunjeno!!!");
                return false;
        }
        else if(godiste.value.trim()==""){
                alert("Mora se izabrati godiste!!!");
                return false;
        }
        else if(telefon.value.trim()==""){
                alert("Mora se uneti broj telefona!!!");
                return false;
        }
        else if(telefon.value.trim().length<10 || telefon.value.trim().length>10){
                alert("Broj telefona mora imati 10 cifara!!!");
                return false;
        }
        else if(email.value.trim()==""){
                alert("Mora se uneti e-mail!!!");
                return false;
        }
        else if(klub.value.trim()==""){
                alert("Mora se uneti klub!!!");
                return false;
        }
        else if(PG=="" && SG=="" && SF=="" && PF=="" && C==""){
                alert("Mora se odabrati minimum jedan od ponudjenih!!!");
                return false;
        }
        else{
            alert("Uspesna prijava!!!");
            return true;
        }
}

$(document).ready(function(){

        $(window).scroll(function(){
          if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
          } else{
            $('#topBtn').fadeOut();
          }
        });
      
        $("#topBtn").click(function(){
          $('html ,body').animate({scrollTop : 0},800);
        });
      });


