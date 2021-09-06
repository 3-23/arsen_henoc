<template>
    <div>
        <footer class="background mt-20 pb-8">
          <div class="pt-10 mx-5 sm:mx-48 sm:flex sm:justify-between sm:space-x-40">
                          <div class="">
                                <div class="">
                                  <img class="" src="../../assets/icons/ic_arsenWhite.svg"/>
                                </div>
                                <div style="padding-top: 30px">
                                        <p class=" max-w-lg pt-5 text-white leading-8">{{ $t("hello") }}</p>
                                </div>
                                <div class="pt-8 flex items-center space-x-3">
                                    <a href="#"><img class="" src="../../assets/images/png/img_playstore.png"/></a>
                                    <a href="#"><img class="" src="../../assets/images/png/img_appstore.png"/></a>
                                    </div>
                                    <div class="">
                                        <titre-paragraph2  color="white" padtop=4 ecart3=0
                                    text2="contact@helloarsen.com"></titre-paragraph2>
                                </div>
                          </div>
                          <div class="">
                                <div class="">
                                        <titre-paragraph2  class="font-semibold"  color="white" padtop=20 ecart3=0
                                    text2="Services"></titre-paragraph2>
                                </div>
                                <div class="">
                                        <button @click="couverture()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                    text2="Couvertures"></titre-paragraph2></button>
                                </div>
                                <div class="">
                                        <button @click="engagement()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                    text2="Engagement"></titre-paragraph2></button>
                                </div>
                                <div class="">
                                        <button @click="rembourse()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                    text2="Rembourcements"></titre-paragraph2></button>
                                </div>
                                <div class="">
                                        <titre-paragraph2  color="white" padtop=2 ecart3=0
                                    text2="Blog"></titre-paragraph2>
                                </div>
                          </div>
                          <div class="">
                                <div class="">
                                        <titre-paragraph2  class="font-semibold"  color="white" padtop=20 ecart3=0
                                        text2="Sur Arsen"></titre-paragraph2>
                                </div>
                                <div class="">
                                        <button @click="quiz()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                        text2="FAQ"></titre-paragraph2></button>
                                </div>
                                     <div class="">
                                         <button @click="team()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                        text2="Dream team"></titre-paragraph2></button>
                                </div>
                                <div class="">
                                        <button @click="text()"><titre-paragraph2  color="white" padtop=2 ecart3=0
                                        text2="Conditions générales"></titre-paragraph2></button>
                                </div>
                                <div class="">
                                        <titre-paragraph2  color="white" padtop=2 ecart3=0
                                        text2="Confidentialité"></titre-paragraph2>
                                </div>
                          </div>
                          <div class="pt-5 sm:pt-0 flex">
                                <div class="bg-transparent text-white">
                                      <svg-icon name="ic_globe"  original  class="w-6 h-6" />
                                </div>
                                <div class="">
                                      <select class="bg-transparent text-white">
                                          <option value="fr"  class=" max-w-lg text-black">Français</option>
                                          <option value="en"  class=" max-w-lg text-black">English</option>
                                      </select>
                                </div>
                           </div>
                  </div>
          <div class="invisible sm:block mx-5 sm:mx-48">
                  <titre-paragraph2  color="white" padtop=0 ecart3=0
                  text2="+229 90 XX XX XX"></titre-paragraph2>
          </div>
          <hr class="mx-5 sm:mx-48">
          <div class=" mx-5 sm:mx-48">
                  <titre-paragraph2  color="white" padtop=2 ecart3=0
                  text2="Copywrite 2021 @ Arsen Assurance S.A.S"></titre-paragraph2>
          </div>
        </footer>
    </div>
</template>

<script>
import TitreParagraph2 from './titre-paragraph2.vue'
export default {
  name: 'footer-front',
  components: {
    TitreParagraph2
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
    },
    quiz () {
      this.$router.push('/questions')
    },
    team () {
      this.$router.push('/team')
    },
    text () {
      this.$router.push('/text')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.svg-fill {
  fill: transparent;
}
   .logo{
     display:inline-block;
   }
   .background{
            background-color:$green-arsen;
        }
   .bgreen{
     background-color: $green-arsen;
   }
   .cgreen:hover{
     color: $green-arsen;
   }
</style>
