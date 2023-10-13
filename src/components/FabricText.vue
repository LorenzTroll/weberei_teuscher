<script setup>
import { gsap } from 'gsap';

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
  <div class="wrapper">
  <div class="fabric-text">
    <h1>Gewebe</h1>
    <div class="text-columns">
      <p>Gewebeart und Gewebeeigenschaften auszuloten ist Kern des Herstellungsprozesses. Welche Beschaffenheit hat der Stoff? Was für Anforderungen soll er erfüllen? Was für Voraussetzungen bieten die Maschinen? Einige abgewebte Stoffe finden Sie in unserem Portfolio.</p>
      <p>Gewebeart und Gewebeeigenschaften auszuloten ist Kern des Herstellungsprozesses. Welche Beschaffenheit hat der Stoff? Was für Anforderungen soll er erfüllen? Was für Voraussetzungen bieten die Maschinen? Einige abgewebte Stoffe finden Sie in unserem Portfolio.</p>
    </div>
    <div class="magnetic" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
          <button class="button-filled-black magnet-button my-button">
            Portfolio
          </button>
          <slot></slot>
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
  margin: 10% 0% 0% 14%;
}

.fabric-text h1 {
  font-size: clamp(30px, 4.5vw, 35px);
  font-weight: 900;
  margin-bottom: 10px;
  font-family: 'Steradian Black';
}

.text-columns {
  max-width: 85%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: clamp(0.5em, 5vw, 3em);
  margin-bottom: 0%;
}

.text-columns p {
  flex: 1;
  font-size: 18px;
  font-weight: 450;
  max-width: 70%;
  hyphens: auto;
  line-height: 1.5rem;
  font-family: 'Steradian';
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
.button-filled-black {
  width: 170px;
  height: 50px;
  background-color: #272727;
  color: #ffffff;
  font-family: 'Steradian';
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
}
.magnetic {
  display: inline-block;
  /*border: 1px solid #000; //use this for debugging*/
}
.my-button {
  background-color: #eae8e8;
  border: 2px solid #000;
  color: #272727;
  cursor: pointer;
}

.my-button:hover {
  color: #FFF;
  background-color: #000;
  transition: 0.5s background-color, 0.5s box-shadow;
  box-shadow: 0px 2px 25px rgba(0,0,0,0.5);
}

/* Tablet */
@media (max-width: 767px) {
  .text-columns {
    flex-direction: column;
    gap: 0px;
  }
  .text-columns p {
    flex-basis: 100%;
    max-width: 100%;
  }

  .button-filled-black{
    margin: 20% 0% 0% 0%;
  }
}

/* Smartphone */
@media (max-width: 480px) {
  .fabric-text {
    margin: 5% 5% 1% 5%;
  }
  .text-columns {
  gap: 0px;
  max-width: 100%;
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
    margin: 10% auto;
  }
} 
</style>
