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
<!--  <div class="container" id="my-carousel">-->
<!--    <div id="myCarousel" class="carousel slide" data-ride="carousel">-->
<!--      &lt;!&ndash; Indicators &ndash;&gt;-->
<!--&lt;!&ndash;      <ol class="carousel-indicators">&ndash;&gt;-->
<!--&lt;!&ndash;        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li data-target="#myCarousel" data-slide-to="1"></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li data-target="#myCarousel" data-slide-to="2"></li>&ndash;&gt;-->
<!--&lt;!&ndash;      </ol>&ndash;&gt;-->

<!--      &lt;!&ndash; Wrapper for slides &ndash;&gt;-->
<!--      <div class="carousel-inner">-->
<!--        <div class="item active">-->
<!--          <ul class="navbar-nav">-->
<!--            <li class="nav-item active" style="padding-left: 0">-->
<!--              <a class="nav-link" href="#">Home</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">business</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">sports</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">tech</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">politics</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">reviews</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">art</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">books</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

<!--        <div class="item">-->
<!--         <ul class="navbar-nav">-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">business</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">sports</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">tech</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">politics</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">reviews</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">art</a>-->
<!--           </li>-->
<!--           <li class="nav-item active">-->
<!--             <a class="nav-link" href="#">books</a>-->
<!--           </li>-->
<!--           <li class="nav-item active" style="padding-right: 0">-->
<!--             <a class="nav-link" href="#">more</a>-->
<!--           </li>-->
<!--         </ul>-->
<!--        </div>-->

<!--        <div class="item">-->
<!--          <ul class="navbar-nav">-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">sports</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">tech</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">politics</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">reviews</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">art</a>-->
<!--            </li>-->
<!--            <li class="nav-item active">-->
<!--              <a class="nav-link" href="#">books</a>-->
<!--            </li>-->
<!--            <li class="nav-item active" style="padding-right: 0">-->
<!--              <a class="nav-link" href="#">more</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Left and right controls &ndash;&gt;-->
<!--      <a class="left carousel-control" href="#myCarousel" data-slide="prev">-->
<!--        <span class="glyphicon glyphicon-chevron-left"></span>-->
<!--        <span class="sr-only">Previous</span>-->
<!--      </a>-->
<!--      <a class="right carousel-control" href="#myCarousel" data-slide="next">-->
<!--        <span class="glyphicon glyphicon-chevron-right"></span>-->
<!--        <span class="sr-only">Next</span>-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>

export default {
  name: "Navbar",
  components:{
  }
}
</script>

<style>
.navbar{
  padding: 0 !important;
}
.main-nav{
  margin-top: 70px;
}
  .navbar-nav{
    width: 1140px;
    padding: 0 14px !important;
    margin: 0 auto;
  }
  .nav-item{
    margin: 0;
    padding: 15px 18px;
  }
  .nav-link{
    padding: 0 !important;
    text-transform: uppercase;
    font-family: roboto-regular,sans-serif;
    color: #474747!important;
    font-size: 15px;
  }
  .navbar-nav{
    flex-direction: row;
  }
/*  #my-carousel{*/
/*    display: none;*/
/*  }*/
/*  .carousel-inner{*/
/*    width: 640px;*/

/*  }*/
/*.carousel-control,.left,.carousel-control,.right{*/
/*  background-image: none !important;*/
/*}*/
/*.carousel-control{*/
/*  width: auto;*/
/*}*/
</style>