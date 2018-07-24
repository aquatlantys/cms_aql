<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>(404) Cette page n'existe pas.</title>
    <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:300,600" rel="stylesheet">
    <style type="text/css">
        html,
        body {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        body {
            font-family: 'Barlow Condensed', Helvetica, Arial, Sans-Serif;
            background: #3C6898 url("/errors/img/bassin.jpg") center center no-repeat;
            background-size: cover;
            color: #fff;
            -moz-font-smoothing: antialiased;
            -webkit-font-smoothing: antialiased;
        }

        .error-container {
            text-align: center;
            height: 100%;
        }

        @media (max-width: 480px) {
            .error-container {
                position: relative;
                top: 50%;
                height: initial;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }

        .error-container h1 {
            margin: 0;
            font-size: 130px;
            font-weight: 300;
        }

        @media (min-width: 480px) {
            .error-container h1 {
                position: relative;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }

        @media (min-width: 768px) {
            .error-container h1 {
                font-size: 220px;
            }
        }

        .return {
            color: rgba(255, 255, 255, 0.6);
            font-weight: 400;
            letter-spacing: -0.04em;
            margin: 0;
            margin-top: 50px;
        }

        @media (min-width: 480px) {
            .return {
                position: absolute;
                width: 100%;
                bottom: 30px;
            }
        }

        .return a {
            padding-bottom: 1px;
            color: #fff;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
            -webkit-transition: border-color 0.1s ease-in;
            transition: border-color 0.1s ease-in;
        }

        .return a:hover {
            border-bottom-color: #fff;
        }
        
        .txt {
            position: absolute;
            top: calc(50% + 120px);
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            text-align: center;
            width: 100%;
        }

    </style>
</head>

<body>
    
        <div class="error-container">
            <h1><img src="https://www.aquatlantys.com/images/logo_big_icon.svg" height="250"></h1>
            <p class="txt"><?php

switch($_GET['erreur'])

{

   case '400':

   echo 'Échec de l\'analyse HTTP.';

   break;

   case '401':

   echo 'Le pseudo ou le mot de passe n\'est pas correct !';

   break;

   case '402':

   echo 'Le client doit reformuler sa demande avec les bonnes données de paiement.';

   break;

   case '403':

   echo 'Requête interdite !';

   break;

   case '404':

   echo 'La page n\'existe pas ou plus !';

   break;

   case '405':

   echo 'Méthode non autorisée.';

   break;

   case '500':

   echo 'Erreur interne au serveur ou serveur saturé.';

   break;

   case '501':

   echo 'Le serveur ne supporte pas le service demandé.';

   break;

   case '502':

   echo 'Mauvaise passerelle.';

   break;

   case '503':

   echo ' Service indisponible.';

   break;

   case '504':

   echo 'Trop de temps à la réponse.';

   break;

   case '505':

   echo 'Version HTTP non supportée.';

   break;

   default:

   echo 'Erreur !';

}

?></p>
            <p class="return">Retourner sur <a href="/">aquatlantys.com</a></p>
        </div>

</body>

</html>
