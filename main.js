// task1

//Ispisati dan i vreme u formatu HoursPM(AM) : minutes : seconds

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log('Today is : ' + daylist[day] + ".");

var hours = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hours >= 12)?"PM":"AM";

console.log('Current time : ' + hours + ' ' + prepand +  " : " + minute+ " : " + second);

//task1 kraj

//task2 - Printovati trenutnu stranicu

function print_current_page() {
  window.print();
}

// task2 kraj


//task3 ispisi datum u formatu month-day-year

var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10) {
  dd = '0' + dd;
}

if (mm<10) {
  mm = '0' + mm;
}

danas = mm + '-' + dd + '-' + yyyy;
console.log(danas);

//task3 kraj


//task4  srednja vrednost trougla sa stranicama 5,6,7

var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1 + side2+ side3)/2;  //formula

var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))); //formula
console.log(area);

//task4 kraj

//task5 Napisati program koji pomera string 'w3resource' u desno tako da
// periodicno brise po jedno slovo od zadi i dodaje ga na pocetak

function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // uzmi prvo dete //predpostavljajuci da nema druge dece
  var text = textNode.data;

  setInterval(function()
  {

    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  },150);

}

//task5 kraj


//task6 Program koji odredjuje da li je neka godina u Gregorijanskom kalendaru prestupna

function leapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016));

//task6 kraj

//taks7 Program koji pronalazi kada 1 januar pada u nedelju izmedju 2014 i 2050 godine

console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
  var d = new Date(year,0,1);
  if (d.getDay() === 0 ) //Nedelja je prva,tj predstavlja 0
    console.log('1st January is being a Sunday' + year);
}
console.log('--------------------');

//task7 kraj

//task8 Program koji uzima random brojeve od 1 do 10,korisnik ima mogucnost da
//unese broj.ako je pogotio iskace mu poruka "good work" ako nije "not matched"


const num = Math.ceil(Math.random()*10); //nasumican broj od 1 do 10
console.log(num);

const gnum = prompt('Guess the number between 1 and 10 inclusive'); // unos korisnika

if (gnum == num) {
  console.log('Matched');
}
else {
    console.log('Not matched,the number was' + num);
}

// task8 kraj

//task9 Program koji racuna broj dana do Bozica


var danasnji_dan = new Date();

var cms = new Date(today.getFullYear(),0,7); // 0 predstavlja Januar,7 predstavlja 7 Januar

if (danasnji_dan.getMonth() === 0 && danasnji_dan.getDate() > 7) {
  cms.setFullYear(cms.getFullYear()+1); //ako je prosao 7 januar postavi full year za jednu vece od trenutne godine

}

var one_day = 1000*60*60*24;
console.log(Math.ceil((cms.getTime()-danasnji_dan.getTime())/(one_day)) + 'days until Christmas');

// task9 kraj

//task10 Kalkulator koji moze da mnozi i deli dva broja

function multiplyBy() {
  num1 = document.getElementById('firstNumber').value;
  num2 = document.getElementById('secondNumber').value;
  document.getElementById('result').innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById('firstNumber').value;
  num2 = document.getElementById('secondNumber').value;
  document.getElementById('result').innerHTML = num1 / num2;
}

// task10 kraj

//task11 Konvertovanje farenhajta u celsius,i obrnuto //Formula C = (5/9) * (F - 32)

function cTOf(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9/5 + 32;
  var message = cTemp + 'Celsius is' + cToFahr + 'in fahrenheit.'
  console.log(message);
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp-32) * 5/9;
  var message = fTemp+'fahrenheit is ' + fToCel + 'C.';
  console.log(message)
}

cTOf(30);
fToC(90);

//task11 kraj

//task12 Napisati program koji uzima URL od trenutne web stranice

alert(document.URL);

//task12

//task13 Napisati program koji kreira promenljivu koristeci korisnicko ime

const var_name = 'abcd';
const n  = 120;
this[var_name] = n;
console.log(this[var_name]);

//task14 Program koji vraca ekstenziju  fajla

filename = 'system.php';
console.log(filename.split('.').pop()); //ispis php

//task14 kraj

//task15 Napisati program koji ako je broj manji od 13 se oduzima od 13 u suprotnom
//taj broj se oduzima sa 13 i mnozi sa 2

function difference(n) {
  if(n<=13)
    return 13-n;
  else {
    return (n-13)*2;
    }
}

console.log(difference(32));
console.log(difference(11));

//task15 kraj


// task16 Program koji sabira 2 intidzera,ako su ta dva intidzera isti brojevi pomnoziti
//ih sa 3

function sumTriple(x,y) {
  if (x===y) {
    return 3* (x+y);
  }
  else {
    return x+y;
  }
}

console.log('Suma je' + ' ' +  sumTriple(10,20) );
console.log('Suma je' + ' ' + sumTriple(10,10) );

//task16 kraj

function specNum(specific_num) {
  if(specific_num >= 19) {
    result1 = (specific_num-19) *3;
  }
  else {
    result2 = 19 - specific_num;
  }
}

console.log( 'rezultat je' + ' ' + specNum(19));
console.log('rezultat je' + ' ' + specNum(22));
