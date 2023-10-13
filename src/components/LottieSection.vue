<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import { gsap } from 'gsap';

const animationLink = ref(
  'https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json'
)
const componentKey = ref(0)
let mql

const updateAnimation = () => {
  animationLink.value = mql.matches
    ? 'https://lottie.host/c585abda-6c21-4bf0-a71a-5301d21c0469/U5KKAh54y4.json'
    : 'https://lottie.host/3aabb79d-d852-485a-a1a5-628af5a46e8b/5TbYyu3rxb.json'
  componentKey.value++
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 560px)')
  mql.addListener(updateAnimation)
  updateAnimation()
})

onBeforeUnmount(() => {
  mql.removeListener(updateAnimation)
})

const mouseEnter = (event) => {
  event.currentTarget.addEventListener('mousemove', mouseMove);
};

const mouseMove = (event) => {
  const magnetButton = event.currentTarget;
  const bounding = magnetButton.getBoundingClientRect();
  const strength = 20;

  gsap.to(magnetButton, {
    duration: 1,
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
    ease: "power4.out"
  });
};

const mouseLeave = (event) => {
  event.currentTarget.addEventListener('mouseleave', resetButtonPosition);
};

const resetButtonPosition = (event) => {
  const magnetButton = event.currentTarget.querySelector('.magnet-button');
  if (magnetButton) {
    gsap.to(magnetButton, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "power4.out"
    });
  }
};
</script>

<template>
  <div class="lottie">
    <component is="Vue3Lottie" :animationLink="animationLink" :key="componentKey"/>
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
      <div class="magnetic" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
          <button class="button-filled-black magnet-button my-button">
            Kontakt
          </button>
          <slot></slot>
        </div>
    </div>
  </div>
</template>

<style scoped>
.lottie {
  width: 100%;
  height: auto;
}
.wrapper {
  margin: 0% 4% 0% 4%;
}
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 1% 15% 1% 16%;
}

.hero-text h1 {
  font-size: clamp(30px, 4.5vw, 35px);
  font-family: 'Steradian Black';
  font-weight: 900;
  margin-bottom: 15px;
}

.text-columns {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(3em, 2vw, 4em);
  margin: 0% 0% 0% 0%;
  hyphens: auto;
  -webkit-hyphens: auto;
}

.text-columns p {
  flex: 1;
  font-size: 18px;
  font-family: 'Steradian';
  font-weight: 450;
  line-height: 1.5rem;
  hyphens: auto;
  -webkit-hyphens: auto;
}
.button-filled-black {
  width: 170px;
  height: 50px;
  background-color: #272727;
  color: #ffffff;
  font-weight: 550;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
  margin: 10% 0% 30% 0%;
  transform: translate(-10px, 0px);
  font-family: 'Steradian';
}
.magnetic {
  display: inline-block
}
.my-button {
  background-color: #eae8e8;
  border: 2px solid #272727;
  color: #272727;
  cursor: pointer;
  font-family: 'Steradian';
}
.my-button:hover {
  color: #ffffff;
  background-color: #000;
  transition: 0.5s background-color, 0.5s box-shadow;
  box-shadow: 0px 2px 25px rgba(0,0,0,0.5);
  font-family: 'Steradian';
}

/* Smartphone */
@media (max-width: 480px) {
  .lottie {
    width: 100%;
    height: auto;
  }
  .hero-text {
    margin: 13% 5% 1% 5%;
  }
  .text-columns p {
    font-size: 18px;
    line-height: 1.5rem;
  }
  .magnetic {
    margin: 0%;
    width: 100%;
  }
  .button-filled-black {
    margin: 10% auto !important;
  }
}

@media (max-width: 767px) {
  .text-columns {
    flex-direction: column;
    gap: 0px;
  }
  .text-columns p {
    flex-basis: 100%;
    max-width: 100%;
  }
  .lottie {
    width: 100%;
  }
  .button-filled-black{
    margin: 20% 0% 0% 0%;
  }
}

@media screen and (max-width: 1024px) {
  .lottie {
    width: 100%;
  }
}
</style>
