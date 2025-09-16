<script setup>
import {inject, computed} from 'vue'
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const apps = inject('apps', {})
const vueUrl = computed(()=>apps['vue-demo']?.url ?? "")
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <WujieVue width="100%" height="100%" name="vue-demo" :url="vueUrl"></WujieVue>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
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
