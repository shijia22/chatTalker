<template>
  <section class="container py-8 flex flex-col">
    <div class="row flex-col">
      <div class="col md:grid md:grid-cols-2 md:items-center md:gap-[80px]">
        <div class="relative z-10">
          <h2 class="mb-2 text-neutral leading-6 font-bold md:text-h3">ChatTalker 最全面的聊天機器人</h2>
          <span class="mb-4 text-h1 md:text-5xl md:leading-[4.375rem] leading-h1 font-bold">你愛我像誰？<br />扮演什麼角色我都會</span>
          <h3 class="mb-8 md:mb-0 md:mt-4 text-content md:text-[1.25rem] leading-content">
            Facebook、Instagram、LINE 聊天機器人解決方案
          </h3>
        </div>
        <div class="flex justify-center md:justify-end">
          <img src="/svg/bg_1.svg" alt="bg" class="w-full md:hidden">
          <div class="absolute md:flex md:static">
            <div class="relative top-0 z-10">
              <img src="/svg/bg_1_1.svg" alt="person" class="w-[312px] md:w-[532px]">
            </div>
            <div class="absolute top-0 right-0 hidden md:flex yellow-bg">
              <img src="/svg/bg_home.svg" alt="bg" class="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.yellow-bg {
  height: 45%;
}

@media (min-width: 576px) {
  .yellow-bg {
    height: 55%;
  }
}

@media (min-width: 1024px) {
  .yellow-bg {
    height: 65%;
  }
}

@media (min-width: 1536px) {
  .yellow-bg {
    height: 70%;
  }
}

</style>
