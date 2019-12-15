<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/_shared/Header.vue';

import '@/assets/global.css';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
