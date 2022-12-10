<template>
  <div class="banner">
    <common-carousel>
      <common-carousel-item>
        <div class="banner-item container">
          <div class="banner-item__content lg-semibold">
            <p>APFCO khánh thành công ty con thứ 2 tại Lào</p>
            <common-button value="Liên hệ ngay" />
          </div>
          <div class="banner-item__img">
            <img src="images/banner-1.png" alt="" />
          </div>
        </div>
      </common-carousel-item>
    </common-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style lang="scss" scoped>
.banner {
  width: fill;
  height: 34rem;
}

.banner-item {
  position: relative;
  height: inherit;
  &::before {
    content: '';
    background: linear-gradient(
      88.39deg,
      #007a00 -17.03%,
      rgba(88, 79, 0, 0) 58.3%
    );

    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: inherit;
    overflow: hidden;
    z-index: -1;

    transform: translate(-50%, -50%);
  }

  &__content {
    position: absolute;
    top: 50%;
    right: 50%;

    transform: translateY(-50%);

    width: 50%;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    & > p {
      margin-bottom: 34px;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: inherit;
    overflow: hidden;
    z-index: -9;

    transform: translate(-50%, -50%);
    object-fit: cover;
  }
}
</style>
