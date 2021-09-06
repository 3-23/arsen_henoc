<template>
        <div>
            <div class="hidden md:block borderDim2 absolute z-10">
                  <div class="dot" :key="i" v-for="i in 19"></div>
            </div>
            <div class=" pb-16 mx-5 sm:mx-48 z-40 pt-20">
                  <div class="pt-20 text-center">
                            <p class="font-semibold text-black  titre">Notre <span class="text-gpur">Engagement</span> </p>
                            <p class="text-lg sm:text-2xl pt-8 max-w-7xl text-gray-700 font-medium leading-10">Etre un bon assureur c’est aussi guarantir que votre argent soit bien réinvestit. Chez Arsen, l’argent de vos cotisations est réutiliser pour financer des projets sociaux choisi par les assurés eux mêmes.</p>
                  </div>
            </div><!--fin -->
            <div class="flex justify-center items-center mx-5 sm:mx-48">
                  <svg-icon name="ic_graphic"  original  class="h-6/12 w-6/12" />
            </div><!--fin -->
            <div  class="sm:flex sm:flex-col-reverse">
                    <div class="z-0 text-right sm:text-center text-lg  sm:text-lg  pt-2 ml-10 mr-16 sm:mx-48 sm:flex  sm:flex-row ">
                          <div class="flex flex-col mb-20 sm:mr-64">
                                <div>
                                    <titre-paragraph2
                                    text2="30% de votre cotisation est dédié aux frais de gestion de Luko : service client, gestion de sinistre, innovation, etc."></titre-paragraph2>
                                </div>
                          </div>
                          <div class="flex  flex-col  mb-20 sm:mr-64">
                                <div>
                                    <titre-paragraph2
                                    text2="70% de votre cotisation est placé dans le pot commun pour tous les assurés. Si vous avez un sinistre, cet argent sert à vous rembourser."></titre-paragraph2>
                                </div>
                          </div>
                          <div class="flex flex-col">
                                <div>
                                    <titre-paragraph2
                                    text2="S'il reste de l'argent en fin d'année, il est reversé à l'association de votre choix. Il ne vient pas accroitre nos profits."></titre-paragraph2>
                                </div>
                          </div>
                    </div><!--fin -->
                     <div class="pt-2 sm:pt-20 z-10">
                          <div class="w-xl marge2 pt-2 transform rotate-90 my-20  sm:transform sm:rotate-0  sm:my-0 sm:mx-56 flex justify-center items-center rounded-full sm:w-xl bg-gray-500"></div><!--fin -->
                          <div class="transform rotate-90 my-32 sm:my-0 sm:transform sm:rotate-0   sm:mx-56    relative marge sm:pt-2    flex justify-center items-center rounded-full sm:w-xl ">
                                <div class="py-5 w-2 bg-gpur rounded-full text-center"></div>
                                <div class="py-1 w-7/12 sm:w-3/5 bg-gpur rounded-full text-center"></div>
                                <div class="py-5 w-2 bg-gpur rounded-full text-center"></div>
                          </div><!--fin -->
                    </div>
            </div>
            <div class="sm:pt-32 text-center font-semibold text-black titre" >Le Givebak process</div><!--fin -->
            <div class="pt-20 mx-5 sm:mx-48 sm:flex sm:flex-row ">
                  <div class="flex flex-col sm:mr-64">
                        <div class=" items-center">
                            <div class=" mx-20 h-40 bg-gray-300"></div>
                            <titre-paragraph2 class="text-center" color1="black" tailletitre="35" lmax="0" title2="John Doe"></titre-paragraph2>
                            <titre-paragraph2 class="text-center  sm:text-justify" ecart3="0" padtop="2"
                            text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                        </div>
                  </div>
                  <div class="pt-16 sm:pt-0   flex flex-col sm:mr-64">
                        <div class=" items-center">
                            <div class=" mx-20 h-40  bg-gray-300"></div>
                            <titre-paragraph2 class="text-center" color1="black" tailletitre="35" lmax="0" title2="John Doe"></titre-paragraph2>
                            <titre-paragraph2 class="text-center  sm:text-justify" ecart3="0" padtop="2"
                            text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                        </div>
                  </div>
                  <div class="pt-16 sm:pt-0     flex flex-col ">
                        <div class=" items-center">
                            <div class=" mx-20 h-40 bg-gray-300"></div>
                            <titre-paragraph2 class="text-center" color1="black" tailletitre="35" lmax="0" title2="John Doe"></titre-paragraph2>
                            <titre-paragraph2 class="text-center  sm:text-justify" ecart3="0" padtop="2"
                            text2="Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple."></titre-paragraph2>
                        </div>
                  </div>
            </div><!--fin -->
            <div class="mx-5 sm:mx-48 pt-20 sm:pt-40     font-semibold text-black text-left  titre">Their experiences</div><!--fin -->
            <carousel   :paginationEnabled="false" :perPageCustom=[[0,1],[640,4]]   class="flex items-center pt-20  pl-10 sm:pl-48 ">
                    <slide :key="i"  v-for="i in 5" class="mr-5 flex  flex-col justify-between max-w-xl   sm:max-w-sm  bg-white sm:py-6  pl-6 sm:pr-8 rounded-xl shadow-lg">
                        <div class="flex items-center sm:mb-4">
                          <img class="w-16 rounded-full border-2 border-gray-300" src="../../assets/images/png/img_body1.png" />
                          <div class="leading-7 ml-6 sm">
                              <h4 class="text-black sm:text-xl font-semibold">John Doe</h4>
                              <h5 class="text-gray-700">CEO INNOVAGENCE</h5>
                          </div>
                        </div>
                        <div class="max-w-xl">
                          <p  class="  pt-5  w-64 sm:w-full text-black  leading-8">Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, augue volutpat an mea. Putent dictas persequeris his in, ne prima rebum congue eam. Sit no doctus malorum saperet.</p>
                        </div>
                    </slide> <!-- FIN-->
            </carousel><!--fin -->
        </div>
</template>

<script>
import TitreParagraph2 from '../helper/titre-paragraph2.vue'
import { Carousel, Slide } from 'vue-carousel'
// import BaseProgress from '../base-progress.vue'
export default {
  name: 'body-couv',
  components: {
    TitreParagraph2,
    Carousel,
    Slide
    // BaseProgress
  },
  data () {
    return {
      value: 5
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
@media screen and (-webkit-min-device-pixel-ratio: 0) {
        input[type="range"]::-webkit-slider-thumb {
    width: 15px;
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    cursor: ew-resize;
    background-color:$green-arsen;
    box-shadow: -405px 0 0 400px $green-arsen;
    border-radius: 50%;
        }
    }
    .marge{
    margin-top:-28px;
    }
    .marge2{
      font-family: poppins;
    }
    .dot{
    border-width: 5px 0 0 0;
    border-style: dotted;
    border-color: rgba(255, 111, 89, 0.20);
    width:5%;
    margin-bottom: 9px;
    display:block;
    }
    .taille{
     height:17px;
    }
   .titre{
      font-size: 40px
    }
    @media only screen and (max-width: 600px) {
     .titre{
      font-size: 23px
    }
    .marge{
    margin-top: -100px;
    margin-right: -287px;
    }
    .marge2{
    margin-top: -300px;
    margin-right: -287px;
    }
   }
   .borderDim2{
     width: 117%;
     margin-top: 131px;
    }
    .borderDim8{
     border-width: 50px;
     width: 200px;
     height: 200px;
     border-color: rgba(13, 133, 112, 0.09);
     left: -80px;
     bottom: 24rem;
    }
   .grayback{
    background-color:#F9F9F9;
    }
</style>
