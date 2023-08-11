<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* manipulate inner Text play-pause-button to just symbol on small screens */
const isMobile = ref(window.innerWidth <= 481)
const updateWidth = () => {
  isMobile.value = window.innerWidth <= 481
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

/* logic for play pause toggle */
const video = ref(null);
const playButton = ref(null);
const pauseButton = ref(null);
const showPause = ref(false);

const playVideo = () => {
  video.value.play();
  playButton.value.style.opacity = 0;
  setTimeout(() => {
    playButton.value.style.display = 'none';
  }, 1000);
}

const pauseVideo = () => {
  video.value.pause();
  playButton.value.style.display = 'block';
  playButton.value.style.opacity = 1;
  showPause.value = false;
}

const togglePlayPause = () => {
  if (video.value.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
}

const showPauseButton = () => {
  if (!video.value.paused) {
    showPause.value = true;
    setTimeout(() => {
      showPause.value = false;
    }, 3500);
  }
}
</script>

<template>
  <div class="video-container">
    <video
      v-if="!isMobile"
      poster="../assets/images/wt_video_thumbnail_desktop.png" 
      ref="video"
      @mousemove="showPauseButton"
      @click="togglePlayPause">
      <source
        src="../assets/Fadenbetireb_Web_720p_Sound_Graded_compressed.mp4"
        type="video/mp4"
      />
    </video>

    <video v-else
      poster="../assets/images/wt_video_thumbnail_mobile.jpg" 
      ref="video" 
      @mousemove="showPauseButton" 
      @click="togglePlayPause">
      <source src="../assets/Fadenbetireb_Web_720p_Sound_Graded_compressed.mp4" type="video/mp4" />
    </video>

    <button
      ref="playButton"
      @click="playVideo"
      class="play-button play-icon"
      v-if="!isMobile">Video &#9658;
    </button>

    <button
      ref="playButton"
      @click="playVideo"
      class="play-button play-icon"
      v-else><font-awesome-icon icon="play" />
    </button>

    <button
      ref="pauseButton"
      @click="pauseVideo"
      class="pause-button"
      v-show="showPause">Pause
    </button>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  max-width: 95%;
  background-color: #232323;
  border-radius: 25px;
  border-radius: 15px;
  margin: 25px 25px 30px 25px;
}

video {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.play-button,
.pause-button {
  position: absolute;
  background-color: #f1f1f1;
  border: none;
  color: #000;
  padding: 15px 35px;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-size: 20px;
}
.play-button:hover {
  background-color: #ddd;
}

.play-icon {
  font-size: 15px;
  position: relative;
}

/* Media query for mobile devices */
@media screen and (max-width: 480px) {
  .play-button,
  .pause-button {
    position: absolute;
    width: 80px;
    height: 80px;
    font-size: 20px;
    border-radius: 50px;
    display: block;
  }
  .video-container {
    max-width: 90%;
  }
}

/* Media query for tablet devices */
@media screen and (min-width: 481px) and (max-width: 992px) {
  .play-button,
  .pause-button {
    position: absolute;
    width: clamp(100px, 150px, 130px);
    height: 55px;
    font-size: 15px;
    border-radius: 50px;
    display: block;
  }
}

/* Media query for desktop devices */
@media screen and (min-width: 992px) {
  .play-button,
  .pause-button {
    position: absolute;
    width: 130px;
    height: 55px;
    font-size: 15px;
    border-radius: 50px;
    display: block;
  }
}
</style>