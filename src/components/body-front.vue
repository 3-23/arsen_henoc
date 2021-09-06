<template>
    <div>
       <div class="mx-0 absolute z-10 border-solid borderDim border-light-blue-500 rounded-full "></div>
       <div class=" sm:mx-48 mx-5 relative z-40 sm:flex sm:justify-between pt-10 sm:pt-20">
            <div>
                  <img class="" src="../assets/images/png/img_body1.png"/>
            </div>
            <div  class="pt-5 sm:pt-0">
                <titre-paragraph  title="C’est quoi Arsen ?"
                text="Le but de l’assurance santé ou encore des mutuelles santé est de vous guarantir
                une couverture qui rembourser tout ou partie des frais de santé non couverts par la Sécurité sociale.
                Mais avec l’assurance traditionnelle, les processus très longs de traitement en cas de maladie,
                Arsen Assurances est une entreprise technologique qui désire réinventer l'assurance
                santé en Afrique en adoptant une nouvelle approche couplant rapidité et transparence."></titre-paragraph>
            </div>
       </div>
       <svg-icon class="hidden md:block mx-0  borderDim4  absolute "  name="ic_boul1" original  />
       <div class="mx-5 sm:mx-48 relative z-40 sm:flex sm:flex-row sm:justify-between">
            <div class="pt-5 sm:pt-0">
                <titre-paragraph title="Pourquoi Arsen ?"
                text="Nous pensons que l'assurance maladie doit être intelligente,
                simple et conviviale. C'est pourquoi nous avons construit Arsen.
                Notre objectif est de changer la façon dont les prestataires et les
                consommateurs interagissent avec les soins de santé grâce à la technologie,
                aux données et à la conception."></titre-paragraph>
            </div>
            <div class="sm:pt-9">
                          <div class="flex flex-wrap justify-between items-center">
                                <div class="sm:pr-12">
                                        <div class="pb-8">
                                          <div class="p-3 sm:p-8 bg-white rounded-xl hover:shadow-xl hover:scale-105 transition-all transform duration-100">
                                            <div class="flex items-center justify-center rounded-full h-16 w-16 iconcolors1">
                                                        <svg-icon name="ic_eco"  original  class="h-8 w-8" />
                                            </div>
                                            <div class="mt-4">
                                              <p class="text-xl sm:text-5xl font-semibold text-black">+300K</p>
                                              <p class="leading-6 sm:leading-0 w-10/12 sm:w-56 -mr-24 sm:mr-0  text-sm  sm:text-xl mt-2 text-gray-700">Economisé par an sur vos soins</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="pb-8">
                                          <div class="p-3 sm:p-8 bg-white rounded-xl hover:shadow-xl hover:scale-105 transition-all transform duration-100">
                                            <div class="flex items-center justify-center rounded-full h-16 w-16 iconcolors3">
                                                        <svg-icon name="ic_vitesse"  original  class="h-8 w-8" />
                                            </div>
                                            <div class="mt-4">
                                              <p class="text-xl sm:text-5xl font-semibold text-black">2h</p>
                                              <p class="leading-6 sm:leading-0 w-10/12 sm:w-56 -mr-24 sm:mr-0  text-sm  sm:text-xl mt-2 text-gray-700">plus rapide aux remboursements</p>
                                            </div>
                                          </div>
                                        </div>
                                </div>
                                <div class="pt-40">
                                        <div class="pb-8">
                                          <div class="p-3 sm:p-8 bg-white rounded-xl hover:shadow-xl hover:scale-105 transition-all transform duration-100">
                                            <div class="flex items-center justify-center rounded-full h-16 w-16 iconcolors2">
                                                        <svg-icon name="ic_hour"  original  class="h-8 w-8" />
                                            </div>
                                            <div class="mt-4">
                                              <p class="text-xl sm:text-5xl font-semibold text-black">2min</p>
                                              <p class="leading-6 sm:leading-0 w-10/12 sm:w-56 -mr-24 sm:mr-0  text-sm  sm:text-xl mt-2 text-gray-700">chrono pour souscrire chez Arsen</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="pb-8">
                                          <div class="p-3 sm:p-8 bg-white rounded-xl hover:shadow-xl hover:scale-105 transition-all transform duration-100">
                                            <div class="flex items-center justify-center rounded-full h-16 w-16 iconcolors4">
                                                        <svg-icon name="ic_clinic"  original  class="h-8 w-8" />
                                            </div>
                                            <div class="mt-4">
                                              <p class="text-xl sm:text-5xl font-semibold text-black">2.5x</p>
                                              <p class="leading-6 sm:leading-0 w-4/5 sm:w-56 -mr-56 sm:mr-0  text-sm  sm:text-xl mt-2 text-gray-700">plus de cliniques et de pharmacie que la moyenne</p>
                                            </div>
                                          </div>
                                        </div>
                                </div>
                          </div>
            </div>
       </div> <!--fin-->
       <div class="borderDime absolute z-10">
         <div class="dot" :key="i" v-for="i in 19"></div>
       </div>
       <div class=" mx-5 sm:mx-48 relative z-40 sm:flex sm:justify-between">
            <div class="pt-20">
                  <img class="" src="../assets/images/png/img_carte.png"/>
            </div>
            <div  class="pt-8  sm:pt-0">
                <titre-paragraph title="Ma carte Arsen"
                text="Payer vos soins de santé directement
                dans les cliniques et pharmacies présentes
                dans le réseau de partenaires de Asen grâce à votre carte d’assurance Arsen.
                "></titre-paragraph>
            </div>
       </div><!--fin-->
       <banniere-point></banniere-point><!--fin-->
       <div class="borderDim6 hidden md:block absolute z-10">
           <div class=" dot" :key="i" v-for="i in 19"></div>
       </div>

       <div class=" mx-5 md:mx-48 relative z-40 flex justify-center">
            <div class="mr-40 hidden md:block pt-20 sm:pt-24">
                  <img class="z-10" src="../assets/images/png/img_body2.png"/>
            </div>
            <div class="pt-16 sm:pt-0 sm:pb-10">
                <titre-paragraph  class="max-w-2xl"  title="A vos côtés pour
                mieux vous protéger."
                text="Plus de garanties, moins de tracas, un service client à la hauteur de vos attentes.
                "></titre-paragraph>
            </div>
       </div><!--fin-->
       <div class="hidden md:block mx-0 absolute z-10 border-solid borderDim5 border-light-blue-500 rounded-full "></div>
       <div class="hidden md:flex mx-5 md:mx-48 md:relative md:z-40  justify-center">
            <div class="mx-20 pt-20">
                  <img class="" src="../assets/images/png/img_body4.png"/>
            </div>
            <div class="pt-20">
                  <img class="" src="../assets/images/png/img_body3.png"/>
            </div>
       </div>
       <carousel class="pt-8 hidescroll  ml-5 flex md:hidden space-x-10 overflow-scroll ">
                  <img class="" src="../assets/images/png/img_body4prim.png"/>
                  <img class="" src="../assets/images/png/img_body4prim.png"/>
                  <img class="" src="../assets/images/png/img_body4prim.png"/>
                  <slide class="mr-10"></slide>
       </carousel>
       <!--fin-->
       <div class="pt-16 ">
                  <div  class="pt-16 bg-glight sm:flex sm:flex-row-reverse">
                      <div class=" mx-5 sm:mx-48 ">
                              <p class="pt-0 sm:pt-40 max-w-5xl text-black text-center sm:text-left font-bold  size-title_pt ">L’assurance santé simple et transparente</p>
                              <div class="pt-20 sm:relative z-30 flex items-center space-x-3">
                                <a href=""><img class="" src="../assets/images/png/img_playstore.png"/></a>
                                <a href=""><img class="" src="../assets/images/png/img_appstore.png"/></a>
                              </div>
                      </div>
                      <div class="mt-20 object-contain sm:object-right mx-5 sm:ml-48 flex items-center sm:space-x-12">
                              <img class="" src="../assets/images/png/img_phone.png"/>
                      </div>
                  </div>
       </div><!--fin-->
       <div class=" mx-5 sm:mx-48  ">
            <div class="pt-16 sm:pt-20">
                  <p class="max-w-5xl text-black font-semibold size-title3">Blog</p>
            </div>
            <div class="pt-16 sm:pt-20 sm:flex justify-between sm:space-x-8">
                  <div class="">
                        <div class="">
                              <img class="" src="../assets/images/png/img_body5.png"/>
                        </div>
                        <div>
                            <titre-paragraph2 title2="Femme et santé"
                            maxw="" text2="Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, "></titre-paragraph2>
                        </div>
                  </div>
                  <div class="pt-12  sm:pt-0">
                        <div class="">
                              <img class="" src="../assets/images/png/img_body6.png"/>
                        </div>
                        <div>
                            <titre-paragraph2 title2="Femme et santé"
                            maxw=""  text2="Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, "></titre-paragraph2>
                        </div>
                  </div>
                  <div class="pt-12 sm:pt-0">
                        <div class="">
                              <img class="" src="../assets/images/png/img_body7.png"/>
                        </div>
                        <div>
                            <titre-paragraph2 title2="Femme et santé"
                           maxw="" text2="Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, "></titre-paragraph2>
                        </div>
                  </div>
            </div>
            <div class=" sm:pr-5 pt-16 sm:pt-20 flex flex-col items-center justify-center">
                <a class="text-center  py-4 w-full sm:w-3/12 sm:px-24 border-2 font-semibold text-lg  sm:text-xl colorbutext rounded-full" href="#">
                  Lire tout...
                </a>
            </div>
       </div><!--fin-->
    </div>
</template>

<script>
import TitreParagraph from './titre-paragraph.vue'
import BannierePoint from './banniere-point.vue'
import TitreParagraph2 from './helper/titre-paragraph2.vue'
export default {
  name: 'body-front',
  components: {
    TitreParagraph,
    BannierePoint,
    TitreParagraph2
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/sass/variables.scss";
.hidescroll::-webkit-scrollbar{
  display: none;
}
.hidescroll{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.dot{
border-width: 5px 0 0 0;
border-style: dotted;
border-color: rgba(255, 111, 89, 0.20);
width:13%;
margin-bottom: 9px;
display:block;
}
.borderDime{
     width: 117%;
     margin-top: 131px;
   }
  @media only screen and (max-width: 600px) {
     .borderDime{
     width: 117%;
     margin-top: 90px;
   }
   }
#matrix{
width: 470px;
}
.ecart{
     padding-top:206px;
   }
   .size-title_pt{
     font-size:60px;
   }
   .borderDim{
     border-width: 5rem;
     width: 35rem;
     height: 35rem;
     border-color: rgba(13, 133, 112, 0.09);
     left: -15rem;
    /* top: -55px; */
      top: 45rem;
   }
    @media only screen and (max-width: 600px) {
      .borderDim{
        border-width: 2rem;
        width: 11rem;
        height: 11rem;
        border-color: rgba(13, 133, 112, 0.09);
        left: -4rem;
        bottom: 11rem;
      }
      .size-title_pt{
     font-size:30px;
   }
   }
   .borderDim3{
     border-width: 70px;
     width: 550px;
     height: 550px;
     border-color: rgba(13, 133, 112, 0.09);
    //  left: -206px;
    //  bottom: -25rem;
   }
   .borderDim4{
          // left: 111rem;
          // top: 101rem;
      margin-left: 98rem;
      margin-top: 3.5rem;
}
   .borderDim5{
     border-width: 70px;
     width: 400px;
     height: 400px;
     border-color: rgba(13, 133, 112, 0.09);
     left: -285px;
     top: 269rem;
   }
   .borderDim6{
     width: 117%;
     margin-top: 131px;
     margin-left: 108rem;
   }
   .iconcolors1{
     background-color: rgba(13, 133, 112, 0.09);
   }
   .iconcolors2{
     background-color: rgba(64, 123, 255, 0.09);
   }
   .iconcolors3{
     background-color: rgba(255, 111, 89, 0.09);
   }
   .iconcolors4{
     background-color: rgba(252, 209, 22, 0.2);
   }
   .carte{
     padding-top: 97px;
     padding-left: 43px;
   }
   .size-title3{
     font-size:40px;
   }
   .colorbutext{
     border-color:$gray-arsen;
     color:$gray-arsen;
   }
</style>
