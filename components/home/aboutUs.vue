<template>
  <div class="aboutus container">
    <div class="aboutus__decor">
      <img src="images/about-us.png" alt="" />
    </div>
    <div class="aboutus__content">
      <h2 class="md-semibold">Về chúng tôi</h2>
      <span></span>
      <p class="xl-normal">
        Kể từ tháng 12/2003, thương hiệu APFCO đã và đang được nhiều đơn vị
        khách hàng trên thị trường trong và ngoài nước đón nhận bởi chất lượng
        sản phẩm (nguồn nguyên liệu tươi, sản phẩm bột đạt tiêu chuẩn khắt khe,
        bảo quản trong môi trường chuyên nghiệp), áp dụng kĩ thuật - công nghệ
        tiên tiến (ISO 9001:2015), khẳng định uy tín lâu dài.
      </p>
      <common-button value="Tìm hiểu thêm" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.aboutus {
  position: relative;
  height: 680px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100vw;
    height: 80%;
    z-index: -9;

    background: linear-gradient(
        180deg,
        #ffffff 11.46%,
        rgba(255, 255, 255, 0) 100%
      ),
      url('/images/aboutus-bg.png');
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;
  }

  &__decor {
    width: 50%;
  }
  &__content {
    padding-left: 4rem;
    width: 50%;

    & > * {
      margin-bottom: 2rem;
    }

    & > h2 {
      color: $apfco-green;
    }

    & > span {
      width: 2rem;
      height: 0.25rem;
      display: block;

      background: $apfco-red;
      border-radius: 2px;
    }

    & > p {
      color: #667085;
    }
  }
}
</style>
