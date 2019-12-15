<template>
  <div class="row">
    <PointTable />
    <div class="col-md-9">
      <ThisWeekFixture />
      <OurTeam />
    </div>

    <div v-for="(product,index) in products" :key="index">
        {{product.name}}
    </div>
  </div>
</template>
<script>
import productService from '@/services/productService';
import PointTable from '@/components/home/PointTable.vue';
import ThisWeekFixture from '@/components/home/ThisWeek.vue';
import OurTeam from '@/components/OurTeam.vue';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    productService.get().then((response) => {
      this.products = response;
    });
  },
  name: 'home',
  components: {
    PointTable,
    ThisWeekFixture,
    OurTeam,
  },
};
</script>
