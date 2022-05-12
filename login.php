<!doctype html>
<html lang="tr">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	  <link href="style.css" rel="stylesheet" type="text/css">

	  
    <title>Mustafa Bayraktar</title>
  </head>
  <body background="JPG\haber-bandi_1353113517_1000x700_false.jpg">
<header>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#" style="font-size: 20px;">Mustafa Bayraktar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">ANASAYFA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sehrim.html">Şehrim</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="iletisim.html">İletişim</a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link" href="loginsayfasi.html">Giriş Yap</a>
      </li>  
    </ul>
  </div>
</nav>
</header>
<div class="container">
<?php

$mail = 'b201210048@sakarya.edu.tr';
$sifre = 'b201210048';
$gelenmail = $_POST['email1'];
$gelensifre = $_POST['sifre1'];
if($gelenmail == $mail && $gelensifre == $sifre)
{
  echo '<p style = "text-align:center; text-size:larger;">Giriş işlemi başarılı.</p>';
  echo '<h1 class="fw-bold mb-5" style="text-align: center;">Hoşgeldiniz B201210048</h1>';
}
else
{
  echo '<p style = "text-align:center; color:red;">Giriş işlemi başarısız.</p>';
}
?>
</div>
</body>
</html>