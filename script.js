/*Parte 1- Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
gli altri diventano verdi.*/

/*Ho creato una griglia formata da 8x8 quadratini tutti bianchi in html.*/

/*Ho creato i 15 quadratini che si andranno a colorare. Quando li clicco diventano rossi,
tutti gli altri diventano verdi.*/

var green = $(".smallsquare");
var red = $(".smallsquare-red");

red.click(function(){
  $(this).css("background","red");
});
green.click(function(){
  $(this).css("background","green");
});

/*Parte 2-(Bonus)-Sopra alla griglia deve esserci un contatore che conta quanti rossi
e quanti verdi sono stati scoperti (edited)*/
