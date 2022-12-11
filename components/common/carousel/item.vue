<template :v-slot="index">
  <div class="crs__item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {},
}
</script>

<style lang="scss" scoped>
.crs__item {
}
</style>
