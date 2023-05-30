<script setup>
/* import { onMounted, onUnmounted, ref } from 'vue';
import lottie from 'lottie-web';

const container = ref(null);
let animation;

onMounted(() => {
  animation = lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json', // Dein Lottie-Animationspfad
  });
  const scrollRange = 3000;
  const speedFactor = 1;

  const handleScroll = () => {
    const scrollProgress = Math.min(window.scrollY / (scrollRange / speedFactor), 10);
    animation.goToAndStop(Math.floor(scrollProgress * animation.totalFrames), true);
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});*/

import { ref, onMounted, onBeforeUnmount } from 'vue'
import Vue3Lottie from 'vue3-lottie'

const animationLink = ref("https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json");
const componentKey = ref(0);

let mql;

const updateAnimation = () => {
  animationLink.value = mql.matches
    ? "https://lottie.host/e19d67ea-3677-444d-9d85-a51ffe625698/zXGQig3McA.json"
    : "https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json";
  componentKey.value++;
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 480px)');
  mql.addListener(updateAnimation);
  updateAnimation();
});

onBeforeUnmount(() => {
  mql.removeListener(updateAnimation);
});
</script>

<template>
  <div class="lottie">
    <component is="Vue3Lottie" :animationLink="animationLink" :key="componentKey"/>
  </div>
  <!-- <div ref="container"> -->
    <!-- <client-only class="lottie">
      <Vue3Lottie
      animationLink="https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json"/> 
    </client-only> -->
  <!-- </div> -->
    <div class="hero-text">
      <h1>Die Weberei</h1>
      <div class="text-columns">
        <p>Das Know-how der textilen Handwerkskunst ist ein reiches Erbe, das wir uns zunutze machen. Das Resultat sind Stoffe, die sich in puncto Charakter, Qualität und Textur von automatisierten Webmethoden der Textilindustrie unterscheiden.  Spezialisiert auf Mindermengen bis 500 Meter produziert die Weberei Teuscher Stoffe mit einer Einzugsbreite bis zu 1,5 m, die nicht in gängigen Stoffkatalogen zu finden sind.</p>
        <p>Von der Idee bis zum fertigen Stoff, ob historische Vorlage oder modernes Design, Wir gestalten individuelle Muster nach Ihren Vorstellungen und beraten Sie zu Themen wie Garn, Bindungen & Stoffgestaltung. Geschert und gewebt wird in Halle (Saale), vorzugsweise auf Schaftmaschinen mit maximal 25 Einzelschäften und Doppelkettsystem mit der Charakteristischen Webkante.</p>
      </div>
    </div>
</template>

<style scoped>
.lottie {
  width: 100%;
  height: auto;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 1% 15% 2% 15%;
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
  gap: clamp(0.5em, 5vw, 3em);
}

.text-columns p {
  flex: 1;
  font-size: 17px;
  font-weight: 450;
}

/* Smartphone */
@media (max-width: 480px) {
  .lottie {
  width: 100%;
  height: auto;
  }
}

@media (max-width: 767px) {
  .text-columns p {
    flex-basis: 100%;
  }
  .lottie {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .lottie {
    width: 100%;
  }

}
</style>