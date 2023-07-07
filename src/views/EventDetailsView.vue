<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import EventService from '@/services/EventService.js'
import NavSection from '@/components/NavSection.vue'
import Footer from '@/components/Footer.vue'
import HeaderBildA from '@/assets/images/placeholder/wt_HeroImage_placeholder_01.jpg'

import MyImageA from '@/assets/images/placeholder/wt_imageSinglePage_placeholder_01.png';
const myImageA = MyImageA

import MyImageB from '@/assets/images/placeholder/wt_imageSinglePage_placeholder_02.png';
const myImageB = MyImageB

import MyImageC from '@/assets/images/placeholder/wt_imageSinglePage_placeholder_03.png';
const myImageC = MyImageC

const props = defineProps({
  id: {
    required: true,
  },
})
const fabric = ref(null)

onMounted(() => {
  EventService.getFabric(props.id)
    .then((response) => {
      fabric.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })

  var flex1 = Math.random() * (0.80 - 0.36) + 0.36;
  var flex2 = 1 - flex1;

  var item1 = document.querySelector('.item1');
  var item2 = document.querySelector('.item2');

  if(item1 && item2) {
    item1.style.flex = flex1;
    item2.style.flex = flex2;
  }
})

const showPopup = ref(false)
const currentImage = ref('')

const openPopup = (imageUrl) => {
  currentImage.value = imageUrl
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
}

watch(showPopup, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>


<template>
  <div>
    <NavSection />
  </div>
  <div class="image-container">
    <img :src="HeaderBildA" alt="Bild" />
  </div>
  <div class="wrapper">
    <div class="hero-text">
      <h1>Die Weberei</h1>
      <div class="text-columns">
        <p>
          Das Know-how der textilen Handwerkskunst ist ein reiches Erbe, das wir
          uns zunutze machen. Das Resultat sind Stoffe, die sich in puncto
          Charakter, Qualität und Textur von automatisierten Webmethoden der
          Textilindustrie unterscheiden. Spezialisiert auf Mindermengen bis 500
          Meter produziert die Weberei Teuscher Stoffe mit einer Einzugsbreite
          bis zu 1,5 m, die nicht in gängigen Stoffkatalogen zu finden sind.
        </p>
        <p>
          Von der Idee bis zum fertigen Stoff, ob historische Vorlage oder
          modernes Design, Wir gestalten individuelle Muster nach Ihren
          Vorstellungen und beraten Sie zu Themen wie Garn, Bindungen &
          Stoffgestaltung. Geschert und gewebt wird in Halle (Saale),
          vorzugsweise auf Schaftmaschinen mit maximal 25 Einzelschäften und
          Doppelkettsystem mit der Charakteristischen Webkante.
        </p>
      </div>
    </div>
  </div>
  <!-- <div v-if="fabric">
    <img :src="fabric.image" alt="My Image" />
    <h1>{{ fabric.title }}</h1>
    <p>{{ fabric.client }} on {{ fabric.year }} @ {{ fabric.type }}</p>
    <p>{{ fabric.description }}</p>
  </div>-->
  <div class="grid">
    <div class="column">
      <div class="item item1"><img :src="myImageA" alt="" @click="openPopup(myImageA)"></div>
      <div class="item item2"><img :src="myImageB" alt="" @click="openPopup(myImageB)"></div>
    </div>
    <div class="column">
      <div class="item item3"><img :src="myImageC" alt="" @click="openPopup(myImageC)"></div>
      <div class="item item4 card card-info" style="background-color: #ff6a6a">
        <h1>Offenes Atelier</h1>
        <p>Save the Date am 23. März 2023. Auch die Weberei Teuscher nimmt teil und läd ein. Alle Infos gibt’s im Link.</p>
        <button class="button-filled-white">Infos</button>
      </div>
      <div v-if="showPopup" class="popup" @click="closePopup">
      <img :src="currentImage" alt="Fullscreen Image" class="fullscreen-image" />
    </div>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0% 4% 5% 4%;
}
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 1% 9% 2% 9%;
}

.hero-text h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
}

.text-columns {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(2em, 2vw, 3em);
  margin: 0px;
  hyphens: auto;
  -webkit-hyphens: auto;
}

.text-columns p {
  flex: 1;
  font-size: 17px;
  font-weight: 450;
}
.image-container {
  width: 100%;
  height: 800px;
  transform: translate(0%, -10%);
}
.image-container img {
  width: clamp(10%, 100%, 150%);
  object-fit: cover;
}
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 1% 14% 2% 14%;
}

.hero-text h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
}

.text-columns-detail {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(2em, 2vw, 3em);
}

.text-columns-detail p {
  flex: 1;
  font-size: 17px;
  font-weight: 450;
}

.column-left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.column-right {
  width: 65%;
}

img {
  object-fit: cover;
}
.grid {
  display: flex;
  height: auto;
  min-height: 1000px;
  grid-gap: 10px;
  margin: 0% 17% 10% 17%;
}

.column {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.button-filled-white {
  width: 130px;
  height: 50px;
  background-color: #ffffff;
  color: #272727;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
  margin-top: 60px;
}
.card {
  width: auto;
  height: auto;
  padding: 15%;
  border-radius: 20px;
  margin-bottom: 1.5em;
  overflow: hidden;
}
h1 {
  font-size: clamp(35px, 4.5vw, 40px);
  font-weight: 900;
  text-align: left;
  line-height: clamp(40px, 4.5vw, 50px);
}

p {
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  hyphens: auto;
  -webkit-hyphens: auto;
}
.card-info h1 {
  color: #ffffff;
}

.card-info p {
  color: #ffffff;
  font-weight: 500;
}

.item {
  flex: 1;
  margin-bottom: 10px;
}

.item1 {
  flex-grow: var(--randomFlex1);
}

.item2 {
  flex-grow: var(--randomFlex2);
}

.item3 {
  height: 70%;
}

.item4 {
  height: 30%;
  min-height: 350px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.popup img {
  object-fit: contain;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
}

.navbar, .footer {
  z-index: 100;
}

@media (max-width: 600px) {
  .grid {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-bottom: -12em;
    transform: translate(0%, -10%);
  }

  .column {
    width: 130%;
  }
  .hero-text {
    margin: 1% 7% 2% 5%;
  }
  .text-columns-detail {
    gap: 20px;
  }
  .column-left {
    width: 100%;
  }
  .column-right {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .column-left {
    width: 100%;
  }
  .column-right {
    width: 100%;
  }
}
</style>
