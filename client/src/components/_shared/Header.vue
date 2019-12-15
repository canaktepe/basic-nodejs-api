<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <i class="fas fa-dice-d20 mr-2"></i>İDDİASIZ İDDAA
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
      <div class="my-2 my-lg-0 d-none d-lg-block">
        <a class="text-white login-a text-decoration-none" href="#">
          <i class="fas fa-user"></i>Login
        </a>
      </div>
      <MobileLogin />
    </div>
  </nav>
</template>

<script>
import MobileLogin from '../login/MobileLogin.vue';

export default {
  name: 'Header',
  components: { MobileLogin },
};
</script>
