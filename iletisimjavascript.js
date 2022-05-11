var isim, email, konu = false;

// ad Soyad 

function adkontrol(){ 
    let hata = "";
    var addegerkontrol = document.querySelector("#adsoyad").value;
    if(addegerkontrol === '' || addegerkontrol.trim().length === 0){
        hata = "Ad Soyad kısmı boş bırakılamaz.";
        isim = false;
    }
    else
        isim = true;
    document.querySelector(".isimhata").innerHTML = hata;
}

// email 

function mailkontrol(){
    let hata = "";
    var maildegerkontrol = document.querySelector("#email").value;
    if(maildegerkontrol === '' || maildegerkontrol.trim().length === 0){
        hata = "Mail adresi kısmı boş bırakılamaz."
       email = false;
    }
    else{ // Mail kısmı boş bırakılmamış ise
        let mailtipkontrol = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(maildegerkontrol.match(mailtipkontrol)){
            email = true;
            hata = "";
        }
        else{
            hata = "Lütfen e-mail formatında girdi giriniz."
            mail = false;
        }
            
    }
    document.querySelector(".mailhata").innerHTML =  hata;  
}

// konu

function konukontrol(){
    let  hata = "";
    var konudegerkontrol = document.querySelector("#konu").value;
    if(konudegerkontrol === '' || konudegerkontrol.trim().length === 0){
        hata = "Mesaj kısmı boş bırakılamaz.";
        konu = false;
    }
    else
        konu = true;
    document.querySelector(".konuhata").innerHTML =  hata;
}



let gönderme = document.getElementById("gönder");

gönderme.addEventListener('click',function (e)
{
   adkontrol();
   mailkontrol();
   konukontrol();
   

    if( !(isim &&email && konu) )
        e.preventDefault();    
});
