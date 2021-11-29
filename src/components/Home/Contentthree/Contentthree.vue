<template>
  <div class="third-content-main">
    <div>
      <div class="trend-details-div" v-for="datas in mydata" :key="datas.title">
        <div style="margin: 0">
          <h2 class="trend-h2">{{datas.title}}</h2>
          <p class="trend-details">{{datas.description}}</p>
          <div>
            <h5 class="creator font-author-date" >{{datas.author}}</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">{{datas.date}}</h6>
          </div>
        </div>
        <div style="margin-right: 0;">
          <img v-bind:src="datas.image" alt="Laptop" class="pop-img"/>
        </div>
      </div>
    </div>
    <div class="text-right" >
      <span class="display-block font-medium-2 py-2 text-primary cursor-pointer see-more-c" >SEE MORE <i class="fas fa-chevron-right"></i></span>
    </div>
  </div>

</template>

<script>
import data from '../../../.././src/db'
export default {
  name: "Contentthree",
  data(){
    return{
      mydata:[],
    }
  },
  mounted() {
    this.mydata=data;
  }
}
</script>

<style lang='sass'>
@import "three.scss"
</style>