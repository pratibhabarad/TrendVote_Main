<template>
<div class="main-container-content-two" >
  <div class="d-flex first-container">
    <div class="w-50 m-0 books-main">
      <div class="content-two-main">
        <div class="div-books">
         <img src="../../../assets/books.jpg" alt="books image" class="books-img">
          <span class="bg-primary font-small-2 text-white business">Books</span>
        </div>
        <div class="description">
          <h2 class="headline" style="white-space: nowrap">Kobe Bryant:</h2>
          <h2 class="headline-h2" style="white-space: nowrap">The Mamba Mentality</h2>
          <h2 class="headline" id="headline-kobe">Kobe Bryant: The Mamba Mentality</h2>
          <div>
            <h5 class="creator font-author-date" >By J.D.</h5>
            <div>
              <div class="rating" id="last-unfilled-star"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star" style="color: #c6c6c6;"></i>  </div>
            </div>

            <h6 class="date-h6">Mar 15 2020</h6>
          </div>
        </div>
      </div>
      <div class="content-two-main">
        <div class="div-books-1">
          <img src="../../../assets/tech.jpg" alt="books image" class="digital-camera-img">
          <span class="bg-primary font-small-2 text-white business">Tech</span>
        </div>
        <div  class="description">
          <h2 class="headline">Digital</h2>
          <h2 class="headline-h2">Camera and Photography Tips</h2>
          <h2 class="headline" id="headline">Digital Camera and Photography Tips</h2>
          <div>
            <h5 class="creator font-author-date" >By J.D.</h5>
            <div>
              <div class="rating"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>

            </div>

            <h6 class="date-h6">Mar 15 2020</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="w-50 login-main">
       <div class="div-login">
         <h3 class="h3-signup">Never miss a story</h3>
         <p class="signup-details">Sign up for Trendvote's daily newsletter to keep up with top ranked articles.</p>
         <a class="bg-primary font-small-2 text-white cursor-pointer-on login">Log in</a>
       </div>
    </div>
    <div class="content-two-main sports-div" id="div-books">
      <div class="div-books reviews" >
        <img src="../../../assets/sports.jpg" alt="sports image" class="sports-img">
        <span class="bg-primary font-small-2 text-white business">sports</span>
      </div>
      <div>
        <h2 class="headline-sports">Petition to change the NBA Logo to Kobe Bryant</h2>
        <div>
          <h5 class="creator font-author-date" >By J.D.</h5>
          <div>
            <div class="rating" id="unfilled-star-NBA"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star" ></i><i class="fas fa-star"></i>   </div>

          </div>

          <h6 class="date-h6">Mar 15 2020</h6>
        </div>
      </div>
    </div>
    <div class="content-two-main sports-div" id="div-reviews">
        <div class="div-books ml-12 reviews" >
          <img src="../../../assets/reviews.jpg" alt="reviews image" class="sports-img">
          <span class="bg-primary font-small-2 text-white business">Reviews</span>
        </div>
        <div>
          <h2 class="headline-sports">Malawi opens the first drone academy in Africa</h2>
          <div>
            <h5 class="creator font-author-date" >By ktppc</h5>
            <div>
              <div class="rating" id="unfilled-star-malwai"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>   </div>
            </div>
            <h6 class="date-h6">Feb 07 2020</h6>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: "Contenttwo",
  components:{
  }
}
</script>
<style lang='sass'>
@import "Contenttwo.scss"
</style>

