<script setup></script>

<template>
  <div class="wrapper-hook-phrase">
    <div class="hook-phrase">
      <p>
        TEXTILE <span class="colored-word">PRODUKTION</span> UND
        <span class="colored-word">GESTALTUNG</span> IST EIN GEMEINSAMER
        <span class="colored-word">PROZESS</span>. DIE WEBEREI TEUSCHER PRODUZIERT DEN <span class="colored-word">STOFF AUS IHREN IDEEN.</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper-hook-phrase {
  margin: 0% 9% 0% 13%;
}
.hook-phrase {
  height: auto;
  display: flex;
  justify-content: center;

  font-size: clamp(1.5em, 6.5vw, 3.3em);
  font-family: 'Steradian Black';
  font-weight: 900;

  color: #2f2f2f;
  overflow: hidden;
}

p {
  text-align: start;
  width: 90%;
  hyphens: manual;
  line-height: clamp(7vh, 3.3vh, 4vh) !important;
}

.colored-word {
  color: #86b49e;
}
@media (max-width: 768px) {
  p {
    text-align: start;
    width: 100%;
    line-height: 3.5rem !important;
    margin-bottom: 4rem;
  }
}
@media (max-width: 480px) {
  .hook-phrase p {
    line-height: 2rem !important;
  }
}
</style>
