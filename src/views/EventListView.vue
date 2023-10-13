<script setup>
import { ref, onMounted } from 'vue'

import EventService from '@/services/EventService.js'
import VideoSection from '@/components/VideoSection.vue'
import LottieSection from '@/components/LottieSection.vue'
import NavSection from '@/components/NavSection.vue'
import HookPhraseSection from '@/components/HookPraseSection.vue'
import FabricCard from '@/components/FabricCard.vue'
import FabricText from '@/components/FabricText.vue'
import CardsOverview from '@/components/CardsOverview.vue'
import Footer from '@/components/Footer.vue'
import ContactSection from '@/components/ContactSection.vue'

import MeinIcon from '@/assets/icons/wt_arrow-right-long.svg'
const meinIcon = MeinIcon

const fabrics = ref(null)
onMounted(() => {
  EventService.getFabrics()
    .then((response) => {
      fabrics.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div>
    <NavSection />
  </div>
  <div class="lottie-container">
    <LottieSection />
  </div>
  <div class="wrapper">
    <div class="videos">
      <VideoSection />
    </div>
  </div>
  <div class="hook-phrase">
    <HookPhraseSection />
  </div>
  <div class="fabrics">
    <!--<div class="button-container">
      <button class="portfolio-button">
        <img id="arrow-right-long" :src="meinIcon" alt="Zum Portfolio" />
      </button>
    </div>-->
    <FabricCard v-for="fabric in fabrics" :key="fabric.id" :fabric="fabric" />
    <div id="rectangle-element"></div>
  </div>
  <div class="fabric-text">
    <FabricText />
  </div>
  <div class="cards-overview">
    <CardsOverview />
  </div>
  <div class="contact-section">
    <ContactSection />
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<style scoped>
.lottie-container {
  transform: translate(-5%, -6%);
  width: 112%;
}
.fabrics {
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translate(0%, -3%);
  width: 100%;
  height: 700px;
  justify-content: center;

  position: relative;
  z-index: 0;
}

#rectangle-element {
  width: 100%;
  height: 70%;
  background-color: #272727;
  border-radius: 20px;
  transform: translate(0%, 0%);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  position: absolute;
  z-index: -10;
}

.portfolio-button {
  width: 8em;
  height: 4em;
  background-color: white;
  border-radius: 53.25em;
  border-style: none;
  margin-right: 2%;
  transform: scaleX(-1);
}

.button-container {
  width: 100%;
  height: 40px;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#arrow-right-long {
  width: 45%;
}

.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  border-radius: 15px;
  margin: 2%;
}

.wrapper {
  margin: 0% 2% 0% 2%;
}

.fabric-text {
  transform: translate(0%, -15%);
}

.cards-overview {
  margin: 4% 10% 0% 10%;
}

.hook-phrase {
  margin-top: 3%;
}

.contact-section {
  margin: 12% 20% 13% 10.5%;
}
@media (max-width: 768px) {
  .fabrics {
    height: 500px;
    width: 150%;
    transform: translate(-20%, -3%);
  }
  .button-container {
  width: 70%;
}
}


@media (max-width: 480px) {
  .fabrics {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translate(-25%, -15%);
    width: 180%;
  }
  .cards-overview {
    margin: -7% 13% 0% 4%;
  }
  .lottie-container {
    transform: translate(-2%, -3.5%);
    width: 105%;
  }
  #rectangle-element {
    display: none;
  }
  .contact-section {
  margin: 20% 5% 0% 4%;
}
.button-container {
  width: 60%;
  }
}
</style>
