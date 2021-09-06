<template>
    <div  class="mx-5 sm:mx-48 flex-col sm:flex-row">
            <div class="sm:absolute z-40 ecarte">
                    <p class="max-w-5xl text-gpur text-center sm:text-left font-bold  size-title ">L’assurance santé simple et transparente</p>
                    <p class="hidden md:block  sm:text-left text-2xl sm:pt-8 sm:max-w-4xl text-black leading-10">Chez Arsen, nous pensons que se protéger et protéger sa famille avec une assurance maladie de qualité devrait être facile et abordable.</p>
                    <div class="ecart33 sm:relative z-30 flex items-center space-x-3">
                      <a href=""><img class="" src="../assets/images/png/img_playstore.png"/></a>
                      <a href=""><img class="" src="../assets/images/png/img_appstore.png"/></a>
                    </div>
            </div>
            <div class="ecarte2 sm:relative z-30 flex items-center sm:space-x-12">
                    <img class="object-contain sm:object-right -ml-24 sm:ml-0 sm:h-screen w-screen" src="../assets/images/png/img_caroussel.png"/>
            </div>
    </div>
</template>

<script>
export default {
  name: 'caroussel-front'
}
</script>

<style >
   .ecarte{
     padding-top:206px;
   }
   .size-title{
     font-size:70px;
   }
   .ecarte2{
     text-align:unset;
   }
   .ecart33{
     text-align:unset;
   }
   @media only screen and (max-width: 600px) {
   .size-title{
     font-size:30px;
   }
   .ecarte{
     padding-top:11.5vh;
   }
   .ecarte2{
     padding-top:7vh;
   }
   .ecart33{
     padding-top:10vh;
   }
}

</style>
