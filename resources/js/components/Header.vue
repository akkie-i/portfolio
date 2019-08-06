<template> 
  <div class="logo demo">
    <div class="dd">
      <RouterLink class="navbar__brand" to="/">
        <img class="zizi" :src="headerLogo">
      </RouterLink>
      <h1 class="logo-p1 text-center">Hello<span class="red">.</span>I am Akkie</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headerLogo: require("../../../public/images/logo/logo-150x150.png")
      }
    }
  }
</script>

