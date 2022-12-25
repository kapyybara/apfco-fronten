<template>
  <div class="product container">
    <h2 class="xxl-semibold">Sản Phẩm</h2>
    <span class="divider-decor"></span>
    <p class="xl-normal product__des">
      Với dây chuyền công nghệ hiện đại cùng với tay nghề nhân công ổn định,
      tinh bột sắn của công ty tự tin đáp ứng những yêu cầu về chất lượng cao và
      đảm bảo vệ sinh an toàn thực phẩm, không ảnh hưởng đến sức khỏe người tiêu
      dùng.
    </p>
      <div class="productList" ref="productListRef">
        <div  v-for="product in products" :key="product.id" class="productItem">
          <img
            class="productItem__img"
            :src="product.img"
            :alt="product.name"
          />
          <p class="productItem__name md-semibold">{{ product.name }} </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProduct',
  mounted() {
    this.$refs.productListRef.scrollBy(100, 0)
  },
  props: {
    products: {
      type: Array,
      default: () => [
        {
          id: 1,
          img: 'images/SP1.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 2,
          img: 'images/SP2.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 3,
          img: 'images/SP3.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 4,
          img: 'images/SP4.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 5,
          img: 'images/SP5.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 6,
          img: 'images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 7,
          img: 'images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 8,
          img: 'images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 9,
          img: 'images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
      ],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  padding: 6rem 0;

  @include mobile {
    padding: 3rem 1rem;

    &>* {
      margin-bottom: 1rem;
    }
  }

  &>* {
    margin-bottom: 2rem;
  }

  &>h2 {
    color: $apfco-green;
  }

  & .divider-decor {
    width: 2rem;
    height: 0.25rem;
    display: block;

    background: $apfco-red;
    border-radius: 2px;
  }

  &__des {
    width: fill;
    max-width: 48rem;
    color: #667085;
    text-align: center;
  }

  &List {
    position: relative;
    width: 100vw;

    display: flex;
    justify-content: start;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  &Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;

    scroll-snap-align: center;
    flex-shrink: 0;
    transform-origin: center center;

    &__img {
      width: 14rem;
    }

    &__name {
      text-align: center;
    }
  }

  .control {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;

    transform: translateY(-50%);

    &__item {
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(0.125rem);

      border-radius: 5rem;

      &>* {
        transform: scale(0.8);
      }
    }
  }
}

.product-carousel {
  width: 100vw !important;
}

.unactive {
  opacity: 0.3;
}

@keyframes scrollToCenter {
  0% {}

  100% {
    transform: translateX(50%);
  }
}
</style>
