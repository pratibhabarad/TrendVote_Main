<template>
  <div class="popular-main">
    <div class="nested">
      <h2 class="pt-10 pb-15 popular-heading">Popular on Trendvote</h2>
      <div class="mb-10 trend-cards">
        <h2 class="top-heading">Top Cross Platform App Development Frameworks in 2020</h2>
        <div>
          <div>
            <h5 class="creator font-author-date" >By Michal Greg</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">Nov 19 2021</h6>
          </div>
        </div>
      </div>
      <div class="mb-10 trend-cards">
        <h2 class="top-heading">EMail Marketing Success</h2>
        <div>
          <div>
            <h5 class="creator font-author-date" >By KTppc</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">Jan 22 2020</h6>
          </div>
        </div>
      </div>
      <div class="trend-cards">
      <h2 class="top-heading">Bridging The Gap - Boost Your Confidence By Unleashing The Power Of Belief</h2>
      <div>
        <div>
          <h5 class="creator font-author-date" >cBy KTpp</h5>
          <div>
            <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
          </div>
          <h6 class="date-h6">Jan 22 2020</h6>
        </div>
      </div>
    </div>
      <div class="trend-cards">
        <h2 class="top-heading">Cyber Monday Deals - Air Pods, Beats by Dr. Dre and iPads</h2>
        <div>
          <div>
            <h5 class="creator font-author-date" >By J.D.</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">Nov 30 2019</h6>
          </div>
        </div>
      </div>
      <div class="trend-cards">
        <h2 class="top-heading">Affiliate Marketing on Trendvote </h2>
        <div>
          <div>
            <h5 class="creator font-author-date" >By J.D.</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">jan 21 2020</h6>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Footer from "../../Footer/Footer";
import data from '.././.././../../src/datas'
export default {
  name: "Popular",
  components:{
    Footer
  },
  data(){
    return{
      datas:[]
    }
  }
}
</script>

<style lang='sass'>
@import "Popular.scss"
</style>