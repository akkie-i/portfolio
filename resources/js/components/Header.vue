<template> 
  <div class="slider-outer">
    <transition name="fade">
      <div class="slider-inner" :key="idx" v-for="(slide, idx) in slides" v-if="current_slide == idx">
        <img class="slide-img" v-bind:src="slides[idx].img" :key="slides[idx].img">
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current_slide: 0,
        slides: [
          {img: require('../../../public/images/slide-1.jpg')},
          {img: require('../../../public/images/slide-2.jpg')},
          {img: require('../../../public/images/slide-3.jpg')}
        ],
        
      }  
    },
    mounted() {
  　　setInterval(() => {
        this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
      }, 3000) 
    }
  }
</script>

<style lang='scss' scoped>

  .slider-outer{
    position: relative;
    width: 450px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto 20px;
  }
  .slider-inner{
    position: absolute;
    width: 450px;
    height: 300px;
  }
  .slide-img {
    width: 450px;
    height: 300px;
    object-fit: cover;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
</style>
