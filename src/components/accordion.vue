<template>
    <div class="">
                <div class="tab__header">
                    <a href="#" class="tab__link p-4 bg-white hover:bg-blue-darker no-underline text-black border-b-2 border-white flex justify-between" @click.prevent="active = !active">
                        <strong>{{title}}</strong>
                        <span class="down-Arrow" v-show="!active">&#9660;</span>
                        <span class="up-Arrow" v-show="active">&#9650;</span>
                    </a>
                </div>
                <div class="tab__content p-2" v-show="active"><slot /></div>
            </div>
</template>

<script>
export default {
  name: 'accordion',
  props: [
    'title'
  ],
  data () {
    return {
      active: false
    }
  }
}
</script>

<style >
   .ecart{
     padding-top:206px;
   }
   .size-title{
     font-size:70px;
   }
</style>
