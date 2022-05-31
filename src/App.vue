<template>
  <Header class="relative z-10" />
  <Intro />
  <Platforms />
  <Customer />
  <Feature />
</template>

<script setup>
import Header from '@/components/templates/Header.vue'
import Intro from '@/components/Intro.vue';
import Platforms from '@/components/Platforms.vue';
import Customer from '@/components/Customer.vue';
import Feature from './components/Feature.vue';
</script>
