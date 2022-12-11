<template>
  <nav class="nav">
    <nuxt-link class="nav__item sm-medium active" to="#">Trang chủ </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#">Về chúng tôi </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#">Sản phẩm </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#">Quan hệ cổ đông </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#">Tin tức </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#"
      >Cơ hội nghề nghiệp
    </nuxt-link>
    <nuxt-link class="nav__item sm-medium" to="#">Blog</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavbar',
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
