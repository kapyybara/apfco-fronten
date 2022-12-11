<template>
  <nav class="nav">
    <nuxt-link
      v-for="nav in navs"
      :key="nav.name"
      class="nav__item sm-medium"
      :to="nav.path || '/'"
      :class="{
        active: routeName === nav.name,
      }"
      >{{ nav.value }}</nuxt-link
    >
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavbar',
  data() {
    return {
      navs: [
        { name: 'index', value: 'Trang chủ', path: '' },
        { name: 'AboutUs', value: 'Về chúng tôi', path: '/about-us' },
        { name: 'product', value: 'Sản phẩm', path: '/product' },
        { name: '4', value: 'Quan hệ cổ đông' },
        { name: '5', value: 'Tin tức' },
        { name: '8', value: 'Cơ hội nghề nghiệp' },
        { name: '9', value: 'Blog' },
      ],
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins/responsive';
.nav {
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__item {
    position: relative;

    height: inherit;

    padding: 0 0.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @include tablet {
      padding: 0 0.5rem;
    }
  }
}

@include mobile {
  .nav {
    display: none;
    position: absolute;
    flex-direction: column;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -99;
    background: #fff;
    & > a {
      width: fill;
      text-align: right;
    }
  }
}

.active {
  color: rgba(234, 33, 39, 1);
  position: relative;
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 4px solid rgba(234, 33, 39, 1);
  }
}
</style>
