<template>
  <div>
    <!-- Thumbnail Images -->
    <div class="gallery">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="{ enlarged: selectedImage === index }"
        @click="toggleEnlarge(index)"
        class="thumbnail"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import images
import snow from '@/assets/snow.jpg'
import snow2 from '@/assets/snow2.jpg'
import snow3 from '@/assets/snow3.jpg'

// Define the images array
const images = [
  { src: snow, alt: 'Snow' },
  { src: snow2, alt: 'Snow2' },
  { src: snow3, alt: 'Snow3' },
]

// Track the selected image index
const selectedImage = ref(null)

// Function to toggle image enlargement
const toggleEnlarge = (index) => {
  if (selectedImage.value === index) {
    // Clicking the same image again will close it
    selectedImage.value = null
  } else {
    // Enlarge the clicked image
    selectedImage.value = index
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

.thumbnail.enlarged {
  width: 400px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
