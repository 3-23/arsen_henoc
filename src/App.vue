<!--
App
Created at 09/04/2021 11:44
Author: Henoc ALAO
!-->
<template>
  <div class="relative" id="app">
    <transition name="router-anim" >
   <router-view/>
</transition>
  </div>
</template>

<style lang="scss">
  .router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.1s;
  opacity: 0;
}
@keyframes coming {
  from {
    transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
