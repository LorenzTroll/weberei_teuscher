<script setup>
import { ref, onMounted } from 'vue'

import NavSection from '@/components/NavSection.vue'
import Footer from '@/components/Footer.vue'

import MeinIcon from '@/assets/icons/wt_arrow-right-long.svg';
const meinIcon = MeinIcon;
</script>

<template>
  <div>
    <NavSection />
  </div>
  <div class="grid-container">
    <div class="column">
      <div class="image" style="height: auto;"><img src="../assets/images/placeholder/wt_image_placeholder_01.jpg" alt=""></div>
      <div class="image" style="height: auto;"><img src="../assets/images/placeholder/wt_image_placeholder_02.jpg" alt=""></div>
    </div>
    <div class="column">
      <div class="image-large"><img src="../assets/images/placeholder/wt_image_placeholder_03.jpg" alt=""></div>
    </div>
    <div class="column">
      <div class="image" style="height: auto;"><img src="../assets/images/placeholder/wt_image_placeholder_04.jpg" alt=""></div>
      <div class="image" style="height: auto;"><img src="../assets/images/placeholder/wt_image_placeholder_05.jpg" alt=""></div>
    </div>
    <div class="column">
      <div class="image" style="height: auto;"><img src="../assets/images/placeholder/wt_image_placeholder_06.jpg" alt=""></div>
    </div>
  </div>

  <div class="portfolio-text">
    <h1>Portfolio</h1>
    <div class="text-columns">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rerum neque cumque maxime fuga aliquid nihil nulla harum porro aperiam dolor sint ipsa voluptatibus quam quia inventore eius atque dolorem obcaecati, veniam minus vitae? Eum quisquam dolorum in minus similique et itaque provident at facilis assumenda numquam, porro sunt alias.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis veritatis, enim aliquid, reprehenderit animi illum quo molestias ullam dolore ipsum facere ea tempora blanditiis dolorem libero necessitatibus quis ad iste. Fugit aperiam molestias non dignissimos quaerat impedit rerum, in id, nostrum cupiditate aspernatur, libero consequatur.</p>
    </div>
    <div><button class="portfolio-button"><img id="arrow-right-long" :src="meinIcon" alt="Zum Portfolio" /></button></div>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<style>
.portfolio-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 5% 17% 10% 17%;
}

.portfolio-text h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
}

.portfolio-button {
  display: flex;
  top: 25em;
  right: 30em;
  width: 8em;
  height: 4em;
  background-color: white;
  border-radius: 53.25em;
  border-style: none;
  align-content: center;
  justify-content: center;
  align-items: center;
}

#arrow-right-long {
  width: 45%;
  transform: scaleX(-1);
}

.text-columns {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(2em, 2vw, 3em);
  margin-bottom: 5%;
}

.text-columns p {
  flex: 1;
  font-size: 17px;
  font-weight: 450;
}

.grid-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  width: 100%;
  margin: auto;
}

  .image-large {
  height: 80%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .column {
    flex-basis: 40%;
    margin-right: 0;
  }
.image {
  height: 90%;
}

  .image-large {
  height: 98.6%;
}
}

.image {
  margin-bottom: 5px;
}

@media (max-width: 480px) {
}

</style>
