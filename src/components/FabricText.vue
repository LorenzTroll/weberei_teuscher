<script setup>
</script>

<template>
  <div class="wrapper">
  <div class="fabric-text">
    <h1>Gewebe</h1>
    <div class="text-columns">
      <p>Gewebeart und Gewebeeigenschaften auszuloten ist Kern des Herstellungsprozesses. Welche Beschaffenheit hat der Stoff? Was für Anforderungen soll er erfüllen? Was für Voraussetzungen bieten die Maschinen? Einige abgewebte Stoffe finden Sie in unserem Portfolio.</p>
      <p>Gewebeart und Gewebeeigenschaften auszuloten ist Kern des Herstellungsprozesses. Welche Beschaffenheit hat der Stoff? Was für Anforderungen soll er erfüllen? Was für Voraussetzungen bieten die Maschinen? Einige abgewebte Stoffe finden Sie in unserem Portfolio.</p>
    </div>
  </div>
</div>
</template>

<style scoped>

.wrapper {
  margin: 0% 4% 0% 4%;
}

.fabric-text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 1% 0% 2% 14%;
}

.fabric-text h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 10px;
}

.text-columns {
  max-width: 85%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(0.5em, 5vw, 3em);
}

.text-columns p {
  flex: 1;
  font-size: 17px;
  font-weight: 450;
  max-width: 70%;
  hyphens: auto;
}

/*.button-outline-transparent {
  height: 50px;
  border: 3px solid #000;
  background-color: transparent;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  margin: 17px 0px;
  padding: 0% 5%;
}*/

.arrow-icon {
  margin-left: 7%;
}

/* Tablet */
@media (max-width: 767px) {
  .text-columns {
    flex-direction: column;
    gap: 0px;
  }
  .text-columns p {
    flex-basis: 100%;
    max-width: 100%; /* Set max-width to 100% */
  }
}

/* Smartphone */
@media (max-width: 480px) {
  .text-columns {
  gap: 0px;
  }
} 
</style>
