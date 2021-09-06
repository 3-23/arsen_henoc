<!--
Team Page
Created at 03/09/2021 20:20
Author: Henoc ALAO
!-->
<template>
        <div>
              <div class="shadow-lg">
                <header-front></header-front>
              </div>
              <div>
                    <div class=" sm:pb-16 mx-5 sm:mx-48  sm:pt-20">
                                <div class="pt-20 text-center">
                                          <p class="font-semibold text-black  titre ">Dream Team</p>
                                </div>
                    </div><!--fin -->
                    <div class="pt-20 mx-5 sm:mx-48 sm:flex sm:justify-between sm:space-x-8 ">
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body9.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body10.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body11.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                    </div><!--fin -->
                    <div class="sm:pt-20 mx-5 sm:mx-48 sm:flex sm:justify-between sm:space-x-8 ">
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body12.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body13.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="">
                                      <div class="justify-center items-center">
                                          <div class=" "><img class="" src="../../assets/images/png/img_body14.png"/></div>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2" title2="John Doe" tailletitre="17" color="gris" color1="black"
                                          text2="CEO INNOVAGENCE"></titre-paragraph2>
                                      </div>
                                </div>
                    </div><!--fin -->
              </div>
              <div class="">
                <footer-front></footer-front>
              </div>
        </div>
</template>

<script>
import HeaderFront from '../../components/helper/header-front.vue'
import FooterFront from '../../components/helper/footer-front.vue'
import TitreParagraph2 from '../../components/helper/titre-paragraph2.vue'
export default {
  name: 'index',
  components: {
    HeaderFront,
    FooterFront,
    TitreParagraph2
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.titre{
      font-size: 40px
    }
@media only screen and (max-width: 600px) {
     .titre{
      font-size: 23px
    }
   }
.back{
  background-color: #fdfdfd;
}
.back{
  background-color: #fdfdfd;
}
</style>
