<template>
  <header>
    <div class="wrapper">
      <router-link to="/gallery">Go to Gallery</router-link>
    </div>
    <div class="wrapper">
      <router-link to="/checkout">Go to Checkout</router-link>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  display: inline-block;
  padding: 10px;
  color: blue;
  text-decoration: none;
  cursor: pointer;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
