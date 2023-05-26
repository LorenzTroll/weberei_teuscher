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
        <img src="logo.png" alt="Logo" class="logo">
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
  border-radius: 10px 10px 0 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-container {
  width: 13.625em;
}

.logo {
  width: 100%;
  height: auto;
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