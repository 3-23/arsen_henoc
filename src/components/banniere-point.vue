<template>
    <div class="background mt-16  sm:mt-40">
        <div class="pl-5 sm:pl-32 pr-0 py-8 sm:flex justify-between items-center">
                <div class="widt mr-20">
                    <p class=" text-xl sm:text-2xl pt-8  leading-10 mt-2 text-white">Des étapes simples et intuitives pour une expérience fluide de bout en bout. </p>
                    <h1 class="pt-0 sm:pt-8 max-w-xl sm:text-5xl font-bold siz-title text-white">Comment ça marche ? </h1>
                    <div class="hidden md:flex">
                      <button> <svg-icon name="ic_left" original class="w-24"   @click="prev"  /></button>
                      <button><svg-icon name="ic_right" original class="w-24" @click="next" /></button>
                    </div>
                </div>
                <carousel :perPageCustom=[[0,1],[640,2]]  :paginationEnabled="false"  ref="carousel" class="flex items-center overflow-scroll ">
                        <slide data-index="0" class="ml-5">
                                <div class="w-p">
                                  <div class="px-5 sm:px-10 py-8 sm:py-16 bg-white rounded-3xl sm:rounded-xl">
                                    <div class="mt-4">
                                      <h1 class=" text-3xl sm:text-4xl font-bold text-black">Paiements par  tiers-payant</h1>
                                      <p class="  text-lg   sm:text-2xl pt-8 max-w-xl text-black leading-8 sm:leading-10 mt-2 ">Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. </p>
                                    </div>
                                  </div>
                                </div>
                        </slide>
                        <slide data-index="0" class="">
                                <div class="w-p">
                                  <div class="px-5 sm:px-10 py-8 sm:py-16 bg-white rounded-3xl sm:rounded-xl">
                                    <div class="mt-4">
                                      <h1 class=" text-3xl sm:text-4xl font-bold text-black">Paiements par  tiers-payant</h1>
                                      <p class="  text-lg   sm:text-2xl pt-8 max-w-xl text-black leading-8 sm:leading-10 mt-2 ">Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. </p>
                                    </div>
                                  </div>
                                </div>
                        </slide>
                        <slide data-index="1" class=" ">
                                <div class="w-p">
                                  <div class="px-5 sm:px-10 py-8 sm:py-16 bg-white rounded-3xl sm:rounded-xl">
                                    <div class="mt-4">
                                      <h1 class=" text-3xl sm:text-4xl font-bold text-black">Paiements par  tiers-payant</h1>
                                      <p class="  text-lg   sm:text-2xl pt-8 max-w-xl text-black leading-8 sm:leading-10 mt-2 ">Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. </p>
                                    </div>
                                  </div>
                                </div>
                        </slide>
                        <slide data-index="1" class=" ">
                                <div class="w-p">
                                  <div class="px-5 sm:px-10 py-8 sm:py-16 bg-white rounded-3xl sm:rounded-xl">
                                    <div class="mt-4">
                                      <h1 class=" text-3xl sm:text-4xl font-bold text-black">Paiements par  tiers-payant</h1>
                                      <p class="  text-lg   sm:text-2xl pt-8 max-w-xl text-black leading-8 sm:leading-10 mt-2 ">Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. </p>
                                    </div>
                                  </div>
                                </div>
                        </slide>
                </carousel>
                <div class="flex items-center justify-center md:hidden">
                  <button> <svg-icon name="ic_left" original class="w-20"   @click="prev"  /></button>
                  <button><svg-icon name="ic_right" original class="w-20" @click="next" /></button>
                           <!-- <a href="#to" ><img class="px-4 py-4" src="../assets/icons/ic_left.svg"/></a>
                           <a href="#overflow-scroll"><img class="px-4 py-4" src="../assets/icons/ic_right.svg"/></a> -->
                </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: '',
  components: {
    Carousel,
    Slide
  },
  methods: {
    next () {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 1)
    },
    prev () {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/sass/variables.scss";
.svg-fill {
  fill: transparent;
}
        .background{
            background-color:$green-arsen;
        }
         .siz-title{
     font-size:60px;
   }
    .w-p {
    width: 470px;
}
@media only screen and (max-width: 600px) {
         .siz-title{
     font-size:50px;
   }
   .w-p {
    width: 300px;
}
   }
// .widt{
//     width: 470px;
// }
</style>
