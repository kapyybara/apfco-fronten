<template>
  <div class="crs-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
}
</script>

<style lang="scss" scoped>
.crs-item {
  width: inherit;
  height: inherit;
}
</style>
