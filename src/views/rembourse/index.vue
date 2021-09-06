<!--
rembourse Page
Created at 03/09/2021 20:20
Author: Henoc ALAO
!-->
<template>
        <div>
              <div class="sm:relative sm:z-40 shadow-lg">
                <header-front></header-front>
              </div>
              <div>
                    <div class=" pb-16 mx-5 sm:mx-48 sm:relative sm:z-40 pt-20">
                        <div class="pt-20 text-center">
                            <p class="font-semibold text-black  titre">Rembourçement</p>
                            <p class="text-lg sm:mx-64 text-center sm:text-2xl pt-8 text-gray-700 font-medium leading-10">Chez Arsen, pour vos soins vous pouvez vous rendre chez un de nos partenaire pour bénéfier du paiement par tiers-payant. Ou avancer les frais et vous faire rembourcer plus tard. Rembourcement simple et en moins de 2h</p>
                        </div>
                    </div><!--fin --><!--fin -->
                    <div class="pt-20 mx-5 sm:mx-48 sm:flex sm:justify-between sm:space-x-8 ">
                                <div class="mb-20 sm:mb-0">
                                      <div class="justify-center items-center">
                                          <svg-icon class="sm:mx-20 "  name="ic_r1"  original   />
                                          <p class="block  sm:hidden  text-lg sm:text-2xl pt-5 max-w-7xl  text-center text-gray-700 font-bold leading-10">Faites un demande</p>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2"
                                          text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="mb-20 sm:mb-0">
                                      <div class="justify-center items-center">
                                          <svg-icon class="sm:mx-20 "  name="ic_r2"  original   />
                                          <p class="block  sm:hidden  text-lg sm:text-2xl pt-5 max-w-7xl  text-center text-gray-700 font-bold leading-10">Reçu du paiement</p>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2"
                                          text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                                      </div>
                                </div>
                                <div class="">
                                      <div class="justify-center items-center">
                                          <svg-icon class="sm:mx-20 "  name="ic_r3"  original   />
                                          <p class="block  sm:hidden  text-lg sm:text-2xl pt-5 max-w-7xl  text-center text-gray-700 font-bold leading-10">Vous êtes rembourcé</p>
                                          <titre-paragraph2 class="text-center" ecart3="0" padtop="2"
                                          text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                                      </div>
                                </div>
                    </div><!--fin -->
                    <div class="mx-5 sm:mx-48  py-20">
                                <img class="" src="../../assets/images/png/img_body8.png"/>
                    </div><!--fin -->
                    <div class="mx-5 sm:mx-48 pb-0 sm:pb-20">
                                <p class="w-full sm:w-normal text-lg sm:text-2xl text-center text-black leading-8 sm:leading-10">N’attendez plus, assurez vous et votre famille dès aujour’hui sur Arsen, c’est simple et transparent</p>
                                <div class="pt-8 flex justify-center items-center space-x-3">
                                  <a href=""><img class="" src="../../assets/images/png/img_playstore.png"/></a>
                                  <a href=""><img class="" src="../../assets/images/png/img_appstore.png"/></a>
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
</style>
