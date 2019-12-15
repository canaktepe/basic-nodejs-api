<template>
  <form class="d-lg-none" action="" method="post">
    <h6 class="text-white mt-2">LOGIN</h6>
    <div class="form-group">
      <input class="form-control" type="text" placeholder="Email Address" name="email" />
    </div>
    <div class="form-group">
      <input class="form-control" type="password" placeholder="Password" name="password" />
    </div>
    <div class="form-check text-white float-right">
      <input class="form-check-input" id="remember" type="checkbox" name="remember" />
      <label class="form-check-label" for="remember"></label>remember me!
    </div>
    <div class="form-group">
      <button class="btn btn-secondary" type="submit">Sign in</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'MobileLogin',
};
</script>
