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
    <body>
          <div class=" pb-16 mx-5 sm:mx-48 sm:pt-20">
                  <div class="pt-20 pb-20 text-center">
                            <p class="font-semibold text-black  titre" >Questions fréquemment posées</p>
                  </div>
                  <div :key="i" v-for="i in 7">
                        <hr class="">
                        <div class="py-8" >
                                  <div id="app" class="container mx-auto">
                                    <accordion  class="leading-8" title="Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per">
                                      <p class="pb-5 text-gray-700  ">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.</p>
                                      <p class="pb-5 text-gray-700">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
                                    </accordion>
                                  </div>
                        </div>
                        <hr>
                  </div>
          </div>
    </body>
    <div class="">
      <footer-front></footer-front>
    </div>
  </div>
</template>

<script>
import HeaderFront from '../../components/helper/header-front.vue'
import FooterFront from '../../components/helper/footer-front.vue'
import Accordion from '../../components/accordion.vue'
export default {
  name: 'index',
  components: {
    HeaderFront,
    FooterFront,
    Accordion
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/sass/variables.scss";
.back{
  background-color: #fdfdfd;
}
.titre{
      font-size: 40px
    }
@media only screen and (max-width: 600px) {
     .titre{
      font-size: 23px
    }
   }
</style>
