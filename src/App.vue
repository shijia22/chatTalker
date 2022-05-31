<template>
  <Header class="relative z-10" />
  <Intro />
  <section class="container mt-20 relative z-10">
    <div class="row justify-center">
      <div class="col flex flex-col items-center">
        <span class="mb-8 text-h2 font-bold">三大平台，我來搞定</span>
        <ul class="max-w-[250px]">
          <li v-for="platform in platforms" :key="platform.alt" class="flex flex-col items-center mb-6">
            <div class="mb-4"><img :src="platform.icon" :alt="platform.alt"></div>
            <span class="mb-4 text-h3 font-bold">{{ platform.name }}</span>
            <ul class="text-grey-300 text-center">
              <li v-for="(content, index) in platform.content" :key="platform.alt">{{ content }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>

<script setup>
import Header from '@/components/templates/Header.vue'
import Intro from './components/Intro.vue';
import { reactive } from 'vue';

const platforms = reactive([
  {
    name: 'Facebook Messenger',
    icon: '/messenger.png',
    alt: 'messenger',
    content: ['結合粉絲專頁，提高粉絲互動率', '有效經營品牌社群'],
  },
  {
    name: 'LINE 官方帳號',
    icon: '/line.png',
    alt: 'LINE',
    content: ['融入日常生活，精準傳遞品牌資訊', '打造個人化專屬服務']
  },
  {
    name: 'Instagram 商業帳號',
    icon: '/instagram.png',
    alt: 'instagram',
    content: ['貼近粉絲，提升品牌自然聲量', '行銷、抽獎一站完成']
  }]);
</script>
