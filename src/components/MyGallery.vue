<template>
  <div>
    <div class="gallery">
      <img :src="snow" :alt="Snow" @click="toggleEnlarge(snow)" class="thumbnail" />
      <img :src="snow2" :alt="Snow2" @click="toggleEnlarge(snow2)" class="thumbnail" />
      <img :src="snow3" :alt="Snow3" @click="toggleEnlarge(snow3)" class="thumbnail" />
    </div>

    <div v-if="selectedImage" class="enlarged-space">
      <img :src="selectedImage" :alt="EnlargedImage" class="enlarged-image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import snow from '@/assets/snow.jpg'
import snow2 from '@/assets/snow2.jpg'
import snow3 from '@/assets/snow3.jpg'

const selectedImage = ref(null)

const toggleEnlarge = (image) => {
  if (selectedImage.value === image) {
    selectedImage.value = null
  } else {
    selectedImage.value = image
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.thumbnail {
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.enlarged-space {
  margin-top: 20px;
}

.enlarged-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
</style>
