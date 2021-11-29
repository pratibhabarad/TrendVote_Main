<template>
  <div class="popular-main">
    <div class="nested">
      <h2 class="pt-10 pb-15 popular-heading">Popular on Trendvote</h2>
      <div class="mb-10 trend-cards" v-for="datas in datas" :key="datas.title">
        <h2 class="top-heading">{{datas.title}}</h2>
        <div>
          <div>
            <h5 class="creator font-author-date" >{{datas.author}}</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">{{datas.date}}</h6>
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
  },
  mounted() {
    this.datas=data
  }
}
</script>

<style lang='sass'>
@import "Popular.scss"
</style>