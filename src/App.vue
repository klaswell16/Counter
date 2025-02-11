<script setup>
import HelloWorld from './components/MyCheckout.vue'
import Gallery from './components/MyGallery.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello World!" />
      <Gallery />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
