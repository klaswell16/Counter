<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Press the buttons</h3>
    <div>
      Eggs
      <button v-on:click="count++">+</button>

      <button v-on:click="count--">-</button>
      :
      {{ count }}
    </div>
    <div>
      Bread
      <button @click="count2++">+</button>
      <button @click="count2--">-</button>
      :
      {{ count2 }}
    </div>
    <div>
      Cheese
      <button @click="count3++">+</button>
      <button @click="count3--">-</button>
      :
      {{ count3 }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      count2: 0,
      count3: 0,
    }
  },
}
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
