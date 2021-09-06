<template>
    <div>
         <header class="arriere"  v-bind:class="{'bg-white' : showModal}">
            <nav class="flex justify-center py-4">
               <div class="flex items-center  w-4/5 justify-between ">
                  <div class="flex items-center">
                    <button @click="accueil()"><svg-icon  name="ic_arsen" original class="w-10  sm:w-16"/></button>
                    <button @click="accueil()"><p class="text-gpur font-medium px-1 text-2xl  sm:text-4xl">arsen</p></button>
                  </div>
                  <div class="pt-2 block sm:hidden">
                     <button v-if="!showModal" id="show-modal" @click="showModal = !showModal"><svg-icon name="ic_menu" original class="w-8"/></button>
                     <button v-if="showModal" id="show-modal" @click="showModal = !showModal"><svg-icon name="ic_delete" original class="w-8"/></button>
                  </div>
                  <div class="hidden sm:flex items-center space-x-8">
                    <button class="p-3 text-black font-medium cgreen hover:text-white transition-all transform duration-100 " @click="couverture()">Couvertures</button>
                    <button class="p-3 text-black font-medium cgreen hover:scale-10 hover:text-white transition-all transform duration-100 " @click="rembourse()">Remboursements</button>
                    <button class="p-3 text-black font-medium cgreen hover:scale-10 hover:text-white transition-all transform duration-100 " @click="engagement()">Engagement</button>
                    <button class="p-3 font-medium rounded-full  bgreen text-white hover:scale-10 transition-all transform duration-100 " @click="accueil()">Je veux m’assurer</button>
                  </div>
               </div>
            </nav>
            <transition  name="router-anim">
                <div v-if="showModal" @close="showModal = false"  class="shadow-lg  w-full fixed  z-10 flex-reverse  block items-center sm:hidden bg-white p-6">
                        <!-- <transition name="fade"><button class="w-full flex justify-end text-xl text-gpur" id="show-modal" @click="showModal = false"><svg-icon  name="ic_delete" original class="w-8"/></button> </transition> -->
                        <div  class="flex justify-center py-3"><button class="router-anim router-anim  text-gpur font-medium cgreen hover:text-white transition-all transform duration-100 " @click="couverture()">Couvertures</button></div>
                        <div class="flex justify-center py-3"><button class="router-anim  p-3 text-black font-medium cgreen hover:scale-10 hover:text-white transition-all transform duration-100 " @click="rembourse()">Remboursements</button></div>
                        <div class="flex justify-center py-3"><button class="router-anim  p-3 text-black font-medium cgreen hover:scale-10 hover:text-white transition-all transform duration-100 " @click="engagement()">Engagement</button></div>
                        <div class="flex justify-center   py-5"><button class="router-anim  p-3 font-medium rounded-full  bgreen text-white hover:scale-10 transition-all transform duration-100 " @click="accueil()">Je veux m’assurer</button></div>
                </div>
            </transition>
         </header>
    </div>
</template>

<script>
export default {
  name: 'header-front',
  // methods: {
  //   greet: function (event, nav ,content) {
  //     alert('Bonjour' + this.name + ' !')
  //     if (nav) {
  //       content.classList.toggle('hidden')
  //     }
  //   }
  // }
  template: '#modal-template',
  data () {
    return {
      showModal: false,
      activeClass: 'active',
      blanc: 'bg-white',
      vert: 'bg-green'
    }
  },
  methods: {
    accueil () {
      this.$router.push('/')
    },
    couverture () {
      this.$router.push('/couverture')
    },
    rembourse () {
      this.$router.push('/rembourse')
    },
    engagement () {
      this.$router.push('/engagement')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/style/sass/variables.scss";
.router-anim-enter-active {
  animation: coming 0.2s ease-in-out;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s ease-in-out;
  opacity: 0;
}
@keyframes coming {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
    opacity: 1;
  }
}
   .logo{
     display:inline-block;
   }
   .bgreen{
     background-color: $green-arsen;
   }
   .cgreen:hover{
     color: $green-arsen;
   }
   .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .animated.faster {
        -webkit-animation-duration: 500ms;
        animation-duration: 500ms;
      }
      .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
      }
      .fadeOut {
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
</style>
