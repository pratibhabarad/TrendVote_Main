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
import Header from "./Header/Header";
import Contentone from "./Contentone/Contentone"
import Contenttwo from "./Contenttwo/Contenttwo";
import Seemore from "./seemore/Seemore";
import Contentthree from "./Contentthree/Contentthree.scss";
import Popular from "./Popular/Popular";
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

<style>
.mid-container{
  width: 1140px;
  display: flex;
  flex-wrap: wrap;

}


@media only screen and (max-width: 1200px) {
  .home-container,.login-main {
  width: 100% !important;
  }
  .header-main,.mid-container,.main-nav{
    width: 960px !important;
  }
  .corona-img{
    width: 370px !important;
  }
  .books-main{
    width: 296.66px !important;
    padding-right: 0;
  }
  .login-main{
    width: 233.33px !important;
  }
  #div-books,#div-reviews,.sports-img{
    width: 250px;
  }
}
@media only screen and (max-width: 968px){
  .header-main,.mid-container,.main-nav{
    width: 720px!important;
  }
  .corona-img{
    width: 270px !important;
  }
  .login-main{
    margin: 0;
    width: 100% !important;
    padding: 0;
  }
  #div-books,#div-reviews,.sports-img{
    width: 180px !important;
  }
  .headline,.headline-h2{
    display: none;
  }
  #headline,#headline-kobe{
    display: block;
  }
  .content-two-main,.main-container-content-two{
    width: 420px !important;
    margin: 0;
  }
  .content-two-main{
    margin-bottom: 20px;
  }
  /*#my-carousel{*/
  /*  display: block;*/
  /*}*/
  /*#simple-navbar{*/
  /*  display: none;*/
  /*}*/
}
@media only screen and (max-width: 768px){
 .trending{
   flex-direction: column;
  }
  .third-content-main,.login-main,.sports-img,.popular-main,.content-two-main, .main-container-content-two{
    width: 100% !important;
  }
  #div-books,#div-reviews{
    width: 510px !important;
  }
  .div-login,#div-reviews,#div-books{
    margin:0;
  }
  .popular-heading{
    margin:0 0 25px 0!important;
  }
  .login-main,.popular-main{
    padding: 0;
  }
  .pop-img{
      width: 90px;
    height: 70px;
  }
  .reviews{
    margin-right: 0;
  }
  .header-main,.mid-container,.trending{
    width: 540px !important;
  }
  .trend-logo {
    display: block !important;
  }

  .logo {
    display: none !important;
  }
  .mid-container,.first-container {
    flex-direction: column;

  }
  .books-main{
    width: 100% !important;
  }
  .main-container-content-two{
    flex-direction: column;
    width: 100% !important;
  }

  .see-more{
    width: 100%;
    margin: 0;
    padding: 7px 15px;
  }
  .corona-img{
    width: 450px!important;
  }
}
  @media only screen and (max-width: 576px)
  {
    .header-main,.mid-container,.trending,.content-one-main,.content-two-main{
      width: 100% !important;
    }
    .main-container{
      padding: .625rem 15px;
    }
    .search-btn,.digital-camera-img{
      margin: 0 !important;
    }
    #div-reviews,#div-books{
      width: 100% !important;
    }
    .search-login,.books-main
    {
      padding: 0;
    }
    .trend-vote{
      margin-right: 1rem!important;
    }
    .login-link{
      padding: 8px 0;
    }
    .corona-img,.digital-camera-img{
      width: 100% !important;
    }
    h3{
      font-size: 24px;
    }

  }
@media only screen and (max-width: 500px){
  .ftr-a{
    padding: 0 12px 0 0;
  }
  .content-two-main,.content-one-main{
    flex-direction: column;
  }
  .div-books,.div-books-1{
    margin: 0 !important;
  }
  #div-books,.books-img{
    width: 100% !important;
  }
  #headline-kobe,#headline{
    margin-top: 10px;
  }
}

</style>