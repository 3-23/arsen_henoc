<!--
home Page
Created at 03/09/2021 20:20
Author: Henoc ALAO
!-->
<template>
  <div class="w-screen back">
    <div class="dim relative z-40 bg-glight">
      <header-front></header-front>
      <caroussel-front></caroussel-front>
    </div>
    <div class="">
      <body-front></body-front>
    </div>
    <div class="">
      <footer-front></footer-front>
    </div>
  </div>
</template>

<script>
import HeaderFront from '../../components/helper/header-front.vue'
import CarousselFront from '../../components/caroussel-front.vue'
import BodyFront from '../../components/body-front.vue'
import FooterFront from '../../components/helper/footer-front.vue'
export default {
  name: 'index',
  components: {
    HeaderFront,
    CarousselFront,
    BodyFront,
    FooterFront
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.back{
  background-color: #fdfdfd;
}
.dim{
     text-align: unset;
   }
 @media only screen and (max-width: 600px) {
   .dim{
     height:95vh;
   }
}
</style>
