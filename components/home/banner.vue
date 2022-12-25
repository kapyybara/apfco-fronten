<template>
  <div class="banner">
    <common-carousel :length="5" :step="100" unit="vw">
      <div class="banner-item">
        <div class="container decor">
          <div class="banner-item__content lg-semibold">
            <p>APFCO khánh thành công ty con thứ 2 tại Lào</p>
            <common-button value="Liên hệ ngay" />
          </div>
          <div class="banner-item__img">
            <img src="images/banner-1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="banner-item">
        <div class="container">
          <div class="banner-item__img">
            <img src="https://lh3.google.com/u/0/d/1GPxGIUpKiUBxlaqTKELCtiHFYy_1BpiM=w1870-h954-iv1" alt="" />
          </div>
        </div>
      </div>
      <div class="banner-item">
        <div class="container">
          <div class="banner-item__img">
            <img src="https://lh3.google.com/u/0/d/1kFZQ50t-35qRV2dsSvmD2y2_fRU7-lEj=w1870-h654-iv1" alt="" />
          </div>
        </div>
      </div>
      <div class="banner-item">
        <div class="container">
          <div class="banner-item__img">
            <img src="https://lh3.google.com/u/0/d/1HysdRXytF6iT4lLumBzuHD02oibW26Rt=w1870-h654-iv1" alt="" />
          </div>
        </div>
      </div>
      <div class="banner-item">
        <div class="container">
          <div class="banner-item__img">
            <img src="https://lh3.google.com/u/0/d/1OfNZeChp23Br6ZcPyMvCjRl1xFd91oax=w1870-h654-iv1" alt="" />
          </div>
        </div>
      </div>
    </common-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins/responsive';
.banner {
  width: fill;
  height: 34rem;
}

.container {
  height: 600px;
  position: relative;

}

.decor {
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
}

.banner-item__content {
  @include mobile {
    & > p {
      padding: 0 4rem;
    }
    & > button {
      display: none;
    }
  }
}
.container {
  @include mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.banner-item {
  position: relative;
  height: inherit;
  width: 100vw;

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

    @include mobile {
      position: relative;
      margin: 0 auto;
      /* right: 0; */
      transform: none;
      top: 0;
      right: 0;
      width: -webkit-fill-available;
      text-align: center;
      display: flex;
      align-items: center;
      padding: 1rem;
    }

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
    &> img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    transform: translate(-50%, -50%);
    object-fit: cover;
  }
}
</style>
