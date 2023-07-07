<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* manipulate inner Text play-pause-button to just symbol on small screens */
const isMobile = ref(window.innerWidth <= 576)
const updateWidth = () => {
  isMobile.value = window.innerWidth <= 576
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="logo-container" v-if="!isMobile">
        <img class="logo" src="../assets/ident/wt_ident_2023_white.svg" alt="Logo">
      </div>
      <div class="links-container">
        <a href="#" class="link">Impressum</a>
        <a href="#" class="link">Datenschutz</a>
        <a href="#" class="link">© 2023</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  border-radius: 15px 15px 0 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/placeholder/wt_footer_backgorund-image.jpg');
  overflow: hidden; /* This will crop the image */
  position: relative;
  border-radius: 10px;

  background-size: cover; /* This will scale the image to 50% of its original size */
  background-repeat: no-repeat; /* This will prevent the image from repeating */
  background-position: center;
}


.logo-container {
  width: 13.625em;
}

.logo {
  width: 75%;
  height: auto;
  padding: 80px;
}

.links-container {
  display: flex;
  justify-content: space-evenly;
  width: 24.625em;
}

.links-container a {
  text-decoration: none;
  color: #ffff;
  font-weight: 900;
}

.link {
  text-decoration: none;
}
</style>