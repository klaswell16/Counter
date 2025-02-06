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
    <h3>Press the buttons</h3>
    <div>
      <p>
        Eggs
        <button style="width: 70px; height: 50px" v-on:click="count++">+</button>

        <button style="width: 70px; height: 50px" v-on:click="count--">-</button>
        :
        {{ count }}
      </p>
    </div>
    <div>
      <p>
        Bread
        <button style="width: 70px; height: 50px" @click="count2++">+</button>
        <button style="width: 70px; height: 50px" @click="count2--">-</button>
        :
        {{ count2 }}
      </p>
    </div>
    <div>
      <p>
        Cheese
        <button style="width: 70px; height: 50px" @click="count3++">+</button>
        <button style="width: 70px; height: 50px" @click="count3--">-</button>
        :
        {{ count3 }}
      </p>
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

p {
  font-size: 20px;
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
