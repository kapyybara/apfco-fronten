<template>
  <button class="button bg-red md-medium">{{ value }}</button>
</template>

<script>
export default {
  name: 'CommonButton',
  props: {
    value: {
      type: String,
      default: 'click me!',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';
.button {
  outline: none;
  padding: 0.625rem 1.125rem;
  border: none;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease-in;
  @include tablet {
    padding: 8px 14px;
  }

  &:hover {
    filter: brightness(1.1);
  }
}
.bg-red {
  background: $apfco-red;
  color: #fff;
  border: 1px solid $apfco-red;
}
</style>
