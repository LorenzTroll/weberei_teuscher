<script setup></script>

<template>
  <div class="wrapper-hook-phrase">
    <div class="hook-phrase">
      <p>
        DER <span class="colored-word">STOFF AUS IHREN IDEEN,</span> HERGESTELLT IN DER 
        <span class="colored-word">WEBEREI TEUSCHER.</span> <!-- IST EIN GEMEINSAMER
        <span class="colored-word">PROZESS</span>. DIE WEBEREI TEUSCHER PRODUZIERT DEN <span class="colored-word">STOFF AUS IHREN IDEEN.</span> -->
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper-hook-phrase {
  margin: 5% 9% 9% 13%;
}
.hook-phrase {
  height: auto;
  display: flex;
  justify-content: center;

  font-size: clamp(1.5em, 6.5vw, 3.3em);
  font-family: 'Steradian Black';
  font-weight: 900;
  font-style: normal;

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
    line-height: 3rem !important;
    margin-bottom: 4rem;
  }
}
@media (max-width: 480px) {
  .wrapper-hook-phrase {
    margin: 10% 8% 10% 8%;
    font-size: 19px;
  }
  .hook-phrase p {
    line-height: 2.2rem !important;

  }
}
</style>
