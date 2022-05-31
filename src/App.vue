<template>
  <Header class="relative z-10" />
  <Intro />
  <Platforms />
  <Customer />
  <Feature />
  <section class="container mt-[3.75rem] bg-[url('/svg/footer_sm.svg')] xs:hidden bg-contain bg-no-repeat">
    <div class="row justify-center">
      <div class="col mb-[3.75rem] mt-[320px] text-center">
        <h3 class="mb-6 text-2xl md:text-h1 font-bold">\ 美好用戶體驗，從對話開始 /</h3>
        <button type="button" class="px-8 py-2 mb-8 rounded-[22px] bg-neutral text-grey-100 text-content">方案費用</button>
      </div>
    </div>
  </section>
  <section class="mt-[6.25rem] bg-[url('/svg/home_footer.svg')] hidden xs:flex bg-contain bg-no-repeat bg-center">
    <div class="container">
      <div class="row justify-center">
        <div class="col mb-[3.75rem] mt-[320px] text-center">
          <h3 class="mb-6 text-2xl font-bold">\ 美好用戶體驗，從對話開始 /</h3>
          <button type="button" class="px-8 py-2 mb-8 rounded-[22px] bg-neutral text-grey-100 text-content">方案費用</button>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue';
import Intro from '@/components/Intro.vue';
import Platforms from '@/components/Platforms.vue';
import Customer from '@/components/Customer.vue';
import Feature from '@/components/Feature.vue';
</script>
