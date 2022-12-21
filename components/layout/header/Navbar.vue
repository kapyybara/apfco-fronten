<template>
  <nav ref="navRef" class="nav" :class="{ 'nav-show': show }" @click="closeNav">
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
  props: {
    show: { type: Boolean, default: false },
  },
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
  methods: {
    closeNav() {
      console.log('oke', this?.$refs?.navRef)
      this?.$refs?.navRef?.classList.remove('nav-show')
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
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: start;
    top: 0;
    left: 0;
    z-index: -99;
    background: #fff;
    height: 100vh;
    padding-top: 80px;
    & > a {
      width: fill;
      text-align: right;
    }
    transition: all 0.3s ease-in;
    transform: translateY(-100%);
    & > * {
      height: 48px;
    }
  }

  .nav-show {
    top: 0;
    left: 0;
    right: 0;

    bottom: 0;
    height: 100vh;
    padding-top: 80px;
    justify-content: start;
    transform: none;
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
