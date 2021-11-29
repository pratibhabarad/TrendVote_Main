<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
  }
</script>

<style>

@import url("https://use.typekit.net/clf3doe.css");

* {
  margin: 0 auto;
  box-sizing: border-box;
}
@font-face {
  font-family: roboto-regular;
  src: url(fonts/Roboto-Regular.woff2);
}
@font-face {
  font-family: icomoon;
  src: url(fonts/IcoMoon-Free.ttf);
}
:root {
  --blue-color: #0186ed
}
#app{
  width: 100%;
  overflow: hidden;
}
</style>
