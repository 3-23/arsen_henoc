<!--
Couverture Page
Created at 03/09/2021 20:20
Author: Henoc ALAO
!-->
<template>
  <div class="">
    <div class="shadow-lg">
      <header-front></header-front>
    </div>
    <div class="">
      <body-couv></body-couv>
    </div>
    <div class="">
      <footer-front></footer-front>
    </div>
  </div>
</template>

<script>
import HeaderFront from '../../components/helper/header-front.vue'
import BodyCouv from '../../components/couverture/body-couv.vue'
import FooterFront from '../../components/helper/footer-front.vue'
export default {
  name: 'index',
  components: {
    HeaderFront,
    BodyCouv,
    FooterFront
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.back{
  background-color: #fdfdfd;
}
</style>
