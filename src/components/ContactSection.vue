<script setup>
import { gsap } from 'gsap';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

import MeinIcon from '@/assets/icons/wt_arrow-up-long.svg';
const meinIcon = MeinIcon

import CardImage from '../assets/images/placeholder/wt_portrait_image_01.png'
const cardImage = CardImage

import ContactCardBackground from '../assets/images/placeholder/wt_portrait_background_decoration.png'
const contactCardBackground = ContactCardBackground

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
    <div class="column">
      <div class="card-left">
        <img id="image-contact" :src="cardImage" alt="" />
      </div>
      <div class="background">
        <img :src="contactCardBackground" alt="" />
      </div>
    </div>
    <div class="column">
      <div class="card-right card-info">
        <h1>
          SIE SUCHEN KOOPERATIONEN ODER HILFE, UM IHRE ZIELE ZU ERREICHEN, DANN
          LASSEN SIE ES UNS WISSEN.
        </h1>
        <div class="magnetic" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
          <button class="button-filled-black magnet-button my-button">
            Anfragen
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="column-to-top">
      <button class="scroll-to-top button-filled-white-vertical" @click="scrollToTop">
        <img id="arrow-long" :src="meinIcon" alt="Zum Anfang" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(clamp(48%, 400px, 49%), 1fr));
  grid-gap: 9%;
  margin: 0% 3% 0% 5%;
  position: relative;
}

.column {
  display: flex;
}

.card-left {
  width: 110%;
  border-radius: 20px;
  z-index: 100;
  padding-bottom: 10%;
}

.background {
  top: -55%;
  left: -26%;
  position: absolute;
  z-index: -100;
  width: 100%;
}

.card-right {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0% 0% 10% 16%;
}

h1 {
  text-align: left;
  line-height: clamp(45px, 2vw, 50px);
  margin: 0%;
  font-size: clamp(35px, 3vw, 40px);
  font-family: 'Steradian Black';
  font-weight: 900;
  width: 120%;
}
.button-filled-black {
  width: 150px;
  height: 50px;
  background-color: #272727;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 50px;
  border-style: none;
  margin-top: 10%;
}

#image-contact {
  width: 120%;
  height: -webkit-fill-available;
  border-radius: 10px;
  object-fit: cover;
}

.magnetic {
  margin: -50px;
  padding: 50px;
  display: inline-block;
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

.scroll-to-top {
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
  height: 140px;
  width: 50px;
  border-style: none;
}

.column-to-top {
  display: flex;
  align-items: flex-end;
  margin-bottom: 2.5em;
  margin-left: 3em;
}

#arrow-long {
  width: 50%;
  height: auto;
  margin: 0;
}

@media (max-width: 1069px) {
  .background{
    top: -40%;
    left: -40%;
    width: 130%;
  }
}

@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-gap: 0%;
  }
  .background {
    top: -31%;
    left: -42%;
    position: absolute;
    z-index: -100;
    width: 190%;
  }
  #image-contact {
    width: 110%;
  }
  .card-right {
  padding: 0% 10% 10% 0%;
  }
  .column-to-top {
    display: none;
  }
}

@media (max-width: 480px) {
  .background {
    top: -21%;
    left: -42%;
    position: absolute;
    z-index: -100;
    width: 200%;
  }
  .card-right {
    padding: 0% 10% 10% 0%;
  }
  #image-contact {
    width: 100%;
  }
  .magnetic {
    margin: 8% 0% 0% 0%;
    width: 100%;
    padding: 0% 0% 0% 5%;
  }
  .button-filled-black {
    margin: 10% auto;
  }
  .column-to-top {
    display: none;
  }

  h1 {
    width: 110%;
  }
}
</style>
