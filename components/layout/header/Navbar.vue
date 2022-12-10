<template>
  <nav class="nav">
    <nuxt-link class="nav__item md-medium active" to="#">Trang chủ </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#">Về chúng tôi </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#">Sản phẩm </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#">Quan hệ cổ đông </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#">Tin tức </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#"
      >Cơ hội nghề nghiệp
    </nuxt-link>
    <nuxt-link class="nav__item md-medium" to="#">Blog</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavbar',
}
</script>

<style lang="scss" scoped>
.nav {
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__item {
    position: relative;

    height: inherit;

    padding-left: 1rem;
    padding-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
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
