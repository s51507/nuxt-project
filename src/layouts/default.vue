<template>
  <div :class="$style.main">
    <!-- <AppHeader /> -->
    <slot />
    <!-- <AppFooter /> -->
  </div>
</template>
<style lang="scss" module>
  .main {
    width: 1000px;
  }
</style>