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
    width: 100%;
}
.image-container {
  width: 250px;
  height: 690px;
  overflow: hidden;
  border-radius: 15px;
  margin: 5% 5% 5% 0%;
  box-shadow: 0 3px 40px 0 rgba(10, 40, 40, 0.2);
  transition: all 0.2s ease-in-out;
}

.image-container img {
  width: 100%;
  height: 150%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
}

.image-container:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

.image-container:hover img {
  transform: scale(1.15) rotate(3deg) translateX(-10px);
}

.fabrics-link {
  margin-right: 6%;
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
    width: calc(50% + 20%);
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
