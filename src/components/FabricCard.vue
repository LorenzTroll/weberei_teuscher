<script setup>
defineProps({
  fabric: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="fabrics-link"
    :to="{ name: 'fabric-details', params: { id: fabric.id } }">
    <div class="fabric-card">
      <div class="image-container">
        <!--<div class="overlay"></div>-->
        <img :src="fabric.image" alt="My Image" />
        
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.fabric-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  margin-bottom: 18px;
  transform: rotate(-40deg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Sie können die Höhe nach Bedarf anpassen */
  width: 90%;
}
.image-container {
  width: 280px;
  height: 810px;
  overflow: hidden;
  border-radius: 15px;
  margin: 5% 5% 5% 0%;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  position: relative;
  
}

.image-container img {
  width: 200%;
  height: 150%;
  object-fit: cover;
  position: absolute;
  z-index: -10;
  left: 0;
  transition: transform 0.2s ease-in-out;
  
  
  
}

.image-container:hover {
  transform: scale(0.98) rotate(0.1deg) ;
  box-shadow: 0 3px 20px 0 rgba(10, 40, 40, 0.2);
  
}

.image-container:hover img {
  transform: scale(1) rotate(0deg) translateX(1px) translateY(1px);
}

.fabrics-link {
  margin-right: 6%;
}

.overlay {
  background-color: black;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  
}
.overlay:hover {
  transition: all 0.2s ease-in-out;

  opacity: 0%;
}

@media (max-width: 768px) {
  .image-container {
    width: clamp(60%, -10%, -25%);
    height: 500px;
    border-radius: 10px;
    max-width: 300px;
  }
  .fabrics-link {
  margin-right: 1%;
}
.fabric-card {
  cursor: pointer;
  margin-bottom: 18px;
  transform: rotate(-38deg);
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Sie können die Höhe nach Bedarf anpassen */
    width: 125%;
  }
}

@media (max-width: 480px) {
  .image-container {
    width: calc(48% + 20%);
    height: 450px;
    border-radius: 10px;
    max-width: 800px;
  }
  .fabrics-link {
    margin-right: calc(-22% - -20%);
  }
  .fabric-card {
    width: 100%;
  }
}
</style>
