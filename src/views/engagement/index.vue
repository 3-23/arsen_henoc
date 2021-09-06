<!--
Engagement Page
Created at 03/09/2021 20:20
Author: Henoc ALAO
!-->
<template>
  <div class="">
    <div class="shadow-lg">
      <header-front></header-front>
    </div>
    <div class="">
      <body-engag></body-engag>
    </div>
    <div class="">
      <footer-front></footer-front>
    </div>
  </div>
</template>

<script>
import HeaderFront from '../../components/helper/header-front.vue'
import BodyEngag from '../../components/engagement/body-engag.vue'
import FooterFront from '../../components/helper/footer-front.vue'
export default {
  name: 'index',
  components: {
    HeaderFront,
    FooterFront,
    BodyEngag
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.back{
  background-color: #fdfdfd;
}
</style>
