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
  <div class="videos">
    <VideoSection />
  </div>
  <div class="hook-phrase">
    <HookPhraseSection />
  </div>
  <div class="fabrics">
    <FabricCard v-for="fabric in fabrics" :key="fabric.id" :fabric="fabric" />
  </div>
  <div class="fabric-text">
    <FabricText />
  </div>
  <div class="cards-overview">
    <CardsOverview />
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
  transform: translate(-2%, -3%);
  width: 130%;
}
.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  border-radius: 15px;
  margin: 0px 8px;
}

.fabric-text {
  margin-bottom: 15%;
}

.cards-overview {
  margin: 5% 20% 0% 12%;
}

.hook-phrase {
  margin-top: 3%;
}

.cards-overview {
  margin-bottom: 5%;
}

.footer {

}

@media (max-width: 480px) {
  .fabrics {
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translate(-25%, -15%);
    width: 130%;
  }
  .cards-overview {
    margin: 5% 13% 0% 4%;
  }
  .lottie-container {
    transform: translate(-2%, -2%);
    width: 105%;
  }
}
</style>