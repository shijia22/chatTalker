<template>
  <div class="bg-[url('/svg/ball03.svg')]	bg-no-repeat ball03">
    <section class="container mt-[60px]">
      <div class="row justify-center">
        <div class="col flex flex-col items-center">
          <div class="mb-[5.5rem]">
            <span class="text-h2 lg:text-h1 leading-h2 font-bold">好評如潮</span>
          </div>
          <ul class="hidden lg:grid lg:grid-cols-3 lg:gap-4">
            <li v-for="comment in comments" :key="comment.title"
              class="mb-6 px-4 relative rounded-xl shadow-card bg-grey-100">
              <div class="absolute -top-12 w-20 rounded-full overflow-hidden"><img :src="comment.photo"
                  :alt="comment.alt"></div>
              <div class="pb-4 pt-12 border-b">
                <p>{{ comment.comment }}</p>
              </div>
              <div class="py-4">
                <p class="mb-2 font-bold leading-content">{{ comment.company }}</p>
                <div class="flex justify-between items-center">
                  <span class="leading-content">{{ comment.title }}</span>
                  <ul class="flex w-1/2 justify-between">
                    <li v-for="star in comment.star"><img src="/svg/icon_star.svg" alt=""></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul class="lg:hidden">
            <li v-for="comment in commentsMobile" :key="comment.title"
              class="mb-6 px-4 relative rounded-xl shadow-card bg-grey-100">
              <div class="absolute -top-12 w-20 rounded-full overflow-hidden"><img :src="comment.photo"
                  :alt="comment.alt"></div>
              <div class="pb-4 pt-12 border-b">
                <p>{{ comment.comment }}</p>
              </div>
              <div class="py-4">
                <p class="mb-2 font-bold leading-content">{{ comment.company }}</p>
                <div class="flex justify-between items-center">
                  <span class="leading-content">{{ comment.title }}</span>
                  <ul class="flex w-1/3 justify-between">
                    <li v-for="star in comment.star"><img src="/svg/icon_star.svg" alt=""></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ol class="w-[70px] flex justify-between">
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide-active"></li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const comments = reactive([
  {
    photo: './user01.jpg',
    alt: 'Lina 執行長',
    title: 'Lina 執行長',
    company: '清心寡慾設計公司',
    star: 5,
    comment: '原來聊天機器人可以這麼有人性！團隊非常的專業，有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。'
  },
  {
    photo: './user02.jpg',
    alt: 'Zoe 活動長',
    title: 'Zoe 活動長',
    company: 'subwhat 行銷公司',
    star: 5,
    comment: '團隊很積極的協助行銷追蹤，針對機器人進行優化，讓我們一個月內提高 10000 個追蹤者，客戶體驗回饋很正面！'
  },
  {
    photo: './user03.jpg',
    alt: 'HowBig',
    title: 'HowBig',
    company: '油土伯',
    star: 5,
    comment: '經營了好久的IG，一直無法提升粉絲數，和團隊合作後，才知道可以用聊天機器人玩這麼豐富的行銷活動！太讚拉～'
  }
])

const commentsMobile = reactive([
  {
    photo: './user01.jpg',
    alt: 'Lina 執行長',
    title: 'Lina 執行長',
    company: '清心寡慾設計公司',
    star: 5,
    comment: '原來聊天機器人可以這麼有人性！團隊非常的專業，有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。'
  }
])
</script>

<style scoped>
.ball03 {
  background-size: 150px;
  background-position: -20% 10%;
}

@media (min-width: 576px) {
  .ball03 {
    background-size: 200px;
    background-position: -10% 10%;
  }
}

@media (min-width: 1024px) {
  .ball03 {
    background-size: 250px;
    background-position: -5% 10%;
  }
}

@media (min-width: 1536px) {
  .ball03 {
    background-size: 300px;
    background-position: -10% 10%;
  }
}
</style>
