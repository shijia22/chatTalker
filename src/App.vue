<template>
  <Header class="relative z-10" />
  <Intro />
  <Platforms />
  <Customer />
  <Feature />
  <Footer />
</template>

<script setup>
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue';
import Intro from '@/components/Intro.vue';
import Platforms from '@/components/Platforms.vue';
import Customer from '@/components/Customer.vue';
import Feature from './components/Feature.vue';
</script>
