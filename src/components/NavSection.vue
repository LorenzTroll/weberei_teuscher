<script setup>
import { ref, onMounted, onUnmounted, watchEffect} from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const menuOpen = ref(false);
const isSmallScreen = ref(window.innerWidth <= 768);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

watchEffect(() => {
  document.body.style.overflow = menuOpen.value ? 'hidden' : 'auto';
});

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<template>
  <header class="navbar">
    <div class="nav-container">
      <img class="logo" src="../assets/ident/wt_ident_2023.svg" alt="Logo" />
      <div id="text-nav-short-hook" v-if="!isSmallScreen">
        <p>Individuelle Gewebeherstellung<br>und Beratung in Halle Saale</p>
      </div>
      <div class="buttons-container">
        <button class="button-filled-black" v-if="!isSmallScreen">Kontakt</button>
        <button class="button-outline-transparent" v-if="!isSmallScreen">Instagram</button>
      </div>
      <div class="burger-menu" @click="toggleMenu">
        <div class="line line1" :class="{ 'cross': menuOpen }"></div>
        <div class="line line2" :class="{ 'hidden': menuOpen }"></div>
      <div class="line line3" :class="{ 'cross': menuOpen }"></div>
    </div>
  </div>
    <div class="overlay" :class="{ 'visible': menuOpen }">
        <div id="overlay-wrapper">
            <div class="overlay-link"><RouterLink :to="{ name: 'event-list' }">Home</RouterLink></div>
            <div class="overlay-link"><RouterLink :to="{ name: 'portfolio' }">Portfolio</RouterLink></div>
            <!--<div class="overlay-link"><RouterLink :to="{ name: 'about' }">About</RouterLink></div>-->
        </div>
        <div id="nav-footer-wrapper">
            <div id="nav-footer-left">
                <div class="overlay-link-footer">Datenschutz</div>
                <div class="overlay-link-footer">Impressum</div>
            </div>
            <div id="nav-footer-right">
                <div class="overlay-link-footer">© 2023</div>
            </div>
        </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  justify-content: center;
  height: 120px;
  width: 100%;
  color: #ffffff;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  padding: 0 80px;
  background-color: #EAE8E8;
  border-radius: 15px;
}

.logo {
  width: 200px;
  height: auto;
}

#text-nav-short-hook {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 19px;
  color: #272727;
}

.buttons-container {
  display: flex;
  margin-left: 2%;
  gap: 15px;
  text-align: left;
  line-height: 22px;
}

.button-outline-transparent {
  width: 120px;
  height: 50px;
  border: 2.7px solid #000;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
}

.button-filled-black {
  width: 120px;
  height: 50px;
  background-color: #272727;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
}

.burger-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  z-index: 1000;
  align-items: flex-end;
}

.line {
  height: 5px;
  background-color: #000;
  transition: all 0.3s;
  border-radius: 99px;
}

.line1 {
  width: 40px;
}

.line2 {
  width: 20px;
}

.line3 {
  width:40px;
}

.cross {
  transform: translateY(12.5px) rotate(45deg);
  background-color:#FF6A6A;
}

.line3.cross {
  transform: translateY(-12.5px) rotate(-45deg);
  background-color:#FF6A6A;
}

.hidden {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
  z-index: 100;
  line-height: 35px;
}

.overlay.visible {
  background-color: #2F2F2F;  
  opacity: 3;
  pointer-events: all;
}

.overlay-link {
  color: #fff;
  font-size: 50px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
  align-content: flex-start;
  margin-bottom: 30px;
}

.overlay-link a {
  text-decoration: none;
  color: white;
}

#overlay-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#nav-footer-wrapper {
  position: absolute;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
  bottom: 40px;
  flex-wrap: wrap;
}

#nav-footer-left {
  display: flex;
  gap: 20%;
  margin-right: 35px;
}

#nav-footer-right {
  font-weight: 900;
}

@media (max-width: 1200px) {
  #text-nav-short-hook {
    visibility: hidden;
    width: 10%;
  }
}
/* Tablet */
@media (max-width: 768px) {
.button-outline-transparent {
    width: 140px;
    height: 50px;
    font-size: 18px;
    }
  .button-filled {
    width: 140px;
    height: 50px;
    font-size: 18px;
  }
}

/* Smartphone */
@media (max-width: 480px) {
  .nav-container {
    padding: 0 8%;
    height: 105px;
  }
  .logo {
    width: 170px;
    height: auto;
  }
  .button-outline-transparent {
  width: 120px;
  height: 40px;
  font-size: 16px;
 
  }
  .button-filled {
    width: 120px;
    height: 40px;
    font-size: 16px;
  }
  .burger-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 23px;
  cursor: pointer;
  z-index: 1000;
  align-items: flex-end;
}

  .line {
  height: 4px;
  background-color: #000;
  transition: all 0.3s;
  border-radius: 99px;
}

.line1 {
  width: 35px;
}

.line2 {
  width: 17px;
}

.line3 {
  width:35px;
}

.cross {
  transform: translateY(10px) rotate(45deg);
  background-color:#FF6A6A;
}

.line3.cross {
  transform: translateY(-9px) rotate(-45deg);
  background-color:#FF6A6A;
}
}
</style>