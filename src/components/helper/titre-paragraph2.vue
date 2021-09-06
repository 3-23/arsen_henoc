<template>
    <div>
            <div :style='"padding-top:"+ecart3+"px"'>
                    <p :class='"max-w-"+lmax+"xl text-"+color1+" font-"+poids+""' :style='"font-size:"+tailletitre+"px"'>{{title2}}</p>
                    <p :class='" sm:w-"+maxw+" pt-1 sm:pt-"+padtop+" text-"+color+" leading-8"'>{{text2}}</p>
            </div>
    </div>
</template>

<script>
export default {
  name: 'titre-paragraph2',
  props: {
    title2: String,
    text2: String,
    color: { type: String, default: 'black' },
    padtop: { type: Number, default: 5 },
    ecart3: { type: Number, default: 30 },
    maxw: { type: String, default: 'full' },
    lmax: { type: Number, default: 5 },
    color1: { type: String, default: 'gpur' },
    poids: { type: String, default: 'bold' },
    tailletitre: { type: Number, default: 22 }
  }
}
</script>

<style >
</style>
