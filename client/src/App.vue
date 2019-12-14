<template>
  <div class="about" id="app">
    <ul v-if="products.length > 0">
      <li v-for="(product,index) in products" :key="index">{{ product.name }}</li>
    </ul>
  </div>
</template>
<script>
import api from './services/api';

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      api().get('products').then((result) => {
        this.products = result.data;
      });
    },
  },
};
</script>
