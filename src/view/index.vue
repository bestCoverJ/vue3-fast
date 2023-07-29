<template>
  <div
    class="index-page flex flex-col absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div class="flex">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div class="flex flex-col text-lg">
      <h1>Vue3 Quick Fast</h1>
      <p class="mt-12">Quick startup framework based on vue,</p>
      <p>
        Includes
        <a
          class="mx-1"
          v-for="(plugin, pIndex) in pluginList"
          :key="pIndex"
          :href="plugin.value"
          >{{ plugin.label }}</a
        >,
      </p>
      <p>
        Use
        <a
          class="mx-1"
          v-for="(lang, lIndex) in langList"
          :key="lIndex"
          :href="lang.value"
        >
          {{ lang.label }}</a
        >.
      </p>
    </div>
  </div>
</template>

<script setup>
const pluginList = [
  {
    label: 'Axios',
    value: 'https://axios-http.com/',
  },
  {
    label: 'Pinia',
    value: 'https://pinia.vuejs.org/',
  },
  {
    label: 'Element Plus',
    value: 'https://element-plus.org/zh-CN/',
  },
  {
    label: 'Vue Router',
    value: 'https://router.vuejs.org/',
  },
]

const langList = [
  {
    label: 'JavaScript',
    value: 'https://developer.mozilla.org/',
  },
  {
    label: 'Sass',
    value: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwind CSS',
    value: 'https://tailwindcss.com/',
  },
]
</script>

<style lang="scss">
.index-page {
}
</style>
