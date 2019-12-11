<!DOCTYPE html>
<html lang="rus">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>formula1.by</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/fixed.css">
</head>

<body>

    <div id="background">
        <!--Navigation-->
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="index.html"><img src="img/websitelogo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html#home">Главная</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#teams">Команды</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#team">Гонщики</a></li>
                </ul>
            </div>
        </nav>
        <div class="carousel-item active" style="background-image: url('img/renault.jpg')">
            <div id="forma"class="carousel-caption text-center" style="top:0%"> 
                <div id="form" class="offset">
                    <form action="send.php" method="post">
                        <input placeholder="Ваше имя" type="text" name="fio" required>
                        <input placeholder="Ваш e-mail" type="email" name="email">
                        <textarea name="message" cols="50" rows="10" placeholder="Напишите ваше сообщение сюда..."></textarea>
                        <div class="g-recaptcha" data-sitekey="ключ сайта"></div>
                        <input type="submit" value="Отправить">
                        </form> 
                </div>
            </div>
        </div>
    </div>
    

      <!--Start Contact Section-->
      <div class="offset">
            <footer>
                <div class="row justify-content-center">
                    <div class="col-md-5 text-center">
                        <img src="img/websitelogo-footer.png" alt="">
                        <p>Формула-1 для Всех!</p>
                        <h6>Контакты:</h6>
                        <p>+375(29) 391-80-08 <br>alexvolchkou@gmail.com</p>
                        <a href="https://www.facebook.com/aaxeley" target="_blank"><i class="fab fa-facebook-square"
                                aria-hidden="true"></i></a>
                        <a href="https://vk.com/aaxeley" target="_blank"><i class="fab fa-vk"></i></a>
                        <a href="https://www.instagram.com/aaxeley/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                    <hr class="socket">
                </div>
            </footer>
        </div>
        <!--End Contact Section-->
  
  
  <!--Script source files-->
    <script src="js/script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://use.fontawesome.com/releases/v5.6.1/js/all.js"></script>
</body>

</html>