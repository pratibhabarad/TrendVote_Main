<template>
<footer>
  <div class="footer">
    <ul class="list-unstyled d-flex">
      <li class="ftr-li"><a class="ftr-a" href="#">About us</a></li>
      <li class="ftr-li"><a class="ftr-a" href="#">Privacy</a></li>
      <li class="ftr-li"><a class="ftr-a" href="#">Terms</a></li>
      <li class="ftr-li"><a class="ftr-a" href="#">Contact us</a></li>
    </ul>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style >
.footer{
  border-top: 1px solid #dee2e6;
  padding: 15px 0;
}
.ftr-li{
  margin: 0;
}
.ftr-a{
  font-size: 0.875rem !important;
  color: #929292;
  padding: 0 25px 0 0;
  text-decoration: none;
}
li a:hover{
  color: #0186ed !important;
}


</style>