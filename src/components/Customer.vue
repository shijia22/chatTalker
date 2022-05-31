<template>
  <div class="container mt-[60px]">
    <div class="row md:justify-center">
      <div class="col flex flex-col items-center">
        <div class="flex flex-col items-center">
          <span class="mb-4 text-h2 lg:text-h1 leading-h2 font-bold">任何的角色，我都能給</span>
          <p class="mb-8 md:mb-12 text-h3 lg:text-[1.25rem] leading-[1.625rem] text-center">量身打造您想要的專屬服務，幫助您迅速判斷成效、並加快決策
          </p>
        </div>
        <ul class="lg:grid lg:grid-cols-4 lg:gap-4">
          <li v-for="person in people" :key="person.name" class="mb-6 overflow-hidden rounded-xl shadow-card-mobile">
            <div class=""><img :src="person.icon" :alt="person.alt"></div>
            <div class="flex flex-col items-center py-4 px-6 min-h-[128px]">
              <span class="mb-4 font-bold text-neutral leading-6">{{ person.name }}</span>
              <ul class="flex flex-col items-center rounded-b-2xl">
                <li v-for="list in person.desc" :key="list">{{ list }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const people = reactive([
  {
    name: '活動主',
    icon: '/svg/ch01.svg',
    alt: '活動主',
    desc: ['用戶數位足跡掌握在手', '精準取得客戶輪廓，提供分析'],
  },
  {
    name: '創作者',
    icon: '/svg/ch02.svg',
    alt: '創作者',
    desc: ['自由設計互動腳本', '輕鬆整合各項數據'],
  },
  {
    name: '企業品牌',
    icon: '/svg/ch03.svg',
    alt: '企業品牌',
    desc: ['多元資料整合，做出服務差異化', '幫助企業加速決策'],
  },
  {
    name: '其他',
    icon: '/svg/ch04.svg',
    alt: '其他',
    desc: ['創造更多可能...']
  }
])
</script>
