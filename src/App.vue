<template>
  <Header class="relative z-10" />
  <Intro />
  <Platforms />
  <Customer />
  <Feature />
  <Witness />
  <Cta />
  <Footer />
  <div class="fixed bottom-6 right-6 w-[50px] flex justify-center bg-neutral rounded-full">
    <button type="button" class="my-4 mx-4 font-wendyOne text-grey-100 text-[14px] font-black">TOP</button>
  </div>
</template>

<script setup>
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue';
import Intro from '@/components/Intro.vue';
import Platforms from '@/components/Platforms.vue';
import Customer from '@/components/Customer.vue';
import Feature from '@/components/Feature.vue';
import Cta from '@/components/Cta.vue';
import Witness from './components/witness.vue';

</script>
