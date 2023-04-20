let tarkistus1 = false;
let tarkistus2 = false;
let tarkistus3 = false;
let tarkistus4 = false;
let tarkistus5 = false
let tarkistus6 = false;


let pisteet = 0;
let berserkpack = 0;
let supershotgun = 0;
let rocketlauncher = 0;
let bfg = 0;


function pisteidenLisays(event) {
  event.preventDefault();
  let piste = document.getElementById("aloitus");
  let kuvat = document.getElementById('powerups');
  kuvat.style.display = 'block'; 
  pisteet = pisteet + 1;
  pisteet = pisteet + berserkpack;
  pisteet = pisteet + supershotgun;
  pisteet = pisteet + rocketlauncher;
  pisteet = pisteet + bfg;

  piste.textContent = pisteet;
  }


function soitaAani() {
  let audio = document.getElementById("audio");
  let audio1 = document.getElementById("audio1");
  let audio2 = document.getElementById("audio2");
  audio2.play();
  audio.play();
  audio1.play();
}


function kuvanVaihto() {
  const image = document.getElementById("nappi");
  image.disabled = true;

  image.src = 'grafiikat/painstate.png';
  setTimeout(() => {
    image.src = 'grafiikat/pinky.png';
    image.disabled = false;
  }, 900);
}


function berserk(){
  let powerup = document.getElementById("audio4");
  let piste = document.getElementById("aloitus");
  if(pisteet >= 20){
  pisteet=pisteet-20;
  berserkpack += 5;
  powerup.play();
  piste.textContent = pisteet;
  }else{
    alert("Not enough points!")
  }
}


function superShotgun(){
  let gun = document.getElementById("audio5");
  let piste = document.getElementById("aloitus");
  if(pisteet >= 100){
  pisteet=pisteet-100;
  supershotgun += 20;
  gun.play();
  piste.textContent = pisteet;
  }else{
    alert("Not enough points!")
  }
}


function rocketLauncher(){
  let gun = document.getElementById("audio5");
  let piste = document.getElementById("aloitus");
  if(pisteet >= 300){
  pisteet=pisteet-300;
  rocketlauncher += 50;
  gun.play();
  piste.textContent = pisteet;
  }else{
    alert("Not enough points!")
  }
}


function bigGun(){
  let gun = document.getElementById("audio5");
  let piste = document.getElementById("aloitus");
  if(pisteet >= 1000){
  pisteet=pisteet-1000;
  bfg += 100;
  gun.play();
  piste.textContent = pisteet;
  }else{
    alert("Not enough points!")
  }
}


function pelaajanKiusaus(){
  if(pisteet>=100000000 && !tarkistus5){
    alert("Alright, for the sake of your own wellbeing, I have to put a stop to this.")
    tarkistus5 = true;
    location.replace("secret.html")
  }
  if(pisteet>=10000000 && !tarkistus1){
    alert("The authorities have been notified of your insanity.")
    tarkistus1 = true;
  }
  if(pisteet>=1000000 && !tarkistus2){
    alert("There must be something wrong with your head.")
    tarkistus2 = true;
  }
 if(pisteet>=100000 && !tarkistus3){
    alert("Did you setup an auto-clicker?")
    tarkistus3 = true;
  }
if(pisteet>=10000 && !tarkistus4){
    alert("Are you actually enjoying this?")
    tarkistus4 = true;
  }
}


function salaisuus(){
  let piste = document.getElementById("aloitus");
  let lopetus = document.getElementById("virhe");
  if(piste.innerHTML == 666 && !tarkistus6){
    alert("Congratulations, you have unlocked a super secret weapon!")
    lopetus.style.display = 'block';
    tarkistus6 =true;
  }
}


function rikoPeli(){
  location.replace("secret.html")
}


