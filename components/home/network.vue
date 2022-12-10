<template>
  <div class="container network">
    <img src="images/network-map.png" alt="mạng lưới apfco" />
    <div class="network__content">
      <h2 class="md-semibold">Mạng lưới APFCO</h2>
      <span class="divider-decor"></span>
      <p class="network__des xl-normal">
        APFCO sở hữu hệ thống các nhà máy hiện đại từ Duyên hải Nam Trung Bộ,Tây
        Nguyên đến Đông Nam Bộ, bao gồm: có 12 đơn vị trực thuộc, 6 công ty con
        và 1 công ty liên kết. Vị trí nhà máy được phân bổ gần kề các vùng
        nguyên liệu, giúp tối ưu trong khâu vận chuyển & đảm bảochất lượng của
        nguyên liệu.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNetwork',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.network {
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100vw;
    z-index: -99;

    background: url('/images/network-decor.png'),
      linear-gradient(11.23deg, #86c146 7.11%, #00a44e 100.22%);
    background-repeat: no-repeat;
    background-size: contain;
  }

  & > img {
    width: 50%;
  }

  &__content {
    padding-left: 2rem;
    color: #fff;

    & > * {
      margin-bottom: 2rem;
    }

    & > h2 {
    }

    & .divider-decor {
      width: 2rem;
      height: 0.25rem;
      display: block;

      background: $apfco-red;
      border-radius: 2px;
    }

    &__des {
      width: 48rem;
      text-align: center;
    }
  }
}
</style>
