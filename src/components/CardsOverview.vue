<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

import CardImage from '../assets/images/wt_image_mechanischer-webstuhl_desktop.png';
const cardImage = CardImage

import MeinIcon from '@/assets/icons/wt_arrow-up-long.svg';
const meinIcon = MeinIcon
</script>

<template>
  <div class="wrapper">
    <div class="column">
      <div class="card" style="background-color: #fcfcfc">
        <div class="image">
          <img :src="cardImage" alt="">
        </div>
        <h1>Mechanische<br>Webstühle</h1>
        <p> Zur Verfügung stehen zwei Schaftmaschinen Grosse Bj1949 der Firma Grünne mit max. 25 Schäften, Doppelkettsystem, 152cm Webbreite inklusive Webkante. Darüber hinaus ein 160er Spulengatter bereit plus Konusschärmaschine mit max. 2 m Kettbreite, Kreuzspulmaschineund eine Hacoba Schussspulmaschine."</p>
      </div>
      <div class="card card-info" style="background-color: #ff6a6a">
        <h1>Offenes Atelier</h1>
        <p>Save the Date am 23. März 2023. Auch die Weberei Teuscher nimmt teil und läd ein. Alle Infos gibt’s im Link.</p>
        <button class="button-filled-white">Infos</button>
      </div>
    </div>
    <div class="column">
      <div class="card card-info card-request" style="background-color: #232323">
        <h1>Beratung und<br>Maschinen Mieten</h1>
        <p>Räumlichkeiten inklusive Maschinen können gemietet werden. Das Spektrum reicht von individuellen Projekten bis zu Kursangeboten. Einweisung ist verpflichtend und weitere Expertise zusätzlich buchbar.</p>
        <button class="button-filled-white">Anfrage</button>
      </div>
      <div class="card" style="height: auto; background-color: #86b49e">
        <div class=" image contain">
          <img src="../assets/images/wt_image_hand-webstuhl_desktop.jpg" alt="">
        </div>
        <h1>Handwebstühle</h1>
        <p>Zur Verfügung stehen ein Kontermarschwebstuhl mit Schnelllade und 130 cm Webbdreite, Jaquard Handwebstuhl „Chemnitzer Grobstich“ mit 416 Platinen, Webbreite von 40 cm u. 20 Fäden pro cm. Hinzu gesellt sich ein kleiner Schaftwebtuhl mit max. 16 Schäften, Schnelllade und 1 m Webbreite. Tastenwebstuhl mit 12 Schäften.</p>
      </div>
    </div>
    <div class="column-to-top">
      <button class="scroll-to-top button-filled-white-vertical" @click="scrollToTop">
        <img id="arrow-long" :src="meinIcon" alt="Zum Anfang" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(clamp(48%, 400px, 49%), 1fr));
  grid-gap: 9%;
  margin: 0% 6% 0% 6%;
}

.card {
  width: 81%;
  height: auto;
  padding: 15%;
  border-radius: 20px;
  margin-bottom: 1.5em;
  overflow: hidden;
}

img {
  width: 110%;
  margin-bottom: 2em;
  object-fit: cover;
}

h1 {
  font-size: clamp(35px, 4.5vw, 40px);
  font-weight: 900;
  text-align: left;
  line-height: clamp(40px, 4.5vw, 50px);
  padding-bottom: 5%;
  hyphens: auto;
  -webkit-hyphens: auto;
}

p {
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  hyphens: auto;
  -webkit-hyphens: auto;
}
.button-filled-white {
  width: 120px;
  height: 50px;
  background-color: #ffffff;
  color: #272727;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
  margin-top: 60px;
}
.button-filled-white-vertical {
  width: 120px;
  height: 50px;
  background-color: #ffffff;
  color: #272727;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
}

.card-info h1 {
  color: #ffffff;
}

.card-info p {
  color: #ffffff;
  font-weight: 500;
}

.contain {
  width: 128%;
  display: flex;
  justify-content: end;
  transform: translate(-6%, -2%);
  margin-top: -17%;
}

.scroll-to-top {
  border-radius: 50px;
  background-color: #ffff;
  color: #272727;
  cursor: pointer;
  height: 140px;
  width: 50px;
}

.column-to-top {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5em;
}

#arrow-long {
  width: 50%;
  height: auto;
  margin: 0;
}

/* Media Query for responsiveness */
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-gap: 0%;
  }
  .scroll-to-top {
    display: block;
  }
}
@media (min-width: 576px) {
  .card {
    width: 81%;
    height: auto;
    padding: 15%;
    border-radius: 20px;
    margin-bottom: 1.5em;
    overflow: hidden;
}
}
</style>