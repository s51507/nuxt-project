<template>
  <div :class="$style.main" class="flex items-start justify-center w-screen min-h-screen p-[50px]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss" module>
  body {
    margin: 0;
    padding: 0;
  }
  .main {
    // padding: 50px;
    color: white;
    background-color: #141414e6;
  }
</style>
