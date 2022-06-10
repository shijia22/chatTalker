<template>
  <section>
    <div class="container mt-[60px]">
      <div class="row justify-center">
        <div class="col lg:flex lg:flex-row-reverse lg:items-center">
          <div class="flex flex-col items-center lg:items-start">
            <span class="mb-4 text-h2 lg:text-h1 leading-h2 font-bold text-center lg:text-left">快速了解客戶輪廓<p>建立品牌流量池</p></span>
            <span class="mb-4 md:mb-6 text-h3 lg:text-[1.25rem] leading-[1.625rem] text-center lg:text-left">
              <p>深入用戶日常，成為用戶貼身好友</p>
              <p>精準傳遞品牌資訊，打造個人化專屬服務</p>
              <p>不知不覺深入用戶生活，成為用戶貼心的好朋朋:D</p>
            </span>
            <button type="button"
              class="px-8 py-2 mb-8 rounded-[22px] bg-neutral text-grey-100 text-content">方案費用</button>
          </div>
          <ul class="mx-[3.75rem] lg:mr-[8.625rem] lg:ml-0 md:grid md:grid-cols-2 md:gap-12">
            <li v-for="feature in features" :key="feature.name"
              class="mb-6 pt-8 px-6 pb-4 overflow-hidden rounded-xl shadow-card">
              <div class="w-[85px] mb-6 p-4 rounded-full shadow-card"><img :src="feature.icon" :alt="feature.alt"
                  class="w-full"></div>
              <div class="flex flex-col min-h-[128px]">
                <span class="mb-4 font-bold text-h3 leading-6">{{ feature.name }}</span>
                <ul class="flex flex-col rounded-b-2xl">
                  <li v-for="list in feature.desc" :key="list">{{ list }}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const features = reactive([
  {
    name: '無敵轉換術',
    icon: './svg/icon01.svg',
    alt: '無敵轉換術',
    desc: ['精準掌握客群來源', '分析用戶轉化流程'],
  },
  {
    name: '一站式訊息中心',
    icon: './svg/icon02.svg',
    alt: '一站式訊息中心',
    desc: ['整合Messenger、LINE和IG三大平台訊息'],
  },
  {
    name: '聊天機器人',
    icon: './svg/icon03.svg',
    alt: '聊天機器人',
    desc: ['66款聊天機器人模組', '自由設計聊天流程'],
  },
  {
    name: '群發訊息',
    icon: './svg/icon04.svg',
    alt: '群發訊息',
    desc: ['自由選定特定受眾', '精準推送群發訊息']
  }
])
</script>
