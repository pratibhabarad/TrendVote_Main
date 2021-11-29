<template>
  <div class="main-nav mt-65">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="simple-navbar">
      <div class=" navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" style="padding-left: 0">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">business</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">sports</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">tech</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">politics</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">reviews</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">art</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">books</a>
          </li>
          <li class="nav-item active" style="padding-right: 0">
            <a class="nav-link" href="#">more</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <Navslider/>
</template>

<script>
import Navslider from '../Navslider/Navslider'
export default {
  name: "Navbar",
  components:{
    Navslider
  }
}
</script>

<style lang='sass'>
@import "Navbar.scss"
</style>