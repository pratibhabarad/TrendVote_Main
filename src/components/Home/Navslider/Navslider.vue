
<template>
 <div class="nav-slider-main">
   <div class="left">
     <button class="btn-slide" @click="scroll_left"><i class="fas fa-chevron-left" id="scroll-left"></i></button>
   </div>
   <div class="center" id="content">
     <div class="internal ">
       <a class="nav-link" href="#">Home</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">business</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">sports</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">tech</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">politics</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">reviews</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">art</a>
     </div>
     <div class=internal>
       <a class="nav-link" href="#">books</a>
     </div>
     <div class="internal">
       <a class="nav-link" href="#">more</a>
     </div>
   </div>
   <div class="right">
     <button  class="btn-slide" @click="scroll_right"><i class="fas fa-chevron-right" id="scroll-right"></i></button>
   </div>
 </div>
</template>

<script>
export default {
  methods: {
    scroll_right() {
      const content = document.querySelector('#content');
      content.scrollLeft += 300;
      event.preventDefault();
    },
    scroll_left() {
      const content = document.querySelector('#content');
      content.scrollLeft -= 300;
      event.preventDefault();
    }
  }
};
</script>




<style lang='sass'>
@import "Navslider.scss"

</style>