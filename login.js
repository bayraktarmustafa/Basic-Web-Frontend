var email, sifre = false;

// Mail 

function mailkontrol(){
    let hata = "";
    var maildegerkontrol = document.querySelector("#email1").value;
    if(maildegerkontrol === '' || maildegerkontrol.trim().length === 0){
        hata = "Mail adresi kısmı boş bırakılamaz."
        email = false;
    }
    else{ // Mail kısmı boş bırakılmamış ise
        var mailtipkontrol = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(maildegerkontrol.match(mailtipkontrol)){
            email = true;
            hata = "";
        }
        else{
            hata = "Lütfen e-mail formatında girdi giriniz."
            email = false;
        }
            
    }
    document.querySelector(".hatamail").innerHTML = hata;  
}

// Şifre 

function sifrekontrol(){
    let hata = "";
    var sifredegerkontrol = document.querySelector("#sifre1").value;
    if(sifredegerkontrol === '' || sifredegerkontrol.trim().length === 0){
        hata = "Şifre kısmı boş bırakılamaz."
        sifre = false;
    }
    else
        sifre = true;
    document.querySelector(".hatasifre").innerHTML = hata;
}


let gönder = document.getElementById("gönder1");

gönder.addEventListener('click',function (e)
{

   mailkontrol();
   sifrekontrol();

    if( !(email && sifre) )
        e.preventDefault();    
});