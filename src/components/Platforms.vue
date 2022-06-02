<template>
  <div class="bg-[url('/svg/ball01.svg')]	bg-no-repeat ball01">
    <section class="container mt-20 relative z-10">
      <div class="row justify-center">
        <div class="col flex flex-col items-center">
          <span class="mb-8 lg:mb-12 text-h2 lg:text-h1 font-bold">三大平台，我來搞定</span>
          <ul class="lg:grid lg:grid-cols-3 lg:gap-32">
            <li v-for="platform in platforms" :key="platform.alt" class="flex flex-col items-center mb-6">
              <div class="mb-4 lg:mb-6 w-[60px] lg:w-auto"><img :src="platform.icon" :alt="platform.alt"></div>
              <span class="mb-4 lg:mb-6 text-center text-h3 lg:text-[1.5rem] font-bold">{{ platform.name }}</span>
              <ul class="lg:flex lg:flex-col lg:items-center text-grey-300 text-center">
                <li v-for="(content, index) in platform.content" :key="platform.alt">{{ content }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const platforms = reactive([
  {
    name: 'Facebook Messenger',
    icon: './messenger.png',
    alt: 'messenger',
    content: ['結合粉絲專頁，提高粉絲互動率', '有效經營品牌社群'],
  },
  {
    name: 'LINE 官方帳號',
    icon: './line.png',
    alt: 'LINE',
    content: ['融入日常生活，精準傳遞品牌資訊', '打造個人化專屬服務']
  },
  {
    name: 'Instagram 商業帳號',
    icon: './instagram.png',
    alt: 'instagram',
    content: ['貼近粉絲，提升品牌自然聲量', '行銷、抽獎一站完成']
  }]);
</script>

<style scoped>
.ball01 {
  background-size: 150px;
  background-position: -25% 10%;
}

@media (min-width: 640px) {
  .ball01 {
    background-size: 150px;
    background-position: -15% 10%;
  }
}

@media (min-width: 576px) {
  .ball01 {
    background-size: 250px;
  }
}

@media (min-width: 1536px) {
  .ball01 {
    background-size: 300px;
    background-position: -10% 0%;
  }
}
</style>
