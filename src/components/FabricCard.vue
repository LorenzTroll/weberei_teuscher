<script setup>
defineProps({
  fabric: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <RouterLink class="fabrics-link" :to="{ name: 'fabric-details', params: { id: fabric.id} }">
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
}
.image-container {
  width: 270px;
  height: 750px;
  overflow: hidden;
  border-radius: 15px;
  margin: 5% 0% 5% 0%;
  box-shadow: 0 3px 40px 0 rgba(10, 40, 40, 0.2);
  transition: all .2s ease-in-out;
}

.image-container img {
  width: 100%;
  height: 150%;
  object-fit: cover;
  transition: all .2s ease-in-out;
}

.image-container:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

.image-container:hover img{
  transform: scale(1.015);
}

.fabric-link {
  color: #000000;
  text-decoration: none;
}

.fabrics-link {
  margin-right: 6%;
}

@media (max-width: 480px) {
  .image-container {
        width: calc(30% - -25%);
        height: 400px;
        border-radius: 10px;
        max-width: 300px;
    }

    .fabrics-link {
  margin-right: calc(-36% - -20%);
}
  }
</style>
