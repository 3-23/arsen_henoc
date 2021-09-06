<template>
    <div>
            <svg-icon name="ic_boul1"  class="mt-40  w-40  transform rotate-180 hidden md:block mx-0  borderDim8 " original/>
            <div class=" pb-20 mx-5 sm:mx-48  flex justify-between pt-20">
                  <div class="pt-0 sm:pt-20">
                            <div class="titre leading-relaxed max-w-4xl font-semibold text-black">Nos couvertures santé adaptées pour <span class="text-gpur">vous</span> et votre  <span class="text-gpur">famille</span></div>
                            <p class="text-lg sm:text-2xl pt-8 max-w-7xl text-gray-700 font-medium leading-10">Profitez d’une couverture santé complète adaptée à vos besoins et à votre bourse. Excellent rapport qualité-prix, économisez des centaines de mille par an.</p>
                </div>
            </div><!--fin -->
            <!--VERSIONWEB -->
            <div class="hidden md:block grayback ">
                  <div class="mx-48 py-8 flex justify-between space-x-10 ">
                          <span class=" flex-none">
                                <div class=" taille rounded-lg overflow-hidden">
                                    <input id="vol" v-model="value" class="w-64 rounded-xl h-5 appearance-none
                                    bg-gray-400" type="range" min="1" max="20"/>
                              </div>
                              <label for="vol" class="text-lg text-gris font-semibold w-full flex pt-4" >{{value}} à 20ans</label>
                              <div class="pt-5">
                                <select class="form-control rounded-lg text-gris text-lg  border-gris px-8 py-2 font-medium border-2 text-center"  name="" id="">
                                  <option >Benin</option>
                                  <option>Benin</option>
                                  <option>Benin</option>
                                </select>
                              </div>
                          </span>
                          <div>
                              <p class="text-lg max-w-7xl text-gray-700 leading-10">Couverture à :</p>
                              <titre-paragraph2 padtop="0" ecart3="0" lmax="4" color1="gris" tailletitre="50" title2="60%"
                              ></titre-paragraph2>
                          </div>
                          <div class="">
                              <p class="text-center text-lg max-w-7xl text-gray-700 leading-10">Couverture à :</p>
                              <titre-paragraph2 class="text-center" padtop="0" ecart3="0" lmax="4" color1="gpur" tailletitre="50" title2="80%"
                              ></titre-paragraph2>
                              <div class="rounded-lg text-gpur text-lg  border-gpur px-8 py-2 font-medium border-2 text-center">Plus populaire</div>
                          </div>
                          <div >
                              <p class="text-lg max-w-7xl text-gray-700 leading-10">Couverture à :</p>
                              <titre-paragraph2 padtop="0" ecart3="0" lmax="4" color1="gris" tailletitre="50" title2="100%"
                              ></titre-paragraph2>
                          </div>
                  </div>
             </div>  <!--fin -->
             <div class="hidden md:flex flex-col pr-8 text-gray-700 mx-48 mt-10">
                      <div class="table-auto">
                              <div class="flex justify-between  items-center  flex-row" :key="i" v-for="i in 5">
                                <div class="flex flex-col text-center">
                                  <select class="form-select test-xl font-bold" name="">
                                    <option  value="0">SOINS COURANTS</option>
                                    <option  value="0">HOSPITALISATION</option>
                                    <option  value="1">FRAIS D’OPTIQUE</option>
                                    <option  value="0">FRAIS DENTAIRE</option>
                                    <option  value="0">AUTRES SOINS</option>
                                  </select>
                                  <div class="text-left text-xs text-blue-500" v-if="i-1=== 0">(Couverture de base)</div>
                                </div>
                                <div class="text-center my-5">XOF 2000</div>
                                <div class="text-center my-5">XOF 2000</div>
                                <div class="text-center my-5">XOF 2000</div>
                              </div>
                      </div>
            </div><!--fin -->
            <!--FIN_VERSIONWEB -->
            <!--VERSIONmobile -->
            <div class="block md:hidden   mx-5">
                    <div class="px-5 py-8  bg-white rounded-3xl sm:rounded-xl shadow-lg border-2 border-white hover:border-8 hover:border-green-400 hover:scale-105 transition-all transform duration-100">
                                    <div class="text-center mt-4">
                                      <p class="  text-lg   text-gris ">Couverture à :</p>
                                      <h1 class=" my-1 text-6xl font-bold text-gris">60%</h1>
                                    </div>
                                    <div class="flex flex-row justify-between mt-4">
                                        <div class="flex flex-col">
                                              <p class="font-semibold text-gris mt-8">SOINS  COURANTS <span class=" font-normal text-blue-500 flex flex-start taille">(Couverture de base)</span></p>
                                              <p class="font-semibold text-gris mt-8">HOSPITALISATION</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS D’OPTIQUE</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS DENTAIRE</p>
                                              <p class="font-semibold text-gris mt-8">AUTRES SOINS</p>
                                        </div>
                                        <div class="mt-10 flex flex-col">
                                              <p class="text-gris mb-10">XOF 2000</p>
                                              <span :key="i" v-for="i in 4">
                                                  <p class="text-gris mb-8">XOF 2000</p>
                                              </span>
                                        </div>
                                    </div>
                    </div>
                    <div class="px-5 py-8 mt-8   bg-white rounded-3xl sm:rounded-xl shadow-lg border-2 border-white hover:border-8 hover:border-green-400 hover:scale-105 transition-all transform duration-100">
                                    <div class="text-center mt-4">
                                      <p class="  text-lg   text-gris ">Couverture à :</p>
                                      <h1 class=" my-1 text-6xl font-bold text-gpur">80%</h1>
                                      <div class="rounded-lg text-gpur text-lg  border-gpur    py-2 font-medium border-2 text-center">Plus populaire</div>
                                    </div>
                                    <div class="flex flex-row justify-between mt-4">
                                        <div class="flex flex-col">
                                              <p class="font-semibold text-gris mt-8">SOINS  COURANTS <span class=" font-normal text-blue-500 flex flex-start taille">(Couverture de base)</span></p>
                                              <p class="font-semibold text-gris mt-8">HOSPITALISATION</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS D’OPTIQUE</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS DENTAIRE</p>
                                              <p class="font-semibold text-gris mt-8">AUTRES SOINS</p>
                                        </div>
                                        <div class="mt-10 flex flex-col">
                                              <p class="text-gris mb-10">XOF 2000</p>
                                              <span :key="i" v-for="i in 4">
                                                  <p class="text-gris mb-8">XOF 2000</p>
                                              </span>
                                        </div>
                                    </div>
                    </div>
                    <div class="px-5 py-8  mt-8 bg-white rounded-3xl sm:rounded-xl shadow-lg border-2 border-white hover:border-8 hover:border-green-400 hover:scale-105 transition-all transform duration-100">
                                    <div class="text-center mt-4">
                                      <p class="  text-lg   text-gris ">Couverture à :</p>
                                      <h1 class=" my-1 text-6xl font-bold text-gris">100%</h1>
                                    </div>
                                    <div class="flex flex-row justify-between mt-4">
                                        <div class="flex flex-col">
                                              <p class="font-semibold text-gris mt-8">SOINS  COURANTS <span class=" font-normal text-blue-500 flex flex-start taille">(Couverture de base)</span></p>
                                              <p class="font-semibold text-gris mt-8">HOSPITALISATION</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS D’OPTIQUE</p>
                                              <p class="font-semibold text-gris mt-8">FRAIS DENTAIRE</p>
                                              <p class="font-semibold text-gris mt-8">AUTRES SOINS</p>
                                        </div>
                                        <div class="mt-10 flex flex-col">
                                              <p class="text-gris mb-10">XOF 2000</p>
                                              <span :key="i" v-for="i in 4">
                                                  <p class="text-gris mb-8">XOF 2000</p>
                                              </span>
                                        </div>
                                    </div>
                    </div>
            </div>
            <!--finVERSIONmobile -->
            <div class=" mx-5 sm:mx-48  pb-16 sm:pb-20 flex pt-16 sm:pt-20">
                      <div class="pt-5  sm:pt-20">
                            <div class="max-w-7xl font-semibold text-black  titre"   >Couverture <span class="text-gpur">personalisée</span></div>
                            <p class="text-lg sm:text-2xl pt-8 max-w-7xl text-gray-700 font-medium leading-10">Décidez de comment vous voulez être assurer. Choisissez le taux de couvertures qui vous convient pour les différents soins et obtenez une couverture adaptée à vos besoins.</p>
                      </div>
            </div><!--fin -->
            <div class=" mx-5 sm:mx-48 sm:pb-10 ">
                      <div class="max-w-4xl font-semibold text-black  titre">Exemple de calcul de couverture</div>
                      <div class="sm:flex ">
                            <div class=" w-8/12 flex flex-col">
                                        <div class="pt-8  flex flex-row items-center">
                                              <div class="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                                                        <svg-icon name="ic_validate"  original  class="h-5 w-5" />
                                              </div>
                                              <p class="pl-3 text-xl text-gris font-medium">+ 60% Soin courants</p>
                                        </div>
                                         <div class="pt-8  flex flex-row items-center">
                                              <div class="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                                                        <svg-icon name="ic_validate"  original  class="h-5 w-5" />
                                              </div>
                                              <p class="pl-3 text-xl text-gris font-medium">+ 100% Frais d'optique</p>
                                        </div>
                                        <div class="pt-8  flex flex-row items-center">
                                              <div class="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                                                        <svg-icon name="ic_validate"  original  class="h-5 w-5" />
                                              </div>
                                              <p class="pl-3 text-xl text-gris font-medium">+ 80% hospitalisation</p>
                                        </div>
                                        <div class="pt-8  flex flex-row items-center">
                                              <div class="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                                                        <svg-icon name="ic_validate"  original  class="h-5 w-5" />
                                              </div>
                                              <p class="pl-3 text-xl text-gris font-medium">+ 100% Frais dentaires</p>
                                        </div>
                            </div>
                            <div class="pl-0 sm:pl-20">
                                <p class="text-lg sm:text-2xl pt-10 sm:pt-32 sm:w-2/4 text-black font-medium leading-10">Coût de l'assurance = 2600 + 1200 + 2300 + 1700 + 800
                                = 8600 FCFA / Mois soit 103 200 l'année..</p>
                            </div>
                      </div>
            </div><!--fin -->
    </div>
</template>

<script>
import TitreParagraph2 from '../helper/titre-paragraph2.vue'
// import BaseProgress from '../base-progress.vue'
export default {
  name: 'body-couv',
  components: {
    TitreParagraph2
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
.svg-fill {
  fill: transparent;
}
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
    .titre{
      font-size: 40px
    }
    .taille{
      font-size: 10px
    }
    @media only screen and (max-width: 600px) {
     .titre{
      font-size: 23px
    }
   }
    .taille{
     height:17px;
   }
   .borderDim8{
     margin-bottom: -44rem;
   }
   .grayback{
    background-color:#F9F9F9;
        }
</style>
