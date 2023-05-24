<script setup>
</script>

<template>
  <div class="hook-phrase">
    <p>TEXTILE<span class="colored-word">PRODUKTION</span>
      <span class="colored-word">GESTALTUNG</span> IST EIN GEMEINSAMER
      <span class="colored-word">PROZESS</span>. DIE WEBEREI TEUSCHER PRODUZIERT
      DEN <span class="colored-word">STOFF AUS IHREN IDEEN.</span>
    </p>
  </div>
</template>

<style scoped>
.hook-phrase {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;

  font-size: clamp(0.5em, 6.5vw, 3.3em);
  font-family: 'Steradian Black';
  font-weight: 900;

  color: #2F2F2F;
  padding-left: 1%;
  overflow: hidden;
}

p {
  text-align: start;
  width: 80%;
}

.colored-word {
  color: #86B49E;
}

@media (max-width: 480px) {
  .hook-phrase p {
    line-height: 1.8em;
  }
}

@media (max-width: 768px) {
  p {
    text-align: start;
    width: 80%;
    line-height: clamp(6vh, 3.3vh, 4vh);
  }
}
</style>