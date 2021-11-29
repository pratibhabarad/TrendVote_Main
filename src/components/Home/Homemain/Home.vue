<template>
  <div class="home-container">
    <Header/>
    <div class="mid-container ">
      <Contentone/>
      <Contenttwo/>
      <Seemore style="width: 100%"/>
    </div>
    <section class="trending">
      <Contentthree/>
      <Popular/>
    </section>

  </div>
</template>

<script>
import Header from "../Header/Header";
import Contentone from "../Contentone/Contentone"
import Contenttwo from "../Contenttwo/Contenttwo";
import Seemore from "../seemore/Seemore";
import Contentthree from "../Contentthree/Contentthree";
import Popular from "../Popular/Popular";
export default {
  name: "Home",
  components:{
    Contenttwo,
    Header,
    Contentone,
    Seemore,
    Contentthree,
    Popular
  }
}
</script>

<style lang='sass'>
@import "Home.scss"
</style>