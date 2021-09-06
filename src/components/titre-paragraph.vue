<template>
    <div>
            <div class="ecarter">
                    <p class="max-w-5xl text-black sm:text-gpur font-bold size-title2">{{title}}</p>
                    <p class="text-lg  sm:text-2xl pt-5 sm:pt-8 max-w-2xl text-justify sm:text-left text-gray-700 sm:text-black leading-7 sm:leading-10">{{text}}</p>
            </div>
    </div>
</template>

<script>
export default {
  name: 'titre-paragraph',
  props: {
    title: String,
    text: String
  }
}
</script>

<style >
   .ecarter{
     padding-top:206px;
   }
   .size-title2{
     font-size:40px;
   }
    @media only screen and (max-width: 600px) {
   .ecarter{
     padding-top:20px;
   }
   .size-title2{
     font-size:25px;
   }}
</style>
