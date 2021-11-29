<template>
  <div class="main-container">
    <div class="header-main">
      <div class="trend-vote">
        <a class="logo"><img src="../../../assets/logo.png" alt="logo" /></a>
        <a class="trend-logo"><img src="../../../assets/trend-logo.png" alt="logo" /></a>
      </div>
      <div class="nav-search">
        <ul class="search-login">
          <li class="search-btn">
            <div class="input-group">
              <input id="search-input rounded-circle" type="search" class="form-control rounded-circle form-control border-end-0 border rounded-pill" placeholder="Search" >
              <span class="input-group-append">
                <button class="btn " type="button">
                  <img src="../../../assets/search-icon.svg" alt="search icon" class="search-img" />
                </button>
              </span>
            </div>
          </li>
          <li class="login-div">
            <a class="login-link" id="login-link">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Navbar/>
</template>

<script>
import Navbar from "../Navbar/Navbar";
export default {
  name: "Header",
  components:{
    Navbar
  }

}
</script>

<style scoped lang='sass'>
@import "Header.scss"
</style>
